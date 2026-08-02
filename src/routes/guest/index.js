'use strict'

const path = require('path')
const fs = require('fs/promises')
const crypto = require('crypto')

const TZ_MAP = {
    ETC_GMT_1:          'Etc/GMT-1',
    EUROPE_CENTRAL:     'Europe/Berlin',
    EUROPE_KALININGRAD: 'Europe/Kaliningrad',
    EUROPE_MOSCOW:      'Europe/Moscow',
    EUROPE_SAMARA:      'Europe/Samara',
    ASIA_YEKATERINBURG: 'Asia/Yekaterinburg',
    ASIA_OMSK:          'Asia/Omsk',
    ASIA_KRASNOYARSK:   'Asia/Krasnoyarsk',
    ASIA_IRKUTSK:       'Asia/Irkutsk',
    ASIA_YAKUTSK:       'Asia/Yakutsk',
    ASIA_VLADIVOSTOK:   'Asia/Vladivostok',
    ASIA_MAGADAN:       'Asia/Magadan',
    ASIA_KAMCHATKA:     'Asia/Kamchatka',
}

module.exports = async (fastify) => {

    function localToUTC(dateStr, timeStr, timezone) {
        const [y, m, d] = dateStr.split('-').map(Number)
        const [h, mi]   = timeStr.split(':').map(Number)
        const estimate  = new Date(Date.UTC(y, m - 1, d, h, mi, 0))

        const parts = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        }).formatToParts(estimate)

        const get = (type) => parseInt(parts.find(p => p.type === type)?.value ?? '0')
        const lh  = get('hour') % 24
        const lm  = get('minute')

        return new Date(estimate.getTime() + ((h - lh) * 60 + (mi - lm)) * 60000)
    }

    function getShowState(setting, beginDate, endDate, checkinTime, checkoutTime, timezone) {
        if (!setting || setting === 'IMMEDIATELY') return { active: true, availableAt: null }

        const nowUTC = new Date()
        const bd = beginDate ? new Date(beginDate).toISOString().split('T')[0] : null
        const ed = endDate   ? new Date(endDate).toISOString().split('T')[0]   : null

        let thresholdUTC = null

        if (setting === 'DAY_BEFORE' && bd) {
            thresholdUTC = new Date(localToUTC(bd, checkinTime, timezone).getTime() - 24 * 60 * 60 * 1000)
        } else if (setting === 'AFTER_CHECKIN' && bd) {
            thresholdUTC = localToUTC(bd, checkinTime, timezone)
        } else if (setting === 'AFTER_CHECKOUT' && ed) {
            thresholdUTC = localToUTC(ed, checkoutTime, timezone)
        }

        if (!thresholdUTC) return { active: false, availableAt: null }

        const active = nowUTC >= thresholdUTC
        return { active, availableAt: active ? null : thresholdUTC }
    }

    function formatAvailableAt(utcDate, timezone) {
        if (!utcDate) return null
        return new Intl.DateTimeFormat('ru-RU', {
            timeZone: timezone,
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(utcDate)
    }

    function formatRuDateOnly(date) {
        if (!date) return ''
        return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
    }

    function fillTochkaTemplate(template, vars) {
        return (template || '').replace(/\{(\w+)\}/g, (match, key) => vars[key] ?? match)
    }

    fastify.post('/get', async (req, reply) => {
        const { id } = req.body

        const booking = await fastify.prisma.bookings.findFirst({
            where: { link: id },
            select: {
                status:               true,
                id:                   true,
                begin_date:           true,
                end_date:             true,
                realty_id:            true,
                amount:               true,
                prepayment:           true,
                balance_to_be_paid_1: true,
                price_per_day:        true,
                deposit:              true,
                returned:             true,
                manual_deposit:       true,
                fio:                  true,
                email:                true,
                begin_time:           true,
                end_time:             true,
                contract_link:        true,
                review:               true,
                source:               true,
                cabinet:              true,
                deposit_payment_link: true,
            }
        })

        if (!booking) {
            return reply.status(404).send({ error: 'Booking not found' })
        }

        const paidAgg = await fastify.prisma.payment.aggregate({
            where: { bookingId: booking.id, cabinetid: booking.cabinet, type: 'PAY', status: { in: ['PAID', 'RETURNED'] } },
            _sum: { amount: true }
        })
        const paidAmount = paidAgg._sum.amount || 0

        const depositAgg = await fastify.prisma.payment.aggregate({
            where: { bookingId: booking.id, cabinetid: booking.cabinet, type: 'DEPOSIT', status: { in: ['PAID', 'RETURNED'] } },
            _sum: { amount: true, returnedAmount: true }
        })
        const depositPaymentsHeld     = depositAgg._sum.amount || 0
        const depositPaymentsReturned = depositAgg._sum.returnedAmount || 0

        const objects = await fastify.prisma.objects.findFirst({
            where: { realtyid: booking.realty_id },
            select: {
                id:              true,
                instruction:     true,
                checkindef:      true,
                checkoutdef:     true,
                sspayanddeposit: true,
                ssinstruction:   true,
                sscontract:      true,
                ssrateclean:     true,
                location:        true,
                maplink:         true,
                deposit:         true,
                depositchanel:   true,
                paymentchanel:   true,
            }
        })

        const objectDepositDefault = parseFloat(objects?.deposit) || 0
        const depositManualAllowed = objects?.depositchanel === 'TOCHKA' || objects?.depositchanel === 'TBANK' || objects?.depositchanel === 'TRANSFER'
        const depositTarget = (depositManualAllowed && booking.manual_deposit !== null && booking.manual_deposit !== undefined)
            ? booking.manual_deposit
            : objectDepositDefault

        const depositTrackedByPayments = objects?.depositchanel === 'TOCHKA' || objects?.depositchanel === 'TRANSFER'
        const depositHeld     = depositTrackedByPayments ? depositPaymentsHeld     : (booking.deposit  || 0) + depositPaymentsHeld
        const depositReturned = depositTrackedByPayments ? depositPaymentsReturned : (booking.returned || 0) + depositPaymentsReturned

        const cabinet = await fastify.prisma.cabinet.findFirst({
            where:  { id: booking.cabinet },
            select: {
                Timezone:             true,
                tochkaPhone:          true,
                tochkaApiKey:         true,
                tochkaMerchantId:     true,
                tochkaPaymentMode:    true,
                tochkaVatType:        true,
                tochkaPurpose:        true,
                tochkaName:           true,
                tochkaPurposeDeposit: true,
                tochkaNameDeposit:    true,
                tochkaCustomerCode:   true,
                transferInstructions: true
            }
        })

        const tochkaBaseReady = !!(
            cabinet?.tochkaPhone && cabinet?.tochkaApiKey && cabinet?.tochkaMerchantId &&
            cabinet?.tochkaPaymentMode && cabinet?.tochkaVatType && cabinet?.tochkaCustomerCode
        )
        const tochkaReady        = tochkaBaseReady && !!(cabinet?.tochkaPurpose && cabinet?.tochkaName)
        const tochkaDepositReady = tochkaBaseReady && !!(cabinet?.tochkaPurposeDeposit && cabinet?.tochkaNameDeposit)
        if (objects) {
            objects.tochkaReady        = tochkaReady
            objects.tochkaDepositReady = tochkaDepositReady
        }

        const photos = objects
            ? await fastify.prisma.objectPhoto.findMany({
                where:   { objectId: objects.id },
                select:  { id: true, url: true },
                orderBy: { id: 'asc' }
            })
            : []

        const timezone     = TZ_MAP[cabinet?.Timezone] ?? 'Europe/Moscow'
        const checkinTime  = objects?.checkindef  ?? '14:00'
        const checkoutTime = objects?.checkoutdef ?? '12:00'

        const checkoutPassed = booking.end_date
            ? new Date() >= localToUTC(
                new Date(booking.end_date).toISOString().split('T')[0],
                checkoutTime,
                timezone
              )
            : false

        const bookingState = booking.status

        const isBlockedStatus = bookingState === 'canceled' || bookingState === 'deleted' || bookingState === 'request'
        const completed = bookingState === 'booked' && checkoutPassed

        let show = {}

        if (objects && !isBlockedStatus) {
            const payState = getShowState(
                objects.sspayanddeposit,
                booking.begin_date, booking.end_date,
                checkinTime, checkoutTime, timezone
            )
            show.payanddeposit = {
                visible:       true,
                active:        payState.active,
                depositActive: payState.active,
                availableAt:   formatAvailableAt(payState.availableAt, timezone)
            }

            if (completed) {
                show.instruction = { visible: false, active: false, availableAt: null }
            } else {
                const instrState = getShowState(
                    objects.ssinstruction,
                    booking.begin_date, booking.end_date,
                    checkinTime, checkoutTime, timezone
                )
                show.instruction = {
                    visible:     true,
                    active:      instrState.active,
                    availableAt: formatAvailableAt(instrState.availableAt, timezone)
                }
            }

            if (!booking.contract_link) {
                show.contract = { visible: false, active: false, availableAt: null }
            } else {
                const contractState = getShowState(
                    objects.sscontract,
                    booking.begin_date, booking.end_date,
                    checkinTime, checkoutTime, timezone
                )
                show.contract = {
                    visible:     true,
                    active:      contractState.active,
                    availableAt: formatAvailableAt(contractState.availableAt, timezone)
                }
            }

            const rateState = getShowState(
                objects.ssrateclean,
                booking.begin_date, booking.end_date,
                checkinTime, checkoutTime, timezone
            )
            const rateActive = completed || rateState.active
            show.rateclean = {
                visible:     true,
                active:      rateActive,
                availableAt: rateActive ? null : formatAvailableAt(rateState.availableAt, timezone)
            }
        }

        let transferPay = null
        let transferDeposit = null
        if (objects?.paymentchanel === 'TRANSFER') {
            transferPay = await fastify.prisma.payment.findFirst({
                where: { bookingId: booking.id, cabinetid: booking.cabinet, type: 'PAY', method: 'TRANSFER' },
                orderBy: { createdAt: 'desc' },
                select: { id: true, status: true, amount: true, returnedAmount: true, returnedAt: true, createdAt: true }
            })
        }
        if (objects?.depositchanel === 'TRANSFER') {
            transferDeposit = await fastify.prisma.payment.findFirst({
                where: { bookingId: booking.id, cabinetid: booking.cabinet, type: 'DEPOSIT', method: 'TRANSFER' },
                orderBy: { createdAt: 'desc' },
                select: { id: true, status: true, amount: true, returnedAmount: true, returnedAt: true, createdAt: true }
            })
        }

        return reply.send({
            booking, objects, photos, show, bookingState, checkoutPassed,
            paidAmount, depositHeld, depositReturned, depositTarget,
            transferInstructions: cabinet?.transferInstructions || '',
            transferPay, transferDeposit
        })
    })

    fastify.post('/save-times', async (req, reply) => {
        const { id, begin_time, end_time } = req.body

        const booking = await fastify.prisma.bookings.findFirst({
            where:  { link: id },
            select: { id: true, status: true, end_date: true, realty_id: true, cabinet: true }
        })

        if (!booking) return reply.status(404).send({ error: 'Booking not found' })

        const objects = await fastify.prisma.objects.findFirst({
            where:  { realtyid: booking.realty_id },
            select: { checkoutdef: true }
        })
        const cabinet = await fastify.prisma.cabinet.findFirst({
            where:  { id: booking.cabinet },
            select: { Timezone: true }
        })
        const timezone     = TZ_MAP[cabinet?.Timezone] ?? 'Europe/Moscow'
        const checkoutTime = objects?.checkoutdef ?? '12:00'
        const checkoutPassed = booking.end_date
            ? new Date() >= localToUTC(
                new Date(booking.end_date).toISOString().split('T')[0],
                checkoutTime,
                timezone
              )
            : false

        if (booking.status !== 'booked' || checkoutPassed) {
            return reply.status(403).send({ error: 'Нельзя изменить время после завершения брони' })
        }

        await fastify.prisma.bookings.update({
            where: { id: booking.id },
            data: {
                ...(begin_time !== undefined && { begin_time }),
                ...(end_time   !== undefined && { end_time   }),
            }
        })

        return reply.send({ ok: true })
    })

    fastify.post('/contract/update', async (req, reply) => {
        const { id } = req.body

        const booking = await fastify.prisma.bookings.findFirst({
            where:  { link: id },
            select: { id: true, contract_id: true, cabinet: true }
        })

        if (!booking || !booking.contract_id) return reply.send({ result: 'nothing' })

        const cabinet = await fastify.prisma.cabinet.findFirst({
            where:  { id: booking.cabinet },
            select: { okidokiapi: true }
        })

        if (!cabinet?.okidokiapi) return reply.send({ result: 'unknown' })

        try {
            const okiUrl = new URL('https://api.doki.online/external/contract')
            okiUrl.searchParams.set('api_key', cabinet.okidokiapi)
            okiUrl.searchParams.set('contract_id', booking.contract_id)

            const res = await fetch(okiUrl.toString(), {
                method:  'GET',
                headers: { 'Content-Type': 'application/json' }
            })

            const data        = await res.json()
            const statusName  = data.contract?.status?.name || null

            await fastify.prisma.bookings.update({
                where: { id: booking.id },
                data:  { contract_status: statusName || null }
            })

            let result
            if      (statusName === 'Черновик')        result = 'draft'
            else if (statusName === 'Выставлен')        result = 'nothing'
            else if (statusName === 'Отклонен')         result = 'dicline'
            else if (statusName === 'Ожидает проверки') result = 'pertrue'
            else if (statusName === 'Аннулирован')      result = 'notfound'
            else if (statusName === 'Подписан')         result = 'true'
            else                                        result = 'unknown'

            return reply.send({ result })
        } catch (err) {
            console.error(err)
            return reply.send({ result: 'unknown' })
        }
    })

    fastify.post('/payment/getpaymenturl', async (req, reply) => {
        const { id, email } = req.body
        const booking = await fastify.prisma.bookings.findFirst({
            where:  { link: id }
        })

        if (!booking) return reply.status(404).send({ error: 'Booking not found' })

        const payments = await fastify.prisma.payment.findMany({
            where: { bookingId: booking.id, type: 'PAY', status: { in: ['PAID', 'RETURNED'] }, cabinetid: booking.cabinet },
        })

        const toPay = Math.max(0, (booking.balance_to_be_paid_1 || 0) - payments.reduce((sum, p) => sum + p.amount, 0))

        if (toPay <= 0) return reply.status(400).send({ error: 'Нет суммы к оплате' })


        const object = await fastify.prisma.objects.findFirst({
            where:  { realtyid: booking.realty_id, cabinetid: booking.cabinet },
            select: { paymentchanel: true, name: true, location: true }
        })

        if (!object) {
            return reply.status(404).send({ error: 'Object not found' })
        }

        if (object.paymentchanel == "TOCHKA") {
            const cabinet = await fastify.prisma.cabinet.findFirst({
                where:  { id: booking.cabinet }
            })

            if (!cabinet) {
                return reply.status(404).send({ error: 'Cabinet not found' })
            }

            const tochkaPhone = cabinet.tochkaPhone
            const tochkaApiKey = cabinet.tochkaApiKey
            const tochkaMerchantId = cabinet.tochkaMerchantId
            const tochkaPaymentMode = cabinet.tochkaPaymentMode
            const tochkaVatType = cabinet.tochkaVatType
            const tochkaPurpose = cabinet.tochkaPurpose
            const tochkaName = cabinet.tochkaName
            const tochkaCustomerCode = cabinet.tochkaCustomerCode
            const tochkaOrgName = cabinet.tochkaOrgName
            const tochkaTaxCode = cabinet.tochkaTaxCode

            if (!tochkaPhone || !tochkaApiKey || !tochkaMerchantId || !tochkaPaymentMode || !tochkaVatType || !tochkaPurpose || !tochkaName || !tochkaCustomerCode) {
                return reply.status(400).send({ error: 'Оплата через Точка Банк временно недоступна. Обратитесь к вашему менеджеру.' })
            }

            const templateVars = {
                apartment_name: object.name || '',
                address:        object.location || '',
                created_at:     formatRuDateOnly(booking.created_at),
                checkin:        formatRuDateOnly(booking.begin_date),
                checkout:       formatRuDateOnly(booking.end_date)
            }
            const tochkaPurposeEdited = fillTochkaTemplate(tochkaPurpose, templateVars)
            const tochkaNameEdited    = fillTochkaTemplate(tochkaName, templateVars)

            const amountStr    = toPay.toFixed(2)
            const guestPageLink = `${process.env.FRONTEND_URL}/c/?id=${booking.link}&red=tochka&kind=pay`

            let tochkaRes
            try {
                tochkaRes = await fetch('https://enter.tochka.com/uapi/acquiring/v1.0/payments_with_receipt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${tochkaApiKey}`
                    },
                    body: JSON.stringify({
                        Data: {
                            customerCode: tochkaCustomerCode,
                            amount: amountStr,
                            purpose: tochkaPurposeEdited,
                            redirectUrl: guestPageLink,
                            failRedirectUrl: guestPageLink,
                            paymentMode: tochkaPaymentMode,
                            saveCard: false,
                            merchantId: tochkaMerchantId,
                            preAuthorization: false,
                            ttl: 11,
                            Client: {
                                email
                            },
                            Items: [
                                {
                                    vatType: tochkaVatType,
                                    name: tochkaNameEdited,
                                    amount: amountStr,
                                    quantity: 1,
                                    paymentMethod: 'full_payment',
                                    paymentObject: 'service',
                                    Supplier: {
                                        phone: tochkaPhone,
                                        name: tochkaOrgName || '',
                                        taxCode: tochkaTaxCode || ''
                                    }
                                }
                            ],
                            Supplier: {
                                phone: tochkaPhone,
                                name: tochkaOrgName || '',
                                taxCode: tochkaTaxCode || ''
                            }
                        }
                    })
                })
            } catch (err) {
                fastify.log.error(`[Точка] Ошибка сети при создании платежа: ${err.message}`)
                return reply.status(502).send({ error: 'Не удалось связаться с банком' })
            }

            if (!tochkaRes.ok) {
                const errorText = await tochkaRes.text()
                fastify.log.error(`[Точка] Ошибка создания платежа. Статус: ${tochkaRes.status} | Ответ: ${errorText}`)
                return reply.status(502).send({ error: 'Не удалось создать ссылку на оплату' })
            }

            const tochkaData  = await tochkaRes.json()
            const paymentData = tochkaData.Data

            const payment = await fastify.prisma.payment.create({
                data: {
                    cabinetid:     booking.cabinet,
                    bookingId:     booking.id,
                    amount:        parseFloat(paymentData.amount),
                    type:          'PAY',
                    method:        'TOCHKA',
                    status:        'PENDING',
                    externalId:    paymentData.operationId,
                    link:          paymentData.paymentLink,
                    linkExpiresAt: new Date(Date.now() + 10 * 60 * 1000)
                }
            })

            return reply.send({ url: payment.link })

        } else if (object.paymentchanel == "TBANK") {
            return reply.status(400).send({ error: 'TBANK payment channel is not implemented yet' })
        } else if (object.paymentchanel == "NONE") {
            return reply.status(400).send({ error: 'Payment channel is not set' })
        } else {
            return reply.status(400).send({ error: 'Unknown payment channel' })
        }
    })

    fastify.post('/deposit/getpaymenturl', async (req, reply) => {
        const { id, email } = req.body
        const booking = await fastify.prisma.bookings.findFirst({
            where:  { link: id }
        })

        if (!booking) return reply.status(404).send({ error: 'Booking not found' })

        const object = await fastify.prisma.objects.findFirst({
            where:  { realtyid: booking.realty_id, cabinetid: booking.cabinet },
            select: { depositchanel: true, name: true, location: true, deposit: true }
        })

        if (!object) {
            return reply.status(404).send({ error: 'Object not found' })
        }

        if (object.depositchanel !== "TOCHKA") {
            if (object.depositchanel === "TBANK") {
                return reply.status(400).send({ error: 'TBANK deposit channel is not implemented yet' })
            }
            return reply.status(400).send({ error: 'Приём залога через Точку не настроен для этого объекта' })
        }

        const depositTarget = (booking.manual_deposit !== null && booking.manual_deposit !== undefined)
            ? booking.manual_deposit
            : (parseFloat(object.deposit) || 0)

        if (depositTarget <= 0) {
            return reply.status(400).send({ error: 'Сумма залога не указана' })
        }

        const payments = await fastify.prisma.payment.findMany({
            where: { bookingId: booking.id, type: 'DEPOSIT', status: { in: ['PAID', 'RETURNED'] }, cabinetid: booking.cabinet },
        })

        const toPay = Math.max(0, depositTarget - payments.reduce((sum, p) => sum + p.amount, 0))

        if (toPay <= 0) return reply.status(400).send({ error: 'Нет суммы к оплате' })

        const cabinet = await fastify.prisma.cabinet.findFirst({
            where:  { id: booking.cabinet }
        })

        if (!cabinet) {
            return reply.status(404).send({ error: 'Cabinet not found' })
        }

        const tochkaPhone = cabinet.tochkaPhone
        const tochkaApiKey = cabinet.tochkaApiKey
        const tochkaMerchantId = cabinet.tochkaMerchantId
        const tochkaPaymentMode = cabinet.tochkaPaymentMode
        const tochkaVatType = cabinet.tochkaVatType
        const tochkaPurposeDeposit = cabinet.tochkaPurposeDeposit
        const tochkaNameDeposit = cabinet.tochkaNameDeposit
        const tochkaCustomerCode = cabinet.tochkaCustomerCode
        const tochkaOrgName = cabinet.tochkaOrgName
        const tochkaTaxCode = cabinet.tochkaTaxCode

        if (!tochkaPhone || !tochkaApiKey || !tochkaMerchantId || !tochkaPaymentMode || !tochkaVatType || !tochkaPurposeDeposit || !tochkaNameDeposit || !tochkaCustomerCode) {
            return reply.status(400).send({ error: 'Приём залога через Точка Банк временно недоступен. Обратитесь к вашему менеджеру.' })
        }

        const templateVars = {
            apartment_name: object.name || '',
            address:        object.location || '',
            created_at:     formatRuDateOnly(booking.created_at),
            checkin:        formatRuDateOnly(booking.begin_date),
            checkout:       formatRuDateOnly(booking.end_date)
        }
        const tochkaPurposeEdited = fillTochkaTemplate(tochkaPurposeDeposit, templateVars)
        const tochkaNameEdited    = fillTochkaTemplate(tochkaNameDeposit, templateVars)

        const amountStr     = toPay.toFixed(2)
        const guestPageLink = `${process.env.FRONTEND_URL}/c/?id=${booking.link}&red=tochka&kind=deposit`

        let tochkaRes
        try {
            tochkaRes = await fetch('https://enter.tochka.com/uapi/acquiring/v1.0/payments_with_receipt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${tochkaApiKey}`
                },
                body: JSON.stringify({
                    Data: {
                        customerCode: tochkaCustomerCode,
                        amount: amountStr,
                        purpose: tochkaPurposeEdited,
                        redirectUrl: guestPageLink,
                        failRedirectUrl: guestPageLink,
                        paymentMode: tochkaPaymentMode,
                        saveCard: false,
                        merchantId: tochkaMerchantId,
                        preAuthorization: false,
                        ttl: 11,
                        Client: {
                            email
                        },
                        Items: [
                            {
                                vatType: tochkaVatType,
                                name: tochkaNameEdited,
                                amount: amountStr,
                                quantity: 1,
                                paymentMethod: 'full_payment',
                                paymentObject: 'service',
                                Supplier: {
                                    phone: tochkaPhone,
                                    name: tochkaOrgName || '',
                                    taxCode: tochkaTaxCode || ''
                                }
                            }
                        ],
                        Supplier: {
                            phone: tochkaPhone,
                            name: tochkaOrgName || '',
                            taxCode: tochkaTaxCode || ''
                        }
                    }
                })
            })
        } catch (err) {
            fastify.log.error(`[Точка] Ошибка сети при создании платежа (залог): ${err.message}`)
            return reply.status(502).send({ error: 'Не удалось связаться с банком' })
        }

        if (!tochkaRes.ok) {
            const errorText = await tochkaRes.text()
            fastify.log.error(`[Точка] Ошибка создания платежа (залог). Статус: ${tochkaRes.status} | Ответ: ${errorText}`)
            return reply.status(502).send({ error: 'Не удалось создать ссылку на оплату' })
        }

        const tochkaData  = await tochkaRes.json()
        const paymentData = tochkaData.Data

        const payment = await fastify.prisma.payment.create({
            data: {
                cabinetid:     booking.cabinet,
                bookingId:     booking.id,
                amount:        parseFloat(paymentData.amount),
                type:          'DEPOSIT',
                method:        'TOCHKA',
                status:        'PENDING',
                externalId:    paymentData.operationId,
                link:          paymentData.paymentLink,
                linkExpiresAt: new Date(Date.now() + 10 * 60 * 1000)
            }
        })

        return reply.send({ url: payment.link })
    })

    fastify.post('/payment/uploadReceipt', async (req, reply) => {
        const type = req.query.type === 'DEPOSIT' ? 'DEPOSIT' : 'PAY'
        const { id } = req.query

        const booking = await fastify.prisma.bookings.findFirst({ where: { link: id } })
        if (!booking) return reply.status(404).send({ error: 'Booking not found' })

        const object = await fastify.prisma.objects.findFirst({
            where: { realtyid: booking.realty_id, cabinetid: booking.cabinet },
            select: { paymentchanel: true, depositchanel: true, deposit: true }
        })
        if (!object) return reply.status(404).send({ error: 'Object not found' })

        const channel = type === 'DEPOSIT' ? object.depositchanel : object.paymentchanel
        if (channel !== 'TRANSFER') {
            return reply.status(400).send({ error: 'Приём через перевод не настроен для этого объекта' })
        }

        const existing = await fastify.prisma.payment.findFirst({
            where: { bookingId: booking.id, cabinetid: booking.cabinet, type, method: 'TRANSFER' },
            orderBy: { createdAt: 'desc' }
        })
        if (existing && (existing.status === 'PENDING' || existing.status === 'PAID')) {
            return reply.status(400).send({ error: 'Чек уже прикреплён и находится на проверке либо платёж уже подтверждён' })
        }

        let amount
        if (type === 'DEPOSIT') {
            const depositTarget = (booking.manual_deposit !== null && booking.manual_deposit !== undefined)
                ? booking.manual_deposit
                : (parseFloat(object.deposit) || 0)
            const paidAgg = await fastify.prisma.payment.aggregate({
                where: { bookingId: booking.id, cabinetid: booking.cabinet, type: 'DEPOSIT', status: { in: ['PAID', 'RETURNED'] } },
                _sum: { amount: true }
            })
            amount = Math.max(0, depositTarget - (paidAgg._sum.amount || 0))
        } else {
            const paidAgg = await fastify.prisma.payment.aggregate({
                where: { bookingId: booking.id, cabinetid: booking.cabinet, type: 'PAY', status: { in: ['PAID', 'RETURNED'] } },
                _sum: { amount: true }
            })
            amount = Math.max(0, (booking.balance_to_be_paid_1 || 0) - (paidAgg._sum.amount || 0))
        }

        if (amount <= 0) {
            return reply.status(400).send({ error: 'Нет суммы к оплате' })
        }

        const data = await req.file()
        if (!data) return reply.status(400).send({ error: 'Файл не загружен' })

        const allowedExt = ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.pdf']
        const ext = path.extname(data.filename).toLowerCase()
        if (!allowedExt.includes(ext)) {
            return reply.status(400).send({ error: 'Допустимы только изображения или PDF-файл' })
        }

        const fileName = `${crypto.randomUUID()}${ext}`
        const dir = path.join(__dirname, '..', '..', 'uploads', 'receipts', String(booking.id))
        await fs.mkdir(dir, { recursive: true })
        await fs.writeFile(path.join(dir, fileName), await data.toBuffer())

        const payment = await fastify.prisma.payment.create({
            data: {
                cabinetid:  booking.cabinet,
                bookingId:  booking.id,
                amount,
                type,
                method:     'TRANSFER',
                status:     'PENDING',
                receiptUrl: `/uploads/receipts/${booking.id}/${fileName}`
            }
        })

        await fastify.prisma.logs.create({
            data: {
                cabinetid: booking.cabinet,
                status:    'INFO',
                message:   `Перевод | Гость прикрепил чек по бронированию #${booking.id} (${type === 'DEPOSIT' ? 'залог' : 'оплата'})`
            }
        }).catch(() => {})

        return reply.send({ ok: true, payment })
    })

    fastify.post('/review', async (req, reply) => {
        const { id, rating } = req.body

        if (!rating || rating < 1 || rating > 5) {
            return reply.status(400).send({ error: 'Rating must be 1–5' })
        }

        const booking = await fastify.prisma.bookings.findFirst({
            where:  { link: id },
            select: { id: true }
        })

        if (!booking) return reply.status(404).send({ error: 'Booking not found' })

        await fastify.prisma.bookings.update({
            where: { id: booking.id },
            data:  { review: parseInt(rating) }
        })

        return reply.send({ ok: true })
    })
}
