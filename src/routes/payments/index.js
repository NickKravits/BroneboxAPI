'use strict'

const { callTochkaRefund } = require('../../services/tochkaRefund')

module.exports = async (fastify) => {

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
                select: { cabinet: true, role: true, login: true, staff: { select: { manualpaymentedit: true, manualdepositedit: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            if (user.role !== 'ADMINISTRATOR') {
                const allowed = type === 'DEPOSIT' ? user.staff?.manualdepositedit === 'YES' : user.staff?.manualpaymentedit === 'YES'
                if (!allowed) {
                    return reply.status(403).send({ error: `Недостаточно прав для создания ${type === 'DEPOSIT' ? 'залога' : 'оплаты'}` })
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

    fastify.post('/manualremove', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { paymentId } = req.body

            if (!paymentId) return reply.status(400).send({ error: 'paymentId обязателен' })

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, staff: { select: { manualpaymentedit: true, manualdepositedit: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            const payment = await fastify.prisma.payment.findFirst({
                where: { id: parseInt(paymentId), cabinetid: user.cabinet }
            })
            if (!payment) return reply.status(404).send({ error: 'Платёж не найден' })
            if (payment.method !== 'MANAGER') {
                return reply.status(403).send({ error: 'Можно удалять только платежи метода MANAGER' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                const allowed = payment.type === 'DEPOSIT' ? user.staff?.manualdepositedit === 'YES' : user.staff?.manualpaymentedit === 'YES'
                if (!allowed) {
                    return reply.status(403).send({ error: `Недостаточно прав для удаления ${payment.type === 'DEPOSIT' ? 'залога' : 'оплаты'}` })
                }
            }

            await fastify.prisma.payment.delete({ where: { id: payment.id } })

            return reply.send({ ok: true })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

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
                select: { cabinet: true, role: true, staff: { select: { manualpaymentedit: true, manualdepositedit: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            const payment = await fastify.prisma.payment.findFirst({
                where: { id: parseInt(paymentId), cabinetid: user.cabinet }
            })
            if (!payment) return reply.status(404).send({ error: 'Платёж не найден' })

            if (payment.method !== 'MANAGER') {
                return reply.status(400).send({ error: 'Возврат для этого способа оплаты пока недоступен' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                const allowed = payment.type === 'DEPOSIT' ? user.staff?.manualdepositedit === 'YES' : user.staff?.manualpaymentedit === 'YES'
                if (!allowed) {
                    return reply.status(403).send({ error: `Недостаточно прав для возврата ${payment.type === 'DEPOSIT' ? 'залога' : 'оплаты'}` })
                }
            }

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

    fastify.post('/returnTochkaPayment', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { paymentId, amount } = req.body

            if (!paymentId || amount === undefined || amount === null) {
                return reply.status(400).send({ error: 'paymentId и amount обязательны' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, staff: { select: { bankpaymentedit: true, bankdepositedit: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            const payment = await fastify.prisma.payment.findFirst({
                where: { id: parseInt(paymentId), cabinetid: user.cabinet }
            })
            if (!payment) return reply.status(404).send({ error: 'Платёж не найден' })

            if (payment.method !== 'TOCHKA') {
                return reply.status(400).send({ error: 'Этот платёж принят не через Точку — используйте обычный возврат' })
            }
            if (!payment.externalId) {
                return reply.status(400).send({ error: 'У платежа нет ID операции в Точке, возврат невозможен' })
            }
            if (payment.status !== 'PAID' && payment.status !== 'RETURNED') {
                return reply.status(400).send({ error: 'Возврат возможен только для оплаченных платежей' })
            }
            if ((payment.returnedAmount || 0) > 0) {
                return reply.status(400).send({ error: 'Через Точку можно вернуть платёж только один раз — этот платёж уже был возвращён' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                const allowed = payment.type === 'DEPOSIT' ? user.staff?.bankdepositedit === 'YES' : user.staff?.bankpaymentedit === 'YES'
                if (!allowed) {
                    return reply.status(403).send({ error: `Недостаточно прав для возврата ${payment.type === 'DEPOSIT' ? 'залога' : 'оплаты'}, принятых банком` })
                }
            }

            const numAmount = parseFloat(amount)
            if (isNaN(numAmount) || numAmount <= 0) {
                return reply.status(400).send({ error: 'Сумма возврата должна быть больше 0' })
            }
            if (numAmount > payment.amount) {
                return reply.status(400).send({ error: `Сумма возврата не может превышать ${payment.amount}` })
            }

            const cabinet = await fastify.prisma.cabinet.findFirst({
                where: { id: user.cabinet },
                select: { tochkaApiKey: true }
            })
            if (!cabinet?.tochkaApiKey) {
                return reply.status(400).send({ error: 'Интеграция с Точка Банком не настроена' })
            }

            const amountStr = numAmount.toFixed(2)
            const result = await callTochkaRefund(fastify, cabinet.tochkaApiKey, payment.externalId, amountStr)

            if (!result.ok) {
                await fastify.prisma.logs.create({
                    data: {
                        cabinetid: user.cabinet,
                        status: 'ERROR',
                        message: `Точка | Не удалось вернуть платёж #${payment.id} (externalId ${payment.externalId})`
                    }
                }).catch(() => {})

                if (result.networkError) {
                    return reply.status(502).send({ error: 'Не удалось связаться с банком' })
                }
                switch (result.httpStatus) {
                    case 400:
                        return reply.status(400).send({ error: 'Код: 400. Ошибка валидации при возврате! Проверьте сумму и статус платежа в Точке.' })
                    case 403:
                        return reply.status(403).send({ error: 'Код: 403. Банк отклонил запрос на возврат.' })
                    case 404:
                        return reply.status(404).send({ error: 'Код: 404. Платёж не найден в Точке.' })
                    case 424:
                        return reply.status(424).send({ error: 'Код: 424. Возврат невозможен, попробуйте позже или свяжитесь с банком.' })
                    case 500:
                        return reply.status(500).send({ error: 'Код: 500. Ошибка на стороне банка при возврате.' })
                    default:
                        return reply.status(502).send({ error: `Неожиданный ответ от банка при возврате. Код: ${result.httpStatus}.` })
                }
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

            await fastify.prisma.logs.create({
                data: {
                    cabinetid: user.cabinet,
                    status: 'SUCCESS',
                    message: `Точка | Возврат платежа #${payment.id} на сумму ${amountStr} ₽ выполнен`
                }
            }).catch(() => {})

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

    fastify.get('/getall', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { source, status, type } = req.query

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, staff: { select: { financesinformationpayment: true, financesinformationdeposit: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            const where = { cabinetid: user.cabinet }
            if (['MANAGER', 'TOCHKA', 'TBANK'].includes(source)) where.method = source
            if (['PENDING', 'PAID', 'FAILED', 'RETURNED'].includes(status)) where.status = status
            if (['PAY', 'DEPOSIT'].includes(type)) where.type = type

            if (user.role !== 'ADMINISTRATOR') {
                const allowPay = user.staff?.financesinformationpayment === 'YES'
                const allowDeposit = user.staff?.financesinformationdeposit === 'YES'
                if (!allowPay && !allowDeposit) {
                    return reply.status(403).send({ error: 'Нет доступа к вкладке финансов' })
                }
                if (!allowPay || !allowDeposit) {
                    const allowedType = allowPay ? 'PAY' : 'DEPOSIT'
                    if (where.type && where.type !== allowedType) {
                        return reply.status(403).send({ error: 'Нет доступа к этому типу платежей' })
                    }
                    where.type = allowedType
                }
            }

            const payments = await fastify.prisma.payment.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: 300
            })

            const bookingIds = [...new Set(payments.map(p => p.bookingId))]
            const bookings = bookingIds.length ? await fastify.prisma.bookings.findMany({
                where: { id: { in: bookingIds }, cabinet: user.cabinet },
                select: { id: true, fio: true }
            }) : []
            const fioById = {}
            bookings.forEach(b => { fioById[b.id] = b.fio })

            const result = payments.map(p => ({ ...p, bookingFio: fioById[p.bookingId] || null }))

            return reply.send({ payments: result })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.get('/stats', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true, role: true, staff: { select: { financesinformationpayment: true, financesinformationdeposit: true } } }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            const since = new Date()
            since.setDate(since.getDate() - 29)
            since.setHours(0, 0, 0, 0)

            const where = {
                cabinetid: user.cabinet,
                status: { in: ['PAID', 'RETURNED'] },
                createdAt: { gte: since }
            }

            if (user.role !== 'ADMINISTRATOR') {
                const allowPay = user.staff?.financesinformationpayment === 'YES'
                const allowDeposit = user.staff?.financesinformationdeposit === 'YES'
                if (!allowPay && !allowDeposit) {
                    return reply.status(403).send({ error: 'Нет доступа к вкладке финансов' })
                }
                if (!allowPay || !allowDeposit) {
                    where.type = allowPay ? 'PAY' : 'DEPOSIT'
                }
            }

            const payments = await fastify.prisma.payment.findMany({
                where,
                select: { amount: true, method: true, createdAt: true }
            })

            const dayKey = (d) => new Date(d).toISOString().split('T')[0]
            const dailyMap = {}
            for (let i = 0; i < 30; i++) {
                const d = new Date(since)
                d.setDate(d.getDate() + i)
                dailyMap[dayKey(d)] = 0
            }
            payments.forEach(p => {
                const key = dayKey(p.createdAt)
                if (key in dailyMap) dailyMap[key] += p.amount || 0
            })
            const daily = Object.keys(dailyMap).sort().map(date => ({ date, total: dailyMap[date] }))

            const bySourceMap = { MANAGER: 0, TOCHKA: 0, TBANK: 0 }
            payments.forEach(p => { bySourceMap[p.method] = (bySourceMap[p.method] || 0) + (p.amount || 0) })
            const bySource = Object.entries(bySourceMap)
                .filter(([, amount]) => amount > 0)
                .map(([method, amount]) => ({ method, amount }))

            return reply.send({ daily, bySource })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })
}
