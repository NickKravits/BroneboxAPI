module.exports = async (fastify) => {
    // POST /guest/get
    fastify.post('/get', async (req, reply) => {
        const { id } = req.body

        const booking  = await fastify.prisma.bookings.findFirst({
            where: { link: id },
                select: {
                    status: true,
                    id: true,
                    begin_date: true,
                    end_date: true,
                    realty_id: true,
                    amount: true,
                    prepayment: true,
                    balance_to_be_paid_1: true,
                    price_per_day: true,
                    deposit: true, //MONETA ВНЕСЕНО
                    fio: true,
                    begin_time: true,
                    end_time: true,
                    contract_link: true,
                    review: true
                }
        })

        const objects = await fastify.prisma.objects.findFirst({
            where: { realtyid: String(booking.realty_id)},
            select: {
                id: true,
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
                depositchanel: true,
                paymentchanel: true
            }
        })

        

        const photos = await fastify.prisma.objectPhoto.findMany({
            where: { objectId: objects.id },
            select: { id: true, url: true },
            orderBy: { id: 'asc' }
        })

        return reply.send({ booking, objects, photos })

    })
}