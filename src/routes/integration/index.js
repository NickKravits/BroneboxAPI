const { ok } = require('assert')
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

            await fastify.prisma.logs.create({
                data: {
                    cabinetid: user.cabinet,
                    status: "SUCCESS",
                    message: "Интеграция | Создан ключ WebHook для RealtyCalendar"
                }
            })
        }

        const finalRealtyCalendar = await fastify.prisma.cabinet.findUnique({
            where: { id: user.cabinet },
            select: {
                realtycalendarid: true
            }
        })

        await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: "Интеграция | Показан ключ WebHook для RealtyCalendar"
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
                tochkaApiKey: true,
                tochkaCustomerCode: true
            }
        })

        if (cabinet.okidokiapi) {
            okidoki = true
        } else {
            okidoki = false
        }

        if (cabinet.tochkaApiKey && cabinet.tochkaCustomerCode) {
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

        await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: "Интеграция | Подключена интеграция с OkiDoki"
            }
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

    fastify.post('/tochka/save', async (req, reply) => {
        try {
            await req.jwtVerify()

            const userId = req.user.id
            const { phone, apiKey, consumerId, paymentMode, vatType, purpose, name } = req.body

            fastify.log.info(`paymentMode: ${JSON.stringify(paymentMode)}, тип: ${typeof paymentMode}`)

            if (!apiKey || !phone || !paymentMode || !vatType || !purpose || !name) {
                return reply.status(400).send({ error: 'Обязательные поля не заполнены' })
            }

            if (/[^\x00-\x7F]/.test(apiKey)) {
                return reply.status(400).send({ 
                    error: 'Токен содержит недопустимые символы. Проверьте правильность ввода.' 
                })
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

            const VALID_PAYMENT_MODES = ['sbp', 'card', 'tbank', 'dolyami'];

            if (!Array.isArray(paymentMode) || paymentMode.length === 0) {
                return reply.status(400).send({ error: 'Выберите хотя бы один способ оплаты' });
            }

            const invalidModes = paymentMode.filter(m => !VALID_PAYMENT_MODES.includes(m));
            if (invalidModes.length) {
                return reply.status(400).send({ error: `Недопустимые способы оплаты: ${invalidModes.join(', ')}` });
            }

            const VALID_VAT = ['none','vat0','vat5','vat7','vat10','vat22','vat105','vat107','vat110','vat122'];

            if (!VALID_VAT.includes(vatType)) {
                return reply.status(400).send({ error: 'Недопустимая ставка НДС' });
            }

            const customerCodeRes = await fetch('https://enter.tochka.com/sandbox/v2/open-banking/v1.0/customers', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            const data = await customerCodeRes.json();

            if (!customerCodeRes.ok) {
                const httpStatus = customerCodeRes.status;
                const errorText = await customerCodeRes.text();
                fastify.log.error(`[Ошибка Точки] Статус: ${httpStatus} | Ответ: ${errorText}`);

                switch (httpStatus) {
                    case 400:
                        return reply.status(400).send({
                            error: 'Код: 400. Ошибка валидации! Проверьте данные!'
                        });

                    case 403:
                        return reply.status(403).send({
                            error: 'Код: 403. Что-то пошло не так! Проверьте данные!'
                        });

                    case 404:
                        return reply.status(404).send({
                            error: 'Код: 404. Метод не найден! Обратитесь к разработчику!'
                        });

                    case 424:
                        return reply.status(424).send({
                            error: 'Код: 424. Что-то пошло не так! Попробуйте позже или свяжитесь с банком!'
                        });

                    case 500:
                        return reply.status(500).send({
                            error: 'Код: 500. Ошибка запроса! Обратитесь к разработчику!'
                        });

                    default:
                        return reply.status(502).send({
                            error: `Неожиданный ответ от банка. Код: ${httpStatus}`
                        });
                }
            }

            const customers = data.Data?.Customer;
            if (!customers?.length) {
                return reply.status(400).send({ error: 'Клиент не найден по данному токену' });
            }
            const customerCode = customers[0].customerCode;

            const response = await fetch(`https://enter.tochka.com/sandbox/v2/acquiring/v1.0/payments?customerCode=${customerCode}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }   
            });

            if (!response.ok) {
                const httpStatus = response.status;
                const errorText = await response.text();
                fastify.log.error(`[Ошибка Точки] Статус: ${httpStatus} | Ответ: ${errorText}`);

                switch (httpStatus) {
                    case 400:
                        return reply.status(400).send({
                            error: 'Код: 400. Ошибка валидации! Проверьте данные! Возможно нужно ввести идентификатор торговой точки!'
                        });

                    case 403:
                        return reply.status(403).send({
                            error: 'Код: 403. Что-то пошло не так! Попробуйте позже или свяжитесь с банком!'
                        });

                    case 404:
                        return reply.status(404).send({
                            error: 'Код: 404. Метод не найден! Обратитесь к разработчику!'
                        });

                    case 424:
                        return reply.status(424).send({
                            error: 'Код: 424. Что-то пошло не так! Попробуйте позже или свяжитесь с банком!'
                        });

                    case 500:
                        return reply.status(500).send({
                            error: 'Код: 500. Ошибка запроса! Обратитесь к разработчику!'
                        });

                    default:
                        return reply.status(502).send({
                            error: `Неожиданный ответ от банка. Код: ${httpStatus}`
                        });
                }
            }

            await fastify.prisma.cabinet.update({
                where: { id: user.cabinet },
                data: { 
                    tochkaPhone: phone,
                    tochkaApiKey: apiKey,
                    tochkaConsumerId: consumerId,
                    tochkaPaymentMode: paymentMode,
                    tochkaVatType: vatType,
                    tochkaPurpose: purpose,
                    tochkaName: name,
                    tochkaCustomerCode: customerCode
                 }
            })

            await fastify.prisma.logs.create({
                data: {
                    cabinetid: user.cabinet,
                    status: "SUCCESS",
                    message: "Интеграция | Подключена интеграция с Точка банком"
                }
            })

            return reply.send({ message: "Интеграция успешно установлена!" })
        } catch (err) {
            console.debug(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }

    })
}