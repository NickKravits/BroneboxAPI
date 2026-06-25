const crypto = require('crypto')

module.exports = async (fastify) => {
    // POST /bookings/get
    fastify.post('/get', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id

            let permissions = false

            const { object, checkin, checkout, phone } = req.body
            const where = {}

            if (object)   where.realty_id = object
            if (phone)    where.phone = { contains: phone }
            if (checkin)  where.begin_date = { gte: checkin }
            if (checkout) where.end_date   = { lte: checkout }

            const cabinet = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { 
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true
                        }
                    }
                }
            })

            if (!cabinet) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            if (cabinet.role !== 'ADMINISTRATOR') {
                if ( !cabinet.staff || cabinet.staff.managebooks !== "YES" ) {
                    permissions = false
                } else {
                    permissions = true
                }
            } else {
                permissions = true
            }

            where.cabinet = cabinet.cabinet

            const bookings = await fastify.prisma.bookings.findMany({
                where,
                orderBy: { begin_date: 'desc' }
            })

            return reply.send({ permissions, "bookings": bookings })

        } catch (err) {
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/get-by-id', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { id } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true
                        }
                    }
                }
            })

            if (!user) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                if ( !user.staff || user.staff.managebooks !== "YES" ) {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }
            }

            const booking = await fastify.prisma.bookings.findFirst({
                where: { id, cabinet: user.cabinet }
            })
            return reply.send({ booking })
        } catch (err) {
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/update', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { id, checkin, checkout, channel, maidid } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true
                        }
                    }
                }
            })

            if (!user) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                if ( !user.staff || user.staff.managebooks !== "YES" ) {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }
            }

            const data = {}

            if (checkin) data.begin_time = checkin
            if (checkout) data.end_time = checkout
            if (channel)  data.channel = channel
            if (maidid)   data.maid_id = parseInt(maidid)

            const updated = await fastify.prisma.bookings.update({
                where: { id: parseInt(id), cabinet: user.cabinet },
                data
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Бронирования | Изменена бронь ${id}`
            }
            })

            return reply.send({ updated })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/delete', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { id } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true
                        }
                    }
                }
            })

            if (!user) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                if ( !user.staff || user.staff.managebooks !== "YES" ) {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }

            }

            await fastify.prisma.bookings.delete({
                where: { id: parseInt(id), cabinet: user.cabinet }
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Бронирования | Удалена бронь ${id}`
            }
            })

            return reply.send({ success: true })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    // GET /bookings/unprocessed
    fastify.get('/unprocessed', async (req, reply) => {
        try {
            await req.jwtVerify()
            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const items = await fastify.prisma.unprocessedBooking.findMany({
                where: { cabinetid: user.cabinet, resolved: false },
                orderBy: { createdAt: 'desc' }
            })
            return reply.send({ items })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    // POST /bookings/unprocessed/resolve
    fastify.post('/unprocessed/resolve', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id, objectId } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const item = await fastify.prisma.unprocessedBooking.findFirst({
                where: { id: Number(id), cabinetid: user.cabinet, resolved: false }
            })
            if (!item) return reply.status(404).send({ error: 'Необработанная бронь не найдена' })

            const link = crypto.randomBytes(6).toString('hex')

            if (item.failReason === 'object_not_found') {
                if (!objectId) return reply.status(400).send({ error: 'Не указан объект' })

                const object = await fastify.prisma.objects.findFirst({
                    where: { id: Number(objectId), cabinetid: user.cabinet },
                    select: { realtyid: true }
                })
                if (!object) return reply.status(404).send({ error: 'Объект не найден' })

                const existing = await fastify.prisma.bookings.findFirst({
                    where: { id: item.bookingId, cabinet: user.cabinet }
                })
                if (existing) {
                    return reply.status(400).send({ error: `Бронирование #${item.bookingId} уже существует в системе` })
                }

                await fastify.prisma.bookings.create({
                    data: {
                        id: item.bookingId,
                        status: item.bookingStatus,
                        begin_date: item.beginDate,
                        end_date: item.endDate,
                        realty_id: object.realtyid,
                        amount: item.amount,
                        notes: item.notes,
                        source: item.source,
                        prepayment: item.prepayment,
                        balance_to_be_paid_1: item.balanceToBePaid,
                        price_per_day: item.pricePerDay,
                        deposit: item.deposit,
                        client_id: item.clientId,
                        fio: item.fio,
                        email: item.email,
                        phone: item.phone,
                        additional_phone: item.additionalPhone,
                        cabinet: user.cabinet,
                        link
                    }
                })
            } else if (item.failReason === 'booking_not_found') {
                const existing = await fastify.prisma.bookings.findFirst({
                    where: { id: item.bookingId, cabinet: user.cabinet }
                })
                if (existing) {
                    return reply.status(400).send({ error: `Бронирование #${item.bookingId} уже существует в системе` })
                }

                await fastify.prisma.bookings.create({
                    data: {
                        id: item.bookingId,
                        status: item.bookingStatus,
                        begin_date: item.beginDate,
                        end_date: item.endDate,
                        realty_id: item.realtyId,
                        amount: item.amount,
                        notes: item.notes,
                        source: item.source,
                        prepayment: item.prepayment,
                        balance_to_be_paid_1: item.balanceToBePaid,
                        price_per_day: item.pricePerDay,
                        deposit: item.deposit,
                        client_id: item.clientId,
                        fio: item.fio,
                        email: item.email,
                        phone: item.phone,
                        additional_phone: item.additionalPhone,
                        cabinet: user.cabinet,
                        link
                    }
                })
            } else {
                return reply.status(400).send({ error: 'Нельзя разрешить эту ошибку автоматически' })
            }

            await fastify.prisma.unprocessedBooking.update({
                where: { id: item.id },
                data: { resolved: true }
            })

            return reply.send({ message: 'Бронирование перенесено' })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })
}