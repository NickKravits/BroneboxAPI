// CronTab | Каждые 10 минут помечает FAILED те Payment в статусе PENDING, у которых уже
// истекла ссылка на оплату (linkExpiresAt в прошлом) — по такой ссылке всё равно нельзя
// оплатить. Платёж не удаляется: если Точка вдруг пришлёт по нему webhook уже после того,
// как мы его списали, returnTochkaFailedPayment автоматически вернёт гостю деньги
// (см. src/services/tochkaRefund.js и обработку вебхука в src/routes/webhook/index.js).
//
// Оформлено как fastify-plugin и регистрируется ДО fastify.listen() — addHook нельзя
// вызывать после того, как инстанс уже слушает порт (FST_ERR_INSTANCE_ALREADY_LISTENING).
// Сам первый запуск и setInterval откладываем на onReady, чтобы fastify.prisma точно
// был декорирован к этому моменту, независимо от порядка регистрации плагинов.
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
