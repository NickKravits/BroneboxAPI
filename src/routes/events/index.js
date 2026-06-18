module.exports = async (fastify) => {
    fastify.get('/events', async (req, reply) => {
        await req.jwtVerify()

        const userId = req.user.id
        const user = await fastify.prisma.user.findUnique({
            where: { id: userId },
            select: { cabinet: true }
        })
        if (!user) return reply.status(404).send()

        const cabinetId = user.cabinet

        reply.hijack()
        reply.raw.writeHead(200, {
            'Content-Type':            'text/event-stream',
            'Cache-Control':           'no-cache',
            'Connection':              'keep-alive',
            'X-Accel-Buffering':       'no',
            'Access-Control-Allow-Origin': '*'
        })
        reply.raw.flushHeaders()

        if (!fastify.sseClients.has(cabinetId)) {
            fastify.sseClients.set(cabinetId, new Set())
        }
        fastify.sseClients.get(cabinetId).add(reply.raw)

        const ping = setInterval(() => {
            reply.raw.write(': ping\n\n')
        }, 30000)

        req.raw.on('close', () => {
            clearInterval(ping)
            fastify.sseClients.get(cabinetId)?.delete(reply.raw)
        })

        await new Promise(() => {})
    })
}