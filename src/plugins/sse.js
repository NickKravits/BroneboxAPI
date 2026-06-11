const fp = require('fastify-plugin')

module.exports = fp(async (fastify) => {
    fastify.decorate('sseClients', new Map())

    fastify.decorate('pushToClients', (cabinetId, event, data) => {
        const clients = fastify.sseClients.get(cabinetId)
        if (!clients?.size) return

        const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
        clients.forEach(client => {
            try {
                client.write(payload)
            } catch {
                clients.delete(client)
            }
        })
    })
})