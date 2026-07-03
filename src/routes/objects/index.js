const bcrypt = require('bcrypt')

const path = require('path')
const fs = require('fs/promises') // Обязательно используем асинхронный fs
const crypto = require('crypto')

module.exports = async (fastify) => {
  // GET /objects/getall
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
                    manageobjects: true
                }
            })
            if (staff === null) {
                haveRights = false;
            } else {
                if (staff.manageobjects === "YES") {
                    haveRights = true;
                } else {
                    haveRights = false
            }
            }
            
        } else {
            haveRights = true;
        }

        const objectsList = await fastify.prisma.objects.findMany({
        where: {
            cabinetid: user.cabinet
        },
            select: {
                id: true,
                realtyid: true,
                name: true,
                location: true,
                active: true,
                checkindef: true,
                checkoutdef: true,
                depositchanel: true,
                paymentchanel: true,
                deposit: true,
                maplink: true
                }
            })

        return reply.send({ objects: objectsList, haveRights })
    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  fastify.post('/create', async (req, reply) => {
    try {
        await req.jwtVerify()
        const userId = req.user.id

        const { realtyId, name, instructions, checkInTime, checkOutTime, showPaymentTiming, showInstructionTiming, showContractTiming, showReviewTiming, location, mapLink, defaultDeposit, okiDokiRowId, okiDokiValueId, okiDokiNameId, okiDokiDateInId, okiDokiDateOutId, okiDokiDepositId, okiDokiPayPerDayId, okiDokiPayedId, okidokiactive, DepositChanel, PaymentChanel, active } = req.body
        const safeOkidokiactive = okidokiactive === 1 ? 1 : 0

        if (!name || !instructions || !checkInTime || !checkOutTime || !location || !defaultDeposit ) {
            return reply.status(400).send({ error: 'Отсутствуют обязательные поля' })
        }

        if (active !== "YES" && active !== "NO") {
            return reply.status(400).send({ error: 'Неверное значение поля active' })
        }

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
                        manageobjects: true
                    }
                })

                if (staff === null || staff.manageobjects !== "YES") {
                    return reply.status(403).send({ error: 'Недостаточно прав для создания объекта' })
                }
            }

            const VALID_TIMINGS = ["IMMEDIATELY", "DAY_BEFORE", "AFTER_CHECKIN", "AFTER_CHECKOUT"];
            const timingFields = { showPaymentTiming, showInstructionTiming, showContractTiming, showReviewTiming };

            if (DepositChanel !== "NONE" && DepositChanel !== "MONETA" && DepositChanel !== "TOCHKA" && DepositChanel != "TBANK") {
                return reply.status(400).send({ error: `Неверное значение поля ${field}: ${value}` });
            }

            if (PaymentChanel !== "NONE" && PaymentChanel !== "TOCHKA" && PaymentChanel != "TBANK") {
                return reply.status(400).send({ error: `Неверное значение поля ${field}: ${value}` });
            }

            for (const [field, value] of Object.entries(timingFields)) {
                if (value !== undefined && !VALID_TIMINGS.includes(value)) {
                    return reply.status(400).send({ error: `Неверное значение поля ${field}: ${value}` });
                }
            }

            const newObject = await fastify.prisma.objects.create({
                data: {
                    cabinetid: user.cabinet,
                    realtyid: Number(realtyId),
                    name,
                    instruction: instructions,
                    checkindef: checkInTime,
                    checkoutdef: checkOutTime,
                    sspayanddeposit: showPaymentTiming,
                    ssinstruction: showInstructionTiming,
                    sscontract: showContractTiming,
                    ssrateclean: showReviewTiming,
                    location,
                    maplink: mapLink,
                    deposit: defaultDeposit,
                    odstringid: okiDokiRowId,
                    odvalueid: okiDokiValueId,
                    odnameid: okiDokiNameId,
                    oddateinid: okiDokiDateInId,
                    oddateoutid: okiDokiDateOutId,
                    oddepositid: okiDokiDepositId,
                    odpayperdayid: okiDokiPayPerDayId,
                    odpayedid: okiDokiPayedId,
                    okidokiactive: safeOkidokiactive,
                    depositchanel: DepositChanel,
                    paymentchanel: PaymentChanel,
                    active
                }
            })

            await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Объекты | Создан объект ${name}`
            }
            })

            return reply.send({ newObject })

    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
  })

  fastify.post('/:id/photos/add', async (req, reply) => {
    await req.jwtVerify()
    const userId = req.user.id

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
            where: { id: userId, cabinetid: user.cabinet },
            select: {
                manageobjects: true
            }
        })

        if (staff === null || staff.manageobjects !== "YES") {
            return reply.status(403).send({ error: 'Недостаточно прав для создания объекта' })
        }
    }

    // Переводим ID в число сразу, чтобы использовать везде без ошибок
    const objectId = parseInt(req.params.id) 
    
    if (isNaN(objectId)) {
        return reply.status(400).send({ error: 'Некорректный ID объекта' })
    }

    const object = await fastify.prisma.objects.findUnique({
        where: { id: objectId },
        select: { id: true, cabinetid: true }
    })

    if (!object) {
        return reply.status(404).send({ error: 'Объект не найден' })
    }

    if (object.cabinetid !== user.cabinet) {
        return reply.status(403).send({ error: 'Недостаточно прав для добавления фото к этому объекту' })
    }

    const data = await req.file()
    if (!data) {
        return reply.status(400).send({ error: 'Файл не загружен' })
    }

    const ext = path.extname(data.filename)
    const fileName = `${crypto.randomUUID()}${ext}`
    
    // Поднимаемся на уровень выше к папке uploads, 
    // так как этот файл лежит внутри src/routes/
    const dir = path.join(__dirname, '..', '..', 'uploads', 'objects', String(objectId))

    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(path.join(dir, fileName), await data.toBuffer())

    const maxOrder = await fastify.prisma.objectPhoto.aggregate({
        where: { objectId },
        _max: { sortOrder: true }
    })
    const nextOrder = (maxOrder._max.sortOrder ?? -1) + 1

    const photo = await fastify.prisma.objectPhoto.create({
      data: {
        objectId: objectId,
        url: `/uploads/objects/${objectId}/${fileName}`,
        sortOrder: nextOrder
      }
    })

    return reply.send({ url: photo.url, id: photo.id })
})

  fastify.post('/get', async (req, reply) => {
    await req.jwtVerify()
    const userId = req.user.id

    const { objectId } = req.body

    if (!objectId) {
        return reply.status(400).send({ error: 'Отсутствует ID объекта' })
    }

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
            where: { id: userId, cabinetid: user.cabinet },
            select: {
                manageobjects: true
            }
        })

        if (staff === null) {
            return reply.status(403).send({ error: 'Недостаточно прав для просмотра информации об объекте' })
        }
    }

    const object = await fastify.prisma.objects.findUnique({
        where: { id: objectId, cabinetid: user.cabinet },
        select: {
            id: true,
            realtyid: true,
            name: true,
            instruction: true,
            checkindef: true,
            checkoutdef: true,
            sspayanddeposit: true,
            ssinstruction: true,
            sscontract: true,
            ssrateclean: true,
            location: true,
            maplink: true,
            deposit: true,
            odstringid: true,
            odvalueid: true,
            odnameid: true,
            oddateinid: true,
            oddateoutid: true,
            oddepositid: true,
            odpayperdayid: true,
            odpayedid: true,
            okidokiactive: true,
            depositchanel: true,
            paymentchanel: true,
            active: true,
            photos: {
                select: {
                    id: true,
                    url: true
                }
            }
        }
    })

    if (!object) {
        return reply.status(404).send({ error: 'Объект не найден' })
    }

    return reply.send({ object })
  })

  fastify.get('/:id/photos/get', async (req, reply) => {
    await req.jwtVerify()
    const userId = req.user.id

    const objectId = parseInt(req.params.id)

    if (isNaN(objectId)) {
        return reply.status(400).send({ error: 'Некорректный ID объекта' })
    }

    const user = await fastify.prisma.user.findUnique({
        where: { id: userId },
        select: { cabinet: true }
    })

    if (!user) {
        return reply.status(404).send({ error: 'Пользователь не найден' })
    }

    const object = await fastify.prisma.objects.findUnique({
        where: { id: objectId },
        select: { cabinetid: true }
    })

    if (!object) {
        return reply.status(404).send({ error: 'Объект не найден' })
    }

    if (object.cabinetid !== user.cabinet) {
        return reply.status(403).send({ error: 'Недостаточно прав' })
    }

    const photos = await fastify.prisma.objectPhoto.findMany({
        where: { objectId },
        select: { id: true, url: true },
        orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }]
    })

    return reply.send({ photos })
  })

  fastify.post('/:id/photos/reorder', async (req, reply) => {
    await req.jwtVerify()
    const userId = req.user.id
    const objectId = parseInt(req.params.id)
    const { photoIds } = req.body

    if (isNaN(objectId)) return reply.status(400).send({ error: 'Некорректный ID объекта' })
    if (!Array.isArray(photoIds)) return reply.status(400).send({ error: 'photoIds должен быть массивом' })

    const user = await fastify.prisma.user.findUnique({
        where: { id: userId },
        select: { cabinet: true, role: true }
    })
    if (!user) return reply.status(404).send({ error: 'Пользователь не найден' })

    if (user.role !== 'ADMINISTRATOR') {
        const staff = await fastify.prisma.staff.findUnique({
            where: { id: userId, cabinetid: user.cabinet },
            select: { manageobjects: true }
        })
        if (!staff || staff.manageobjects !== 'YES') {
            return reply.status(403).send({ error: 'Недостаточно прав' })
        }
    }

    const object = await fastify.prisma.objects.findUnique({
        where: { id: objectId },
        select: { cabinetid: true }
    })
    if (!object || object.cabinetid !== user.cabinet) {
        return reply.status(403).send({ error: 'Недостаточно прав' })
    }

    await Promise.all(
        photoIds.map((id, index) =>
            fastify.prisma.objectPhoto.updateMany({
                where: { id: parseInt(id), objectId },
                data: { sortOrder: index }
            })
        )
    )

    return reply.send({ ok: true })
  })

  fastify.post('/edit', async (req, reply) => {
    try {
        await req.jwtVerify()
        const userId = req.user.id

        const { objectId, realtyId, name, instructions, checkInTime, checkOutTime, showPaymentTiming, showInstructionTiming, showContractTiming, showReviewTiming, location, mapLink, defaultDeposit, okiDokiRowId, okiDokiValueId, okiDokiNameId, okiDokiDateInId, okiDokiDateOutId, okiDokiDepositId, okiDokiPayPerDayId, okiDokiPayedId, okidokiactive, DepositChanel, PaymentChanel, active } = req.body
        const safeOkidokiactive = okidokiactive === 1 ? 1 : 0

        if (!objectId || !name || !instructions || !checkInTime || !checkOutTime || !location || !defaultDeposit) {
            return reply.status(400).send({ error: 'Отсутствуют обязательные поля' })
        }

        if (active !== "YES" && active !== "NO") {
            return reply.status(400).send({ error: 'Неверное значение поля active' })
        }

        const user = await fastify.prisma.user.findUnique({
            where: { id: userId },
            select: { role: true, cabinet: true }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        if (user.role !== 'ADMINISTRATOR') {
            const staff = await fastify.prisma.staff.findUnique({
                where: { id: userId, cabinetid: user.cabinet },
                select: { manageobjects: true }
            })

            if (staff === null || staff.manageobjects !== "YES") {
                return reply.status(403).send({ error: 'Недостаточно прав для редактирования объекта' })
            }
        }

        const object = await fastify.prisma.objects.findUnique({
            where: { id: objectId },
            select: { id: true, cabinetid: true }
        })

        if (!object) {
            return reply.status(404).send({ error: 'Объект не найден' })
        }

        if (object.cabinetid !== user.cabinet) {
            return reply.status(403).send({ error: 'Недостаточно прав для редактирования этого объекта' })
        }

        const VALID_TIMINGS = ["IMMEDIATELY", "DAY_BEFORE", "AFTER_CHECKIN", "AFTER_CHECKOUT"]
        const timingFields = { showPaymentTiming, showInstructionTiming, showContractTiming, showReviewTiming }

        if (DepositChanel !== "NONE" && DepositChanel !== "MONETA" && DepositChanel !== "TOCHKA" && DepositChanel != "TBANK") {
            return reply.status(400).send({ error: `Неверное значение поля ${field}: ${value}` });
        }

        if (PaymentChanel !== "NONE" && PaymentChanel !== "TOCHKA" && PaymentChanel != "TBANK") {
            return reply.status(400).send({ error: `Неверное значение поля ${field}: ${value}` });
        }

        for (const [field, value] of Object.entries(timingFields)) {
            if (value !== undefined && !VALID_TIMINGS.includes(value)) {
                return reply.status(400).send({ error: `Неверное значение поля ${field}: ${value}` })
            }
        }

        const updatedObject = await fastify.prisma.objects.update({
            where: { id: objectId },
            data: {
                realtyid: realtyId,
                name,
                instruction: instructions,
                checkindef: checkInTime,
                checkoutdef: checkOutTime,
                sspayanddeposit: showPaymentTiming,
                ssinstruction: showInstructionTiming,
                sscontract: showContractTiming,
                ssrateclean: showReviewTiming,
                location,
                maplink: mapLink,
                deposit: defaultDeposit,
                odstringid: okiDokiRowId,
                odvalueid: okiDokiValueId,
                odnameid: okiDokiNameId,
                oddateinid: okiDokiDateInId,
                oddateoutid: okiDokiDateOutId,
                oddepositid: okiDokiDepositId,
                odpayperdayid: okiDokiPayPerDayId,
                odpayedid: okiDokiPayedId,
                okidokiactive: safeOkidokiactive,
                depositchanel: DepositChanel,
                paymentchanel: PaymentChanel,
                active
            }
        })

        await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Объекты | Объект обновлён ${name}`
            }
            })

        return reply.send({ message: 'Объект успешно обновлён', object: updatedObject })

    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
})

