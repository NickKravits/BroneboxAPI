// CronTab | Каждые 10 минут помечает FAILED те Payment в статусе PENDING, у которых уже
// истекла ссылка на оплату (linkExpiresAt в прошлом) — по такой ссылке всё равно нельзя
// оплатить. Платёж не удаляется: если Точка вдруг пришлёт по нему webhook уже после того,
// как мы его списали, returnTochkaFailedPayment автоматически вернёт гостю деньги
// (см. src/services/tochkaRefund.js и обработку вебхука в src/routes/webhook/index.js).
const INTERVAL_MS = 10 * 60 * 1000

module.exports = function registerExpireStalePayments(fastify) {
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

    expire()
    const timer = setInterval(expire, INTERVAL_MS)

    fastify.addHook('onClose', async () => {
        clearInterval(timer)
    })
}
