const VALID_TIMEZONES = [
    'ETC_GMT_1', 'EUROPE_CENTRAL', 'EUROPE_KALININGRAD', 'EUROPE_MOSCOW',
    'EUROPE_SAMARA', 'ASIA_YEKATERINBURG', 'ASIA_OMSK', 'ASIA_KRASNOYARSK',
    'ASIA_IRKUTSK', 'ASIA_YAKUTSK', 'ASIA_VLADIVOSTOK', 'ASIA_MAGADAN', 'ASIA_KAMCHATKA'
]

module.exports = async (fastify) => {
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
