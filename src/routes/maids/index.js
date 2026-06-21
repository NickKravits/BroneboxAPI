module.exports = async (fastify) => {
  // GET /maids/getall
  fastify.get('/getall', async (req, reply) => {
    try {
        await req.jwtVerify()

        const userId = req.user.id

        let haveRights = false;

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
                    managemaids: true
                }
            })
            if (staff === null) {
                haveRights = false;
            } else {
                if (staff.managemaids === "YES") {
                    haveRights = true;
                } else {
                    haveRights = false
            }
            }
            
        } else {
            haveRights = true;
        }

        const maidsList = await fastify.prisma.maids.findMany({
        where: { 
            cabinetid: user.cabinet 
        },
            select: {
                id: true,
                name: true,
                rating: true
                }
            })

        return reply.send({ maids: maidsList, haveRights })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

    fastify.post('/create', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id

            const { name } = req.body

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    role: true,
                    cabinet: true
                }
            })

            if (!user) {
                return reply.status(404).send({ error: 'Пользователь не найден' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                const staff = await fastify.prisma.staff.findUnique({
                    where: {id: userId, cabinetid: user.cabinet},
                    select: {
                        managemaids: true
                    }
                })

                if (staff === null || staff.managemaids !== "YES") {
                    return reply.status(403).send({ error: 'Недостаточно прав для создания горничной' })
                }
            }

            const newMaid = await fastify.prisma.maids.create({
                data: {
                    name,
                    cabinetid: user.cabinet
                }
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Горничные | Горничная создана ${name}`
            }
            })

            return reply.send({ message: 'Горничная успешно создана' })

        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    // GET /maids/schedule?date=YYYY-MM-DD
    fastify.get('/schedule', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { date } = req.query

            if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
                return reply.status(400).send({ error: 'Не указана дата' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            // All active objects
            const objects = await fastify.prisma.objects.findMany({
                where: { cabinetid: user.cabinet, active: 'YES' },
                select: { id: true, name: true, location: true, realtyid: true, checkindef: true, checkoutdef: true }
            })

            // All bookings touching this date (ending, starting, or spanning)
            const allBookings = await fastify.prisma.bookings.findMany({
                where: {
                    cabinet: user.cabinet,
                    status: { not: 'deleted' },
                    OR: [
                        { end_date: date },
                        { begin_date: date },
                        { begin_date: { lt: date }, end_date: { gt: date } }
                    ]
                }
            })

            // Saved schedule entries for this date
            const scheduleEntries = await fastify.prisma.cleaningSchedule.findMany({
                where: { cabinetid: user.cabinet, date }
            })

            const maids = await fastify.prisma.maids.findMany({
                where: { cabinetid: user.cabinet },
                select: { id: true, name: true }
            })

            const entries = []

            for (const object of objects) {
                const objBookings = allBookings.filter(b => b.realty_id === object.realtyid)

                // Booking ending today (departing guests — whose checkout triggers the cleaning)
                const checkoutBooking = objBookings.find(b => b.end_date === date)
                // Booking spanning today (guests still staying)
                const ongoingBooking  = objBookings.find(b => b.begin_date < date && b.end_date > date)
                // Booking starting today (next guests arriving)
                const checkinBooking  = objBookings.find(b => b.begin_date === date)

                const schedule = scheduleEntries.find(s => s.objectid === object.id)

                let status, sortOrder, defaultIncluded

                if (ongoingBooking) {
                    // Guests are still staying — exclude, push to bottom
                    status = 'ongoing'
                    sortOrder = 2
                    defaultIncluded = false
                } else if (checkoutBooking) {
                    // Guests checking out today — include, clean the room
                    status = 'checkout'
                    sortOrder = 0
                    defaultIncluded = true
                } else if (checkinBooking) {
                    // No one checking out, but new guests arriving — room needs cleaning
                    status = 'empty'
                    sortOrder = 0
                    defaultIncluded = true
                } else {
                    // No booking at all today — not occupied since last cleaning
                    status = 'empty'
                    sortOrder = 1
                    defaultIncluded = false
                }

                entries.push({
                    objectid: object.id,
                    objectName: object.name,
                    objectAddress: object.location,
                    objectCheckinDef: object.checkindef,
                    objectCheckoutDef: object.checkoutdef,

                    status,
                    sortOrder,

                    // Departing guests (checkout booking)
                    checkoutBookingId: checkoutBooking?.id ?? null,
                    checkoutDate: checkoutBooking?.end_date ?? null,
                    checkoutTime: schedule?.checkout_time ?? checkoutBooking?.end_time ?? '',
                    hasBookingCheckoutTime: !!checkoutBooking?.end_time,
                    guestReview: checkinBooking?.review ?? null,

                    // Arriving guests (next booking, if any)
                    checkinBookingId: checkinBooking?.id ?? null,
                    checkinDate: checkinBooking?.begin_date ?? null,
                    checkinTime: schedule?.checkin_time ?? checkinBooking?.begin_time ?? '',
                    hasBookingCheckinTime: !!checkinBooking?.begin_time,
                    hasNextBooking: !!checkinBooking,

                    // Ongoing booking info
                    ongoingCheckin:  ongoingBooking?.begin_date ?? null,
                    ongoingCheckout: ongoingBooking?.end_date ?? null,

                    maidId:   schedule?.maid_id ?? null,
                    comment:  schedule?.comment ?? (checkinBooking?.notes ?? ''),
                    included: schedule ? schedule.included === 'YES' : defaultIncluded
                })
            }

            // Sort: checkout first (0), empty (1), ongoing at bottom (2)
            entries.sort((a, b) => a.sortOrder - b.sortOrder)

            return reply.send({ entries, maids })
        } catch (err) {
            console.error(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })

    // POST /maids/schedule/save
    fastify.post('/schedule/save', async (req, reply) => {
        try {
            await req.jwtVerify()
            const userId = req.user.id
            const { date, entries } = req.body

            if (!date || !Array.isArray(entries)) {
                return reply.status(400).send({ error: 'Неверные данные' })
            }

            const user = await fastify.prisma.user.findUnique({
                where: { id: userId },
                select: { cabinet: true }
            })
            if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

            for (const entry of entries) {
                const data = {
                    cabinetid: user.cabinet,
                    objectid: entry.objectid,
                    date,
                    booking_id: entry.bookingId || null,
                    maid_id: entry.maidId ? Number(entry.maidId) : null,
                    checkin_time: entry.checkinTime || null,
                    checkout_time: entry.checkoutTime || null,
                    comment: entry.comment || null,
                    included: entry.included ? 'YES' : 'NO'
                }

                await fastify.prisma.cleaningSchedule.upsert({
                    where: {
                        cabinetid_objectid_date: {
                            cabinetid: user.cabinet,
                            objectid: entry.objectid,
                            date
                        }
                    },
                    create: data,
                    update: {
                        booking_id: data.booking_id,
                        maid_id: data.maid_id,
                        checkin_time: data.checkin_time,
                        checkout_time: data.checkout_time,
                        comment: data.comment,
                        included: data.included
                    }
                })
            }

            return reply.send({ message: 'График сохранён' })
        } catch (err) {
            console.error(err)
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
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
                    role: true,
                    cabinet: true
                }
            })

            if (!user) {
                return reply.status(404).send({ error: 'Пользователь не найден' })
            }

            if (user.role !== 'ADMINISTRATOR') {
                const staff = await fastify.prisma.staff.findUnique({
                    where: {id: userId, cabinetid: user.cabinet},
                    select: {
                        managemaids: true
                    }
                })

                if (staff === null || staff.managemaids !== "YES") {
                    return reply.status(403).send({ error: 'Недостаточно прав для удаления горничной' })
                }
            }

            const maid = await fastify.prisma.maids.findUnique({
                where: { id, cabinetid: user.cabinet },
                select: {
                    id: true,
                    name: true
                }
            })

            if (!maid) {
                return reply.status(404).send({ error: 'Горничная не найдена' })
            }

            await fastify.prisma.maids.delete({
                where: { id: maid.id, cabinetid: user.cabinet}
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Горничные | Горничная удалена ${maid.name}`
            }
            })

            return reply.send({ message: 'Горничная успешно удалена' })
        } catch (err) {
            return reply.status(401).send({ error: 'Неавторизованный доступ' })
        }
    })
}