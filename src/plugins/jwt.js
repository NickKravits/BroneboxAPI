const fp = require('fastify-plugin')

module.exports = fp(async (fastify) => {
  fastify.register(require('@fastify/jwt'), {
    secret: process.env.JWT_SECRET,
    trusted: async (request, decodedToken) => {
      const user = await fastify.prisma.user.findUnique({
        where: { id: decodedToken.id },
        select: { tokenVersion: true }
      })
      if (!user) return false
      if ((decodedToken.tokenVersion || 0) !== (user.tokenVersion || 0)) return false
      return decodedToken
    }
  })

  // Декоратор для защиты роутов
  fastify.decorate('authenticate', async (req, reply) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.status(401).send({ error: 'Unauthorized' })
    }
  })
})