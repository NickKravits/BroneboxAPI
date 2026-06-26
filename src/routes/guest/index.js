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

    // Returns { active: bool, availableAt: Date|null } based on ShowSettings enum.
    // availableAt is the UTC threshold Date when not yet active, or null when already active.
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

    // Formats a UTC Date to a human-readable Russian string in the given timezone.
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

        const bookingState = booking.status  // booked | canceled | deleted | request

        const isBlockedStatus = bookingState === 'canceled' || bookingState === 'deleted' || bookingState === 'request'
        const completed = bookingState === 'booked' && checkoutPassed

        let show = {}

        if (objects && !isBlockedStatus) {
            // Payment & deposit: always visible; payment button hides when balance_to_be_paid_1 = 0;
            // deposit button hides when Bookings.deposit >= Objects.deposit (paid) — stays visible even after checkout
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

            // Instruction: hidden after checkout; before that always visible with availableAt if not yet time
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

            // Contract: hidden only when no contract link (not provided); otherwise always visible including after completion
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

            // Review: always visible; active by schedule (also after completion); shows availableAt when not yet time
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

        return reply.send({ booking, objects, photos, show, bookingState, checkoutPassed })
    })

    // ── POST /guest/save-times ─────────────────────────────────────────────
    fastify.post('/save-times', async (req, reply) => {
        const { id, begin_time, end_time } = req.body

        const booking = await fastify.prisma.bookings.findFirst({
            where:  { link: id },
            select: { id: true, status: true, end_date: true, realty_id: true, cabinet: true }
        })

        if (!booking) return reply.status(404).send({ error: 'Booking not found' })

        // Determine if checkout has passed — times cannot be changed after completion
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
