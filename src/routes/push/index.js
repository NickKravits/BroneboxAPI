module.exports = async (fastify) => {
    fastify.get('/vapid-public-key', async (req, reply) => {
        return reply.send({ publicKey: process.env.VAPID_PUBLIC_KEY || null })
    })

    fastify.post('/subscribe', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id

            const { endpoint, keys } = req.body || {}
            if (!endpoint || !keys || !keys.p256dh || !keys.auth) {
                return reply.status(400).send({ error: 'Некорректные данные подписки' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true }
            })
            if (!user) return reply.status(403).send({ error: 'Доступ запрещён' })

            await fastify.prisma.pushSubscription.upsert({
                where: { endpoint },
                update: { userId, cabinetid: user.cabinet, p256dh: keys.p256dh, auth: keys.auth },
                create: { userId, cabinetid: user.cabinet, endpoint, p256dh: keys.p256dh, auth: keys.auth }
            })

            return reply.send({ ok: true })
        } catch (err) {
            fastify.log.error(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    fastify.post('/unsubscribe', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id

            const { endpoint } = req.body || {}
            if (!endpoint) return reply.status(400).send({ error: 'endpoint обязателен' })

            await fastify.prisma.pushSubscription.deleteMany({
                where: { endpoint, userId }
            })

            return reply.send({ ok: true })
        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })
}
