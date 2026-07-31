
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cabinet
 * 
 */
export type Cabinet = $Result.DefaultSelection<Prisma.$CabinetPayload>
/**
 * Model Logs
 * 
 */
export type Logs = $Result.DefaultSelection<Prisma.$LogsPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Maids
 * 
 */
export type Maids = $Result.DefaultSelection<Prisma.$MaidsPayload>
/**
 * Model Objects
 * 
 */
export type Objects = $Result.DefaultSelection<Prisma.$ObjectsPayload>
/**
 * Model ObjectPhoto
 * 
 */
export type ObjectPhoto = $Result.DefaultSelection<Prisma.$ObjectPhotoPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>
/**
 * Model CleaningSchedule
 * 
 */
export type CleaningSchedule = $Result.DefaultSelection<Prisma.$CleaningSchedulePayload>
/**
 * Model UnprocessedBooking
 * 
 */
export type UnprocessedBooking = $Result.DefaultSelection<Prisma.$UnprocessedBookingPayload>
/**
 * Model BugReport
 * 
 */
export type BugReport = $Result.DefaultSelection<Prisma.$BugReportPayload>
/**
 * Model CabinetTemplate
 * 
 */
export type CabinetTemplate = $Result.DefaultSelection<Prisma.$CabinetTemplatePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMINISTRATOR: 'ADMINISTRATOR',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const TemPass: {
  YES: 'YES',
  NO: 'NO'
};

export type TemPass = (typeof TemPass)[keyof typeof TemPass]


export const Timezone: {
  ETC_GMT_1: 'ETC_GMT_1',
  EUROPE_CENTRAL: 'EUROPE_CENTRAL',
  EUROPE_KALININGRAD: 'EUROPE_KALININGRAD',
  EUROPE_MOSCOW: 'EUROPE_MOSCOW',
  EUROPE_SAMARA: 'EUROPE_SAMARA',
  ASIA_YEKATERINBURG: 'ASIA_YEKATERINBURG',
  ASIA_OMSK: 'ASIA_OMSK',
  ASIA_KRASNOYARSK: 'ASIA_KRASNOYARSK',
  ASIA_IRKUTSK: 'ASIA_IRKUTSK',
  ASIA_YAKUTSK: 'ASIA_YAKUTSK',
  ASIA_VLADIVOSTOK: 'ASIA_VLADIVOSTOK',
  ASIA_MAGADAN: 'ASIA_MAGADAN',
  ASIA_KAMCHATKA: 'ASIA_KAMCHATKA'
};

export type Timezone = (typeof Timezone)[keyof typeof Timezone]


export const LogStatus: {
  INFO: 'INFO',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

export type LogStatus = (typeof LogStatus)[keyof typeof LogStatus]


export const Thumbler: {
  YES: 'YES',
  NO: 'NO'
};

export type Thumbler = (typeof Thumbler)[keyof typeof Thumbler]


export const DepositChanel: {
  NONE: 'NONE',
  MONETA: 'MONETA',
  TOCHKA: 'TOCHKA',
  TBANK: 'TBANK'
};

export type DepositChanel = (typeof DepositChanel)[keyof typeof DepositChanel]


export const PaymentChanel: {
  NONE: 'NONE',
  TOCHKA: 'TOCHKA',
  TBANK: 'TBANK'
};

export type PaymentChanel = (typeof PaymentChanel)[keyof typeof PaymentChanel]


export const ShowSettings: {
  IMMEDIATELY: 'IMMEDIATELY',
  DAY_BEFORE: 'DAY_BEFORE',
  AFTER_CHECKIN: 'AFTER_CHECKIN',
  AFTER_CHECKOUT: 'AFTER_CHECKOUT'
};

export type ShowSettings = (typeof ShowSettings)[keyof typeof ShowSettings]


export const BookStatus: {
  booked: 'booked',
  deleted: 'deleted',
  canceled: 'canceled',
  request: 'request'
};

export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus]


