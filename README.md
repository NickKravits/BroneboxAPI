# Bronebox API

Backend (REST API) платформы **Bronebox** — сервиса для управления бизнесом посуточной аренды квартир.

Это часть проекта из двух репозиториев:
- **BroneboxAPI** (этот репозиторий) — бэкенд
- **[BroneboxCRM](https://github.com/NickKravits/BroneboxCRM)** — фронтенд (CRM-панель)

## О проекте

Bronebox помогает управлять посуточной сдачей квартир: бронирования, объекты (квартиры), горничные и график уборки, платежи и возвраты, интеграции с каналами продаж, гостевые страницы (оплата, депозит, договор, отзыв). Поддерживает мультитенантность — несколько независимых "кабинетов" (аккаунтов) с ролями администратор/сотрудник.

## Стек

- **Node.js** + **Fastify 5**
- **Prisma ORM 7** (адаптер MySQL/MariaDB)
- **JWT**-аутентификация (`@fastify/jwt`) + `bcrypt` для паролей
- `@fastify/multipart` — загрузка файлов (фото объектов, чеки)
- `@fastify/static` — раздача загруженных файлов
- `@fastify/cors`, `@fastify/helmet`, `@fastify/rate-limit`
- Server-Sent Events для real-time уведомлений
- Интеграции: **Точка Банк** (эквайринг и возвраты), **RealtyCalendar**, **OkiDoki** (каналы бронирования)

## Структура проекта

```
BroneboxAPI/
├── index.js                  # точка входа: регистрация плагинов и роутов
├── prisma/
│   ├── schema.prisma          # модели БД (User, Cabinet, Objects, Bookings, Payment, Maids...)
│   └── migrations/
├── prisma.config.ts
├── src/
│   ├── plugins/                # prisma, jwt, sse
│   ├── routes/
│   │   ├── auth/                 # вход, регистрация кабинета
│   │   ├── users/                 # профиль пользователя
│   │   ├── staff/                  # сотрудники и права доступа
│   │   ├── maids/                   # горничные и график уборки
│   │   ├── objects/                  # объекты (квартиры) и фото
│   │   ├── bookings/                  # бронирования
│   │   ├── guest/                      # гостевые эндпоинты (оплата, депозит, договор, отзыв)
│   │   ├── payments/                    # платежи, возвраты, статистика, отчёты
│   │   ├── integration/                  # RealtyCalendar, OkiDoki, Точка Банк
│   │   ├── webhook/                       # вебхуки внешних каналов бронирования
│   │   ├── logs/                           # журнал действий
│   │   ├── cabinet/                         # настройки кабинета, шаблоны
│   │   └── events/                           # Server-Sent Events
│   ├── services/                              # интеграция с Точка Банк и др.
│   ├── cron/                                   # expireStalePayments — снятие просроченных оплат
│   └── generated/prisma/                        # сгенерированный Prisma Client
└── .env.example
```

## Требования

- Node.js 18+
- MySQL или MariaDB
- npm

## Установка

**1. Клонировать репозиторий**

```bash
git clone https://github.com/NickKravits/BroneboxAPI.git
cd BroneboxAPI
```

**2. Установить зависимости**

```bash
npm install
```

**3. Настроить переменные окружения**

Скопировать `.env.example` в `.env` и заполнить значения:

```bash
cp .env.example .env
```

| Переменная | Описание |
|---|---|
| `DATABASE_URL` | Строка подключения вида `mysql://USER:PASSWORD@HOST:3306/DB_NAME` |
| `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_SSL` | Параметры подключения к БД |
| `JWT_SECRET` | Секрет для подписи JWT-токенов |
| `IP_ADDRESS` | Хост, на котором слушает сервер (например `127.0.0.1` или `0.0.0.0`) |
| `PORT` | Порт сервера (по умолчанию `3000`) |
| `DOMEN` | Адрес фронтенда для локальной разработки (CORS) |
| `APP_URL` | Публичный URL этого API |
| `FRONTEND_URL` | Публичный URL фронтенда (CRM) |
| `ADMIN_REGISTRATION_KEY` | Секретный ключ, обязателен для `POST /auth/register` при создании нового кабинета/администратора. Сгенерировать: `node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"` |
| `CORS_ALLOWED_ORIGINS` | Разрешённые origin через запятую, без пробелов. Пусто/не задано — разрешены все (dev-режим) |

**4. Применить миграции и сгенерировать Prisma Client**

```bash
npx prisma generate
npx prisma migrate deploy
```

Для разработки со свежей БД можно использовать `npx prisma migrate dev`.

**5. Запустить сервер**

```bash
node index.js
```

API поднимется на `http://<IP_ADDRESS>:<PORT>` (по умолчанию `http://127.0.0.1:3000`).

## Основные разделы API

Роуты подключены со следующими префиксами:

| Префикс | Назначение |
|---|---|
| `/auth` | Вход, регистрация нового кабинета |
| `/users` | Профиль текущего пользователя |
| `/staff` | Сотрудники кабинета и их права |
| `/maids` | Горничные и график уборки |
| `/objects` | Объекты (квартиры) и фото |
| `/bookings` | Бронирования |
| `/guest` | Публичные эндпоинты для гостя (оплата, депозит, договор, отзыв) |
| `/payments` | Платежи, возвраты, статистика, отчёты |
| `/integration` | Интеграции: RealtyCalendar, OkiDoki, Точка Банк |
| `/webhook` | Вебхуки внешних каналов бронирования |
| `/logs` | Журнал событий |
| `/cabinet` | Настройки кабинета, шаблоны уборки и инструкций |
| `/events` | Server-Sent Events (real-time уведомления) |
| `/uploads` | Раздача загруженных файлов (фото объектов, чеки) |

## Связанные репозитории

- Фронтенд (CRM): [BroneboxCRM](https://github.com/NickKravits/BroneboxCRM)
