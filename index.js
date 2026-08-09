require('dotenv').config()
const path = require('path')

const fastify = require('fastify')({ logger: true })

fastify.register(require('@fastify/multipart'), {
  limits: { fileSize: 20 * 1024 * 1024 }
})

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'src', 'uploads'),
  prefix: '/uploads/'
})

// Разрешённые origin задаются через CORS_ALLOWED_ORIGINS (через запятую) в .env.
// Если не заданы — поведение как раньше (разрешены все origin), чтобы не сломать текущий деплой.
const allowedOrigins = (process.env.CORS_ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)

fastify.register(require('@fastify/cors'), {
  origin: allowedOrigins.length ? allowedOrigins : true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
})

fastify.register(require('@fastify/helmet'), {
  // CSP выключен: приложение повсеместно использует inline onclick-обработчики,
  // включение строгого CSP без предварительного рефакторинга фронтенда сломает работу кнопок.
  contentSecurityPolicy: false,
  // Фронтенд (broneboxy.ru) грузит картинки/файлы с этого API (api.broneboxy.ru) — другой origin,
  // поэтому дефолтный "same-origin" сломает показ фото объектов и чеков.
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  crossOriginEmbedderPolicy: false,
  // X-Frame-Options: SAMEORIGIN по умолчанию блокирует показ PDF-чеков в <iframe> на CRM
  // (broneboxy.ru встраивает файл с api.broneboxy.ru — другой origin). Этот сервер отдаёт
  // только JSON и статику, отдельных кликабельных страниц у него нет — кликджекинг тут не риск.
  frameguard: false
})

fastify.register(require('@fastify/rate-limit'), {
  max: 300,
  timeWindow: '1 minute'
})

fastify.setErrorHandler((err, req, reply) => {
  req.log.error(err)
  const statusCode = err.statusCode
  if (statusCode && statusCode >= 400 && statusCode < 500) {
    return reply.status(statusCode).send({ error: err.message || 'Некорректный запрос' })
  }
  return reply.status(statusCode && statusCode >= 500 ? statusCode : 500).send({ error: 'Внутренняя ошибка сервера' })
})

fastify.register(require('./src/plugins/prisma'))
fastify.register(require('./src/plugins/jwt'))
fastify.register(require('./src/plugins/sse'))

fastify.register(require('./src/routes/auth'), { prefix: '/auth' })
fastify.register(require('./src/routes/users'), { prefix: '/users' })
fastify.register(require('./src/routes/staff'), { prefix: '/staff' })
fastify.register(require('./src/routes/maids'), { prefix: '/maids' })
fastify.register(require('./src/routes/objects'), { prefix: '/objects' })
fastify.register(require('./src/routes/integration'), { prefix: '/integration' })
fastify.register(require('./src/routes/webhook'), { prefix: '/webhook' })
fastify.register(require('./src/routes/bookings'), { prefix: '/bookings' })
fastify.register(require('./src/routes/guest'), { prefix: '/guest' })
fastify.register(require('./src/routes/logs'), { prefix: '/logs' })
fastify.register(require('./src/routes/cabinet'), { prefix: '/cabinet' })
fastify.register(require('./src/routes/payments'), { prefix: '/payments' })
fastify.register(require('./src/routes/events'))

fastify.register(require('./src/cron/expireStalePayments'))

fastify.listen({ port: parseInt(process.env.PORT) || 3000, host: process.env.IP_ADDRESS || '127.0.0.1' }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Сервер запущен на http://${process.env.IP_ADDRESS || '127.0.0.1'}:${process.env.PORT || 3000}`)
})