export const PaymentType: {
  PAY: 'PAY',
  DEPOSIT: 'DEPOSIT'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const PaymentMethod: {
  MANAGER: 'MANAGER',
  TOCHKA: 'TOCHKA',
  TBANK: 'TBANK'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  RETURNED: 'RETURNED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type TemPass = $Enums.TemPass

export const TemPass: typeof $Enums.TemPass

export type Timezone = $Enums.Timezone

export const Timezone: typeof $Enums.Timezone

export type LogStatus = $Enums.LogStatus

export const LogStatus: typeof $Enums.LogStatus

export type Thumbler = $Enums.Thumbler

export const Thumbler: typeof $Enums.Thumbler

export type DepositChanel = $Enums.DepositChanel

export const DepositChanel: typeof $Enums.DepositChanel

export type PaymentChanel = $Enums.PaymentChanel

export const PaymentChanel: typeof $Enums.PaymentChanel

export type ShowSettings = $Enums.ShowSettings

export const ShowSettings: typeof $Enums.ShowSettings

export type BookStatus = $Enums.BookStatus

export const BookStatus: typeof $Enums.BookStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cabinet`: Exposes CRUD operations for the **Cabinet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cabinets
    * const cabinets = await prisma.cabinet.findMany()
    * ```
    */
  get cabinet(): Prisma.CabinetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **Logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.LogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maids`: Exposes CRUD operations for the **Maids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maids
    * const maids = await prisma.maids.findMany()
    * ```
    */
  get maids(): Prisma.MaidsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objects`: Exposes CRUD operations for the **Objects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objects
    * const objects = await prisma.objects.findMany()
    * ```
    */
  get objects(): Prisma.ObjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objectPhoto`: Exposes CRUD operations for the **ObjectPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObjectPhotos
    * const objectPhotos = await prisma.objectPhoto.findMany()
    * ```
    */
  get objectPhoto(): Prisma.ObjectPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleaningSchedule`: Exposes CRUD operations for the **CleaningSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleaningSchedules
    * const cleaningSchedules = await prisma.cleaningSchedule.findMany()
    * ```
    */
  get cleaningSchedule(): Prisma.CleaningScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unprocessedBooking`: Exposes CRUD operations for the **UnprocessedBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnprocessedBookings
    * const unprocessedBookings = await prisma.unprocessedBooking.findMany()
    * ```
    */
  get unprocessedBooking(): Prisma.UnprocessedBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bugReport`: Exposes CRUD operations for the **BugReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BugReports
    * const bugReports = await prisma.bugReport.findMany()
    * ```
    */
  get bugReport(): Prisma.BugReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cabinetTemplate`: Exposes CRUD operations for the **CabinetTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CabinetTemplates
    * const cabinetTemplates = await prisma.cabinetTemplate.findMany()
    * ```
    */
  get cabinetTemplate(): Prisma.CabinetTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cabinet: 'Cabinet',
    Logs: 'Logs',
    Staff: 'Staff',
    Maids: 'Maids',
    Objects: 'Objects',
    ObjectPhoto: 'ObjectPhoto',
    Bookings: 'Bookings',
    CleaningSchedule: 'CleaningSchedule',
    UnprocessedBooking: 'UnprocessedBooking',
    BugReport: 'BugReport',
    CabinetTemplate: 'CabinetTemplate',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cabinet" | "logs" | "staff" | "maids" | "objects" | "objectPhoto" | "bookings" | "cleaningSchedule" | "unprocessedBooking" | "bugReport" | "cabinetTemplate" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cabinet: {
        payload: Prisma.$CabinetPayload<ExtArgs>
        fields: Prisma.CabinetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CabinetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CabinetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findFirst: {
            args: Prisma.CabinetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CabinetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findMany: {
            args: Prisma.CabinetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          create: {
            args: Prisma.CabinetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          createMany: {
            args: Prisma.CabinetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CabinetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          update: {
            args: Prisma.CabinetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          deleteMany: {
            args: Prisma.CabinetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CabinetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CabinetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          aggregate: {
            args: Prisma.CabinetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCabinet>
          }
          groupBy: {
            args: Prisma.CabinetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CabinetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CabinetCountArgs<ExtArgs>
            result: $Utils.Optional<CabinetCountAggregateOutputType> | number
          }
        }
      }
      Logs: {
        payload: Prisma.$LogsPayload<ExtArgs>
        fields: Prisma.LogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          findFirst: {
            args: Prisma.LogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          findMany: {
            args: Prisma.LogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>[]
          }
          create: {
            args: Prisma.LogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          createMany: {
            args: Prisma.LogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          update: {
            args: Prisma.LogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          deleteMany: {
            args: Prisma.LogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.LogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Maids: {
        payload: Prisma.$MaidsPayload<ExtArgs>
        fields: Prisma.MaidsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaidsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaidsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload>
          }
          findFirst: {
            args: Prisma.MaidsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaidsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload>
          }
          findMany: {
            args: Prisma.MaidsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload>[]
          }
          create: {
            args: Prisma.MaidsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload>
          }
          createMany: {
            args: Prisma.MaidsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaidsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload>
          }
          update: {
            args: Prisma.MaidsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload>
          }
          deleteMany: {
            args: Prisma.MaidsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaidsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaidsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaidsPayload>
          }
          aggregate: {
            args: Prisma.MaidsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaids>
          }
          groupBy: {
            args: Prisma.MaidsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaidsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaidsCountArgs<ExtArgs>
            result: $Utils.Optional<MaidsCountAggregateOutputType> | number
          }
        }
      }
      Objects: {
        payload: Prisma.$ObjectsPayload<ExtArgs>
        fields: Prisma.ObjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload>
          }
          findFirst: {
            args: Prisma.ObjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload>
          }
          findMany: {
            args: Prisma.ObjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload>[]
          }
          create: {
            args: Prisma.ObjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload>
          }
          createMany: {
            args: Prisma.ObjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ObjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload>
          }
          update: {
            args: Prisma.ObjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload>
          }
          deleteMany: {
            args: Prisma.ObjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectsPayload>
          }
          aggregate: {
            args: Prisma.ObjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjects>
          }
          groupBy: {
            args: Prisma.ObjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ObjectsCountAggregateOutputType> | number
          }
        }
      }
      ObjectPhoto: {
        payload: Prisma.$ObjectPhotoPayload<ExtArgs>
        fields: Prisma.ObjectPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjectPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjectPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload>
          }
          findFirst: {
            args: Prisma.ObjectPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjectPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload>
          }
          findMany: {
            args: Prisma.ObjectPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload>[]
          }
          create: {
            args: Prisma.ObjectPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload>
          }
          createMany: {
            args: Prisma.ObjectPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ObjectPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload>
          }
          update: {
            args: Prisma.ObjectPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload>
          }
          deleteMany: {
            args: Prisma.ObjectPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjectPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObjectPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPhotoPayload>
          }
          aggregate: {
            args: Prisma.ObjectPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjectPhoto>
          }
          groupBy: {
            args: Prisma.ObjectPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjectPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjectPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ObjectPhotoCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      CleaningSchedule: {
        payload: Prisma.$CleaningSchedulePayload<ExtArgs>
        fields: Prisma.CleaningScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleaningScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleaningScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload>
          }
          findFirst: {
            args: Prisma.CleaningScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleaningScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload>
          }
          findMany: {
            args: Prisma.CleaningScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload>[]
          }
          create: {
            args: Prisma.CleaningScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload>
          }
          createMany: {
            args: Prisma.CleaningScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CleaningScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload>
          }
          update: {
            args: Prisma.CleaningScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload>
          }
          deleteMany: {
            args: Prisma.CleaningScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleaningScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CleaningScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningSchedulePayload>
          }
          aggregate: {
            args: Prisma.CleaningScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleaningSchedule>
          }
          groupBy: {
            args: Prisma.CleaningScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleaningScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleaningScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<CleaningScheduleCountAggregateOutputType> | number
          }
        }
      }
      UnprocessedBooking: {
        payload: Prisma.$UnprocessedBookingPayload<ExtArgs>
        fields: Prisma.UnprocessedBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnprocessedBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnprocessedBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload>
          }
          findFirst: {
            args: Prisma.UnprocessedBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnprocessedBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload>
          }
          findMany: {
            args: Prisma.UnprocessedBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload>[]
          }
          create: {
            args: Prisma.UnprocessedBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload>
          }
          createMany: {
            args: Prisma.UnprocessedBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnprocessedBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload>
          }
          update: {
            args: Prisma.UnprocessedBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload>
          }
          deleteMany: {
            args: Prisma.UnprocessedBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnprocessedBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnprocessedBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnprocessedBookingPayload>
          }
          aggregate: {
            args: Prisma.UnprocessedBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnprocessedBooking>
          }
          groupBy: {
            args: Prisma.UnprocessedBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnprocessedBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnprocessedBookingCountArgs<ExtArgs>
            result: $Utils.Optional<UnprocessedBookingCountAggregateOutputType> | number
          }
        }
      }
      BugReport: {
        payload: Prisma.$BugReportPayload<ExtArgs>
        fields: Prisma.BugReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BugReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BugReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload>
          }
          findFirst: {
            args: Prisma.BugReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BugReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload>
          }
          findMany: {
            args: Prisma.BugReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload>[]
          }
          create: {
            args: Prisma.BugReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload>
          }
          createMany: {
            args: Prisma.BugReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BugReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload>
          }
          update: {
            args: Prisma.BugReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload>
          }
          deleteMany: {
            args: Prisma.BugReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BugReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BugReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugReportPayload>
          }
          aggregate: {
            args: Prisma.BugReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBugReport>
          }
          groupBy: {
            args: Prisma.BugReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<BugReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.BugReportCountArgs<ExtArgs>
            result: $Utils.Optional<BugReportCountAggregateOutputType> | number
          }
        }
      }
      CabinetTemplate: {
        payload: Prisma.$CabinetTemplatePayload<ExtArgs>
        fields: Prisma.CabinetTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CabinetTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CabinetTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload>
          }
          findFirst: {
            args: Prisma.CabinetTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CabinetTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload>
          }
          findMany: {
            args: Prisma.CabinetTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload>[]
          }
          create: {
            args: Prisma.CabinetTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload>
          }
          createMany: {
            args: Prisma.CabinetTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CabinetTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload>
          }
          update: {
            args: Prisma.CabinetTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload>
          }
          deleteMany: {
            args: Prisma.CabinetTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CabinetTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CabinetTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetTemplatePayload>
          }
          aggregate: {
            args: Prisma.CabinetTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCabinetTemplate>
          }
          groupBy: {
            args: Prisma.CabinetTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CabinetTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CabinetTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<CabinetTemplateCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cabinet?: CabinetOmit
    logs?: LogsOmit
    staff?: StaffOmit
    maids?: MaidsOmit
    objects?: ObjectsOmit
    objectPhoto?: ObjectPhotoOmit
    bookings?: BookingsOmit
    cleaningSchedule?: CleaningScheduleOmit
    unprocessedBooking?: UnprocessedBookingOmit
    bugReport?: BugReportOmit
    cabinetTemplate?: CabinetTemplateOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ObjectsCountOutputType
   */

  export type ObjectsCountOutputType = {
    photos: number
  }

  export type ObjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | ObjectsCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * ObjectsCountOutputType without action
   */
  export type ObjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectsCountOutputType
     */
    select?: ObjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObjectsCountOutputType without action
   */
  export type ObjectsCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectPhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    cabinet: number | null
    tokenVersion: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    cabinet: number | null
    tokenVersion: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    login: string | null
    password: string | null
    tempass: $Enums.TemPass | null
    name: string | null
    role: $Enums.Role | null
    cabinet: number | null
    status: $Enums.Status | null
    createdAt: Date | null
    tokenVersion: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    login: string | null
    password: string | null
    tempass: $Enums.TemPass | null
    name: string | null
    role: $Enums.Role | null
    cabinet: number | null
    status: $Enums.Status | null
    createdAt: Date | null
    tokenVersion: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    login: number
    password: number
    tempass: number
    name: number
    role: number
    cabinet: number
    status: number
    createdAt: number
    tokenVersion: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    cabinet?: true
    tokenVersion?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    cabinet?: true
    tokenVersion?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    login?: true
    password?: true
    tempass?: true
    name?: true
    role?: true
    cabinet?: true
    status?: true
    createdAt?: true
    tokenVersion?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    login?: true
    password?: true
    tempass?: true
    name?: true
    role?: true
    cabinet?: true
    status?: true
    createdAt?: true
    tokenVersion?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    login?: true
    password?: true
    tempass?: true
    name?: true
    role?: true
    cabinet?: true
    status?: true
    createdAt?: true
    tokenVersion?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    login: string
    password: string
    tempass: $Enums.TemPass
    name: string | null
    role: $Enums.Role
    cabinet: number
    status: $Enums.Status
    createdAt: Date
    tokenVersion: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
    tempass?: boolean
    name?: boolean
    role?: boolean
    cabinet?: boolean
    status?: boolean
    createdAt?: boolean
    tokenVersion?: boolean
    staff?: boolean | User$staffArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    login?: boolean
    password?: boolean
    tempass?: boolean
    name?: boolean
    role?: boolean
    cabinet?: boolean
    status?: boolean
    createdAt?: boolean
    tokenVersion?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "login" | "password" | "tempass" | "name" | "role" | "cabinet" | "status" | "createdAt" | "tokenVersion", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | User$staffArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      login: string
      password: string
      tempass: $Enums.TemPass
      name: string | null
      role: $Enums.Role
      cabinet: number
      status: $Enums.Status
      createdAt: Date
      tokenVersion: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends User$staffArgs<ExtArgs> = {}>(args?: Subset<T, User$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly login: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly tempass: FieldRef<"User", 'TemPass'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly cabinet: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'Status'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly tokenVersion: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.staff
   */
  export type User$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cabinet
   */

  export type AggregateCabinet = {
    _count: CabinetCountAggregateOutputType | null
    _avg: CabinetAvgAggregateOutputType | null
    _sum: CabinetSumAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  export type CabinetAvgAggregateOutputType = {
    id: number | null
    balance: number | null
  }

  export type CabinetSumAggregateOutputType = {
    id: number | null
    balance: number | null
  }

  export type CabinetMinAggregateOutputType = {
    id: number | null
    Timezone: $Enums.Timezone | null
    realtycalendarid: string | null
    okidokiapi: string | null
    okidokiwebhookkey: string | null
    tochkaPhone: string | null
    tochkaApiKey: string | null
    tochkaMerchantId: string | null
    tochkaPurpose: string | null
    tochkaName: string | null
    tochkaPurposeDeposit: string | null
    tochkaNameDeposit: string | null
    tochkaCustomerCode: string | null
    tochkaOrgName: string | null
    tochkaTaxCode: string | null
    tochkaAppClientId: string | null
    tochkaWebhookKey: string | null
    cleaningTemplate: string | null
    approxTimeMarker: string | null
    emptyStayMarker: string | null
    cleaningHeader: string | null
    cleaningFooter: string | null
    balance: number | null
  }

  export type CabinetMaxAggregateOutputType = {
    id: number | null
    Timezone: $Enums.Timezone | null
    realtycalendarid: string | null
    okidokiapi: string | null
    okidokiwebhookkey: string | null
    tochkaPhone: string | null
    tochkaApiKey: string | null
    tochkaMerchantId: string | null
    tochkaPurpose: string | null
    tochkaName: string | null
    tochkaPurposeDeposit: string | null
    tochkaNameDeposit: string | null
    tochkaCustomerCode: string | null
    tochkaOrgName: string | null
    tochkaTaxCode: string | null
    tochkaAppClientId: string | null
    tochkaWebhookKey: string | null
    cleaningTemplate: string | null
    approxTimeMarker: string | null
    emptyStayMarker: string | null
    cleaningHeader: string | null
    cleaningFooter: string | null
    balance: number | null
  }

  export type CabinetCountAggregateOutputType = {
    id: number
    Timezone: number
    realtycalendarid: number
    okidokiapi: number
    okidokiwebhookkey: number
    tochkaPhone: number
    tochkaApiKey: number
    tochkaMerchantId: number
    tochkaPaymentMode: number
    tochkaVatType: number
    tochkaPurpose: number
    tochkaName: number
    tochkaPurposeDeposit: number
    tochkaNameDeposit: number
    tochkaCustomerCode: number
    tochkaOrgName: number
    tochkaTaxCode: number
    tochkaAppClientId: number
    tochkaWebhookKey: number
    cleaningTemplate: number
    approxTimeMarker: number
    emptyStayMarker: number
    cleaningHeader: number
    cleaningFooter: number
    balance: number
    _all: number
  }


  export type CabinetAvgAggregateInputType = {
    id?: true
    balance?: true
  }

  export type CabinetSumAggregateInputType = {
    id?: true
    balance?: true
  }

  export type CabinetMinAggregateInputType = {
    id?: true
    Timezone?: true
    realtycalendarid?: true
    okidokiapi?: true
    okidokiwebhookkey?: true
    tochkaPhone?: true
    tochkaApiKey?: true
    tochkaMerchantId?: true
    tochkaPurpose?: true
    tochkaName?: true
    tochkaPurposeDeposit?: true
    tochkaNameDeposit?: true
    tochkaCustomerCode?: true
    tochkaOrgName?: true
    tochkaTaxCode?: true
    tochkaAppClientId?: true
    tochkaWebhookKey?: true
    cleaningTemplate?: true
    approxTimeMarker?: true
    emptyStayMarker?: true
    cleaningHeader?: true
    cleaningFooter?: true
    balance?: true
  }

  export type CabinetMaxAggregateInputType = {
    id?: true
    Timezone?: true
    realtycalendarid?: true
    okidokiapi?: true
    okidokiwebhookkey?: true
    tochkaPhone?: true
    tochkaApiKey?: true
    tochkaMerchantId?: true
    tochkaPurpose?: true
    tochkaName?: true
    tochkaPurposeDeposit?: true
    tochkaNameDeposit?: true
    tochkaCustomerCode?: true
    tochkaOrgName?: true
    tochkaTaxCode?: true
    tochkaAppClientId?: true
    tochkaWebhookKey?: true
    cleaningTemplate?: true
    approxTimeMarker?: true
    emptyStayMarker?: true
    cleaningHeader?: true
    cleaningFooter?: true
    balance?: true
  }

  export type CabinetCountAggregateInputType = {
    id?: true
    Timezone?: true
    realtycalendarid?: true
    okidokiapi?: true
    okidokiwebhookkey?: true
    tochkaPhone?: true
    tochkaApiKey?: true
    tochkaMerchantId?: true
    tochkaPaymentMode?: true
    tochkaVatType?: true
    tochkaPurpose?: true
    tochkaName?: true
    tochkaPurposeDeposit?: true
    tochkaNameDeposit?: true
    tochkaCustomerCode?: true
    tochkaOrgName?: true
    tochkaTaxCode?: true
    tochkaAppClientId?: true
    tochkaWebhookKey?: true
    cleaningTemplate?: true
    approxTimeMarker?: true
    emptyStayMarker?: true
    cleaningHeader?: true
    cleaningFooter?: true
    balance?: true
    _all?: true
  }

  export type CabinetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinet to aggregate.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cabinets
    **/
    _count?: true | CabinetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CabinetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CabinetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CabinetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CabinetMaxAggregateInputType
  }

  export type GetCabinetAggregateType<T extends CabinetAggregateArgs> = {
        [P in keyof T & keyof AggregateCabinet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCabinet[P]>
      : GetScalarType<T[P], AggregateCabinet[P]>
  }




  export type CabinetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetWhereInput
    orderBy?: CabinetOrderByWithAggregationInput | CabinetOrderByWithAggregationInput[]
    by: CabinetScalarFieldEnum[] | CabinetScalarFieldEnum
    having?: CabinetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CabinetCountAggregateInputType | true
    _avg?: CabinetAvgAggregateInputType
    _sum?: CabinetSumAggregateInputType
    _min?: CabinetMinAggregateInputType
    _max?: CabinetMaxAggregateInputType
  }

  export type CabinetGroupByOutputType = {
    id: number
    Timezone: $Enums.Timezone
    realtycalendarid: string | null
    okidokiapi: string | null
    okidokiwebhookkey: string | null
    tochkaPhone: string | null
    tochkaApiKey: string | null
    tochkaMerchantId: string | null
    tochkaPaymentMode: JsonValue | null
    tochkaVatType: JsonValue | null
    tochkaPurpose: string | null
    tochkaName: string | null
    tochkaPurposeDeposit: string | null
    tochkaNameDeposit: string | null
    tochkaCustomerCode: string | null
    tochkaOrgName: string | null
    tochkaTaxCode: string | null
    tochkaAppClientId: string | null
    tochkaWebhookKey: string | null
    cleaningTemplate: string | null
    approxTimeMarker: string | null
    emptyStayMarker: string | null
    cleaningHeader: string | null
    cleaningFooter: string | null
    balance: number
    _count: CabinetCountAggregateOutputType | null
    _avg: CabinetAvgAggregateOutputType | null
    _sum: CabinetSumAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  type GetCabinetGroupByPayload<T extends CabinetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CabinetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CabinetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CabinetGroupByOutputType[P]>
            : GetScalarType<T[P], CabinetGroupByOutputType[P]>
        }
      >
    >


  export type CabinetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Timezone?: boolean
    realtycalendarid?: boolean
    okidokiapi?: boolean
    okidokiwebhookkey?: boolean
    tochkaPhone?: boolean
    tochkaApiKey?: boolean
    tochkaMerchantId?: boolean
    tochkaPaymentMode?: boolean
    tochkaVatType?: boolean
    tochkaPurpose?: boolean
    tochkaName?: boolean
    tochkaPurposeDeposit?: boolean
    tochkaNameDeposit?: boolean
    tochkaCustomerCode?: boolean
    tochkaOrgName?: boolean
    tochkaTaxCode?: boolean
    tochkaAppClientId?: boolean
    tochkaWebhookKey?: boolean
    cleaningTemplate?: boolean
    approxTimeMarker?: boolean
    emptyStayMarker?: boolean
    cleaningHeader?: boolean
    cleaningFooter?: boolean
    balance?: boolean
  }, ExtArgs["result"]["cabinet"]>



  export type CabinetSelectScalar = {
    id?: boolean
    Timezone?: boolean
    realtycalendarid?: boolean
    okidokiapi?: boolean
    okidokiwebhookkey?: boolean
    tochkaPhone?: boolean
    tochkaApiKey?: boolean
    tochkaMerchantId?: boolean
    tochkaPaymentMode?: boolean
    tochkaVatType?: boolean
    tochkaPurpose?: boolean
    tochkaName?: boolean
    tochkaPurposeDeposit?: boolean
    tochkaNameDeposit?: boolean
    tochkaCustomerCode?: boolean
    tochkaOrgName?: boolean
    tochkaTaxCode?: boolean
    tochkaAppClientId?: boolean
    tochkaWebhookKey?: boolean
    cleaningTemplate?: boolean
    approxTimeMarker?: boolean
    emptyStayMarker?: boolean
    cleaningHeader?: boolean
    cleaningFooter?: boolean
    balance?: boolean
  }

  export type CabinetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Timezone" | "realtycalendarid" | "okidokiapi" | "okidokiwebhookkey" | "tochkaPhone" | "tochkaApiKey" | "tochkaMerchantId" | "tochkaPaymentMode" | "tochkaVatType" | "tochkaPurpose" | "tochkaName" | "tochkaPurposeDeposit" | "tochkaNameDeposit" | "tochkaCustomerCode" | "tochkaOrgName" | "tochkaTaxCode" | "tochkaAppClientId" | "tochkaWebhookKey" | "cleaningTemplate" | "approxTimeMarker" | "emptyStayMarker" | "cleaningHeader" | "cleaningFooter" | "balance", ExtArgs["result"]["cabinet"]>

  export type $CabinetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cabinet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Timezone: $Enums.Timezone
      realtycalendarid: string | null
      okidokiapi: string | null
      okidokiwebhookkey: string | null
      tochkaPhone: string | null
      tochkaApiKey: string | null
      tochkaMerchantId: string | null
      tochkaPaymentMode: Prisma.JsonValue | null
      tochkaVatType: Prisma.JsonValue | null
      tochkaPurpose: string | null
      tochkaName: string | null
      tochkaPurposeDeposit: string | null
      tochkaNameDeposit: string | null
      tochkaCustomerCode: string | null
      tochkaOrgName: string | null
      tochkaTaxCode: string | null
      tochkaAppClientId: string | null
      tochkaWebhookKey: string | null
      cleaningTemplate: string | null
      approxTimeMarker: string | null
      emptyStayMarker: string | null
      cleaningHeader: string | null
      cleaningFooter: string | null
      balance: number
    }, ExtArgs["result"]["cabinet"]>
    composites: {}
  }

  type CabinetGetPayload<S extends boolean | null | undefined | CabinetDefaultArgs> = $Result.GetResult<Prisma.$CabinetPayload, S>

  type CabinetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CabinetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CabinetCountAggregateInputType | true
    }

  export interface CabinetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cabinet'], meta: { name: 'Cabinet' } }
    /**
     * Find zero or one Cabinet that matches the filter.
     * @param {CabinetFindUniqueArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CabinetFindUniqueArgs>(args: SelectSubset<T, CabinetFindUniqueArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cabinet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CabinetFindUniqueOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CabinetFindUniqueOrThrowArgs>(args: SelectSubset<T, CabinetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cabinet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CabinetFindFirstArgs>(args?: SelectSubset<T, CabinetFindFirstArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cabinet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CabinetFindFirstOrThrowArgs>(args?: SelectSubset<T, CabinetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cabinets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cabinets
     * const cabinets = await prisma.cabinet.findMany()
     * 
     * // Get first 10 Cabinets
     * const cabinets = await prisma.cabinet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CabinetFindManyArgs>(args?: SelectSubset<T, CabinetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cabinet.
     * @param {CabinetCreateArgs} args - Arguments to create a Cabinet.
     * @example
     * // Create one Cabinet
     * const Cabinet = await prisma.cabinet.create({
     *   data: {
     *     // ... data to create a Cabinet
     *   }
     * })
     * 
     */
    create<T extends CabinetCreateArgs>(args: SelectSubset<T, CabinetCreateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cabinets.
     * @param {CabinetCreateManyArgs} args - Arguments to create many Cabinets.
     * @example
     * // Create many Cabinets
     * const cabinet = await prisma.cabinet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CabinetCreateManyArgs>(args?: SelectSubset<T, CabinetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cabinet.
     * @param {CabinetDeleteArgs} args - Arguments to delete one Cabinet.
     * @example
     * // Delete one Cabinet
     * const Cabinet = await prisma.cabinet.delete({
     *   where: {
     *     // ... filter to delete one Cabinet
     *   }
     * })
     * 
     */
    delete<T extends CabinetDeleteArgs>(args: SelectSubset<T, CabinetDeleteArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cabinet.
     * @param {CabinetUpdateArgs} args - Arguments to update one Cabinet.
     * @example
     * // Update one Cabinet
     * const cabinet = await prisma.cabinet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CabinetUpdateArgs>(args: SelectSubset<T, CabinetUpdateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cabinets.
     * @param {CabinetDeleteManyArgs} args - Arguments to filter Cabinets to delete.
     * @example
     * // Delete a few Cabinets
     * const { count } = await prisma.cabinet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CabinetDeleteManyArgs>(args?: SelectSubset<T, CabinetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cabinets
     * const cabinet = await prisma.cabinet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CabinetUpdateManyArgs>(args: SelectSubset<T, CabinetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cabinet.
     * @param {CabinetUpsertArgs} args - Arguments to update or create a Cabinet.
     * @example
     * // Update or create a Cabinet
     * const cabinet = await prisma.cabinet.upsert({
     *   create: {
     *     // ... data to create a Cabinet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cabinet we want to update
     *   }
     * })
     */
    upsert<T extends CabinetUpsertArgs>(args: SelectSubset<T, CabinetUpsertArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetCountArgs} args - Arguments to filter Cabinets to count.
     * @example
     * // Count the number of Cabinets
     * const count = await prisma.cabinet.count({
     *   where: {
     *     // ... the filter for the Cabinets we want to count
     *   }
     * })
    **/
    count<T extends CabinetCountArgs>(
      args?: Subset<T, CabinetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CabinetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CabinetAggregateArgs>(args: Subset<T, CabinetAggregateArgs>): Prisma.PrismaPromise<GetCabinetAggregateType<T>>

    /**
     * Group by Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CabinetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CabinetGroupByArgs['orderBy'] }
        : { orderBy?: CabinetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CabinetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCabinetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cabinet model
   */
  readonly fields: CabinetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cabinet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CabinetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cabinet model
   */
  interface CabinetFieldRefs {
    readonly id: FieldRef<"Cabinet", 'Int'>
    readonly Timezone: FieldRef<"Cabinet", 'Timezone'>
    readonly realtycalendarid: FieldRef<"Cabinet", 'String'>
    readonly okidokiapi: FieldRef<"Cabinet", 'String'>
    readonly okidokiwebhookkey: FieldRef<"Cabinet", 'String'>
    readonly tochkaPhone: FieldRef<"Cabinet", 'String'>
    readonly tochkaApiKey: FieldRef<"Cabinet", 'String'>
    readonly tochkaMerchantId: FieldRef<"Cabinet", 'String'>
    readonly tochkaPaymentMode: FieldRef<"Cabinet", 'Json'>
    readonly tochkaVatType: FieldRef<"Cabinet", 'Json'>
    readonly tochkaPurpose: FieldRef<"Cabinet", 'String'>
    readonly tochkaName: FieldRef<"Cabinet", 'String'>
    readonly tochkaPurposeDeposit: FieldRef<"Cabinet", 'String'>
    readonly tochkaNameDeposit: FieldRef<"Cabinet", 'String'>
    readonly tochkaCustomerCode: FieldRef<"Cabinet", 'String'>
    readonly tochkaOrgName: FieldRef<"Cabinet", 'String'>
    readonly tochkaTaxCode: FieldRef<"Cabinet", 'String'>
    readonly tochkaAppClientId: FieldRef<"Cabinet", 'String'>
    readonly tochkaWebhookKey: FieldRef<"Cabinet", 'String'>
    readonly cleaningTemplate: FieldRef<"Cabinet", 'String'>
    readonly approxTimeMarker: FieldRef<"Cabinet", 'String'>
    readonly emptyStayMarker: FieldRef<"Cabinet", 'String'>
    readonly cleaningHeader: FieldRef<"Cabinet", 'String'>
    readonly cleaningFooter: FieldRef<"Cabinet", 'String'>
    readonly balance: FieldRef<"Cabinet", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Cabinet findUnique
   */
  export type CabinetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findUniqueOrThrow
   */
  export type CabinetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findFirst
   */
  export type CabinetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findFirstOrThrow
   */
  export type CabinetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findMany
   */
  export type CabinetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Filter, which Cabinets to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet create
   */
  export type CabinetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data needed to create a Cabinet.
     */
    data?: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
  }

  /**
   * Cabinet createMany
   */
  export type CabinetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cabinets.
     */
    data: CabinetCreateManyInput | CabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cabinet update
   */
  export type CabinetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data needed to update a Cabinet.
     */
    data: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
    /**
     * Choose, which Cabinet to update.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet updateMany
   */
  export type CabinetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cabinets.
     */
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyInput>
    /**
     * Filter which Cabinets to update
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to update.
     */
    limit?: number
  }

  /**
   * Cabinet upsert
   */
  export type CabinetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The filter to search for the Cabinet to update in case it exists.
     */
    where: CabinetWhereUniqueInput
    /**
     * In case the Cabinet found by the `where` argument doesn't exist, create a new Cabinet with this data.
     */
    create: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
    /**
     * In case the Cabinet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
  }

  /**
   * Cabinet delete
   */
  export type CabinetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Filter which Cabinet to delete.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet deleteMany
   */
  export type CabinetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinets to delete
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to delete.
     */
    limit?: number
  }

  /**
   * Cabinet without action
   */
  export type CabinetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
  }


  /**
   * Model Logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
  }

  export type LogsSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
  }

  export type LogsMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    status: $Enums.LogStatus | null
    message: string | null
    date: Date | null
    readed: $Enums.Thumbler | null
  }

  export type LogsMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    status: $Enums.LogStatus | null
    message: string | null
    date: Date | null
    readed: $Enums.Thumbler | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    cabinetid: number
    status: number
    message: number
    date: number
    readed: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id?: true
    cabinetid?: true
  }

  export type LogsSumAggregateInputType = {
    id?: true
    cabinetid?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    cabinetid?: true
    status?: true
    message?: true
    date?: true
    readed?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    status?: true
    message?: true
    date?: true
    readed?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    cabinetid?: true
    status?: true
    message?: true
    date?: true
    readed?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to aggregate.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type LogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsWhereInput
    orderBy?: LogsOrderByWithAggregationInput | LogsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: LogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: number
    cabinetid: number
    status: $Enums.LogStatus
    message: string
    date: Date
    readed: $Enums.Thumbler
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends LogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type LogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    status?: boolean
    message?: boolean
    date?: boolean
    readed?: boolean
  }, ExtArgs["result"]["logs"]>



  export type LogsSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    status?: boolean
    message?: boolean
    date?: boolean
    readed?: boolean
  }

  export type LogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "status" | "message" | "date" | "readed", ExtArgs["result"]["logs"]>

  export type $LogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      status: $Enums.LogStatus
      message: string
      date: Date
      readed: $Enums.Thumbler
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type LogsGetPayload<S extends boolean | null | undefined | LogsDefaultArgs> = $Result.GetResult<Prisma.$LogsPayload, S>

  type LogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface LogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logs'], meta: { name: 'Logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {LogsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogsFindUniqueArgs>(args: SelectSubset<T, LogsFindUniqueArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogsFindUniqueOrThrowArgs>(args: SelectSubset<T, LogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogsFindFirstArgs>(args?: SelectSubset<T, LogsFindFirstArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogsFindFirstOrThrowArgs>(args?: SelectSubset<T, LogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogsFindManyArgs>(args?: SelectSubset<T, LogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {LogsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends LogsCreateArgs>(args: SelectSubset<T, LogsCreateArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogsCreateManyArgs>(args?: SelectSubset<T, LogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs.
     * @param {LogsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends LogsDeleteArgs>(args: SelectSubset<T, LogsDeleteArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {LogsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogsUpdateArgs>(args: SelectSubset<T, LogsUpdateArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogsDeleteManyArgs>(args?: SelectSubset<T, LogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogsUpdateManyArgs>(args: SelectSubset<T, LogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {LogsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends LogsUpsertArgs>(args: SelectSubset<T, LogsUpsertArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogsCountArgs>(
      args?: Subset<T, LogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogsGroupByArgs['orderBy'] }
        : { orderBy?: LogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logs model
   */
  readonly fields: LogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Logs model
   */
  interface LogsFieldRefs {
    readonly id: FieldRef<"Logs", 'Int'>
    readonly cabinetid: FieldRef<"Logs", 'Int'>
    readonly status: FieldRef<"Logs", 'LogStatus'>
    readonly message: FieldRef<"Logs", 'String'>
    readonly date: FieldRef<"Logs", 'DateTime'>
    readonly readed: FieldRef<"Logs", 'Thumbler'>
  }
    

  // Custom InputTypes
  /**
   * Logs findUnique
   */
  export type LogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs findUniqueOrThrow
   */
  export type LogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs findFirst
   */
  export type LogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * Logs findFirstOrThrow
   */
  export type LogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * Logs findMany
   */
  export type LogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * Logs create
   */
  export type LogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * The data needed to create a Logs.
     */
    data: XOR<LogsCreateInput, LogsUncheckedCreateInput>
  }

  /**
   * Logs createMany
   */
  export type LogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogsCreateManyInput | LogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logs update
   */
  export type LogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * The data needed to update a Logs.
     */
    data: XOR<LogsUpdateInput, LogsUncheckedUpdateInput>
    /**
     * Choose, which Logs to update.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs updateMany
   */
  export type LogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogsUpdateManyMutationInput, LogsUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogsWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Logs upsert
   */
  export type LogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * The filter to search for the Logs to update in case it exists.
     */
    where: LogsWhereUniqueInput
    /**
     * In case the Logs found by the `where` argument doesn't exist, create a new Logs with this data.
     */
    create: XOR<LogsCreateInput, LogsUncheckedCreateInput>
    /**
     * In case the Logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogsUpdateInput, LogsUncheckedUpdateInput>
  }

  /**
   * Logs delete
   */
  export type LogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Filter which Logs to delete.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs deleteMany
   */
  export type LogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogsWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Logs without action
   */
  export type LogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    manageobjects: $Enums.Thumbler | null
    managemaids: $Enums.Thumbler | null
    manageintegration: $Enums.Thumbler | null
    managetemplates: $Enums.Thumbler | null
    manageautosent: $Enums.Thumbler | null
    seemaidsrate: $Enums.Thumbler | null
    managebooks: $Enums.Thumbler | null
    manualpaymentedit: $Enums.Thumbler | null
    manualdepositedit: $Enums.Thumbler | null
    bankpaymentedit: $Enums.Thumbler | null
    bankdepositedit: $Enums.Thumbler | null
    financesinformationpayment: $Enums.Thumbler | null
    financesinformationdeposit: $Enums.Thumbler | null
    depositamountedit: $Enums.Thumbler | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    manageobjects: $Enums.Thumbler | null
    managemaids: $Enums.Thumbler | null
    manageintegration: $Enums.Thumbler | null
    managetemplates: $Enums.Thumbler | null
    manageautosent: $Enums.Thumbler | null
    seemaidsrate: $Enums.Thumbler | null
    managebooks: $Enums.Thumbler | null
    manualpaymentedit: $Enums.Thumbler | null
    manualdepositedit: $Enums.Thumbler | null
    bankpaymentedit: $Enums.Thumbler | null
    bankdepositedit: $Enums.Thumbler | null
    financesinformationpayment: $Enums.Thumbler | null
    financesinformationdeposit: $Enums.Thumbler | null
    depositamountedit: $Enums.Thumbler | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    cabinetid: number
    manageobjects: number
    managemaids: number
    manageintegration: number
    managetemplates: number
    manageautosent: number
    seemaidsrate: number
    managebooks: number
    manualpaymentedit: number
    manualdepositedit: number
    bankpaymentedit: number
    bankdepositedit: number
    financesinformationpayment: number
    financesinformationdeposit: number
    depositamountedit: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    cabinetid?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    cabinetid?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    cabinetid?: true
    manageobjects?: true
    managemaids?: true
    manageintegration?: true
    managetemplates?: true
    manageautosent?: true
    seemaidsrate?: true
    managebooks?: true
    manualpaymentedit?: true
    manualdepositedit?: true
    bankpaymentedit?: true
    bankdepositedit?: true
    financesinformationpayment?: true
    financesinformationdeposit?: true
    depositamountedit?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    manageobjects?: true
    managemaids?: true
    manageintegration?: true
    managetemplates?: true
    manageautosent?: true
    seemaidsrate?: true
    managebooks?: true
    manualpaymentedit?: true
    manualdepositedit?: true
    bankpaymentedit?: true
    bankdepositedit?: true
    financesinformationpayment?: true
    financesinformationdeposit?: true
    depositamountedit?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    cabinetid?: true
    manageobjects?: true
    managemaids?: true
    manageintegration?: true
    managetemplates?: true
    manageautosent?: true
    seemaidsrate?: true
    managebooks?: true
    manualpaymentedit?: true
    manualdepositedit?: true
    bankpaymentedit?: true
    bankdepositedit?: true
    financesinformationpayment?: true
    financesinformationdeposit?: true
    depositamountedit?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    cabinetid: number
    manageobjects: $Enums.Thumbler
    managemaids: $Enums.Thumbler
    manageintegration: $Enums.Thumbler
    managetemplates: $Enums.Thumbler
    manageautosent: $Enums.Thumbler
    seemaidsrate: $Enums.Thumbler
    managebooks: $Enums.Thumbler
    manualpaymentedit: $Enums.Thumbler
    manualdepositedit: $Enums.Thumbler
    bankpaymentedit: $Enums.Thumbler
    bankdepositedit: $Enums.Thumbler
    financesinformationpayment: $Enums.Thumbler
    financesinformationdeposit: $Enums.Thumbler
    depositamountedit: $Enums.Thumbler
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    manageobjects?: boolean
    managemaids?: boolean
    manageintegration?: boolean
    managetemplates?: boolean
    manageautosent?: boolean
    seemaidsrate?: boolean
    managebooks?: boolean
    manualpaymentedit?: boolean
    manualdepositedit?: boolean
    bankpaymentedit?: boolean
    bankdepositedit?: boolean
    financesinformationpayment?: boolean
    financesinformationdeposit?: boolean
    depositamountedit?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type StaffSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    manageobjects?: boolean
    managemaids?: boolean
    manageintegration?: boolean
    managetemplates?: boolean
    manageautosent?: boolean
    seemaidsrate?: boolean
    managebooks?: boolean
    manualpaymentedit?: boolean
    manualdepositedit?: boolean
    bankpaymentedit?: boolean
    bankdepositedit?: boolean
    financesinformationpayment?: boolean
    financesinformationdeposit?: boolean
    depositamountedit?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "manageobjects" | "managemaids" | "manageintegration" | "managetemplates" | "manageautosent" | "seemaidsrate" | "managebooks" | "manualpaymentedit" | "manualdepositedit" | "bankpaymentedit" | "bankdepositedit" | "financesinformationpayment" | "financesinformationdeposit" | "depositamountedit", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      manageobjects: $Enums.Thumbler
      managemaids: $Enums.Thumbler
      manageintegration: $Enums.Thumbler
      managetemplates: $Enums.Thumbler
      manageautosent: $Enums.Thumbler
      seemaidsrate: $Enums.Thumbler
      managebooks: $Enums.Thumbler
      manualpaymentedit: $Enums.Thumbler
      manualdepositedit: $Enums.Thumbler
      bankpaymentedit: $Enums.Thumbler
      bankdepositedit: $Enums.Thumbler
      financesinformationpayment: $Enums.Thumbler
      financesinformationdeposit: $Enums.Thumbler
      depositamountedit: $Enums.Thumbler
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'Int'>
    readonly cabinetid: FieldRef<"Staff", 'Int'>
    readonly manageobjects: FieldRef<"Staff", 'Thumbler'>
    readonly managemaids: FieldRef<"Staff", 'Thumbler'>
    readonly manageintegration: FieldRef<"Staff", 'Thumbler'>
    readonly managetemplates: FieldRef<"Staff", 'Thumbler'>
    readonly manageautosent: FieldRef<"Staff", 'Thumbler'>
    readonly seemaidsrate: FieldRef<"Staff", 'Thumbler'>
    readonly managebooks: FieldRef<"Staff", 'Thumbler'>
    readonly manualpaymentedit: FieldRef<"Staff", 'Thumbler'>
    readonly manualdepositedit: FieldRef<"Staff", 'Thumbler'>
    readonly bankpaymentedit: FieldRef<"Staff", 'Thumbler'>
    readonly bankdepositedit: FieldRef<"Staff", 'Thumbler'>
    readonly financesinformationpayment: FieldRef<"Staff", 'Thumbler'>
    readonly financesinformationdeposit: FieldRef<"Staff", 'Thumbler'>
    readonly depositamountedit: FieldRef<"Staff", 'Thumbler'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Maids
   */

  export type AggregateMaids = {
    _count: MaidsCountAggregateOutputType | null
    _avg: MaidsAvgAggregateOutputType | null
    _sum: MaidsSumAggregateOutputType | null
    _min: MaidsMinAggregateOutputType | null
    _max: MaidsMaxAggregateOutputType | null
  }

  export type MaidsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    cabinetid: number | null
  }

  export type MaidsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    cabinetid: number | null
  }

  export type MaidsMinAggregateOutputType = {
    id: number | null
    name: string | null
    rating: number | null
    cabinetid: number | null
  }

  export type MaidsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rating: number | null
    cabinetid: number | null
  }

  export type MaidsCountAggregateOutputType = {
    id: number
    name: number
    rating: number
    cabinetid: number
    _all: number
  }


  export type MaidsAvgAggregateInputType = {
    id?: true
    rating?: true
    cabinetid?: true
  }

  export type MaidsSumAggregateInputType = {
    id?: true
    rating?: true
    cabinetid?: true
  }

  export type MaidsMinAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    cabinetid?: true
  }

  export type MaidsMaxAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    cabinetid?: true
  }

  export type MaidsCountAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    cabinetid?: true
    _all?: true
  }

  export type MaidsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maids to aggregate.
     */
    where?: MaidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maids to fetch.
     */
    orderBy?: MaidsOrderByWithRelationInput | MaidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maids
    **/
    _count?: true | MaidsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaidsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaidsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaidsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaidsMaxAggregateInputType
  }

  export type GetMaidsAggregateType<T extends MaidsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaids[P]>
      : GetScalarType<T[P], AggregateMaids[P]>
  }




  export type MaidsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaidsWhereInput
    orderBy?: MaidsOrderByWithAggregationInput | MaidsOrderByWithAggregationInput[]
    by: MaidsScalarFieldEnum[] | MaidsScalarFieldEnum
    having?: MaidsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaidsCountAggregateInputType | true
    _avg?: MaidsAvgAggregateInputType
    _sum?: MaidsSumAggregateInputType
    _min?: MaidsMinAggregateInputType
    _max?: MaidsMaxAggregateInputType
  }

  export type MaidsGroupByOutputType = {
    id: number
    name: string
    rating: number
    cabinetid: number
    _count: MaidsCountAggregateOutputType | null
    _avg: MaidsAvgAggregateOutputType | null
    _sum: MaidsSumAggregateOutputType | null
    _min: MaidsMinAggregateOutputType | null
    _max: MaidsMaxAggregateOutputType | null
  }

  type GetMaidsGroupByPayload<T extends MaidsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaidsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaidsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaidsGroupByOutputType[P]>
            : GetScalarType<T[P], MaidsGroupByOutputType[P]>
        }
      >
    >


  export type MaidsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rating?: boolean
    cabinetid?: boolean
  }, ExtArgs["result"]["maids"]>



  export type MaidsSelectScalar = {
    id?: boolean
    name?: boolean
    rating?: boolean
    cabinetid?: boolean
  }

  export type MaidsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rating" | "cabinetid", ExtArgs["result"]["maids"]>

  export type $MaidsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maids"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rating: number
      cabinetid: number
    }, ExtArgs["result"]["maids"]>
    composites: {}
  }

  type MaidsGetPayload<S extends boolean | null | undefined | MaidsDefaultArgs> = $Result.GetResult<Prisma.$MaidsPayload, S>

  type MaidsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaidsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaidsCountAggregateInputType | true
    }

  export interface MaidsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maids'], meta: { name: 'Maids' } }
    /**
     * Find zero or one Maids that matches the filter.
     * @param {MaidsFindUniqueArgs} args - Arguments to find a Maids
     * @example
     * // Get one Maids
     * const maids = await prisma.maids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaidsFindUniqueArgs>(args: SelectSubset<T, MaidsFindUniqueArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maids that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaidsFindUniqueOrThrowArgs} args - Arguments to find a Maids
     * @example
     * // Get one Maids
     * const maids = await prisma.maids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaidsFindUniqueOrThrowArgs>(args: SelectSubset<T, MaidsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaidsFindFirstArgs} args - Arguments to find a Maids
     * @example
     * // Get one Maids
     * const maids = await prisma.maids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaidsFindFirstArgs>(args?: SelectSubset<T, MaidsFindFirstArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaidsFindFirstOrThrowArgs} args - Arguments to find a Maids
     * @example
     * // Get one Maids
     * const maids = await prisma.maids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaidsFindFirstOrThrowArgs>(args?: SelectSubset<T, MaidsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaidsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maids
     * const maids = await prisma.maids.findMany()
     * 
     * // Get first 10 Maids
     * const maids = await prisma.maids.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maidsWithIdOnly = await prisma.maids.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaidsFindManyArgs>(args?: SelectSubset<T, MaidsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maids.
     * @param {MaidsCreateArgs} args - Arguments to create a Maids.
     * @example
     * // Create one Maids
     * const Maids = await prisma.maids.create({
     *   data: {
     *     // ... data to create a Maids
     *   }
     * })
     * 
     */
    create<T extends MaidsCreateArgs>(args: SelectSubset<T, MaidsCreateArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maids.
     * @param {MaidsCreateManyArgs} args - Arguments to create many Maids.
     * @example
     * // Create many Maids
     * const maids = await prisma.maids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaidsCreateManyArgs>(args?: SelectSubset<T, MaidsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maids.
     * @param {MaidsDeleteArgs} args - Arguments to delete one Maids.
     * @example
     * // Delete one Maids
     * const Maids = await prisma.maids.delete({
     *   where: {
     *     // ... filter to delete one Maids
     *   }
     * })
     * 
     */
    delete<T extends MaidsDeleteArgs>(args: SelectSubset<T, MaidsDeleteArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maids.
     * @param {MaidsUpdateArgs} args - Arguments to update one Maids.
     * @example
     * // Update one Maids
     * const maids = await prisma.maids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaidsUpdateArgs>(args: SelectSubset<T, MaidsUpdateArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maids.
     * @param {MaidsDeleteManyArgs} args - Arguments to filter Maids to delete.
     * @example
     * // Delete a few Maids
     * const { count } = await prisma.maids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaidsDeleteManyArgs>(args?: SelectSubset<T, MaidsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaidsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maids
     * const maids = await prisma.maids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaidsUpdateManyArgs>(args: SelectSubset<T, MaidsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maids.
     * @param {MaidsUpsertArgs} args - Arguments to update or create a Maids.
     * @example
     * // Update or create a Maids
     * const maids = await prisma.maids.upsert({
     *   create: {
     *     // ... data to create a Maids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maids we want to update
     *   }
     * })
     */
    upsert<T extends MaidsUpsertArgs>(args: SelectSubset<T, MaidsUpsertArgs<ExtArgs>>): Prisma__MaidsClient<$Result.GetResult<Prisma.$MaidsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaidsCountArgs} args - Arguments to filter Maids to count.
     * @example
     * // Count the number of Maids
     * const count = await prisma.maids.count({
     *   where: {
     *     // ... the filter for the Maids we want to count
     *   }
     * })
    **/
    count<T extends MaidsCountArgs>(
      args?: Subset<T, MaidsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaidsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaidsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaidsAggregateArgs>(args: Subset<T, MaidsAggregateArgs>): Prisma.PrismaPromise<GetMaidsAggregateType<T>>

    /**
     * Group by Maids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaidsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaidsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaidsGroupByArgs['orderBy'] }
        : { orderBy?: MaidsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaidsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaidsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maids model
   */
  readonly fields: MaidsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaidsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Maids model
   */
  interface MaidsFieldRefs {
    readonly id: FieldRef<"Maids", 'Int'>
    readonly name: FieldRef<"Maids", 'String'>
    readonly rating: FieldRef<"Maids", 'Float'>
    readonly cabinetid: FieldRef<"Maids", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Maids findUnique
   */
  export type MaidsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * Filter, which Maids to fetch.
     */
    where: MaidsWhereUniqueInput
  }

  /**
   * Maids findUniqueOrThrow
   */
  export type MaidsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * Filter, which Maids to fetch.
     */
    where: MaidsWhereUniqueInput
  }

  /**
   * Maids findFirst
   */
  export type MaidsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * Filter, which Maids to fetch.
     */
    where?: MaidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maids to fetch.
     */
    orderBy?: MaidsOrderByWithRelationInput | MaidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maids.
     */
    cursor?: MaidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maids.
     */
    distinct?: MaidsScalarFieldEnum | MaidsScalarFieldEnum[]
  }

  /**
   * Maids findFirstOrThrow
   */
  export type MaidsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * Filter, which Maids to fetch.
     */
    where?: MaidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maids to fetch.
     */
    orderBy?: MaidsOrderByWithRelationInput | MaidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maids.
     */
    cursor?: MaidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maids.
     */
    distinct?: MaidsScalarFieldEnum | MaidsScalarFieldEnum[]
  }

  /**
   * Maids findMany
   */
  export type MaidsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * Filter, which Maids to fetch.
     */
    where?: MaidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maids to fetch.
     */
    orderBy?: MaidsOrderByWithRelationInput | MaidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maids.
     */
    cursor?: MaidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maids.
     */
    distinct?: MaidsScalarFieldEnum | MaidsScalarFieldEnum[]
  }

  /**
   * Maids create
   */
  export type MaidsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * The data needed to create a Maids.
     */
    data: XOR<MaidsCreateInput, MaidsUncheckedCreateInput>
  }

  /**
   * Maids createMany
   */
  export type MaidsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maids.
     */
    data: MaidsCreateManyInput | MaidsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maids update
   */
  export type MaidsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * The data needed to update a Maids.
     */
    data: XOR<MaidsUpdateInput, MaidsUncheckedUpdateInput>
    /**
     * Choose, which Maids to update.
     */
    where: MaidsWhereUniqueInput
  }

  /**
   * Maids updateMany
   */
  export type MaidsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maids.
     */
    data: XOR<MaidsUpdateManyMutationInput, MaidsUncheckedUpdateManyInput>
    /**
     * Filter which Maids to update
     */
    where?: MaidsWhereInput
    /**
     * Limit how many Maids to update.
     */
    limit?: number
  }

  /**
   * Maids upsert
   */
  export type MaidsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * The filter to search for the Maids to update in case it exists.
     */
    where: MaidsWhereUniqueInput
    /**
     * In case the Maids found by the `where` argument doesn't exist, create a new Maids with this data.
     */
    create: XOR<MaidsCreateInput, MaidsUncheckedCreateInput>
    /**
     * In case the Maids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaidsUpdateInput, MaidsUncheckedUpdateInput>
  }

  /**
   * Maids delete
   */
  export type MaidsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
    /**
     * Filter which Maids to delete.
     */
    where: MaidsWhereUniqueInput
  }

  /**
   * Maids deleteMany
   */
  export type MaidsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maids to delete
     */
    where?: MaidsWhereInput
    /**
     * Limit how many Maids to delete.
     */
    limit?: number
  }

  /**
   * Maids without action
   */
  export type MaidsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maids
     */
    select?: MaidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maids
     */
    omit?: MaidsOmit<ExtArgs> | null
  }


  /**
   * Model Objects
   */

  export type AggregateObjects = {
    _count: ObjectsCountAggregateOutputType | null
    _avg: ObjectsAvgAggregateOutputType | null
    _sum: ObjectsSumAggregateOutputType | null
    _min: ObjectsMinAggregateOutputType | null
    _max: ObjectsMaxAggregateOutputType | null
  }

  export type ObjectsAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    realtyid: number | null
    okidokiactive: number | null
  }

  export type ObjectsSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    realtyid: number | null
    okidokiactive: number | null
  }

  export type ObjectsMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    realtyid: number | null
    name: string | null
    instruction: string | null
    checkindef: string | null
    checkoutdef: string | null
    sspayanddeposit: $Enums.ShowSettings | null
    ssinstruction: $Enums.ShowSettings | null
    sscontract: $Enums.ShowSettings | null
    ssrateclean: $Enums.ShowSettings | null
    location: string | null
    maplink: string | null
    deposit: string | null
    odstringid: string | null
    odvalueid: string | null
    odnameid: string | null
    oddateinid: string | null
    oddateoutid: string | null
    oddepositid: string | null
    odpayperdayid: string | null
    odpayedid: string | null
    okidokiactive: number | null
    depositchanel: $Enums.DepositChanel | null
    paymentchanel: $Enums.PaymentChanel | null
    active: $Enums.Thumbler | null
  }

  export type ObjectsMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    realtyid: number | null
    name: string | null
    instruction: string | null
    checkindef: string | null
    checkoutdef: string | null
    sspayanddeposit: $Enums.ShowSettings | null
    ssinstruction: $Enums.ShowSettings | null
    sscontract: $Enums.ShowSettings | null
    ssrateclean: $Enums.ShowSettings | null
    location: string | null
    maplink: string | null
    deposit: string | null
    odstringid: string | null
    odvalueid: string | null
    odnameid: string | null
    oddateinid: string | null
    oddateoutid: string | null
    oddepositid: string | null
    odpayperdayid: string | null
    odpayedid: string | null
    okidokiactive: number | null
    depositchanel: $Enums.DepositChanel | null
    paymentchanel: $Enums.PaymentChanel | null
    active: $Enums.Thumbler | null
  }

  export type ObjectsCountAggregateOutputType = {
    id: number
    cabinetid: number
    realtyid: number
    name: number
    instruction: number
    checkindef: number
    checkoutdef: number
    sspayanddeposit: number
    ssinstruction: number
    sscontract: number
    ssrateclean: number
    location: number
    maplink: number
    deposit: number
    odstringid: number
    odvalueid: number
    odnameid: number
    oddateinid: number
    oddateoutid: number
    oddepositid: number
    odpayperdayid: number
    odpayedid: number
    okidokiactive: number
    depositchanel: number
    paymentchanel: number
    active: number
    _all: number
  }


  export type ObjectsAvgAggregateInputType = {
    id?: true
    cabinetid?: true
    realtyid?: true
    okidokiactive?: true
  }

  export type ObjectsSumAggregateInputType = {
    id?: true
    cabinetid?: true
    realtyid?: true
    okidokiactive?: true
  }

  export type ObjectsMinAggregateInputType = {
    id?: true
    cabinetid?: true
    realtyid?: true
    name?: true
    instruction?: true
    checkindef?: true
    checkoutdef?: true
    sspayanddeposit?: true
    ssinstruction?: true
    sscontract?: true
    ssrateclean?: true
    location?: true
    maplink?: true
    deposit?: true
    odstringid?: true
    odvalueid?: true
    odnameid?: true
    oddateinid?: true
    oddateoutid?: true
    oddepositid?: true
    odpayperdayid?: true
    odpayedid?: true
    okidokiactive?: true
    depositchanel?: true
    paymentchanel?: true
    active?: true
  }

  export type ObjectsMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    realtyid?: true
    name?: true
    instruction?: true
    checkindef?: true
    checkoutdef?: true
    sspayanddeposit?: true
    ssinstruction?: true
    sscontract?: true
    ssrateclean?: true
    location?: true
    maplink?: true
    deposit?: true
    odstringid?: true
    odvalueid?: true
    odnameid?: true
    oddateinid?: true
    oddateoutid?: true
    oddepositid?: true
    odpayperdayid?: true
    odpayedid?: true
    okidokiactive?: true
    depositchanel?: true
    paymentchanel?: true
    active?: true
  }

  export type ObjectsCountAggregateInputType = {
    id?: true
    cabinetid?: true
    realtyid?: true
    name?: true
    instruction?: true
    checkindef?: true
    checkoutdef?: true
    sspayanddeposit?: true
    ssinstruction?: true
    sscontract?: true
    ssrateclean?: true
    location?: true
    maplink?: true
    deposit?: true
    odstringid?: true
    odvalueid?: true
    odnameid?: true
    oddateinid?: true
    oddateoutid?: true
    oddepositid?: true
    odpayperdayid?: true
    odpayedid?: true
    okidokiactive?: true
    depositchanel?: true
    paymentchanel?: true
    active?: true
    _all?: true
  }

  export type ObjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objects to aggregate.
     */
    where?: ObjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectsOrderByWithRelationInput | ObjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Objects
    **/
    _count?: true | ObjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjectsMaxAggregateInputType
  }

  export type GetObjectsAggregateType<T extends ObjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateObjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjects[P]>
      : GetScalarType<T[P], AggregateObjects[P]>
  }




  export type ObjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectsWhereInput
    orderBy?: ObjectsOrderByWithAggregationInput | ObjectsOrderByWithAggregationInput[]
    by: ObjectsScalarFieldEnum[] | ObjectsScalarFieldEnum
    having?: ObjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjectsCountAggregateInputType | true
    _avg?: ObjectsAvgAggregateInputType
    _sum?: ObjectsSumAggregateInputType
    _min?: ObjectsMinAggregateInputType
    _max?: ObjectsMaxAggregateInputType
  }

  export type ObjectsGroupByOutputType = {
    id: number
    cabinetid: number
    realtyid: number | null
    name: string
    instruction: string
    checkindef: string
    checkoutdef: string
    sspayanddeposit: $Enums.ShowSettings
    ssinstruction: $Enums.ShowSettings
    sscontract: $Enums.ShowSettings
    ssrateclean: $Enums.ShowSettings
    location: string
    maplink: string | null
    deposit: string
    odstringid: string | null
    odvalueid: string | null
    odnameid: string | null
    oddateinid: string | null
    oddateoutid: string | null
    oddepositid: string | null
    odpayperdayid: string | null
    odpayedid: string | null
    okidokiactive: number
    depositchanel: $Enums.DepositChanel
    paymentchanel: $Enums.PaymentChanel
    active: $Enums.Thumbler
    _count: ObjectsCountAggregateOutputType | null
    _avg: ObjectsAvgAggregateOutputType | null
    _sum: ObjectsSumAggregateOutputType | null
    _min: ObjectsMinAggregateOutputType | null
    _max: ObjectsMaxAggregateOutputType | null
  }

  type GetObjectsGroupByPayload<T extends ObjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ObjectsGroupByOutputType[P]>
        }
      >
    >


  export type ObjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    realtyid?: boolean
    name?: boolean
    instruction?: boolean
    checkindef?: boolean
    checkoutdef?: boolean
    sspayanddeposit?: boolean
    ssinstruction?: boolean
    sscontract?: boolean
    ssrateclean?: boolean
    location?: boolean
    maplink?: boolean
    deposit?: boolean
    odstringid?: boolean
    odvalueid?: boolean
    odnameid?: boolean
    oddateinid?: boolean
    oddateoutid?: boolean
    oddepositid?: boolean
    odpayperdayid?: boolean
    odpayedid?: boolean
    okidokiactive?: boolean
    depositchanel?: boolean
    paymentchanel?: boolean
    active?: boolean
    photos?: boolean | Objects$photosArgs<ExtArgs>
    _count?: boolean | ObjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objects"]>



  export type ObjectsSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    realtyid?: boolean
    name?: boolean
    instruction?: boolean
    checkindef?: boolean
    checkoutdef?: boolean
    sspayanddeposit?: boolean
    ssinstruction?: boolean
    sscontract?: boolean
    ssrateclean?: boolean
    location?: boolean
    maplink?: boolean
    deposit?: boolean
    odstringid?: boolean
    odvalueid?: boolean
    odnameid?: boolean
    oddateinid?: boolean
    oddateoutid?: boolean
    oddepositid?: boolean
    odpayperdayid?: boolean
    odpayedid?: boolean
    okidokiactive?: boolean
    depositchanel?: boolean
    paymentchanel?: boolean
    active?: boolean
  }

  export type ObjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "realtyid" | "name" | "instruction" | "checkindef" | "checkoutdef" | "sspayanddeposit" | "ssinstruction" | "sscontract" | "ssrateclean" | "location" | "maplink" | "deposit" | "odstringid" | "odvalueid" | "odnameid" | "oddateinid" | "oddateoutid" | "oddepositid" | "odpayperdayid" | "odpayedid" | "okidokiactive" | "depositchanel" | "paymentchanel" | "active", ExtArgs["result"]["objects"]>
  export type ObjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Objects$photosArgs<ExtArgs>
    _count?: boolean | ObjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ObjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Objects"
    objects: {
      photos: Prisma.$ObjectPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      realtyid: number | null
      name: string
      instruction: string
      checkindef: string
      checkoutdef: string
      sspayanddeposit: $Enums.ShowSettings
      ssinstruction: $Enums.ShowSettings
      sscontract: $Enums.ShowSettings
      ssrateclean: $Enums.ShowSettings
      location: string
      maplink: string | null
      deposit: string
      odstringid: string | null
      odvalueid: string | null
      odnameid: string | null
      oddateinid: string | null
      oddateoutid: string | null
      oddepositid: string | null
      odpayperdayid: string | null
      odpayedid: string | null
      okidokiactive: number
      depositchanel: $Enums.DepositChanel
      paymentchanel: $Enums.PaymentChanel
      active: $Enums.Thumbler
    }, ExtArgs["result"]["objects"]>
    composites: {}
  }

  type ObjectsGetPayload<S extends boolean | null | undefined | ObjectsDefaultArgs> = $Result.GetResult<Prisma.$ObjectsPayload, S>

  type ObjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjectsCountAggregateInputType | true
    }

  export interface ObjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Objects'], meta: { name: 'Objects' } }
    /**
     * Find zero or one Objects that matches the filter.
     * @param {ObjectsFindUniqueArgs} args - Arguments to find a Objects
     * @example
     * // Get one Objects
     * const objects = await prisma.objects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjectsFindUniqueArgs>(args: SelectSubset<T, ObjectsFindUniqueArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Objects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjectsFindUniqueOrThrowArgs} args - Arguments to find a Objects
     * @example
     * // Get one Objects
     * const objects = await prisma.objects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectsFindFirstArgs} args - Arguments to find a Objects
     * @example
     * // Get one Objects
     * const objects = await prisma.objects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjectsFindFirstArgs>(args?: SelectSubset<T, ObjectsFindFirstArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectsFindFirstOrThrowArgs} args - Arguments to find a Objects
     * @example
     * // Get one Objects
     * const objects = await prisma.objects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Objects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objects
     * const objects = await prisma.objects.findMany()
     * 
     * // Get first 10 Objects
     * const objects = await prisma.objects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objectsWithIdOnly = await prisma.objects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjectsFindManyArgs>(args?: SelectSubset<T, ObjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Objects.
     * @param {ObjectsCreateArgs} args - Arguments to create a Objects.
     * @example
     * // Create one Objects
     * const Objects = await prisma.objects.create({
     *   data: {
     *     // ... data to create a Objects
     *   }
     * })
     * 
     */
    create<T extends ObjectsCreateArgs>(args: SelectSubset<T, ObjectsCreateArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Objects.
     * @param {ObjectsCreateManyArgs} args - Arguments to create many Objects.
     * @example
     * // Create many Objects
     * const objects = await prisma.objects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjectsCreateManyArgs>(args?: SelectSubset<T, ObjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Objects.
     * @param {ObjectsDeleteArgs} args - Arguments to delete one Objects.
     * @example
     * // Delete one Objects
     * const Objects = await prisma.objects.delete({
     *   where: {
     *     // ... filter to delete one Objects
     *   }
     * })
     * 
     */
    delete<T extends ObjectsDeleteArgs>(args: SelectSubset<T, ObjectsDeleteArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Objects.
     * @param {ObjectsUpdateArgs} args - Arguments to update one Objects.
     * @example
     * // Update one Objects
     * const objects = await prisma.objects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjectsUpdateArgs>(args: SelectSubset<T, ObjectsUpdateArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Objects.
     * @param {ObjectsDeleteManyArgs} args - Arguments to filter Objects to delete.
     * @example
     * // Delete a few Objects
     * const { count } = await prisma.objects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjectsDeleteManyArgs>(args?: SelectSubset<T, ObjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objects
     * const objects = await prisma.objects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjectsUpdateManyArgs>(args: SelectSubset<T, ObjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Objects.
     * @param {ObjectsUpsertArgs} args - Arguments to update or create a Objects.
     * @example
     * // Update or create a Objects
     * const objects = await prisma.objects.upsert({
     *   create: {
     *     // ... data to create a Objects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Objects we want to update
     *   }
     * })
     */
    upsert<T extends ObjectsUpsertArgs>(args: SelectSubset<T, ObjectsUpsertArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectsCountArgs} args - Arguments to filter Objects to count.
     * @example
     * // Count the number of Objects
     * const count = await prisma.objects.count({
     *   where: {
     *     // ... the filter for the Objects we want to count
     *   }
     * })
    **/
    count<T extends ObjectsCountArgs>(
      args?: Subset<T, ObjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObjectsAggregateArgs>(args: Subset<T, ObjectsAggregateArgs>): Prisma.PrismaPromise<GetObjectsAggregateType<T>>

    /**
     * Group by Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjectsGroupByArgs['orderBy'] }
        : { orderBy?: ObjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Objects model
   */
  readonly fields: ObjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Objects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Objects$photosArgs<ExtArgs> = {}>(args?: Subset<T, Objects$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Objects model
   */
  interface ObjectsFieldRefs {
    readonly id: FieldRef<"Objects", 'Int'>
    readonly cabinetid: FieldRef<"Objects", 'Int'>
    readonly realtyid: FieldRef<"Objects", 'Int'>
    readonly name: FieldRef<"Objects", 'String'>
    readonly instruction: FieldRef<"Objects", 'String'>
    readonly checkindef: FieldRef<"Objects", 'String'>
    readonly checkoutdef: FieldRef<"Objects", 'String'>
    readonly sspayanddeposit: FieldRef<"Objects", 'ShowSettings'>
    readonly ssinstruction: FieldRef<"Objects", 'ShowSettings'>
    readonly sscontract: FieldRef<"Objects", 'ShowSettings'>
    readonly ssrateclean: FieldRef<"Objects", 'ShowSettings'>
    readonly location: FieldRef<"Objects", 'String'>
    readonly maplink: FieldRef<"Objects", 'String'>
    readonly deposit: FieldRef<"Objects", 'String'>
    readonly odstringid: FieldRef<"Objects", 'String'>
    readonly odvalueid: FieldRef<"Objects", 'String'>
    readonly odnameid: FieldRef<"Objects", 'String'>
    readonly oddateinid: FieldRef<"Objects", 'String'>
    readonly oddateoutid: FieldRef<"Objects", 'String'>
    readonly oddepositid: FieldRef<"Objects", 'String'>
    readonly odpayperdayid: FieldRef<"Objects", 'String'>
    readonly odpayedid: FieldRef<"Objects", 'String'>
    readonly okidokiactive: FieldRef<"Objects", 'Int'>
    readonly depositchanel: FieldRef<"Objects", 'DepositChanel'>
    readonly paymentchanel: FieldRef<"Objects", 'PaymentChanel'>
    readonly active: FieldRef<"Objects", 'Thumbler'>
  }
    

  // Custom InputTypes
  /**
   * Objects findUnique
   */
  export type ObjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * Filter, which Objects to fetch.
     */
    where: ObjectsWhereUniqueInput
  }

  /**
   * Objects findUniqueOrThrow
   */
  export type ObjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * Filter, which Objects to fetch.
     */
    where: ObjectsWhereUniqueInput
  }

  /**
   * Objects findFirst
   */
  export type ObjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * Filter, which Objects to fetch.
     */
    where?: ObjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectsOrderByWithRelationInput | ObjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objects.
     */
    cursor?: ObjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objects.
     */
    distinct?: ObjectsScalarFieldEnum | ObjectsScalarFieldEnum[]
  }

  /**
   * Objects findFirstOrThrow
   */
  export type ObjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * Filter, which Objects to fetch.
     */
    where?: ObjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectsOrderByWithRelationInput | ObjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objects.
     */
    cursor?: ObjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objects.
     */
    distinct?: ObjectsScalarFieldEnum | ObjectsScalarFieldEnum[]
  }

  /**
   * Objects findMany
   */
  export type ObjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * Filter, which Objects to fetch.
     */
    where?: ObjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectsOrderByWithRelationInput | ObjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Objects.
     */
    cursor?: ObjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objects.
     */
    distinct?: ObjectsScalarFieldEnum | ObjectsScalarFieldEnum[]
  }

  /**
   * Objects create
   */
  export type ObjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Objects.
     */
    data: XOR<ObjectsCreateInput, ObjectsUncheckedCreateInput>
  }

  /**
   * Objects createMany
   */
  export type ObjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Objects.
     */
    data: ObjectsCreateManyInput | ObjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Objects update
   */
  export type ObjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Objects.
     */
    data: XOR<ObjectsUpdateInput, ObjectsUncheckedUpdateInput>
    /**
     * Choose, which Objects to update.
     */
    where: ObjectsWhereUniqueInput
  }

  /**
   * Objects updateMany
   */
  export type ObjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Objects.
     */
    data: XOR<ObjectsUpdateManyMutationInput, ObjectsUncheckedUpdateManyInput>
    /**
     * Filter which Objects to update
     */
    where?: ObjectsWhereInput
    /**
     * Limit how many Objects to update.
     */
    limit?: number
  }

  /**
   * Objects upsert
   */
  export type ObjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Objects to update in case it exists.
     */
    where: ObjectsWhereUniqueInput
    /**
     * In case the Objects found by the `where` argument doesn't exist, create a new Objects with this data.
     */
    create: XOR<ObjectsCreateInput, ObjectsUncheckedCreateInput>
    /**
     * In case the Objects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjectsUpdateInput, ObjectsUncheckedUpdateInput>
  }

  /**
   * Objects delete
   */
  export type ObjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
    /**
     * Filter which Objects to delete.
     */
    where: ObjectsWhereUniqueInput
  }

  /**
   * Objects deleteMany
   */
  export type ObjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objects to delete
     */
    where?: ObjectsWhereInput
    /**
     * Limit how many Objects to delete.
     */
    limit?: number
  }

  /**
   * Objects.photos
   */
  export type Objects$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    where?: ObjectPhotoWhereInput
    orderBy?: ObjectPhotoOrderByWithRelationInput | ObjectPhotoOrderByWithRelationInput[]
    cursor?: ObjectPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjectPhotoScalarFieldEnum | ObjectPhotoScalarFieldEnum[]
  }

  /**
   * Objects without action
   */
  export type ObjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objects
     */
    select?: ObjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objects
     */
    omit?: ObjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectsInclude<ExtArgs> | null
  }


  /**
   * Model ObjectPhoto
   */

  export type AggregateObjectPhoto = {
    _count: ObjectPhotoCountAggregateOutputType | null
    _avg: ObjectPhotoAvgAggregateOutputType | null
    _sum: ObjectPhotoSumAggregateOutputType | null
    _min: ObjectPhotoMinAggregateOutputType | null
    _max: ObjectPhotoMaxAggregateOutputType | null
  }

  export type ObjectPhotoAvgAggregateOutputType = {
    id: number | null
    objectId: number | null
    sortOrder: number | null
  }

  export type ObjectPhotoSumAggregateOutputType = {
    id: number | null
    objectId: number | null
    sortOrder: number | null
  }

  export type ObjectPhotoMinAggregateOutputType = {
    id: number | null
    objectId: number | null
    url: string | null
    sortOrder: number | null
  }

  export type ObjectPhotoMaxAggregateOutputType = {
    id: number | null
    objectId: number | null
    url: string | null
    sortOrder: number | null
  }

  export type ObjectPhotoCountAggregateOutputType = {
    id: number
    objectId: number
    url: number
    sortOrder: number
    _all: number
  }


  export type ObjectPhotoAvgAggregateInputType = {
    id?: true
    objectId?: true
    sortOrder?: true
  }

  export type ObjectPhotoSumAggregateInputType = {
    id?: true
    objectId?: true
    sortOrder?: true
  }

  export type ObjectPhotoMinAggregateInputType = {
    id?: true
    objectId?: true
    url?: true
    sortOrder?: true
  }

  export type ObjectPhotoMaxAggregateInputType = {
    id?: true
    objectId?: true
    url?: true
    sortOrder?: true
  }

  export type ObjectPhotoCountAggregateInputType = {
    id?: true
    objectId?: true
    url?: true
    sortOrder?: true
    _all?: true
  }

  export type ObjectPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjectPhoto to aggregate.
     */
    where?: ObjectPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPhotos to fetch.
     */
    orderBy?: ObjectPhotoOrderByWithRelationInput | ObjectPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjectPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObjectPhotos
    **/
    _count?: true | ObjectPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObjectPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObjectPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjectPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjectPhotoMaxAggregateInputType
  }

  export type GetObjectPhotoAggregateType<T extends ObjectPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateObjectPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjectPhoto[P]>
      : GetScalarType<T[P], AggregateObjectPhoto[P]>
  }




  export type ObjectPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectPhotoWhereInput
    orderBy?: ObjectPhotoOrderByWithAggregationInput | ObjectPhotoOrderByWithAggregationInput[]
    by: ObjectPhotoScalarFieldEnum[] | ObjectPhotoScalarFieldEnum
    having?: ObjectPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjectPhotoCountAggregateInputType | true
    _avg?: ObjectPhotoAvgAggregateInputType
    _sum?: ObjectPhotoSumAggregateInputType
    _min?: ObjectPhotoMinAggregateInputType
    _max?: ObjectPhotoMaxAggregateInputType
  }

  export type ObjectPhotoGroupByOutputType = {
    id: number
    objectId: number
    url: string
    sortOrder: number
    _count: ObjectPhotoCountAggregateOutputType | null
    _avg: ObjectPhotoAvgAggregateOutputType | null
    _sum: ObjectPhotoSumAggregateOutputType | null
    _min: ObjectPhotoMinAggregateOutputType | null
    _max: ObjectPhotoMaxAggregateOutputType | null
  }

  type GetObjectPhotoGroupByPayload<T extends ObjectPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjectPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjectPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjectPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ObjectPhotoGroupByOutputType[P]>
        }
      >
    >


  export type ObjectPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    objectId?: boolean
    url?: boolean
    sortOrder?: boolean
    objects?: boolean | ObjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objectPhoto"]>



  export type ObjectPhotoSelectScalar = {
    id?: boolean
    objectId?: boolean
    url?: boolean
    sortOrder?: boolean
  }

  export type ObjectPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "objectId" | "url" | "sortOrder", ExtArgs["result"]["objectPhoto"]>
  export type ObjectPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objects?: boolean | ObjectsDefaultArgs<ExtArgs>
  }

  export type $ObjectPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObjectPhoto"
    objects: {
      objects: Prisma.$ObjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      objectId: number
      url: string
      sortOrder: number
    }, ExtArgs["result"]["objectPhoto"]>
    composites: {}
  }

  type ObjectPhotoGetPayload<S extends boolean | null | undefined | ObjectPhotoDefaultArgs> = $Result.GetResult<Prisma.$ObjectPhotoPayload, S>

  type ObjectPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjectPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjectPhotoCountAggregateInputType | true
    }

  export interface ObjectPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObjectPhoto'], meta: { name: 'ObjectPhoto' } }
    /**
     * Find zero or one ObjectPhoto that matches the filter.
     * @param {ObjectPhotoFindUniqueArgs} args - Arguments to find a ObjectPhoto
     * @example
     * // Get one ObjectPhoto
     * const objectPhoto = await prisma.objectPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjectPhotoFindUniqueArgs>(args: SelectSubset<T, ObjectPhotoFindUniqueArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObjectPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjectPhotoFindUniqueOrThrowArgs} args - Arguments to find a ObjectPhoto
     * @example
     * // Get one ObjectPhoto
     * const objectPhoto = await prisma.objectPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjectPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjectPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjectPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPhotoFindFirstArgs} args - Arguments to find a ObjectPhoto
     * @example
     * // Get one ObjectPhoto
     * const objectPhoto = await prisma.objectPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjectPhotoFindFirstArgs>(args?: SelectSubset<T, ObjectPhotoFindFirstArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjectPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPhotoFindFirstOrThrowArgs} args - Arguments to find a ObjectPhoto
     * @example
     * // Get one ObjectPhoto
     * const objectPhoto = await prisma.objectPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjectPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjectPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObjectPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObjectPhotos
     * const objectPhotos = await prisma.objectPhoto.findMany()
     * 
     * // Get first 10 ObjectPhotos
     * const objectPhotos = await prisma.objectPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objectPhotoWithIdOnly = await prisma.objectPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjectPhotoFindManyArgs>(args?: SelectSubset<T, ObjectPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObjectPhoto.
     * @param {ObjectPhotoCreateArgs} args - Arguments to create a ObjectPhoto.
     * @example
     * // Create one ObjectPhoto
     * const ObjectPhoto = await prisma.objectPhoto.create({
     *   data: {
     *     // ... data to create a ObjectPhoto
     *   }
     * })
     * 
     */
    create<T extends ObjectPhotoCreateArgs>(args: SelectSubset<T, ObjectPhotoCreateArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObjectPhotos.
     * @param {ObjectPhotoCreateManyArgs} args - Arguments to create many ObjectPhotos.
     * @example
     * // Create many ObjectPhotos
     * const objectPhoto = await prisma.objectPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjectPhotoCreateManyArgs>(args?: SelectSubset<T, ObjectPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ObjectPhoto.
     * @param {ObjectPhotoDeleteArgs} args - Arguments to delete one ObjectPhoto.
     * @example
     * // Delete one ObjectPhoto
     * const ObjectPhoto = await prisma.objectPhoto.delete({
     *   where: {
     *     // ... filter to delete one ObjectPhoto
     *   }
     * })
     * 
     */
    delete<T extends ObjectPhotoDeleteArgs>(args: SelectSubset<T, ObjectPhotoDeleteArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObjectPhoto.
     * @param {ObjectPhotoUpdateArgs} args - Arguments to update one ObjectPhoto.
     * @example
     * // Update one ObjectPhoto
     * const objectPhoto = await prisma.objectPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjectPhotoUpdateArgs>(args: SelectSubset<T, ObjectPhotoUpdateArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObjectPhotos.
     * @param {ObjectPhotoDeleteManyArgs} args - Arguments to filter ObjectPhotos to delete.
     * @example
     * // Delete a few ObjectPhotos
     * const { count } = await prisma.objectPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjectPhotoDeleteManyArgs>(args?: SelectSubset<T, ObjectPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjectPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObjectPhotos
     * const objectPhoto = await prisma.objectPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjectPhotoUpdateManyArgs>(args: SelectSubset<T, ObjectPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ObjectPhoto.
     * @param {ObjectPhotoUpsertArgs} args - Arguments to update or create a ObjectPhoto.
     * @example
     * // Update or create a ObjectPhoto
     * const objectPhoto = await prisma.objectPhoto.upsert({
     *   create: {
     *     // ... data to create a ObjectPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObjectPhoto we want to update
     *   }
     * })
     */
    upsert<T extends ObjectPhotoUpsertArgs>(args: SelectSubset<T, ObjectPhotoUpsertArgs<ExtArgs>>): Prisma__ObjectPhotoClient<$Result.GetResult<Prisma.$ObjectPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObjectPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPhotoCountArgs} args - Arguments to filter ObjectPhotos to count.
     * @example
     * // Count the number of ObjectPhotos
     * const count = await prisma.objectPhoto.count({
     *   where: {
     *     // ... the filter for the ObjectPhotos we want to count
     *   }
     * })
    **/
    count<T extends ObjectPhotoCountArgs>(
      args?: Subset<T, ObjectPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjectPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObjectPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObjectPhotoAggregateArgs>(args: Subset<T, ObjectPhotoAggregateArgs>): Prisma.PrismaPromise<GetObjectPhotoAggregateType<T>>

    /**
     * Group by ObjectPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObjectPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjectPhotoGroupByArgs['orderBy'] }
        : { orderBy?: ObjectPhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObjectPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObjectPhoto model
   */
  readonly fields: ObjectPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObjectPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjectPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objects<T extends ObjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectsDefaultArgs<ExtArgs>>): Prisma__ObjectsClient<$Result.GetResult<Prisma.$ObjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObjectPhoto model
   */
  interface ObjectPhotoFieldRefs {
    readonly id: FieldRef<"ObjectPhoto", 'Int'>
    readonly objectId: FieldRef<"ObjectPhoto", 'Int'>
    readonly url: FieldRef<"ObjectPhoto", 'String'>
    readonly sortOrder: FieldRef<"ObjectPhoto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ObjectPhoto findUnique
   */
  export type ObjectPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPhoto to fetch.
     */
    where: ObjectPhotoWhereUniqueInput
  }

  /**
   * ObjectPhoto findUniqueOrThrow
   */
  export type ObjectPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPhoto to fetch.
     */
    where: ObjectPhotoWhereUniqueInput
  }

  /**
   * ObjectPhoto findFirst
   */
  export type ObjectPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPhoto to fetch.
     */
    where?: ObjectPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPhotos to fetch.
     */
    orderBy?: ObjectPhotoOrderByWithRelationInput | ObjectPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjectPhotos.
     */
    cursor?: ObjectPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjectPhotos.
     */
    distinct?: ObjectPhotoScalarFieldEnum | ObjectPhotoScalarFieldEnum[]
  }

  /**
   * ObjectPhoto findFirstOrThrow
   */
  export type ObjectPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPhoto to fetch.
     */
    where?: ObjectPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPhotos to fetch.
     */
    orderBy?: ObjectPhotoOrderByWithRelationInput | ObjectPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjectPhotos.
     */
    cursor?: ObjectPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjectPhotos.
     */
    distinct?: ObjectPhotoScalarFieldEnum | ObjectPhotoScalarFieldEnum[]
  }

  /**
   * ObjectPhoto findMany
   */
  export type ObjectPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPhotos to fetch.
     */
    where?: ObjectPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPhotos to fetch.
     */
    orderBy?: ObjectPhotoOrderByWithRelationInput | ObjectPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObjectPhotos.
     */
    cursor?: ObjectPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjectPhotos.
     */
    distinct?: ObjectPhotoScalarFieldEnum | ObjectPhotoScalarFieldEnum[]
  }

  /**
   * ObjectPhoto create
   */
  export type ObjectPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ObjectPhoto.
     */
    data: XOR<ObjectPhotoCreateInput, ObjectPhotoUncheckedCreateInput>
  }

  /**
   * ObjectPhoto createMany
   */
  export type ObjectPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObjectPhotos.
     */
    data: ObjectPhotoCreateManyInput | ObjectPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObjectPhoto update
   */
  export type ObjectPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ObjectPhoto.
     */
    data: XOR<ObjectPhotoUpdateInput, ObjectPhotoUncheckedUpdateInput>
    /**
     * Choose, which ObjectPhoto to update.
     */
    where: ObjectPhotoWhereUniqueInput
  }

  /**
   * ObjectPhoto updateMany
   */
  export type ObjectPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObjectPhotos.
     */
    data: XOR<ObjectPhotoUpdateManyMutationInput, ObjectPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ObjectPhotos to update
     */
    where?: ObjectPhotoWhereInput
    /**
     * Limit how many ObjectPhotos to update.
     */
    limit?: number
  }

  /**
   * ObjectPhoto upsert
   */
  export type ObjectPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ObjectPhoto to update in case it exists.
     */
    where: ObjectPhotoWhereUniqueInput
    /**
     * In case the ObjectPhoto found by the `where` argument doesn't exist, create a new ObjectPhoto with this data.
     */
    create: XOR<ObjectPhotoCreateInput, ObjectPhotoUncheckedCreateInput>
    /**
     * In case the ObjectPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjectPhotoUpdateInput, ObjectPhotoUncheckedUpdateInput>
  }

  /**
   * ObjectPhoto delete
   */
  export type ObjectPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
    /**
     * Filter which ObjectPhoto to delete.
     */
    where: ObjectPhotoWhereUniqueInput
  }

  /**
   * ObjectPhoto deleteMany
   */
  export type ObjectPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjectPhotos to delete
     */
    where?: ObjectPhotoWhereInput
    /**
     * Limit how many ObjectPhotos to delete.
     */
    limit?: number
  }

  /**
   * ObjectPhoto without action
   */
  export type ObjectPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPhoto
     */
    select?: ObjectPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPhoto
     */
    omit?: ObjectPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPhotoInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    id: number | null
    realty_id: number | null
    amount: number | null
    prepayment: number | null
    balance_to_be_paid_1: number | null
    price_per_day: number | null
    deposit: number | null
    returned: number | null
    manual_deposit: number | null
    client_id: number | null
    cabinet: number | null
    tochka_id_pay: number | null
    tochka_id_deposit: number | null
    maid_id: number | null
    review: number | null
  }

  export type BookingsSumAggregateOutputType = {
    id: number | null
    realty_id: number | null
    amount: number | null
    prepayment: number | null
    balance_to_be_paid_1: number | null
    price_per_day: number | null
    deposit: number | null
    returned: number | null
    manual_deposit: number | null
    client_id: number | null
    cabinet: number | null
    tochka_id_pay: number | null
    tochka_id_deposit: number | null
    maid_id: number | null
    review: number | null
  }

  export type BookingsMinAggregateOutputType = {
    status: $Enums.BookStatus | null
    id: number | null
    begin_date: string | null
    end_date: string | null
    realty_id: number | null
    created_at: Date | null
    updated_at: Date | null
    amount: number | null
    notes: string | null
    source: string | null
    prepayment: number | null
    balance_to_be_paid_1: number | null
    price_per_day: number | null
    deposit: number | null
    returned: number | null
    manual_deposit: number | null
    client_id: number | null
    fio: string | null
    email: string | null
    phone: string | null
    additional_phone: string | null
    cabinet: number | null
    tochka_id_pay: number | null
    tochka_id_deposit: number | null
    begin_time: string | null
    end_time: string | null
    contract_status: string | null
    contract_id: string | null
    contract_link: string | null
    maid_id: number | null
    review: number | null
    channel: string | null
    deposit_payment_link: string | null
    link: string | null
  }

  export type BookingsMaxAggregateOutputType = {
    status: $Enums.BookStatus | null
    id: number | null
    begin_date: string | null
    end_date: string | null
    realty_id: number | null
    created_at: Date | null
    updated_at: Date | null
    amount: number | null
    notes: string | null
    source: string | null
    prepayment: number | null
    balance_to_be_paid_1: number | null
    price_per_day: number | null
    deposit: number | null
    returned: number | null
    manual_deposit: number | null
    client_id: number | null
    fio: string | null
    email: string | null
    phone: string | null
    additional_phone: string | null
    cabinet: number | null
    tochka_id_pay: number | null
    tochka_id_deposit: number | null
    begin_time: string | null
    end_time: string | null
    contract_status: string | null
    contract_id: string | null
    contract_link: string | null
    maid_id: number | null
    review: number | null
    channel: string | null
    deposit_payment_link: string | null
    link: string | null
  }

  export type BookingsCountAggregateOutputType = {
    status: number
    id: number
    begin_date: number
    end_date: number
    realty_id: number
    created_at: number
    updated_at: number
    amount: number
    notes: number
    source: number
    prepayment: number
    balance_to_be_paid_1: number
    price_per_day: number
    deposit: number
    returned: number
    manual_deposit: number
    client_id: number
    fio: number
    email: number
    phone: number
    additional_phone: number
    cabinet: number
    tochka_id_pay: number
    tochka_id_deposit: number
    begin_time: number
    end_time: number
    contract_status: number
    contract_id: number
    contract_link: number
    maid_id: number
    review: number
    channel: number
    deposit_payment_link: number
    link: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    id?: true
    realty_id?: true
    amount?: true
    prepayment?: true
    balance_to_be_paid_1?: true
    price_per_day?: true
    deposit?: true
    returned?: true
    manual_deposit?: true
    client_id?: true
    cabinet?: true
    tochka_id_pay?: true
    tochka_id_deposit?: true
    maid_id?: true
    review?: true
  }

  export type BookingsSumAggregateInputType = {
    id?: true
    realty_id?: true
    amount?: true
    prepayment?: true
    balance_to_be_paid_1?: true
    price_per_day?: true
    deposit?: true
    returned?: true
    manual_deposit?: true
    client_id?: true
    cabinet?: true
    tochka_id_pay?: true
    tochka_id_deposit?: true
    maid_id?: true
    review?: true
  }

  export type BookingsMinAggregateInputType = {
    status?: true
    id?: true
    begin_date?: true
    end_date?: true
    realty_id?: true
    created_at?: true
    updated_at?: true
    amount?: true
    notes?: true
    source?: true
    prepayment?: true
    balance_to_be_paid_1?: true
    price_per_day?: true
    deposit?: true
    returned?: true
    manual_deposit?: true
    client_id?: true
    fio?: true
    email?: true
    phone?: true
    additional_phone?: true
    cabinet?: true
    tochka_id_pay?: true
    tochka_id_deposit?: true
    begin_time?: true
    end_time?: true
    contract_status?: true
    contract_id?: true
    contract_link?: true
    maid_id?: true
    review?: true
    channel?: true
    deposit_payment_link?: true
    link?: true
  }

  export type BookingsMaxAggregateInputType = {
    status?: true
    id?: true
    begin_date?: true
    end_date?: true
    realty_id?: true
    created_at?: true
    updated_at?: true
    amount?: true
    notes?: true
    source?: true
    prepayment?: true
    balance_to_be_paid_1?: true
    price_per_day?: true
    deposit?: true
    returned?: true
    manual_deposit?: true
    client_id?: true
    fio?: true
    email?: true
    phone?: true
    additional_phone?: true
    cabinet?: true
    tochka_id_pay?: true
    tochka_id_deposit?: true
    begin_time?: true
    end_time?: true
    contract_status?: true
    contract_id?: true
    contract_link?: true
    maid_id?: true
    review?: true
    channel?: true
    deposit_payment_link?: true
    link?: true
  }

  export type BookingsCountAggregateInputType = {
    status?: true
    id?: true
    begin_date?: true
    end_date?: true
    realty_id?: true
    created_at?: true
    updated_at?: true
    amount?: true
    notes?: true
    source?: true
    prepayment?: true
    balance_to_be_paid_1?: true
    price_per_day?: true
    deposit?: true
    returned?: true
    manual_deposit?: true
    client_id?: true
    fio?: true
    email?: true
    phone?: true
    additional_phone?: true
    cabinet?: true
    tochka_id_pay?: true
    tochka_id_deposit?: true
    begin_time?: true
    end_time?: true
    contract_status?: true
    contract_id?: true
    contract_link?: true
    maid_id?: true
    review?: true
    channel?: true
    deposit_payment_link?: true
    link?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    status: $Enums.BookStatus | null
    id: number
    begin_date: string | null
    end_date: string | null
    realty_id: number | null
    created_at: Date | null
    updated_at: Date | null
    amount: number | null
    notes: string | null
    source: string | null
    prepayment: number | null
    balance_to_be_paid_1: number | null
    price_per_day: number | null
    deposit: number | null
    returned: number | null
    manual_deposit: number | null
    client_id: number | null
    fio: string | null
    email: string | null
    phone: string | null
    additional_phone: string | null
    cabinet: number
    tochka_id_pay: number | null
    tochka_id_deposit: number | null
    begin_time: string | null
    end_time: string | null
    contract_status: string | null
    contract_id: string | null
    contract_link: string | null
    maid_id: number | null
    review: number | null
    channel: string | null
    deposit_payment_link: string | null
    link: string
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status?: boolean
    id?: boolean
    begin_date?: boolean
    end_date?: boolean
    realty_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    amount?: boolean
    notes?: boolean
    source?: boolean
    prepayment?: boolean
    balance_to_be_paid_1?: boolean
    price_per_day?: boolean
    deposit?: boolean
    returned?: boolean
    manual_deposit?: boolean
    client_id?: boolean
    fio?: boolean
    email?: boolean
    phone?: boolean
    additional_phone?: boolean
    cabinet?: boolean
    tochka_id_pay?: boolean
    tochka_id_deposit?: boolean
    begin_time?: boolean
    end_time?: boolean
    contract_status?: boolean
    contract_id?: boolean
    contract_link?: boolean
    maid_id?: boolean
    review?: boolean
    channel?: boolean
    deposit_payment_link?: boolean
    link?: boolean
  }, ExtArgs["result"]["bookings"]>



  export type BookingsSelectScalar = {
    status?: boolean
    id?: boolean
    begin_date?: boolean
    end_date?: boolean
    realty_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    amount?: boolean
    notes?: boolean
    source?: boolean
    prepayment?: boolean
    balance_to_be_paid_1?: boolean
    price_per_day?: boolean
    deposit?: boolean
    returned?: boolean
    manual_deposit?: boolean
    client_id?: boolean
    fio?: boolean
    email?: boolean
    phone?: boolean
    additional_phone?: boolean
    cabinet?: boolean
    tochka_id_pay?: boolean
    tochka_id_deposit?: boolean
    begin_time?: boolean
    end_time?: boolean
    contract_status?: boolean
    contract_id?: boolean
    contract_link?: boolean
    maid_id?: boolean
    review?: boolean
    channel?: boolean
    deposit_payment_link?: boolean
    link?: boolean
  }

  export type BookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"status" | "id" | "begin_date" | "end_date" | "realty_id" | "created_at" | "updated_at" | "amount" | "notes" | "source" | "prepayment" | "balance_to_be_paid_1" | "price_per_day" | "deposit" | "returned" | "manual_deposit" | "client_id" | "fio" | "email" | "phone" | "additional_phone" | "cabinet" | "tochka_id_pay" | "tochka_id_deposit" | "begin_time" | "end_time" | "contract_status" | "contract_id" | "contract_link" | "maid_id" | "review" | "channel" | "deposit_payment_link" | "link", ExtArgs["result"]["bookings"]>

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      status: $Enums.BookStatus | null
      id: number
      begin_date: string | null
      end_date: string | null
      realty_id: number | null
      created_at: Date | null
      updated_at: Date | null
      amount: number | null
      notes: string | null
      source: string | null
      prepayment: number | null
      balance_to_be_paid_1: number | null
      price_per_day: number | null
      deposit: number | null
      returned: number | null
      manual_deposit: number | null
      client_id: number | null
      fio: string | null
      email: string | null
      phone: string | null
      additional_phone: string | null
      cabinet: number
      tochka_id_pay: number | null
      tochka_id_deposit: number | null
      begin_time: string | null
      end_time: string | null
      contract_status: string | null
      contract_id: string | null
      contract_link: string | null
      maid_id: number | null
      review: number | null
      channel: string | null
      deposit_payment_link: string | null
      link: string
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingsFindUniqueArgs>(args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingsFindFirstArgs>(args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingsFindManyArgs>(args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends BookingsCreateArgs>(args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingsCreateManyArgs>(args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends BookingsDeleteArgs>(args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingsUpdateArgs>(args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingsDeleteManyArgs>(args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingsUpdateManyArgs>(args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends BookingsUpsertArgs>(args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookings model
   */
  interface BookingsFieldRefs {
    readonly status: FieldRef<"Bookings", 'BookStatus'>
    readonly id: FieldRef<"Bookings", 'Int'>
    readonly begin_date: FieldRef<"Bookings", 'String'>
    readonly end_date: FieldRef<"Bookings", 'String'>
    readonly realty_id: FieldRef<"Bookings", 'Int'>
    readonly created_at: FieldRef<"Bookings", 'DateTime'>
    readonly updated_at: FieldRef<"Bookings", 'DateTime'>
    readonly amount: FieldRef<"Bookings", 'Int'>
    readonly notes: FieldRef<"Bookings", 'String'>
    readonly source: FieldRef<"Bookings", 'String'>
    readonly prepayment: FieldRef<"Bookings", 'Int'>
    readonly balance_to_be_paid_1: FieldRef<"Bookings", 'Int'>
    readonly price_per_day: FieldRef<"Bookings", 'Int'>
    readonly deposit: FieldRef<"Bookings", 'Int'>
    readonly returned: FieldRef<"Bookings", 'Int'>
    readonly manual_deposit: FieldRef<"Bookings", 'Int'>
    readonly client_id: FieldRef<"Bookings", 'Int'>
    readonly fio: FieldRef<"Bookings", 'String'>
    readonly email: FieldRef<"Bookings", 'String'>
    readonly phone: FieldRef<"Bookings", 'String'>
    readonly additional_phone: FieldRef<"Bookings", 'String'>
    readonly cabinet: FieldRef<"Bookings", 'Int'>
    readonly tochka_id_pay: FieldRef<"Bookings", 'Int'>
    readonly tochka_id_deposit: FieldRef<"Bookings", 'Int'>
    readonly begin_time: FieldRef<"Bookings", 'String'>
    readonly end_time: FieldRef<"Bookings", 'String'>
    readonly contract_status: FieldRef<"Bookings", 'String'>
    readonly contract_id: FieldRef<"Bookings", 'String'>
    readonly contract_link: FieldRef<"Bookings", 'String'>
    readonly maid_id: FieldRef<"Bookings", 'Int'>
    readonly review: FieldRef<"Bookings", 'Int'>
    readonly channel: FieldRef<"Bookings", 'String'>
    readonly deposit_payment_link: FieldRef<"Bookings", 'String'>
    readonly link: FieldRef<"Bookings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
  }


  /**
   * Model CleaningSchedule
   */

  export type AggregateCleaningSchedule = {
    _count: CleaningScheduleCountAggregateOutputType | null
    _avg: CleaningScheduleAvgAggregateOutputType | null
    _sum: CleaningScheduleSumAggregateOutputType | null
    _min: CleaningScheduleMinAggregateOutputType | null
    _max: CleaningScheduleMaxAggregateOutputType | null
  }

  export type CleaningScheduleAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    objectid: number | null
    booking_id: number | null
    maid_id: number | null
  }

  export type CleaningScheduleSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    objectid: number | null
    booking_id: number | null
    maid_id: number | null
  }

  export type CleaningScheduleMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    objectid: number | null
    date: string | null
    booking_id: number | null
    maid_id: number | null
    checkin_time: string | null
    checkout_time: string | null
    comment: string | null
    included: $Enums.Thumbler | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CleaningScheduleMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    objectid: number | null
    date: string | null
    booking_id: number | null
    maid_id: number | null
    checkin_time: string | null
    checkout_time: string | null
    comment: string | null
    included: $Enums.Thumbler | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CleaningScheduleCountAggregateOutputType = {
    id: number
    cabinetid: number
    objectid: number
    date: number
    booking_id: number
    maid_id: number
    checkin_time: number
    checkout_time: number
    comment: number
    included: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CleaningScheduleAvgAggregateInputType = {
    id?: true
    cabinetid?: true
    objectid?: true
    booking_id?: true
    maid_id?: true
  }

  export type CleaningScheduleSumAggregateInputType = {
    id?: true
    cabinetid?: true
    objectid?: true
    booking_id?: true
    maid_id?: true
  }

  export type CleaningScheduleMinAggregateInputType = {
    id?: true
    cabinetid?: true
    objectid?: true
    date?: true
    booking_id?: true
    maid_id?: true
    checkin_time?: true
    checkout_time?: true
    comment?: true
    included?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CleaningScheduleMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    objectid?: true
    date?: true
    booking_id?: true
    maid_id?: true
    checkin_time?: true
    checkout_time?: true
    comment?: true
    included?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CleaningScheduleCountAggregateInputType = {
    id?: true
    cabinetid?: true
    objectid?: true
    date?: true
    booking_id?: true
    maid_id?: true
    checkin_time?: true
    checkout_time?: true
    comment?: true
    included?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CleaningScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleaningSchedule to aggregate.
     */
    where?: CleaningScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleaningSchedules to fetch.
     */
    orderBy?: CleaningScheduleOrderByWithRelationInput | CleaningScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleaningScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleaningSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleaningSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleaningSchedules
    **/
    _count?: true | CleaningScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleaningScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleaningScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleaningScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleaningScheduleMaxAggregateInputType
  }

  export type GetCleaningScheduleAggregateType<T extends CleaningScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateCleaningSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleaningSchedule[P]>
      : GetScalarType<T[P], AggregateCleaningSchedule[P]>
  }




  export type CleaningScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleaningScheduleWhereInput
    orderBy?: CleaningScheduleOrderByWithAggregationInput | CleaningScheduleOrderByWithAggregationInput[]
    by: CleaningScheduleScalarFieldEnum[] | CleaningScheduleScalarFieldEnum
    having?: CleaningScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleaningScheduleCountAggregateInputType | true
    _avg?: CleaningScheduleAvgAggregateInputType
    _sum?: CleaningScheduleSumAggregateInputType
    _min?: CleaningScheduleMinAggregateInputType
    _max?: CleaningScheduleMaxAggregateInputType
  }

  export type CleaningScheduleGroupByOutputType = {
    id: number
    cabinetid: number
    objectid: number
    date: string
    booking_id: number | null
    maid_id: number | null
    checkin_time: string | null
    checkout_time: string | null
    comment: string | null
    included: $Enums.Thumbler
    createdAt: Date
    updatedAt: Date
    _count: CleaningScheduleCountAggregateOutputType | null
    _avg: CleaningScheduleAvgAggregateOutputType | null
    _sum: CleaningScheduleSumAggregateOutputType | null
    _min: CleaningScheduleMinAggregateOutputType | null
    _max: CleaningScheduleMaxAggregateOutputType | null
  }

  type GetCleaningScheduleGroupByPayload<T extends CleaningScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleaningScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleaningScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleaningScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], CleaningScheduleGroupByOutputType[P]>
        }
      >
    >


  export type CleaningScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    objectid?: boolean
    date?: boolean
    booking_id?: boolean
    maid_id?: boolean
    checkin_time?: boolean
    checkout_time?: boolean
    comment?: boolean
    included?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cleaningSchedule"]>



  export type CleaningScheduleSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    objectid?: boolean
    date?: boolean
    booking_id?: boolean
    maid_id?: boolean
    checkin_time?: boolean
    checkout_time?: boolean
    comment?: boolean
    included?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CleaningScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "objectid" | "date" | "booking_id" | "maid_id" | "checkin_time" | "checkout_time" | "comment" | "included" | "createdAt" | "updatedAt", ExtArgs["result"]["cleaningSchedule"]>

  export type $CleaningSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleaningSchedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      objectid: number
      date: string
      booking_id: number | null
      maid_id: number | null
      checkin_time: string | null
      checkout_time: string | null
      comment: string | null
      included: $Enums.Thumbler
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cleaningSchedule"]>
    composites: {}
  }

  type CleaningScheduleGetPayload<S extends boolean | null | undefined | CleaningScheduleDefaultArgs> = $Result.GetResult<Prisma.$CleaningSchedulePayload, S>

  type CleaningScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleaningScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleaningScheduleCountAggregateInputType | true
    }

  export interface CleaningScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleaningSchedule'], meta: { name: 'CleaningSchedule' } }
    /**
     * Find zero or one CleaningSchedule that matches the filter.
     * @param {CleaningScheduleFindUniqueArgs} args - Arguments to find a CleaningSchedule
     * @example
     * // Get one CleaningSchedule
     * const cleaningSchedule = await prisma.cleaningSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleaningScheduleFindUniqueArgs>(args: SelectSubset<T, CleaningScheduleFindUniqueArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleaningSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleaningScheduleFindUniqueOrThrowArgs} args - Arguments to find a CleaningSchedule
     * @example
     * // Get one CleaningSchedule
     * const cleaningSchedule = await prisma.cleaningSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleaningScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, CleaningScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleaningSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningScheduleFindFirstArgs} args - Arguments to find a CleaningSchedule
     * @example
     * // Get one CleaningSchedule
     * const cleaningSchedule = await prisma.cleaningSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleaningScheduleFindFirstArgs>(args?: SelectSubset<T, CleaningScheduleFindFirstArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleaningSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningScheduleFindFirstOrThrowArgs} args - Arguments to find a CleaningSchedule
     * @example
     * // Get one CleaningSchedule
     * const cleaningSchedule = await prisma.cleaningSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleaningScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, CleaningScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleaningSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleaningSchedules
     * const cleaningSchedules = await prisma.cleaningSchedule.findMany()
     * 
     * // Get first 10 CleaningSchedules
     * const cleaningSchedules = await prisma.cleaningSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleaningScheduleWithIdOnly = await prisma.cleaningSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleaningScheduleFindManyArgs>(args?: SelectSubset<T, CleaningScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleaningSchedule.
     * @param {CleaningScheduleCreateArgs} args - Arguments to create a CleaningSchedule.
     * @example
     * // Create one CleaningSchedule
     * const CleaningSchedule = await prisma.cleaningSchedule.create({
     *   data: {
     *     // ... data to create a CleaningSchedule
     *   }
     * })
     * 
     */
    create<T extends CleaningScheduleCreateArgs>(args: SelectSubset<T, CleaningScheduleCreateArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleaningSchedules.
     * @param {CleaningScheduleCreateManyArgs} args - Arguments to create many CleaningSchedules.
     * @example
     * // Create many CleaningSchedules
     * const cleaningSchedule = await prisma.cleaningSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleaningScheduleCreateManyArgs>(args?: SelectSubset<T, CleaningScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CleaningSchedule.
     * @param {CleaningScheduleDeleteArgs} args - Arguments to delete one CleaningSchedule.
     * @example
     * // Delete one CleaningSchedule
     * const CleaningSchedule = await prisma.cleaningSchedule.delete({
     *   where: {
     *     // ... filter to delete one CleaningSchedule
     *   }
     * })
     * 
     */
    delete<T extends CleaningScheduleDeleteArgs>(args: SelectSubset<T, CleaningScheduleDeleteArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleaningSchedule.
     * @param {CleaningScheduleUpdateArgs} args - Arguments to update one CleaningSchedule.
     * @example
     * // Update one CleaningSchedule
     * const cleaningSchedule = await prisma.cleaningSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleaningScheduleUpdateArgs>(args: SelectSubset<T, CleaningScheduleUpdateArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleaningSchedules.
     * @param {CleaningScheduleDeleteManyArgs} args - Arguments to filter CleaningSchedules to delete.
     * @example
     * // Delete a few CleaningSchedules
     * const { count } = await prisma.cleaningSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleaningScheduleDeleteManyArgs>(args?: SelectSubset<T, CleaningScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleaningSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleaningSchedules
     * const cleaningSchedule = await prisma.cleaningSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleaningScheduleUpdateManyArgs>(args: SelectSubset<T, CleaningScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CleaningSchedule.
     * @param {CleaningScheduleUpsertArgs} args - Arguments to update or create a CleaningSchedule.
     * @example
     * // Update or create a CleaningSchedule
     * const cleaningSchedule = await prisma.cleaningSchedule.upsert({
     *   create: {
     *     // ... data to create a CleaningSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleaningSchedule we want to update
     *   }
     * })
     */
    upsert<T extends CleaningScheduleUpsertArgs>(args: SelectSubset<T, CleaningScheduleUpsertArgs<ExtArgs>>): Prisma__CleaningScheduleClient<$Result.GetResult<Prisma.$CleaningSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleaningSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningScheduleCountArgs} args - Arguments to filter CleaningSchedules to count.
     * @example
     * // Count the number of CleaningSchedules
     * const count = await prisma.cleaningSchedule.count({
     *   where: {
     *     // ... the filter for the CleaningSchedules we want to count
     *   }
     * })
    **/
    count<T extends CleaningScheduleCountArgs>(
      args?: Subset<T, CleaningScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleaningScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleaningSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CleaningScheduleAggregateArgs>(args: Subset<T, CleaningScheduleAggregateArgs>): Prisma.PrismaPromise<GetCleaningScheduleAggregateType<T>>

    /**
     * Group by CleaningSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CleaningScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleaningScheduleGroupByArgs['orderBy'] }
        : { orderBy?: CleaningScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CleaningScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleaningScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleaningSchedule model
   */
  readonly fields: CleaningScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleaningSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleaningScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CleaningSchedule model
   */
  interface CleaningScheduleFieldRefs {
    readonly id: FieldRef<"CleaningSchedule", 'Int'>
    readonly cabinetid: FieldRef<"CleaningSchedule", 'Int'>
    readonly objectid: FieldRef<"CleaningSchedule", 'Int'>
    readonly date: FieldRef<"CleaningSchedule", 'String'>
    readonly booking_id: FieldRef<"CleaningSchedule", 'Int'>
    readonly maid_id: FieldRef<"CleaningSchedule", 'Int'>
    readonly checkin_time: FieldRef<"CleaningSchedule", 'String'>
    readonly checkout_time: FieldRef<"CleaningSchedule", 'String'>
    readonly comment: FieldRef<"CleaningSchedule", 'String'>
    readonly included: FieldRef<"CleaningSchedule", 'Thumbler'>
    readonly createdAt: FieldRef<"CleaningSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"CleaningSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CleaningSchedule findUnique
   */
  export type CleaningScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * Filter, which CleaningSchedule to fetch.
     */
    where: CleaningScheduleWhereUniqueInput
  }

  /**
   * CleaningSchedule findUniqueOrThrow
   */
  export type CleaningScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * Filter, which CleaningSchedule to fetch.
     */
    where: CleaningScheduleWhereUniqueInput
  }

  /**
   * CleaningSchedule findFirst
   */
  export type CleaningScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * Filter, which CleaningSchedule to fetch.
     */
    where?: CleaningScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleaningSchedules to fetch.
     */
    orderBy?: CleaningScheduleOrderByWithRelationInput | CleaningScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleaningSchedules.
     */
    cursor?: CleaningScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleaningSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleaningSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleaningSchedules.
     */
    distinct?: CleaningScheduleScalarFieldEnum | CleaningScheduleScalarFieldEnum[]
  }

  /**
   * CleaningSchedule findFirstOrThrow
   */
  export type CleaningScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * Filter, which CleaningSchedule to fetch.
     */
    where?: CleaningScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleaningSchedules to fetch.
     */
    orderBy?: CleaningScheduleOrderByWithRelationInput | CleaningScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleaningSchedules.
     */
    cursor?: CleaningScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleaningSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleaningSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleaningSchedules.
     */
    distinct?: CleaningScheduleScalarFieldEnum | CleaningScheduleScalarFieldEnum[]
  }

  /**
   * CleaningSchedule findMany
   */
  export type CleaningScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * Filter, which CleaningSchedules to fetch.
     */
    where?: CleaningScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleaningSchedules to fetch.
     */
    orderBy?: CleaningScheduleOrderByWithRelationInput | CleaningScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleaningSchedules.
     */
    cursor?: CleaningScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleaningSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleaningSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleaningSchedules.
     */
    distinct?: CleaningScheduleScalarFieldEnum | CleaningScheduleScalarFieldEnum[]
  }

  /**
   * CleaningSchedule create
   */
  export type CleaningScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * The data needed to create a CleaningSchedule.
     */
    data: XOR<CleaningScheduleCreateInput, CleaningScheduleUncheckedCreateInput>
  }

  /**
   * CleaningSchedule createMany
   */
  export type CleaningScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleaningSchedules.
     */
    data: CleaningScheduleCreateManyInput | CleaningScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleaningSchedule update
   */
  export type CleaningScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * The data needed to update a CleaningSchedule.
     */
    data: XOR<CleaningScheduleUpdateInput, CleaningScheduleUncheckedUpdateInput>
    /**
     * Choose, which CleaningSchedule to update.
     */
    where: CleaningScheduleWhereUniqueInput
  }

  /**
   * CleaningSchedule updateMany
   */
  export type CleaningScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleaningSchedules.
     */
    data: XOR<CleaningScheduleUpdateManyMutationInput, CleaningScheduleUncheckedUpdateManyInput>
    /**
     * Filter which CleaningSchedules to update
     */
    where?: CleaningScheduleWhereInput
    /**
     * Limit how many CleaningSchedules to update.
     */
    limit?: number
  }

  /**
   * CleaningSchedule upsert
   */
  export type CleaningScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * The filter to search for the CleaningSchedule to update in case it exists.
     */
    where: CleaningScheduleWhereUniqueInput
    /**
     * In case the CleaningSchedule found by the `where` argument doesn't exist, create a new CleaningSchedule with this data.
     */
    create: XOR<CleaningScheduleCreateInput, CleaningScheduleUncheckedCreateInput>
    /**
     * In case the CleaningSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleaningScheduleUpdateInput, CleaningScheduleUncheckedUpdateInput>
  }

  /**
   * CleaningSchedule delete
   */
  export type CleaningScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
    /**
     * Filter which CleaningSchedule to delete.
     */
    where: CleaningScheduleWhereUniqueInput
  }

  /**
   * CleaningSchedule deleteMany
   */
  export type CleaningScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleaningSchedules to delete
     */
    where?: CleaningScheduleWhereInput
    /**
     * Limit how many CleaningSchedules to delete.
     */
    limit?: number
  }

  /**
   * CleaningSchedule without action
   */
  export type CleaningScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleaningSchedule
     */
    select?: CleaningScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleaningSchedule
     */
    omit?: CleaningScheduleOmit<ExtArgs> | null
  }


  /**
   * Model UnprocessedBooking
   */

  export type AggregateUnprocessedBooking = {
    _count: UnprocessedBookingCountAggregateOutputType | null
    _avg: UnprocessedBookingAvgAggregateOutputType | null
    _sum: UnprocessedBookingSumAggregateOutputType | null
    _min: UnprocessedBookingMinAggregateOutputType | null
    _max: UnprocessedBookingMaxAggregateOutputType | null
  }

  export type UnprocessedBookingAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    realtyId: number | null
    amount: number | null
    prepayment: number | null
    balanceToBePaid: number | null
    pricePerDay: number | null
    deposit: number | null
    clientId: number | null
  }

  export type UnprocessedBookingSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    realtyId: number | null
    amount: number | null
    prepayment: number | null
    balanceToBePaid: number | null
    pricePerDay: number | null
    deposit: number | null
    clientId: number | null
  }

  export type UnprocessedBookingMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    action: string | null
    failReason: string | null
    failMessage: string | null
    realtyId: number | null
    beginDate: string | null
    endDate: string | null
    bookingStatus: string | null
    source: string | null
    amount: number | null
    notes: string | null
    prepayment: number | null
    balanceToBePaid: number | null
    pricePerDay: number | null
    deposit: number | null
    clientId: number | null
    fio: string | null
    email: string | null
    phone: string | null
    additionalPhone: string | null
    resolved: boolean | null
    createdAt: Date | null
  }

  export type UnprocessedBookingMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    action: string | null
    failReason: string | null
    failMessage: string | null
    realtyId: number | null
    beginDate: string | null
    endDate: string | null
    bookingStatus: string | null
    source: string | null
    amount: number | null
    notes: string | null
    prepayment: number | null
    balanceToBePaid: number | null
    pricePerDay: number | null
    deposit: number | null
    clientId: number | null
    fio: string | null
    email: string | null
    phone: string | null
    additionalPhone: string | null
    resolved: boolean | null
    createdAt: Date | null
  }

  export type UnprocessedBookingCountAggregateOutputType = {
    id: number
    cabinetid: number
    bookingId: number
    action: number
    failReason: number
    failMessage: number
    realtyId: number
    beginDate: number
    endDate: number
    bookingStatus: number
    source: number
    amount: number
    notes: number
    prepayment: number
    balanceToBePaid: number
    pricePerDay: number
    deposit: number
    clientId: number
    fio: number
    email: number
    phone: number
    additionalPhone: number
    resolved: number
    createdAt: number
    _all: number
  }


  export type UnprocessedBookingAvgAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    realtyId?: true
    amount?: true
    prepayment?: true
    balanceToBePaid?: true
    pricePerDay?: true
    deposit?: true
    clientId?: true
  }

  export type UnprocessedBookingSumAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    realtyId?: true
    amount?: true
    prepayment?: true
    balanceToBePaid?: true
    pricePerDay?: true
    deposit?: true
    clientId?: true
  }

  export type UnprocessedBookingMinAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    action?: true
    failReason?: true
    failMessage?: true
    realtyId?: true
    beginDate?: true
    endDate?: true
    bookingStatus?: true
    source?: true
    amount?: true
    notes?: true
    prepayment?: true
    balanceToBePaid?: true
    pricePerDay?: true
    deposit?: true
    clientId?: true
    fio?: true
    email?: true
    phone?: true
    additionalPhone?: true
    resolved?: true
    createdAt?: true
  }

  export type UnprocessedBookingMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    action?: true
    failReason?: true
    failMessage?: true
    realtyId?: true
    beginDate?: true
    endDate?: true
    bookingStatus?: true
    source?: true
    amount?: true
    notes?: true
    prepayment?: true
    balanceToBePaid?: true
    pricePerDay?: true
    deposit?: true
    clientId?: true
    fio?: true
    email?: true
    phone?: true
    additionalPhone?: true
    resolved?: true
    createdAt?: true
  }

  export type UnprocessedBookingCountAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    action?: true
    failReason?: true
    failMessage?: true
    realtyId?: true
    beginDate?: true
    endDate?: true
    bookingStatus?: true
    source?: true
    amount?: true
    notes?: true
    prepayment?: true
    balanceToBePaid?: true
    pricePerDay?: true
    deposit?: true
    clientId?: true
    fio?: true
    email?: true
    phone?: true
    additionalPhone?: true
    resolved?: true
    createdAt?: true
    _all?: true
  }

  export type UnprocessedBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnprocessedBooking to aggregate.
     */
    where?: UnprocessedBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnprocessedBookings to fetch.
     */
    orderBy?: UnprocessedBookingOrderByWithRelationInput | UnprocessedBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnprocessedBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnprocessedBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnprocessedBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnprocessedBookings
    **/
    _count?: true | UnprocessedBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnprocessedBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnprocessedBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnprocessedBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnprocessedBookingMaxAggregateInputType
  }

  export type GetUnprocessedBookingAggregateType<T extends UnprocessedBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateUnprocessedBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnprocessedBooking[P]>
      : GetScalarType<T[P], AggregateUnprocessedBooking[P]>
  }




  export type UnprocessedBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnprocessedBookingWhereInput
    orderBy?: UnprocessedBookingOrderByWithAggregationInput | UnprocessedBookingOrderByWithAggregationInput[]
    by: UnprocessedBookingScalarFieldEnum[] | UnprocessedBookingScalarFieldEnum
    having?: UnprocessedBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnprocessedBookingCountAggregateInputType | true
    _avg?: UnprocessedBookingAvgAggregateInputType
    _sum?: UnprocessedBookingSumAggregateInputType
    _min?: UnprocessedBookingMinAggregateInputType
    _max?: UnprocessedBookingMaxAggregateInputType
  }

  export type UnprocessedBookingGroupByOutputType = {
    id: number
    cabinetid: number
    bookingId: number
    action: string
    failReason: string
    failMessage: string | null
    realtyId: number | null
    beginDate: string | null
    endDate: string | null
    bookingStatus: string | null
    source: string | null
    amount: number | null
    notes: string | null
    prepayment: number | null
    balanceToBePaid: number | null
    pricePerDay: number | null
    deposit: number | null
    clientId: number | null
    fio: string | null
    email: string | null
    phone: string | null
    additionalPhone: string | null
    resolved: boolean
    createdAt: Date
    _count: UnprocessedBookingCountAggregateOutputType | null
    _avg: UnprocessedBookingAvgAggregateOutputType | null
    _sum: UnprocessedBookingSumAggregateOutputType | null
    _min: UnprocessedBookingMinAggregateOutputType | null
    _max: UnprocessedBookingMaxAggregateOutputType | null
  }

  type GetUnprocessedBookingGroupByPayload<T extends UnprocessedBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnprocessedBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnprocessedBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnprocessedBookingGroupByOutputType[P]>
            : GetScalarType<T[P], UnprocessedBookingGroupByOutputType[P]>
        }
      >
    >


  export type UnprocessedBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    bookingId?: boolean
    action?: boolean
    failReason?: boolean
    failMessage?: boolean
    realtyId?: boolean
    beginDate?: boolean
    endDate?: boolean
    bookingStatus?: boolean
    source?: boolean
    amount?: boolean
    notes?: boolean
    prepayment?: boolean
    balanceToBePaid?: boolean
    pricePerDay?: boolean
    deposit?: boolean
    clientId?: boolean
    fio?: boolean
    email?: boolean
    phone?: boolean
    additionalPhone?: boolean
    resolved?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["unprocessedBooking"]>



  export type UnprocessedBookingSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    bookingId?: boolean
    action?: boolean
    failReason?: boolean
    failMessage?: boolean
    realtyId?: boolean
    beginDate?: boolean
    endDate?: boolean
    bookingStatus?: boolean
    source?: boolean
    amount?: boolean
    notes?: boolean
    prepayment?: boolean
    balanceToBePaid?: boolean
    pricePerDay?: boolean
    deposit?: boolean
    clientId?: boolean
    fio?: boolean
    email?: boolean
    phone?: boolean
    additionalPhone?: boolean
    resolved?: boolean
    createdAt?: boolean
  }

  export type UnprocessedBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "bookingId" | "action" | "failReason" | "failMessage" | "realtyId" | "beginDate" | "endDate" | "bookingStatus" | "source" | "amount" | "notes" | "prepayment" | "balanceToBePaid" | "pricePerDay" | "deposit" | "clientId" | "fio" | "email" | "phone" | "additionalPhone" | "resolved" | "createdAt", ExtArgs["result"]["unprocessedBooking"]>

  export type $UnprocessedBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnprocessedBooking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      bookingId: number
      action: string
      failReason: string
      failMessage: string | null
      realtyId: number | null
      beginDate: string | null
      endDate: string | null
      bookingStatus: string | null
      source: string | null
      amount: number | null
      notes: string | null
      prepayment: number | null
      balanceToBePaid: number | null
      pricePerDay: number | null
      deposit: number | null
      clientId: number | null
      fio: string | null
      email: string | null
      phone: string | null
      additionalPhone: string | null
      resolved: boolean
      createdAt: Date
    }, ExtArgs["result"]["unprocessedBooking"]>
    composites: {}
  }

  type UnprocessedBookingGetPayload<S extends boolean | null | undefined | UnprocessedBookingDefaultArgs> = $Result.GetResult<Prisma.$UnprocessedBookingPayload, S>

  type UnprocessedBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnprocessedBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnprocessedBookingCountAggregateInputType | true
    }

  export interface UnprocessedBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnprocessedBooking'], meta: { name: 'UnprocessedBooking' } }
    /**
     * Find zero or one UnprocessedBooking that matches the filter.
     * @param {UnprocessedBookingFindUniqueArgs} args - Arguments to find a UnprocessedBooking
     * @example
     * // Get one UnprocessedBooking
     * const unprocessedBooking = await prisma.unprocessedBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnprocessedBookingFindUniqueArgs>(args: SelectSubset<T, UnprocessedBookingFindUniqueArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnprocessedBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnprocessedBookingFindUniqueOrThrowArgs} args - Arguments to find a UnprocessedBooking
     * @example
     * // Get one UnprocessedBooking
     * const unprocessedBooking = await prisma.unprocessedBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnprocessedBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, UnprocessedBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnprocessedBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnprocessedBookingFindFirstArgs} args - Arguments to find a UnprocessedBooking
     * @example
     * // Get one UnprocessedBooking
     * const unprocessedBooking = await prisma.unprocessedBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnprocessedBookingFindFirstArgs>(args?: SelectSubset<T, UnprocessedBookingFindFirstArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnprocessedBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnprocessedBookingFindFirstOrThrowArgs} args - Arguments to find a UnprocessedBooking
     * @example
     * // Get one UnprocessedBooking
     * const unprocessedBooking = await prisma.unprocessedBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnprocessedBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, UnprocessedBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnprocessedBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnprocessedBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnprocessedBookings
     * const unprocessedBookings = await prisma.unprocessedBooking.findMany()
     * 
     * // Get first 10 UnprocessedBookings
     * const unprocessedBookings = await prisma.unprocessedBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unprocessedBookingWithIdOnly = await prisma.unprocessedBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnprocessedBookingFindManyArgs>(args?: SelectSubset<T, UnprocessedBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnprocessedBooking.
     * @param {UnprocessedBookingCreateArgs} args - Arguments to create a UnprocessedBooking.
     * @example
     * // Create one UnprocessedBooking
     * const UnprocessedBooking = await prisma.unprocessedBooking.create({
     *   data: {
     *     // ... data to create a UnprocessedBooking
     *   }
     * })
     * 
     */
    create<T extends UnprocessedBookingCreateArgs>(args: SelectSubset<T, UnprocessedBookingCreateArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnprocessedBookings.
     * @param {UnprocessedBookingCreateManyArgs} args - Arguments to create many UnprocessedBookings.
     * @example
     * // Create many UnprocessedBookings
     * const unprocessedBooking = await prisma.unprocessedBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnprocessedBookingCreateManyArgs>(args?: SelectSubset<T, UnprocessedBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UnprocessedBooking.
     * @param {UnprocessedBookingDeleteArgs} args - Arguments to delete one UnprocessedBooking.
     * @example
     * // Delete one UnprocessedBooking
     * const UnprocessedBooking = await prisma.unprocessedBooking.delete({
     *   where: {
     *     // ... filter to delete one UnprocessedBooking
     *   }
     * })
     * 
     */
    delete<T extends UnprocessedBookingDeleteArgs>(args: SelectSubset<T, UnprocessedBookingDeleteArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnprocessedBooking.
     * @param {UnprocessedBookingUpdateArgs} args - Arguments to update one UnprocessedBooking.
     * @example
     * // Update one UnprocessedBooking
     * const unprocessedBooking = await prisma.unprocessedBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnprocessedBookingUpdateArgs>(args: SelectSubset<T, UnprocessedBookingUpdateArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnprocessedBookings.
     * @param {UnprocessedBookingDeleteManyArgs} args - Arguments to filter UnprocessedBookings to delete.
     * @example
     * // Delete a few UnprocessedBookings
     * const { count } = await prisma.unprocessedBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnprocessedBookingDeleteManyArgs>(args?: SelectSubset<T, UnprocessedBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnprocessedBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnprocessedBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnprocessedBookings
     * const unprocessedBooking = await prisma.unprocessedBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnprocessedBookingUpdateManyArgs>(args: SelectSubset<T, UnprocessedBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnprocessedBooking.
     * @param {UnprocessedBookingUpsertArgs} args - Arguments to update or create a UnprocessedBooking.
     * @example
     * // Update or create a UnprocessedBooking
     * const unprocessedBooking = await prisma.unprocessedBooking.upsert({
     *   create: {
     *     // ... data to create a UnprocessedBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnprocessedBooking we want to update
     *   }
     * })
     */
    upsert<T extends UnprocessedBookingUpsertArgs>(args: SelectSubset<T, UnprocessedBookingUpsertArgs<ExtArgs>>): Prisma__UnprocessedBookingClient<$Result.GetResult<Prisma.$UnprocessedBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnprocessedBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnprocessedBookingCountArgs} args - Arguments to filter UnprocessedBookings to count.
     * @example
     * // Count the number of UnprocessedBookings
     * const count = await prisma.unprocessedBooking.count({
     *   where: {
     *     // ... the filter for the UnprocessedBookings we want to count
     *   }
     * })
    **/
    count<T extends UnprocessedBookingCountArgs>(
      args?: Subset<T, UnprocessedBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnprocessedBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnprocessedBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnprocessedBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnprocessedBookingAggregateArgs>(args: Subset<T, UnprocessedBookingAggregateArgs>): Prisma.PrismaPromise<GetUnprocessedBookingAggregateType<T>>

    /**
     * Group by UnprocessedBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnprocessedBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnprocessedBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnprocessedBookingGroupByArgs['orderBy'] }
        : { orderBy?: UnprocessedBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnprocessedBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnprocessedBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnprocessedBooking model
   */
  readonly fields: UnprocessedBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnprocessedBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnprocessedBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnprocessedBooking model
   */
  interface UnprocessedBookingFieldRefs {
    readonly id: FieldRef<"UnprocessedBooking", 'Int'>
    readonly cabinetid: FieldRef<"UnprocessedBooking", 'Int'>
    readonly bookingId: FieldRef<"UnprocessedBooking", 'Int'>
    readonly action: FieldRef<"UnprocessedBooking", 'String'>
    readonly failReason: FieldRef<"UnprocessedBooking", 'String'>
    readonly failMessage: FieldRef<"UnprocessedBooking", 'String'>
    readonly realtyId: FieldRef<"UnprocessedBooking", 'Int'>
    readonly beginDate: FieldRef<"UnprocessedBooking", 'String'>
    readonly endDate: FieldRef<"UnprocessedBooking", 'String'>
    readonly bookingStatus: FieldRef<"UnprocessedBooking", 'String'>
    readonly source: FieldRef<"UnprocessedBooking", 'String'>
    readonly amount: FieldRef<"UnprocessedBooking", 'Int'>
    readonly notes: FieldRef<"UnprocessedBooking", 'String'>
    readonly prepayment: FieldRef<"UnprocessedBooking", 'Int'>
    readonly balanceToBePaid: FieldRef<"UnprocessedBooking", 'Int'>
    readonly pricePerDay: FieldRef<"UnprocessedBooking", 'Int'>
    readonly deposit: FieldRef<"UnprocessedBooking", 'Int'>
    readonly clientId: FieldRef<"UnprocessedBooking", 'Int'>
    readonly fio: FieldRef<"UnprocessedBooking", 'String'>
    readonly email: FieldRef<"UnprocessedBooking", 'String'>
    readonly phone: FieldRef<"UnprocessedBooking", 'String'>
    readonly additionalPhone: FieldRef<"UnprocessedBooking", 'String'>
    readonly resolved: FieldRef<"UnprocessedBooking", 'Boolean'>
    readonly createdAt: FieldRef<"UnprocessedBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnprocessedBooking findUnique
   */
  export type UnprocessedBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * Filter, which UnprocessedBooking to fetch.
     */
    where: UnprocessedBookingWhereUniqueInput
  }

  /**
   * UnprocessedBooking findUniqueOrThrow
   */
  export type UnprocessedBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * Filter, which UnprocessedBooking to fetch.
     */
    where: UnprocessedBookingWhereUniqueInput
  }

  /**
   * UnprocessedBooking findFirst
   */
  export type UnprocessedBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * Filter, which UnprocessedBooking to fetch.
     */
    where?: UnprocessedBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnprocessedBookings to fetch.
     */
    orderBy?: UnprocessedBookingOrderByWithRelationInput | UnprocessedBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnprocessedBookings.
     */
    cursor?: UnprocessedBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnprocessedBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnprocessedBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnprocessedBookings.
     */
    distinct?: UnprocessedBookingScalarFieldEnum | UnprocessedBookingScalarFieldEnum[]
  }

  /**
   * UnprocessedBooking findFirstOrThrow
   */
  export type UnprocessedBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * Filter, which UnprocessedBooking to fetch.
     */
    where?: UnprocessedBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnprocessedBookings to fetch.
     */
    orderBy?: UnprocessedBookingOrderByWithRelationInput | UnprocessedBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnprocessedBookings.
     */
    cursor?: UnprocessedBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnprocessedBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnprocessedBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnprocessedBookings.
     */
    distinct?: UnprocessedBookingScalarFieldEnum | UnprocessedBookingScalarFieldEnum[]
  }

  /**
   * UnprocessedBooking findMany
   */
  export type UnprocessedBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * Filter, which UnprocessedBookings to fetch.
     */
    where?: UnprocessedBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnprocessedBookings to fetch.
     */
    orderBy?: UnprocessedBookingOrderByWithRelationInput | UnprocessedBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnprocessedBookings.
     */
    cursor?: UnprocessedBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnprocessedBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnprocessedBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnprocessedBookings.
     */
    distinct?: UnprocessedBookingScalarFieldEnum | UnprocessedBookingScalarFieldEnum[]
  }

  /**
   * UnprocessedBooking create
   */
  export type UnprocessedBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * The data needed to create a UnprocessedBooking.
     */
    data: XOR<UnprocessedBookingCreateInput, UnprocessedBookingUncheckedCreateInput>
  }

  /**
   * UnprocessedBooking createMany
   */
  export type UnprocessedBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnprocessedBookings.
     */
    data: UnprocessedBookingCreateManyInput | UnprocessedBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnprocessedBooking update
   */
  export type UnprocessedBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * The data needed to update a UnprocessedBooking.
     */
    data: XOR<UnprocessedBookingUpdateInput, UnprocessedBookingUncheckedUpdateInput>
    /**
     * Choose, which UnprocessedBooking to update.
     */
    where: UnprocessedBookingWhereUniqueInput
  }

  /**
   * UnprocessedBooking updateMany
   */
  export type UnprocessedBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnprocessedBookings.
     */
    data: XOR<UnprocessedBookingUpdateManyMutationInput, UnprocessedBookingUncheckedUpdateManyInput>
    /**
     * Filter which UnprocessedBookings to update
     */
    where?: UnprocessedBookingWhereInput
    /**
     * Limit how many UnprocessedBookings to update.
     */
    limit?: number
  }

  /**
   * UnprocessedBooking upsert
   */
  export type UnprocessedBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * The filter to search for the UnprocessedBooking to update in case it exists.
     */
    where: UnprocessedBookingWhereUniqueInput
    /**
     * In case the UnprocessedBooking found by the `where` argument doesn't exist, create a new UnprocessedBooking with this data.
     */
    create: XOR<UnprocessedBookingCreateInput, UnprocessedBookingUncheckedCreateInput>
    /**
     * In case the UnprocessedBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnprocessedBookingUpdateInput, UnprocessedBookingUncheckedUpdateInput>
  }

  /**
   * UnprocessedBooking delete
   */
  export type UnprocessedBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
    /**
     * Filter which UnprocessedBooking to delete.
     */
    where: UnprocessedBookingWhereUniqueInput
  }

  /**
   * UnprocessedBooking deleteMany
   */
  export type UnprocessedBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnprocessedBookings to delete
     */
    where?: UnprocessedBookingWhereInput
    /**
     * Limit how many UnprocessedBookings to delete.
     */
    limit?: number
  }

  /**
   * UnprocessedBooking without action
   */
  export type UnprocessedBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnprocessedBooking
     */
    select?: UnprocessedBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnprocessedBooking
     */
    omit?: UnprocessedBookingOmit<ExtArgs> | null
  }


  /**
   * Model BugReport
   */

  export type AggregateBugReport = {
    _count: BugReportCountAggregateOutputType | null
    _avg: BugReportAvgAggregateOutputType | null
    _sum: BugReportSumAggregateOutputType | null
    _min: BugReportMinAggregateOutputType | null
    _max: BugReportMaxAggregateOutputType | null
  }

  export type BugReportAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    userId: number | null
  }

  export type BugReportSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    userId: number | null
  }

  export type BugReportMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    userId: number | null
    message: string | null
    page: string | null
    createdAt: Date | null
  }

  export type BugReportMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    userId: number | null
    message: string | null
    page: string | null
    createdAt: Date | null
  }

  export type BugReportCountAggregateOutputType = {
    id: number
    cabinetid: number
    userId: number
    message: number
    page: number
    createdAt: number
    _all: number
  }


  export type BugReportAvgAggregateInputType = {
    id?: true
    cabinetid?: true
    userId?: true
  }

  export type BugReportSumAggregateInputType = {
    id?: true
    cabinetid?: true
    userId?: true
  }

  export type BugReportMinAggregateInputType = {
    id?: true
    cabinetid?: true
    userId?: true
    message?: true
    page?: true
    createdAt?: true
  }

  export type BugReportMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    userId?: true
    message?: true
    page?: true
    createdAt?: true
  }

  export type BugReportCountAggregateInputType = {
    id?: true
    cabinetid?: true
    userId?: true
    message?: true
    page?: true
    createdAt?: true
    _all?: true
  }

  export type BugReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BugReport to aggregate.
     */
    where?: BugReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugReports to fetch.
     */
    orderBy?: BugReportOrderByWithRelationInput | BugReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BugReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BugReports
    **/
    _count?: true | BugReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BugReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BugReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BugReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BugReportMaxAggregateInputType
  }

  export type GetBugReportAggregateType<T extends BugReportAggregateArgs> = {
        [P in keyof T & keyof AggregateBugReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBugReport[P]>
      : GetScalarType<T[P], AggregateBugReport[P]>
  }




  export type BugReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BugReportWhereInput
    orderBy?: BugReportOrderByWithAggregationInput | BugReportOrderByWithAggregationInput[]
    by: BugReportScalarFieldEnum[] | BugReportScalarFieldEnum
    having?: BugReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BugReportCountAggregateInputType | true
    _avg?: BugReportAvgAggregateInputType
    _sum?: BugReportSumAggregateInputType
    _min?: BugReportMinAggregateInputType
    _max?: BugReportMaxAggregateInputType
  }

  export type BugReportGroupByOutputType = {
    id: number
    cabinetid: number
    userId: number
    message: string
    page: string | null
    createdAt: Date
    _count: BugReportCountAggregateOutputType | null
    _avg: BugReportAvgAggregateOutputType | null
    _sum: BugReportSumAggregateOutputType | null
    _min: BugReportMinAggregateOutputType | null
    _max: BugReportMaxAggregateOutputType | null
  }

  type GetBugReportGroupByPayload<T extends BugReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BugReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BugReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BugReportGroupByOutputType[P]>
            : GetScalarType<T[P], BugReportGroupByOutputType[P]>
        }
      >
    >


  export type BugReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    userId?: boolean
    message?: boolean
    page?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bugReport"]>



  export type BugReportSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    userId?: boolean
    message?: boolean
    page?: boolean
    createdAt?: boolean
  }

  export type BugReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "userId" | "message" | "page" | "createdAt", ExtArgs["result"]["bugReport"]>

  export type $BugReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BugReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      userId: number
      message: string
      page: string | null
      createdAt: Date
    }, ExtArgs["result"]["bugReport"]>
    composites: {}
  }

  type BugReportGetPayload<S extends boolean | null | undefined | BugReportDefaultArgs> = $Result.GetResult<Prisma.$BugReportPayload, S>

  type BugReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BugReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BugReportCountAggregateInputType | true
    }

  export interface BugReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BugReport'], meta: { name: 'BugReport' } }
    /**
     * Find zero or one BugReport that matches the filter.
     * @param {BugReportFindUniqueArgs} args - Arguments to find a BugReport
     * @example
     * // Get one BugReport
     * const bugReport = await prisma.bugReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BugReportFindUniqueArgs>(args: SelectSubset<T, BugReportFindUniqueArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BugReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BugReportFindUniqueOrThrowArgs} args - Arguments to find a BugReport
     * @example
     * // Get one BugReport
     * const bugReport = await prisma.bugReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BugReportFindUniqueOrThrowArgs>(args: SelectSubset<T, BugReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BugReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugReportFindFirstArgs} args - Arguments to find a BugReport
     * @example
     * // Get one BugReport
     * const bugReport = await prisma.bugReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BugReportFindFirstArgs>(args?: SelectSubset<T, BugReportFindFirstArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BugReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugReportFindFirstOrThrowArgs} args - Arguments to find a BugReport
     * @example
     * // Get one BugReport
     * const bugReport = await prisma.bugReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BugReportFindFirstOrThrowArgs>(args?: SelectSubset<T, BugReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BugReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BugReports
     * const bugReports = await prisma.bugReport.findMany()
     * 
     * // Get first 10 BugReports
     * const bugReports = await prisma.bugReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bugReportWithIdOnly = await prisma.bugReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BugReportFindManyArgs>(args?: SelectSubset<T, BugReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BugReport.
     * @param {BugReportCreateArgs} args - Arguments to create a BugReport.
     * @example
     * // Create one BugReport
     * const BugReport = await prisma.bugReport.create({
     *   data: {
     *     // ... data to create a BugReport
     *   }
     * })
     * 
     */
    create<T extends BugReportCreateArgs>(args: SelectSubset<T, BugReportCreateArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BugReports.
     * @param {BugReportCreateManyArgs} args - Arguments to create many BugReports.
     * @example
     * // Create many BugReports
     * const bugReport = await prisma.bugReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BugReportCreateManyArgs>(args?: SelectSubset<T, BugReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BugReport.
     * @param {BugReportDeleteArgs} args - Arguments to delete one BugReport.
     * @example
     * // Delete one BugReport
     * const BugReport = await prisma.bugReport.delete({
     *   where: {
     *     // ... filter to delete one BugReport
     *   }
     * })
     * 
     */
    delete<T extends BugReportDeleteArgs>(args: SelectSubset<T, BugReportDeleteArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BugReport.
     * @param {BugReportUpdateArgs} args - Arguments to update one BugReport.
     * @example
     * // Update one BugReport
     * const bugReport = await prisma.bugReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BugReportUpdateArgs>(args: SelectSubset<T, BugReportUpdateArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BugReports.
     * @param {BugReportDeleteManyArgs} args - Arguments to filter BugReports to delete.
     * @example
     * // Delete a few BugReports
     * const { count } = await prisma.bugReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BugReportDeleteManyArgs>(args?: SelectSubset<T, BugReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BugReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BugReports
     * const bugReport = await prisma.bugReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BugReportUpdateManyArgs>(args: SelectSubset<T, BugReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BugReport.
     * @param {BugReportUpsertArgs} args - Arguments to update or create a BugReport.
     * @example
     * // Update or create a BugReport
     * const bugReport = await prisma.bugReport.upsert({
     *   create: {
     *     // ... data to create a BugReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BugReport we want to update
     *   }
     * })
     */
    upsert<T extends BugReportUpsertArgs>(args: SelectSubset<T, BugReportUpsertArgs<ExtArgs>>): Prisma__BugReportClient<$Result.GetResult<Prisma.$BugReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BugReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugReportCountArgs} args - Arguments to filter BugReports to count.
     * @example
     * // Count the number of BugReports
     * const count = await prisma.bugReport.count({
     *   where: {
     *     // ... the filter for the BugReports we want to count
     *   }
     * })
    **/
    count<T extends BugReportCountArgs>(
      args?: Subset<T, BugReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BugReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BugReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BugReportAggregateArgs>(args: Subset<T, BugReportAggregateArgs>): Prisma.PrismaPromise<GetBugReportAggregateType<T>>

    /**
     * Group by BugReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BugReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BugReportGroupByArgs['orderBy'] }
        : { orderBy?: BugReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BugReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBugReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BugReport model
   */
  readonly fields: BugReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BugReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BugReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BugReport model
   */
  interface BugReportFieldRefs {
    readonly id: FieldRef<"BugReport", 'Int'>
    readonly cabinetid: FieldRef<"BugReport", 'Int'>
    readonly userId: FieldRef<"BugReport", 'Int'>
    readonly message: FieldRef<"BugReport", 'String'>
    readonly page: FieldRef<"BugReport", 'String'>
    readonly createdAt: FieldRef<"BugReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BugReport findUnique
   */
  export type BugReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * Filter, which BugReport to fetch.
     */
    where: BugReportWhereUniqueInput
  }

  /**
   * BugReport findUniqueOrThrow
   */
  export type BugReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * Filter, which BugReport to fetch.
     */
    where: BugReportWhereUniqueInput
  }

  /**
   * BugReport findFirst
   */
  export type BugReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * Filter, which BugReport to fetch.
     */
    where?: BugReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugReports to fetch.
     */
    orderBy?: BugReportOrderByWithRelationInput | BugReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BugReports.
     */
    cursor?: BugReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BugReports.
     */
    distinct?: BugReportScalarFieldEnum | BugReportScalarFieldEnum[]
  }

  /**
   * BugReport findFirstOrThrow
   */
  export type BugReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * Filter, which BugReport to fetch.
     */
    where?: BugReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugReports to fetch.
     */
    orderBy?: BugReportOrderByWithRelationInput | BugReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BugReports.
     */
    cursor?: BugReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BugReports.
     */
    distinct?: BugReportScalarFieldEnum | BugReportScalarFieldEnum[]
  }

  /**
   * BugReport findMany
   */
  export type BugReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * Filter, which BugReports to fetch.
     */
    where?: BugReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugReports to fetch.
     */
    orderBy?: BugReportOrderByWithRelationInput | BugReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BugReports.
     */
    cursor?: BugReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BugReports.
     */
    distinct?: BugReportScalarFieldEnum | BugReportScalarFieldEnum[]
  }

  /**
   * BugReport create
   */
  export type BugReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * The data needed to create a BugReport.
     */
    data: XOR<BugReportCreateInput, BugReportUncheckedCreateInput>
  }

  /**
   * BugReport createMany
   */
  export type BugReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BugReports.
     */
    data: BugReportCreateManyInput | BugReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BugReport update
   */
  export type BugReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * The data needed to update a BugReport.
     */
    data: XOR<BugReportUpdateInput, BugReportUncheckedUpdateInput>
    /**
     * Choose, which BugReport to update.
     */
    where: BugReportWhereUniqueInput
  }

  /**
   * BugReport updateMany
   */
  export type BugReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BugReports.
     */
    data: XOR<BugReportUpdateManyMutationInput, BugReportUncheckedUpdateManyInput>
    /**
     * Filter which BugReports to update
     */
    where?: BugReportWhereInput
    /**
     * Limit how many BugReports to update.
     */
    limit?: number
  }

  /**
   * BugReport upsert
   */
  export type BugReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * The filter to search for the BugReport to update in case it exists.
     */
    where: BugReportWhereUniqueInput
    /**
     * In case the BugReport found by the `where` argument doesn't exist, create a new BugReport with this data.
     */
    create: XOR<BugReportCreateInput, BugReportUncheckedCreateInput>
    /**
     * In case the BugReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BugReportUpdateInput, BugReportUncheckedUpdateInput>
  }

  /**
   * BugReport delete
   */
  export type BugReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
    /**
     * Filter which BugReport to delete.
     */
    where: BugReportWhereUniqueInput
  }

  /**
   * BugReport deleteMany
   */
  export type BugReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BugReports to delete
     */
    where?: BugReportWhereInput
    /**
     * Limit how many BugReports to delete.
     */
    limit?: number
  }

  /**
   * BugReport without action
   */
  export type BugReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugReport
     */
    select?: BugReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BugReport
     */
    omit?: BugReportOmit<ExtArgs> | null
  }


  /**
   * Model CabinetTemplate
   */

  export type AggregateCabinetTemplate = {
    _count: CabinetTemplateCountAggregateOutputType | null
    _avg: CabinetTemplateAvgAggregateOutputType | null
    _sum: CabinetTemplateSumAggregateOutputType | null
    _min: CabinetTemplateMinAggregateOutputType | null
    _max: CabinetTemplateMaxAggregateOutputType | null
  }

  export type CabinetTemplateAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
  }

  export type CabinetTemplateSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
  }

  export type CabinetTemplateMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    name: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabinetTemplateMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    name: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabinetTemplateCountAggregateOutputType = {
    id: number
    cabinetid: number
    name: number
    body: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CabinetTemplateAvgAggregateInputType = {
    id?: true
    cabinetid?: true
  }

  export type CabinetTemplateSumAggregateInputType = {
    id?: true
    cabinetid?: true
  }

  export type CabinetTemplateMinAggregateInputType = {
    id?: true
    cabinetid?: true
    name?: true
    body?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabinetTemplateMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    name?: true
    body?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabinetTemplateCountAggregateInputType = {
    id?: true
    cabinetid?: true
    name?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CabinetTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CabinetTemplate to aggregate.
     */
    where?: CabinetTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetTemplates to fetch.
     */
    orderBy?: CabinetTemplateOrderByWithRelationInput | CabinetTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CabinetTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CabinetTemplates
    **/
    _count?: true | CabinetTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CabinetTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CabinetTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CabinetTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CabinetTemplateMaxAggregateInputType
  }

  export type GetCabinetTemplateAggregateType<T extends CabinetTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateCabinetTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCabinetTemplate[P]>
      : GetScalarType<T[P], AggregateCabinetTemplate[P]>
  }




  export type CabinetTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetTemplateWhereInput
    orderBy?: CabinetTemplateOrderByWithAggregationInput | CabinetTemplateOrderByWithAggregationInput[]
    by: CabinetTemplateScalarFieldEnum[] | CabinetTemplateScalarFieldEnum
    having?: CabinetTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CabinetTemplateCountAggregateInputType | true
    _avg?: CabinetTemplateAvgAggregateInputType
    _sum?: CabinetTemplateSumAggregateInputType
    _min?: CabinetTemplateMinAggregateInputType
    _max?: CabinetTemplateMaxAggregateInputType
  }

  export type CabinetTemplateGroupByOutputType = {
    id: number
    cabinetid: number
    name: string
    body: string
    createdAt: Date
    updatedAt: Date
    _count: CabinetTemplateCountAggregateOutputType | null
    _avg: CabinetTemplateAvgAggregateOutputType | null
    _sum: CabinetTemplateSumAggregateOutputType | null
    _min: CabinetTemplateMinAggregateOutputType | null
    _max: CabinetTemplateMaxAggregateOutputType | null
  }

  type GetCabinetTemplateGroupByPayload<T extends CabinetTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CabinetTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CabinetTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CabinetTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], CabinetTemplateGroupByOutputType[P]>
        }
      >
    >


  export type CabinetTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    name?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cabinetTemplate"]>



  export type CabinetTemplateSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    name?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CabinetTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "name" | "body" | "createdAt" | "updatedAt", ExtArgs["result"]["cabinetTemplate"]>

  export type $CabinetTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CabinetTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      name: string
      body: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cabinetTemplate"]>
    composites: {}
  }

  type CabinetTemplateGetPayload<S extends boolean | null | undefined | CabinetTemplateDefaultArgs> = $Result.GetResult<Prisma.$CabinetTemplatePayload, S>

  type CabinetTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CabinetTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CabinetTemplateCountAggregateInputType | true
    }

  export interface CabinetTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CabinetTemplate'], meta: { name: 'CabinetTemplate' } }
    /**
     * Find zero or one CabinetTemplate that matches the filter.
     * @param {CabinetTemplateFindUniqueArgs} args - Arguments to find a CabinetTemplate
     * @example
     * // Get one CabinetTemplate
     * const cabinetTemplate = await prisma.cabinetTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CabinetTemplateFindUniqueArgs>(args: SelectSubset<T, CabinetTemplateFindUniqueArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CabinetTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CabinetTemplateFindUniqueOrThrowArgs} args - Arguments to find a CabinetTemplate
     * @example
     * // Get one CabinetTemplate
     * const cabinetTemplate = await prisma.cabinetTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CabinetTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, CabinetTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CabinetTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetTemplateFindFirstArgs} args - Arguments to find a CabinetTemplate
     * @example
     * // Get one CabinetTemplate
     * const cabinetTemplate = await prisma.cabinetTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CabinetTemplateFindFirstArgs>(args?: SelectSubset<T, CabinetTemplateFindFirstArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CabinetTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetTemplateFindFirstOrThrowArgs} args - Arguments to find a CabinetTemplate
     * @example
     * // Get one CabinetTemplate
     * const cabinetTemplate = await prisma.cabinetTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CabinetTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, CabinetTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CabinetTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CabinetTemplates
     * const cabinetTemplates = await prisma.cabinetTemplate.findMany()
     * 
     * // Get first 10 CabinetTemplates
     * const cabinetTemplates = await prisma.cabinetTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cabinetTemplateWithIdOnly = await prisma.cabinetTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CabinetTemplateFindManyArgs>(args?: SelectSubset<T, CabinetTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CabinetTemplate.
     * @param {CabinetTemplateCreateArgs} args - Arguments to create a CabinetTemplate.
     * @example
     * // Create one CabinetTemplate
     * const CabinetTemplate = await prisma.cabinetTemplate.create({
     *   data: {
     *     // ... data to create a CabinetTemplate
     *   }
     * })
     * 
     */
    create<T extends CabinetTemplateCreateArgs>(args: SelectSubset<T, CabinetTemplateCreateArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CabinetTemplates.
     * @param {CabinetTemplateCreateManyArgs} args - Arguments to create many CabinetTemplates.
     * @example
     * // Create many CabinetTemplates
     * const cabinetTemplate = await prisma.cabinetTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CabinetTemplateCreateManyArgs>(args?: SelectSubset<T, CabinetTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CabinetTemplate.
     * @param {CabinetTemplateDeleteArgs} args - Arguments to delete one CabinetTemplate.
     * @example
     * // Delete one CabinetTemplate
     * const CabinetTemplate = await prisma.cabinetTemplate.delete({
     *   where: {
     *     // ... filter to delete one CabinetTemplate
     *   }
     * })
     * 
     */
    delete<T extends CabinetTemplateDeleteArgs>(args: SelectSubset<T, CabinetTemplateDeleteArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CabinetTemplate.
     * @param {CabinetTemplateUpdateArgs} args - Arguments to update one CabinetTemplate.
     * @example
     * // Update one CabinetTemplate
     * const cabinetTemplate = await prisma.cabinetTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CabinetTemplateUpdateArgs>(args: SelectSubset<T, CabinetTemplateUpdateArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CabinetTemplates.
     * @param {CabinetTemplateDeleteManyArgs} args - Arguments to filter CabinetTemplates to delete.
     * @example
     * // Delete a few CabinetTemplates
     * const { count } = await prisma.cabinetTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CabinetTemplateDeleteManyArgs>(args?: SelectSubset<T, CabinetTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CabinetTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CabinetTemplates
     * const cabinetTemplate = await prisma.cabinetTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CabinetTemplateUpdateManyArgs>(args: SelectSubset<T, CabinetTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CabinetTemplate.
     * @param {CabinetTemplateUpsertArgs} args - Arguments to update or create a CabinetTemplate.
     * @example
     * // Update or create a CabinetTemplate
     * const cabinetTemplate = await prisma.cabinetTemplate.upsert({
     *   create: {
     *     // ... data to create a CabinetTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CabinetTemplate we want to update
     *   }
     * })
     */
    upsert<T extends CabinetTemplateUpsertArgs>(args: SelectSubset<T, CabinetTemplateUpsertArgs<ExtArgs>>): Prisma__CabinetTemplateClient<$Result.GetResult<Prisma.$CabinetTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CabinetTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetTemplateCountArgs} args - Arguments to filter CabinetTemplates to count.
     * @example
     * // Count the number of CabinetTemplates
     * const count = await prisma.cabinetTemplate.count({
     *   where: {
     *     // ... the filter for the CabinetTemplates we want to count
     *   }
     * })
    **/
    count<T extends CabinetTemplateCountArgs>(
      args?: Subset<T, CabinetTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CabinetTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CabinetTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CabinetTemplateAggregateArgs>(args: Subset<T, CabinetTemplateAggregateArgs>): Prisma.PrismaPromise<GetCabinetTemplateAggregateType<T>>

    /**
     * Group by CabinetTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CabinetTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CabinetTemplateGroupByArgs['orderBy'] }
        : { orderBy?: CabinetTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CabinetTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCabinetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CabinetTemplate model
   */
  readonly fields: CabinetTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CabinetTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CabinetTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CabinetTemplate model
   */
  interface CabinetTemplateFieldRefs {
    readonly id: FieldRef<"CabinetTemplate", 'Int'>
    readonly cabinetid: FieldRef<"CabinetTemplate", 'Int'>
    readonly name: FieldRef<"CabinetTemplate", 'String'>
    readonly body: FieldRef<"CabinetTemplate", 'String'>
    readonly createdAt: FieldRef<"CabinetTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"CabinetTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CabinetTemplate findUnique
   */
  export type CabinetTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * Filter, which CabinetTemplate to fetch.
     */
    where: CabinetTemplateWhereUniqueInput
  }

  /**
   * CabinetTemplate findUniqueOrThrow
   */
  export type CabinetTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * Filter, which CabinetTemplate to fetch.
     */
    where: CabinetTemplateWhereUniqueInput
  }

  /**
   * CabinetTemplate findFirst
   */
  export type CabinetTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * Filter, which CabinetTemplate to fetch.
     */
    where?: CabinetTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetTemplates to fetch.
     */
    orderBy?: CabinetTemplateOrderByWithRelationInput | CabinetTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CabinetTemplates.
     */
    cursor?: CabinetTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CabinetTemplates.
     */
    distinct?: CabinetTemplateScalarFieldEnum | CabinetTemplateScalarFieldEnum[]
  }

  /**
   * CabinetTemplate findFirstOrThrow
   */
  export type CabinetTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * Filter, which CabinetTemplate to fetch.
     */
    where?: CabinetTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetTemplates to fetch.
     */
    orderBy?: CabinetTemplateOrderByWithRelationInput | CabinetTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CabinetTemplates.
     */
    cursor?: CabinetTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CabinetTemplates.
     */
    distinct?: CabinetTemplateScalarFieldEnum | CabinetTemplateScalarFieldEnum[]
  }

  /**
   * CabinetTemplate findMany
   */
  export type CabinetTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * Filter, which CabinetTemplates to fetch.
     */
    where?: CabinetTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetTemplates to fetch.
     */
    orderBy?: CabinetTemplateOrderByWithRelationInput | CabinetTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CabinetTemplates.
     */
    cursor?: CabinetTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CabinetTemplates.
     */
    distinct?: CabinetTemplateScalarFieldEnum | CabinetTemplateScalarFieldEnum[]
  }

  /**
   * CabinetTemplate create
   */
  export type CabinetTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a CabinetTemplate.
     */
    data: XOR<CabinetTemplateCreateInput, CabinetTemplateUncheckedCreateInput>
  }

  /**
   * CabinetTemplate createMany
   */
  export type CabinetTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CabinetTemplates.
     */
    data: CabinetTemplateCreateManyInput | CabinetTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CabinetTemplate update
   */
  export type CabinetTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a CabinetTemplate.
     */
    data: XOR<CabinetTemplateUpdateInput, CabinetTemplateUncheckedUpdateInput>
    /**
     * Choose, which CabinetTemplate to update.
     */
    where: CabinetTemplateWhereUniqueInput
  }

  /**
   * CabinetTemplate updateMany
   */
  export type CabinetTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CabinetTemplates.
     */
    data: XOR<CabinetTemplateUpdateManyMutationInput, CabinetTemplateUncheckedUpdateManyInput>
    /**
     * Filter which CabinetTemplates to update
     */
    where?: CabinetTemplateWhereInput
    /**
     * Limit how many CabinetTemplates to update.
     */
    limit?: number
  }

  /**
   * CabinetTemplate upsert
   */
  export type CabinetTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the CabinetTemplate to update in case it exists.
     */
    where: CabinetTemplateWhereUniqueInput
    /**
     * In case the CabinetTemplate found by the `where` argument doesn't exist, create a new CabinetTemplate with this data.
     */
    create: XOR<CabinetTemplateCreateInput, CabinetTemplateUncheckedCreateInput>
    /**
     * In case the CabinetTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CabinetTemplateUpdateInput, CabinetTemplateUncheckedUpdateInput>
  }

  /**
   * CabinetTemplate delete
   */
  export type CabinetTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
    /**
     * Filter which CabinetTemplate to delete.
     */
    where: CabinetTemplateWhereUniqueInput
  }

  /**
   * CabinetTemplate deleteMany
   */
  export type CabinetTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CabinetTemplates to delete
     */
    where?: CabinetTemplateWhereInput
    /**
     * Limit how many CabinetTemplates to delete.
     */
    limit?: number
  }

  /**
   * CabinetTemplate without action
   */
  export type CabinetTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetTemplate
     */
    select?: CabinetTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetTemplate
     */
    omit?: CabinetTemplateOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    amount: number | null
    returnedAmount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    amount: number | null
    returnedAmount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    amount: number | null
    type: $Enums.PaymentType | null
    method: $Enums.PaymentMethod | null
    madeBy: string | null
    receiptUrl: string | null
    status: $Enums.PaymentStatus | null
    returnedAmount: number | null
    returnedAt: Date | null
    externalId: string | null
    link: string | null
    linkExpiresAt: Date | null
    createdAt: Date | null
    paidAt: Date | null
    tochkaStatus: string | null
    tochkaPaymentType: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    cabinetid: number | null
    bookingId: number | null
    amount: number | null
    type: $Enums.PaymentType | null
    method: $Enums.PaymentMethod | null
    madeBy: string | null
    receiptUrl: string | null
    status: $Enums.PaymentStatus | null
    returnedAmount: number | null
    returnedAt: Date | null
    externalId: string | null
    link: string | null
    linkExpiresAt: Date | null
    createdAt: Date | null
    paidAt: Date | null
    tochkaStatus: string | null
    tochkaPaymentType: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    cabinetid: number
    bookingId: number
    amount: number
    type: number
    method: number
    madeBy: number
    receiptUrl: number
    status: number
    returnedAmount: number
    returnedAt: number
    externalId: number
    link: number
    linkExpiresAt: number
    createdAt: number
    paidAt: number
    tochkaStatus: number
    tochkaPaymentType: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    amount?: true
    returnedAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    amount?: true
    returnedAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    amount?: true
    type?: true
    method?: true
    madeBy?: true
    receiptUrl?: true
    status?: true
    returnedAmount?: true
    returnedAt?: true
    externalId?: true
    link?: true
    linkExpiresAt?: true
    createdAt?: true
    paidAt?: true
    tochkaStatus?: true
    tochkaPaymentType?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    amount?: true
    type?: true
    method?: true
    madeBy?: true
    receiptUrl?: true
    status?: true
    returnedAmount?: true
    returnedAt?: true
    externalId?: true
    link?: true
    linkExpiresAt?: true
    createdAt?: true
    paidAt?: true
    tochkaStatus?: true
    tochkaPaymentType?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    cabinetid?: true
    bookingId?: true
    amount?: true
    type?: true
    method?: true
    madeBy?: true
    receiptUrl?: true
    status?: true
    returnedAmount?: true
    returnedAt?: true
    externalId?: true
    link?: true
    linkExpiresAt?: true
    createdAt?: true
    paidAt?: true
    tochkaStatus?: true
    tochkaPaymentType?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    cabinetid: number
    bookingId: number
    amount: number
    type: $Enums.PaymentType
    method: $Enums.PaymentMethod
    madeBy: string | null
    receiptUrl: string | null
    status: $Enums.PaymentStatus
    returnedAmount: number | null
    returnedAt: Date | null
    externalId: string | null
    link: string | null
    linkExpiresAt: Date | null
    createdAt: Date
    paidAt: Date | null
    tochkaStatus: string | null
    tochkaPaymentType: string | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetid?: boolean
    bookingId?: boolean
    amount?: boolean
    type?: boolean
    method?: boolean
    madeBy?: boolean
    receiptUrl?: boolean
    status?: boolean
    returnedAmount?: boolean
    returnedAt?: boolean
    externalId?: boolean
    link?: boolean
    linkExpiresAt?: boolean
    createdAt?: boolean
    paidAt?: boolean
    tochkaStatus?: boolean
    tochkaPaymentType?: boolean
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    cabinetid?: boolean
    bookingId?: boolean
    amount?: boolean
    type?: boolean
    method?: boolean
    madeBy?: boolean
    receiptUrl?: boolean
    status?: boolean
    returnedAmount?: boolean
    returnedAt?: boolean
    externalId?: boolean
    link?: boolean
    linkExpiresAt?: boolean
    createdAt?: boolean
    paidAt?: boolean
    tochkaStatus?: boolean
    tochkaPaymentType?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetid" | "bookingId" | "amount" | "type" | "method" | "madeBy" | "receiptUrl" | "status" | "returnedAmount" | "returnedAt" | "externalId" | "link" | "linkExpiresAt" | "createdAt" | "paidAt" | "tochkaStatus" | "tochkaPaymentType", ExtArgs["result"]["payment"]>

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetid: number
      bookingId: number
      amount: number
      type: $Enums.PaymentType
      method: $Enums.PaymentMethod
      madeBy: string | null
      receiptUrl: string | null
      status: $Enums.PaymentStatus
      returnedAmount: number | null
      returnedAt: Date | null
      externalId: string | null
      link: string | null
      linkExpiresAt: Date | null
      createdAt: Date
      paidAt: Date | null
      tochkaStatus: string | null
      tochkaPaymentType: string | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly cabinetid: FieldRef<"Payment", 'Int'>
    readonly bookingId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly type: FieldRef<"Payment", 'PaymentType'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly madeBy: FieldRef<"Payment", 'String'>
    readonly receiptUrl: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly returnedAmount: FieldRef<"Payment", 'Float'>
    readonly returnedAt: FieldRef<"Payment", 'DateTime'>
    readonly externalId: FieldRef<"Payment", 'String'>
    readonly link: FieldRef<"Payment", 'String'>
    readonly linkExpiresAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly tochkaStatus: FieldRef<"Payment", 'String'>
    readonly tochkaPaymentType: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    login: 'login',
    password: 'password',
    tempass: 'tempass',
    name: 'name',
    role: 'role',
    cabinet: 'cabinet',
    status: 'status',
    createdAt: 'createdAt',
    tokenVersion: 'tokenVersion'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CabinetScalarFieldEnum: {
    id: 'id',
    Timezone: 'Timezone',
    realtycalendarid: 'realtycalendarid',
    okidokiapi: 'okidokiapi',
    okidokiwebhookkey: 'okidokiwebhookkey',
    tochkaPhone: 'tochkaPhone',
    tochkaApiKey: 'tochkaApiKey',
    tochkaMerchantId: 'tochkaMerchantId',
    tochkaPaymentMode: 'tochkaPaymentMode',
    tochkaVatType: 'tochkaVatType',
    tochkaPurpose: 'tochkaPurpose',
    tochkaName: 'tochkaName',
    tochkaPurposeDeposit: 'tochkaPurposeDeposit',
    tochkaNameDeposit: 'tochkaNameDeposit',
    tochkaCustomerCode: 'tochkaCustomerCode',
    tochkaOrgName: 'tochkaOrgName',
    tochkaTaxCode: 'tochkaTaxCode',
    tochkaAppClientId: 'tochkaAppClientId',
    tochkaWebhookKey: 'tochkaWebhookKey',
    cleaningTemplate: 'cleaningTemplate',
    approxTimeMarker: 'approxTimeMarker',
    emptyStayMarker: 'emptyStayMarker',
    cleaningHeader: 'cleaningHeader',
    cleaningFooter: 'cleaningFooter',
    balance: 'balance'
  };

  export type CabinetScalarFieldEnum = (typeof CabinetScalarFieldEnum)[keyof typeof CabinetScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    status: 'status',
    message: 'message',
    date: 'date',
    readed: 'readed'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    manageobjects: 'manageobjects',
    managemaids: 'managemaids',
    manageintegration: 'manageintegration',
    managetemplates: 'managetemplates',
    manageautosent: 'manageautosent',
    seemaidsrate: 'seemaidsrate',
    managebooks: 'managebooks',
    manualpaymentedit: 'manualpaymentedit',
    manualdepositedit: 'manualdepositedit',
    bankpaymentedit: 'bankpaymentedit',
    bankdepositedit: 'bankdepositedit',
    financesinformationpayment: 'financesinformationpayment',
    financesinformationdeposit: 'financesinformationdeposit',
    depositamountedit: 'depositamountedit'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const MaidsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rating: 'rating',
    cabinetid: 'cabinetid'
  };

  export type MaidsScalarFieldEnum = (typeof MaidsScalarFieldEnum)[keyof typeof MaidsScalarFieldEnum]


  export const ObjectsScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    realtyid: 'realtyid',
    name: 'name',
    instruction: 'instruction',
    checkindef: 'checkindef',
    checkoutdef: 'checkoutdef',
    sspayanddeposit: 'sspayanddeposit',
    ssinstruction: 'ssinstruction',
    sscontract: 'sscontract',
    ssrateclean: 'ssrateclean',
    location: 'location',
    maplink: 'maplink',
    deposit: 'deposit',
    odstringid: 'odstringid',
    odvalueid: 'odvalueid',
    odnameid: 'odnameid',
    oddateinid: 'oddateinid',
    oddateoutid: 'oddateoutid',
    oddepositid: 'oddepositid',
    odpayperdayid: 'odpayperdayid',
    odpayedid: 'odpayedid',
    okidokiactive: 'okidokiactive',
    depositchanel: 'depositchanel',
    paymentchanel: 'paymentchanel',
    active: 'active'
  };

  export type ObjectsScalarFieldEnum = (typeof ObjectsScalarFieldEnum)[keyof typeof ObjectsScalarFieldEnum]


  export const ObjectPhotoScalarFieldEnum: {
    id: 'id',
    objectId: 'objectId',
    url: 'url',
    sortOrder: 'sortOrder'
  };

  export type ObjectPhotoScalarFieldEnum = (typeof ObjectPhotoScalarFieldEnum)[keyof typeof ObjectPhotoScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    status: 'status',
    id: 'id',
    begin_date: 'begin_date',
    end_date: 'end_date',
    realty_id: 'realty_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    amount: 'amount',
    notes: 'notes',
    source: 'source',
    prepayment: 'prepayment',
    balance_to_be_paid_1: 'balance_to_be_paid_1',
    price_per_day: 'price_per_day',
    deposit: 'deposit',
    returned: 'returned',
    manual_deposit: 'manual_deposit',
    client_id: 'client_id',
    fio: 'fio',
    email: 'email',
    phone: 'phone',
    additional_phone: 'additional_phone',
    cabinet: 'cabinet',
    tochka_id_pay: 'tochka_id_pay',
    tochka_id_deposit: 'tochka_id_deposit',
    begin_time: 'begin_time',
    end_time: 'end_time',
    contract_status: 'contract_status',
    contract_id: 'contract_id',
    contract_link: 'contract_link',
    maid_id: 'maid_id',
    review: 'review',
    channel: 'channel',
    deposit_payment_link: 'deposit_payment_link',
    link: 'link'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const CleaningScheduleScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    objectid: 'objectid',
    date: 'date',
    booking_id: 'booking_id',
    maid_id: 'maid_id',
    checkin_time: 'checkin_time',
    checkout_time: 'checkout_time',
    comment: 'comment',
    included: 'included',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CleaningScheduleScalarFieldEnum = (typeof CleaningScheduleScalarFieldEnum)[keyof typeof CleaningScheduleScalarFieldEnum]


  export const UnprocessedBookingScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    bookingId: 'bookingId',
    action: 'action',
    failReason: 'failReason',
    failMessage: 'failMessage',
    realtyId: 'realtyId',
    beginDate: 'beginDate',
    endDate: 'endDate',
    bookingStatus: 'bookingStatus',
    source: 'source',
    amount: 'amount',
    notes: 'notes',
    prepayment: 'prepayment',
    balanceToBePaid: 'balanceToBePaid',
    pricePerDay: 'pricePerDay',
    deposit: 'deposit',
    clientId: 'clientId',
    fio: 'fio',
    email: 'email',
    phone: 'phone',
    additionalPhone: 'additionalPhone',
    resolved: 'resolved',
    createdAt: 'createdAt'
  };

  export type UnprocessedBookingScalarFieldEnum = (typeof UnprocessedBookingScalarFieldEnum)[keyof typeof UnprocessedBookingScalarFieldEnum]


  export const BugReportScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    userId: 'userId',
    message: 'message',
    page: 'page',
    createdAt: 'createdAt'
  };

  export type BugReportScalarFieldEnum = (typeof BugReportScalarFieldEnum)[keyof typeof BugReportScalarFieldEnum]


  export const CabinetTemplateScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    name: 'name',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CabinetTemplateScalarFieldEnum = (typeof CabinetTemplateScalarFieldEnum)[keyof typeof CabinetTemplateScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    cabinetid: 'cabinetid',
    bookingId: 'bookingId',
    amount: 'amount',
    type: 'type',
    method: 'method',
    madeBy: 'madeBy',
    receiptUrl: 'receiptUrl',
    status: 'status',
    returnedAmount: 'returnedAmount',
    returnedAt: 'returnedAt',
    externalId: 'externalId',
    link: 'link',
    linkExpiresAt: 'linkExpiresAt',
    createdAt: 'createdAt',
    paidAt: 'paidAt',
    tochkaStatus: 'tochkaStatus',
    tochkaPaymentType: 'tochkaPaymentType'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    login: 'login',
    password: 'password',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const CabinetOrderByRelevanceFieldEnum: {
    realtycalendarid: 'realtycalendarid',
    okidokiapi: 'okidokiapi',
    okidokiwebhookkey: 'okidokiwebhookkey',
    tochkaPhone: 'tochkaPhone',
    tochkaApiKey: 'tochkaApiKey',
    tochkaMerchantId: 'tochkaMerchantId',
    tochkaPurpose: 'tochkaPurpose',
    tochkaName: 'tochkaName',
    tochkaPurposeDeposit: 'tochkaPurposeDeposit',
    tochkaNameDeposit: 'tochkaNameDeposit',
    tochkaCustomerCode: 'tochkaCustomerCode',
    tochkaOrgName: 'tochkaOrgName',
    tochkaTaxCode: 'tochkaTaxCode',
    tochkaAppClientId: 'tochkaAppClientId',
    tochkaWebhookKey: 'tochkaWebhookKey',
    cleaningTemplate: 'cleaningTemplate',
    approxTimeMarker: 'approxTimeMarker',
    emptyStayMarker: 'emptyStayMarker',
    cleaningHeader: 'cleaningHeader',
    cleaningFooter: 'cleaningFooter'
  };

  export type CabinetOrderByRelevanceFieldEnum = (typeof CabinetOrderByRelevanceFieldEnum)[keyof typeof CabinetOrderByRelevanceFieldEnum]


  export const LogsOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type LogsOrderByRelevanceFieldEnum = (typeof LogsOrderByRelevanceFieldEnum)[keyof typeof LogsOrderByRelevanceFieldEnum]


  export const MaidsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type MaidsOrderByRelevanceFieldEnum = (typeof MaidsOrderByRelevanceFieldEnum)[keyof typeof MaidsOrderByRelevanceFieldEnum]


  export const ObjectsOrderByRelevanceFieldEnum: {
    name: 'name',
    instruction: 'instruction',
    checkindef: 'checkindef',
    checkoutdef: 'checkoutdef',
    location: 'location',
    maplink: 'maplink',
    deposit: 'deposit',
    odstringid: 'odstringid',
    odvalueid: 'odvalueid',
    odnameid: 'odnameid',
    oddateinid: 'oddateinid',
    oddateoutid: 'oddateoutid',
    oddepositid: 'oddepositid',
    odpayperdayid: 'odpayperdayid',
    odpayedid: 'odpayedid'
  };

  export type ObjectsOrderByRelevanceFieldEnum = (typeof ObjectsOrderByRelevanceFieldEnum)[keyof typeof ObjectsOrderByRelevanceFieldEnum]


  export const ObjectPhotoOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type ObjectPhotoOrderByRelevanceFieldEnum = (typeof ObjectPhotoOrderByRelevanceFieldEnum)[keyof typeof ObjectPhotoOrderByRelevanceFieldEnum]


  export const BookingsOrderByRelevanceFieldEnum: {
    begin_date: 'begin_date',
    end_date: 'end_date',
    notes: 'notes',
    source: 'source',
    fio: 'fio',
    email: 'email',
    phone: 'phone',
    additional_phone: 'additional_phone',
    begin_time: 'begin_time',
    end_time: 'end_time',
    contract_status: 'contract_status',
    contract_id: 'contract_id',
    contract_link: 'contract_link',
    channel: 'channel',
    deposit_payment_link: 'deposit_payment_link',
    link: 'link'
  };

  export type BookingsOrderByRelevanceFieldEnum = (typeof BookingsOrderByRelevanceFieldEnum)[keyof typeof BookingsOrderByRelevanceFieldEnum]


  export const CleaningScheduleOrderByRelevanceFieldEnum: {
    date: 'date',
    checkin_time: 'checkin_time',
    checkout_time: 'checkout_time',
    comment: 'comment'
  };

  export type CleaningScheduleOrderByRelevanceFieldEnum = (typeof CleaningScheduleOrderByRelevanceFieldEnum)[keyof typeof CleaningScheduleOrderByRelevanceFieldEnum]


  export const UnprocessedBookingOrderByRelevanceFieldEnum: {
    action: 'action',
    failReason: 'failReason',
    failMessage: 'failMessage',
    beginDate: 'beginDate',
    endDate: 'endDate',
    bookingStatus: 'bookingStatus',
    source: 'source',
    notes: 'notes',
    fio: 'fio',
    email: 'email',
    phone: 'phone',
    additionalPhone: 'additionalPhone'
  };

  export type UnprocessedBookingOrderByRelevanceFieldEnum = (typeof UnprocessedBookingOrderByRelevanceFieldEnum)[keyof typeof UnprocessedBookingOrderByRelevanceFieldEnum]


  export const BugReportOrderByRelevanceFieldEnum: {
    message: 'message',
    page: 'page'
  };

  export type BugReportOrderByRelevanceFieldEnum = (typeof BugReportOrderByRelevanceFieldEnum)[keyof typeof BugReportOrderByRelevanceFieldEnum]


  export const CabinetTemplateOrderByRelevanceFieldEnum: {
    name: 'name',
    body: 'body'
  };

  export type CabinetTemplateOrderByRelevanceFieldEnum = (typeof CabinetTemplateOrderByRelevanceFieldEnum)[keyof typeof CabinetTemplateOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    madeBy: 'madeBy',
    receiptUrl: 'receiptUrl',
    externalId: 'externalId',
    link: 'link',
    tochkaStatus: 'tochkaStatus',
    tochkaPaymentType: 'tochkaPaymentType'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'TemPass'
   */
  export type EnumTemPassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemPass'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Timezone'
   */
  export type EnumTimezoneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Timezone'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'LogStatus'
   */
  export type EnumLogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogStatus'>
    


  /**
   * Reference to a field of type 'Thumbler'
   */
  export type EnumThumblerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Thumbler'>
    


  /**
   * Reference to a field of type 'ShowSettings'
   */
  export type EnumShowSettingsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShowSettings'>
    


  /**
   * Reference to a field of type 'DepositChanel'
   */
  export type EnumDepositChanelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositChanel'>
    


  /**
   * Reference to a field of type 'PaymentChanel'
   */
  export type EnumPaymentChanelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentChanel'>
    


  /**
   * Reference to a field of type 'BookStatus'
   */
  export type EnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    login?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    tempass?: EnumTemPassFilter<"User"> | $Enums.TemPass
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    cabinet?: IntFilter<"User"> | number
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    tokenVersion?: IntFilter<"User"> | number
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    tempass?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    cabinet?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tokenVersion?: SortOrder
    staff?: StaffOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    tempass?: EnumTemPassFilter<"User"> | $Enums.TemPass
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    cabinet?: IntFilter<"User"> | number
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    tokenVersion?: IntFilter<"User"> | number
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }, "id" | "login">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    tempass?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    cabinet?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tokenVersion?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    login?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    tempass?: EnumTemPassWithAggregatesFilter<"User"> | $Enums.TemPass
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    cabinet?: IntWithAggregatesFilter<"User"> | number
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    tokenVersion?: IntWithAggregatesFilter<"User"> | number
  }

  export type CabinetWhereInput = {
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    id?: IntFilter<"Cabinet"> | number
    Timezone?: EnumTimezoneFilter<"Cabinet"> | $Enums.Timezone
    realtycalendarid?: StringNullableFilter<"Cabinet"> | string | null
    okidokiapi?: StringNullableFilter<"Cabinet"> | string | null
    okidokiwebhookkey?: StringNullableFilter<"Cabinet"> | string | null
    tochkaPhone?: StringNullableFilter<"Cabinet"> | string | null
    tochkaApiKey?: StringNullableFilter<"Cabinet"> | string | null
    tochkaMerchantId?: StringNullableFilter<"Cabinet"> | string | null
    tochkaPaymentMode?: JsonNullableFilter<"Cabinet">
    tochkaVatType?: JsonNullableFilter<"Cabinet">
    tochkaPurpose?: StringNullableFilter<"Cabinet"> | string | null
    tochkaName?: StringNullableFilter<"Cabinet"> | string | null
    tochkaPurposeDeposit?: StringNullableFilter<"Cabinet"> | string | null
    tochkaNameDeposit?: StringNullableFilter<"Cabinet"> | string | null
    tochkaCustomerCode?: StringNullableFilter<"Cabinet"> | string | null
    tochkaOrgName?: StringNullableFilter<"Cabinet"> | string | null
    tochkaTaxCode?: StringNullableFilter<"Cabinet"> | string | null
    tochkaAppClientId?: StringNullableFilter<"Cabinet"> | string | null
    tochkaWebhookKey?: StringNullableFilter<"Cabinet"> | string | null
    cleaningTemplate?: StringNullableFilter<"Cabinet"> | string | null
    approxTimeMarker?: StringNullableFilter<"Cabinet"> | string | null
    emptyStayMarker?: StringNullableFilter<"Cabinet"> | string | null
    cleaningHeader?: StringNullableFilter<"Cabinet"> | string | null
    cleaningFooter?: StringNullableFilter<"Cabinet"> | string | null
    balance?: FloatFilter<"Cabinet"> | number
  }

  export type CabinetOrderByWithRelationInput = {
    id?: SortOrder
    Timezone?: SortOrder
    realtycalendarid?: SortOrderInput | SortOrder
    okidokiapi?: SortOrderInput | SortOrder
    okidokiwebhookkey?: SortOrderInput | SortOrder
    tochkaPhone?: SortOrderInput | SortOrder
    tochkaApiKey?: SortOrderInput | SortOrder
    tochkaMerchantId?: SortOrderInput | SortOrder
    tochkaPaymentMode?: SortOrderInput | SortOrder
    tochkaVatType?: SortOrderInput | SortOrder
    tochkaPurpose?: SortOrderInput | SortOrder
    tochkaName?: SortOrderInput | SortOrder
    tochkaPurposeDeposit?: SortOrderInput | SortOrder
    tochkaNameDeposit?: SortOrderInput | SortOrder
    tochkaCustomerCode?: SortOrderInput | SortOrder
    tochkaOrgName?: SortOrderInput | SortOrder
    tochkaTaxCode?: SortOrderInput | SortOrder
    tochkaAppClientId?: SortOrderInput | SortOrder
    tochkaWebhookKey?: SortOrderInput | SortOrder
    cleaningTemplate?: SortOrderInput | SortOrder
    approxTimeMarker?: SortOrderInput | SortOrder
    emptyStayMarker?: SortOrderInput | SortOrder
    cleaningHeader?: SortOrderInput | SortOrder
    cleaningFooter?: SortOrderInput | SortOrder
    balance?: SortOrder
    _relevance?: CabinetOrderByRelevanceInput
  }

  export type CabinetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    realtycalendarid?: string
    okidokiwebhookkey?: string
    tochkaWebhookKey?: string
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    Timezone?: EnumTimezoneFilter<"Cabinet"> | $Enums.Timezone
    okidokiapi?: StringNullableFilter<"Cabinet"> | string | null
    tochkaPhone?: StringNullableFilter<"Cabinet"> | string | null
    tochkaApiKey?: StringNullableFilter<"Cabinet"> | string | null
    tochkaMerchantId?: StringNullableFilter<"Cabinet"> | string | null
    tochkaPaymentMode?: JsonNullableFilter<"Cabinet">
    tochkaVatType?: JsonNullableFilter<"Cabinet">
    tochkaPurpose?: StringNullableFilter<"Cabinet"> | string | null
    tochkaName?: StringNullableFilter<"Cabinet"> | string | null
    tochkaPurposeDeposit?: StringNullableFilter<"Cabinet"> | string | null
    tochkaNameDeposit?: StringNullableFilter<"Cabinet"> | string | null
    tochkaCustomerCode?: StringNullableFilter<"Cabinet"> | string | null
    tochkaOrgName?: StringNullableFilter<"Cabinet"> | string | null
    tochkaTaxCode?: StringNullableFilter<"Cabinet"> | string | null
    tochkaAppClientId?: StringNullableFilter<"Cabinet"> | string | null
    cleaningTemplate?: StringNullableFilter<"Cabinet"> | string | null
    approxTimeMarker?: StringNullableFilter<"Cabinet"> | string | null
    emptyStayMarker?: StringNullableFilter<"Cabinet"> | string | null
    cleaningHeader?: StringNullableFilter<"Cabinet"> | string | null
    cleaningFooter?: StringNullableFilter<"Cabinet"> | string | null
    balance?: FloatFilter<"Cabinet"> | number
  }, "id" | "realtycalendarid" | "okidokiwebhookkey" | "tochkaWebhookKey">

  export type CabinetOrderByWithAggregationInput = {
    id?: SortOrder
    Timezone?: SortOrder
    realtycalendarid?: SortOrderInput | SortOrder
    okidokiapi?: SortOrderInput | SortOrder
    okidokiwebhookkey?: SortOrderInput | SortOrder
    tochkaPhone?: SortOrderInput | SortOrder
    tochkaApiKey?: SortOrderInput | SortOrder
    tochkaMerchantId?: SortOrderInput | SortOrder
    tochkaPaymentMode?: SortOrderInput | SortOrder
    tochkaVatType?: SortOrderInput | SortOrder
    tochkaPurpose?: SortOrderInput | SortOrder
    tochkaName?: SortOrderInput | SortOrder
    tochkaPurposeDeposit?: SortOrderInput | SortOrder
    tochkaNameDeposit?: SortOrderInput | SortOrder
    tochkaCustomerCode?: SortOrderInput | SortOrder
    tochkaOrgName?: SortOrderInput | SortOrder
    tochkaTaxCode?: SortOrderInput | SortOrder
    tochkaAppClientId?: SortOrderInput | SortOrder
    tochkaWebhookKey?: SortOrderInput | SortOrder
    cleaningTemplate?: SortOrderInput | SortOrder
    approxTimeMarker?: SortOrderInput | SortOrder
    emptyStayMarker?: SortOrderInput | SortOrder
    cleaningHeader?: SortOrderInput | SortOrder
    cleaningFooter?: SortOrderInput | SortOrder
    balance?: SortOrder
    _count?: CabinetCountOrderByAggregateInput
    _avg?: CabinetAvgOrderByAggregateInput
    _max?: CabinetMaxOrderByAggregateInput
    _min?: CabinetMinOrderByAggregateInput
    _sum?: CabinetSumOrderByAggregateInput
  }

  export type CabinetScalarWhereWithAggregatesInput = {
    AND?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    OR?: CabinetScalarWhereWithAggregatesInput[]
    NOT?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cabinet"> | number
    Timezone?: EnumTimezoneWithAggregatesFilter<"Cabinet"> | $Enums.Timezone
    realtycalendarid?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    okidokiapi?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    okidokiwebhookkey?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaPhone?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaApiKey?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaMerchantId?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaPaymentMode?: JsonNullableWithAggregatesFilter<"Cabinet">
    tochkaVatType?: JsonNullableWithAggregatesFilter<"Cabinet">
    tochkaPurpose?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaName?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaPurposeDeposit?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaNameDeposit?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaCustomerCode?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaOrgName?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaTaxCode?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaAppClientId?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    tochkaWebhookKey?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    cleaningTemplate?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    approxTimeMarker?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    emptyStayMarker?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    cleaningHeader?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    cleaningFooter?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    balance?: FloatWithAggregatesFilter<"Cabinet"> | number
  }

  export type LogsWhereInput = {
    AND?: LogsWhereInput | LogsWhereInput[]
    OR?: LogsWhereInput[]
    NOT?: LogsWhereInput | LogsWhereInput[]
    id?: IntFilter<"Logs"> | number
    cabinetid?: IntFilter<"Logs"> | number
    status?: EnumLogStatusFilter<"Logs"> | $Enums.LogStatus
    message?: StringFilter<"Logs"> | string
    date?: DateTimeFilter<"Logs"> | Date | string
    readed?: EnumThumblerFilter<"Logs"> | $Enums.Thumbler
  }

  export type LogsOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    date?: SortOrder
    readed?: SortOrder
    _relevance?: LogsOrderByRelevanceInput
  }

  export type LogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogsWhereInput | LogsWhereInput[]
    OR?: LogsWhereInput[]
    NOT?: LogsWhereInput | LogsWhereInput[]
    cabinetid?: IntFilter<"Logs"> | number
    status?: EnumLogStatusFilter<"Logs"> | $Enums.LogStatus
    message?: StringFilter<"Logs"> | string
    date?: DateTimeFilter<"Logs"> | Date | string
    readed?: EnumThumblerFilter<"Logs"> | $Enums.Thumbler
  }, "id">

  export type LogsOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    date?: SortOrder
    readed?: SortOrder
    _count?: LogsCountOrderByAggregateInput
    _avg?: LogsAvgOrderByAggregateInput
    _max?: LogsMaxOrderByAggregateInput
    _min?: LogsMinOrderByAggregateInput
    _sum?: LogsSumOrderByAggregateInput
  }

  export type LogsScalarWhereWithAggregatesInput = {
    AND?: LogsScalarWhereWithAggregatesInput | LogsScalarWhereWithAggregatesInput[]
    OR?: LogsScalarWhereWithAggregatesInput[]
    NOT?: LogsScalarWhereWithAggregatesInput | LogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Logs"> | number
    cabinetid?: IntWithAggregatesFilter<"Logs"> | number
    status?: EnumLogStatusWithAggregatesFilter<"Logs"> | $Enums.LogStatus
    message?: StringWithAggregatesFilter<"Logs"> | string
    date?: DateTimeWithAggregatesFilter<"Logs"> | Date | string
    readed?: EnumThumblerWithAggregatesFilter<"Logs"> | $Enums.Thumbler
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: IntFilter<"Staff"> | number
    cabinetid?: IntFilter<"Staff"> | number
    manageobjects?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    managemaids?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manageintegration?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    managetemplates?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manageautosent?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    managebooks?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    depositamountedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    manageobjects?: SortOrder
    managemaids?: SortOrder
    manageintegration?: SortOrder
    managetemplates?: SortOrder
    manageautosent?: SortOrder
    seemaidsrate?: SortOrder
    managebooks?: SortOrder
    manualpaymentedit?: SortOrder
    manualdepositedit?: SortOrder
    bankpaymentedit?: SortOrder
    bankdepositedit?: SortOrder
    financesinformationpayment?: SortOrder
    financesinformationdeposit?: SortOrder
    depositamountedit?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    cabinetid?: IntFilter<"Staff"> | number
    manageobjects?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    managemaids?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manageintegration?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    managetemplates?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manageautosent?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    managebooks?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    depositamountedit?: EnumThumblerFilter<"Staff"> | $Enums.Thumbler
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    manageobjects?: SortOrder
    managemaids?: SortOrder
    manageintegration?: SortOrder
    managetemplates?: SortOrder
    manageautosent?: SortOrder
    seemaidsrate?: SortOrder
    managebooks?: SortOrder
    manualpaymentedit?: SortOrder
    manualdepositedit?: SortOrder
    bankpaymentedit?: SortOrder
    bankdepositedit?: SortOrder
    financesinformationpayment?: SortOrder
    financesinformationdeposit?: SortOrder
    depositamountedit?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Staff"> | number
    cabinetid?: IntWithAggregatesFilter<"Staff"> | number
    manageobjects?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    managemaids?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    manageintegration?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    managetemplates?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    manageautosent?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    seemaidsrate?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    managebooks?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    manualdepositedit?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    bankdepositedit?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
    depositamountedit?: EnumThumblerWithAggregatesFilter<"Staff"> | $Enums.Thumbler
  }

  export type MaidsWhereInput = {
    AND?: MaidsWhereInput | MaidsWhereInput[]
    OR?: MaidsWhereInput[]
    NOT?: MaidsWhereInput | MaidsWhereInput[]
    id?: IntFilter<"Maids"> | number
    name?: StringFilter<"Maids"> | string
    rating?: FloatFilter<"Maids"> | number
    cabinetid?: IntFilter<"Maids"> | number
  }

  export type MaidsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    cabinetid?: SortOrder
    _relevance?: MaidsOrderByRelevanceInput
  }

  export type MaidsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaidsWhereInput | MaidsWhereInput[]
    OR?: MaidsWhereInput[]
    NOT?: MaidsWhereInput | MaidsWhereInput[]
    name?: StringFilter<"Maids"> | string
    rating?: FloatFilter<"Maids"> | number
    cabinetid?: IntFilter<"Maids"> | number
  }, "id">

  export type MaidsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    cabinetid?: SortOrder
    _count?: MaidsCountOrderByAggregateInput
    _avg?: MaidsAvgOrderByAggregateInput
    _max?: MaidsMaxOrderByAggregateInput
    _min?: MaidsMinOrderByAggregateInput
    _sum?: MaidsSumOrderByAggregateInput
  }

  export type MaidsScalarWhereWithAggregatesInput = {
    AND?: MaidsScalarWhereWithAggregatesInput | MaidsScalarWhereWithAggregatesInput[]
    OR?: MaidsScalarWhereWithAggregatesInput[]
    NOT?: MaidsScalarWhereWithAggregatesInput | MaidsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maids"> | number
    name?: StringWithAggregatesFilter<"Maids"> | string
    rating?: FloatWithAggregatesFilter<"Maids"> | number
    cabinetid?: IntWithAggregatesFilter<"Maids"> | number
  }

  export type ObjectsWhereInput = {
    AND?: ObjectsWhereInput | ObjectsWhereInput[]
    OR?: ObjectsWhereInput[]
    NOT?: ObjectsWhereInput | ObjectsWhereInput[]
    id?: IntFilter<"Objects"> | number
    cabinetid?: IntFilter<"Objects"> | number
    realtyid?: IntNullableFilter<"Objects"> | number | null
    name?: StringFilter<"Objects"> | string
    instruction?: StringFilter<"Objects"> | string
    checkindef?: StringFilter<"Objects"> | string
    checkoutdef?: StringFilter<"Objects"> | string
    sspayanddeposit?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    location?: StringFilter<"Objects"> | string
    maplink?: StringNullableFilter<"Objects"> | string | null
    deposit?: StringFilter<"Objects"> | string
    odstringid?: StringNullableFilter<"Objects"> | string | null
    odvalueid?: StringNullableFilter<"Objects"> | string | null
    odnameid?: StringNullableFilter<"Objects"> | string | null
    oddateinid?: StringNullableFilter<"Objects"> | string | null
    oddateoutid?: StringNullableFilter<"Objects"> | string | null
    oddepositid?: StringNullableFilter<"Objects"> | string | null
    odpayperdayid?: StringNullableFilter<"Objects"> | string | null
    odpayedid?: StringNullableFilter<"Objects"> | string | null
    okidokiactive?: IntFilter<"Objects"> | number
    depositchanel?: EnumDepositChanelFilter<"Objects"> | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFilter<"Objects"> | $Enums.PaymentChanel
    active?: EnumThumblerFilter<"Objects"> | $Enums.Thumbler
    photos?: ObjectPhotoListRelationFilter
  }

  export type ObjectsOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    realtyid?: SortOrderInput | SortOrder
    name?: SortOrder
    instruction?: SortOrder
    checkindef?: SortOrder
    checkoutdef?: SortOrder
    sspayanddeposit?: SortOrder
    ssinstruction?: SortOrder
    sscontract?: SortOrder
    ssrateclean?: SortOrder
    location?: SortOrder
    maplink?: SortOrderInput | SortOrder
    deposit?: SortOrder
    odstringid?: SortOrderInput | SortOrder
    odvalueid?: SortOrderInput | SortOrder
    odnameid?: SortOrderInput | SortOrder
    oddateinid?: SortOrderInput | SortOrder
    oddateoutid?: SortOrderInput | SortOrder
    oddepositid?: SortOrderInput | SortOrder
    odpayperdayid?: SortOrderInput | SortOrder
    odpayedid?: SortOrderInput | SortOrder
    okidokiactive?: SortOrder
    depositchanel?: SortOrder
    paymentchanel?: SortOrder
    active?: SortOrder
    photos?: ObjectPhotoOrderByRelationAggregateInput
    _relevance?: ObjectsOrderByRelevanceInput
  }

  export type ObjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObjectsWhereInput | ObjectsWhereInput[]
    OR?: ObjectsWhereInput[]
    NOT?: ObjectsWhereInput | ObjectsWhereInput[]
    cabinetid?: IntFilter<"Objects"> | number
    realtyid?: IntNullableFilter<"Objects"> | number | null
    name?: StringFilter<"Objects"> | string
    instruction?: StringFilter<"Objects"> | string
    checkindef?: StringFilter<"Objects"> | string
    checkoutdef?: StringFilter<"Objects"> | string
    sspayanddeposit?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFilter<"Objects"> | $Enums.ShowSettings
    location?: StringFilter<"Objects"> | string
    maplink?: StringNullableFilter<"Objects"> | string | null
    deposit?: StringFilter<"Objects"> | string
    odstringid?: StringNullableFilter<"Objects"> | string | null
    odvalueid?: StringNullableFilter<"Objects"> | string | null
    odnameid?: StringNullableFilter<"Objects"> | string | null
    oddateinid?: StringNullableFilter<"Objects"> | string | null
    oddateoutid?: StringNullableFilter<"Objects"> | string | null
    oddepositid?: StringNullableFilter<"Objects"> | string | null
    odpayperdayid?: StringNullableFilter<"Objects"> | string | null
    odpayedid?: StringNullableFilter<"Objects"> | string | null
    okidokiactive?: IntFilter<"Objects"> | number
    depositchanel?: EnumDepositChanelFilter<"Objects"> | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFilter<"Objects"> | $Enums.PaymentChanel
    active?: EnumThumblerFilter<"Objects"> | $Enums.Thumbler
    photos?: ObjectPhotoListRelationFilter
  }, "id">

  export type ObjectsOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    realtyid?: SortOrderInput | SortOrder
    name?: SortOrder
    instruction?: SortOrder
    checkindef?: SortOrder
    checkoutdef?: SortOrder
    sspayanddeposit?: SortOrder
    ssinstruction?: SortOrder
    sscontract?: SortOrder
    ssrateclean?: SortOrder
    location?: SortOrder
    maplink?: SortOrderInput | SortOrder
    deposit?: SortOrder
    odstringid?: SortOrderInput | SortOrder
    odvalueid?: SortOrderInput | SortOrder
    odnameid?: SortOrderInput | SortOrder
    oddateinid?: SortOrderInput | SortOrder
    oddateoutid?: SortOrderInput | SortOrder
    oddepositid?: SortOrderInput | SortOrder
    odpayperdayid?: SortOrderInput | SortOrder
    odpayedid?: SortOrderInput | SortOrder
    okidokiactive?: SortOrder
    depositchanel?: SortOrder
    paymentchanel?: SortOrder
    active?: SortOrder
    _count?: ObjectsCountOrderByAggregateInput
    _avg?: ObjectsAvgOrderByAggregateInput
    _max?: ObjectsMaxOrderByAggregateInput
    _min?: ObjectsMinOrderByAggregateInput
    _sum?: ObjectsSumOrderByAggregateInput
  }

  export type ObjectsScalarWhereWithAggregatesInput = {
    AND?: ObjectsScalarWhereWithAggregatesInput | ObjectsScalarWhereWithAggregatesInput[]
    OR?: ObjectsScalarWhereWithAggregatesInput[]
    NOT?: ObjectsScalarWhereWithAggregatesInput | ObjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Objects"> | number
    cabinetid?: IntWithAggregatesFilter<"Objects"> | number
    realtyid?: IntNullableWithAggregatesFilter<"Objects"> | number | null
    name?: StringWithAggregatesFilter<"Objects"> | string
    instruction?: StringWithAggregatesFilter<"Objects"> | string
    checkindef?: StringWithAggregatesFilter<"Objects"> | string
    checkoutdef?: StringWithAggregatesFilter<"Objects"> | string
    sspayanddeposit?: EnumShowSettingsWithAggregatesFilter<"Objects"> | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsWithAggregatesFilter<"Objects"> | $Enums.ShowSettings
    sscontract?: EnumShowSettingsWithAggregatesFilter<"Objects"> | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsWithAggregatesFilter<"Objects"> | $Enums.ShowSettings
    location?: StringWithAggregatesFilter<"Objects"> | string
    maplink?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    deposit?: StringWithAggregatesFilter<"Objects"> | string
    odstringid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    odvalueid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    odnameid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    oddateinid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    oddateoutid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    oddepositid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    odpayperdayid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    odpayedid?: StringNullableWithAggregatesFilter<"Objects"> | string | null
    okidokiactive?: IntWithAggregatesFilter<"Objects"> | number
    depositchanel?: EnumDepositChanelWithAggregatesFilter<"Objects"> | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelWithAggregatesFilter<"Objects"> | $Enums.PaymentChanel
    active?: EnumThumblerWithAggregatesFilter<"Objects"> | $Enums.Thumbler
  }

  export type ObjectPhotoWhereInput = {
    AND?: ObjectPhotoWhereInput | ObjectPhotoWhereInput[]
    OR?: ObjectPhotoWhereInput[]
    NOT?: ObjectPhotoWhereInput | ObjectPhotoWhereInput[]
    id?: IntFilter<"ObjectPhoto"> | number
    objectId?: IntFilter<"ObjectPhoto"> | number
    url?: StringFilter<"ObjectPhoto"> | string
    sortOrder?: IntFilter<"ObjectPhoto"> | number
    objects?: XOR<ObjectsScalarRelationFilter, ObjectsWhereInput>
  }

  export type ObjectPhotoOrderByWithRelationInput = {
    id?: SortOrder
    objectId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    objects?: ObjectsOrderByWithRelationInput
    _relevance?: ObjectPhotoOrderByRelevanceInput
  }

  export type ObjectPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObjectPhotoWhereInput | ObjectPhotoWhereInput[]
    OR?: ObjectPhotoWhereInput[]
    NOT?: ObjectPhotoWhereInput | ObjectPhotoWhereInput[]
    objectId?: IntFilter<"ObjectPhoto"> | number
    url?: StringFilter<"ObjectPhoto"> | string
    sortOrder?: IntFilter<"ObjectPhoto"> | number
    objects?: XOR<ObjectsScalarRelationFilter, ObjectsWhereInput>
  }, "id">

  export type ObjectPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    objectId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    _count?: ObjectPhotoCountOrderByAggregateInput
    _avg?: ObjectPhotoAvgOrderByAggregateInput
    _max?: ObjectPhotoMaxOrderByAggregateInput
    _min?: ObjectPhotoMinOrderByAggregateInput
    _sum?: ObjectPhotoSumOrderByAggregateInput
  }

  export type ObjectPhotoScalarWhereWithAggregatesInput = {
    AND?: ObjectPhotoScalarWhereWithAggregatesInput | ObjectPhotoScalarWhereWithAggregatesInput[]
    OR?: ObjectPhotoScalarWhereWithAggregatesInput[]
    NOT?: ObjectPhotoScalarWhereWithAggregatesInput | ObjectPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ObjectPhoto"> | number
    objectId?: IntWithAggregatesFilter<"ObjectPhoto"> | number
    url?: StringWithAggregatesFilter<"ObjectPhoto"> | string
    sortOrder?: IntWithAggregatesFilter<"ObjectPhoto"> | number
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    status?: EnumBookStatusNullableFilter<"Bookings"> | $Enums.BookStatus | null
    id?: IntFilter<"Bookings"> | number
    begin_date?: StringNullableFilter<"Bookings"> | string | null
    end_date?: StringNullableFilter<"Bookings"> | string | null
    realty_id?: IntNullableFilter<"Bookings"> | number | null
    created_at?: DateTimeNullableFilter<"Bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Bookings"> | Date | string | null
    amount?: IntNullableFilter<"Bookings"> | number | null
    notes?: StringNullableFilter<"Bookings"> | string | null
    source?: StringNullableFilter<"Bookings"> | string | null
    prepayment?: IntNullableFilter<"Bookings"> | number | null
    balance_to_be_paid_1?: IntNullableFilter<"Bookings"> | number | null
    price_per_day?: IntNullableFilter<"Bookings"> | number | null
    deposit?: IntNullableFilter<"Bookings"> | number | null
    returned?: IntNullableFilter<"Bookings"> | number | null
    manual_deposit?: IntNullableFilter<"Bookings"> | number | null
    client_id?: IntNullableFilter<"Bookings"> | number | null
    fio?: StringNullableFilter<"Bookings"> | string | null
    email?: StringNullableFilter<"Bookings"> | string | null
    phone?: StringNullableFilter<"Bookings"> | string | null
    additional_phone?: StringNullableFilter<"Bookings"> | string | null
    cabinet?: IntFilter<"Bookings"> | number
    tochka_id_pay?: IntNullableFilter<"Bookings"> | number | null
    tochka_id_deposit?: IntNullableFilter<"Bookings"> | number | null
    begin_time?: StringNullableFilter<"Bookings"> | string | null
    end_time?: StringNullableFilter<"Bookings"> | string | null
    contract_status?: StringNullableFilter<"Bookings"> | string | null
    contract_id?: StringNullableFilter<"Bookings"> | string | null
    contract_link?: StringNullableFilter<"Bookings"> | string | null
    maid_id?: IntNullableFilter<"Bookings"> | number | null
    review?: IntNullableFilter<"Bookings"> | number | null
    channel?: StringNullableFilter<"Bookings"> | string | null
    deposit_payment_link?: StringNullableFilter<"Bookings"> | string | null
    link?: StringFilter<"Bookings"> | string
  }

  export type BookingsOrderByWithRelationInput = {
    status?: SortOrderInput | SortOrder
    id?: SortOrder
    begin_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    realty_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    prepayment?: SortOrderInput | SortOrder
    balance_to_be_paid_1?: SortOrderInput | SortOrder
    price_per_day?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    returned?: SortOrderInput | SortOrder
    manual_deposit?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    fio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    additional_phone?: SortOrderInput | SortOrder
    cabinet?: SortOrder
    tochka_id_pay?: SortOrderInput | SortOrder
    tochka_id_deposit?: SortOrderInput | SortOrder
    begin_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    contract_status?: SortOrderInput | SortOrder
    contract_id?: SortOrderInput | SortOrder
    contract_link?: SortOrderInput | SortOrder
    maid_id?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    deposit_payment_link?: SortOrderInput | SortOrder
    link?: SortOrder
    _relevance?: BookingsOrderByRelevanceInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    status?: EnumBookStatusNullableFilter<"Bookings"> | $Enums.BookStatus | null
    begin_date?: StringNullableFilter<"Bookings"> | string | null
    end_date?: StringNullableFilter<"Bookings"> | string | null
    realty_id?: IntNullableFilter<"Bookings"> | number | null
    created_at?: DateTimeNullableFilter<"Bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Bookings"> | Date | string | null
    amount?: IntNullableFilter<"Bookings"> | number | null
    notes?: StringNullableFilter<"Bookings"> | string | null
    source?: StringNullableFilter<"Bookings"> | string | null
    prepayment?: IntNullableFilter<"Bookings"> | number | null
    balance_to_be_paid_1?: IntNullableFilter<"Bookings"> | number | null
    price_per_day?: IntNullableFilter<"Bookings"> | number | null
    deposit?: IntNullableFilter<"Bookings"> | number | null
    returned?: IntNullableFilter<"Bookings"> | number | null
    manual_deposit?: IntNullableFilter<"Bookings"> | number | null
    client_id?: IntNullableFilter<"Bookings"> | number | null
    fio?: StringNullableFilter<"Bookings"> | string | null
    email?: StringNullableFilter<"Bookings"> | string | null
    phone?: StringNullableFilter<"Bookings"> | string | null
    additional_phone?: StringNullableFilter<"Bookings"> | string | null
    cabinet?: IntFilter<"Bookings"> | number
    tochka_id_pay?: IntNullableFilter<"Bookings"> | number | null
    tochka_id_deposit?: IntNullableFilter<"Bookings"> | number | null
    begin_time?: StringNullableFilter<"Bookings"> | string | null
    end_time?: StringNullableFilter<"Bookings"> | string | null
    contract_status?: StringNullableFilter<"Bookings"> | string | null
    contract_id?: StringNullableFilter<"Bookings"> | string | null
    contract_link?: StringNullableFilter<"Bookings"> | string | null
    maid_id?: IntNullableFilter<"Bookings"> | number | null
    review?: IntNullableFilter<"Bookings"> | number | null
    channel?: StringNullableFilter<"Bookings"> | string | null
    deposit_payment_link?: StringNullableFilter<"Bookings"> | string | null
    link?: StringFilter<"Bookings"> | string
  }, "id">

  export type BookingsOrderByWithAggregationInput = {
    status?: SortOrderInput | SortOrder
    id?: SortOrder
    begin_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    realty_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    prepayment?: SortOrderInput | SortOrder
    balance_to_be_paid_1?: SortOrderInput | SortOrder
    price_per_day?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    returned?: SortOrderInput | SortOrder
    manual_deposit?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    fio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    additional_phone?: SortOrderInput | SortOrder
    cabinet?: SortOrder
    tochka_id_pay?: SortOrderInput | SortOrder
    tochka_id_deposit?: SortOrderInput | SortOrder
    begin_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    contract_status?: SortOrderInput | SortOrder
    contract_id?: SortOrderInput | SortOrder
    contract_link?: SortOrderInput | SortOrder
    maid_id?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    deposit_payment_link?: SortOrderInput | SortOrder
    link?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _avg?: BookingsAvgOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
    _sum?: BookingsSumOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    status?: EnumBookStatusNullableWithAggregatesFilter<"Bookings"> | $Enums.BookStatus | null
    id?: IntWithAggregatesFilter<"Bookings"> | number
    begin_date?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    end_date?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    realty_id?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Bookings"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Bookings"> | Date | string | null
    amount?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    source?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    prepayment?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    balance_to_be_paid_1?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    price_per_day?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    deposit?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    returned?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    manual_deposit?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    client_id?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    fio?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    email?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    additional_phone?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    cabinet?: IntWithAggregatesFilter<"Bookings"> | number
    tochka_id_pay?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    tochka_id_deposit?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    begin_time?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    end_time?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    contract_status?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    contract_id?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    contract_link?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    maid_id?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    review?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    channel?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    deposit_payment_link?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    link?: StringWithAggregatesFilter<"Bookings"> | string
  }

  export type CleaningScheduleWhereInput = {
    AND?: CleaningScheduleWhereInput | CleaningScheduleWhereInput[]
    OR?: CleaningScheduleWhereInput[]
    NOT?: CleaningScheduleWhereInput | CleaningScheduleWhereInput[]
    id?: IntFilter<"CleaningSchedule"> | number
    cabinetid?: IntFilter<"CleaningSchedule"> | number
    objectid?: IntFilter<"CleaningSchedule"> | number
    date?: StringFilter<"CleaningSchedule"> | string
    booking_id?: IntNullableFilter<"CleaningSchedule"> | number | null
    maid_id?: IntNullableFilter<"CleaningSchedule"> | number | null
    checkin_time?: StringNullableFilter<"CleaningSchedule"> | string | null
    checkout_time?: StringNullableFilter<"CleaningSchedule"> | string | null
    comment?: StringNullableFilter<"CleaningSchedule"> | string | null
    included?: EnumThumblerFilter<"CleaningSchedule"> | $Enums.Thumbler
    createdAt?: DateTimeFilter<"CleaningSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"CleaningSchedule"> | Date | string
  }

  export type CleaningScheduleOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    objectid?: SortOrder
    date?: SortOrder
    booking_id?: SortOrderInput | SortOrder
    maid_id?: SortOrderInput | SortOrder
    checkin_time?: SortOrderInput | SortOrder
    checkout_time?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    included?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CleaningScheduleOrderByRelevanceInput
  }

  export type CleaningScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cabinetid_objectid_date?: CleaningScheduleCabinetidObjectidDateCompoundUniqueInput
    AND?: CleaningScheduleWhereInput | CleaningScheduleWhereInput[]
    OR?: CleaningScheduleWhereInput[]
    NOT?: CleaningScheduleWhereInput | CleaningScheduleWhereInput[]
    cabinetid?: IntFilter<"CleaningSchedule"> | number
    objectid?: IntFilter<"CleaningSchedule"> | number
    date?: StringFilter<"CleaningSchedule"> | string
    booking_id?: IntNullableFilter<"CleaningSchedule"> | number | null
    maid_id?: IntNullableFilter<"CleaningSchedule"> | number | null
    checkin_time?: StringNullableFilter<"CleaningSchedule"> | string | null
    checkout_time?: StringNullableFilter<"CleaningSchedule"> | string | null
    comment?: StringNullableFilter<"CleaningSchedule"> | string | null
    included?: EnumThumblerFilter<"CleaningSchedule"> | $Enums.Thumbler
    createdAt?: DateTimeFilter<"CleaningSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"CleaningSchedule"> | Date | string
  }, "id" | "cabinetid_objectid_date">

  export type CleaningScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    objectid?: SortOrder
    date?: SortOrder
    booking_id?: SortOrderInput | SortOrder
    maid_id?: SortOrderInput | SortOrder
    checkin_time?: SortOrderInput | SortOrder
    checkout_time?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    included?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CleaningScheduleCountOrderByAggregateInput
    _avg?: CleaningScheduleAvgOrderByAggregateInput
    _max?: CleaningScheduleMaxOrderByAggregateInput
    _min?: CleaningScheduleMinOrderByAggregateInput
    _sum?: CleaningScheduleSumOrderByAggregateInput
  }

  export type CleaningScheduleScalarWhereWithAggregatesInput = {
    AND?: CleaningScheduleScalarWhereWithAggregatesInput | CleaningScheduleScalarWhereWithAggregatesInput[]
    OR?: CleaningScheduleScalarWhereWithAggregatesInput[]
    NOT?: CleaningScheduleScalarWhereWithAggregatesInput | CleaningScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CleaningSchedule"> | number
    cabinetid?: IntWithAggregatesFilter<"CleaningSchedule"> | number
    objectid?: IntWithAggregatesFilter<"CleaningSchedule"> | number
    date?: StringWithAggregatesFilter<"CleaningSchedule"> | string
    booking_id?: IntNullableWithAggregatesFilter<"CleaningSchedule"> | number | null
    maid_id?: IntNullableWithAggregatesFilter<"CleaningSchedule"> | number | null
    checkin_time?: StringNullableWithAggregatesFilter<"CleaningSchedule"> | string | null
    checkout_time?: StringNullableWithAggregatesFilter<"CleaningSchedule"> | string | null
    comment?: StringNullableWithAggregatesFilter<"CleaningSchedule"> | string | null
    included?: EnumThumblerWithAggregatesFilter<"CleaningSchedule"> | $Enums.Thumbler
    createdAt?: DateTimeWithAggregatesFilter<"CleaningSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CleaningSchedule"> | Date | string
  }

  export type UnprocessedBookingWhereInput = {
    AND?: UnprocessedBookingWhereInput | UnprocessedBookingWhereInput[]
    OR?: UnprocessedBookingWhereInput[]
    NOT?: UnprocessedBookingWhereInput | UnprocessedBookingWhereInput[]
    id?: IntFilter<"UnprocessedBooking"> | number
    cabinetid?: IntFilter<"UnprocessedBooking"> | number
    bookingId?: IntFilter<"UnprocessedBooking"> | number
    action?: StringFilter<"UnprocessedBooking"> | string
    failReason?: StringFilter<"UnprocessedBooking"> | string
    failMessage?: StringNullableFilter<"UnprocessedBooking"> | string | null
    realtyId?: IntNullableFilter<"UnprocessedBooking"> | number | null
    beginDate?: StringNullableFilter<"UnprocessedBooking"> | string | null
    endDate?: StringNullableFilter<"UnprocessedBooking"> | string | null
    bookingStatus?: StringNullableFilter<"UnprocessedBooking"> | string | null
    source?: StringNullableFilter<"UnprocessedBooking"> | string | null
    amount?: IntNullableFilter<"UnprocessedBooking"> | number | null
    notes?: StringNullableFilter<"UnprocessedBooking"> | string | null
    prepayment?: IntNullableFilter<"UnprocessedBooking"> | number | null
    balanceToBePaid?: IntNullableFilter<"UnprocessedBooking"> | number | null
    pricePerDay?: IntNullableFilter<"UnprocessedBooking"> | number | null
    deposit?: IntNullableFilter<"UnprocessedBooking"> | number | null
    clientId?: IntNullableFilter<"UnprocessedBooking"> | number | null
    fio?: StringNullableFilter<"UnprocessedBooking"> | string | null
    email?: StringNullableFilter<"UnprocessedBooking"> | string | null
    phone?: StringNullableFilter<"UnprocessedBooking"> | string | null
    additionalPhone?: StringNullableFilter<"UnprocessedBooking"> | string | null
    resolved?: BoolFilter<"UnprocessedBooking"> | boolean
    createdAt?: DateTimeFilter<"UnprocessedBooking"> | Date | string
  }

  export type UnprocessedBookingOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    failReason?: SortOrder
    failMessage?: SortOrderInput | SortOrder
    realtyId?: SortOrderInput | SortOrder
    beginDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    bookingStatus?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    prepayment?: SortOrderInput | SortOrder
    balanceToBePaid?: SortOrderInput | SortOrder
    pricePerDay?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    fio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    additionalPhone?: SortOrderInput | SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    _relevance?: UnprocessedBookingOrderByRelevanceInput
  }

  export type UnprocessedBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnprocessedBookingWhereInput | UnprocessedBookingWhereInput[]
    OR?: UnprocessedBookingWhereInput[]
    NOT?: UnprocessedBookingWhereInput | UnprocessedBookingWhereInput[]
    cabinetid?: IntFilter<"UnprocessedBooking"> | number
    bookingId?: IntFilter<"UnprocessedBooking"> | number
    action?: StringFilter<"UnprocessedBooking"> | string
    failReason?: StringFilter<"UnprocessedBooking"> | string
    failMessage?: StringNullableFilter<"UnprocessedBooking"> | string | null
    realtyId?: IntNullableFilter<"UnprocessedBooking"> | number | null
    beginDate?: StringNullableFilter<"UnprocessedBooking"> | string | null
    endDate?: StringNullableFilter<"UnprocessedBooking"> | string | null
    bookingStatus?: StringNullableFilter<"UnprocessedBooking"> | string | null
    source?: StringNullableFilter<"UnprocessedBooking"> | string | null
    amount?: IntNullableFilter<"UnprocessedBooking"> | number | null
    notes?: StringNullableFilter<"UnprocessedBooking"> | string | null
    prepayment?: IntNullableFilter<"UnprocessedBooking"> | number | null
    balanceToBePaid?: IntNullableFilter<"UnprocessedBooking"> | number | null
    pricePerDay?: IntNullableFilter<"UnprocessedBooking"> | number | null
    deposit?: IntNullableFilter<"UnprocessedBooking"> | number | null
    clientId?: IntNullableFilter<"UnprocessedBooking"> | number | null
    fio?: StringNullableFilter<"UnprocessedBooking"> | string | null
    email?: StringNullableFilter<"UnprocessedBooking"> | string | null
    phone?: StringNullableFilter<"UnprocessedBooking"> | string | null
    additionalPhone?: StringNullableFilter<"UnprocessedBooking"> | string | null
    resolved?: BoolFilter<"UnprocessedBooking"> | boolean
    createdAt?: DateTimeFilter<"UnprocessedBooking"> | Date | string
  }, "id">

  export type UnprocessedBookingOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    failReason?: SortOrder
    failMessage?: SortOrderInput | SortOrder
    realtyId?: SortOrderInput | SortOrder
    beginDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    bookingStatus?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    prepayment?: SortOrderInput | SortOrder
    balanceToBePaid?: SortOrderInput | SortOrder
    pricePerDay?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    fio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    additionalPhone?: SortOrderInput | SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    _count?: UnprocessedBookingCountOrderByAggregateInput
    _avg?: UnprocessedBookingAvgOrderByAggregateInput
    _max?: UnprocessedBookingMaxOrderByAggregateInput
    _min?: UnprocessedBookingMinOrderByAggregateInput
    _sum?: UnprocessedBookingSumOrderByAggregateInput
  }

  export type UnprocessedBookingScalarWhereWithAggregatesInput = {
    AND?: UnprocessedBookingScalarWhereWithAggregatesInput | UnprocessedBookingScalarWhereWithAggregatesInput[]
    OR?: UnprocessedBookingScalarWhereWithAggregatesInput[]
    NOT?: UnprocessedBookingScalarWhereWithAggregatesInput | UnprocessedBookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnprocessedBooking"> | number
    cabinetid?: IntWithAggregatesFilter<"UnprocessedBooking"> | number
    bookingId?: IntWithAggregatesFilter<"UnprocessedBooking"> | number
    action?: StringWithAggregatesFilter<"UnprocessedBooking"> | string
    failReason?: StringWithAggregatesFilter<"UnprocessedBooking"> | string
    failMessage?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    realtyId?: IntNullableWithAggregatesFilter<"UnprocessedBooking"> | number | null
    beginDate?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    bookingStatus?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    source?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    amount?: IntNullableWithAggregatesFilter<"UnprocessedBooking"> | number | null
    notes?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    prepayment?: IntNullableWithAggregatesFilter<"UnprocessedBooking"> | number | null
    balanceToBePaid?: IntNullableWithAggregatesFilter<"UnprocessedBooking"> | number | null
    pricePerDay?: IntNullableWithAggregatesFilter<"UnprocessedBooking"> | number | null
    deposit?: IntNullableWithAggregatesFilter<"UnprocessedBooking"> | number | null
    clientId?: IntNullableWithAggregatesFilter<"UnprocessedBooking"> | number | null
    fio?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    email?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    phone?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    additionalPhone?: StringNullableWithAggregatesFilter<"UnprocessedBooking"> | string | null
    resolved?: BoolWithAggregatesFilter<"UnprocessedBooking"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UnprocessedBooking"> | Date | string
  }

  export type BugReportWhereInput = {
    AND?: BugReportWhereInput | BugReportWhereInput[]
    OR?: BugReportWhereInput[]
    NOT?: BugReportWhereInput | BugReportWhereInput[]
    id?: IntFilter<"BugReport"> | number
    cabinetid?: IntFilter<"BugReport"> | number
    userId?: IntFilter<"BugReport"> | number
    message?: StringFilter<"BugReport"> | string
    page?: StringNullableFilter<"BugReport"> | string | null
    createdAt?: DateTimeFilter<"BugReport"> | Date | string
  }

  export type BugReportOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    page?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: BugReportOrderByRelevanceInput
  }

  export type BugReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BugReportWhereInput | BugReportWhereInput[]
    OR?: BugReportWhereInput[]
    NOT?: BugReportWhereInput | BugReportWhereInput[]
    cabinetid?: IntFilter<"BugReport"> | number
    userId?: IntFilter<"BugReport"> | number
    message?: StringFilter<"BugReport"> | string
    page?: StringNullableFilter<"BugReport"> | string | null
    createdAt?: DateTimeFilter<"BugReport"> | Date | string
  }, "id">

  export type BugReportOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    page?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BugReportCountOrderByAggregateInput
    _avg?: BugReportAvgOrderByAggregateInput
    _max?: BugReportMaxOrderByAggregateInput
    _min?: BugReportMinOrderByAggregateInput
    _sum?: BugReportSumOrderByAggregateInput
  }

  export type BugReportScalarWhereWithAggregatesInput = {
    AND?: BugReportScalarWhereWithAggregatesInput | BugReportScalarWhereWithAggregatesInput[]
    OR?: BugReportScalarWhereWithAggregatesInput[]
    NOT?: BugReportScalarWhereWithAggregatesInput | BugReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BugReport"> | number
    cabinetid?: IntWithAggregatesFilter<"BugReport"> | number
    userId?: IntWithAggregatesFilter<"BugReport"> | number
    message?: StringWithAggregatesFilter<"BugReport"> | string
    page?: StringNullableWithAggregatesFilter<"BugReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BugReport"> | Date | string
  }

  export type CabinetTemplateWhereInput = {
    AND?: CabinetTemplateWhereInput | CabinetTemplateWhereInput[]
    OR?: CabinetTemplateWhereInput[]
    NOT?: CabinetTemplateWhereInput | CabinetTemplateWhereInput[]
    id?: IntFilter<"CabinetTemplate"> | number
    cabinetid?: IntFilter<"CabinetTemplate"> | number
    name?: StringFilter<"CabinetTemplate"> | string
    body?: StringFilter<"CabinetTemplate"> | string
    createdAt?: DateTimeFilter<"CabinetTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"CabinetTemplate"> | Date | string
  }

  export type CabinetTemplateOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    name?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CabinetTemplateOrderByRelevanceInput
  }

  export type CabinetTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CabinetTemplateWhereInput | CabinetTemplateWhereInput[]
    OR?: CabinetTemplateWhereInput[]
    NOT?: CabinetTemplateWhereInput | CabinetTemplateWhereInput[]
    cabinetid?: IntFilter<"CabinetTemplate"> | number
    name?: StringFilter<"CabinetTemplate"> | string
    body?: StringFilter<"CabinetTemplate"> | string
    createdAt?: DateTimeFilter<"CabinetTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"CabinetTemplate"> | Date | string
  }, "id">

  export type CabinetTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    name?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CabinetTemplateCountOrderByAggregateInput
    _avg?: CabinetTemplateAvgOrderByAggregateInput
    _max?: CabinetTemplateMaxOrderByAggregateInput
    _min?: CabinetTemplateMinOrderByAggregateInput
    _sum?: CabinetTemplateSumOrderByAggregateInput
  }

  export type CabinetTemplateScalarWhereWithAggregatesInput = {
    AND?: CabinetTemplateScalarWhereWithAggregatesInput | CabinetTemplateScalarWhereWithAggregatesInput[]
    OR?: CabinetTemplateScalarWhereWithAggregatesInput[]
    NOT?: CabinetTemplateScalarWhereWithAggregatesInput | CabinetTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CabinetTemplate"> | number
    cabinetid?: IntWithAggregatesFilter<"CabinetTemplate"> | number
    name?: StringWithAggregatesFilter<"CabinetTemplate"> | string
    body?: StringWithAggregatesFilter<"CabinetTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CabinetTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CabinetTemplate"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    cabinetid?: IntFilter<"Payment"> | number
    bookingId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    madeBy?: StringNullableFilter<"Payment"> | string | null
    receiptUrl?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    returnedAmount?: FloatNullableFilter<"Payment"> | number | null
    returnedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    externalId?: StringNullableFilter<"Payment"> | string | null
    link?: StringNullableFilter<"Payment"> | string | null
    linkExpiresAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    tochkaStatus?: StringNullableFilter<"Payment"> | string | null
    tochkaPaymentType?: StringNullableFilter<"Payment"> | string | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    method?: SortOrder
    madeBy?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    returnedAmount?: SortOrderInput | SortOrder
    returnedAt?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    linkExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    tochkaStatus?: SortOrderInput | SortOrder
    tochkaPaymentType?: SortOrderInput | SortOrder
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    cabinetid?: IntFilter<"Payment"> | number
    bookingId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    madeBy?: StringNullableFilter<"Payment"> | string | null
    receiptUrl?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    returnedAmount?: FloatNullableFilter<"Payment"> | number | null
    returnedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    externalId?: StringNullableFilter<"Payment"> | string | null
    link?: StringNullableFilter<"Payment"> | string | null
    linkExpiresAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    tochkaStatus?: StringNullableFilter<"Payment"> | string | null
    tochkaPaymentType?: StringNullableFilter<"Payment"> | string | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    method?: SortOrder
    madeBy?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    returnedAmount?: SortOrderInput | SortOrder
    returnedAt?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    linkExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    tochkaStatus?: SortOrderInput | SortOrder
    tochkaPaymentType?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    cabinetid?: IntWithAggregatesFilter<"Payment"> | number
    bookingId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    type?: EnumPaymentTypeWithAggregatesFilter<"Payment"> | $Enums.PaymentType
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    madeBy?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    returnedAmount?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    returnedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    externalId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    link?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    linkExpiresAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    tochkaStatus?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    tochkaPaymentType?: StringNullableWithAggregatesFilter<"Payment"> | string | null
  }

  export type UserCreateInput = {
    login: string
    password: string
    tempass?: $Enums.TemPass
    name?: string | null
    role: $Enums.Role
    cabinet: number
    status?: $Enums.Status
    createdAt?: Date | string
    tokenVersion?: number
    staff?: StaffCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    login: string
    password: string
    tempass?: $Enums.TemPass
    name?: string | null
    role: $Enums.Role
    cabinet: number
    status?: $Enums.Status
    createdAt?: Date | string
    tokenVersion?: number
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tempass?: EnumTemPassFieldUpdateOperationsInput | $Enums.TemPass
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cabinet?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    staff?: StaffUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tempass?: EnumTemPassFieldUpdateOperationsInput | $Enums.TemPass
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cabinet?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    login: string
    password: string
    tempass?: $Enums.TemPass
    name?: string | null
    role: $Enums.Role
    cabinet: number
    status?: $Enums.Status
    createdAt?: Date | string
    tokenVersion?: number
  }

  export type UserUpdateManyMutationInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tempass?: EnumTemPassFieldUpdateOperationsInput | $Enums.TemPass
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cabinet?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tempass?: EnumTemPassFieldUpdateOperationsInput | $Enums.TemPass
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cabinet?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
  }

  export type CabinetCreateInput = {
    Timezone?: $Enums.Timezone
    realtycalendarid?: string | null
    okidokiapi?: string | null
    okidokiwebhookkey?: string | null
    tochkaPhone?: string | null
    tochkaApiKey?: string | null
    tochkaMerchantId?: string | null
    tochkaPaymentMode?: NullableJsonNullValueInput | InputJsonValue
    tochkaVatType?: NullableJsonNullValueInput | InputJsonValue
    tochkaPurpose?: string | null
    tochkaName?: string | null
    tochkaPurposeDeposit?: string | null
    tochkaNameDeposit?: string | null
    tochkaCustomerCode?: string | null
    tochkaOrgName?: string | null
    tochkaTaxCode?: string | null
    tochkaAppClientId?: string | null
    tochkaWebhookKey?: string | null
    cleaningTemplate?: string | null
    approxTimeMarker?: string | null
    emptyStayMarker?: string | null
    cleaningHeader?: string | null
    cleaningFooter?: string | null
    balance?: number
  }

  export type CabinetUncheckedCreateInput = {
    id?: number
    Timezone?: $Enums.Timezone
    realtycalendarid?: string | null
    okidokiapi?: string | null
    okidokiwebhookkey?: string | null
    tochkaPhone?: string | null
    tochkaApiKey?: string | null
    tochkaMerchantId?: string | null
    tochkaPaymentMode?: NullableJsonNullValueInput | InputJsonValue
    tochkaVatType?: NullableJsonNullValueInput | InputJsonValue
    tochkaPurpose?: string | null
    tochkaName?: string | null
    tochkaPurposeDeposit?: string | null
    tochkaNameDeposit?: string | null
    tochkaCustomerCode?: string | null
    tochkaOrgName?: string | null
    tochkaTaxCode?: string | null
    tochkaAppClientId?: string | null
    tochkaWebhookKey?: string | null
    cleaningTemplate?: string | null
    approxTimeMarker?: string | null
    emptyStayMarker?: string | null
    cleaningHeader?: string | null
    cleaningFooter?: string | null
    balance?: number
  }

  export type CabinetUpdateInput = {
    Timezone?: EnumTimezoneFieldUpdateOperationsInput | $Enums.Timezone
    realtycalendarid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiapi?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiwebhookkey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaMerchantId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentMode?: NullableJsonNullValueInput | InputJsonValue
    tochkaVatType?: NullableJsonNullValueInput | InputJsonValue
    tochkaPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPurposeDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaNameDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaTaxCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaAppClientId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaWebhookKey?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    approxTimeMarker?: NullableStringFieldUpdateOperationsInput | string | null
    emptyStayMarker?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningHeader?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningFooter?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type CabinetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Timezone?: EnumTimezoneFieldUpdateOperationsInput | $Enums.Timezone
    realtycalendarid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiapi?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiwebhookkey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaMerchantId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentMode?: NullableJsonNullValueInput | InputJsonValue
    tochkaVatType?: NullableJsonNullValueInput | InputJsonValue
    tochkaPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPurposeDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaNameDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaTaxCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaAppClientId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaWebhookKey?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    approxTimeMarker?: NullableStringFieldUpdateOperationsInput | string | null
    emptyStayMarker?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningHeader?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningFooter?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type CabinetCreateManyInput = {
    id?: number
    Timezone?: $Enums.Timezone
    realtycalendarid?: string | null
    okidokiapi?: string | null
    okidokiwebhookkey?: string | null
    tochkaPhone?: string | null
    tochkaApiKey?: string | null
    tochkaMerchantId?: string | null
    tochkaPaymentMode?: NullableJsonNullValueInput | InputJsonValue
    tochkaVatType?: NullableJsonNullValueInput | InputJsonValue
    tochkaPurpose?: string | null
    tochkaName?: string | null
    tochkaPurposeDeposit?: string | null
    tochkaNameDeposit?: string | null
    tochkaCustomerCode?: string | null
    tochkaOrgName?: string | null
    tochkaTaxCode?: string | null
    tochkaAppClientId?: string | null
    tochkaWebhookKey?: string | null
    cleaningTemplate?: string | null
    approxTimeMarker?: string | null
    emptyStayMarker?: string | null
    cleaningHeader?: string | null
    cleaningFooter?: string | null
    balance?: number
  }

  export type CabinetUpdateManyMutationInput = {
    Timezone?: EnumTimezoneFieldUpdateOperationsInput | $Enums.Timezone
    realtycalendarid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiapi?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiwebhookkey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaMerchantId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentMode?: NullableJsonNullValueInput | InputJsonValue
    tochkaVatType?: NullableJsonNullValueInput | InputJsonValue
    tochkaPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPurposeDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaNameDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaTaxCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaAppClientId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaWebhookKey?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    approxTimeMarker?: NullableStringFieldUpdateOperationsInput | string | null
    emptyStayMarker?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningHeader?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningFooter?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type CabinetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Timezone?: EnumTimezoneFieldUpdateOperationsInput | $Enums.Timezone
    realtycalendarid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiapi?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiwebhookkey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaMerchantId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentMode?: NullableJsonNullValueInput | InputJsonValue
    tochkaVatType?: NullableJsonNullValueInput | InputJsonValue
    tochkaPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPurposeDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaNameDeposit?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaOrgName?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaTaxCode?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaAppClientId?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaWebhookKey?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    approxTimeMarker?: NullableStringFieldUpdateOperationsInput | string | null
    emptyStayMarker?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningHeader?: NullableStringFieldUpdateOperationsInput | string | null
    cleaningFooter?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type LogsCreateInput = {
    cabinetid: number
    status: $Enums.LogStatus
    message: string
    date?: Date | string
    readed?: $Enums.Thumbler
  }

  export type LogsUncheckedCreateInput = {
    id?: number
    cabinetid: number
    status: $Enums.LogStatus
    message: string
    date?: Date | string
    readed?: $Enums.Thumbler
  }

  export type LogsUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    status?: EnumLogStatusFieldUpdateOperationsInput | $Enums.LogStatus
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readed?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type LogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    status?: EnumLogStatusFieldUpdateOperationsInput | $Enums.LogStatus
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readed?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type LogsCreateManyInput = {
    id?: number
    cabinetid: number
    status: $Enums.LogStatus
    message: string
    date?: Date | string
    readed?: $Enums.Thumbler
  }

  export type LogsUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    status?: EnumLogStatusFieldUpdateOperationsInput | $Enums.LogStatus
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readed?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type LogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    status?: EnumLogStatusFieldUpdateOperationsInput | $Enums.LogStatus
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readed?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type StaffCreateInput = {
    cabinetid: number
    manageobjects?: $Enums.Thumbler
    managemaids?: $Enums.Thumbler
    manageintegration?: $Enums.Thumbler
    managetemplates?: $Enums.Thumbler
    manageautosent?: $Enums.Thumbler
    seemaidsrate?: $Enums.Thumbler
    managebooks?: $Enums.Thumbler
    manualpaymentedit?: $Enums.Thumbler
    manualdepositedit?: $Enums.Thumbler
    bankpaymentedit?: $Enums.Thumbler
    bankdepositedit?: $Enums.Thumbler
    financesinformationpayment?: $Enums.Thumbler
    financesinformationdeposit?: $Enums.Thumbler
    depositamountedit?: $Enums.Thumbler
    user: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id: number
    cabinetid: number
    manageobjects?: $Enums.Thumbler
    managemaids?: $Enums.Thumbler
    manageintegration?: $Enums.Thumbler
    managetemplates?: $Enums.Thumbler
    manageautosent?: $Enums.Thumbler
    seemaidsrate?: $Enums.Thumbler
    managebooks?: $Enums.Thumbler
    manualpaymentedit?: $Enums.Thumbler
    manualdepositedit?: $Enums.Thumbler
    bankpaymentedit?: $Enums.Thumbler
    bankdepositedit?: $Enums.Thumbler
    financesinformationpayment?: $Enums.Thumbler
    financesinformationdeposit?: $Enums.Thumbler
    depositamountedit?: $Enums.Thumbler
  }

  export type StaffUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    manageobjects?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managemaids?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageintegration?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managetemplates?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageautosent?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managebooks?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    depositamountedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    manageobjects?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managemaids?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageintegration?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managetemplates?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageautosent?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managebooks?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    depositamountedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type StaffCreateManyInput = {
    id: number
    cabinetid: number
    manageobjects?: $Enums.Thumbler
    managemaids?: $Enums.Thumbler
    manageintegration?: $Enums.Thumbler
    managetemplates?: $Enums.Thumbler
    manageautosent?: $Enums.Thumbler
    seemaidsrate?: $Enums.Thumbler
    managebooks?: $Enums.Thumbler
    manualpaymentedit?: $Enums.Thumbler
    manualdepositedit?: $Enums.Thumbler
    bankpaymentedit?: $Enums.Thumbler
    bankdepositedit?: $Enums.Thumbler
    financesinformationpayment?: $Enums.Thumbler
    financesinformationdeposit?: $Enums.Thumbler
    depositamountedit?: $Enums.Thumbler
  }

  export type StaffUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    manageobjects?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managemaids?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageintegration?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managetemplates?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageautosent?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managebooks?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    depositamountedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    manageobjects?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managemaids?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageintegration?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managetemplates?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageautosent?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managebooks?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    depositamountedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type MaidsCreateInput = {
    name: string
    rating?: number
    cabinetid: number
  }

  export type MaidsUncheckedCreateInput = {
    id?: number
    name: string
    rating?: number
    cabinetid: number
  }

  export type MaidsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
  }

  export type MaidsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
  }

  export type MaidsCreateManyInput = {
    id?: number
    name: string
    rating?: number
    cabinetid: number
  }

  export type MaidsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
  }

  export type MaidsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectsCreateInput = {
    cabinetid: number
    realtyid?: number | null
    name: string
    instruction: string
    checkindef: string
    checkoutdef: string
    sspayanddeposit: $Enums.ShowSettings
    ssinstruction: $Enums.ShowSettings
    sscontract: $Enums.ShowSettings
    ssrateclean: $Enums.ShowSettings
    location: string
    maplink?: string | null
    deposit: string
    odstringid?: string | null
    odvalueid?: string | null
    odnameid?: string | null
    oddateinid?: string | null
    oddateoutid?: string | null
    oddepositid?: string | null
    odpayperdayid?: string | null
    odpayedid?: string | null
    okidokiactive?: number
    depositchanel?: $Enums.DepositChanel
    paymentchanel?: $Enums.PaymentChanel
    active?: $Enums.Thumbler
    photos?: ObjectPhotoCreateNestedManyWithoutObjectsInput
  }

  export type ObjectsUncheckedCreateInput = {
    id?: number
    cabinetid: number
    realtyid?: number | null
    name: string
    instruction: string
    checkindef: string
    checkoutdef: string
    sspayanddeposit: $Enums.ShowSettings
    ssinstruction: $Enums.ShowSettings
    sscontract: $Enums.ShowSettings
    ssrateclean: $Enums.ShowSettings
    location: string
    maplink?: string | null
    deposit: string
    odstringid?: string | null
    odvalueid?: string | null
    odnameid?: string | null
    oddateinid?: string | null
    oddateoutid?: string | null
    oddepositid?: string | null
    odpayperdayid?: string | null
    odpayedid?: string | null
    okidokiactive?: number
    depositchanel?: $Enums.DepositChanel
    paymentchanel?: $Enums.PaymentChanel
    active?: $Enums.Thumbler
    photos?: ObjectPhotoUncheckedCreateNestedManyWithoutObjectsInput
  }

  export type ObjectsUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    realtyid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    checkindef?: StringFieldUpdateOperationsInput | string
    checkoutdef?: StringFieldUpdateOperationsInput | string
    sspayanddeposit?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    location?: StringFieldUpdateOperationsInput | string
    maplink?: NullableStringFieldUpdateOperationsInput | string | null
    deposit?: StringFieldUpdateOperationsInput | string
    odstringid?: NullableStringFieldUpdateOperationsInput | string | null
    odvalueid?: NullableStringFieldUpdateOperationsInput | string | null
    odnameid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateinid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateoutid?: NullableStringFieldUpdateOperationsInput | string | null
    oddepositid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayperdayid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayedid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiactive?: IntFieldUpdateOperationsInput | number
    depositchanel?: EnumDepositChanelFieldUpdateOperationsInput | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFieldUpdateOperationsInput | $Enums.PaymentChanel
    active?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    photos?: ObjectPhotoUpdateManyWithoutObjectsNestedInput
  }

  export type ObjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    realtyid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    checkindef?: StringFieldUpdateOperationsInput | string
    checkoutdef?: StringFieldUpdateOperationsInput | string
    sspayanddeposit?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    location?: StringFieldUpdateOperationsInput | string
    maplink?: NullableStringFieldUpdateOperationsInput | string | null
    deposit?: StringFieldUpdateOperationsInput | string
    odstringid?: NullableStringFieldUpdateOperationsInput | string | null
    odvalueid?: NullableStringFieldUpdateOperationsInput | string | null
    odnameid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateinid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateoutid?: NullableStringFieldUpdateOperationsInput | string | null
    oddepositid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayperdayid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayedid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiactive?: IntFieldUpdateOperationsInput | number
    depositchanel?: EnumDepositChanelFieldUpdateOperationsInput | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFieldUpdateOperationsInput | $Enums.PaymentChanel
    active?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    photos?: ObjectPhotoUncheckedUpdateManyWithoutObjectsNestedInput
  }

  export type ObjectsCreateManyInput = {
    id?: number
    cabinetid: number
    realtyid?: number | null
    name: string
    instruction: string
    checkindef: string
    checkoutdef: string
    sspayanddeposit: $Enums.ShowSettings
    ssinstruction: $Enums.ShowSettings
    sscontract: $Enums.ShowSettings
    ssrateclean: $Enums.ShowSettings
    location: string
    maplink?: string | null
    deposit: string
    odstringid?: string | null
    odvalueid?: string | null
    odnameid?: string | null
    oddateinid?: string | null
    oddateoutid?: string | null
    oddepositid?: string | null
    odpayperdayid?: string | null
    odpayedid?: string | null
    okidokiactive?: number
    depositchanel?: $Enums.DepositChanel
    paymentchanel?: $Enums.PaymentChanel
    active?: $Enums.Thumbler
  }

  export type ObjectsUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    realtyid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    checkindef?: StringFieldUpdateOperationsInput | string
    checkoutdef?: StringFieldUpdateOperationsInput | string
    sspayanddeposit?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    location?: StringFieldUpdateOperationsInput | string
    maplink?: NullableStringFieldUpdateOperationsInput | string | null
    deposit?: StringFieldUpdateOperationsInput | string
    odstringid?: NullableStringFieldUpdateOperationsInput | string | null
    odvalueid?: NullableStringFieldUpdateOperationsInput | string | null
    odnameid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateinid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateoutid?: NullableStringFieldUpdateOperationsInput | string | null
    oddepositid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayperdayid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayedid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiactive?: IntFieldUpdateOperationsInput | number
    depositchanel?: EnumDepositChanelFieldUpdateOperationsInput | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFieldUpdateOperationsInput | $Enums.PaymentChanel
    active?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type ObjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    realtyid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    checkindef?: StringFieldUpdateOperationsInput | string
    checkoutdef?: StringFieldUpdateOperationsInput | string
    sspayanddeposit?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    location?: StringFieldUpdateOperationsInput | string
    maplink?: NullableStringFieldUpdateOperationsInput | string | null
    deposit?: StringFieldUpdateOperationsInput | string
    odstringid?: NullableStringFieldUpdateOperationsInput | string | null
    odvalueid?: NullableStringFieldUpdateOperationsInput | string | null
    odnameid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateinid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateoutid?: NullableStringFieldUpdateOperationsInput | string | null
    oddepositid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayperdayid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayedid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiactive?: IntFieldUpdateOperationsInput | number
    depositchanel?: EnumDepositChanelFieldUpdateOperationsInput | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFieldUpdateOperationsInput | $Enums.PaymentChanel
    active?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type ObjectPhotoCreateInput = {
    url: string
    sortOrder?: number
    objects: ObjectsCreateNestedOneWithoutPhotosInput
  }

  export type ObjectPhotoUncheckedCreateInput = {
    id?: number
    objectId: number
    url: string
    sortOrder?: number
  }

  export type ObjectPhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    objects?: ObjectsUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type ObjectPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    objectId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectPhotoCreateManyInput = {
    id?: number
    objectId: number
    url: string
    sortOrder?: number
  }

  export type ObjectPhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    objectId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookingsCreateInput = {
    status?: $Enums.BookStatus | null
    id: number
    begin_date?: string | null
    end_date?: string | null
    realty_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    amount?: number | null
    notes?: string | null
    source?: string | null
    prepayment?: number | null
    balance_to_be_paid_1?: number | null
    price_per_day?: number | null
    deposit?: number | null
    returned?: number | null
    manual_deposit?: number | null
    client_id?: number | null
    fio?: string | null
    email?: string | null
    phone?: string | null
    additional_phone?: string | null
    cabinet: number
    tochka_id_pay?: number | null
    tochka_id_deposit?: number | null
    begin_time?: string | null
    end_time?: string | null
    contract_status?: string | null
    contract_id?: string | null
    contract_link?: string | null
    maid_id?: number | null
    review?: number | null
    channel?: string | null
    deposit_payment_link?: string | null
    link: string
  }

  export type BookingsUncheckedCreateInput = {
    status?: $Enums.BookStatus | null
    id: number
    begin_date?: string | null
    end_date?: string | null
    realty_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    amount?: number | null
    notes?: string | null
    source?: string | null
    prepayment?: number | null
    balance_to_be_paid_1?: number | null
    price_per_day?: number | null
    deposit?: number | null
    returned?: number | null
    manual_deposit?: number | null
    client_id?: number | null
    fio?: string | null
    email?: string | null
    phone?: string | null
    additional_phone?: string | null
    cabinet: number
    tochka_id_pay?: number | null
    tochka_id_deposit?: number | null
    begin_time?: string | null
    end_time?: string | null
    contract_status?: string | null
    contract_id?: string | null
    contract_link?: string | null
    maid_id?: number | null
    review?: number | null
    channel?: string | null
    deposit_payment_link?: string | null
    link: string
  }

  export type BookingsUpdateInput = {
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    id?: IntFieldUpdateOperationsInput | number
    begin_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    realty_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balance_to_be_paid_1?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    returned?: NullableIntFieldUpdateOperationsInput | number | null
    manual_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additional_phone?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: IntFieldUpdateOperationsInput | number
    tochka_id_pay?: NullableIntFieldUpdateOperationsInput | number | null
    tochka_id_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    begin_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    contract_status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_link?: NullableStringFieldUpdateOperationsInput | string | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    deposit_payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUncheckedUpdateInput = {
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    id?: IntFieldUpdateOperationsInput | number
    begin_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    realty_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balance_to_be_paid_1?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    returned?: NullableIntFieldUpdateOperationsInput | number | null
    manual_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additional_phone?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: IntFieldUpdateOperationsInput | number
    tochka_id_pay?: NullableIntFieldUpdateOperationsInput | number | null
    tochka_id_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    begin_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    contract_status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_link?: NullableStringFieldUpdateOperationsInput | string | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    deposit_payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsCreateManyInput = {
    status?: $Enums.BookStatus | null
    id: number
    begin_date?: string | null
    end_date?: string | null
    realty_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    amount?: number | null
    notes?: string | null
    source?: string | null
    prepayment?: number | null
    balance_to_be_paid_1?: number | null
    price_per_day?: number | null
    deposit?: number | null
    returned?: number | null
    manual_deposit?: number | null
    client_id?: number | null
    fio?: string | null
    email?: string | null
    phone?: string | null
    additional_phone?: string | null
    cabinet: number
    tochka_id_pay?: number | null
    tochka_id_deposit?: number | null
    begin_time?: string | null
    end_time?: string | null
    contract_status?: string | null
    contract_id?: string | null
    contract_link?: string | null
    maid_id?: number | null
    review?: number | null
    channel?: string | null
    deposit_payment_link?: string | null
    link: string
  }

  export type BookingsUpdateManyMutationInput = {
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    id?: IntFieldUpdateOperationsInput | number
    begin_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    realty_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balance_to_be_paid_1?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    returned?: NullableIntFieldUpdateOperationsInput | number | null
    manual_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additional_phone?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: IntFieldUpdateOperationsInput | number
    tochka_id_pay?: NullableIntFieldUpdateOperationsInput | number | null
    tochka_id_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    begin_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    contract_status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_link?: NullableStringFieldUpdateOperationsInput | string | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    deposit_payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    id?: IntFieldUpdateOperationsInput | number
    begin_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    realty_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balance_to_be_paid_1?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    returned?: NullableIntFieldUpdateOperationsInput | number | null
    manual_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additional_phone?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: IntFieldUpdateOperationsInput | number
    tochka_id_pay?: NullableIntFieldUpdateOperationsInput | number | null
    tochka_id_deposit?: NullableIntFieldUpdateOperationsInput | number | null
    begin_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    contract_status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_link?: NullableStringFieldUpdateOperationsInput | string | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    deposit_payment_link?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
  }

  export type CleaningScheduleCreateInput = {
    cabinetid: number
    objectid: number
    date: string
    booking_id?: number | null
    maid_id?: number | null
    checkin_time?: string | null
    checkout_time?: string | null
    comment?: string | null
    included?: $Enums.Thumbler
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CleaningScheduleUncheckedCreateInput = {
    id?: number
    cabinetid: number
    objectid: number
    date: string
    booking_id?: number | null
    maid_id?: number | null
    checkin_time?: string | null
    checkout_time?: string | null
    comment?: string | null
    included?: $Enums.Thumbler
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CleaningScheduleUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    objectid?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableIntFieldUpdateOperationsInput | number | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    checkin_time?: NullableStringFieldUpdateOperationsInput | string | null
    checkout_time?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    included?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    objectid?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableIntFieldUpdateOperationsInput | number | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    checkin_time?: NullableStringFieldUpdateOperationsInput | string | null
    checkout_time?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    included?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningScheduleCreateManyInput = {
    id?: number
    cabinetid: number
    objectid: number
    date: string
    booking_id?: number | null
    maid_id?: number | null
    checkin_time?: string | null
    checkout_time?: string | null
    comment?: string | null
    included?: $Enums.Thumbler
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CleaningScheduleUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    objectid?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableIntFieldUpdateOperationsInput | number | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    checkin_time?: NullableStringFieldUpdateOperationsInput | string | null
    checkout_time?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    included?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    objectid?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableIntFieldUpdateOperationsInput | number | null
    maid_id?: NullableIntFieldUpdateOperationsInput | number | null
    checkin_time?: NullableStringFieldUpdateOperationsInput | string | null
    checkout_time?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    included?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnprocessedBookingCreateInput = {
    cabinetid: number
    bookingId: number
    action: string
    failReason: string
    failMessage?: string | null
    realtyId?: number | null
    beginDate?: string | null
    endDate?: string | null
    bookingStatus?: string | null
    source?: string | null
    amount?: number | null
    notes?: string | null
    prepayment?: number | null
    balanceToBePaid?: number | null
    pricePerDay?: number | null
    deposit?: number | null
    clientId?: number | null
    fio?: string | null
    email?: string | null
    phone?: string | null
    additionalPhone?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type UnprocessedBookingUncheckedCreateInput = {
    id?: number
    cabinetid: number
    bookingId: number
    action: string
    failReason: string
    failMessage?: string | null
    realtyId?: number | null
    beginDate?: string | null
    endDate?: string | null
    bookingStatus?: string | null
    source?: string | null
    amount?: number | null
    notes?: string | null
    prepayment?: number | null
    balanceToBePaid?: number | null
    pricePerDay?: number | null
    deposit?: number | null
    clientId?: number | null
    fio?: string | null
    email?: string | null
    phone?: string | null
    additionalPhone?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type UnprocessedBookingUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    failReason?: StringFieldUpdateOperationsInput | string
    failMessage?: NullableStringFieldUpdateOperationsInput | string | null
    realtyId?: NullableIntFieldUpdateOperationsInput | number | null
    beginDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    bookingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balanceToBePaid?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerDay?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPhone?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnprocessedBookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    failReason?: StringFieldUpdateOperationsInput | string
    failMessage?: NullableStringFieldUpdateOperationsInput | string | null
    realtyId?: NullableIntFieldUpdateOperationsInput | number | null
    beginDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    bookingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balanceToBePaid?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerDay?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPhone?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnprocessedBookingCreateManyInput = {
    id?: number
    cabinetid: number
    bookingId: number
    action: string
    failReason: string
    failMessage?: string | null
    realtyId?: number | null
    beginDate?: string | null
    endDate?: string | null
    bookingStatus?: string | null
    source?: string | null
    amount?: number | null
    notes?: string | null
    prepayment?: number | null
    balanceToBePaid?: number | null
    pricePerDay?: number | null
    deposit?: number | null
    clientId?: number | null
    fio?: string | null
    email?: string | null
    phone?: string | null
    additionalPhone?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type UnprocessedBookingUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    failReason?: StringFieldUpdateOperationsInput | string
    failMessage?: NullableStringFieldUpdateOperationsInput | string | null
    realtyId?: NullableIntFieldUpdateOperationsInput | number | null
    beginDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    bookingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balanceToBePaid?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerDay?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPhone?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnprocessedBookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    failReason?: StringFieldUpdateOperationsInput | string
    failMessage?: NullableStringFieldUpdateOperationsInput | string | null
    realtyId?: NullableIntFieldUpdateOperationsInput | number | null
    beginDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    bookingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prepayment?: NullableIntFieldUpdateOperationsInput | number | null
    balanceToBePaid?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerDay?: NullableIntFieldUpdateOperationsInput | number | null
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    fio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPhone?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BugReportCreateInput = {
    cabinetid: number
    userId: number
    message: string
    page?: string | null
    createdAt?: Date | string
  }

  export type BugReportUncheckedCreateInput = {
    id?: number
    cabinetid: number
    userId: number
    message: string
    page?: string | null
    createdAt?: Date | string
  }

  export type BugReportUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BugReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BugReportCreateManyInput = {
    id?: number
    cabinetid: number
    userId: number
    message: string
    page?: string | null
    createdAt?: Date | string
  }

  export type BugReportUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BugReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetTemplateCreateInput = {
    cabinetid: number
    name: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetTemplateUncheckedCreateInput = {
    id?: number
    cabinetid: number
    name: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetTemplateUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetTemplateCreateManyInput = {
    id?: number
    cabinetid: number
    name: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetTemplateUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    cabinetid: number
    bookingId: number
    amount: number
    type: $Enums.PaymentType
    method: $Enums.PaymentMethod
    madeBy?: string | null
    receiptUrl?: string | null
    status: $Enums.PaymentStatus
    returnedAmount?: number | null
    returnedAt?: Date | string | null
    externalId?: string | null
    link?: string | null
    linkExpiresAt?: Date | string | null
    createdAt?: Date | string
    paidAt?: Date | string | null
    tochkaStatus?: string | null
    tochkaPaymentType?: string | null
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    cabinetid: number
    bookingId: number
    amount: number
    type: $Enums.PaymentType
    method: $Enums.PaymentMethod
    madeBy?: string | null
    receiptUrl?: string | null
    status: $Enums.PaymentStatus
    returnedAmount?: number | null
    returnedAt?: Date | string | null
    externalId?: string | null
    link?: string | null
    linkExpiresAt?: Date | string | null
    createdAt?: Date | string
    paidAt?: Date | string | null
    tochkaStatus?: string | null
    tochkaPaymentType?: string | null
  }

  export type PaymentUpdateInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    returnedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tochkaStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    returnedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tochkaStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyInput = {
    id?: number
    cabinetid: number
    bookingId: number
    amount: number
    type: $Enums.PaymentType
    method: $Enums.PaymentMethod
    madeBy?: string | null
    receiptUrl?: string | null
    status: $Enums.PaymentStatus
    returnedAmount?: number | null
    returnedAt?: Date | string | null
    externalId?: string | null
    link?: string | null
    linkExpiresAt?: Date | string | null
    createdAt?: Date | string
    paidAt?: Date | string | null
    tochkaStatus?: string | null
    tochkaPaymentType?: string | null
  }

  export type PaymentUpdateManyMutationInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    returnedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tochkaStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    returnedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tochkaStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tochkaPaymentType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTemPassFilter<$PrismaModel = never> = {
    equals?: $Enums.TemPass | EnumTemPassFieldRefInput<$PrismaModel>
    in?: $Enums.TemPass[]
    notIn?: $Enums.TemPass[]
    not?: NestedEnumTemPassFilter<$PrismaModel> | $Enums.TemPass
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    tempass?: SortOrder
    name?: SortOrder
    role?: SortOrder
    cabinet?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tokenVersion?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinet?: SortOrder
    tokenVersion?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    tempass?: SortOrder
    name?: SortOrder
    role?: SortOrder
    cabinet?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tokenVersion?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    tempass?: SortOrder
    name?: SortOrder
    role?: SortOrder
    cabinet?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tokenVersion?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    cabinet?: SortOrder
    tokenVersion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTemPassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemPass | EnumTemPassFieldRefInput<$PrismaModel>
    in?: $Enums.TemPass[]
    notIn?: $Enums.TemPass[]
    not?: NestedEnumTemPassWithAggregatesFilter<$PrismaModel> | $Enums.TemPass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemPassFilter<$PrismaModel>
    _max?: NestedEnumTemPassFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTimezoneFilter<$PrismaModel = never> = {
    equals?: $Enums.Timezone | EnumTimezoneFieldRefInput<$PrismaModel>
    in?: $Enums.Timezone[]
    notIn?: $Enums.Timezone[]
    not?: NestedEnumTimezoneFilter<$PrismaModel> | $Enums.Timezone
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CabinetOrderByRelevanceInput = {
    fields: CabinetOrderByRelevanceFieldEnum | CabinetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CabinetCountOrderByAggregateInput = {
    id?: SortOrder
    Timezone?: SortOrder
    realtycalendarid?: SortOrder
    okidokiapi?: SortOrder
    okidokiwebhookkey?: SortOrder
    tochkaPhone?: SortOrder
    tochkaApiKey?: SortOrder
    tochkaMerchantId?: SortOrder
    tochkaPaymentMode?: SortOrder
    tochkaVatType?: SortOrder
    tochkaPurpose?: SortOrder
    tochkaName?: SortOrder
    tochkaPurposeDeposit?: SortOrder
    tochkaNameDeposit?: SortOrder
    tochkaCustomerCode?: SortOrder
    tochkaOrgName?: SortOrder
    tochkaTaxCode?: SortOrder
    tochkaAppClientId?: SortOrder
    tochkaWebhookKey?: SortOrder
    cleaningTemplate?: SortOrder
    approxTimeMarker?: SortOrder
    emptyStayMarker?: SortOrder
    cleaningHeader?: SortOrder
    cleaningFooter?: SortOrder
    balance?: SortOrder
  }

  export type CabinetAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type CabinetMaxOrderByAggregateInput = {
    id?: SortOrder
    Timezone?: SortOrder
    realtycalendarid?: SortOrder
    okidokiapi?: SortOrder
    okidokiwebhookkey?: SortOrder
    tochkaPhone?: SortOrder
    tochkaApiKey?: SortOrder
    tochkaMerchantId?: SortOrder
    tochkaPurpose?: SortOrder
    tochkaName?: SortOrder
    tochkaPurposeDeposit?: SortOrder
    tochkaNameDeposit?: SortOrder
    tochkaCustomerCode?: SortOrder
    tochkaOrgName?: SortOrder
    tochkaTaxCode?: SortOrder
    tochkaAppClientId?: SortOrder
    tochkaWebhookKey?: SortOrder
    cleaningTemplate?: SortOrder
    approxTimeMarker?: SortOrder
    emptyStayMarker?: SortOrder
    cleaningHeader?: SortOrder
    cleaningFooter?: SortOrder
    balance?: SortOrder
  }

  export type CabinetMinOrderByAggregateInput = {
    id?: SortOrder
    Timezone?: SortOrder
    realtycalendarid?: SortOrder
    okidokiapi?: SortOrder
    okidokiwebhookkey?: SortOrder
    tochkaPhone?: SortOrder
    tochkaApiKey?: SortOrder
    tochkaMerchantId?: SortOrder
    tochkaPurpose?: SortOrder
    tochkaName?: SortOrder
    tochkaPurposeDeposit?: SortOrder
    tochkaNameDeposit?: SortOrder
    tochkaCustomerCode?: SortOrder
    tochkaOrgName?: SortOrder
    tochkaTaxCode?: SortOrder
    tochkaAppClientId?: SortOrder
    tochkaWebhookKey?: SortOrder
    cleaningTemplate?: SortOrder
    approxTimeMarker?: SortOrder
    emptyStayMarker?: SortOrder
    cleaningHeader?: SortOrder
    cleaningFooter?: SortOrder
    balance?: SortOrder
  }

  export type CabinetSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type EnumTimezoneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Timezone | EnumTimezoneFieldRefInput<$PrismaModel>
    in?: $Enums.Timezone[]
    notIn?: $Enums.Timezone[]
    not?: NestedEnumTimezoneWithAggregatesFilter<$PrismaModel> | $Enums.Timezone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimezoneFilter<$PrismaModel>
    _max?: NestedEnumTimezoneFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumLogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LogStatus | EnumLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LogStatus[]
    notIn?: $Enums.LogStatus[]
    not?: NestedEnumLogStatusFilter<$PrismaModel> | $Enums.LogStatus
  }

  export type EnumThumblerFilter<$PrismaModel = never> = {
    equals?: $Enums.Thumbler | EnumThumblerFieldRefInput<$PrismaModel>
    in?: $Enums.Thumbler[]
    notIn?: $Enums.Thumbler[]
    not?: NestedEnumThumblerFilter<$PrismaModel> | $Enums.Thumbler
  }

  export type LogsOrderByRelevanceInput = {
    fields: LogsOrderByRelevanceFieldEnum | LogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LogsCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    date?: SortOrder
    readed?: SortOrder
  }

  export type LogsAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
  }

  export type LogsMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    date?: SortOrder
    readed?: SortOrder
  }

  export type LogsMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    date?: SortOrder
    readed?: SortOrder
  }

  export type LogsSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
  }

  export type EnumLogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogStatus | EnumLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LogStatus[]
    notIn?: $Enums.LogStatus[]
    not?: NestedEnumLogStatusWithAggregatesFilter<$PrismaModel> | $Enums.LogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogStatusFilter<$PrismaModel>
    _max?: NestedEnumLogStatusFilter<$PrismaModel>
  }

  export type EnumThumblerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Thumbler | EnumThumblerFieldRefInput<$PrismaModel>
    in?: $Enums.Thumbler[]
    notIn?: $Enums.Thumbler[]
    not?: NestedEnumThumblerWithAggregatesFilter<$PrismaModel> | $Enums.Thumbler
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThumblerFilter<$PrismaModel>
    _max?: NestedEnumThumblerFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    manageobjects?: SortOrder
    managemaids?: SortOrder
    manageintegration?: SortOrder
    managetemplates?: SortOrder
    manageautosent?: SortOrder
    seemaidsrate?: SortOrder
    managebooks?: SortOrder
    manualpaymentedit?: SortOrder
    manualdepositedit?: SortOrder
    bankpaymentedit?: SortOrder
    bankdepositedit?: SortOrder
    financesinformationpayment?: SortOrder
    financesinformationdeposit?: SortOrder
    depositamountedit?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    manageobjects?: SortOrder
    managemaids?: SortOrder
    manageintegration?: SortOrder
    managetemplates?: SortOrder
    manageautosent?: SortOrder
    seemaidsrate?: SortOrder
    managebooks?: SortOrder
    manualpaymentedit?: SortOrder
    manualdepositedit?: SortOrder
    bankpaymentedit?: SortOrder
    bankdepositedit?: SortOrder
    financesinformationpayment?: SortOrder
    financesinformationdeposit?: SortOrder
    depositamountedit?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    manageobjects?: SortOrder
    managemaids?: SortOrder
    manageintegration?: SortOrder
    managetemplates?: SortOrder
    manageautosent?: SortOrder
    seemaidsrate?: SortOrder
    managebooks?: SortOrder
    manualpaymentedit?: SortOrder
    manualdepositedit?: SortOrder
    bankpaymentedit?: SortOrder
    bankdepositedit?: SortOrder
    financesinformationpayment?: SortOrder
    financesinformationdeposit?: SortOrder
    depositamountedit?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
  }

  export type MaidsOrderByRelevanceInput = {
    fields: MaidsOrderByRelevanceFieldEnum | MaidsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaidsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    cabinetid?: SortOrder
  }

  export type MaidsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    cabinetid?: SortOrder
  }

  export type MaidsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    cabinetid?: SortOrder
  }

  export type MaidsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    cabinetid?: SortOrder
  }

  export type MaidsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    cabinetid?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumShowSettingsFilter<$PrismaModel = never> = {
    equals?: $Enums.ShowSettings | EnumShowSettingsFieldRefInput<$PrismaModel>
    in?: $Enums.ShowSettings[]
    notIn?: $Enums.ShowSettings[]
    not?: NestedEnumShowSettingsFilter<$PrismaModel> | $Enums.ShowSettings
  }

  export type EnumDepositChanelFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositChanel | EnumDepositChanelFieldRefInput<$PrismaModel>
    in?: $Enums.DepositChanel[]
    notIn?: $Enums.DepositChanel[]
    not?: NestedEnumDepositChanelFilter<$PrismaModel> | $Enums.DepositChanel
  }

  export type EnumPaymentChanelFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChanel | EnumPaymentChanelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChanel[]
    notIn?: $Enums.PaymentChanel[]
    not?: NestedEnumPaymentChanelFilter<$PrismaModel> | $Enums.PaymentChanel
  }

  export type ObjectPhotoListRelationFilter = {
    every?: ObjectPhotoWhereInput
    some?: ObjectPhotoWhereInput
    none?: ObjectPhotoWhereInput
  }

  export type ObjectPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObjectsOrderByRelevanceInput = {
    fields: ObjectsOrderByRelevanceFieldEnum | ObjectsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ObjectsCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    realtyid?: SortOrder
    name?: SortOrder
    instruction?: SortOrder
    checkindef?: SortOrder
    checkoutdef?: SortOrder
    sspayanddeposit?: SortOrder
    ssinstruction?: SortOrder
    sscontract?: SortOrder
    ssrateclean?: SortOrder
    location?: SortOrder
    maplink?: SortOrder
    deposit?: SortOrder
    odstringid?: SortOrder
    odvalueid?: SortOrder
    odnameid?: SortOrder
    oddateinid?: SortOrder
    oddateoutid?: SortOrder
    oddepositid?: SortOrder
    odpayperdayid?: SortOrder
    odpayedid?: SortOrder
    okidokiactive?: SortOrder
    depositchanel?: SortOrder
    paymentchanel?: SortOrder
    active?: SortOrder
  }

  export type ObjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    realtyid?: SortOrder
    okidokiactive?: SortOrder
  }

  export type ObjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    realtyid?: SortOrder
    name?: SortOrder
    instruction?: SortOrder
    checkindef?: SortOrder
    checkoutdef?: SortOrder
    sspayanddeposit?: SortOrder
    ssinstruction?: SortOrder
    sscontract?: SortOrder
    ssrateclean?: SortOrder
    location?: SortOrder
    maplink?: SortOrder
    deposit?: SortOrder
    odstringid?: SortOrder
    odvalueid?: SortOrder
    odnameid?: SortOrder
    oddateinid?: SortOrder
    oddateoutid?: SortOrder
    oddepositid?: SortOrder
    odpayperdayid?: SortOrder
    odpayedid?: SortOrder
    okidokiactive?: SortOrder
    depositchanel?: SortOrder
    paymentchanel?: SortOrder
    active?: SortOrder
  }

  export type ObjectsMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    realtyid?: SortOrder
    name?: SortOrder
    instruction?: SortOrder
    checkindef?: SortOrder
    checkoutdef?: SortOrder
    sspayanddeposit?: SortOrder
    ssinstruction?: SortOrder
    sscontract?: SortOrder
    ssrateclean?: SortOrder
    location?: SortOrder
    maplink?: SortOrder
    deposit?: SortOrder
    odstringid?: SortOrder
    odvalueid?: SortOrder
    odnameid?: SortOrder
    oddateinid?: SortOrder
    oddateoutid?: SortOrder
    oddepositid?: SortOrder
    odpayperdayid?: SortOrder
    odpayedid?: SortOrder
    okidokiactive?: SortOrder
    depositchanel?: SortOrder
    paymentchanel?: SortOrder
    active?: SortOrder
  }

  export type ObjectsSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    realtyid?: SortOrder
    okidokiactive?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumShowSettingsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShowSettings | EnumShowSettingsFieldRefInput<$PrismaModel>
    in?: $Enums.ShowSettings[]
    notIn?: $Enums.ShowSettings[]
    not?: NestedEnumShowSettingsWithAggregatesFilter<$PrismaModel> | $Enums.ShowSettings
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShowSettingsFilter<$PrismaModel>
    _max?: NestedEnumShowSettingsFilter<$PrismaModel>
  }

  export type EnumDepositChanelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositChanel | EnumDepositChanelFieldRefInput<$PrismaModel>
    in?: $Enums.DepositChanel[]
    notIn?: $Enums.DepositChanel[]
    not?: NestedEnumDepositChanelWithAggregatesFilter<$PrismaModel> | $Enums.DepositChanel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositChanelFilter<$PrismaModel>
    _max?: NestedEnumDepositChanelFilter<$PrismaModel>
  }

  export type EnumPaymentChanelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChanel | EnumPaymentChanelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChanel[]
    notIn?: $Enums.PaymentChanel[]
    not?: NestedEnumPaymentChanelWithAggregatesFilter<$PrismaModel> | $Enums.PaymentChanel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentChanelFilter<$PrismaModel>
    _max?: NestedEnumPaymentChanelFilter<$PrismaModel>
  }

  export type ObjectsScalarRelationFilter = {
    is?: ObjectsWhereInput
    isNot?: ObjectsWhereInput
  }

  export type ObjectPhotoOrderByRelevanceInput = {
    fields: ObjectPhotoOrderByRelevanceFieldEnum | ObjectPhotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ObjectPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    objectId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
  }

  export type ObjectPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    objectId?: SortOrder
    sortOrder?: SortOrder
  }

  export type ObjectPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    objectId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
  }

  export type ObjectPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    objectId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
  }

  export type ObjectPhotoSumOrderByAggregateInput = {
    id?: SortOrder
    objectId?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumBookStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | null
    notIn?: $Enums.BookStatus[] | null
    not?: NestedEnumBookStatusNullableFilter<$PrismaModel> | $Enums.BookStatus | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookingsOrderByRelevanceInput = {
    fields: BookingsOrderByRelevanceFieldEnum | BookingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingsCountOrderByAggregateInput = {
    status?: SortOrder
    id?: SortOrder
    begin_date?: SortOrder
    end_date?: SortOrder
    realty_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    source?: SortOrder
    prepayment?: SortOrder
    balance_to_be_paid_1?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    returned?: SortOrder
    manual_deposit?: SortOrder
    client_id?: SortOrder
    fio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    additional_phone?: SortOrder
    cabinet?: SortOrder
    tochka_id_pay?: SortOrder
    tochka_id_deposit?: SortOrder
    begin_time?: SortOrder
    end_time?: SortOrder
    contract_status?: SortOrder
    contract_id?: SortOrder
    contract_link?: SortOrder
    maid_id?: SortOrder
    review?: SortOrder
    channel?: SortOrder
    deposit_payment_link?: SortOrder
    link?: SortOrder
  }

  export type BookingsAvgOrderByAggregateInput = {
    id?: SortOrder
    realty_id?: SortOrder
    amount?: SortOrder
    prepayment?: SortOrder
    balance_to_be_paid_1?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    returned?: SortOrder
    manual_deposit?: SortOrder
    client_id?: SortOrder
    cabinet?: SortOrder
    tochka_id_pay?: SortOrder
    tochka_id_deposit?: SortOrder
    maid_id?: SortOrder
    review?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    status?: SortOrder
    id?: SortOrder
    begin_date?: SortOrder
    end_date?: SortOrder
    realty_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    source?: SortOrder
    prepayment?: SortOrder
    balance_to_be_paid_1?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    returned?: SortOrder
    manual_deposit?: SortOrder
    client_id?: SortOrder
    fio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    additional_phone?: SortOrder
    cabinet?: SortOrder
    tochka_id_pay?: SortOrder
    tochka_id_deposit?: SortOrder
    begin_time?: SortOrder
    end_time?: SortOrder
    contract_status?: SortOrder
    contract_id?: SortOrder
    contract_link?: SortOrder
    maid_id?: SortOrder
    review?: SortOrder
    channel?: SortOrder
    deposit_payment_link?: SortOrder
    link?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    status?: SortOrder
    id?: SortOrder
    begin_date?: SortOrder
    end_date?: SortOrder
    realty_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    source?: SortOrder
    prepayment?: SortOrder
    balance_to_be_paid_1?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    returned?: SortOrder
    manual_deposit?: SortOrder
    client_id?: SortOrder
    fio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    additional_phone?: SortOrder
    cabinet?: SortOrder
    tochka_id_pay?: SortOrder
    tochka_id_deposit?: SortOrder
    begin_time?: SortOrder
    end_time?: SortOrder
    contract_status?: SortOrder
    contract_id?: SortOrder
    contract_link?: SortOrder
    maid_id?: SortOrder
    review?: SortOrder
    channel?: SortOrder
    deposit_payment_link?: SortOrder
    link?: SortOrder
  }

  export type BookingsSumOrderByAggregateInput = {
    id?: SortOrder
    realty_id?: SortOrder
    amount?: SortOrder
    prepayment?: SortOrder
    balance_to_be_paid_1?: SortOrder
    price_per_day?: SortOrder
    deposit?: SortOrder
    returned?: SortOrder
    manual_deposit?: SortOrder
    client_id?: SortOrder
    cabinet?: SortOrder
    tochka_id_pay?: SortOrder
    tochka_id_deposit?: SortOrder
    maid_id?: SortOrder
    review?: SortOrder
  }

  export type EnumBookStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | null
    notIn?: $Enums.BookStatus[] | null
    not?: NestedEnumBookStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookStatusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CleaningScheduleOrderByRelevanceInput = {
    fields: CleaningScheduleOrderByRelevanceFieldEnum | CleaningScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CleaningScheduleCabinetidObjectidDateCompoundUniqueInput = {
    cabinetid: number
    objectid: number
    date: string
  }

  export type CleaningScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    objectid?: SortOrder
    date?: SortOrder
    booking_id?: SortOrder
    maid_id?: SortOrder
    checkin_time?: SortOrder
    checkout_time?: SortOrder
    comment?: SortOrder
    included?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleaningScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    objectid?: SortOrder
    booking_id?: SortOrder
    maid_id?: SortOrder
  }

  export type CleaningScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    objectid?: SortOrder
    date?: SortOrder
    booking_id?: SortOrder
    maid_id?: SortOrder
    checkin_time?: SortOrder
    checkout_time?: SortOrder
    comment?: SortOrder
    included?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleaningScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    objectid?: SortOrder
    date?: SortOrder
    booking_id?: SortOrder
    maid_id?: SortOrder
    checkin_time?: SortOrder
    checkout_time?: SortOrder
    comment?: SortOrder
    included?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleaningScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    objectid?: SortOrder
    booking_id?: SortOrder
    maid_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UnprocessedBookingOrderByRelevanceInput = {
    fields: UnprocessedBookingOrderByRelevanceFieldEnum | UnprocessedBookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UnprocessedBookingCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    failReason?: SortOrder
    failMessage?: SortOrder
    realtyId?: SortOrder
    beginDate?: SortOrder
    endDate?: SortOrder
    bookingStatus?: SortOrder
    source?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    prepayment?: SortOrder
    balanceToBePaid?: SortOrder
    pricePerDay?: SortOrder
    deposit?: SortOrder
    clientId?: SortOrder
    fio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    additionalPhone?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type UnprocessedBookingAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    realtyId?: SortOrder
    amount?: SortOrder
    prepayment?: SortOrder
    balanceToBePaid?: SortOrder
    pricePerDay?: SortOrder
    deposit?: SortOrder
    clientId?: SortOrder
  }

  export type UnprocessedBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    failReason?: SortOrder
    failMessage?: SortOrder
    realtyId?: SortOrder
    beginDate?: SortOrder
    endDate?: SortOrder
    bookingStatus?: SortOrder
    source?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    prepayment?: SortOrder
    balanceToBePaid?: SortOrder
    pricePerDay?: SortOrder
    deposit?: SortOrder
    clientId?: SortOrder
    fio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    additionalPhone?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type UnprocessedBookingMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    failReason?: SortOrder
    failMessage?: SortOrder
    realtyId?: SortOrder
    beginDate?: SortOrder
    endDate?: SortOrder
    bookingStatus?: SortOrder
    source?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    prepayment?: SortOrder
    balanceToBePaid?: SortOrder
    pricePerDay?: SortOrder
    deposit?: SortOrder
    clientId?: SortOrder
    fio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    additionalPhone?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type UnprocessedBookingSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    realtyId?: SortOrder
    amount?: SortOrder
    prepayment?: SortOrder
    balanceToBePaid?: SortOrder
    pricePerDay?: SortOrder
    deposit?: SortOrder
    clientId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BugReportOrderByRelevanceInput = {
    fields: BugReportOrderByRelevanceFieldEnum | BugReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BugReportCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    page?: SortOrder
    createdAt?: SortOrder
  }

  export type BugReportAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    userId?: SortOrder
  }

  export type BugReportMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    page?: SortOrder
    createdAt?: SortOrder
  }

  export type BugReportMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    page?: SortOrder
    createdAt?: SortOrder
  }

  export type BugReportSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    userId?: SortOrder
  }

  export type CabinetTemplateOrderByRelevanceInput = {
    fields: CabinetTemplateOrderByRelevanceFieldEnum | CabinetTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CabinetTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    name?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
  }

  export type CabinetTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    name?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    name?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    method?: SortOrder
    madeBy?: SortOrder
    receiptUrl?: SortOrder
    status?: SortOrder
    returnedAmount?: SortOrder
    returnedAt?: SortOrder
    externalId?: SortOrder
    link?: SortOrder
    linkExpiresAt?: SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrder
    tochkaStatus?: SortOrder
    tochkaPaymentType?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    returnedAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    method?: SortOrder
    madeBy?: SortOrder
    receiptUrl?: SortOrder
    status?: SortOrder
    returnedAmount?: SortOrder
    returnedAt?: SortOrder
    externalId?: SortOrder
    link?: SortOrder
    linkExpiresAt?: SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrder
    tochkaStatus?: SortOrder
    tochkaPaymentType?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    method?: SortOrder
    madeBy?: SortOrder
    receiptUrl?: SortOrder
    status?: SortOrder
    returnedAmount?: SortOrder
    returnedAt?: SortOrder
    externalId?: SortOrder
    link?: SortOrder
    linkExpiresAt?: SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrder
    tochkaStatus?: SortOrder
    tochkaPaymentType?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetid?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    returnedAmount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StaffCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTemPassFieldUpdateOperationsInput = {
    set?: $Enums.TemPass
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StaffUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type StaffUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type EnumTimezoneFieldUpdateOperationsInput = {
    set?: $Enums.Timezone
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLogStatusFieldUpdateOperationsInput = {
    set?: $Enums.LogStatus
  }

  export type EnumThumblerFieldUpdateOperationsInput = {
    set?: $Enums.Thumbler
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type ObjectPhotoCreateNestedManyWithoutObjectsInput = {
    create?: XOR<ObjectPhotoCreateWithoutObjectsInput, ObjectPhotoUncheckedCreateWithoutObjectsInput> | ObjectPhotoCreateWithoutObjectsInput[] | ObjectPhotoUncheckedCreateWithoutObjectsInput[]
    connectOrCreate?: ObjectPhotoCreateOrConnectWithoutObjectsInput | ObjectPhotoCreateOrConnectWithoutObjectsInput[]
    createMany?: ObjectPhotoCreateManyObjectsInputEnvelope
    connect?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
  }

  export type ObjectPhotoUncheckedCreateNestedManyWithoutObjectsInput = {
    create?: XOR<ObjectPhotoCreateWithoutObjectsInput, ObjectPhotoUncheckedCreateWithoutObjectsInput> | ObjectPhotoCreateWithoutObjectsInput[] | ObjectPhotoUncheckedCreateWithoutObjectsInput[]
    connectOrCreate?: ObjectPhotoCreateOrConnectWithoutObjectsInput | ObjectPhotoCreateOrConnectWithoutObjectsInput[]
    createMany?: ObjectPhotoCreateManyObjectsInputEnvelope
    connect?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumShowSettingsFieldUpdateOperationsInput = {
    set?: $Enums.ShowSettings
  }

  export type EnumDepositChanelFieldUpdateOperationsInput = {
    set?: $Enums.DepositChanel
  }

  export type EnumPaymentChanelFieldUpdateOperationsInput = {
    set?: $Enums.PaymentChanel
  }

  export type ObjectPhotoUpdateManyWithoutObjectsNestedInput = {
    create?: XOR<ObjectPhotoCreateWithoutObjectsInput, ObjectPhotoUncheckedCreateWithoutObjectsInput> | ObjectPhotoCreateWithoutObjectsInput[] | ObjectPhotoUncheckedCreateWithoutObjectsInput[]
    connectOrCreate?: ObjectPhotoCreateOrConnectWithoutObjectsInput | ObjectPhotoCreateOrConnectWithoutObjectsInput[]
    upsert?: ObjectPhotoUpsertWithWhereUniqueWithoutObjectsInput | ObjectPhotoUpsertWithWhereUniqueWithoutObjectsInput[]
    createMany?: ObjectPhotoCreateManyObjectsInputEnvelope
    set?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    disconnect?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    delete?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    connect?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    update?: ObjectPhotoUpdateWithWhereUniqueWithoutObjectsInput | ObjectPhotoUpdateWithWhereUniqueWithoutObjectsInput[]
    updateMany?: ObjectPhotoUpdateManyWithWhereWithoutObjectsInput | ObjectPhotoUpdateManyWithWhereWithoutObjectsInput[]
    deleteMany?: ObjectPhotoScalarWhereInput | ObjectPhotoScalarWhereInput[]
  }

  export type ObjectPhotoUncheckedUpdateManyWithoutObjectsNestedInput = {
    create?: XOR<ObjectPhotoCreateWithoutObjectsInput, ObjectPhotoUncheckedCreateWithoutObjectsInput> | ObjectPhotoCreateWithoutObjectsInput[] | ObjectPhotoUncheckedCreateWithoutObjectsInput[]
    connectOrCreate?: ObjectPhotoCreateOrConnectWithoutObjectsInput | ObjectPhotoCreateOrConnectWithoutObjectsInput[]
    upsert?: ObjectPhotoUpsertWithWhereUniqueWithoutObjectsInput | ObjectPhotoUpsertWithWhereUniqueWithoutObjectsInput[]
    createMany?: ObjectPhotoCreateManyObjectsInputEnvelope
    set?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    disconnect?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    delete?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    connect?: ObjectPhotoWhereUniqueInput | ObjectPhotoWhereUniqueInput[]
    update?: ObjectPhotoUpdateWithWhereUniqueWithoutObjectsInput | ObjectPhotoUpdateWithWhereUniqueWithoutObjectsInput[]
    updateMany?: ObjectPhotoUpdateManyWithWhereWithoutObjectsInput | ObjectPhotoUpdateManyWithWhereWithoutObjectsInput[]
    deleteMany?: ObjectPhotoScalarWhereInput | ObjectPhotoScalarWhereInput[]
  }

  export type ObjectsCreateNestedOneWithoutPhotosInput = {
    create?: XOR<ObjectsCreateWithoutPhotosInput, ObjectsUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ObjectsCreateOrConnectWithoutPhotosInput
    connect?: ObjectsWhereUniqueInput
  }

  export type ObjectsUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<ObjectsCreateWithoutPhotosInput, ObjectsUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ObjectsCreateOrConnectWithoutPhotosInput
    upsert?: ObjectsUpsertWithoutPhotosInput
    connect?: ObjectsWhereUniqueInput
    update?: XOR<XOR<ObjectsUpdateToOneWithWhereWithoutPhotosInput, ObjectsUpdateWithoutPhotosInput>, ObjectsUncheckedUpdateWithoutPhotosInput>
  }

  export type NullableEnumBookStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookStatus | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTemPassFilter<$PrismaModel = never> = {
    equals?: $Enums.TemPass | EnumTemPassFieldRefInput<$PrismaModel>
    in?: $Enums.TemPass[]
    notIn?: $Enums.TemPass[]
    not?: NestedEnumTemPassFilter<$PrismaModel> | $Enums.TemPass
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumTemPassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemPass | EnumTemPassFieldRefInput<$PrismaModel>
    in?: $Enums.TemPass[]
    notIn?: $Enums.TemPass[]
    not?: NestedEnumTemPassWithAggregatesFilter<$PrismaModel> | $Enums.TemPass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemPassFilter<$PrismaModel>
    _max?: NestedEnumTemPassFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTimezoneFilter<$PrismaModel = never> = {
    equals?: $Enums.Timezone | EnumTimezoneFieldRefInput<$PrismaModel>
    in?: $Enums.Timezone[]
    notIn?: $Enums.Timezone[]
    not?: NestedEnumTimezoneFilter<$PrismaModel> | $Enums.Timezone
  }

  export type NestedEnumTimezoneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Timezone | EnumTimezoneFieldRefInput<$PrismaModel>
    in?: $Enums.Timezone[]
    notIn?: $Enums.Timezone[]
    not?: NestedEnumTimezoneWithAggregatesFilter<$PrismaModel> | $Enums.Timezone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimezoneFilter<$PrismaModel>
    _max?: NestedEnumTimezoneFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumLogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LogStatus | EnumLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LogStatus[]
    notIn?: $Enums.LogStatus[]
    not?: NestedEnumLogStatusFilter<$PrismaModel> | $Enums.LogStatus
  }

  export type NestedEnumThumblerFilter<$PrismaModel = never> = {
    equals?: $Enums.Thumbler | EnumThumblerFieldRefInput<$PrismaModel>
    in?: $Enums.Thumbler[]
    notIn?: $Enums.Thumbler[]
    not?: NestedEnumThumblerFilter<$PrismaModel> | $Enums.Thumbler
  }

  export type NestedEnumLogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogStatus | EnumLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LogStatus[]
    notIn?: $Enums.LogStatus[]
    not?: NestedEnumLogStatusWithAggregatesFilter<$PrismaModel> | $Enums.LogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogStatusFilter<$PrismaModel>
    _max?: NestedEnumLogStatusFilter<$PrismaModel>
  }

  export type NestedEnumThumblerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Thumbler | EnumThumblerFieldRefInput<$PrismaModel>
    in?: $Enums.Thumbler[]
    notIn?: $Enums.Thumbler[]
    not?: NestedEnumThumblerWithAggregatesFilter<$PrismaModel> | $Enums.Thumbler
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThumblerFilter<$PrismaModel>
    _max?: NestedEnumThumblerFilter<$PrismaModel>
  }

  export type NestedEnumShowSettingsFilter<$PrismaModel = never> = {
    equals?: $Enums.ShowSettings | EnumShowSettingsFieldRefInput<$PrismaModel>
    in?: $Enums.ShowSettings[]
    notIn?: $Enums.ShowSettings[]
    not?: NestedEnumShowSettingsFilter<$PrismaModel> | $Enums.ShowSettings
  }

  export type NestedEnumDepositChanelFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositChanel | EnumDepositChanelFieldRefInput<$PrismaModel>
    in?: $Enums.DepositChanel[]
    notIn?: $Enums.DepositChanel[]
    not?: NestedEnumDepositChanelFilter<$PrismaModel> | $Enums.DepositChanel
  }

  export type NestedEnumPaymentChanelFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChanel | EnumPaymentChanelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChanel[]
    notIn?: $Enums.PaymentChanel[]
    not?: NestedEnumPaymentChanelFilter<$PrismaModel> | $Enums.PaymentChanel
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumShowSettingsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShowSettings | EnumShowSettingsFieldRefInput<$PrismaModel>
    in?: $Enums.ShowSettings[]
    notIn?: $Enums.ShowSettings[]
    not?: NestedEnumShowSettingsWithAggregatesFilter<$PrismaModel> | $Enums.ShowSettings
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShowSettingsFilter<$PrismaModel>
    _max?: NestedEnumShowSettingsFilter<$PrismaModel>
  }

  export type NestedEnumDepositChanelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositChanel | EnumDepositChanelFieldRefInput<$PrismaModel>
    in?: $Enums.DepositChanel[]
    notIn?: $Enums.DepositChanel[]
    not?: NestedEnumDepositChanelWithAggregatesFilter<$PrismaModel> | $Enums.DepositChanel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositChanelFilter<$PrismaModel>
    _max?: NestedEnumDepositChanelFilter<$PrismaModel>
  }

  export type NestedEnumPaymentChanelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChanel | EnumPaymentChanelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChanel[]
    notIn?: $Enums.PaymentChanel[]
    not?: NestedEnumPaymentChanelWithAggregatesFilter<$PrismaModel> | $Enums.PaymentChanel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentChanelFilter<$PrismaModel>
    _max?: NestedEnumPaymentChanelFilter<$PrismaModel>
  }

  export type NestedEnumBookStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | null
    notIn?: $Enums.BookStatus[] | null
    not?: NestedEnumBookStatusNullableFilter<$PrismaModel> | $Enums.BookStatus | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBookStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | null
    notIn?: $Enums.BookStatus[] | null
    not?: NestedEnumBookStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookStatusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StaffCreateWithoutUserInput = {
    cabinetid: number
    manageobjects?: $Enums.Thumbler
    managemaids?: $Enums.Thumbler
    manageintegration?: $Enums.Thumbler
    managetemplates?: $Enums.Thumbler
    manageautosent?: $Enums.Thumbler
    seemaidsrate?: $Enums.Thumbler
    managebooks?: $Enums.Thumbler
    manualpaymentedit?: $Enums.Thumbler
    manualdepositedit?: $Enums.Thumbler
    bankpaymentedit?: $Enums.Thumbler
    bankdepositedit?: $Enums.Thumbler
    financesinformationpayment?: $Enums.Thumbler
    financesinformationdeposit?: $Enums.Thumbler
    depositamountedit?: $Enums.Thumbler
  }

  export type StaffUncheckedCreateWithoutUserInput = {
    cabinetid: number
    manageobjects?: $Enums.Thumbler
    managemaids?: $Enums.Thumbler
    manageintegration?: $Enums.Thumbler
    managetemplates?: $Enums.Thumbler
    manageautosent?: $Enums.Thumbler
    seemaidsrate?: $Enums.Thumbler
    managebooks?: $Enums.Thumbler
    manualpaymentedit?: $Enums.Thumbler
    manualdepositedit?: $Enums.Thumbler
    bankpaymentedit?: $Enums.Thumbler
    bankdepositedit?: $Enums.Thumbler
    financesinformationpayment?: $Enums.Thumbler
    financesinformationdeposit?: $Enums.Thumbler
    depositamountedit?: $Enums.Thumbler
  }

  export type StaffCreateOrConnectWithoutUserInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
  }

  export type StaffUpsertWithoutUserInput = {
    update: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutUserInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
  }

  export type StaffUpdateWithoutUserInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    manageobjects?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managemaids?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageintegration?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managetemplates?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageautosent?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managebooks?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    depositamountedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type StaffUncheckedUpdateWithoutUserInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    manageobjects?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managemaids?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageintegration?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managetemplates?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manageautosent?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    seemaidsrate?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    managebooks?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    manualdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankpaymentedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    bankdepositedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationpayment?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    financesinformationdeposit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
    depositamountedit?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type UserCreateWithoutStaffInput = {
    login: string
    password: string
    tempass?: $Enums.TemPass
    name?: string | null
    role: $Enums.Role
    cabinet: number
    status?: $Enums.Status
    createdAt?: Date | string
    tokenVersion?: number
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    id?: number
    login: string
    password: string
    tempass?: $Enums.TemPass
    name?: string | null
    role: $Enums.Role
    cabinet: number
    status?: $Enums.Status
    createdAt?: Date | string
    tokenVersion?: number
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tempass?: EnumTemPassFieldUpdateOperationsInput | $Enums.TemPass
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cabinet?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tempass?: EnumTemPassFieldUpdateOperationsInput | $Enums.TemPass
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cabinet?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectPhotoCreateWithoutObjectsInput = {
    url: string
    sortOrder?: number
  }

  export type ObjectPhotoUncheckedCreateWithoutObjectsInput = {
    id?: number
    url: string
    sortOrder?: number
  }

  export type ObjectPhotoCreateOrConnectWithoutObjectsInput = {
    where: ObjectPhotoWhereUniqueInput
    create: XOR<ObjectPhotoCreateWithoutObjectsInput, ObjectPhotoUncheckedCreateWithoutObjectsInput>
  }

  export type ObjectPhotoCreateManyObjectsInputEnvelope = {
    data: ObjectPhotoCreateManyObjectsInput | ObjectPhotoCreateManyObjectsInput[]
    skipDuplicates?: boolean
  }

  export type ObjectPhotoUpsertWithWhereUniqueWithoutObjectsInput = {
    where: ObjectPhotoWhereUniqueInput
    update: XOR<ObjectPhotoUpdateWithoutObjectsInput, ObjectPhotoUncheckedUpdateWithoutObjectsInput>
    create: XOR<ObjectPhotoCreateWithoutObjectsInput, ObjectPhotoUncheckedCreateWithoutObjectsInput>
  }

  export type ObjectPhotoUpdateWithWhereUniqueWithoutObjectsInput = {
    where: ObjectPhotoWhereUniqueInput
    data: XOR<ObjectPhotoUpdateWithoutObjectsInput, ObjectPhotoUncheckedUpdateWithoutObjectsInput>
  }

  export type ObjectPhotoUpdateManyWithWhereWithoutObjectsInput = {
    where: ObjectPhotoScalarWhereInput
    data: XOR<ObjectPhotoUpdateManyMutationInput, ObjectPhotoUncheckedUpdateManyWithoutObjectsInput>
  }

  export type ObjectPhotoScalarWhereInput = {
    AND?: ObjectPhotoScalarWhereInput | ObjectPhotoScalarWhereInput[]
    OR?: ObjectPhotoScalarWhereInput[]
    NOT?: ObjectPhotoScalarWhereInput | ObjectPhotoScalarWhereInput[]
    id?: IntFilter<"ObjectPhoto"> | number
    objectId?: IntFilter<"ObjectPhoto"> | number
    url?: StringFilter<"ObjectPhoto"> | string
    sortOrder?: IntFilter<"ObjectPhoto"> | number
  }

  export type ObjectsCreateWithoutPhotosInput = {
    cabinetid: number
    realtyid?: number | null
    name: string
    instruction: string
    checkindef: string
    checkoutdef: string
    sspayanddeposit: $Enums.ShowSettings
    ssinstruction: $Enums.ShowSettings
    sscontract: $Enums.ShowSettings
    ssrateclean: $Enums.ShowSettings
    location: string
    maplink?: string | null
    deposit: string
    odstringid?: string | null
    odvalueid?: string | null
    odnameid?: string | null
    oddateinid?: string | null
    oddateoutid?: string | null
    oddepositid?: string | null
    odpayperdayid?: string | null
    odpayedid?: string | null
    okidokiactive?: number
    depositchanel?: $Enums.DepositChanel
    paymentchanel?: $Enums.PaymentChanel
    active?: $Enums.Thumbler
  }

  export type ObjectsUncheckedCreateWithoutPhotosInput = {
    id?: number
    cabinetid: number
    realtyid?: number | null
    name: string
    instruction: string
    checkindef: string
    checkoutdef: string
    sspayanddeposit: $Enums.ShowSettings
    ssinstruction: $Enums.ShowSettings
    sscontract: $Enums.ShowSettings
    ssrateclean: $Enums.ShowSettings
    location: string
    maplink?: string | null
    deposit: string
    odstringid?: string | null
    odvalueid?: string | null
    odnameid?: string | null
    oddateinid?: string | null
    oddateoutid?: string | null
    oddepositid?: string | null
    odpayperdayid?: string | null
    odpayedid?: string | null
    okidokiactive?: number
    depositchanel?: $Enums.DepositChanel
    paymentchanel?: $Enums.PaymentChanel
    active?: $Enums.Thumbler
  }

  export type ObjectsCreateOrConnectWithoutPhotosInput = {
    where: ObjectsWhereUniqueInput
    create: XOR<ObjectsCreateWithoutPhotosInput, ObjectsUncheckedCreateWithoutPhotosInput>
  }

  export type ObjectsUpsertWithoutPhotosInput = {
    update: XOR<ObjectsUpdateWithoutPhotosInput, ObjectsUncheckedUpdateWithoutPhotosInput>
    create: XOR<ObjectsCreateWithoutPhotosInput, ObjectsUncheckedCreateWithoutPhotosInput>
    where?: ObjectsWhereInput
  }

  export type ObjectsUpdateToOneWithWhereWithoutPhotosInput = {
    where?: ObjectsWhereInput
    data: XOR<ObjectsUpdateWithoutPhotosInput, ObjectsUncheckedUpdateWithoutPhotosInput>
  }

  export type ObjectsUpdateWithoutPhotosInput = {
    cabinetid?: IntFieldUpdateOperationsInput | number
    realtyid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    checkindef?: StringFieldUpdateOperationsInput | string
    checkoutdef?: StringFieldUpdateOperationsInput | string
    sspayanddeposit?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    location?: StringFieldUpdateOperationsInput | string
    maplink?: NullableStringFieldUpdateOperationsInput | string | null
    deposit?: StringFieldUpdateOperationsInput | string
    odstringid?: NullableStringFieldUpdateOperationsInput | string | null
    odvalueid?: NullableStringFieldUpdateOperationsInput | string | null
    odnameid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateinid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateoutid?: NullableStringFieldUpdateOperationsInput | string | null
    oddepositid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayperdayid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayedid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiactive?: IntFieldUpdateOperationsInput | number
    depositchanel?: EnumDepositChanelFieldUpdateOperationsInput | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFieldUpdateOperationsInput | $Enums.PaymentChanel
    active?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type ObjectsUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetid?: IntFieldUpdateOperationsInput | number
    realtyid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    checkindef?: StringFieldUpdateOperationsInput | string
    checkoutdef?: StringFieldUpdateOperationsInput | string
    sspayanddeposit?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssinstruction?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    sscontract?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    ssrateclean?: EnumShowSettingsFieldUpdateOperationsInput | $Enums.ShowSettings
    location?: StringFieldUpdateOperationsInput | string
    maplink?: NullableStringFieldUpdateOperationsInput | string | null
    deposit?: StringFieldUpdateOperationsInput | string
    odstringid?: NullableStringFieldUpdateOperationsInput | string | null
    odvalueid?: NullableStringFieldUpdateOperationsInput | string | null
    odnameid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateinid?: NullableStringFieldUpdateOperationsInput | string | null
    oddateoutid?: NullableStringFieldUpdateOperationsInput | string | null
    oddepositid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayperdayid?: NullableStringFieldUpdateOperationsInput | string | null
    odpayedid?: NullableStringFieldUpdateOperationsInput | string | null
    okidokiactive?: IntFieldUpdateOperationsInput | number
    depositchanel?: EnumDepositChanelFieldUpdateOperationsInput | $Enums.DepositChanel
    paymentchanel?: EnumPaymentChanelFieldUpdateOperationsInput | $Enums.PaymentChanel
    active?: EnumThumblerFieldUpdateOperationsInput | $Enums.Thumbler
  }

  export type ObjectPhotoCreateManyObjectsInput = {
    id?: number
    url: string
    sortOrder?: number
  }

  export type ObjectPhotoUpdateWithoutObjectsInput = {
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectPhotoUncheckedUpdateWithoutObjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectPhotoUncheckedUpdateManyWithoutObjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}