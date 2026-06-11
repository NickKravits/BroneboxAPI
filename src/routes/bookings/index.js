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
}