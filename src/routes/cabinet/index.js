const VALID_TIMEZONES = [
    'ETC_GMT_1', 'EUROPE_CENTRAL', 'EUROPE_KALININGRAD', 'EUROPE_MOSCOW',
    'EUROPE_SAMARA', 'ASIA_YEKATERINBURG', 'ASIA_OMSK', 'ASIA_KRASNOYARSK',
    'ASIA_IRKUTSK', 'ASIA_YAKUTSK', 'ASIA_VLADIVOSTOK', 'ASIA_MAGADAN', 'ASIA_KAMCHATKA'
]

const DEFAULT_CLEANING_TEMPLATE = `{Название_квартиры}
{Адрес_квартиры}
Время выезда: {Время_выезда}
Время заезда: {Время_заезда}
Комментарий: {Комментарий}
Горничная: {Горничная}
{Новая_строка}`

module.exports = async (fastify) => {
    // GET /cabinet/cleaning-template
    fastify.get('/cleaning-template', async (req, reply) => {
        try {
            await req.jwtVerify()
            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const cabinet = await fastify.prisma.cabinet.findUnique({
                where: { id: user.cabinet },
                select: { cleaningTemplate: true, approxTimeMarker: true, emptyStayMarker: true, cleaningHeader: true, cleaningFooter: true }
            })

            return reply.send({
                template:        cabinet?.cleaningTemplate ?? DEFAULT_CLEANING_TEMPLATE,
                approxTimeMarker: cabinet?.approxTimeMarker ?? '~',
                emptyStayMarker:  cabinet?.emptyStayMarker ?? '—',
                cleaningHeader:   cabinet?.cleaningHeader ?? '',
                cleaningFooter:   cabinet?.cleaningFooter ?? ''
            })
        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    // POST /cabinet/cleaning-template
    fastify.post('/cleaning-template', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { template, approxTimeMarker, emptyStayMarker, cleaningHeader, cleaningFooter } = req.body

            if (template === undefined) return reply.status(400).send({ error: 'Не указан шаблон' })

            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true, role: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })
            if (user.role !== 'ADMINISTRATOR') return reply.status(403).send({ error: 'Только администратор может менять шаблон' })

            const updateData = { cleaningTemplate: template }
            if (approxTimeMarker !== undefined) updateData.approxTimeMarker = approxTimeMarker
            if (emptyStayMarker  !== undefined) updateData.emptyStayMarker  = emptyStayMarker
            if (cleaningHeader   !== undefined) updateData.cleaningHeader    = cleaningHeader
            if (cleaningFooter   !== undefined) updateData.cleaningFooter    = cleaningFooter

            await fastify.prisma.cabinet.update({
                where: { id: user.cabinet },
                data: updateData
            })

            return reply.send({ message: 'Шаблон сохранён' })
        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    // GET /cabinet/templates
    fastify.get('/templates', async (req, reply) => {
        try {
            await req.jwtVerify()
            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const templates = await fastify.prisma.cabinetTemplate.findMany({
                where: { cabinetid: user.cabinet },
                orderBy: { createdAt: 'asc' }
            })
            return reply.send({ templates })
        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    // POST /cabinet/templates/save (create or update)
    fastify.post('/templates/save', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id, name, body } = req.body

            if (!name?.trim() || !body?.trim()) {
                return reply.status(400).send({ error: 'Заполните название и текст шаблона' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true, role: true, staff: { select: { managetemplates: true } } }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const allowed = user.role === 'ADMINISTRATOR' || user.staff?.managetemplates === 'YES'
            if (!allowed) return reply.status(403).send({ error: 'Нет прав для редактирования шаблонов' })

            if (id) {
                const existing = await fastify.prisma.cabinetTemplate.findFirst({
                    where: { id: Number(id), cabinetid: user.cabinet }
                })
                if (!existing) return reply.status(404).send({ error: 'Шаблон не найден' })

                const updated = await fastify.prisma.cabinetTemplate.update({
                    where: { id: Number(id) },
                    data: { name: name.trim(), body: body.trim() }
                })
                return reply.send({ template: updated })
            } else {
                const created = await fastify.prisma.cabinetTemplate.create({
                    data: { cabinetid: user.cabinet, name: name.trim(), body: body.trim() }
                })
                return reply.send({ template: created })
            }
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    // POST /cabinet/templates/delete
    fastify.post('/templates/delete', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true, role: true, staff: { select: { managetemplates: true } } }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const allowed = user.role === 'ADMINISTRATOR' || user.staff?.managetemplates === 'YES'
            if (!allowed) return reply.status(403).send({ error: 'Нет прав для удаления шаблонов' })

            const existing = await fastify.prisma.cabinetTemplate.findFirst({
                where: { id: Number(id), cabinetid: user.cabinet }
            })
            if (!existing) return reply.status(404).send({ error: 'Шаблон не найден' })

            await fastify.prisma.cabinetTemplate.delete({ where: { id: Number(id) } })
            return reply.send({ message: 'Шаблон удалён' })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    // POST /cabinet/update-timezone
    fastify.post('/update-timezone', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { timezone } = req.body

            if (!VALID_TIMEZONES.includes(timezone)) {
                return reply.status(400).send({ error: 'Неверный часовой пояс' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true, role: true }
            })

            if (!user) {
                return reply.status(404).send({ error: 'Пользователь не найден' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                return reply.status(403).send({ error: 'Только администратор может менять часовой пояс' })
            }

            await fastify.prisma.cabinet.update({
                where: { id: user.cabinet },
                data: { Timezone: timezone }
            })

            return reply.send({ message: 'Часовой пояс обновлён' })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Внутренняя ошибка сервера' })
        }
    })
}
