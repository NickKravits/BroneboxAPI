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
                deposit
            } = booking

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

            const object = await fastify.prisma.objects.findFirst({
                where: { realtyid: String(realty_id), cabinetid: cabinet.id },
                select: { 
                    id: true,
                    deposit,
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
                return reply.status(200).send({ error: 'Объект не найден' })
                //Пока ничего не делаем, позже бронь будет помещаться в другую таблицу, а в эту попадать только после привязки к объекту
            }

            if (status !== "booked" && status !== "canceled" && status !== "deleted" && status !== "request") {
                return reply.status(200).send({ error: 'Недопустимый статус бронирования' })
            }

            if (action === 'create_booking') {
                let okiDokiLink = ""
                let okiDokiId = ""
                if (cabinet.okidokiapi !== "") {
                    const odStringId = object.odstringid;
                    const odValueId = object.odvalueid;
                    const odNameId = object.odnameid;
                    const odDateInId = object.oddateinid;
                    const odDateOutId = object.oddateoutid;
                    const odDepositId = object.oddepositid;
                    const odPayPerDayId = object.odpayperdayid;
                    const odPayedId = object.odpayedid;

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
                        link: link
                    }
                })
            } else if (action === 'update_booking') {
                await fastify.prisma.bookings.update({
                    where: { id: id, cabinet: cabinet.id },
                    data: {
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
                    }
                })
            } else if (action === 'delete_booking') {
                await fastify.prisma.bookings.delete({
                    where: { id: id, cabinet: cabinet.id }
                })
            } else if (action === 'cancel_booking') {
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