fastify.delete('/photos/:photoId', async (req, reply) => {
    try {
        await req.jwtVerify()
        const userId = req.user.id

        const photoId = parseInt(req.params.photoId)
        if (isNaN(photoId)) {
            return reply.status(400).send({ error: 'Некорректный ID фото' })
        }

        const user = await fastify.prisma.user.findUnique({
            where: { id: userId },
            select: { role: true, cabinet: true }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        const photo = await fastify.prisma.objectPhoto.findUnique({
            where: { id: photoId },
            include: { objects: { select: { cabinetid: true } } }
        })

        if (!photo) {
            return reply.status(404).send({ error: 'Фото не найдено' })
        }

        if (photo.objects.cabinetid !== user.cabinet) {
            return reply.status(403).send({ error: 'Недостаточно прав' })
        }

        // Удаляем файл с диска
        const filePath = path.join(__dirname, '..', '..', 'uploads', photo.url.replace('/uploads/', ''))
        await fs.unlink(filePath).catch(() => {}) // если файла нет — не падаем

        await fastify.prisma.objectPhoto.delete({ where: { id: photoId } })

        return reply.send({ message: 'Фото удалено' })

    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
})

    fastify.delete('/delete', async (req, reply) => {
    try {
        await req.jwtVerify()
        const userId = req.user.id

        const { objectId } = req.body

        if (!objectId) {
            return reply.status(400).send({ error: 'Отсутствует ID объекта' })
        }

        const user = await fastify.prisma.user.findUnique({
            where: { id: userId },
            select: { role: true, cabinet: true }
        })

        if (!user) {
            return reply.status(404).send({ error: 'Пользователь не найден' })
        }

        if (user.role !== 'ADMINISTRATOR') {
            const staff = await fastify.prisma.staff.findUnique({
                where: { id: userId, cabinetid: user.cabinet },
                select: { manageobjects: true }
            })
            if (!staff || staff.manageobjects !== "YES") {
                return reply.status(403).send({ error: 'Недостаточно прав' })
            }
        }

        const object = await fastify.prisma.objects.findUnique({
            where: { id: objectId },
            select: { id: true, cabinetid: true, name: true }
        })

        if (!object) {
            return reply.status(404).send({ error: 'Объект не найден' })
        }

        if (object.cabinetid !== user.cabinet) {
            return reply.status(403).send({ error: 'Недостаточно прав' })
        }

        // Удаляем все связанные фото с диска
        const photos = await fastify.prisma.objectPhoto.findMany({
            where: { objectId },
            select: { url: true }
        })

        for (const photo of photos) {
            const filePath = path.join(__dirname, '..', '..', 'uploads', photo.url.replace('/uploads/', ''))
            await fs.unlink(filePath).catch(() => {}) // если файла нет — не падаем
        }

        await fastify.prisma.objectPhoto.deleteMany({ where: { objectId } })

        await fastify.prisma.bookings.deleteMany({ where: { realty_id: object.realtyid } })

        await fastify.prisma.objects.delete({ where: { id: objectId } })

        await fastify.prisma.logs.create({
            data: {
                cabinetid: user.cabinet,
                status: "SUCCESS",
                message: `Объекты | Объект удалён ${object.name}`
            }
            })

        return reply.send({ message: "Объект удалён!" })

    } catch (err) {
        return reply.status(401).send({ error: 'Неавторизованный доступ' })
    }
    })

    fastify.post('/getbyrid', async (req, reply) => {
    await req.jwtVerify()
    const userId = req.user.id

    const { rId } = req.body

    if (!rId) {
        return reply.status(400).send({ error: 'Отсутствует ID объекта' })
    }

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
            where: { id: userId, cabinetid: user.cabinet },
            select: {
                manageobjects: true
            }
        })

        if (staff === null) {
            return reply.status(403).send({ error: 'Недостаточно прав для просмотра информации об объекте' })
        }
    }

    const realtyid = rId

    const object = await fastify.prisma.objects.findFirst({
        where: { realtyid: realtyid, cabinetid: user.cabinet },
        select: {
            id: true,
            realtyid: true,
            name: true,
            instruction: true,
            checkindef: true,
            checkoutdef: true,
            sspayanddeposit: true,
            ssinstruction: true,
            sscontract: true,
            ssrateclean: true,
            location: true,
            maplink: true,
            deposit: true,
            odstringid: true,
            odvalueid: true,
            odnameid: true,
            oddateinid: true,
            oddateoutid: true,
            oddepositid: true,
            odpayperdayid: true,
            odpayedid: true,
            depositchanel: true,
            paymentchanel: true,
            active: true,
            photos: {
                select: {
                    id: true,
                    url: true
                }
            }
        }
    })

    if (!object) {
        return reply.status(404).send({ error: 'Объект не найден' })
    }

    return reply.send({ object })
  })

    fastify.get('/check-availability', async (req, reply) => {
        await req.jwtVerify()
        const userId = req.user.id

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

        const userTimezone = user.cabinet.Timezone || 'Europe/Moscow';

        const now = new Date()
        const todayStr = new Intl.DateTimeFormat('en-CA', {
            timeZone: userTimezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(now)

        const AvailableObjects = []

        //Находим объекты
        const objects = await fastify.prisma.objects.findMany({
            where: { cabinetid: user.cabinet }
        })

        for (const object of objects) {
            const book = await fastify.prisma.bookings.findFirst({
                where: {
                    status: "booked",
                    realty_id: object.realtyid,
                    begin_date: {lte: todayStr},
                    end_date: {gt: todayStr}
                }
            })

            if (!book) {
                AvailableObjects.push(object)
            }
        }

        return reply.send({ AvailableObjects })
    })
}