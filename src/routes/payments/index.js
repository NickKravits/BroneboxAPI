'use strict'

module.exports = async (fastify) => {

    // GET /payments/getbybooking?bookingId=X&type=PAY|DEPOSIT
    fastify.get('/getbybooking', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const bookingId = parseInt(req.query.bookingId)
            const type = req.query.type === 'DEPOSIT' ? 'DEPOSIT' : 'PAY'

            if (!bookingId) return reply.status(400).send({ error: 'bookingId обязателен' })

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, staff: { select: { managebooks: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            if (user.role !== 'ADMINISTRATOR') {
                if (!user.staff || user.staff.managebooks !== 'YES') {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }
            }

            const booking = await fastify.prisma.bookings.findFirst({
                where: { id: bookingId, cabinet: user.cabinet }
            })
            if (!booking) return reply.status(404).send({ error: 'Бронирование не найдено' })

            const payments = await fastify.prisma.payment.findMany({
                where: { bookingId, cabinetid: user.cabinet, type },
                orderBy: { createdAt: 'desc' }
            })

            return reply.send({ payments })
        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    // POST /payments/manualcreate
    fastify.post('/manualcreate', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { bookingId, amount } = req.body
            const type = req.body.type === 'DEPOSIT' ? 'DEPOSIT' : 'PAY'

            if (!bookingId || amount === undefined || amount === null) {
                return reply.status(400).send({ error: 'bookingId и amount обязательны' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, login: true, staff: { select: { managebooks: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            if (user.role !== 'ADMINISTRATOR') {
                if (!user.staff || user.staff.managebooks !== 'YES') {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }
            }

            const booking = await fastify.prisma.bookings.findFirst({
                where: { id: parseInt(bookingId), cabinet: user.cabinet },
                select: { id: true, amount: true, prepayment: true, deposit: true, realty_id: true }
            })
            if (!booking) return reply.status(404).send({ error: 'Бронирование не найдено' })

            const numAmount = parseFloat(amount)
            if (isNaN(numAmount) || numAmount < 0) {
                return reply.status(400).send({ error: 'Сумма должна быть не менее 0' })
            }

            // status PAID и RETURNED оба считаем — amount у платежа уже уменьшается при частичном
            // возврате (см. /manualreturn), так что RETURNED-платёж с остатком всё ещё занимает лимит
            const paidAgg = await fastify.prisma.payment.aggregate({
                where: { bookingId: parseInt(bookingId), cabinetid: user.cabinet, type, status: { in: ['PAID', 'RETURNED'] } },
                _sum: { amount: true }
            })
            const alreadyPaid = paidAgg._sum.amount || 0

            let maxAmount
            if (type === 'DEPOSIT') {
                const object = await fastify.prisma.objects.findFirst({
                    where: { realtyid: booking.realty_id, cabinetid: user.cabinet },
                    select: { deposit: true }
                })
                const objectDeposit = parseFloat(object?.deposit) || 0
                maxAmount = Math.max(0, objectDeposit - (booking.deposit || 0) - alreadyPaid)
            } else {
                maxAmount = Math.max(0, (booking.amount || 0) - (booking.prepayment || 0) - alreadyPaid)
            }

            if (numAmount > maxAmount) {
                return reply.status(400).send({ error: `Сумма не может превышать ${maxAmount}` })
            }

            const payment = await fastify.prisma.payment.create({
                data: {
                    cabinetid: user.cabinet,
                    bookingId: parseInt(bookingId),
                    amount:    numAmount,
                    type,
                    method:    'MANAGER',
                    madeBy:    user.login,
                    status:    'PAID',
                    paidAt:    new Date()
                }
            })

            return reply.send({ payment })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    // POST /payments/manualremove
    fastify.post('/manualremove', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { paymentId } = req.body

            if (!paymentId) return reply.status(400).send({ error: 'paymentId обязателен' })

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, staff: { select: { managebooks: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            if (user.role !== 'ADMINISTRATOR') {
                if (!user.staff || user.staff.managebooks !== 'YES') {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }
            }

            const payment = await fastify.prisma.payment.findFirst({
                where: { id: parseInt(paymentId), cabinetid: user.cabinet }
            })
            if (!payment) return reply.status(404).send({ error: 'Платёж не найден' })
            if (payment.method !== 'MANAGER') {
                return reply.status(403).send({ error: 'Можно удалять только платежи метода MANAGER' })
            }

            await fastify.prisma.payment.delete({ where: { id: payment.id } })

            return reply.send({ ok: true })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    // POST /payments/manualreturn — фиксируем (частичный или полный) возврат денег гостю.
    // amount у платежа уменьшается на сумму возврата (self-reducing — остаток "на руках"),
    // returnedAmount копит сумму всех возвратов, status всегда переключается на RETURNED
    fastify.post('/manualreturn', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { paymentId, amount } = req.body

            if (!paymentId || amount === undefined || amount === null) {
                return reply.status(400).send({ error: 'paymentId и amount обязательны' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, staff: { select: { managebooks: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            if (user.role !== 'ADMINISTRATOR') {
                if (!user.staff || user.staff.managebooks !== 'YES') {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }
            }

            const payment = await fastify.prisma.payment.findFirst({
                where: { id: parseInt(paymentId), cabinetid: user.cabinet }
            })
            if (!payment) return reply.status(404).send({ error: 'Платёж не найден' })

            const numAmount = parseFloat(amount)
            if (isNaN(numAmount) || numAmount <= 0) {
                return reply.status(400).send({ error: 'Сумма возврата должна быть больше 0' })
            }
            if (numAmount > payment.amount) {
                return reply.status(400).send({ error: `Сумма возврата не может превышать ${payment.amount}` })
            }

            const updated = await fastify.prisma.payment.update({
                where: { id: payment.id },
                data: {
                    amount:         payment.amount - numAmount,
                    returnedAmount: (payment.returnedAmount || 0) + numAmount,
                    returnedAt:     new Date(),
                    status:         'RETURNED'
                }
            })

            return reply.send({ payment: updated })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/getpaymentamount', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { bookingId } = req.body
            const type = req.body.type === 'DEPOSIT' ? 'DEPOSIT' : 'PAY'

            if (!bookingId) return reply.status(400).send({ error: 'bookingId обязателен' })

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            const booking = await fastify.prisma.bookings.findFirst({
                where: { id: parseInt(bookingId), cabinet: user.cabinet },
                select: { deposit: true, realty_id: true }
            })
            if (!booking) return reply.status(404).send({ error: 'Бронирование не найдено' })

            const payments = await fastify.prisma.payment.findMany({
                where: { cabinetid: user.cabinet, bookingId: parseInt(bookingId), type, status: { in: ['PAID', 'RETURNED'] } }
            })

            let depositViaTochka = false
            if (type === 'DEPOSIT' && booking.realty_id != null) {
                const object = await fastify.prisma.objects.findFirst({
                    where: { realtyid: booking.realty_id, cabinetid: user.cabinet },
                    select: { depositchanel: true }
                })
                depositViaTochka = object?.depositchanel === 'TOCHKA'
            }

            let amount = (type === 'DEPOSIT' && !depositViaTochka) ? (booking.deposit || 0) : 0
            for (const payment of payments) {
                amount += payment.amount
            }

            return reply.send({ amount })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    // POST /payments/getpaymentamounts  { bookingIds: [1,2,3], type: 'PAY'|'DEPOSIT' }
    // Батч-версия getpaymentamount — одним запросом вместо N, чтобы не устраивать
    // N параллельных запросов на список бронирований (упирается в лимит пула соединений к БД)
    fastify.post('/getpaymentamounts', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const type = req.body.type === 'DEPOSIT' ? 'DEPOSIT' : 'PAY'
            const ids = Array.isArray(req.body.bookingIds)
                ? req.body.bookingIds.map(id => parseInt(id)).filter(id => !isNaN(id))
                : []

            if (!ids.length) return reply.send({ amounts: {}, returnedAmounts: {} })

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            const amounts = {}
            const returnedAmounts = {}
            ids.forEach(id => { amounts[id] = 0; returnedAmounts[id] = 0 })

            const sums = await fastify.prisma.payment.groupBy({
                by: ['bookingId'],
                where: { cabinetid: user.cabinet, bookingId: { in: ids }, type, status: { in: ['PAID', 'RETURNED'] } },
                _sum: { amount: true, returnedAmount: true }
            })
            sums.forEach(s => {
                amounts[s.bookingId] = s._sum.amount || 0
                returnedAmounts[s.bookingId] = s._sum.returnedAmount || 0
            })

            if (type === 'DEPOSIT') {
                const bookings = await fastify.prisma.bookings.findMany({
                    where: { id: { in: ids }, cabinet: user.cabinet },
                    select: { id: true, deposit: true, returned: true, realty_id: true }
                })
                const realtyIds = [...new Set(bookings.map(b => b.realty_id).filter(id => id != null))]
                const objects = realtyIds.length ? await fastify.prisma.objects.findMany({
                    where: { realtyid: { in: realtyIds }, cabinetid: user.cabinet },
                    select: { realtyid: true, depositchanel: true }
                }) : []
                const channelByRealty = {}
                objects.forEach(o => { channelByRealty[o.realtyid] = o.depositchanel })

                // Если залог принимается через Точку — Bookings.deposit/returned не учитываем,
                // всё берётся только из Payments (см. depositViaTochka в guest/index.js)
                bookings.forEach(b => {
                    const depositViaTochka = channelByRealty[b.realty_id] === 'TOCHKA'
                    if (!depositViaTochka) {
                        amounts[b.id] = (amounts[b.id] || 0) + (b.deposit || 0)
                        returnedAmounts[b.id] = (returnedAmounts[b.id] || 0) + (b.returned || 0)
                    }
                })
            }

            return reply.send({ amounts, returnedAmounts })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })
}
