module.exports = async (fastify) => {
  // GET /logs/get
    fastify.get('/get', async (req, reply) => {
        try {
            await req.jwtVerify()

            const userId = req.user.id

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

            const logs = await fastify.prisma.logs.findMany({
                where: { cabinetid: user.cabinet },
                orderBy: [
                    { readed: 'desc' },
                    { date: 'desc' }
                ]
            })

            return reply.send({ logs })
        } catch {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    // PATCH /logs/read
    fastify.patch('/read', async (req, reply) => {
        try {
            await req.jwtVerify()

            const userId = req.user.id
            const { ids } = req.body

            if (!Array.isArray(ids) || ids.length === 0) {
                return reply.status(400).send({ error: 'ids обязательны' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true }
            })

            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            // Обновляем только логи СВОЕГО кабинета — чужие молча игнорируются
            await fastify.prisma.logs.updateMany({
                where: {
                    id:        { in: ids },
                    cabinetid: user.cabinet,
                    readed:    'NO'          // не трогаем уже прочитанные
                },
                data: { readed: 'YES' }
            })

            return reply.send({ ok: true })
        } catch (err) {
            fastify.log.error(err)
            return reply.status(500).send({ error: 'Внутренняя ошибка сервера' })
        }
    })
}