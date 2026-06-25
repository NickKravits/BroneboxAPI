const crypto = require('crypto')

module.exports = async (fastify) => {
  // POST /webhook/rc/:webhookkey
    fastify.post('/rc/:webhookkey', async (req, reply) => {
        try {
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
            } = client

            const cabinet = await fastify.prisma.cabinet.findUnique({
                where: { realtycalendarid: webhookkey },
                select: { id: true, okidokiapi: true }
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
                        odpayedid: true
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
                if (cabinet.okidokiapi) {
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
                            message: `Договоры | Договор может быть создан как черновик! Так как на объекте ${realty_id} заполнены не все поля!`
                        }
                        })
                    }

                    if (odStringId != "") {

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
                        // CallBack Позже. Сохрани коммент
                        // Redirect потом. Сохрани коммент
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
                    console.debug(data)
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

                const link = crypto.randomBytes(6).toString('hex')
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
                return reply.status(400).send({ error: 'Неизвестное действие' })
            }

            return reply.status(200).send({ ok: true })

        } catch (err) {
            console.error(err)
            return reply.status(500).send({ error: 'Не удалось обработать webhook' })
        }
    })
}