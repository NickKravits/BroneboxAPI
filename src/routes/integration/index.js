const crypto = require('crypto')

module.exports = async (fastify) => {
  // GET /integration/realtycalendar
  fastify.get('/realtycalendar', async (req, reply) => {
    try {
        await req.jwtVerify()

        const userId = req.user.id

        const user = await fastify.prisma.user.findUnique({
        where: { id: userId },
        select: {
            cabinet: true,
            role: true
        }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        if (user.role !== 'ADMINISTRATOR') {
            const staff = await fastify.prisma.staff.findUnique({
                where: {id: userId, cabinetid: user.cabinet},
                select: {
                    manageintegration: true
                }
            })
            if (!staff || staff.manageintegration !== "YES") {
                return reply.status(403).send({ error: 'Недостаточно прав для доступа к этому ресурсу' })
            }
            
        }

        const realtyCalendar = await fastify.prisma.cabinet.findUnique({
            where: { id: user.cabinet },
            select: {
                realtycalendarid: true
            }
        })

        if (!realtyCalendar.realtycalendarid) {
            const webhookKey = crypto.randomBytes(16).toString('hex')
            await fastify.prisma.cabinet.update({
                where: { id: user.cabinet },
                data: { realtycalendarid: webhookKey }
            })
        }

        const finalRealtyCalendar = await fastify.prisma.cabinet.findUnique({
            where: { id: user.cabinet },
            select: {
                realtycalendarid: true
            }
        })

        return reply.send({ finalRealtyCalendar })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  fastify.get('/connected', async (req, reply) => {
    try {
        await req.jwtVerify()

        const userId = req.user.id

        let okidoki = false
        let tochka = false

        let permissions = false

        const user = await fastify.prisma.user.findUnique({
        where: { id: userId },
        select: {
            cabinet: true,
            role: true
        }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        if (user.role !== 'ADMINISTRATOR') {
            const staff = await fastify.prisma.staff.findUnique({
                where: {id: userId, cabinetid: user.cabinet},
                select: {
                    manageintegration: true
                }
            })
            if (!staff || staff.manageintegration !== "YES") {
                permissions = false
            } else {
                permissions = true
            }
            
        } else {
            permissions = true;
        }

        const cabinet = await fastify.prisma.cabinet.findUnique({
            where: { id: user.cabinet },
            select: {
                okidokiapi: true,
                tochkaapi: true,
                tochkauid: true
            }
        })

        if (cabinet.okidokiapi) {
            okidoki = true
        } else {
            okidoki = false
        }

        if (cabinet.tochkaapi && cabinet.tochkauid) {
            tochka = true
        } else {
            tochka = false
        }

        return reply.send({ okidoki, tochka, permissions })

    } catch (err) {
        console.debug(err)
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  // GET /integration/okidoki/templates
    fastify.get('/okidoki/templates', async (req, reply) => {
    try {
        await req.jwtVerify()

        const { apiKey } = req.query

        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 5000)

        const res = await fetch(`https://api.doki.online/external/templates?api_key=${apiKey}`, {
            signal: controller.signal
        })
        clearTimeout(timeout)

        if (!res.ok) {
            const text = await res.text()
            return reply.status(res.status).send({ error: text })
        }

        const data = await res.json()
        return reply.send(data)
    } catch (err) {
        if (err.name === 'AbortError') {
            return reply.status(408).send({ error: 'Таймаут запроса' })
        }
        console.debug(err)
        return reply.status(500).send({ error: 'Внутренняя ошибка сервера' })
    }
})

// GET /integration/okidoki/entities
    fastify.get('/okidoki/entities', async (req, reply) => {
    try {
        await req.jwtVerify()

        const { apiKey, templateId } = req.query

        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 1000)

        const res = await fetch(`https://api.doki.online/external/get-template-entities?api_key=${apiKey}&template_id=${templateId}`, {
            signal: controller.signal
        })
        clearTimeout(timeout)

        if (!res.ok) {
            const text = await res.text()
            return reply.status(res.status).send({ error: text })
        }

        const data = await res.json()
        console.debug('entities response:', JSON.stringify(data))
        return reply.send(data)
    } catch (err) {
        if (err.name === 'AbortError') {
            return reply.status(408).send({ error: 'Таймаут запроса' })
        }
        console.debug(err)
        return reply.status(500).send({ error: 'Внутренняя ошибка сервера' })
    }
})

    fastify.get('/okidoki/tryconnect', async (req, reply) => {
    try {
        await req.jwtVerify()

        const { apiKey } = req.query

        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 5000)

        const res = await fetch(`https://api.doki.online/external/templates?api_key=${apiKey}`, {
            signal: controller.signal
        })
        clearTimeout(timeout)

        if (!res.ok) {
            return reply.status(400).send({ error: 'Неверный API ключ' })
        }

        return reply.send({ ok: true })
    } catch (err) {
        if (err.name === 'AbortError') {
            return reply.status(408).send({ error: 'Таймаут запроса' })
        }
        console.debug(err)
        return reply.status(500).send({ error: 'Внутренняя ошибка сервера' })
    }
})

    fastify.post('/okidoki/save', async (req, reply) => {
    try {
        await req.jwtVerify()

        const userId = req.user.id
        const { apiKey } = req.body

        if (!apiKey) {
            return reply.status(400).send({ error: 'API ключ не указан' })
        }

        const user = await fastify.prisma.user.findUnique({
            where: { id: userId },
            select: { cabinet: true, role: true }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        if (user.role !== 'ADMINISTRATOR') {
            const staff = await fastify.prisma.staff.findUnique({
                where: { id: userId, cabinetid: user.cabinet },
                select: { manageintegration: true }
            })
            if (!staff || staff.manageintegration !== 'YES') {
                return reply.status(403).send({ error: 'Недостаточно прав' })
            }
        }

        await fastify.prisma.cabinet.update({
            where: { id: user.cabinet },
            data: { okidokiapi: apiKey }
        })

        return reply.send({ ok: true })
    } catch (err) {
        console.debug(err)
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
})

    fastify.get('/okidoki/get', async (req, reply) => {
        await req.jwtVerify()

        const userId = req.user.id

        const user = await fastify.prisma.user.findUnique({
            where: { id: userId },
            select: { cabinet: true, role: true }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        if (user.role !== 'ADMINISTRATOR') {
            const staff = await fastify.prisma.staff.findUnique({
                where: { id: userId, cabinetid: user.cabinet },
                select: { manageintegration: true }
            })
            if (!staff || staff.manageintegration !== 'YES') {
                return reply.status(403).send({ error: 'Недостаточно прав' })
            }
        }

        const res = await fastify.prisma.cabinet.findUnique({
            where: {id: user.cabinet},
            select: {okidokiapi: true}
        })

        if (!res) {
            return reply.status(404).send({error: 'API Key не найден!'})
        }

        return reply.send({ res })
    })
}