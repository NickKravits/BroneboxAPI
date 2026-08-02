const bcrypt = require('bcrypt')
const { log } = require('console')
const crypto = require('crypto')

module.exports = async (fastify) => {
  fastify.post('/login', {
    config: { rateLimit: { max: 10, timeWindow: '5 minutes' } }
  }, async (req, reply) => {
    const { login, password } = req.body

    const user = await fastify.prisma.user.findUnique({
      where: {login}
    })

    if (!user) {
      return reply.status(401).send({ error: 'Неверный логин или пароль' })
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return reply.status(401).send({ error: 'Неверный логин или пароль' })
    }

    if (user.status == 'DELETED') {
      return reply.status(401).send({ error: 'Пользователь удален' })
    }

    const token = fastify.jwt.sign(
      { id: user.id, login: user.login, tokenVersion: user.tokenVersion },
      { expiresIn: '30d' }
    )

    await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Вход | Выполнен вход в аккаунт ${user.login}`
            }
        })

    return { token }
  })

  fastify.post('/register', {
    config: { rateLimit: { max: 5, timeWindow: '15 minutes' } }
  }, async (req, reply) => {
    const { login, name, administrator_key } = req.body

    if (!login || !name || !administrator_key) {
      return reply.status(400).send({ error: 'Пожалуйста, заполните все поля' })
    }

    const expectedKey = process.env.ADMIN_REGISTRATION_KEY
    if (!expectedKey) {
      fastify.log.error('ADMIN_REGISTRATION_KEY не задан в .env — регистрация новых кабинетов отключена')
      return reply.status(503).send({ error: 'Регистрация временно недоступна' })
    }

    const providedBuf = Buffer.from(String(administrator_key))
    const expectedBuf = Buffer.from(expectedKey)
    const keyValid = providedBuf.length === expectedBuf.length && crypto.timingSafeEqual(providedBuf, expectedBuf)

    if (!keyValid) {
        return reply.status(401).send({ error: 'Неверный ключ администратора' })
    }

    const findUserLogin = await fastify.prisma.user.findUnique({
        where: { login }
    })

    if (findUserLogin) {
        return reply.status(400).send({ error: 'Пользователь с таким логином уже существует' })
    }

    const cabinet = await fastify.prisma.cabinet.create({ data: {} })

    const password = crypto.randomBytes(12).toString('hex');

    const hashed = await bcrypt.hash(password, 12)

    const user = await fastify.prisma.user.create({
      data: { login, password: hashed, name, role: "ADMINISTRATOR", cabinet: cabinet.id, status: "ACTIVE" }
    })

    return reply.status(201).send({ login: login, password: password })
  })
}