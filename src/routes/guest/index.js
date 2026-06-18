'use strict'

// Prisma returns enum keys (e.g. EUROPE_MOSCOW), not the @map values (Europe/Moscow).
// This table converts them to valid IANA timezone strings.
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

    // ── Timezone helpers ───────────────────────────────────────────────────

    // Converts a date string + time string (local in `timezone`) to a UTC Date.
    // Strategy: create estimate as if the time is UTC, check what it looks like
    // in the target timezone, then shift by the difference.
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

    // Returns true if the block should be visible now, based on ShowSettings enum.
    function shouldShow(setting, beginDate, endDate, checkinTime, checkoutTime, timezone) {
        if (!setting) return false
        if (setting === 'IMMEDIATELY') return true

        const nowUTC = new Date()
        const bd = beginDate ? new Date(beginDate).toISOString().split('T')[0] : null
        const ed = endDate   ? new Date(endDate).toISOString().split('T')[0]   : null

        if (setting === 'DAY_BEFORE' && bd) {
            const checkinUTC = localToUTC(bd, checkinTime, timezone)
            return nowUTC >= new Date(checkinUTC.getTime() - 24 * 60 * 60 * 1000)
        }
        if (setting === 'AFTER_CHECKIN' && bd) {
            return nowUTC >= localToUTC(bd, checkinTime, timezone)
        }
        if (setting === 'AFTER_CHECKOUT' && ed) {
            return nowUTC >= localToUTC(ed, checkoutTime, timezone)
        }
        return false
    }

    // ── POST /guest/get ────────────────────────────────────────────────────
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
                fio:                  true,
                begin_time:           true,
                end_time:             true,
                contract_link:        true,
                review:               true,
                source:               true,
                cabinet:              true,
            }
        })

        if (!booking) {
            return reply.status(404).send({ error: 'Booking not found' })
        }

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

        const cabinet = await fastify.prisma.cabinet.findFirst({
            where:  { id: booking.cabinet },
            select: { Timezone: true }
        })

        const photos = objects
            ? await fastify.prisma.objectPhoto.findMany({
                where:   { objectId: objects.id },
                select:  { id: true, url: true },
                orderBy: { id: 'asc' }
            })
            : []

        const timezone    = TZ_MAP[cabinet?.Timezone] ?? 'Europe/Moscow'
        const checkinTime  = objects?.checkindef  ?? '14:00'
        const checkoutTime = objects?.checkoutdef ?? '12:00'

        // Booking is "completed" if checkout time has passed OR it's cancelled/deleted
        const cancelledOrDeleted = booking.status === 'canceled' || booking.status === 'deleted'
        const checkoutPassed = booking.end_date
            ? new Date() >= localToUTC(
                new Date(booking.end_date).toISOString().split('T')[0],
                checkoutTime,
                timezone
              )
            : false

        const completed = cancelledOrDeleted || checkoutPassed

        const show = objects ? {
            // Payment & deposit: not shown for completed bookings
            payanddeposit: !completed && shouldShow(
                objects.sspayanddeposit,
                booking.begin_date, booking.end_date,
                checkinTime, checkoutTime, timezone
            ),
            instruction: shouldShow(
                objects.ssinstruction,
                booking.begin_date, booking.end_date,
                checkinTime, checkoutTime, timezone
            ),
            // Contract: not shown for completed bookings
            contract: !completed && shouldShow(
                objects.sscontract,
                booking.begin_date, booking.end_date,
                checkinTime, checkoutTime, timezone
            ),
            // Review: always show for completed bookings, otherwise by schedule
            rateclean: completed || shouldShow(
                objects.ssrateclean,
                booking.begin_date, booking.end_date,
                checkinTime, checkoutTime, timezone
            ),
        } : {}

        return reply.send({ booking, objects, photos, show, completed })
    })

    // ── POST /guest/save-times ─────────────────────────────────────────────
    fastify.post('/save-times', async (req, reply) => {
        const { id, begin_time, end_time } = req.body

        const booking = await fastify.prisma.bookings.findFirst({
            where:  { link: id },
            select: { id: true }
        })

        if (!booking) return reply.status(404).send({ error: 'Booking not found' })

        await fastify.prisma.bookings.update({
            where: { id: booking.id },
            data: {
                ...(begin_time !== undefined && { begin_time }),
                ...(end_time   !== undefined && { end_time   }),
            }
        })

        return reply.send({ ok: true })
    })

    // ── POST /guest/review ─────────────────────────────────────────────────
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
