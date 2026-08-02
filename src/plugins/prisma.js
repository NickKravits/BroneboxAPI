const fp = require('fastify-plugin')
const { PrismaClient } = require('../generated/prisma/client')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb')

module.exports = fp(async (fastify) => {
  const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5,
    allowPublicKeyRetrieval: true,
    // Опционально: DB_SSL=true в .env включает TLS до БД (не влияет на текущее поведение, если не задано)
    ...(process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false' } } : {}),
  })

  // 'query' убран из логов — иначе туда попадают параметры запросов (включая bcrypt-хэши паролей)
  const prisma = new PrismaClient({ adapter, log: ['error', 'warn'] })

  fastify.decorate('prisma', prisma)

  fastify.addHook('onClose', async (instance) => {
    await instance.prisma.$disconnect()
  })
})