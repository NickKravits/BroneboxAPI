const bcrypt = require('bcrypt')

module.exports = async (fastify) => {
  fastify.get('/getme', async (req, reply) => {
    try {
        await req.jwtVerify()

        const userId = req.user.id

        const user = await fastify.prisma.user.findUnique({
        where: { id: userId },
        select: {
            login: true,
            tempass: true,
            name: true,
            role: true,
            cabinet: true,
            status: true,
            staff: { select: {
                manualpaymentedit: true,
                manualdepositedit: true,
                bankpaymentedit: true,
                bankdepositedit: true,
                financesinformationpayment: true,
                financesinformationdeposit: true,
                depositamountedit: true,
                transferpaymentscheck: true
            } }
        }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        const isAdmin = user.role === 'ADMINISTRATOR'

        return {
            login: user.login,
            tempass: user.tempass,
            name: user.name,
            role: user.role,
            cabinet: user.cabinet,
            status: user.status,
            manualPaymentEdit: isAdmin || user.staff?.manualpaymentedit === 'YES',
            manualDepositEdit: isAdmin || user.staff?.manualdepositedit === 'YES',
            bankPaymentEdit: isAdmin || user.staff?.bankpaymentedit === 'YES',
            bankDepositEdit: isAdmin || user.staff?.bankdepositedit === 'YES',
            financesInformationPayment: isAdmin || user.staff?.financesinformationpayment === 'YES',
            financesInformationDeposit: isAdmin || user.staff?.financesinformationdeposit === 'YES',
            depositAmountEdit: isAdmin || user.staff?.depositamountedit === 'YES',
            transferPaymentsCheck: isAdmin || user.staff?.transferpaymentscheck === 'YES'
        }
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  fastify.post('/update-name', async (req, reply) => {
    try {
        await req.jwtVerify()
        const { name } = req.body
        if (!name || !name.trim()) {
            return reply.status(400).send({ error: 'Имя не может быть пустым' })
        }
        if (name.trim().length > 100) {
            return reply.status(400).send({ error: 'Имя слишком длинное (максимум 100 символов)' })
        }
        const updated = await fastify.prisma.user.update({
            where: { id: req.user.id },
            data: { name: name.trim() }
        })
        return reply.send({ message: 'Имя обновлено', name: updated.name })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  fastify.post('/change-password', async (req, reply) => {
    try {
        await req.jwtVerify()
        const { currentPassword, newPassword } = req.body

        if (!currentPassword || !newPassword) {
            return reply.status(400).send({ error: 'Заполните все поля' })
        }
        if (newPassword.length < 8) {
            return reply.status(400).send({ error: 'Новый пароль должен быть не менее 8 символов' })
        }

        const user = await fastify.prisma.user.findUnique({
            where: { id: req.user.id }
        })
        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        const valid = await bcrypt.compare(currentPassword, user.password)
        if (!valid) {
            return reply.status(401).send({ error: 'Неверный текущий пароль' })
        }

        const hashed = await bcrypt.hash(newPassword, 12)

        const updated = await fastify.prisma.user.update({
            where: { id: user.id },
            data: { password: hashed, tempass: 'NO', tokenVersion: { increment: 1 } }
        })

        await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: 'SUCCESS',
                message: `Пароль | Пользователь ${user.login} сменил пароль. Остальные сеансы завершены`
            }
        })

        const newToken = fastify.jwt.sign(
            { id: updated.id, login: updated.login, tokenVersion: updated.tokenVersion },
            { expiresIn: '30d' }
        )

        return reply.send({ message: 'Пароль успешно изменён', token: newToken })
    } catch (err) {
        console.error(err)
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  fastify.get('/cabinet-info', async (req, reply) => {
    try {
        await req.jwtVerify()
        const user = await fastify.prisma.user.findUnique({
            where: { id: req.user.id },
            select: { cabinet: true }
        })
        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }
        const cabinet = await fastify.prisma.cabinet.findUnique({
            where: { id: user.cabinet },
            select: { id: true, Timezone: true, balance: true }
        })
        return reply.send({ cabinet })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  fastify.post('/bug-report', async (req, reply) => {
    try {
        await req.jwtVerify()
        const { message, page } = req.body
        if (!message || !message.trim()) {
            return reply.status(400).send({ error: 'Текст отчёта не может быть пустым' })
        }
        const user = await fastify.prisma.user.findUnique({
            where: { id: req.user.id },
            select: { cabinet: true }
        })
        if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

        await fastify.prisma.bugReport.create({
            data: {
                cabinetid: user.cabinet,
                userId: req.user.id,
                message: message.trim(),
                page: page || null
            }
        })
        return reply.send({ message: 'Отчёт отправлен' })
    } catch (err) {
        console.error(err)
        return reply.status(500).send({ error: 'Ошибка сервера' })
    }
  })
}