'use strict'

module.exports = async (fastify) => {

    // GET /payments/getbybooking?bookingId=X
    fastify.get('/getbybooking', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const bookingId = parseInt(req.query.bookingId)

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
                where: { bookingId, cabinetid: user.cabinet },
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
                select: { id: true, amount: true, prepayment: true }
            })
            if (!booking) return reply.status(404).send({ error: 'Бронирование не найдено' })

            const numAmount = parseFloat(amount)
            if (isNaN(numAmount) || numAmount < 0) {
                return reply.status(400).send({ error: 'Сумма должна быть не менее 0' })
            }

            const maxAmount = Math.max(0, (booking.amount || 0) - (booking.prepayment || 0))
            if (numAmount > maxAmount) {
                return reply.status(400).send({ error: `Сумма не может превышать ${maxAmount}` })
            }

            const payment = await fastify.prisma.payment.create({
                data: {
                    cabinetid: user.cabinet,
                    bookingId: parseInt(bookingId),
                    amount:    numAmount,
                    type:      'PAY',
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
}
