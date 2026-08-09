const fp = require('fastify-plugin')
const webpush = require('web-push')

module.exports = fp(async (fastify) => {
  const publicKey  = process.env.VAPID_PUBLIC_KEY
  const privateKey = process.env.VAPID_PRIVATE_KEY
  const subject    = process.env.VAPID_SUBJECT

  const configured = !!(publicKey && privateKey && subject)
  if (configured) {
    webpush.setVapidDetails(subject, publicKey, privateKey)
  } else {
    fastify.log.error('VAPID_PUBLIC_KEY/VAPID_PRIVATE_KEY/VAPID_SUBJECT не заданы в .env — push-уведомления отправляться не будут')
  }

  fastify.decorate('sendPushToCabinet', async (cabinetId, payload) => {
    if (!configured) return

    const subs = await fastify.prisma.pushSubscription.findMany({
      where: { cabinetid: cabinetId }
    })
    if (!subs.length) return

    const body = JSON.stringify(payload)

    await Promise.all(subs.map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          body
        )
      } catch (err) {
        if (err.statusCode === 404 || err.statusCode === 410) {
          await fastify.prisma.pushSubscription.delete({ where: { id: sub.id } }).catch(() => {})
        } else {
          fastify.log.error(`[WebPush] Не удалось отправить уведомление (subscription ${sub.id}): ${err.message}`)
        }
      }
    }))
  })
})
