const crypto = require('crypto')
const bcrypt = require('bcrypt')

module.exports = async (fastify) => {
  // GET /staff/getall
  fastify.get('/getall', async (req, reply) => {
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
            return reply.status(403).send({ error: 'Доступ запрещен' })
        }

        const staffList = await fastify.prisma.user.findMany({
        where: { 
            cabinet: user.cabinet 
        },
            select: {
                id: true,
                name: true,
                login: true,
                role: true,
                status: true,
                createdAt: true,
                staff: {
                    select: {
                        manageobjects: true,
                        managemaids: true,
                        manageintegration: true,
                        managetemplates: true,
                        manageautosent: true,
                        seemaidsrate: true,
                        managebooks: true
                    }
                }
            }
        })

        return staffList
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })
    // POST /staff/create
    fastify.post('/create', async (req, reply) => {
        try {
            await req.jwtVerify()

            const { login, name } = req.body

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
                return reply.status(403).send({ error: 'Доступ запрещен' })
            }

            const findLogin = await fastify.prisma.user.findUnique({
                where: { login: login }
            })

            if (findLogin) {
                return reply.status(400).send({ error: 'Логин уже существует' })
            }

            const password = crypto.randomBytes(4).toString('hex');

            const hashed = await bcrypt.hash(password, 10)

            await fastify.prisma.$transaction(async (tx) => {
                const createNewStaff = await tx.user.create({
                    data: {
                        login,
                        password: hashed,
                        name,
                        role: 'STAFF',
                        cabinet: user.cabinet
                    }
                })

                await tx.staff.create({
                    data: {
                        id: createNewStaff.id,
                        cabinetid: user.cabinet
                    }
                })
            })

            return reply.status(201).send({ login: login, password: password })

        } catch (err) {
            console.error('Ошибка при создании сотрудника:', err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    //POST /staff/delete
    fastify.post('/delete', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id } = req.body

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
                return reply.status(403).send({ error: 'Доступ запрещен' })
            }

            const findLogin = await fastify.prisma.user.findUnique({
                where: { id: id }
            })

            if (!findLogin) {
                return reply.status(400).send({ error: 'Пользователь не найден' })
            }

            if (findLogin.cabinet !== user.cabinet) {
                return reply.status(403).send({ error: 'Доступ запрещен' })
            }

            if (findLogin.role === 'ADMINISTRATOR') {
                return reply.status(403).send({ error: 'Невозможно удалить администратора' })
            }

            await fastify.prisma.$transaction(async (tx) => {
                await tx.staff.delete({
                    where: { id: findLogin.id,
                        cabinetid: user.cabinet}
                })
                await tx.user.delete({
                    where: { id: findLogin.id,
                        cabinet: user.cabinet }
                })
            })

            return reply.status(200).send({ message: 'Сотрудник успешно удален' })
        } catch (err) {
            console.error('Ошибка при удалении сотрудника:', err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    //POST /staff/get
    fastify.post('/get', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id } = req.body

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
                return reply.status(403).send({ error: 'Доступ запрещен' })
            }

            const findLogin = await fastify.prisma.user.findUnique({
                where: { id: id }
            })

            if (!findLogin) {
                return reply.status(400).send({ error: 'Пользователь не найден' })
            }

            if (findLogin.cabinet !== user.cabinet) {
                return reply.status(403).send({ error: 'Доступ запрещен' })
            }

            if (findLogin.role === 'ADMINISTRATOR') {
                return reply.status(403).send({ error: 'Невозможно получить информацию об администраторе' })
            }

            const staffInfo = await fastify.prisma.user.findUnique({
                where: { id: findLogin.id, cabinet: user.cabinet },
                select: {
                    login: true,
                    name: true,
                    status: true,
                    staff: {
                        select: {
                            manageobjects: true,
                            managemaids: true,
                            manageintegration: true,
                            managetemplates: true,
                            manageautosent: true,
                            seemaidsrate: true,
                            managebooks: true
                        }
                    }
                }
            })

            return staffInfo
        } catch (err) {
            console.error('Ошибка при удалении сотрудника:', err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    //POST /staff/permissionschange
    fastify.post('/permissionschange', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id, permission, value } = req.body

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
                return reply.status(403).send({ error: 'Доступ запрещен' })
            }

            const findLogin = await fastify.prisma.user.findUnique({
                where: { id: id }
            })

            if (!findLogin) {
                return reply.status(400).send({ error: 'Пользователь не найден' })
            }

            if (findLogin.cabinet !== user.cabinet) {
                return reply.status(403).send({ error: 'Доступ запрещен' })
            }

            if (findLogin.role === 'ADMINISTRATOR') {
                return reply.status(403).send({ error: 'Невозможно получить информацию об администраторе' })
            }

            const validPermissions = ['manageobjects', 'managemaids', 'manageintegration', 'managetemplates', 'manageautosent', 'seemaidsrate', 'managebooks']

            if (!validPermissions.includes(permission)) {
                return reply.status(400).send({ error: 'Недопустимое имя разрешения' })
            }

            await fastify.prisma.staff.update({
                where: { id: findLogin.id, cabinetid: user.cabinet },
                data: {
                    [permission]: value
                }
            })

            return reply.status(200).send({ message: 'Права сотрудника успешно обновлены' })
        } catch (err) {
            console.error('Ошибка при удалении сотрудника:', err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })
}