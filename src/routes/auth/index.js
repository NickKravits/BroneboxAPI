const bcrypt = require('bcrypt')
const { log } = require('console')
const crypto = require('crypto')

module.exports = async (fastify) => {
  fastify.post('/login', async (req, reply) => {
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

    const token = fastify.jwt.sign({ id: user.id, login: user.login, tokenVersion: user.tokenVersion })

    await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Вход | Выполнен вход в аккаунт ${user.login}`
            }
        })

    return { token }
  })

  fastify.post('/register', async (req, reply) => {
    const { login, name, administrator_key } = req.body

    if (!login || !name || !administrator_key) {
      return reply.status(400).send({ error: 'Пожалуйста, заполните все поля' })
    }

    if (administrator_key == "g57h8j9k") {

        const findUserLogin = await fastify.prisma.user.findUnique({
            where: { login }
        })

        if (findUserLogin) {
            return reply.status(400).send({ error: 'Пользователь с таким логином уже существует' })
        } else {

          const cabinet = await fastify.prisma.cabinet.create({ data: {} })

          const password = crypto.randomBytes(4).toString('hex');

          const hashed = await bcrypt.hash(password, 10)

          const user = await fastify.prisma.user.create({
            data: { login, password: hashed, name, role: "ADMINISTRATOR", cabinet: cabinet.id, status: "ACTIVE" }
          })

          return reply.status(201).send({ login: login, password: password })
        }
    } else {
        return reply.status(401).send({ error: 'Неверный ключ администратора' })
    }
  })
}