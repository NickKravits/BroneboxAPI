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
        let tochka = "NOT_CONNECTED"

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
                tochkaCustomerCode: true,
                tochkaMerchantId: true,
                tochkaPaymentMode: true
            }
        })

        if (cabinet.okidokiapi) {
            okidoki = true
        } else {
            okidoki = false
        }

        if (cabinet.tochkaApiKey && cabinet.tochkaCustomerCode) {
            if (!cabinet.tochkaMerchantId) {
                tochka = "NOT_READY"
            } else if (!cabinet.tochkaPaymentMode || cabinet.tochkaPaymentMode.length === 0) {
                tochka = "NOT_READY_PAYMENT"
            } else {
                tochka = "CONNECTED"
            }
        } else {
            tochka = "NOT_CONNECTED"
        }

        return reply.send({ okidoki, tochka, permissions, tochkaMerchantId: cabinet.tochkaMerchantId })

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

        const existing = await fastify.prisma.cabinet.findUnique({
            where: { id: user.cabinet },
            select: { okidokiwebhookkey: true }
        })

        const webhookKey = existing?.okidokiwebhookkey || crypto.randomBytes(16).toString('hex')

        await fastify.prisma.cabinet.update({
            where: { id: user.cabinet },
            data: { okidokiapi: apiKey, okidokiwebhookkey: webhookKey }
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
            const { phone, apiKey, vatType, purpose, name, customerCode: providedCustomerCode } = req.body

            if (!apiKey || !phone || !vatType || !purpose || !name) {
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

            const VALID_VAT = ['none','vat0','vat5','vat7','vat10','vat22','vat105','vat107','vat110','vat122'];

            if (!VALID_VAT.includes(vatType)) {
                return reply.status(400).send({ error: 'Недопустимая ставка НДС' });
            }

            const customerCodeRes = await fetch('https://enter.tochka.com/uapi/open-banking/v1.0/customers', {
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

            let customerCode;
            let selectedCustomer;
            if (providedCustomerCode) {
                const found = customers.find(c => c.customerCode === providedCustomerCode);
                if (!found) {
                    return reply.status(400).send({ error: 'Выбранный клиент не найден' });
                }
                customerCode = providedCustomerCode;
                selectedCustomer = found;
            } else if (customers.length === 1) {
                customerCode = customers[0].customerCode;
                selectedCustomer = customers[0];
            } else {
                return reply.send({ customerResult: 'MULTIPLE', customers });
            }

            const response = await fetch(`https://enter.tochka.com/uapi/acquiring/v1.0/payments?customerCode=${customerCode}`, {
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

            const responseMerchant = await fetch(`https://enter.tochka.com/uapi/acquiring/v1.0/retailers?customerCode=${customerCode}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }   
            });

            if (!responseMerchant.ok) {
                const httpStatus = responseMerchant.status;
                const errorText = await responseMerchant.text();
                fastify.log.error(`[Ошибка Точки] Статус: ${httpStatus} | Ответ: ${errorText}`);

                switch (httpStatus) {
                    case 400:
                        return reply.status(400).send({
                            error: 'Код: 400. Ошибка валидации! Проверьте, что у вас настроена торговая точка в банке!'
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

            const dataMerchant = await responseMerchant.json();

            const merchantArray = dataMerchant.Data?.Retailer;

            let merchantResult = "ERROR";

            if (merchantArray.length === 1) {
                merchantResult = "CONNECTED";
            } else if (merchantArray.length === 0) {
                merchantResult = "NOT_CONNECTED";
            } else if (merchantArray.length > 1) {
                merchantResult = "MULTIPLE";
            }

            if (merchantResult === "NOT_CONNECTED") {
                return reply.status(400).send({ error: 'Торговая точка не найдена! Проверьте, что у вас настроена торговая точка в банке!' })
            }
            if (merchantResult === "ERROR") {
                return reply.status(400).send({ error: 'Произошла ошибка при получении данных о торговой точке!' })
            }

            const merchantIdValue = merchantResult === "CONNECTED" ? merchantArray[0]?.merchantId : null;

            await fastify.prisma.cabinet.update({
                where: { id: user.cabinet },
                data: {
                    tochkaPhone: phone,
                    tochkaApiKey: apiKey,
                    tochkaMerchantId: merchantIdValue,
                    tochkaVatType: vatType,
                    tochkaPurpose: purpose,
                    tochkaName: name,
                    tochkaCustomerCode: customerCode,
                    tochkaOrgName: selectedCustomer?.fullName || null,
                    tochkaTaxCode: selectedCustomer?.taxCode || null
                 }
            })

            let message = `Интеграция | Подключена интеграция с Точка банком. `

            if (merchantResult === "MULTIPLE") {
                message += `Найдены несколько торговых точек, выберите нужную в настройках.`
            }

            await fastify.prisma.logs.create({
                data: {
                    cabinetid: user.cabinet,
                    status: "SUCCESS",
                    message: message
                }
            })

            let messageInt = `Интеграция | Подключена интеграция с Точка банком. `

            if (merchantResult === "MULTIPLE") {
                messageInt += `Найдены несколько торговых точек, выберите нужную в настройках.`
            }

            return reply.send({ message, merchantResult, dataMerchant })
        } catch (err) {
            console.debug(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }

    })

    fastify.post('/tochka/disconnect', async (req, reply) => {
        try {
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

            await fastify.prisma.cabinet.update({
                where: { id: user.cabinet },
                data: {
                    tochkaPhone: null,
                    tochkaApiKey: null,
                    tochkaMerchantId: null,
                    tochkaPaymentMode: null,
                    tochkaVatType: null,
                    tochkaPurpose: null,
                    tochkaName: null,
                    tochkaCustomerCode: null,
                    tochkaOrgName: null,
                    tochkaTaxCode: null
                }
            })

            await fastify.prisma.logs.create({
                data: {
                    cabinetid: user.cabinet,
                    status: "SUCCESS",
                    message: "Интеграция | Отключена интеграция с Точка банком"
                }
            })

            return reply.send({ message: "Интеграция успешно отключена!" })
        } catch (err) {
            console.debug(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    fastify.post('/tochka/select-merchant', async (req, reply) => {
        try {
            await req.jwtVerify()

            const userId = req.user.id
            const { merchantId, paymentModes } = req.body

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

            const cabinet = await fastify.prisma.cabinet.findUnique({
                where: { id: user.cabinet },
                select: { tochkaApiKey: true, tochkaCustomerCode: true }
            })

            if (!cabinet?.tochkaApiKey || !cabinet?.tochkaCustomerCode) {
                return reply.status(400).send({ 
                    error: 'Сначала настройте интеграцию с Точка Банком' 
                })
            }

            if (!merchantId) {
                return reply.status(400).send({ error: 'merchantId обязателен' })
            }

            const VALID_PAYMENT_MODES = ['sbp', 'card', 'tinkoff', 'dolyame'];

            if (!Array.isArray(paymentModes) || paymentModes.length === 0) {
                return reply.status(400).send({ error: 'paymentModes обязателен и не может быть пустым' })
            }

            const invalidModes = paymentModes.filter(m => !VALID_PAYMENT_MODES.includes(m))
            if (invalidModes.length) {
                return reply.status(400).send({ error: `Недопустимые способы оплаты: ${invalidModes.join(', ')}` })
}

            await fastify.prisma.cabinet.update({
                where: { id: user.cabinet },
                data: { tochkaMerchantId: merchantId, tochkaPaymentMode: paymentModes }
            })

            await fastify.prisma.logs.create({
                data: {
                    cabinetid: user.cabinet,
                    status: "SUCCESS",
                    message: "Интеграция | Завершена интеграция с Точка банком. Торговая точка выбрана."
                }
            })

            return reply.send({ message: "Интеграция успешно подключена!" })
        } catch (err) {
            console.debug(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    fastify.get('/tochka/get-merchants', async (req, reply) => {
        try {
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

            const cabinet = await fastify.prisma.cabinet.findUnique({
                where: { id: user.cabinet },
                select: { tochkaApiKey: true, tochkaCustomerCode: true }
            })

            if (!cabinet?.tochkaApiKey || !cabinet?.tochkaCustomerCode) {
                return reply.status(400).send({ 
                    error: 'Сначала настройте интеграцию с Точка Банком' 
                })
            }

            const responseMerchant = await fetch(`https://enter.tochka.com/uapi/acquiring/v1.0/retailers?customerCode=${cabinet.tochkaCustomerCode}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${cabinet.tochkaApiKey}`
                }   
            });

            if (!responseMerchant.ok) {
                const httpStatus = responseMerchant.status;
                const errorText = await responseMerchant.text();
                fastify.log.error(`[Ошибка Точки] Статус: ${httpStatus} | Ответ: ${errorText}`);

                switch (httpStatus) {
                    case 400:
                        return reply.status(400).send({
                            error: 'Код: 400. Ошибка валидации! Проверьте, что у вас настроена торговая точка в банке!'
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

            const dataMerchant = await responseMerchant.json();

            return reply.send({ dataMerchant })
        } catch (err) {
            console.debug(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })
}