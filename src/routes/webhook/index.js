const crypto = require('crypto')

module.exports = async (fastify) => {
  // POST /webhook/rc/:webhookkey
    fastify.post('/rc/:webhookkey', async (req, reply) => {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                return reply.status(200).send({ ok: true })
            }

            const { webhookkey } = req.params
            const { action, status, data } = req.body
            const { booking } = data

            const {
                id,
                begin_date,
                end_date,
                realty_id,
                created_at,
                updated_at,
                amount,
                notes,
                source,
                prepayment,
                balance_to_be_paid_1,
                price_per_day,
                deposit,
                deposit_payment_links
            } = booking

            const depositPaymentLink = Array.isArray(deposit_payment_links) && deposit_payment_links.length > 0
                ? deposit_payment_links[0]
                : null

            const { client } = booking

            const {
                id: client_id,
                fio,
                email,
                phone,
                additional_phone
            } = client || {}

            const cabinet = await fastify.prisma.cabinet.findUnique({
                where: { realtycalendarid: webhookkey },
                select: { id: true, okidokiapi: true, okidokiwebhookkey: true }
            })

            if (!cabinet) {
                return reply.status(400).send({ error: 'Кабинет не найден' })
            }

            let object = null
            if (action === 'create_booking') {
                object = await fastify.prisma.objects.findFirst({
                    where: { realtyid: realty_id, cabinetid: cabinet.id },
                    select: {
                        id: true,
                        name: true,
                        deposit: true,
                        odstringid: true,
                        odvalueid: true,
                        odnameid: true,
                        oddateinid: true,
                        oddateoutid: true,
                        oddepositid: true,
                        odpayperdayid: true,
                        odpayedid: true,
                        okidokiactive: true
                    }
                })

                if (!object) {
                    await fastify.prisma.logs.create({
                        data: {
                            cabinetid: cabinet.id,
                            status: "ERROR",
                            message: `Бронирования | Бронирование не получено! Так как объект ${realty_id} не найден! Бронирование перенесено в необработанные брони!`
                        }
                    })
                    await fastify.prisma.unprocessedBooking.create({
                        data: {
                            cabinetid: cabinet.id,
                            bookingId: id,
                            action,
                            failReason: 'object_not_found',
                            failMessage: `Объект с realty_id ${realty_id} не найден в кабинете`,
                            realtyId: realty_id,
                            beginDate: begin_date,
                            endDate: end_date,
                            bookingStatus: status,
                            source,
                            amount,
                            notes,
                            prepayment,
                            balanceToBePaid: balance_to_be_paid_1,
                            pricePerDay: price_per_day,
                            deposit,
                            clientId: client_id,
                            fio,
                            email,
                            phone,
                            additionalPhone: additional_phone
                        }
                    })
                    return reply.status(200).send({ error: 'Объект не найден' })
                }
            }

            if (status !== "booked" && status !== "canceled" && status !== "deleted" && status !== "request") {
                await fastify.prisma.logs.create({
                    data: {
                        cabinetid: cabinet.id,
                        status: "ERROR",
                        message: `Бронирования | Невозможно получить бронирование ${id}! Недопустимый статус бронирования!`
                    }
                })

                return reply.status(200).send({ error: 'Недопустимый статус бронирования' })
            }

            if (action === 'create_booking') {
                let okiDokiLink = ""
                let okiDokiId = ""
                const link = crypto.randomBytes(6).toString('hex')
                if (cabinet.okidokiapi && object.okidokiactive === 1) {
                    const odStringId = object.odstringid;
                    const odValueId = object.odvalueid;
                    const odNameId = object.odnameid;
                    const odDateInId = object.oddateinid;
                    const odDateOutId = object.oddateoutid;
                    const odDepositId = object.oddepositid;
                    const odPayPerDayId = object.odpayperdayid;
                    const odPayedId = object.odpayedid;

                    if (odStringId != "") {
                        if (odValueId == "" || odNameId == "" || odDateInId == "" || odDateOutId == "" || odDepositId == "" || odPayPerDayId == "" || odPayedId == "") {
                            await fastify.prisma.logs.create({
                                data: {
                                    cabinetid: cabinet.id,
                                    status: "INFO",
                                    message: `Договоры | Договор может быть создан как черновик! Так как на объекте ${realty_id} заполнены не все поля!`
                                }
                            })
                        }

                    function formatDate(dateString) {
                        // Проверяем, что строка не пустая и соответствует формату YYYY-MM-DD
                        if (!dateString || !dateString.includes('-')) return dateString;
                        return dateString.split('-').reverse().join('.');
                    }

                    const bDate = formatDate(begin_date);
                    const eDate = formatDate(end_date);

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
                                value: price_per_day,
                                keyword: odPayPerDayId
                            },
                            {
                                value: prepayment,
                                keyword: odPayedId
                            }
                        ]
                    };

                    // Выполняем POST запрос
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
            }

            const existingBooking = await fastify.prisma.bookings.findFirst({
                where: { id: id, cabinet: cabinet.id }
            })

            if (existingBooking) {
                await fastify.prisma.logs.create({
                    data: {
                        cabinetid: cabinet.id,
                        status: "INFO",
                        message: `Бронирования | Бронирование ${id} уже существует, поэтому оно не было создано!`
                    }
                });
                return reply.status(200).send({ ok: true })
            }

                
                await fastify.prisma.bookings.create({
                    data: {
                        status: status,
                        id: id,
                        begin_date: begin_date,
                        end_date: end_date,
                        realty_id: realty_id,
                        created_at: created_at,
                        updated_at: updated_at,
                        amount: amount,
                        notes: notes,
                        source: source,
                        prepayment: prepayment,
                        balance_to_be_paid_1: balance_to_be_paid_1,
                        price_per_day: price_per_day,
                        deposit: deposit,
                        client_id: client_id,
                        fio: fio,
                        email: email,
                        phone: phone,
                        additional_phone: additional_phone,
                        cabinet: cabinet.id,
                        contract_id: okiDokiId,
                        contract_link: okiDokiLink,
                        deposit_payment_link: depositPaymentLink,
                        link: link
                    }
                })

                fastify.pushToClients(cabinet.id, 'new_booking', {
                    objectName: object.name,
                    checkin:    begin_date,
                    checkout:   end_date
                })

                return reply.status(200).send({ ok: true })
            } else if (action === 'update_booking') {
                const book = await fastify.prisma.bookings.findFirst({
                    where: { id: id, cabinet: cabinet.id }
                })

                if (!book) {
                    await fastify.prisma.logs.create({
                        data: {
                            cabinetid: cabinet.id,
                            status: "INFO",
                            message: `Бронирования | Бронирование не может быть обновлено, так как бронировние не найдено! Бронь перенесена в необработанные брони!`
                        }
                    })
                    await fastify.prisma.unprocessedBooking.create({
                        data: {
                            cabinetid: cabinet.id,
                            bookingId: id,
                            action,
                            failReason: 'booking_not_found',
                            failMessage: `Бронирование ${id} не найдено для обновления`,
                            realtyId: realty_id,
                            beginDate: begin_date,
                            endDate: end_date,
                            bookingStatus: status,
                            source,
                            amount,
                            notes,
                            prepayment,
                            balanceToBePaid: balance_to_be_paid_1,
                            pricePerDay: price_per_day,
                            deposit,
                            clientId: client_id,
                            fio,
                            email,
                            phone,
                            additionalPhone: additional_phone
                        }
                    })
                    return reply.status(200).send({ ok: true })
                }

                const updateData = {
                    begin_date: begin_date,
                    end_date: end_date,
                    created_at: created_at,
                    updated_at: updated_at,
                    amount: amount,
                    notes: notes,
                    source: source,
                    prepayment: prepayment,
                    balance_to_be_paid_1: balance_to_be_paid_1,
                    price_per_day: price_per_day,
                    deposit: deposit,
                    client_id: client_id,
                    fio: fio,
                    email: email,
                    phone: phone,
                    additional_phone: additional_phone,
                    deposit_payment_link: depositPaymentLink,
                }

                // Если входящий залог меньше того, что был — считаем это (частичным) возвратом
                // и копим сумму возврата в Bookings.returned, чтобы показывать её гостю
                const oldDepositValue = book.deposit || 0
                const newDepositValue = deposit || 0
                if (oldDepositValue > newDepositValue) {
                    const returnedDelta = oldDepositValue - newDepositValue
                    updateData.returned = (book.returned || 0) + returnedDelta
                }

                if (book.realty_id !== realty_id) {
                    const objectExists = await fastify.prisma.objects.findFirst({
                        where: { realtyid: realty_id, cabinetid: cabinet.id },
                        select: { id: true }
                    })

                    if (objectExists) {
                        updateData.realty_id = realty_id
                        await fastify.prisma.logs.create({
                            data: {
                                cabinetid: cabinet.id,
                                status: 'INFO',
                                message: `Бронирования | Бронирование ${id}: объект обновлён с ${book.realty_id} на ${realty_id}.`
                            }
                        })
                    } else {
                        await fastify.prisma.logs.create({
                            data: {
                                cabinetid: cabinet.id,
                                status: 'INFO',
                                message: `Бронирования | Бронирование ${id}: объект не изменён — входящий realty_id ${realty_id} не найден в кабинете.`
                            }
                        })
                    }
                }

                await fastify.prisma.bookings.update({
                    where: { id: id, cabinet: cabinet.id },
                    data: updateData
                })

                fastify.pushToClients(cabinet.id, 'update_booking', {
                    checkin:  begin_date,
                    checkout: end_date
                })
            } else if (action === 'delete_booking') {
                const book = await fastify.prisma.bookings.findFirst({
                    where: { id: id, cabinet: cabinet.id }
                })

                if (!book) {
                    await fastify.prisma.logs.create({
                    data: {
                            cabinetid: cabinet.id,
                            status: "INFO",
                            message: `Бронирования | Бронирование не удалено! Так как бронирование ${id} не найдено!`
                        }
                    })
                    return reply.status(200).send({ ok: true })
                }

                await fastify.prisma.bookings.delete({
                    where: { id: id, cabinet: cabinet.id }
                })

                fastify.pushToClients(cabinet.id, 'delete_booking', {
                    checkin:  begin_date,
                    checkout: end_date
                })
            } else if (action === 'cancel_booking') {
                const book = await fastify.prisma.bookings.findFirst({
                    where: { id: id, cabinet: cabinet.id }
                })

                if (!book) {
                    await fastify.prisma.logs.create({
                    data: {
                            cabinetid: cabinet.id,
                            status: "INFO",
                            message: `Бронирования | Бронирование не отменено! Так как бронирование ${id} не найдено!`
                        }
                    })
                    return reply.status(200).send({ ok: true })
                }

                await fastify.prisma.bookings.update({
                    where: { id: id, cabinet: cabinet.id },
                    data: { status: 'canceled' }
                })
            } else {
                return reply.status(200).send({ ok: true })
            }

            return reply.status(200).send({ ok: true })

        } catch (err) {
            console.error(err)
            return reply.status(200).send({ error: 'Не удалось обработать webhook' })
        }
    })

  // POST /webhook/okidoki/:webhookkey
    fastify.post('/okidoki/:webhookkey', async (req, reply) => {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                return reply.status(200).send({ ok: true })
            }

            const { webhookkey } = req.params
            const { _id, status } = req.body

            const cabinet = await fastify.prisma.cabinet.findUnique({
                where: { okidokiwebhookkey: webhookkey },
                select: { id: true }
            })

            if (!cabinet) {
                return reply.status(200).send({ ok: true })
            }

            const booking = await fastify.prisma.bookings.findFirst({
                where: { contract_id: _id, cabinet: cabinet.id }
            })

            if (!booking) {
                await fastify.prisma.logs.create({
                    data: {
                        cabinetid: cabinet.id,
                        status: 'ERROR',
                        message: `OkiDoki | Договор ${_id} не найден ни в одной брони кабинета`
                    }
                })
                return reply.status(200).send({ ok: true })
            }

            await fastify.prisma.bookings.update({
                where: { id: booking.id },
                data: { contract_status: status?.name || null }
            })

            return reply.status(200).send({ ok: true })

        } catch (err) {
            console.error(err)
            return reply.status(200).send({ error: 'Не удалось обработать webhook' })
        }
    })

    // POST /webhook/TochkaPayment/:webhookkey — подтверждение оплаты Точки.
    // Тело запроса — голый JWT (не JSON), поэтому парсим его в изолированном контексте,
    // чтобы не сломать JSON-парсинг остальных вебхуков (/rc, /okidoki) выше.
    fastify.register(async (scoped) => {
        scoped.addContentTypeParser('*', { parseAs: 'string' }, (req, body, done) => {
            done(null, body)
        })

        scoped.post('/TochkaPayment/:webhookkey', async (req, reply) => {
            try {
                const { webhookkey } = req.params

                const cabinet = await fastify.prisma.cabinet.findFirst({
                    where: { tochkaWebhookKey: webhookkey },
                    select: { id: true }
                })

                if (!cabinet) {
                    return reply.status(200).send({ ok: true })
                }

                const token = typeof req.body === 'string' ? req.body.trim() : ''
                const parts = token.split('.')
                if (parts.length !== 3) {
                    fastify.log.error(`[Точка вебхук] Тело запроса не похоже на JWT`)
                    return reply.status(200).send({ ok: true })
                }

                let payload
                try {
                    payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'))
                } catch (err) {
                    fastify.log.error(`[Точка вебхук] Не удалось разобрать JWT: ${err.message}`)
                    return reply.status(200).send({ ok: true })
                }

                const { amount, paymentType, operationId, webhookType, status } = payload || {}

                if (webhookType !== 'acquiringInternetPayment') {
                    return reply.status(200).send({ ok: true })
                }

                if (!operationId) {
                    fastify.log.error(`[Точка вебхук] В теле нет operationId`)
                    return reply.status(200).send({ ok: true })
                }

                const payment = await fastify.prisma.payment.findFirst({
                    where: { method: 'TOCHKA', externalId: String(operationId) }
                })

                if (!payment) {
                    fastify.log.error(`[Точка вебхук] Платёж с externalId=${operationId} не найден`)
                    return reply.status(200).send({ ok: true })
                }

                if (payment.cabinetid !== cabinet.id) {
                    fastify.log.error(`[Точка вебхук] Кабинет из ключа вебхука (${cabinet.id}) не совпадает с кабинетом платежа #${payment.id} (${payment.cabinetid})`)
                    return reply.status(200).send({ ok: true })
                }

                const updateData = {
                    status:            'PAID',
                    paidAt:            new Date(),
                    tochkaStatus:      status || null,
                    tochkaPaymentType: paymentType || null
                }

                const parsedAmount = parseFloat(amount)
                if (!isNaN(parsedAmount)) {
                    updateData.amount = parsedAmount
                } else {
                    fastify.log.error(`[Точка вебхук] Некорректный amount у платежа #${payment.id}: ${amount}`)
                }

                await fastify.prisma.payment.update({
                    where: { id: payment.id },
                    data: updateData
                })

                await fastify.prisma.logs.create({
                    data: {
                        cabinetid: cabinet.id,
                        status: "SUCCESS",
                        message: `Точка | Платёж #${payment.id} подтверждён вебхуком (operationId: ${operationId})`
                    }
                })

                return reply.status(200).send({ ok: true })
            } catch (err) {
                console.error(err)
                return reply.status(200).send({ ok: true })
            }
        })
    })
}