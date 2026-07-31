async function callTochkaRefund(fastify, apiKey, externalId, amountStr) {
    let res
    try {
        res = await fetch(`https://enter.tochka.com/uapi/acquiring/v1.0/payments/${externalId}/refund`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({ Data: { amount: amountStr } })
        })
    } catch (err) {
        fastify.log.error(`[Точка] Ошибка сети при возврате платежа ${externalId}: ${err.message}`)
        return { ok: false, networkError: true, error: err.message }
    }

    if (!res.ok) {
        const httpStatus = res.status
        const errorText = await res.text()
        fastify.log.error(`[Точка] Ошибка возврата платежа ${externalId}. Статус: ${httpStatus} | Ответ: ${errorText}`)
        return { ok: false, httpStatus, errorText }
    }

    const data = await res.json()
    return { ok: true, data }
}

async function returnTochkaFailedPayment({ fastify, cabinetid, externalId, amount }) {
    const payment = await fastify.prisma.payment.findFirst({
        where: { cabinetid, externalId: String(externalId), method: 'TOCHKA' }
    })

    if (!payment) {
        fastify.log.warn(`[Точка] returnTochkaFailedPayment: платёж с externalId=${externalId} не найден (cabinet ${cabinetid})`)
        return { ok: false, reason: 'not_found' }
    }

    if (payment.status === 'PENDING' || payment.status === 'PAID') {
        fastify.log.warn(`[Точка] returnTochkaFailedPayment: платёж ${payment.id} в статусе ${payment.status} — пропускаем, это не "потерянный" платёж`)
        return { ok: false, reason: 'wrong_status' }
    }

    const cabinet = await fastify.prisma.cabinet.findFirst({
        where: { id: cabinetid },
        select: { tochkaApiKey: true }
    })
    if (!cabinet?.tochkaApiKey) {
        fastify.log.error(`[Точка] returnTochkaFailedPayment: у кабинета ${cabinetid} нет tochkaApiKey`)
        return { ok: false, reason: 'no_api_key' }
    }

    const amountStr = Number(amount).toFixed(2)
    const result = await callTochkaRefund(fastify, cabinet.tochkaApiKey, externalId, amountStr)

    try {
        if (result.ok) {
            await fastify.prisma.logs.create({
                data: {
                    cabinetid,
                    status: 'SUCCESS',
                    message: `Точка | Автоматический возврат по неактуальному платежу #${payment.id} (externalId ${externalId}), сумма ${amountStr} ₽`
                }
            })
        } else {
            await fastify.prisma.logs.create({
                data: {
                    cabinetid,
                    status: 'ERROR',
                    message: `Точка | Не удалось автоматически вернуть средства по неактуальному платежу #${payment.id} (externalId ${externalId})`
                }
            })
        }
    } catch (err) {
        fastify.log.error(`[Точка] Не удалось записать лог автоматического возврата: ${err.message}`)
    }

    return result
}

module.exports = { callTochkaRefund, returnTochkaFailedPayment }
