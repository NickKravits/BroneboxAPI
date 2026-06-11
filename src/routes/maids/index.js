module.exports = async (fastify) => {
  // GET /maids/getall
  fastify.get('/getall', async (req, reply) => {
    try {
        await req.jwtVerify()

        const userId = req.user.id

        let haveRights = false;

        const user = await fastify.prisma.user.findUnique({
        where: { id: userId },
        select: {
            cabinet: true,
            role: true
        }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        if (user.role !== 'ADMINISTRATOR') {
            const staff = await fastify.prisma.staff.findUnique({
                where: {id: userId, cabinetid: user.cabinet},
                select: {
                    managemaids: true
                }
            })
            if (staff === null) {
                haveRights = false;
            } else {
                if (staff.managemaids === "YES") {
                    haveRights = true;
                } else {
                    haveRights = false
            }
            }
            
        } else {
            haveRights = true;
        }

        const maidsList = await fastify.prisma.maids.findMany({
        where: { 
            cabinetid: user.cabinet 
        },
            select: {
                id: true,
                name: true,
                rating: true
                }
            })

        return reply.send({ maids: maidsList, haveRights })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

    fastify.post('/create', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id

            const { name } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    role: true,
                    cabinet: true
                }
            })

            if (!user) {
                return reply.status(404).send({ error: 'Пользователь не найден' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                const staff = await fastify.prisma.staff.findUnique({
                    where: {id: userId, cabinetid: user.cabinet},
                    select: {
                        managemaids: true
                    }
                })

                if (staff === null || staff.managemaids !== "YES") {
                    return reply.status(403).send({ error: 'Недостаточно прав для создания горничной' })
                }
            }

            const newMaid = await fastify.prisma.maids.create({
                data: {
                    name,
                    cabinetid: user.cabinet
                }
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Горничные | Горничная создана ${name}`
            }
            })

            return reply.send({ message: 'Горничная успешно создана' })

        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
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
                    role: true,
                    cabinet: true
                }
            })

            if (!user) {
                return reply.status(404).send({ error: 'Пользователь не найден' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                const staff = await fastify.prisma.staff.findUnique({
                    where: {id: userId, cabinetid: user.cabinet},
                    select: {
                        managemaids: true
                    }
                })

                if (staff === null || staff.managemaids !== "YES") {
                    return reply.status(403).send({ error: 'Недостаточно прав для удаления горничной' })
                }
            }

            const maid = await fastify.prisma.maids.findUnique({
                where: { id, cabinetid: user.cabinet },
                select: {
                    id: true,
                    name: true
                }
            })

            if (!maid) {
                return reply.status(404).send({ error: 'Горничная не найдена' })
            }

            await fastify.prisma.maids.delete({
                where: { id: maid.id, cabinetid: user.cabinet}
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Горничные | Горничная удалена ${maid.name}`
            }
            })

            return reply.send({ message: 'Горничная успешно удалена' })
        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })
}