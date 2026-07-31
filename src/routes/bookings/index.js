const crypto = require('crypto')

module.exports = async (fastify) => {
    fastify.post('/get', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id

            let permissions = false

            const { object, checkin, checkout, phone } = req.body
            const where = {}

            if (object)   where.realty_id = parseInt(object)
            if (phone)    where.phone = { contains: phone }
            if (checkin)  where.begin_date = checkin
            if (checkout) where.end_date   = checkout

            const cabinet = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { 
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true
                        }
                    }
                }
            })

            if (!cabinet) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            if (cabinet.role !== 'ADMINISTRATOR') {
                if ( !cabinet.staff || cabinet.staff.managebooks !== "YES" ) {
                    permissions = false
                } else {
                    permissions = true
                }
            } else {
                permissions = true
            }

            where.cabinet = cabinet.cabinet

            const bookings = await fastify.prisma.bookings.findMany({
                where,
                orderBy: { begin_date: 'desc' }
            })

            return reply.send({ permissions, "bookings": bookings })

        } catch (err) {
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/get-by-id', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { id } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true
                        }
                    }
                }
            })

            if (!user) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            const permissions = user.role === 'ADMINISTRATOR' || user.staff?.managebooks === 'YES'

            const booking = await fastify.prisma.bookings.findFirst({
                where: { id, cabinet: user.cabinet }
            })
            if (!booking) return reply.send({ booking: null, permissions })

            let scheduledMaid = null
            if (booking.realty_id && booking.end_date) {
                const object = await fastify.prisma.objects.findFirst({
                    where: { realtyid: booking.realty_id, cabinetid: user.cabinet },
                    select: { id: true }
                })
                if (object) {
                    const schedule = await fastify.prisma.cleaningSchedule.findFirst({
                        where: { cabinetid: user.cabinet, objectid: object.id, date: booking.end_date },
                        select: { maid_id: true }
                    })
                    if (schedule?.maid_id) {
                        scheduledMaid = await fastify.prisma.maids.findFirst({
                            where: { id: schedule.maid_id, cabinetid: user.cabinet },
                            select: { id: true, name: true }
                        })
                    }
                }
            }

            return reply.send({ booking, scheduledMaid, permissions })
        } catch (err) {
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/update', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { id, checkin, checkout, channel, maidid, manualDeposit } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true,
                            depositamountedit: true
                        }
                    }
                }
            })

            if (!user) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            const isAdmin = user.role === 'ADMINISTRATOR'
            const hasManageBooks = isAdmin || user.staff?.managebooks === 'YES'
            const hasDepositEdit = isAdmin || user.staff?.depositamountedit === 'YES'

            if ((checkin || checkout || channel || maidid) && !hasManageBooks) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }
            if (manualDeposit !== undefined && !hasDepositEdit) {
                return reply.status(403).send({ error: 'Недостаточно прав для изменения суммы залога' })
            }

            const data = {}

            if (checkin) data.begin_time = checkin
            if (checkout) data.end_time = checkout
            if (channel)  data.channel = channel
            if (maidid)   data.maid_id = parseInt(maidid)

            if (manualDeposit !== undefined) {
                if (manualDeposit === null) {
                    data.manual_deposit = null
                } else {
                    const numDeposit = parseFloat(manualDeposit)
                    if (isNaN(numDeposit) || numDeposit < 0) {
                        return reply.status(400).send({ error: 'Некорректная сумма залога' })
                    }
                    if (numDeposit !== 0 && numDeposit <= 100) {
                        return reply.status(400).send({ error: 'Сумма залога должна быть 0 либо больше 100 ₽' })
                    }
                    data.manual_deposit = numDeposit
                }
            }

            const updated = await fastify.prisma.bookings.update({
                where: { id: parseInt(id), cabinet: user.cabinet },
                data
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Бронирования | Изменена бронь ${id}`
            }
            })

            return reply.send({ updated })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/delete', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { id } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    cabinet: true,
                    role: true,
                    staff: {
                        select: {
                            managebooks: true
                        }
                    }
                }
            })

            if (!user) {
                return reply.status(403).send({ error: 'Доступ запрещён' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                if ( !user.staff || user.staff.managebooks !== "YES" ) {
                    return reply.status(403).send({ error: 'Доступ запрещён' })
                }

            }

            await fastify.prisma.bookings.delete({
                where: { id: parseInt(id), cabinet: user.cabinet }
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Бронирования | Удалена бронь ${id}`
            }
            })

            return reply.send({ success: true })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.get('/unprocessed', async (req, reply) => {
        try {
            await req.jwtVerify()
            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const items = await fastify.prisma.unprocessedBooking.findMany({
                where: { cabinetid: user.cabinet, resolved: false },
                orderBy: { createdAt: 'desc' }
            })
            return reply.send({ items })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/unprocessed/resolve', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id, objectId } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const item = await fastify.prisma.unprocessedBooking.findFirst({
                where: { id: Number(id), cabinetid: user.cabinet, resolved: false }
            })
            if (!item) return reply.status(404).send({ error: 'Необработанная бронь не найдена' })

            const link = crypto.randomBytes(6).toString('hex')

            if (item.failReason === 'object_not_found') {
                if (!objectId) return reply.status(400).send({ error: 'Не указан объект' })

                const object = await fastify.prisma.objects.findFirst({
                    where: { id: Number(objectId), cabinetid: user.cabinet }
                })
                if (!object) return reply.status(404).send({ error: 'Объект не найден' })

                const existing = await fastify.prisma.bookings.findFirst({
                    where: { id: item.bookingId, cabinet: user.cabinet }
                })
                if (existing) {
                    return reply.status(400).send({ error: `Бронирование #${item.bookingId} уже существует в системе` })
                }

                const cabinet = await fastify.prisma.cabinet.findUnique({
                    where: { id: user.cabinet }
                })

                let okiDokiLink = ""
                let okiDokiId = ""

                if (cabinet.okidokiapi && object.okidokiactive === 1) {
                    const odStringId = object.odstringid;
                    const odValueId = object.odvalueid;
                    const odNameId = object.odnameid;
                    const odDateInId = object.oddateinid;
                    const odDateOutId = object.oddateoutid;
                    const odDepositId = object.oddepositid;
                    const odPayPerDayId = object.odpayperdayid;
                    const odPayedId = object.odpayedid;

                    if (odStringId == "" || odValueId == "" || odNameId == "" || odDateInId == "" || odDateOutId == "" || odDepositId == "" || odPayPerDayId == "" || odPayedId == "") {
                        await fastify.prisma.logs.create({
                        data: {
                            cabinetid: cabinet.id,
                            status: "INFO",
                            message: `Договоры | Договор может быть создан как черновик! Так как на объекте ${item.realtyId} заполнены не все поля!`
                        }
                        })
                    }

                    function formatDate(dateString) {
                        if (!dateString || !dateString.includes('-')) return dateString;
                        return dateString.split('-').reverse().join('.');
                    }

                    const bDate = formatDate(item.beginDate);
                    const eDate = formatDate(item.endDate);

                    const depSit = object.deposit;

                    const requestBody = {
                        api_key: cabinet.okidokiapi,
                        template_id: odStringId,
                        source: "BroneBox",
                        callback_url: cabinet.okidokiwebhookkey
                            ? `${process.env.APP_URL}/webhook/okidoki/${cabinet.okidokiwebhookkey}`
                            : undefined,
                        redirect_url: `${process.env.FRONTEND_URL}/c/?id=${link}&red=okidoki`,
                        entities: [
                            {
                                value: odNameId,
                                keyword: odValueId
                            },
                            {
                                value: bDate,
                                keyword: odDateInId
                            },
                            {
                                value: eDate,
                                keyword: odDateOutId
                            },
                            {
                                value: depSit,
                                keyword: odDepositId
                            },
                            {
                                value: item.pricePerDay,
                                keyword: odPayPerDayId
                            },
                            {
                                value: item.prepayment,
                                keyword: odPayedId
                            }
                        ]
                    };

                    const res = await fetch('https://api.doki.online/external/contract', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestBody)
                    });

                    const data = await res.json();
                    okiDokiLink = data.link;
                    okiDokiId = data.contract_id;
                }

                await fastify.prisma.bookings.create({
                    data: {
                        id: item.bookingId,
                        status: item.bookingStatus,
                        begin_date: item.beginDate,
                        end_date: item.endDate,
                        realty_id: object.realtyid,
                        amount: item.amount,
                        notes: item.notes,
                        source: item.source,
                        prepayment: item.prepayment,
                        balance_to_be_paid_1: item.balanceToBePaid,
                        price_per_day: item.pricePerDay,
                        deposit: item.deposit,
                        client_id: item.clientId,
                        fio: item.fio,
                        email: item.email,
                        phone: item.phone,
                        additional_phone: item.additionalPhone,
                        cabinet: user.cabinet,
                        link,
                        contract_id: okiDokiId,
                        contract_link: okiDokiLink
                    }
                })
            } else if (item.failReason === 'booking_not_found') {
                const existing = await fastify.prisma.bookings.findFirst({
                    where: { id: item.bookingId, cabinet: user.cabinet }
                })
                if (existing) {
                    await fastify.prisma.unprocessedBooking.delete({
                        where: { id: item.id }
                    })
                    return reply.status(400).send({ error: `Бронирование #${item.bookingId} уже существует в системе`, deleted: true })
                }

                let okiDokiLink = ""
                let okiDokiId = ""

                const cabinet = await fastify.prisma.cabinet.findUnique({
                    where: { id: user.cabinet }
                })

                if (cabinet.okidokiapi && item.realtyId) {
                    const object = await fastify.prisma.objects.findFirst({
                        where: { realtyid: item.realtyId, cabinetid: user.cabinet }
                    })

                    if (object && object.okidokiactive === 1 && object.odstringid) {
                        const formatDate = (dateString) => {
                            if (!dateString || !dateString.includes('-')) return dateString;
                            return dateString.split('-').reverse().join('.');
                        }

                        const requestBody = {
                            api_key: cabinet.okidokiapi,
                            template_id: object.odstringid,
                            source: "BroneBox",
                            callback_url: cabinet.okidokiwebhookkey
                                ? `${process.env.APP_URL}/webhook/okidoki/${cabinet.okidokiwebhookkey}`
                                : undefined,
                            redirect_url: `${process.env.FRONTEND_URL}/c/?id=${link}&red=okidoki`,
                            entities: [
                                { value: object.odnameid, keyword: object.odvalueid },
                                { value: formatDate(item.beginDate), keyword: object.oddateinid },
                                { value: formatDate(item.endDate), keyword: object.oddateoutid },
                                { value: object.deposit, keyword: object.oddepositid },
                                { value: item.pricePerDay, keyword: object.odpayperdayid },
                                { value: item.prepayment, keyword: object.odpayedid }
                            ]
                        }

                        const res = await fetch('https://api.doki.online/external/contract', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(requestBody)
                        })

                        const data = await res.json()
                        okiDokiLink = data.link
                        okiDokiId = data.contract_id
                    }
                }

                await fastify.prisma.bookings.create({
                    data: {
                        id: item.bookingId,
                        status: item.bookingStatus,
                        begin_date: item.beginDate,
                        end_date: item.endDate,
                        realty_id: item.realtyId,
                        amount: item.amount,
                        notes: item.notes,
                        source: item.source,
                        prepayment: item.prepayment,
                        balance_to_be_paid_1: item.balanceToBePaid,
                        price_per_day: item.pricePerDay,
                        deposit: item.deposit,
                        client_id: item.clientId,
                        fio: item.fio,
                        email: item.email,
                        phone: item.phone,
                        additional_phone: item.additionalPhone,
                        cabinet: user.cabinet,
                        link,
                        contract_id: okiDokiId,
                        contract_link: okiDokiLink
                    }
                })
            } else {
                return reply.status(400).send({ error: 'Нельзя разрешить эту ошибку автоматически' })
            }

            await fastify.prisma.unprocessedBooking.update({
                where: { id: item.id },
                data: { resolved: true }
            })

            return reply.send({ message: 'Бронирование перенесено' })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })

    fastify.post('/unprocessed/delete', async (req, reply) => {
        try {
            await req.jwtVerify()
            const { id } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: req.user.id },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            const item = await fastify.prisma.unprocessedBooking.findFirst({
                where: { id: Number(id), cabinetid: user.cabinet }
            })
            if (!item) return reply.status(404).send({ error: 'Необработанная бронь не найдена' })

            await fastify.prisma.unprocessedBooking.delete({
                where: { id: item.id }
            })

            return reply.send({ message: 'Удалено' })
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Ошибка сервера' })
        }
    })
}