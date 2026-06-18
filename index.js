require('dotenv').config()
const path = require('path') // Обязательно импортируем path!

const fastify = require('fastify')({ logger: true })

// Переписываем на require. Больше никакой await здесь не нужен, 
// Fastify сам под капотом разберется с асинхронностью.
fastify.register(require('@fastify/multipart'), {
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
})

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'src', 'uploads'),
  prefix: '/uploads/'
})

fastify.register(require('@fastify/cors'), {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
})

// Плагины
fastify.register(require('./src/plugins/prisma'))
fastify.register(require('./src/plugins/jwt'))
fastify.register(require('./src/plugins/sse'))

// Роуты
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
fastify.register(require('./src/routes/events'))

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // У Fastify уже включен logger, поэтому строку ниже можно убрать, 
  // но если очень хочется — оставляйте.
  console.log('Сервер запущен на порту 3000') 
})