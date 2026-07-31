const fp = require('fastify-plugin')

const INTERVAL_MS = 10 * 60 * 1000

module.exports = fp(async function expireStalePaymentsPlugin(fastify) {
    async function expire() {
        try {
            const result = await fastify.prisma.payment.updateMany({
                where: {
                    status: 'PENDING',
                    linkExpiresAt: { lt: new Date() }
                },
                data: {
                    status: 'FAILED'
                }
            })
            if (result.count > 0) {
                fastify.log.info(`[CronTab] Помечено FAILED просроченных PENDING-платежей: ${result.count}`)
            }
        } catch (err) {
            fastify.log.error(`[CronTab] Ошибка обработки просроченных платежей: ${err.message}`)
        }
    }

    let timer = null

    fastify.addHook('onReady', async () => {
        expire()
        timer = setInterval(expire, INTERVAL_MS)
    })

    fastify.addHook('onClose', async () => {
        if (timer) clearInterval(timer)
    })
})
