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
}