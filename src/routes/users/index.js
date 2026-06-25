module.exports = async (fastify) => {
  // GET /users/getme
  fastify.get('/getme', async (req, reply) => {
    try {
        await req.jwtVerify()

        const userId = req.user.id

        const user = await fastify.prisma.user.findUnique({
        where: { id: userId },
        select: {
            login: true,
            tempass: true,
            name: true,
            role: true,
            cabinet: true,
            status: true
        }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        return {
            login: user.login,
            tempass: user.tempass,
            name: user.name,
            role: user.role,
            cabinet: user.cabinet,
            status: user.status
        }
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  // POST /users/update-name
  fastify.post('/update-name', async (req, reply) => {
    try {
        await req.jwtVerify()
        const { name } = req.body
        if (!name || !name.trim()) {
            return reply.status(400).send({ error: 'Имя не может быть пустым' })
        }
        const updated = await fastify.prisma.user.update({
            where: { id: req.user.id },
            data: { name: name.trim() }
        })
        return reply.send({ message: 'Имя обновлено', name: updated.name })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  // GET /users/cabinet-info
  fastify.get('/cabinet-info', async (req, reply) => {
    try {
        await req.jwtVerify()
        const user = await fastify.prisma.user.findUnique({
            where: { id: req.user.id },
            select: { cabinet: true }
        })
        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }
        const cabinet = await fastify.prisma.cabinet.findUnique({
            where: { id: user.cabinet },
            select: { id: true, Timezone: true, balance: true }
        })
        return reply.send({ cabinet })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  // POST /users/bug-report
  fastify.post('/bug-report', async (req, reply) => {
    try {
        await req.jwtVerify()
        const { message, page } = req.body
        if (!message || !message.trim()) {
            return reply.status(400).send({ error: 'Текст отчёта не может быть пустым' })
        }
        const user = await fastify.prisma.user.findUnique({
            where: { id: req.user.id },
            select: { cabinet: true }
        })
        if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

        await fastify.prisma.bugReport.create({
            data: {
                cabinetid: user.cabinet,
                userId: req.user.id,
                message: message.trim(),
                page: page || null
            }
        })
        return reply.send({ message: 'Отчёт отправлен' })
    } catch (err) {
        console.error(err)
        return reply.status(500).send({ error: 'Ошибка сервера' })
    }
  })
}