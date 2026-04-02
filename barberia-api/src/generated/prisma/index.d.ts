
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Barbero
 * 
 */
export type Barbero = $Result.DefaultSelection<Prisma.$BarberoPayload>
/**
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model Horario
 * 
 */
export type Horario = $Result.DefaultSelection<Prisma.$HorarioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.barbero`: Exposes CRUD operations for the **Barbero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barberos
    * const barberos = await prisma.barbero.findMany()
    * ```
    */
  get barbero(): Prisma.BarberoDelegate<ExtArgs>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs>;

  /**
   * `prisma.horario`: Exposes CRUD operations for the **Horario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horario.findMany()
    * ```
    */
  get horario(): Prisma.HorarioDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Barbero: 'Barbero',
    Servicio: 'Servicio',
    Reserva: 'Reserva',
    Horario: 'Horario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "barbero" | "servicio" | "reserva" | "horario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Barbero: {
        payload: Prisma.$BarberoPayload<ExtArgs>
        fields: Prisma.BarberoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarberoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarberoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload>
          }
          findFirst: {
            args: Prisma.BarberoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarberoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload>
          }
          findMany: {
            args: Prisma.BarberoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload>[]
          }
          create: {
            args: Prisma.BarberoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload>
          }
          createMany: {
            args: Prisma.BarberoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BarberoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload>
          }
          update: {
            args: Prisma.BarberoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload>
          }
          deleteMany: {
            args: Prisma.BarberoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarberoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BarberoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberoPayload>
          }
          aggregate: {
            args: Prisma.BarberoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbero>
          }
          groupBy: {
            args: Prisma.BarberoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarberoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarberoCountArgs<ExtArgs>
            result: $Utils.Optional<BarberoCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      Horario: {
        payload: Prisma.$HorarioPayload<ExtArgs>
        fields: Prisma.HorarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          findFirst: {
            args: Prisma.HorarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          findMany: {
            args: Prisma.HorarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>[]
          }
          create: {
            args: Prisma.HorarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          createMany: {
            args: Prisma.HorarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HorarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          update: {
            args: Prisma.HorarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          deleteMany: {
            args: Prisma.HorarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HorarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          aggregate: {
            args: Prisma.HorarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorario>
          }
          groupBy: {
            args: Prisma.HorarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    reservas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | UsuarioCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type BarberoCountOutputType
   */

  export type BarberoCountOutputType = {
    reservas: number
    horarios: number
  }

  export type BarberoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | BarberoCountOutputTypeCountReservasArgs
    horarios?: boolean | BarberoCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * BarberoCountOutputType without action
   */
  export type BarberoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberoCountOutputType
     */
    select?: BarberoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarberoCountOutputType without action
   */
  export type BarberoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * BarberoCountOutputType without action
   */
  export type BarberoCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    reservas: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | ServicioCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: string | null
    telefono: string | null
    foto_url: string | null
    fecha_nacimiento: Date | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: string | null
    telefono: string | null
    foto_url: string | null
    fecha_nacimiento: Date | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    rol: number
    telefono: number
    foto_url: number
    fecha_nacimiento: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    telefono?: true
    foto_url?: true
    fecha_nacimiento?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    telefono?: true
    foto_url?: true
    fecha_nacimiento?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    telefono?: true
    foto_url?: true
    fecha_nacimiento?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    rol: string
    telefono: string | null
    foto_url: string | null
    fecha_nacimiento: Date | null
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    telefono?: boolean
    foto_url?: boolean
    fecha_nacimiento?: boolean
    createdAt?: boolean
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>


  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    telefono?: boolean
    foto_url?: boolean
    fecha_nacimiento?: boolean
    createdAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
      rol: string
      telefono: string | null
      foto_url: string | null
      fecha_nacimiento: Date | null
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Usuario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly foto_url: FieldRef<"Usuario", 'String'>
    readonly fecha_nacimiento: FieldRef<"Usuario", 'DateTime'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.reservas
   */
  export type Usuario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Barbero
   */

  export type AggregateBarbero = {
    _count: BarberoCountAggregateOutputType | null
    _avg: BarberoAvgAggregateOutputType | null
    _sum: BarberoSumAggregateOutputType | null
    _min: BarberoMinAggregateOutputType | null
    _max: BarberoMaxAggregateOutputType | null
  }

  export type BarberoAvgAggregateOutputType = {
    id: number | null
  }

  export type BarberoSumAggregateOutputType = {
    id: number | null
  }

  export type BarberoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    especialidad: string | null
    foto: string | null
  }

  export type BarberoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    especialidad: string | null
    foto: string | null
  }

  export type BarberoCountAggregateOutputType = {
    id: number
    nombre: number
    especialidad: number
    foto: number
    _all: number
  }


  export type BarberoAvgAggregateInputType = {
    id?: true
  }

  export type BarberoSumAggregateInputType = {
    id?: true
  }

  export type BarberoMinAggregateInputType = {
    id?: true
    nombre?: true
    especialidad?: true
    foto?: true
  }

  export type BarberoMaxAggregateInputType = {
    id?: true
    nombre?: true
    especialidad?: true
    foto?: true
  }

  export type BarberoCountAggregateInputType = {
    id?: true
    nombre?: true
    especialidad?: true
    foto?: true
    _all?: true
  }

  export type BarberoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbero to aggregate.
     */
    where?: BarberoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barberos to fetch.
     */
    orderBy?: BarberoOrderByWithRelationInput | BarberoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarberoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barberos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barberos
    **/
    _count?: true | BarberoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarberoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarberoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarberoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarberoMaxAggregateInputType
  }

  export type GetBarberoAggregateType<T extends BarberoAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbero[P]>
      : GetScalarType<T[P], AggregateBarbero[P]>
  }




  export type BarberoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberoWhereInput
    orderBy?: BarberoOrderByWithAggregationInput | BarberoOrderByWithAggregationInput[]
    by: BarberoScalarFieldEnum[] | BarberoScalarFieldEnum
    having?: BarberoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarberoCountAggregateInputType | true
    _avg?: BarberoAvgAggregateInputType
    _sum?: BarberoSumAggregateInputType
    _min?: BarberoMinAggregateInputType
    _max?: BarberoMaxAggregateInputType
  }

  export type BarberoGroupByOutputType = {
    id: number
    nombre: string
    especialidad: string
    foto: string | null
    _count: BarberoCountAggregateOutputType | null
    _avg: BarberoAvgAggregateOutputType | null
    _sum: BarberoSumAggregateOutputType | null
    _min: BarberoMinAggregateOutputType | null
    _max: BarberoMaxAggregateOutputType | null
  }

  type GetBarberoGroupByPayload<T extends BarberoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarberoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarberoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarberoGroupByOutputType[P]>
            : GetScalarType<T[P], BarberoGroupByOutputType[P]>
        }
      >
    >


  export type BarberoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especialidad?: boolean
    foto?: boolean
    reservas?: boolean | Barbero$reservasArgs<ExtArgs>
    horarios?: boolean | Barbero$horariosArgs<ExtArgs>
    _count?: boolean | BarberoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbero"]>


  export type BarberoSelectScalar = {
    id?: boolean
    nombre?: boolean
    especialidad?: boolean
    foto?: boolean
  }

  export type BarberoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Barbero$reservasArgs<ExtArgs>
    horarios?: boolean | Barbero$horariosArgs<ExtArgs>
    _count?: boolean | BarberoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BarberoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barbero"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      horarios: Prisma.$HorarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      especialidad: string
      foto: string | null
    }, ExtArgs["result"]["barbero"]>
    composites: {}
  }

  type BarberoGetPayload<S extends boolean | null | undefined | BarberoDefaultArgs> = $Result.GetResult<Prisma.$BarberoPayload, S>

  type BarberoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarberoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarberoCountAggregateInputType | true
    }

  export interface BarberoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barbero'], meta: { name: 'Barbero' } }
    /**
     * Find zero or one Barbero that matches the filter.
     * @param {BarberoFindUniqueArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarberoFindUniqueArgs>(args: SelectSubset<T, BarberoFindUniqueArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Barbero that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BarberoFindUniqueOrThrowArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarberoFindUniqueOrThrowArgs>(args: SelectSubset<T, BarberoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Barbero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoFindFirstArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarberoFindFirstArgs>(args?: SelectSubset<T, BarberoFindFirstArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Barbero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoFindFirstOrThrowArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarberoFindFirstOrThrowArgs>(args?: SelectSubset<T, BarberoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Barberos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barberos
     * const barberos = await prisma.barbero.findMany()
     * 
     * // Get first 10 Barberos
     * const barberos = await prisma.barbero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barberoWithIdOnly = await prisma.barbero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarberoFindManyArgs>(args?: SelectSubset<T, BarberoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Barbero.
     * @param {BarberoCreateArgs} args - Arguments to create a Barbero.
     * @example
     * // Create one Barbero
     * const Barbero = await prisma.barbero.create({
     *   data: {
     *     // ... data to create a Barbero
     *   }
     * })
     * 
     */
    create<T extends BarberoCreateArgs>(args: SelectSubset<T, BarberoCreateArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Barberos.
     * @param {BarberoCreateManyArgs} args - Arguments to create many Barberos.
     * @example
     * // Create many Barberos
     * const barbero = await prisma.barbero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarberoCreateManyArgs>(args?: SelectSubset<T, BarberoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Barbero.
     * @param {BarberoDeleteArgs} args - Arguments to delete one Barbero.
     * @example
     * // Delete one Barbero
     * const Barbero = await prisma.barbero.delete({
     *   where: {
     *     // ... filter to delete one Barbero
     *   }
     * })
     * 
     */
    delete<T extends BarberoDeleteArgs>(args: SelectSubset<T, BarberoDeleteArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Barbero.
     * @param {BarberoUpdateArgs} args - Arguments to update one Barbero.
     * @example
     * // Update one Barbero
     * const barbero = await prisma.barbero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarberoUpdateArgs>(args: SelectSubset<T, BarberoUpdateArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Barberos.
     * @param {BarberoDeleteManyArgs} args - Arguments to filter Barberos to delete.
     * @example
     * // Delete a few Barberos
     * const { count } = await prisma.barbero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarberoDeleteManyArgs>(args?: SelectSubset<T, BarberoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barberos
     * const barbero = await prisma.barbero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarberoUpdateManyArgs>(args: SelectSubset<T, BarberoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Barbero.
     * @param {BarberoUpsertArgs} args - Arguments to update or create a Barbero.
     * @example
     * // Update or create a Barbero
     * const barbero = await prisma.barbero.upsert({
     *   create: {
     *     // ... data to create a Barbero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barbero we want to update
     *   }
     * })
     */
    upsert<T extends BarberoUpsertArgs>(args: SelectSubset<T, BarberoUpsertArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Barberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoCountArgs} args - Arguments to filter Barberos to count.
     * @example
     * // Count the number of Barberos
     * const count = await prisma.barbero.count({
     *   where: {
     *     // ... the filter for the Barberos we want to count
     *   }
     * })
    **/
    count<T extends BarberoCountArgs>(
      args?: Subset<T, BarberoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarberoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarberoAggregateArgs>(args: Subset<T, BarberoAggregateArgs>): Prisma.PrismaPromise<GetBarberoAggregateType<T>>

    /**
     * Group by Barbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoGroupByArgs} args - Group by arguments.
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
      T extends BarberoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarberoGroupByArgs['orderBy'] }
        : { orderBy?: BarberoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarberoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barbero model
   */
  readonly fields: BarberoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barbero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarberoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Barbero$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Barbero$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany"> | Null>
    horarios<T extends Barbero$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Barbero$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Barbero model
   */ 
  interface BarberoFieldRefs {
    readonly id: FieldRef<"Barbero", 'Int'>
    readonly nombre: FieldRef<"Barbero", 'String'>
    readonly especialidad: FieldRef<"Barbero", 'String'>
    readonly foto: FieldRef<"Barbero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Barbero findUnique
   */
  export type BarberoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * Filter, which Barbero to fetch.
     */
    where: BarberoWhereUniqueInput
  }

  /**
   * Barbero findUniqueOrThrow
   */
  export type BarberoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * Filter, which Barbero to fetch.
     */
    where: BarberoWhereUniqueInput
  }

  /**
   * Barbero findFirst
   */
  export type BarberoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * Filter, which Barbero to fetch.
     */
    where?: BarberoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barberos to fetch.
     */
    orderBy?: BarberoOrderByWithRelationInput | BarberoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barberos.
     */
    cursor?: BarberoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barberos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barberos.
     */
    distinct?: BarberoScalarFieldEnum | BarberoScalarFieldEnum[]
  }

  /**
   * Barbero findFirstOrThrow
   */
  export type BarberoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * Filter, which Barbero to fetch.
     */
    where?: BarberoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barberos to fetch.
     */
    orderBy?: BarberoOrderByWithRelationInput | BarberoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barberos.
     */
    cursor?: BarberoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barberos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barberos.
     */
    distinct?: BarberoScalarFieldEnum | BarberoScalarFieldEnum[]
  }

  /**
   * Barbero findMany
   */
  export type BarberoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * Filter, which Barberos to fetch.
     */
    where?: BarberoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barberos to fetch.
     */
    orderBy?: BarberoOrderByWithRelationInput | BarberoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barberos.
     */
    cursor?: BarberoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barberos.
     */
    skip?: number
    distinct?: BarberoScalarFieldEnum | BarberoScalarFieldEnum[]
  }

  /**
   * Barbero create
   */
  export type BarberoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * The data needed to create a Barbero.
     */
    data: XOR<BarberoCreateInput, BarberoUncheckedCreateInput>
  }

  /**
   * Barbero createMany
   */
  export type BarberoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barberos.
     */
    data: BarberoCreateManyInput | BarberoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbero update
   */
  export type BarberoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * The data needed to update a Barbero.
     */
    data: XOR<BarberoUpdateInput, BarberoUncheckedUpdateInput>
    /**
     * Choose, which Barbero to update.
     */
    where: BarberoWhereUniqueInput
  }

  /**
   * Barbero updateMany
   */
  export type BarberoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barberos.
     */
    data: XOR<BarberoUpdateManyMutationInput, BarberoUncheckedUpdateManyInput>
    /**
     * Filter which Barberos to update
     */
    where?: BarberoWhereInput
  }

  /**
   * Barbero upsert
   */
  export type BarberoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * The filter to search for the Barbero to update in case it exists.
     */
    where: BarberoWhereUniqueInput
    /**
     * In case the Barbero found by the `where` argument doesn't exist, create a new Barbero with this data.
     */
    create: XOR<BarberoCreateInput, BarberoUncheckedCreateInput>
    /**
     * In case the Barbero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarberoUpdateInput, BarberoUncheckedUpdateInput>
  }

  /**
   * Barbero delete
   */
  export type BarberoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
    /**
     * Filter which Barbero to delete.
     */
    where: BarberoWhereUniqueInput
  }

  /**
   * Barbero deleteMany
   */
  export type BarberoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barberos to delete
     */
    where?: BarberoWhereInput
  }

  /**
   * Barbero.reservas
   */
  export type Barbero$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Barbero.horarios
   */
  export type Barbero$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    cursor?: HorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Barbero without action
   */
  export type BarberoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: BarberoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberoInclude<ExtArgs> | null
  }


  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    duracion_minutos: number | null
  }

  export type ServicioSumAggregateOutputType = {
    id: number | null
    precio: number | null
    duracion_minutos: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    duracion_minutos: number | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    duracion_minutos: number | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    duracion_minutos: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id?: true
    precio?: true
    duracion_minutos?: true
  }

  export type ServicioSumAggregateInputType = {
    id?: true
    precio?: true
    duracion_minutos?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    duracion_minutos?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    duracion_minutos?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    duracion_minutos?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    duracion_minutos: number
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    duracion_minutos?: boolean
    reservas?: boolean | Servicio$reservasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>


  export type ServicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    duracion_minutos?: boolean
  }

  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Servicio$reservasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      duracion_minutos: number
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
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
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Servicio$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Servicio model
   */ 
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'Int'>
    readonly nombre: FieldRef<"Servicio", 'String'>
    readonly precio: FieldRef<"Servicio", 'Float'>
    readonly duracion_minutos: FieldRef<"Servicio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
  }

  /**
   * Servicio.reservas
   */
  export type Servicio$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    barberoId: number | null
    servicioId: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    barberoId: number | null
    servicioId: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    barberoId: number | null
    servicioId: number | null
    fecha: Date | null
    estado: string | null
    createdAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    barberoId: number | null
    servicioId: number | null
    fecha: Date | null
    estado: string | null
    createdAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    usuarioId: number
    barberoId: number
    servicioId: number
    fecha: number
    estado: number
    createdAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    barberoId?: true
    servicioId?: true
  }

  export type ReservaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    barberoId?: true
    servicioId?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    barberoId?: true
    servicioId?: true
    fecha?: true
    estado?: true
    createdAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    barberoId?: true
    servicioId?: true
    fecha?: true
    estado?: true
    createdAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    barberoId?: true
    servicioId?: true
    fecha?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: number
    usuarioId: number
    barberoId: number
    servicioId: number
    fecha: Date
    estado: string
    createdAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    barberoId?: boolean
    servicioId?: boolean
    fecha?: boolean
    estado?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    barbero?: boolean | BarberoDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>


  export type ReservaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    barberoId?: boolean
    servicioId?: boolean
    fecha?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    barbero?: boolean | BarberoDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      barbero: Prisma.$BarberoPayload<ExtArgs>
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      barberoId: number
      servicioId: number
      fecha: Date
      estado: string
      createdAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
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
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    barbero<T extends BarberoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarberoDefaultArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reserva model
   */ 
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'Int'>
    readonly usuarioId: FieldRef<"Reserva", 'Int'>
    readonly barberoId: FieldRef<"Reserva", 'Int'>
    readonly servicioId: FieldRef<"Reserva", 'Int'>
    readonly fecha: FieldRef<"Reserva", 'DateTime'>
    readonly estado: FieldRef<"Reserva", 'String'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model Horario
   */

  export type AggregateHorario = {
    _count: HorarioCountAggregateOutputType | null
    _avg: HorarioAvgAggregateOutputType | null
    _sum: HorarioSumAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  export type HorarioAvgAggregateOutputType = {
    id: number | null
    barberoId: number | null
    dia_semana: number | null
  }

  export type HorarioSumAggregateOutputType = {
    id: number | null
    barberoId: number | null
    dia_semana: number | null
  }

  export type HorarioMinAggregateOutputType = {
    id: number | null
    barberoId: number | null
    dia_semana: number | null
    hora_inicio: string | null
    hora_fin: string | null
  }

  export type HorarioMaxAggregateOutputType = {
    id: number | null
    barberoId: number | null
    dia_semana: number | null
    hora_inicio: string | null
    hora_fin: string | null
  }

  export type HorarioCountAggregateOutputType = {
    id: number
    barberoId: number
    dia_semana: number
    hora_inicio: number
    hora_fin: number
    _all: number
  }


  export type HorarioAvgAggregateInputType = {
    id?: true
    barberoId?: true
    dia_semana?: true
  }

  export type HorarioSumAggregateInputType = {
    id?: true
    barberoId?: true
    dia_semana?: true
  }

  export type HorarioMinAggregateInputType = {
    id?: true
    barberoId?: true
    dia_semana?: true
    hora_inicio?: true
    hora_fin?: true
  }

  export type HorarioMaxAggregateInputType = {
    id?: true
    barberoId?: true
    dia_semana?: true
    hora_inicio?: true
    hora_fin?: true
  }

  export type HorarioCountAggregateInputType = {
    id?: true
    barberoId?: true
    dia_semana?: true
    hora_inicio?: true
    hora_fin?: true
    _all?: true
  }

  export type HorarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horario to aggregate.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Horarios
    **/
    _count?: true | HorarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioMaxAggregateInputType
  }

  export type GetHorarioAggregateType<T extends HorarioAggregateArgs> = {
        [P in keyof T & keyof AggregateHorario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorario[P]>
      : GetScalarType<T[P], AggregateHorario[P]>
  }




  export type HorarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithAggregationInput | HorarioOrderByWithAggregationInput[]
    by: HorarioScalarFieldEnum[] | HorarioScalarFieldEnum
    having?: HorarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioCountAggregateInputType | true
    _avg?: HorarioAvgAggregateInputType
    _sum?: HorarioSumAggregateInputType
    _min?: HorarioMinAggregateInputType
    _max?: HorarioMaxAggregateInputType
  }

  export type HorarioGroupByOutputType = {
    id: number
    barberoId: number
    dia_semana: number
    hora_inicio: string
    hora_fin: string
    _count: HorarioCountAggregateOutputType | null
    _avg: HorarioAvgAggregateOutputType | null
    _sum: HorarioSumAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  type GetHorarioGroupByPayload<T extends HorarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioGroupByOutputType[P]>
        }
      >
    >


  export type HorarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barberoId?: boolean
    dia_semana?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
    barbero?: boolean | BarberoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>


  export type HorarioSelectScalar = {
    id?: boolean
    barberoId?: boolean
    dia_semana?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
  }

  export type HorarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbero?: boolean | BarberoDefaultArgs<ExtArgs>
  }

  export type $HorarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Horario"
    objects: {
      barbero: Prisma.$BarberoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      barberoId: number
      dia_semana: number
      hora_inicio: string
      hora_fin: string
    }, ExtArgs["result"]["horario"]>
    composites: {}
  }

  type HorarioGetPayload<S extends boolean | null | undefined | HorarioDefaultArgs> = $Result.GetResult<Prisma.$HorarioPayload, S>

  type HorarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HorarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HorarioCountAggregateInputType | true
    }

  export interface HorarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Horario'], meta: { name: 'Horario' } }
    /**
     * Find zero or one Horario that matches the filter.
     * @param {HorarioFindUniqueArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioFindUniqueArgs>(args: SelectSubset<T, HorarioFindUniqueArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Horario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HorarioFindUniqueOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Horario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindFirstArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioFindFirstArgs>(args?: SelectSubset<T, HorarioFindFirstArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Horario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindFirstOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horario.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioWithIdOnly = await prisma.horario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioFindManyArgs>(args?: SelectSubset<T, HorarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Horario.
     * @param {HorarioCreateArgs} args - Arguments to create a Horario.
     * @example
     * // Create one Horario
     * const Horario = await prisma.horario.create({
     *   data: {
     *     // ... data to create a Horario
     *   }
     * })
     * 
     */
    create<T extends HorarioCreateArgs>(args: SelectSubset<T, HorarioCreateArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Horarios.
     * @param {HorarioCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horario = await prisma.horario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioCreateManyArgs>(args?: SelectSubset<T, HorarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Horario.
     * @param {HorarioDeleteArgs} args - Arguments to delete one Horario.
     * @example
     * // Delete one Horario
     * const Horario = await prisma.horario.delete({
     *   where: {
     *     // ... filter to delete one Horario
     *   }
     * })
     * 
     */
    delete<T extends HorarioDeleteArgs>(args: SelectSubset<T, HorarioDeleteArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Horario.
     * @param {HorarioUpdateArgs} args - Arguments to update one Horario.
     * @example
     * // Update one Horario
     * const horario = await prisma.horario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioUpdateArgs>(args: SelectSubset<T, HorarioUpdateArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Horarios.
     * @param {HorarioDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioDeleteManyArgs>(args?: SelectSubset<T, HorarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horario = await prisma.horario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioUpdateManyArgs>(args: SelectSubset<T, HorarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Horario.
     * @param {HorarioUpsertArgs} args - Arguments to update or create a Horario.
     * @example
     * // Update or create a Horario
     * const horario = await prisma.horario.upsert({
     *   create: {
     *     // ... data to create a Horario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horario we want to update
     *   }
     * })
     */
    upsert<T extends HorarioUpsertArgs>(args: SelectSubset<T, HorarioUpsertArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horario.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends HorarioCountArgs>(
      args?: Subset<T, HorarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioAggregateArgs>(args: Subset<T, HorarioAggregateArgs>): Prisma.PrismaPromise<GetHorarioAggregateType<T>>

    /**
     * Group by Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioGroupByArgs} args - Group by arguments.
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
      T extends HorarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioGroupByArgs['orderBy'] }
        : { orderBy?: HorarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HorarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Horario model
   */
  readonly fields: HorarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Horario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbero<T extends BarberoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarberoDefaultArgs<ExtArgs>>): Prisma__BarberoClient<$Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Horario model
   */ 
  interface HorarioFieldRefs {
    readonly id: FieldRef<"Horario", 'Int'>
    readonly barberoId: FieldRef<"Horario", 'Int'>
    readonly dia_semana: FieldRef<"Horario", 'Int'>
    readonly hora_inicio: FieldRef<"Horario", 'String'>
    readonly hora_fin: FieldRef<"Horario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Horario findUnique
   */
  export type HorarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario findUniqueOrThrow
   */
  export type HorarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario findFirst
   */
  export type HorarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario findFirstOrThrow
   */
  export type HorarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario findMany
   */
  export type HorarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario create
   */
  export type HorarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Horario.
     */
    data: XOR<HorarioCreateInput, HorarioUncheckedCreateInput>
  }

  /**
   * Horario createMany
   */
  export type HorarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Horarios.
     */
    data: HorarioCreateManyInput | HorarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Horario update
   */
  export type HorarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Horario.
     */
    data: XOR<HorarioUpdateInput, HorarioUncheckedUpdateInput>
    /**
     * Choose, which Horario to update.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario updateMany
   */
  export type HorarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Horarios.
     */
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyInput>
    /**
     * Filter which Horarios to update
     */
    where?: HorarioWhereInput
  }

  /**
   * Horario upsert
   */
  export type HorarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Horario to update in case it exists.
     */
    where: HorarioWhereUniqueInput
    /**
     * In case the Horario found by the `where` argument doesn't exist, create a new Horario with this data.
     */
    create: XOR<HorarioCreateInput, HorarioUncheckedCreateInput>
    /**
     * In case the Horario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioUpdateInput, HorarioUncheckedUpdateInput>
  }

  /**
   * Horario delete
   */
  export type HorarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter which Horario to delete.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario deleteMany
   */
  export type HorarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horarios to delete
     */
    where?: HorarioWhereInput
  }

  /**
   * Horario without action
   */
  export type HorarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rol: 'rol',
    telefono: 'telefono',
    foto_url: 'foto_url',
    fecha_nacimiento: 'fecha_nacimiento',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const BarberoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    especialidad: 'especialidad',
    foto: 'foto'
  };

  export type BarberoScalarFieldEnum = (typeof BarberoScalarFieldEnum)[keyof typeof BarberoScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    duracion_minutos: 'duracion_minutos'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    barberoId: 'barberoId',
    servicioId: 'servicioId',
    fecha: 'fecha',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const HorarioScalarFieldEnum: {
    id: 'id',
    barberoId: 'barberoId',
    dia_semana: 'dia_semana',
    hora_inicio: 'hora_inicio',
    hora_fin: 'hora_fin'
  };

  export type HorarioScalarFieldEnum = (typeof HorarioScalarFieldEnum)[keyof typeof HorarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    foto_url?: StringNullableFilter<"Usuario"> | string | null
    fecha_nacimiento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    telefono?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    foto_url?: StringNullableFilter<"Usuario"> | string | null
    fecha_nacimiento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    telefono?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    foto_url?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type BarberoWhereInput = {
    AND?: BarberoWhereInput | BarberoWhereInput[]
    OR?: BarberoWhereInput[]
    NOT?: BarberoWhereInput | BarberoWhereInput[]
    id?: IntFilter<"Barbero"> | number
    nombre?: StringFilter<"Barbero"> | string
    especialidad?: StringFilter<"Barbero"> | string
    foto?: StringNullableFilter<"Barbero"> | string | null
    reservas?: ReservaListRelationFilter
    horarios?: HorarioListRelationFilter
  }

  export type BarberoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    foto?: SortOrderInput | SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    horarios?: HorarioOrderByRelationAggregateInput
  }

  export type BarberoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BarberoWhereInput | BarberoWhereInput[]
    OR?: BarberoWhereInput[]
    NOT?: BarberoWhereInput | BarberoWhereInput[]
    nombre?: StringFilter<"Barbero"> | string
    especialidad?: StringFilter<"Barbero"> | string
    foto?: StringNullableFilter<"Barbero"> | string | null
    reservas?: ReservaListRelationFilter
    horarios?: HorarioListRelationFilter
  }, "id">

  export type BarberoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: BarberoCountOrderByAggregateInput
    _avg?: BarberoAvgOrderByAggregateInput
    _max?: BarberoMaxOrderByAggregateInput
    _min?: BarberoMinOrderByAggregateInput
    _sum?: BarberoSumOrderByAggregateInput
  }

  export type BarberoScalarWhereWithAggregatesInput = {
    AND?: BarberoScalarWhereWithAggregatesInput | BarberoScalarWhereWithAggregatesInput[]
    OR?: BarberoScalarWhereWithAggregatesInput[]
    NOT?: BarberoScalarWhereWithAggregatesInput | BarberoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Barbero"> | number
    nombre?: StringWithAggregatesFilter<"Barbero"> | string
    especialidad?: StringWithAggregatesFilter<"Barbero"> | string
    foto?: StringNullableWithAggregatesFilter<"Barbero"> | string | null
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: IntFilter<"Servicio"> | number
    nombre?: StringFilter<"Servicio"> | string
    precio?: FloatFilter<"Servicio"> | number
    duracion_minutos?: IntFilter<"Servicio"> | number
    reservas?: ReservaListRelationFilter
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    duracion_minutos?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    nombre?: StringFilter<"Servicio"> | string
    precio?: FloatFilter<"Servicio"> | number
    duracion_minutos?: IntFilter<"Servicio"> | number
    reservas?: ReservaListRelationFilter
  }, "id">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    duracion_minutos?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _avg?: ServicioAvgOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
    _sum?: ServicioSumOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servicio"> | number
    nombre?: StringWithAggregatesFilter<"Servicio"> | string
    precio?: FloatWithAggregatesFilter<"Servicio"> | number
    duracion_minutos?: IntWithAggregatesFilter<"Servicio"> | number
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: IntFilter<"Reserva"> | number
    usuarioId?: IntFilter<"Reserva"> | number
    barberoId?: IntFilter<"Reserva"> | number
    servicioId?: IntFilter<"Reserva"> | number
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    estado?: StringFilter<"Reserva"> | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    barbero?: XOR<BarberoRelationFilter, BarberoWhereInput>
    servicio?: XOR<ServicioRelationFilter, ServicioWhereInput>
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    barberoId?: SortOrder
    servicioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    barbero?: BarberoOrderByWithRelationInput
    servicio?: ServicioOrderByWithRelationInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    usuarioId?: IntFilter<"Reserva"> | number
    barberoId?: IntFilter<"Reserva"> | number
    servicioId?: IntFilter<"Reserva"> | number
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    estado?: StringFilter<"Reserva"> | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    barbero?: XOR<BarberoRelationFilter, BarberoWhereInput>
    servicio?: XOR<ServicioRelationFilter, ServicioWhereInput>
  }, "id">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    barberoId?: SortOrder
    servicioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reserva"> | number
    usuarioId?: IntWithAggregatesFilter<"Reserva"> | number
    barberoId?: IntWithAggregatesFilter<"Reserva"> | number
    servicioId?: IntWithAggregatesFilter<"Reserva"> | number
    fecha?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    estado?: StringWithAggregatesFilter<"Reserva"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type HorarioWhereInput = {
    AND?: HorarioWhereInput | HorarioWhereInput[]
    OR?: HorarioWhereInput[]
    NOT?: HorarioWhereInput | HorarioWhereInput[]
    id?: IntFilter<"Horario"> | number
    barberoId?: IntFilter<"Horario"> | number
    dia_semana?: IntFilter<"Horario"> | number
    hora_inicio?: StringFilter<"Horario"> | string
    hora_fin?: StringFilter<"Horario"> | string
    barbero?: XOR<BarberoRelationFilter, BarberoWhereInput>
  }

  export type HorarioOrderByWithRelationInput = {
    id?: SortOrder
    barberoId?: SortOrder
    dia_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    barbero?: BarberoOrderByWithRelationInput
  }

  export type HorarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    barberoId_dia_semana?: HorarioBarberoIdDia_semanaCompoundUniqueInput
    AND?: HorarioWhereInput | HorarioWhereInput[]
    OR?: HorarioWhereInput[]
    NOT?: HorarioWhereInput | HorarioWhereInput[]
    barberoId?: IntFilter<"Horario"> | number
    dia_semana?: IntFilter<"Horario"> | number
    hora_inicio?: StringFilter<"Horario"> | string
    hora_fin?: StringFilter<"Horario"> | string
    barbero?: XOR<BarberoRelationFilter, BarberoWhereInput>
  }, "id" | "barberoId_dia_semana">

  export type HorarioOrderByWithAggregationInput = {
    id?: SortOrder
    barberoId?: SortOrder
    dia_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    _count?: HorarioCountOrderByAggregateInput
    _avg?: HorarioAvgOrderByAggregateInput
    _max?: HorarioMaxOrderByAggregateInput
    _min?: HorarioMinOrderByAggregateInput
    _sum?: HorarioSumOrderByAggregateInput
  }

  export type HorarioScalarWhereWithAggregatesInput = {
    AND?: HorarioScalarWhereWithAggregatesInput | HorarioScalarWhereWithAggregatesInput[]
    OR?: HorarioScalarWhereWithAggregatesInput[]
    NOT?: HorarioScalarWhereWithAggregatesInput | HorarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Horario"> | number
    barberoId?: IntWithAggregatesFilter<"Horario"> | number
    dia_semana?: IntWithAggregatesFilter<"Horario"> | number
    hora_inicio?: StringWithAggregatesFilter<"Horario"> | string
    hora_fin?: StringWithAggregatesFilter<"Horario"> | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    password: string
    rol?: string
    telefono?: string | null
    foto_url?: string | null
    fecha_nacimiento?: Date | string | null
    createdAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: string
    telefono?: string | null
    foto_url?: string | null
    fecha_nacimiento?: Date | string | null
    createdAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: string
    telefono?: string | null
    foto_url?: string | null
    fecha_nacimiento?: Date | string | null
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberoCreateInput = {
    nombre: string
    especialidad: string
    foto?: string | null
    reservas?: ReservaCreateNestedManyWithoutBarberoInput
    horarios?: HorarioCreateNestedManyWithoutBarberoInput
  }

  export type BarberoUncheckedCreateInput = {
    id?: number
    nombre: string
    especialidad: string
    foto?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutBarberoInput
    horarios?: HorarioUncheckedCreateNestedManyWithoutBarberoInput
  }

  export type BarberoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutBarberoNestedInput
    horarios?: HorarioUpdateManyWithoutBarberoNestedInput
  }

  export type BarberoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutBarberoNestedInput
    horarios?: HorarioUncheckedUpdateManyWithoutBarberoNestedInput
  }

  export type BarberoCreateManyInput = {
    id?: number
    nombre: string
    especialidad: string
    foto?: string | null
  }

  export type BarberoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BarberoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioCreateInput = {
    nombre: string
    precio: number
    duracion_minutos: number
    reservas?: ReservaCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    duracion_minutos: number
    reservas?: ReservaUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    duracion_minutos?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    duracion_minutos?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    duracion_minutos: number
  }

  export type ServicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    duracion_minutos?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    duracion_minutos?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaCreateInput = {
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    barbero: BarberoCreateNestedOneWithoutReservasInput
    servicio: ServicioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    barberoId: number
    servicioId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type ReservaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    barbero?: BarberoUpdateOneRequiredWithoutReservasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyInput = {
    id?: number
    usuarioId: number
    barberoId: number
    servicioId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioCreateInput = {
    dia_semana: number
    hora_inicio: string
    hora_fin: string
    barbero: BarberoCreateNestedOneWithoutHorariosInput
  }

  export type HorarioUncheckedCreateInput = {
    id?: number
    barberoId: number
    dia_semana: number
    hora_inicio: string
    hora_fin: string
  }

  export type HorarioUpdateInput = {
    dia_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fin?: StringFieldUpdateOperationsInput | string
    barbero?: BarberoUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fin?: StringFieldUpdateOperationsInput | string
  }

  export type HorarioCreateManyInput = {
    id?: number
    barberoId: number
    dia_semana: number
    hora_inicio: string
    hora_fin: string
  }

  export type HorarioUpdateManyMutationInput = {
    dia_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fin?: StringFieldUpdateOperationsInput | string
  }

  export type HorarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fin?: StringFieldUpdateOperationsInput | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    foto_url?: SortOrder
    fecha_nacimiento?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    foto_url?: SortOrder
    fecha_nacimiento?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    foto_url?: SortOrder
    fecha_nacimiento?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type HorarioListRelationFilter = {
    every?: HorarioWhereInput
    some?: HorarioWhereInput
    none?: HorarioWhereInput
  }

  export type HorarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarberoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    foto?: SortOrder
  }

  export type BarberoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BarberoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    foto?: SortOrder
  }

  export type BarberoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    foto?: SortOrder
  }

  export type BarberoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    duracion_minutos?: SortOrder
  }

  export type ServicioAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    duracion_minutos?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    duracion_minutos?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    duracion_minutos?: SortOrder
  }

  export type ServicioSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    duracion_minutos?: SortOrder
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

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type BarberoRelationFilter = {
    is?: BarberoWhereInput
    isNot?: BarberoWhereInput
  }

  export type ServicioRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    barberoId?: SortOrder
    servicioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    barberoId?: SortOrder
    servicioId?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    barberoId?: SortOrder
    servicioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    barberoId?: SortOrder
    servicioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    barberoId?: SortOrder
    servicioId?: SortOrder
  }

  export type HorarioBarberoIdDia_semanaCompoundUniqueInput = {
    barberoId: number
    dia_semana: number
  }

  export type HorarioCountOrderByAggregateInput = {
    id?: SortOrder
    barberoId?: SortOrder
    dia_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type HorarioAvgOrderByAggregateInput = {
    id?: SortOrder
    barberoId?: SortOrder
    dia_semana?: SortOrder
  }

  export type HorarioMaxOrderByAggregateInput = {
    id?: SortOrder
    barberoId?: SortOrder
    dia_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type HorarioMinOrderByAggregateInput = {
    id?: SortOrder
    barberoId?: SortOrder
    dia_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type HorarioSumOrderByAggregateInput = {
    id?: SortOrder
    barberoId?: SortOrder
    dia_semana?: SortOrder
  }

  export type ReservaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutBarberoInput = {
    create?: XOR<ReservaCreateWithoutBarberoInput, ReservaUncheckedCreateWithoutBarberoInput> | ReservaCreateWithoutBarberoInput[] | ReservaUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBarberoInput | ReservaCreateOrConnectWithoutBarberoInput[]
    createMany?: ReservaCreateManyBarberoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type HorarioCreateNestedManyWithoutBarberoInput = {
    create?: XOR<HorarioCreateWithoutBarberoInput, HorarioUncheckedCreateWithoutBarberoInput> | HorarioCreateWithoutBarberoInput[] | HorarioUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutBarberoInput | HorarioCreateOrConnectWithoutBarberoInput[]
    createMany?: HorarioCreateManyBarberoInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutBarberoInput = {
    create?: XOR<ReservaCreateWithoutBarberoInput, ReservaUncheckedCreateWithoutBarberoInput> | ReservaCreateWithoutBarberoInput[] | ReservaUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBarberoInput | ReservaCreateOrConnectWithoutBarberoInput[]
    createMany?: ReservaCreateManyBarberoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type HorarioUncheckedCreateNestedManyWithoutBarberoInput = {
    create?: XOR<HorarioCreateWithoutBarberoInput, HorarioUncheckedCreateWithoutBarberoInput> | HorarioCreateWithoutBarberoInput[] | HorarioUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutBarberoInput | HorarioCreateOrConnectWithoutBarberoInput[]
    createMany?: HorarioCreateManyBarberoInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type ReservaUpdateManyWithoutBarberoNestedInput = {
    create?: XOR<ReservaCreateWithoutBarberoInput, ReservaUncheckedCreateWithoutBarberoInput> | ReservaCreateWithoutBarberoInput[] | ReservaUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBarberoInput | ReservaCreateOrConnectWithoutBarberoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutBarberoInput | ReservaUpsertWithWhereUniqueWithoutBarberoInput[]
    createMany?: ReservaCreateManyBarberoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutBarberoInput | ReservaUpdateWithWhereUniqueWithoutBarberoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutBarberoInput | ReservaUpdateManyWithWhereWithoutBarberoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type HorarioUpdateManyWithoutBarberoNestedInput = {
    create?: XOR<HorarioCreateWithoutBarberoInput, HorarioUncheckedCreateWithoutBarberoInput> | HorarioCreateWithoutBarberoInput[] | HorarioUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutBarberoInput | HorarioCreateOrConnectWithoutBarberoInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutBarberoInput | HorarioUpsertWithWhereUniqueWithoutBarberoInput[]
    createMany?: HorarioCreateManyBarberoInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutBarberoInput | HorarioUpdateWithWhereUniqueWithoutBarberoInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutBarberoInput | HorarioUpdateManyWithWhereWithoutBarberoInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutBarberoNestedInput = {
    create?: XOR<ReservaCreateWithoutBarberoInput, ReservaUncheckedCreateWithoutBarberoInput> | ReservaCreateWithoutBarberoInput[] | ReservaUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBarberoInput | ReservaCreateOrConnectWithoutBarberoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutBarberoInput | ReservaUpsertWithWhereUniqueWithoutBarberoInput[]
    createMany?: ReservaCreateManyBarberoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutBarberoInput | ReservaUpdateWithWhereUniqueWithoutBarberoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutBarberoInput | ReservaUpdateManyWithWhereWithoutBarberoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type HorarioUncheckedUpdateManyWithoutBarberoNestedInput = {
    create?: XOR<HorarioCreateWithoutBarberoInput, HorarioUncheckedCreateWithoutBarberoInput> | HorarioCreateWithoutBarberoInput[] | HorarioUncheckedCreateWithoutBarberoInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutBarberoInput | HorarioCreateOrConnectWithoutBarberoInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutBarberoInput | HorarioUpsertWithWhereUniqueWithoutBarberoInput[]
    createMany?: HorarioCreateManyBarberoInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutBarberoInput | HorarioUpdateWithWhereUniqueWithoutBarberoInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutBarberoInput | HorarioUpdateManyWithWhereWithoutBarberoInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutServicioInput = {
    create?: XOR<ReservaCreateWithoutServicioInput, ReservaUncheckedCreateWithoutServicioInput> | ReservaCreateWithoutServicioInput[] | ReservaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicioInput | ReservaCreateOrConnectWithoutServicioInput[]
    createMany?: ReservaCreateManyServicioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ReservaCreateWithoutServicioInput, ReservaUncheckedCreateWithoutServicioInput> | ReservaCreateWithoutServicioInput[] | ReservaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicioInput | ReservaCreateOrConnectWithoutServicioInput[]
    createMany?: ReservaCreateManyServicioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservaUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ReservaCreateWithoutServicioInput, ReservaUncheckedCreateWithoutServicioInput> | ReservaCreateWithoutServicioInput[] | ReservaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicioInput | ReservaCreateOrConnectWithoutServicioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutServicioInput | ReservaUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ReservaCreateManyServicioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutServicioInput | ReservaUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutServicioInput | ReservaUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ReservaCreateWithoutServicioInput, ReservaUncheckedCreateWithoutServicioInput> | ReservaCreateWithoutServicioInput[] | ReservaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicioInput | ReservaCreateOrConnectWithoutServicioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutServicioInput | ReservaUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ReservaCreateManyServicioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutServicioInput | ReservaUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutServicioInput | ReservaUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BarberoCreateNestedOneWithoutReservasInput = {
    create?: XOR<BarberoCreateWithoutReservasInput, BarberoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: BarberoCreateOrConnectWithoutReservasInput
    connect?: BarberoWhereUniqueInput
  }

  export type ServicioCreateNestedOneWithoutReservasInput = {
    create?: XOR<ServicioCreateWithoutReservasInput, ServicioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutReservasInput
    connect?: ServicioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    upsert?: UsuarioUpsertWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservasInput, UsuarioUpdateWithoutReservasInput>, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type BarberoUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<BarberoCreateWithoutReservasInput, BarberoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: BarberoCreateOrConnectWithoutReservasInput
    upsert?: BarberoUpsertWithoutReservasInput
    connect?: BarberoWhereUniqueInput
    update?: XOR<XOR<BarberoUpdateToOneWithWhereWithoutReservasInput, BarberoUpdateWithoutReservasInput>, BarberoUncheckedUpdateWithoutReservasInput>
  }

  export type ServicioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<ServicioCreateWithoutReservasInput, ServicioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutReservasInput
    upsert?: ServicioUpsertWithoutReservasInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutReservasInput, ServicioUpdateWithoutReservasInput>, ServicioUncheckedUpdateWithoutReservasInput>
  }

  export type BarberoCreateNestedOneWithoutHorariosInput = {
    create?: XOR<BarberoCreateWithoutHorariosInput, BarberoUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: BarberoCreateOrConnectWithoutHorariosInput
    connect?: BarberoWhereUniqueInput
  }

  export type BarberoUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<BarberoCreateWithoutHorariosInput, BarberoUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: BarberoCreateOrConnectWithoutHorariosInput
    upsert?: BarberoUpsertWithoutHorariosInput
    connect?: BarberoWhereUniqueInput
    update?: XOR<XOR<BarberoUpdateToOneWithWhereWithoutHorariosInput, BarberoUpdateWithoutHorariosInput>, BarberoUncheckedUpdateWithoutHorariosInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type ReservaCreateWithoutUsuarioInput = {
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
    barbero: BarberoCreateNestedOneWithoutReservasInput
    servicio: ServicioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    barberoId: number
    servicioId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaCreateManyUsuarioInputEnvelope = {
    data: ReservaCreateManyUsuarioInput | ReservaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: IntFilter<"Reserva"> | number
    usuarioId?: IntFilter<"Reserva"> | number
    barberoId?: IntFilter<"Reserva"> | number
    servicioId?: IntFilter<"Reserva"> | number
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    estado?: StringFilter<"Reserva"> | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type ReservaCreateWithoutBarberoInput = {
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    servicio: ServicioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutBarberoInput = {
    id?: number
    usuarioId: number
    servicioId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutBarberoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutBarberoInput, ReservaUncheckedCreateWithoutBarberoInput>
  }

  export type ReservaCreateManyBarberoInputEnvelope = {
    data: ReservaCreateManyBarberoInput | ReservaCreateManyBarberoInput[]
    skipDuplicates?: boolean
  }

  export type HorarioCreateWithoutBarberoInput = {
    dia_semana: number
    hora_inicio: string
    hora_fin: string
  }

  export type HorarioUncheckedCreateWithoutBarberoInput = {
    id?: number
    dia_semana: number
    hora_inicio: string
    hora_fin: string
  }

  export type HorarioCreateOrConnectWithoutBarberoInput = {
    where: HorarioWhereUniqueInput
    create: XOR<HorarioCreateWithoutBarberoInput, HorarioUncheckedCreateWithoutBarberoInput>
  }

  export type HorarioCreateManyBarberoInputEnvelope = {
    data: HorarioCreateManyBarberoInput | HorarioCreateManyBarberoInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutBarberoInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutBarberoInput, ReservaUncheckedUpdateWithoutBarberoInput>
    create: XOR<ReservaCreateWithoutBarberoInput, ReservaUncheckedCreateWithoutBarberoInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutBarberoInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutBarberoInput, ReservaUncheckedUpdateWithoutBarberoInput>
  }

  export type ReservaUpdateManyWithWhereWithoutBarberoInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutBarberoInput>
  }

  export type HorarioUpsertWithWhereUniqueWithoutBarberoInput = {
    where: HorarioWhereUniqueInput
    update: XOR<HorarioUpdateWithoutBarberoInput, HorarioUncheckedUpdateWithoutBarberoInput>
    create: XOR<HorarioCreateWithoutBarberoInput, HorarioUncheckedCreateWithoutBarberoInput>
  }

  export type HorarioUpdateWithWhereUniqueWithoutBarberoInput = {
    where: HorarioWhereUniqueInput
    data: XOR<HorarioUpdateWithoutBarberoInput, HorarioUncheckedUpdateWithoutBarberoInput>
  }

  export type HorarioUpdateManyWithWhereWithoutBarberoInput = {
    where: HorarioScalarWhereInput
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyWithoutBarberoInput>
  }

  export type HorarioScalarWhereInput = {
    AND?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
    OR?: HorarioScalarWhereInput[]
    NOT?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
    id?: IntFilter<"Horario"> | number
    barberoId?: IntFilter<"Horario"> | number
    dia_semana?: IntFilter<"Horario"> | number
    hora_inicio?: StringFilter<"Horario"> | string
    hora_fin?: StringFilter<"Horario"> | string
  }

  export type ReservaCreateWithoutServicioInput = {
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    barbero: BarberoCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutServicioInput = {
    id?: number
    usuarioId: number
    barberoId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutServicioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutServicioInput, ReservaUncheckedCreateWithoutServicioInput>
  }

  export type ReservaCreateManyServicioInputEnvelope = {
    data: ReservaCreateManyServicioInput | ReservaCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutServicioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutServicioInput, ReservaUncheckedUpdateWithoutServicioInput>
    create: XOR<ReservaCreateWithoutServicioInput, ReservaUncheckedCreateWithoutServicioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutServicioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutServicioInput, ReservaUncheckedUpdateWithoutServicioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutServicioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutServicioInput>
  }

  export type UsuarioCreateWithoutReservasInput = {
    nombre: string
    email: string
    password: string
    rol?: string
    telefono?: string | null
    foto_url?: string | null
    fecha_nacimiento?: Date | string | null
    createdAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutReservasInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: string
    telefono?: string | null
    foto_url?: string | null
    fecha_nacimiento?: Date | string | null
    createdAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutReservasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
  }

  export type BarberoCreateWithoutReservasInput = {
    nombre: string
    especialidad: string
    foto?: string | null
    horarios?: HorarioCreateNestedManyWithoutBarberoInput
  }

  export type BarberoUncheckedCreateWithoutReservasInput = {
    id?: number
    nombre: string
    especialidad: string
    foto?: string | null
    horarios?: HorarioUncheckedCreateNestedManyWithoutBarberoInput
  }

  export type BarberoCreateOrConnectWithoutReservasInput = {
    where: BarberoWhereUniqueInput
    create: XOR<BarberoCreateWithoutReservasInput, BarberoUncheckedCreateWithoutReservasInput>
  }

  export type ServicioCreateWithoutReservasInput = {
    nombre: string
    precio: number
    duracion_minutos: number
  }

  export type ServicioUncheckedCreateWithoutReservasInput = {
    id?: number
    nombre: string
    precio: number
    duracion_minutos: number
  }

  export type ServicioCreateOrConnectWithoutReservasInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutReservasInput, ServicioUncheckedCreateWithoutReservasInput>
  }

  export type UsuarioUpsertWithoutReservasInput = {
    update: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type UsuarioUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberoUpsertWithoutReservasInput = {
    update: XOR<BarberoUpdateWithoutReservasInput, BarberoUncheckedUpdateWithoutReservasInput>
    create: XOR<BarberoCreateWithoutReservasInput, BarberoUncheckedCreateWithoutReservasInput>
    where?: BarberoWhereInput
  }

  export type BarberoUpdateToOneWithWhereWithoutReservasInput = {
    where?: BarberoWhereInput
    data: XOR<BarberoUpdateWithoutReservasInput, BarberoUncheckedUpdateWithoutReservasInput>
  }

  export type BarberoUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horarios?: HorarioUpdateManyWithoutBarberoNestedInput
  }

  export type BarberoUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horarios?: HorarioUncheckedUpdateManyWithoutBarberoNestedInput
  }

  export type ServicioUpsertWithoutReservasInput = {
    update: XOR<ServicioUpdateWithoutReservasInput, ServicioUncheckedUpdateWithoutReservasInput>
    create: XOR<ServicioCreateWithoutReservasInput, ServicioUncheckedCreateWithoutReservasInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutReservasInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutReservasInput, ServicioUncheckedUpdateWithoutReservasInput>
  }

  export type ServicioUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    duracion_minutos?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    duracion_minutos?: IntFieldUpdateOperationsInput | number
  }

  export type BarberoCreateWithoutHorariosInput = {
    nombre: string
    especialidad: string
    foto?: string | null
    reservas?: ReservaCreateNestedManyWithoutBarberoInput
  }

  export type BarberoUncheckedCreateWithoutHorariosInput = {
    id?: number
    nombre: string
    especialidad: string
    foto?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutBarberoInput
  }

  export type BarberoCreateOrConnectWithoutHorariosInput = {
    where: BarberoWhereUniqueInput
    create: XOR<BarberoCreateWithoutHorariosInput, BarberoUncheckedCreateWithoutHorariosInput>
  }

  export type BarberoUpsertWithoutHorariosInput = {
    update: XOR<BarberoUpdateWithoutHorariosInput, BarberoUncheckedUpdateWithoutHorariosInput>
    create: XOR<BarberoCreateWithoutHorariosInput, BarberoUncheckedCreateWithoutHorariosInput>
    where?: BarberoWhereInput
  }

  export type BarberoUpdateToOneWithWhereWithoutHorariosInput = {
    where?: BarberoWhereInput
    data: XOR<BarberoUpdateWithoutHorariosInput, BarberoUncheckedUpdateWithoutHorariosInput>
  }

  export type BarberoUpdateWithoutHorariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutBarberoNestedInput
  }

  export type BarberoUncheckedUpdateWithoutHorariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutBarberoNestedInput
  }

  export type ReservaCreateManyUsuarioInput = {
    id?: number
    barberoId: number
    servicioId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barbero?: BarberoUpdateOneRequiredWithoutReservasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyBarberoInput = {
    id?: number
    usuarioId: number
    servicioId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type HorarioCreateManyBarberoInput = {
    id?: number
    dia_semana: number
    hora_inicio: string
    hora_fin: string
  }

  export type ReservaUpdateWithoutBarberoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutBarberoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutBarberoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUpdateWithoutBarberoInput = {
    dia_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fin?: StringFieldUpdateOperationsInput | string
  }

  export type HorarioUncheckedUpdateWithoutBarberoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fin?: StringFieldUpdateOperationsInput | string
  }

  export type HorarioUncheckedUpdateManyWithoutBarberoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fin?: StringFieldUpdateOperationsInput | string
  }

  export type ReservaCreateManyServicioInput = {
    id?: number
    usuarioId: number
    barberoId: number
    fecha: Date | string
    estado?: string
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutServicioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    barbero?: BarberoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    barberoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarberoCountOutputTypeDefaultArgs instead
     */
    export type BarberoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarberoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicioCountOutputTypeDefaultArgs instead
     */
    export type ServicioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarberoDefaultArgs instead
     */
    export type BarberoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarberoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicioDefaultArgs instead
     */
    export type ServicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservaDefaultArgs instead
     */
    export type ReservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HorarioDefaultArgs instead
     */
    export type HorarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HorarioDefaultArgs<ExtArgs>

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