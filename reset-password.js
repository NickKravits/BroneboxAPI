const bcrypt = require('bcrypt')
const { PrismaClient } = require('./src/generated/prisma/client')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb')

// ← Поменяй эти значения
const LOGIN    = 'developer'
const NEW_PASS = '12345'

const adapter = new PrismaMariaDb({
    host:     'localhost',
    port:     3306,
    user:     'root',
    password: 'Xq7#mK2$vR9pLw4!',
    database: 'bronebox',
    connectionLimit: 1,
})

const prisma = new PrismaClient({ adapter })

async function main() {
    const user = await prisma.user.findUnique({ where: { login: LOGIN } })

    if (!user) {
        console.error(`Пользователь "${LOGIN}" не найден`)
        process.exit(1)
    }

    const hashed = await bcrypt.hash(NEW_PASS, 10)

    await prisma.user.update({
        where: { login: LOGIN },
        data: { password: hashed, tempass: 'NO' }
    })

    console.log(`✓ Пароль для "${LOGIN}" обновлён`)
    console.log(`  Логин:  ${LOGIN}`)
    console.log(`  Пароль: ${NEW_PASS}`)
}

main()
    .catch(err => { console.error(err); process.exit(1) })
    .finally(() => prisma.$disconnect())
