
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
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model DroneInstance
 * 
 */
export type DroneInstance = $Result.DefaultSelection<Prisma.$DroneInstancePayload>
/**
 * Model DroneModel
 * 
 */
export type DroneModel = $Result.DefaultSelection<Prisma.$DroneModelPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
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
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.droneInstance`: Exposes CRUD operations for the **DroneInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DroneInstances
    * const droneInstances = await prisma.droneInstance.findMany()
    * ```
    */
  get droneInstance(): Prisma.DroneInstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.droneModel`: Exposes CRUD operations for the **DroneModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DroneModels
    * const droneModels = await prisma.droneModel.findMany()
    * ```
    */
  get droneModel(): Prisma.DroneModelDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Client: 'Client',
    Supplier: 'Supplier',
    Order: 'Order',
    DroneInstance: 'DroneInstance',
    DroneModel: 'DroneModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "supplier" | "order" | "droneInstance" | "droneModel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      DroneInstance: {
        payload: Prisma.$DroneInstancePayload<ExtArgs>
        fields: Prisma.DroneInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>
          }
          findFirst: {
            args: Prisma.DroneInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>
          }
          findMany: {
            args: Prisma.DroneInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>[]
          }
          create: {
            args: Prisma.DroneInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>
          }
          createMany: {
            args: Prisma.DroneInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DroneInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>[]
          }
          delete: {
            args: Prisma.DroneInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>
          }
          update: {
            args: Prisma.DroneInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>
          }
          deleteMany: {
            args: Prisma.DroneInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DroneInstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>[]
          }
          upsert: {
            args: Prisma.DroneInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneInstancePayload>
          }
          aggregate: {
            args: Prisma.DroneInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDroneInstance>
          }
          groupBy: {
            args: Prisma.DroneInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DroneInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<DroneInstanceCountAggregateOutputType> | number
          }
        }
      }
      DroneModel: {
        payload: Prisma.$DroneModelPayload<ExtArgs>
        fields: Prisma.DroneModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>
          }
          findFirst: {
            args: Prisma.DroneModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>
          }
          findMany: {
            args: Prisma.DroneModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>[]
          }
          create: {
            args: Prisma.DroneModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>
          }
          createMany: {
            args: Prisma.DroneModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DroneModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>[]
          }
          delete: {
            args: Prisma.DroneModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>
          }
          update: {
            args: Prisma.DroneModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>
          }
          deleteMany: {
            args: Prisma.DroneModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DroneModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>[]
          }
          upsert: {
            args: Prisma.DroneModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneModelPayload>
          }
          aggregate: {
            args: Prisma.DroneModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDroneModel>
          }
          groupBy: {
            args: Prisma.DroneModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.DroneModelCountArgs<ExtArgs>
            result: $Utils.Optional<DroneModelCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    supplier?: SupplierOmit
    order?: OrderOmit
    droneInstance?: DroneInstanceOmit
    droneModel?: DroneModelOmit
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    Order: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | ClientCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    DroneInstance: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DroneInstance?: boolean | SupplierCountOutputTypeCountDroneInstanceArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountDroneInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneInstanceWhereInput
  }


  /**
   * Count Type DroneInstanceCountOutputType
   */

  export type DroneInstanceCountOutputType = {
    Order: number
  }

  export type DroneInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | DroneInstanceCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * DroneInstanceCountOutputType without action
   */
  export type DroneInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstanceCountOutputType
     */
    select?: DroneInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DroneInstanceCountOutputType without action
   */
  export type DroneInstanceCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type DroneModelCountOutputType
   */

  export type DroneModelCountOutputType = {
    DroneInstance: number
  }

  export type DroneModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DroneInstance?: boolean | DroneModelCountOutputTypeCountDroneInstanceArgs
  }

  // Custom InputTypes
  /**
   * DroneModelCountOutputType without action
   */
  export type DroneModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModelCountOutputType
     */
    select?: DroneModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DroneModelCountOutputType without action
   */
  export type DroneModelCountOutputTypeCountDroneInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneInstanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    credits: Decimal | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    credits: Decimal | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    credits: Decimal | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    credits: Decimal | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    credits: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    credits?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    credits?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    credits?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    credits?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    credits?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    credits: Decimal
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
    Order?: boolean | Client$OrderArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "credits", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | Client$OrderArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      credits: Prisma.Decimal
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends Client$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Client$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly password: FieldRef<"Client", 'String'>
    readonly credits: FieldRef<"Client", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.Order
   */
  export type Client$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
    credits: Decimal | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
    credits: Decimal | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    cnpj: string | null
    credits: Decimal | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    cnpj: string | null
    credits: Decimal | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    cnpj: number
    credits: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
    credits?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
    credits?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cnpj?: true
    credits?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cnpj?: true
    credits?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cnpj?: true
    credits?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    cnpj: string
    credits: Decimal
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cnpj?: boolean
    credits?: boolean
    DroneInstance?: boolean | Supplier$DroneInstanceArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cnpj?: boolean
    credits?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cnpj?: boolean
    credits?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cnpj?: boolean
    credits?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "cnpj" | "credits", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DroneInstance?: boolean | Supplier$DroneInstanceArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      DroneInstance: Prisma.$DroneInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      cnpj: string
      credits: Prisma.Decimal
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DroneInstance<T extends Supplier$DroneInstanceArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$DroneInstanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly password: FieldRef<"Supplier", 'String'>
    readonly cnpj: FieldRef<"Supplier", 'String'>
    readonly credits: FieldRef<"Supplier", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.DroneInstance
   */
  export type Supplier$DroneInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    where?: DroneInstanceWhereInput
    orderBy?: DroneInstanceOrderByWithRelationInput | DroneInstanceOrderByWithRelationInput[]
    cursor?: DroneInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DroneInstanceScalarFieldEnum | DroneInstanceScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    number: number | null
    clientId: number | null
    price: Decimal | null
    droneInstanceId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    number: number | null
    clientId: number | null
    price: Decimal | null
    droneInstanceId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    number: number | null
    clientId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    price: Decimal | null
    droneInstanceId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    number: number | null
    clientId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    price: Decimal | null
    droneInstanceId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    number: number
    clientId: number
    status: number
    createdAt: number
    updatedAt: number
    price: number
    pickupLocation: number
    deliveryLocation: number
    droneInstanceId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    number?: true
    clientId?: true
    price?: true
    droneInstanceId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    number?: true
    clientId?: true
    price?: true
    droneInstanceId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    number?: true
    clientId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    price?: true
    droneInstanceId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    number?: true
    clientId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    price?: true
    droneInstanceId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    number?: true
    clientId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    price?: true
    pickupLocation?: true
    deliveryLocation?: true
    droneInstanceId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    number: number
    clientId: number
    status: string
    createdAt: Date
    updatedAt: Date
    price: Decimal
    pickupLocation: JsonValue
    deliveryLocation: JsonValue
    droneInstanceId: number | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
    pickupLocation?: boolean
    deliveryLocation?: boolean
    droneInstanceId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    droneInstance?: boolean | Order$droneInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
    pickupLocation?: boolean
    deliveryLocation?: boolean
    droneInstanceId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    droneInstance?: boolean | Order$droneInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
    pickupLocation?: boolean
    deliveryLocation?: boolean
    droneInstanceId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    droneInstance?: boolean | Order$droneInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    number?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
    pickupLocation?: boolean
    deliveryLocation?: boolean
    droneInstanceId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "clientId" | "status" | "createdAt" | "updatedAt" | "price" | "pickupLocation" | "deliveryLocation" | "droneInstanceId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    droneInstance?: boolean | Order$droneInstanceArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    droneInstance?: boolean | Order$droneInstanceArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    droneInstance?: boolean | Order$droneInstanceArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      droneInstance: Prisma.$DroneInstancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      clientId: number
      status: string
      createdAt: Date
      updatedAt: Date
      price: Prisma.Decimal
      pickupLocation: Prisma.JsonValue
      deliveryLocation: Prisma.JsonValue
      droneInstanceId: number | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    droneInstance<T extends Order$droneInstanceArgs<ExtArgs> = {}>(args?: Subset<T, Order$droneInstanceArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly number: FieldRef<"Order", 'Int'>
    readonly clientId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly price: FieldRef<"Order", 'Decimal'>
    readonly pickupLocation: FieldRef<"Order", 'Json'>
    readonly deliveryLocation: FieldRef<"Order", 'Json'>
    readonly droneInstanceId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.droneInstance
   */
  export type Order$droneInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    where?: DroneInstanceWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model DroneInstance
   */

  export type AggregateDroneInstance = {
    _count: DroneInstanceCountAggregateOutputType | null
    _avg: DroneInstanceAvgAggregateOutputType | null
    _sum: DroneInstanceSumAggregateOutputType | null
    _min: DroneInstanceMinAggregateOutputType | null
    _max: DroneInstanceMaxAggregateOutputType | null
  }

  export type DroneInstanceAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
    modelId: number | null
  }

  export type DroneInstanceSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
    modelId: number | null
  }

  export type DroneInstanceMinAggregateOutputType = {
    id: number | null
    supplierId: number | null
    modelId: number | null
  }

  export type DroneInstanceMaxAggregateOutputType = {
    id: number | null
    supplierId: number | null
    modelId: number | null
  }

  export type DroneInstanceCountAggregateOutputType = {
    id: number
    region: number
    supplierId: number
    modelId: number
    _all: number
  }


  export type DroneInstanceAvgAggregateInputType = {
    id?: true
    supplierId?: true
    modelId?: true
  }

  export type DroneInstanceSumAggregateInputType = {
    id?: true
    supplierId?: true
    modelId?: true
  }

  export type DroneInstanceMinAggregateInputType = {
    id?: true
    supplierId?: true
    modelId?: true
  }

  export type DroneInstanceMaxAggregateInputType = {
    id?: true
    supplierId?: true
    modelId?: true
  }

  export type DroneInstanceCountAggregateInputType = {
    id?: true
    region?: true
    supplierId?: true
    modelId?: true
    _all?: true
  }

  export type DroneInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneInstance to aggregate.
     */
    where?: DroneInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneInstances to fetch.
     */
    orderBy?: DroneInstanceOrderByWithRelationInput | DroneInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DroneInstances
    **/
    _count?: true | DroneInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroneInstanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroneInstanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneInstanceMaxAggregateInputType
  }

  export type GetDroneInstanceAggregateType<T extends DroneInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateDroneInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDroneInstance[P]>
      : GetScalarType<T[P], AggregateDroneInstance[P]>
  }




  export type DroneInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneInstanceWhereInput
    orderBy?: DroneInstanceOrderByWithAggregationInput | DroneInstanceOrderByWithAggregationInput[]
    by: DroneInstanceScalarFieldEnum[] | DroneInstanceScalarFieldEnum
    having?: DroneInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneInstanceCountAggregateInputType | true
    _avg?: DroneInstanceAvgAggregateInputType
    _sum?: DroneInstanceSumAggregateInputType
    _min?: DroneInstanceMinAggregateInputType
    _max?: DroneInstanceMaxAggregateInputType
  }

  export type DroneInstanceGroupByOutputType = {
    id: number
    region: JsonValue
    supplierId: number
    modelId: number
    _count: DroneInstanceCountAggregateOutputType | null
    _avg: DroneInstanceAvgAggregateOutputType | null
    _sum: DroneInstanceSumAggregateOutputType | null
    _min: DroneInstanceMinAggregateOutputType | null
    _max: DroneInstanceMaxAggregateOutputType | null
  }

  type GetDroneInstanceGroupByPayload<T extends DroneInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], DroneInstanceGroupByOutputType[P]>
        }
      >
    >


  export type DroneInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    supplierId?: boolean
    modelId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    model?: boolean | DroneModelDefaultArgs<ExtArgs>
    Order?: boolean | DroneInstance$OrderArgs<ExtArgs>
    _count?: boolean | DroneInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["droneInstance"]>

  export type DroneInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    supplierId?: boolean
    modelId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    model?: boolean | DroneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["droneInstance"]>

  export type DroneInstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    supplierId?: boolean
    modelId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    model?: boolean | DroneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["droneInstance"]>

  export type DroneInstanceSelectScalar = {
    id?: boolean
    region?: boolean
    supplierId?: boolean
    modelId?: boolean
  }

  export type DroneInstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "region" | "supplierId" | "modelId", ExtArgs["result"]["droneInstance"]>
  export type DroneInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    model?: boolean | DroneModelDefaultArgs<ExtArgs>
    Order?: boolean | DroneInstance$OrderArgs<ExtArgs>
    _count?: boolean | DroneInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DroneInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    model?: boolean | DroneModelDefaultArgs<ExtArgs>
  }
  export type DroneInstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    model?: boolean | DroneModelDefaultArgs<ExtArgs>
  }

  export type $DroneInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DroneInstance"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      model: Prisma.$DroneModelPayload<ExtArgs>
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      region: Prisma.JsonValue
      supplierId: number
      modelId: number
    }, ExtArgs["result"]["droneInstance"]>
    composites: {}
  }

  type DroneInstanceGetPayload<S extends boolean | null | undefined | DroneInstanceDefaultArgs> = $Result.GetResult<Prisma.$DroneInstancePayload, S>

  type DroneInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneInstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneInstanceCountAggregateInputType | true
    }

  export interface DroneInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DroneInstance'], meta: { name: 'DroneInstance' } }
    /**
     * Find zero or one DroneInstance that matches the filter.
     * @param {DroneInstanceFindUniqueArgs} args - Arguments to find a DroneInstance
     * @example
     * // Get one DroneInstance
     * const droneInstance = await prisma.droneInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneInstanceFindUniqueArgs>(args: SelectSubset<T, DroneInstanceFindUniqueArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DroneInstance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneInstanceFindUniqueOrThrowArgs} args - Arguments to find a DroneInstance
     * @example
     * // Get one DroneInstance
     * const droneInstance = await prisma.droneInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneInstanceFindFirstArgs} args - Arguments to find a DroneInstance
     * @example
     * // Get one DroneInstance
     * const droneInstance = await prisma.droneInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneInstanceFindFirstArgs>(args?: SelectSubset<T, DroneInstanceFindFirstArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneInstanceFindFirstOrThrowArgs} args - Arguments to find a DroneInstance
     * @example
     * // Get one DroneInstance
     * const droneInstance = await prisma.droneInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DroneInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DroneInstances
     * const droneInstances = await prisma.droneInstance.findMany()
     * 
     * // Get first 10 DroneInstances
     * const droneInstances = await prisma.droneInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneInstanceWithIdOnly = await prisma.droneInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneInstanceFindManyArgs>(args?: SelectSubset<T, DroneInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DroneInstance.
     * @param {DroneInstanceCreateArgs} args - Arguments to create a DroneInstance.
     * @example
     * // Create one DroneInstance
     * const DroneInstance = await prisma.droneInstance.create({
     *   data: {
     *     // ... data to create a DroneInstance
     *   }
     * })
     * 
     */
    create<T extends DroneInstanceCreateArgs>(args: SelectSubset<T, DroneInstanceCreateArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DroneInstances.
     * @param {DroneInstanceCreateManyArgs} args - Arguments to create many DroneInstances.
     * @example
     * // Create many DroneInstances
     * const droneInstance = await prisma.droneInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneInstanceCreateManyArgs>(args?: SelectSubset<T, DroneInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DroneInstances and returns the data saved in the database.
     * @param {DroneInstanceCreateManyAndReturnArgs} args - Arguments to create many DroneInstances.
     * @example
     * // Create many DroneInstances
     * const droneInstance = await prisma.droneInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DroneInstances and only return the `id`
     * const droneInstanceWithIdOnly = await prisma.droneInstance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DroneInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, DroneInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DroneInstance.
     * @param {DroneInstanceDeleteArgs} args - Arguments to delete one DroneInstance.
     * @example
     * // Delete one DroneInstance
     * const DroneInstance = await prisma.droneInstance.delete({
     *   where: {
     *     // ... filter to delete one DroneInstance
     *   }
     * })
     * 
     */
    delete<T extends DroneInstanceDeleteArgs>(args: SelectSubset<T, DroneInstanceDeleteArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DroneInstance.
     * @param {DroneInstanceUpdateArgs} args - Arguments to update one DroneInstance.
     * @example
     * // Update one DroneInstance
     * const droneInstance = await prisma.droneInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneInstanceUpdateArgs>(args: SelectSubset<T, DroneInstanceUpdateArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DroneInstances.
     * @param {DroneInstanceDeleteManyArgs} args - Arguments to filter DroneInstances to delete.
     * @example
     * // Delete a few DroneInstances
     * const { count } = await prisma.droneInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneInstanceDeleteManyArgs>(args?: SelectSubset<T, DroneInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DroneInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DroneInstances
     * const droneInstance = await prisma.droneInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneInstanceUpdateManyArgs>(args: SelectSubset<T, DroneInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DroneInstances and returns the data updated in the database.
     * @param {DroneInstanceUpdateManyAndReturnArgs} args - Arguments to update many DroneInstances.
     * @example
     * // Update many DroneInstances
     * const droneInstance = await prisma.droneInstance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DroneInstances and only return the `id`
     * const droneInstanceWithIdOnly = await prisma.droneInstance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DroneInstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, DroneInstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DroneInstance.
     * @param {DroneInstanceUpsertArgs} args - Arguments to update or create a DroneInstance.
     * @example
     * // Update or create a DroneInstance
     * const droneInstance = await prisma.droneInstance.upsert({
     *   create: {
     *     // ... data to create a DroneInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DroneInstance we want to update
     *   }
     * })
     */
    upsert<T extends DroneInstanceUpsertArgs>(args: SelectSubset<T, DroneInstanceUpsertArgs<ExtArgs>>): Prisma__DroneInstanceClient<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DroneInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneInstanceCountArgs} args - Arguments to filter DroneInstances to count.
     * @example
     * // Count the number of DroneInstances
     * const count = await prisma.droneInstance.count({
     *   where: {
     *     // ... the filter for the DroneInstances we want to count
     *   }
     * })
    **/
    count<T extends DroneInstanceCountArgs>(
      args?: Subset<T, DroneInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DroneInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DroneInstanceAggregateArgs>(args: Subset<T, DroneInstanceAggregateArgs>): Prisma.PrismaPromise<GetDroneInstanceAggregateType<T>>

    /**
     * Group by DroneInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneInstanceGroupByArgs} args - Group by arguments.
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
      T extends DroneInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneInstanceGroupByArgs['orderBy'] }
        : { orderBy?: DroneInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DroneInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DroneInstance model
   */
  readonly fields: DroneInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DroneInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    model<T extends DroneModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DroneModelDefaultArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Order<T extends DroneInstance$OrderArgs<ExtArgs> = {}>(args?: Subset<T, DroneInstance$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DroneInstance model
   */
  interface DroneInstanceFieldRefs {
    readonly id: FieldRef<"DroneInstance", 'Int'>
    readonly region: FieldRef<"DroneInstance", 'Json'>
    readonly supplierId: FieldRef<"DroneInstance", 'Int'>
    readonly modelId: FieldRef<"DroneInstance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DroneInstance findUnique
   */
  export type DroneInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DroneInstance to fetch.
     */
    where: DroneInstanceWhereUniqueInput
  }

  /**
   * DroneInstance findUniqueOrThrow
   */
  export type DroneInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DroneInstance to fetch.
     */
    where: DroneInstanceWhereUniqueInput
  }

  /**
   * DroneInstance findFirst
   */
  export type DroneInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DroneInstance to fetch.
     */
    where?: DroneInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneInstances to fetch.
     */
    orderBy?: DroneInstanceOrderByWithRelationInput | DroneInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneInstances.
     */
    cursor?: DroneInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneInstances.
     */
    distinct?: DroneInstanceScalarFieldEnum | DroneInstanceScalarFieldEnum[]
  }

  /**
   * DroneInstance findFirstOrThrow
   */
  export type DroneInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DroneInstance to fetch.
     */
    where?: DroneInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneInstances to fetch.
     */
    orderBy?: DroneInstanceOrderByWithRelationInput | DroneInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneInstances.
     */
    cursor?: DroneInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneInstances.
     */
    distinct?: DroneInstanceScalarFieldEnum | DroneInstanceScalarFieldEnum[]
  }

  /**
   * DroneInstance findMany
   */
  export type DroneInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DroneInstances to fetch.
     */
    where?: DroneInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneInstances to fetch.
     */
    orderBy?: DroneInstanceOrderByWithRelationInput | DroneInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DroneInstances.
     */
    cursor?: DroneInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneInstances.
     */
    skip?: number
    distinct?: DroneInstanceScalarFieldEnum | DroneInstanceScalarFieldEnum[]
  }

  /**
   * DroneInstance create
   */
  export type DroneInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a DroneInstance.
     */
    data: XOR<DroneInstanceCreateInput, DroneInstanceUncheckedCreateInput>
  }

  /**
   * DroneInstance createMany
   */
  export type DroneInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DroneInstances.
     */
    data: DroneInstanceCreateManyInput | DroneInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DroneInstance createManyAndReturn
   */
  export type DroneInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * The data used to create many DroneInstances.
     */
    data: DroneInstanceCreateManyInput | DroneInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DroneInstance update
   */
  export type DroneInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a DroneInstance.
     */
    data: XOR<DroneInstanceUpdateInput, DroneInstanceUncheckedUpdateInput>
    /**
     * Choose, which DroneInstance to update.
     */
    where: DroneInstanceWhereUniqueInput
  }

  /**
   * DroneInstance updateMany
   */
  export type DroneInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DroneInstances.
     */
    data: XOR<DroneInstanceUpdateManyMutationInput, DroneInstanceUncheckedUpdateManyInput>
    /**
     * Filter which DroneInstances to update
     */
    where?: DroneInstanceWhereInput
    /**
     * Limit how many DroneInstances to update.
     */
    limit?: number
  }

  /**
   * DroneInstance updateManyAndReturn
   */
  export type DroneInstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * The data used to update DroneInstances.
     */
    data: XOR<DroneInstanceUpdateManyMutationInput, DroneInstanceUncheckedUpdateManyInput>
    /**
     * Filter which DroneInstances to update
     */
    where?: DroneInstanceWhereInput
    /**
     * Limit how many DroneInstances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DroneInstance upsert
   */
  export type DroneInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the DroneInstance to update in case it exists.
     */
    where: DroneInstanceWhereUniqueInput
    /**
     * In case the DroneInstance found by the `where` argument doesn't exist, create a new DroneInstance with this data.
     */
    create: XOR<DroneInstanceCreateInput, DroneInstanceUncheckedCreateInput>
    /**
     * In case the DroneInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneInstanceUpdateInput, DroneInstanceUncheckedUpdateInput>
  }

  /**
   * DroneInstance delete
   */
  export type DroneInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    /**
     * Filter which DroneInstance to delete.
     */
    where: DroneInstanceWhereUniqueInput
  }

  /**
   * DroneInstance deleteMany
   */
  export type DroneInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneInstances to delete
     */
    where?: DroneInstanceWhereInput
    /**
     * Limit how many DroneInstances to delete.
     */
    limit?: number
  }

  /**
   * DroneInstance.Order
   */
  export type DroneInstance$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * DroneInstance without action
   */
  export type DroneInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
  }


  /**
   * Model DroneModel
   */

  export type AggregateDroneModel = {
    _count: DroneModelCountAggregateOutputType | null
    _avg: DroneModelAvgAggregateOutputType | null
    _sum: DroneModelSumAggregateOutputType | null
    _min: DroneModelMinAggregateOutputType | null
    _max: DroneModelMaxAggregateOutputType | null
  }

  export type DroneModelAvgAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    capacityWeight: Decimal | null
    capacityVolume: Decimal | null
  }

  export type DroneModelSumAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    capacityWeight: Decimal | null
    capacityVolume: Decimal | null
  }

  export type DroneModelMinAggregateOutputType = {
    id: number | null
    model: string | null
    weight: Decimal | null
    capacityWeight: Decimal | null
    capacityVolume: Decimal | null
    size: string | null
    composition: string | null
    image: string | null
  }

  export type DroneModelMaxAggregateOutputType = {
    id: number | null
    model: string | null
    weight: Decimal | null
    capacityWeight: Decimal | null
    capacityVolume: Decimal | null
    size: string | null
    composition: string | null
    image: string | null
  }

  export type DroneModelCountAggregateOutputType = {
    id: number
    model: number
    weight: number
    capacityWeight: number
    capacityVolume: number
    size: number
    composition: number
    image: number
    _all: number
  }


  export type DroneModelAvgAggregateInputType = {
    id?: true
    weight?: true
    capacityWeight?: true
    capacityVolume?: true
  }

  export type DroneModelSumAggregateInputType = {
    id?: true
    weight?: true
    capacityWeight?: true
    capacityVolume?: true
  }

  export type DroneModelMinAggregateInputType = {
    id?: true
    model?: true
    weight?: true
    capacityWeight?: true
    capacityVolume?: true
    size?: true
    composition?: true
    image?: true
  }

  export type DroneModelMaxAggregateInputType = {
    id?: true
    model?: true
    weight?: true
    capacityWeight?: true
    capacityVolume?: true
    size?: true
    composition?: true
    image?: true
  }

  export type DroneModelCountAggregateInputType = {
    id?: true
    model?: true
    weight?: true
    capacityWeight?: true
    capacityVolume?: true
    size?: true
    composition?: true
    image?: true
    _all?: true
  }

  export type DroneModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneModel to aggregate.
     */
    where?: DroneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneModels to fetch.
     */
    orderBy?: DroneModelOrderByWithRelationInput | DroneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DroneModels
    **/
    _count?: true | DroneModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroneModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroneModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneModelMaxAggregateInputType
  }

  export type GetDroneModelAggregateType<T extends DroneModelAggregateArgs> = {
        [P in keyof T & keyof AggregateDroneModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDroneModel[P]>
      : GetScalarType<T[P], AggregateDroneModel[P]>
  }




  export type DroneModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneModelWhereInput
    orderBy?: DroneModelOrderByWithAggregationInput | DroneModelOrderByWithAggregationInput[]
    by: DroneModelScalarFieldEnum[] | DroneModelScalarFieldEnum
    having?: DroneModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneModelCountAggregateInputType | true
    _avg?: DroneModelAvgAggregateInputType
    _sum?: DroneModelSumAggregateInputType
    _min?: DroneModelMinAggregateInputType
    _max?: DroneModelMaxAggregateInputType
  }

  export type DroneModelGroupByOutputType = {
    id: number
    model: string
    weight: Decimal
    capacityWeight: Decimal
    capacityVolume: Decimal
    size: string
    composition: string
    image: string | null
    _count: DroneModelCountAggregateOutputType | null
    _avg: DroneModelAvgAggregateOutputType | null
    _sum: DroneModelSumAggregateOutputType | null
    _min: DroneModelMinAggregateOutputType | null
    _max: DroneModelMaxAggregateOutputType | null
  }

  type GetDroneModelGroupByPayload<T extends DroneModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneModelGroupByOutputType[P]>
            : GetScalarType<T[P], DroneModelGroupByOutputType[P]>
        }
      >
    >


  export type DroneModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    weight?: boolean
    capacityWeight?: boolean
    capacityVolume?: boolean
    size?: boolean
    composition?: boolean
    image?: boolean
    DroneInstance?: boolean | DroneModel$DroneInstanceArgs<ExtArgs>
    _count?: boolean | DroneModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["droneModel"]>

  export type DroneModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    weight?: boolean
    capacityWeight?: boolean
    capacityVolume?: boolean
    size?: boolean
    composition?: boolean
    image?: boolean
  }, ExtArgs["result"]["droneModel"]>

  export type DroneModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    weight?: boolean
    capacityWeight?: boolean
    capacityVolume?: boolean
    size?: boolean
    composition?: boolean
    image?: boolean
  }, ExtArgs["result"]["droneModel"]>

  export type DroneModelSelectScalar = {
    id?: boolean
    model?: boolean
    weight?: boolean
    capacityWeight?: boolean
    capacityVolume?: boolean
    size?: boolean
    composition?: boolean
    image?: boolean
  }

  export type DroneModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "weight" | "capacityWeight" | "capacityVolume" | "size" | "composition" | "image", ExtArgs["result"]["droneModel"]>
  export type DroneModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DroneInstance?: boolean | DroneModel$DroneInstanceArgs<ExtArgs>
    _count?: boolean | DroneModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DroneModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DroneModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DroneModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DroneModel"
    objects: {
      DroneInstance: Prisma.$DroneInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      weight: Prisma.Decimal
      capacityWeight: Prisma.Decimal
      capacityVolume: Prisma.Decimal
      size: string
      composition: string
      image: string | null
    }, ExtArgs["result"]["droneModel"]>
    composites: {}
  }

  type DroneModelGetPayload<S extends boolean | null | undefined | DroneModelDefaultArgs> = $Result.GetResult<Prisma.$DroneModelPayload, S>

  type DroneModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneModelCountAggregateInputType | true
    }

  export interface DroneModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DroneModel'], meta: { name: 'DroneModel' } }
    /**
     * Find zero or one DroneModel that matches the filter.
     * @param {DroneModelFindUniqueArgs} args - Arguments to find a DroneModel
     * @example
     * // Get one DroneModel
     * const droneModel = await prisma.droneModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneModelFindUniqueArgs>(args: SelectSubset<T, DroneModelFindUniqueArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DroneModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneModelFindUniqueOrThrowArgs} args - Arguments to find a DroneModel
     * @example
     * // Get one DroneModel
     * const droneModel = await prisma.droneModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneModelFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneModelFindFirstArgs} args - Arguments to find a DroneModel
     * @example
     * // Get one DroneModel
     * const droneModel = await prisma.droneModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneModelFindFirstArgs>(args?: SelectSubset<T, DroneModelFindFirstArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneModelFindFirstOrThrowArgs} args - Arguments to find a DroneModel
     * @example
     * // Get one DroneModel
     * const droneModel = await prisma.droneModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneModelFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DroneModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DroneModels
     * const droneModels = await prisma.droneModel.findMany()
     * 
     * // Get first 10 DroneModels
     * const droneModels = await prisma.droneModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneModelWithIdOnly = await prisma.droneModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneModelFindManyArgs>(args?: SelectSubset<T, DroneModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DroneModel.
     * @param {DroneModelCreateArgs} args - Arguments to create a DroneModel.
     * @example
     * // Create one DroneModel
     * const DroneModel = await prisma.droneModel.create({
     *   data: {
     *     // ... data to create a DroneModel
     *   }
     * })
     * 
     */
    create<T extends DroneModelCreateArgs>(args: SelectSubset<T, DroneModelCreateArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DroneModels.
     * @param {DroneModelCreateManyArgs} args - Arguments to create many DroneModels.
     * @example
     * // Create many DroneModels
     * const droneModel = await prisma.droneModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneModelCreateManyArgs>(args?: SelectSubset<T, DroneModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DroneModels and returns the data saved in the database.
     * @param {DroneModelCreateManyAndReturnArgs} args - Arguments to create many DroneModels.
     * @example
     * // Create many DroneModels
     * const droneModel = await prisma.droneModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DroneModels and only return the `id`
     * const droneModelWithIdOnly = await prisma.droneModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DroneModelCreateManyAndReturnArgs>(args?: SelectSubset<T, DroneModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DroneModel.
     * @param {DroneModelDeleteArgs} args - Arguments to delete one DroneModel.
     * @example
     * // Delete one DroneModel
     * const DroneModel = await prisma.droneModel.delete({
     *   where: {
     *     // ... filter to delete one DroneModel
     *   }
     * })
     * 
     */
    delete<T extends DroneModelDeleteArgs>(args: SelectSubset<T, DroneModelDeleteArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DroneModel.
     * @param {DroneModelUpdateArgs} args - Arguments to update one DroneModel.
     * @example
     * // Update one DroneModel
     * const droneModel = await prisma.droneModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneModelUpdateArgs>(args: SelectSubset<T, DroneModelUpdateArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DroneModels.
     * @param {DroneModelDeleteManyArgs} args - Arguments to filter DroneModels to delete.
     * @example
     * // Delete a few DroneModels
     * const { count } = await prisma.droneModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneModelDeleteManyArgs>(args?: SelectSubset<T, DroneModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DroneModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DroneModels
     * const droneModel = await prisma.droneModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneModelUpdateManyArgs>(args: SelectSubset<T, DroneModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DroneModels and returns the data updated in the database.
     * @param {DroneModelUpdateManyAndReturnArgs} args - Arguments to update many DroneModels.
     * @example
     * // Update many DroneModels
     * const droneModel = await prisma.droneModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DroneModels and only return the `id`
     * const droneModelWithIdOnly = await prisma.droneModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DroneModelUpdateManyAndReturnArgs>(args: SelectSubset<T, DroneModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DroneModel.
     * @param {DroneModelUpsertArgs} args - Arguments to update or create a DroneModel.
     * @example
     * // Update or create a DroneModel
     * const droneModel = await prisma.droneModel.upsert({
     *   create: {
     *     // ... data to create a DroneModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DroneModel we want to update
     *   }
     * })
     */
    upsert<T extends DroneModelUpsertArgs>(args: SelectSubset<T, DroneModelUpsertArgs<ExtArgs>>): Prisma__DroneModelClient<$Result.GetResult<Prisma.$DroneModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DroneModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneModelCountArgs} args - Arguments to filter DroneModels to count.
     * @example
     * // Count the number of DroneModels
     * const count = await prisma.droneModel.count({
     *   where: {
     *     // ... the filter for the DroneModels we want to count
     *   }
     * })
    **/
    count<T extends DroneModelCountArgs>(
      args?: Subset<T, DroneModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DroneModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DroneModelAggregateArgs>(args: Subset<T, DroneModelAggregateArgs>): Prisma.PrismaPromise<GetDroneModelAggregateType<T>>

    /**
     * Group by DroneModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneModelGroupByArgs} args - Group by arguments.
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
      T extends DroneModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneModelGroupByArgs['orderBy'] }
        : { orderBy?: DroneModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DroneModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DroneModel model
   */
  readonly fields: DroneModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DroneModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DroneInstance<T extends DroneModel$DroneInstanceArgs<ExtArgs> = {}>(args?: Subset<T, DroneModel$DroneInstanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DroneModel model
   */
  interface DroneModelFieldRefs {
    readonly id: FieldRef<"DroneModel", 'Int'>
    readonly model: FieldRef<"DroneModel", 'String'>
    readonly weight: FieldRef<"DroneModel", 'Decimal'>
    readonly capacityWeight: FieldRef<"DroneModel", 'Decimal'>
    readonly capacityVolume: FieldRef<"DroneModel", 'Decimal'>
    readonly size: FieldRef<"DroneModel", 'String'>
    readonly composition: FieldRef<"DroneModel", 'String'>
    readonly image: FieldRef<"DroneModel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DroneModel findUnique
   */
  export type DroneModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * Filter, which DroneModel to fetch.
     */
    where: DroneModelWhereUniqueInput
  }

  /**
   * DroneModel findUniqueOrThrow
   */
  export type DroneModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * Filter, which DroneModel to fetch.
     */
    where: DroneModelWhereUniqueInput
  }

  /**
   * DroneModel findFirst
   */
  export type DroneModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * Filter, which DroneModel to fetch.
     */
    where?: DroneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneModels to fetch.
     */
    orderBy?: DroneModelOrderByWithRelationInput | DroneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneModels.
     */
    cursor?: DroneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneModels.
     */
    distinct?: DroneModelScalarFieldEnum | DroneModelScalarFieldEnum[]
  }

  /**
   * DroneModel findFirstOrThrow
   */
  export type DroneModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * Filter, which DroneModel to fetch.
     */
    where?: DroneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneModels to fetch.
     */
    orderBy?: DroneModelOrderByWithRelationInput | DroneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneModels.
     */
    cursor?: DroneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneModels.
     */
    distinct?: DroneModelScalarFieldEnum | DroneModelScalarFieldEnum[]
  }

  /**
   * DroneModel findMany
   */
  export type DroneModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * Filter, which DroneModels to fetch.
     */
    where?: DroneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneModels to fetch.
     */
    orderBy?: DroneModelOrderByWithRelationInput | DroneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DroneModels.
     */
    cursor?: DroneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneModels.
     */
    skip?: number
    distinct?: DroneModelScalarFieldEnum | DroneModelScalarFieldEnum[]
  }

  /**
   * DroneModel create
   */
  export type DroneModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * The data needed to create a DroneModel.
     */
    data: XOR<DroneModelCreateInput, DroneModelUncheckedCreateInput>
  }

  /**
   * DroneModel createMany
   */
  export type DroneModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DroneModels.
     */
    data: DroneModelCreateManyInput | DroneModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DroneModel createManyAndReturn
   */
  export type DroneModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * The data used to create many DroneModels.
     */
    data: DroneModelCreateManyInput | DroneModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DroneModel update
   */
  export type DroneModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * The data needed to update a DroneModel.
     */
    data: XOR<DroneModelUpdateInput, DroneModelUncheckedUpdateInput>
    /**
     * Choose, which DroneModel to update.
     */
    where: DroneModelWhereUniqueInput
  }

  /**
   * DroneModel updateMany
   */
  export type DroneModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DroneModels.
     */
    data: XOR<DroneModelUpdateManyMutationInput, DroneModelUncheckedUpdateManyInput>
    /**
     * Filter which DroneModels to update
     */
    where?: DroneModelWhereInput
    /**
     * Limit how many DroneModels to update.
     */
    limit?: number
  }

  /**
   * DroneModel updateManyAndReturn
   */
  export type DroneModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * The data used to update DroneModels.
     */
    data: XOR<DroneModelUpdateManyMutationInput, DroneModelUncheckedUpdateManyInput>
    /**
     * Filter which DroneModels to update
     */
    where?: DroneModelWhereInput
    /**
     * Limit how many DroneModels to update.
     */
    limit?: number
  }

  /**
   * DroneModel upsert
   */
  export type DroneModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * The filter to search for the DroneModel to update in case it exists.
     */
    where: DroneModelWhereUniqueInput
    /**
     * In case the DroneModel found by the `where` argument doesn't exist, create a new DroneModel with this data.
     */
    create: XOR<DroneModelCreateInput, DroneModelUncheckedCreateInput>
    /**
     * In case the DroneModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneModelUpdateInput, DroneModelUncheckedUpdateInput>
  }

  /**
   * DroneModel delete
   */
  export type DroneModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
    /**
     * Filter which DroneModel to delete.
     */
    where: DroneModelWhereUniqueInput
  }

  /**
   * DroneModel deleteMany
   */
  export type DroneModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneModels to delete
     */
    where?: DroneModelWhereInput
    /**
     * Limit how many DroneModels to delete.
     */
    limit?: number
  }

  /**
   * DroneModel.DroneInstance
   */
  export type DroneModel$DroneInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneInstance
     */
    select?: DroneInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneInstance
     */
    omit?: DroneInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInstanceInclude<ExtArgs> | null
    where?: DroneInstanceWhereInput
    orderBy?: DroneInstanceOrderByWithRelationInput | DroneInstanceOrderByWithRelationInput[]
    cursor?: DroneInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DroneInstanceScalarFieldEnum | DroneInstanceScalarFieldEnum[]
  }

  /**
   * DroneModel without action
   */
  export type DroneModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneModel
     */
    select?: DroneModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneModel
     */
    omit?: DroneModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneModelInclude<ExtArgs> | null
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


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    credits: 'credits'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    cnpj: 'cnpj',
    credits: 'credits'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    number: 'number',
    clientId: 'clientId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    price: 'price',
    pickupLocation: 'pickupLocation',
    deliveryLocation: 'deliveryLocation',
    droneInstanceId: 'droneInstanceId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const DroneInstanceScalarFieldEnum: {
    id: 'id',
    region: 'region',
    supplierId: 'supplierId',
    modelId: 'modelId'
  };

  export type DroneInstanceScalarFieldEnum = (typeof DroneInstanceScalarFieldEnum)[keyof typeof DroneInstanceScalarFieldEnum]


  export const DroneModelScalarFieldEnum: {
    id: 'id',
    model: 'model',
    weight: 'weight',
    capacityWeight: 'capacityWeight',
    capacityVolume: 'capacityVolume',
    size: 'size',
    composition: 'composition',
    image: 'image'
  };

  export type DroneModelScalarFieldEnum = (typeof DroneModelScalarFieldEnum)[keyof typeof DroneModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    password?: StringFilter<"Client"> | string
    credits?: DecimalFilter<"Client"> | Decimal | DecimalJsLike | number | string
    Order?: OrderListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
    Order?: OrderOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    password?: StringFilter<"Client"> | string
    credits?: DecimalFilter<"Client"> | Decimal | DecimalJsLike | number | string
    Order?: OrderListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    password?: StringWithAggregatesFilter<"Client"> | string
    credits?: DecimalWithAggregatesFilter<"Client"> | Decimal | DecimalJsLike | number | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    password?: StringFilter<"Supplier"> | string
    cnpj?: StringFilter<"Supplier"> | string
    credits?: DecimalFilter<"Supplier"> | Decimal | DecimalJsLike | number | string
    DroneInstance?: DroneInstanceListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cnpj?: SortOrder
    credits?: SortOrder
    DroneInstance?: DroneInstanceOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cnpj?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    password?: StringFilter<"Supplier"> | string
    credits?: DecimalFilter<"Supplier"> | Decimal | DecimalJsLike | number | string
    DroneInstance?: DroneInstanceListRelationFilter
  }, "id" | "email" | "cnpj">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cnpj?: SortOrder
    credits?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringWithAggregatesFilter<"Supplier"> | string
    password?: StringWithAggregatesFilter<"Supplier"> | string
    cnpj?: StringWithAggregatesFilter<"Supplier"> | string
    credits?: DecimalWithAggregatesFilter<"Supplier"> | Decimal | DecimalJsLike | number | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    number?: IntFilter<"Order"> | number
    clientId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonFilter<"Order">
    deliveryLocation?: JsonFilter<"Order">
    droneInstanceId?: IntNullableFilter<"Order"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    droneInstance?: XOR<DroneInstanceNullableScalarRelationFilter, DroneInstanceWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    pickupLocation?: SortOrder
    deliveryLocation?: SortOrder
    droneInstanceId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    droneInstance?: DroneInstanceOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    number?: IntFilter<"Order"> | number
    clientId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonFilter<"Order">
    deliveryLocation?: JsonFilter<"Order">
    droneInstanceId?: IntNullableFilter<"Order"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    droneInstance?: XOR<DroneInstanceNullableScalarRelationFilter, DroneInstanceWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    pickupLocation?: SortOrder
    deliveryLocation?: SortOrder
    droneInstanceId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    number?: IntWithAggregatesFilter<"Order"> | number
    clientId?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    price?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonWithAggregatesFilter<"Order">
    deliveryLocation?: JsonWithAggregatesFilter<"Order">
    droneInstanceId?: IntNullableWithAggregatesFilter<"Order"> | number | null
  }

  export type DroneInstanceWhereInput = {
    AND?: DroneInstanceWhereInput | DroneInstanceWhereInput[]
    OR?: DroneInstanceWhereInput[]
    NOT?: DroneInstanceWhereInput | DroneInstanceWhereInput[]
    id?: IntFilter<"DroneInstance"> | number
    region?: JsonFilter<"DroneInstance">
    supplierId?: IntFilter<"DroneInstance"> | number
    modelId?: IntFilter<"DroneInstance"> | number
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    model?: XOR<DroneModelScalarRelationFilter, DroneModelWhereInput>
    Order?: OrderListRelationFilter
  }

  export type DroneInstanceOrderByWithRelationInput = {
    id?: SortOrder
    region?: SortOrder
    supplierId?: SortOrder
    modelId?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    model?: DroneModelOrderByWithRelationInput
    Order?: OrderOrderByRelationAggregateInput
  }

  export type DroneInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DroneInstanceWhereInput | DroneInstanceWhereInput[]
    OR?: DroneInstanceWhereInput[]
    NOT?: DroneInstanceWhereInput | DroneInstanceWhereInput[]
    region?: JsonFilter<"DroneInstance">
    supplierId?: IntFilter<"DroneInstance"> | number
    modelId?: IntFilter<"DroneInstance"> | number
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    model?: XOR<DroneModelScalarRelationFilter, DroneModelWhereInput>
    Order?: OrderListRelationFilter
  }, "id">

  export type DroneInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    region?: SortOrder
    supplierId?: SortOrder
    modelId?: SortOrder
    _count?: DroneInstanceCountOrderByAggregateInput
    _avg?: DroneInstanceAvgOrderByAggregateInput
    _max?: DroneInstanceMaxOrderByAggregateInput
    _min?: DroneInstanceMinOrderByAggregateInput
    _sum?: DroneInstanceSumOrderByAggregateInput
  }

  export type DroneInstanceScalarWhereWithAggregatesInput = {
    AND?: DroneInstanceScalarWhereWithAggregatesInput | DroneInstanceScalarWhereWithAggregatesInput[]
    OR?: DroneInstanceScalarWhereWithAggregatesInput[]
    NOT?: DroneInstanceScalarWhereWithAggregatesInput | DroneInstanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DroneInstance"> | number
    region?: JsonWithAggregatesFilter<"DroneInstance">
    supplierId?: IntWithAggregatesFilter<"DroneInstance"> | number
    modelId?: IntWithAggregatesFilter<"DroneInstance"> | number
  }

  export type DroneModelWhereInput = {
    AND?: DroneModelWhereInput | DroneModelWhereInput[]
    OR?: DroneModelWhereInput[]
    NOT?: DroneModelWhereInput | DroneModelWhereInput[]
    id?: IntFilter<"DroneModel"> | number
    model?: StringFilter<"DroneModel"> | string
    weight?: DecimalFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    size?: StringFilter<"DroneModel"> | string
    composition?: StringFilter<"DroneModel"> | string
    image?: StringNullableFilter<"DroneModel"> | string | null
    DroneInstance?: DroneInstanceListRelationFilter
  }

  export type DroneModelOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    weight?: SortOrder
    capacityWeight?: SortOrder
    capacityVolume?: SortOrder
    size?: SortOrder
    composition?: SortOrder
    image?: SortOrderInput | SortOrder
    DroneInstance?: DroneInstanceOrderByRelationAggregateInput
  }

  export type DroneModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DroneModelWhereInput | DroneModelWhereInput[]
    OR?: DroneModelWhereInput[]
    NOT?: DroneModelWhereInput | DroneModelWhereInput[]
    model?: StringFilter<"DroneModel"> | string
    weight?: DecimalFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    size?: StringFilter<"DroneModel"> | string
    composition?: StringFilter<"DroneModel"> | string
    image?: StringNullableFilter<"DroneModel"> | string | null
    DroneInstance?: DroneInstanceListRelationFilter
  }, "id">

  export type DroneModelOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    weight?: SortOrder
    capacityWeight?: SortOrder
    capacityVolume?: SortOrder
    size?: SortOrder
    composition?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: DroneModelCountOrderByAggregateInput
    _avg?: DroneModelAvgOrderByAggregateInput
    _max?: DroneModelMaxOrderByAggregateInput
    _min?: DroneModelMinOrderByAggregateInput
    _sum?: DroneModelSumOrderByAggregateInput
  }

  export type DroneModelScalarWhereWithAggregatesInput = {
    AND?: DroneModelScalarWhereWithAggregatesInput | DroneModelScalarWhereWithAggregatesInput[]
    OR?: DroneModelScalarWhereWithAggregatesInput[]
    NOT?: DroneModelScalarWhereWithAggregatesInput | DroneModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DroneModel"> | number
    model?: StringWithAggregatesFilter<"DroneModel"> | string
    weight?: DecimalWithAggregatesFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalWithAggregatesFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalWithAggregatesFilter<"DroneModel"> | Decimal | DecimalJsLike | number | string
    size?: StringWithAggregatesFilter<"DroneModel"> | string
    composition?: StringWithAggregatesFilter<"DroneModel"> | string
    image?: StringNullableWithAggregatesFilter<"DroneModel"> | string | null
  }

  export type ClientCreateInput = {
    name: string
    email: string
    password: string
    credits: Decimal | DecimalJsLike | number | string
    Order?: OrderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    credits: Decimal | DecimalJsLike | number | string
    Order?: OrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Order?: OrderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Order?: OrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    credits: Decimal | DecimalJsLike | number | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SupplierCreateInput = {
    name: string
    email: string
    password: string
    cnpj: string
    credits: Decimal | DecimalJsLike | number | string
    DroneInstance?: DroneInstanceCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    cnpj: string
    credits: Decimal | DecimalJsLike | number | string
    DroneInstance?: DroneInstanceUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DroneInstance?: DroneInstanceUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DroneInstance?: DroneInstanceUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    cnpj: string
    credits: Decimal | DecimalJsLike | number | string
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderCreateInput = {
    number: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
    client: ClientCreateNestedOneWithoutOrderInput
    droneInstance?: DroneInstanceCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    number: number
    clientId: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
    droneInstanceId?: number | null
  }

  export type OrderUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
    client?: ClientUpdateOneRequiredWithoutOrderNestedInput
    droneInstance?: DroneInstanceUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
    droneInstanceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyInput = {
    id?: number
    number: number
    clientId: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
    droneInstanceId?: number | null
  }

  export type OrderUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
    droneInstanceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DroneInstanceCreateInput = {
    region: JsonNullValueInput | InputJsonValue
    supplier: SupplierCreateNestedOneWithoutDroneInstanceInput
    model: DroneModelCreateNestedOneWithoutDroneInstanceInput
    Order?: OrderCreateNestedManyWithoutDroneInstanceInput
  }

  export type DroneInstanceUncheckedCreateInput = {
    id?: number
    region: JsonNullValueInput | InputJsonValue
    supplierId: number
    modelId: number
    Order?: OrderUncheckedCreateNestedManyWithoutDroneInstanceInput
  }

  export type DroneInstanceUpdateInput = {
    region?: JsonNullValueInput | InputJsonValue
    supplier?: SupplierUpdateOneRequiredWithoutDroneInstanceNestedInput
    model?: DroneModelUpdateOneRequiredWithoutDroneInstanceNestedInput
    Order?: OrderUpdateManyWithoutDroneInstanceNestedInput
  }

  export type DroneInstanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: JsonNullValueInput | InputJsonValue
    supplierId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    Order?: OrderUncheckedUpdateManyWithoutDroneInstanceNestedInput
  }

  export type DroneInstanceCreateManyInput = {
    id?: number
    region: JsonNullValueInput | InputJsonValue
    supplierId: number
    modelId: number
  }

  export type DroneInstanceUpdateManyMutationInput = {
    region?: JsonNullValueInput | InputJsonValue
  }

  export type DroneInstanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: JsonNullValueInput | InputJsonValue
    supplierId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type DroneModelCreateInput = {
    model: string
    weight: Decimal | DecimalJsLike | number | string
    capacityWeight: Decimal | DecimalJsLike | number | string
    capacityVolume: Decimal | DecimalJsLike | number | string
    size: string
    composition: string
    image?: string | null
    DroneInstance?: DroneInstanceCreateNestedManyWithoutModelInput
  }

  export type DroneModelUncheckedCreateInput = {
    id?: number
    model: string
    weight: Decimal | DecimalJsLike | number | string
    capacityWeight: Decimal | DecimalJsLike | number | string
    capacityVolume: Decimal | DecimalJsLike | number | string
    size: string
    composition: string
    image?: string | null
    DroneInstance?: DroneInstanceUncheckedCreateNestedManyWithoutModelInput
  }

  export type DroneModelUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    DroneInstance?: DroneInstanceUpdateManyWithoutModelNestedInput
  }

  export type DroneModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    DroneInstance?: DroneInstanceUncheckedUpdateManyWithoutModelNestedInput
  }

  export type DroneModelCreateManyInput = {
    id?: number
    model: string
    weight: Decimal | DecimalJsLike | number | string
    capacityWeight: Decimal | DecimalJsLike | number | string
    capacityVolume: Decimal | DecimalJsLike | number | string
    size: string
    composition: string
    image?: string | null
  }

  export type DroneModelUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DroneModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DroneInstanceListRelationFilter = {
    every?: DroneInstanceWhereInput
    some?: DroneInstanceWhereInput
    none?: DroneInstanceWhereInput
  }

  export type DroneInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cnpj?: SortOrder
    credits?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cnpj?: SortOrder
    credits?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cnpj?: SortOrder
    credits?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type DroneInstanceNullableScalarRelationFilter = {
    is?: DroneInstanceWhereInput | null
    isNot?: DroneInstanceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    pickupLocation?: SortOrder
    deliveryLocation?: SortOrder
    droneInstanceId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    clientId?: SortOrder
    price?: SortOrder
    droneInstanceId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    droneInstanceId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    droneInstanceId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    clientId?: SortOrder
    price?: SortOrder
    droneInstanceId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type DroneModelScalarRelationFilter = {
    is?: DroneModelWhereInput
    isNot?: DroneModelWhereInput
  }

  export type DroneInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    region?: SortOrder
    supplierId?: SortOrder
    modelId?: SortOrder
  }

  export type DroneInstanceAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    modelId?: SortOrder
  }

  export type DroneInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    modelId?: SortOrder
  }

  export type DroneInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    modelId?: SortOrder
  }

  export type DroneInstanceSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    modelId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DroneModelCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    weight?: SortOrder
    capacityWeight?: SortOrder
    capacityVolume?: SortOrder
    size?: SortOrder
    composition?: SortOrder
    image?: SortOrder
  }

  export type DroneModelAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    capacityWeight?: SortOrder
    capacityVolume?: SortOrder
  }

  export type DroneModelMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    weight?: SortOrder
    capacityWeight?: SortOrder
    capacityVolume?: SortOrder
    size?: SortOrder
    composition?: SortOrder
    image?: SortOrder
  }

  export type DroneModelMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    weight?: SortOrder
    capacityWeight?: SortOrder
    capacityVolume?: SortOrder
    size?: SortOrder
    composition?: SortOrder
    image?: SortOrder
  }

  export type DroneModelSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    capacityWeight?: SortOrder
    capacityVolume?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrderCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DroneInstanceCreateNestedManyWithoutSupplierInput = {
    create?: XOR<DroneInstanceCreateWithoutSupplierInput, DroneInstanceUncheckedCreateWithoutSupplierInput> | DroneInstanceCreateWithoutSupplierInput[] | DroneInstanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutSupplierInput | DroneInstanceCreateOrConnectWithoutSupplierInput[]
    createMany?: DroneInstanceCreateManySupplierInputEnvelope
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
  }

  export type DroneInstanceUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<DroneInstanceCreateWithoutSupplierInput, DroneInstanceUncheckedCreateWithoutSupplierInput> | DroneInstanceCreateWithoutSupplierInput[] | DroneInstanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutSupplierInput | DroneInstanceCreateOrConnectWithoutSupplierInput[]
    createMany?: DroneInstanceCreateManySupplierInputEnvelope
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
  }

  export type DroneInstanceUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<DroneInstanceCreateWithoutSupplierInput, DroneInstanceUncheckedCreateWithoutSupplierInput> | DroneInstanceCreateWithoutSupplierInput[] | DroneInstanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutSupplierInput | DroneInstanceCreateOrConnectWithoutSupplierInput[]
    upsert?: DroneInstanceUpsertWithWhereUniqueWithoutSupplierInput | DroneInstanceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: DroneInstanceCreateManySupplierInputEnvelope
    set?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    disconnect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    delete?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    update?: DroneInstanceUpdateWithWhereUniqueWithoutSupplierInput | DroneInstanceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: DroneInstanceUpdateManyWithWhereWithoutSupplierInput | DroneInstanceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: DroneInstanceScalarWhereInput | DroneInstanceScalarWhereInput[]
  }

  export type DroneInstanceUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<DroneInstanceCreateWithoutSupplierInput, DroneInstanceUncheckedCreateWithoutSupplierInput> | DroneInstanceCreateWithoutSupplierInput[] | DroneInstanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutSupplierInput | DroneInstanceCreateOrConnectWithoutSupplierInput[]
    upsert?: DroneInstanceUpsertWithWhereUniqueWithoutSupplierInput | DroneInstanceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: DroneInstanceCreateManySupplierInputEnvelope
    set?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    disconnect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    delete?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    update?: DroneInstanceUpdateWithWhereUniqueWithoutSupplierInput | DroneInstanceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: DroneInstanceUpdateManyWithWhereWithoutSupplierInput | DroneInstanceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: DroneInstanceScalarWhereInput | DroneInstanceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutOrderInput = {
    create?: XOR<ClientCreateWithoutOrderInput, ClientUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrderInput
    connect?: ClientWhereUniqueInput
  }

  export type DroneInstanceCreateNestedOneWithoutOrderInput = {
    create?: XOR<DroneInstanceCreateWithoutOrderInput, DroneInstanceUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutOrderInput
    connect?: DroneInstanceWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<ClientCreateWithoutOrderInput, ClientUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrderInput
    upsert?: ClientUpsertWithoutOrderInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutOrderInput, ClientUpdateWithoutOrderInput>, ClientUncheckedUpdateWithoutOrderInput>
  }

  export type DroneInstanceUpdateOneWithoutOrderNestedInput = {
    create?: XOR<DroneInstanceCreateWithoutOrderInput, DroneInstanceUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutOrderInput
    upsert?: DroneInstanceUpsertWithoutOrderInput
    disconnect?: DroneInstanceWhereInput | boolean
    delete?: DroneInstanceWhereInput | boolean
    connect?: DroneInstanceWhereUniqueInput
    update?: XOR<XOR<DroneInstanceUpdateToOneWithWhereWithoutOrderInput, DroneInstanceUpdateWithoutOrderInput>, DroneInstanceUncheckedUpdateWithoutOrderInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplierCreateNestedOneWithoutDroneInstanceInput = {
    create?: XOR<SupplierCreateWithoutDroneInstanceInput, SupplierUncheckedCreateWithoutDroneInstanceInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutDroneInstanceInput
    connect?: SupplierWhereUniqueInput
  }

  export type DroneModelCreateNestedOneWithoutDroneInstanceInput = {
    create?: XOR<DroneModelCreateWithoutDroneInstanceInput, DroneModelUncheckedCreateWithoutDroneInstanceInput>
    connectOrCreate?: DroneModelCreateOrConnectWithoutDroneInstanceInput
    connect?: DroneModelWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutDroneInstanceInput = {
    create?: XOR<OrderCreateWithoutDroneInstanceInput, OrderUncheckedCreateWithoutDroneInstanceInput> | OrderCreateWithoutDroneInstanceInput[] | OrderUncheckedCreateWithoutDroneInstanceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDroneInstanceInput | OrderCreateOrConnectWithoutDroneInstanceInput[]
    createMany?: OrderCreateManyDroneInstanceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDroneInstanceInput = {
    create?: XOR<OrderCreateWithoutDroneInstanceInput, OrderUncheckedCreateWithoutDroneInstanceInput> | OrderCreateWithoutDroneInstanceInput[] | OrderUncheckedCreateWithoutDroneInstanceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDroneInstanceInput | OrderCreateOrConnectWithoutDroneInstanceInput[]
    createMany?: OrderCreateManyDroneInstanceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type SupplierUpdateOneRequiredWithoutDroneInstanceNestedInput = {
    create?: XOR<SupplierCreateWithoutDroneInstanceInput, SupplierUncheckedCreateWithoutDroneInstanceInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutDroneInstanceInput
    upsert?: SupplierUpsertWithoutDroneInstanceInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutDroneInstanceInput, SupplierUpdateWithoutDroneInstanceInput>, SupplierUncheckedUpdateWithoutDroneInstanceInput>
  }

  export type DroneModelUpdateOneRequiredWithoutDroneInstanceNestedInput = {
    create?: XOR<DroneModelCreateWithoutDroneInstanceInput, DroneModelUncheckedCreateWithoutDroneInstanceInput>
    connectOrCreate?: DroneModelCreateOrConnectWithoutDroneInstanceInput
    upsert?: DroneModelUpsertWithoutDroneInstanceInput
    connect?: DroneModelWhereUniqueInput
    update?: XOR<XOR<DroneModelUpdateToOneWithWhereWithoutDroneInstanceInput, DroneModelUpdateWithoutDroneInstanceInput>, DroneModelUncheckedUpdateWithoutDroneInstanceInput>
  }

  export type OrderUpdateManyWithoutDroneInstanceNestedInput = {
    create?: XOR<OrderCreateWithoutDroneInstanceInput, OrderUncheckedCreateWithoutDroneInstanceInput> | OrderCreateWithoutDroneInstanceInput[] | OrderUncheckedCreateWithoutDroneInstanceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDroneInstanceInput | OrderCreateOrConnectWithoutDroneInstanceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDroneInstanceInput | OrderUpsertWithWhereUniqueWithoutDroneInstanceInput[]
    createMany?: OrderCreateManyDroneInstanceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDroneInstanceInput | OrderUpdateWithWhereUniqueWithoutDroneInstanceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDroneInstanceInput | OrderUpdateManyWithWhereWithoutDroneInstanceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDroneInstanceNestedInput = {
    create?: XOR<OrderCreateWithoutDroneInstanceInput, OrderUncheckedCreateWithoutDroneInstanceInput> | OrderCreateWithoutDroneInstanceInput[] | OrderUncheckedCreateWithoutDroneInstanceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDroneInstanceInput | OrderCreateOrConnectWithoutDroneInstanceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDroneInstanceInput | OrderUpsertWithWhereUniqueWithoutDroneInstanceInput[]
    createMany?: OrderCreateManyDroneInstanceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDroneInstanceInput | OrderUpdateWithWhereUniqueWithoutDroneInstanceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDroneInstanceInput | OrderUpdateManyWithWhereWithoutDroneInstanceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DroneInstanceCreateNestedManyWithoutModelInput = {
    create?: XOR<DroneInstanceCreateWithoutModelInput, DroneInstanceUncheckedCreateWithoutModelInput> | DroneInstanceCreateWithoutModelInput[] | DroneInstanceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutModelInput | DroneInstanceCreateOrConnectWithoutModelInput[]
    createMany?: DroneInstanceCreateManyModelInputEnvelope
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
  }

  export type DroneInstanceUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<DroneInstanceCreateWithoutModelInput, DroneInstanceUncheckedCreateWithoutModelInput> | DroneInstanceCreateWithoutModelInput[] | DroneInstanceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutModelInput | DroneInstanceCreateOrConnectWithoutModelInput[]
    createMany?: DroneInstanceCreateManyModelInputEnvelope
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DroneInstanceUpdateManyWithoutModelNestedInput = {
    create?: XOR<DroneInstanceCreateWithoutModelInput, DroneInstanceUncheckedCreateWithoutModelInput> | DroneInstanceCreateWithoutModelInput[] | DroneInstanceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutModelInput | DroneInstanceCreateOrConnectWithoutModelInput[]
    upsert?: DroneInstanceUpsertWithWhereUniqueWithoutModelInput | DroneInstanceUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: DroneInstanceCreateManyModelInputEnvelope
    set?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    disconnect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    delete?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    update?: DroneInstanceUpdateWithWhereUniqueWithoutModelInput | DroneInstanceUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: DroneInstanceUpdateManyWithWhereWithoutModelInput | DroneInstanceUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: DroneInstanceScalarWhereInput | DroneInstanceScalarWhereInput[]
  }

  export type DroneInstanceUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<DroneInstanceCreateWithoutModelInput, DroneInstanceUncheckedCreateWithoutModelInput> | DroneInstanceCreateWithoutModelInput[] | DroneInstanceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: DroneInstanceCreateOrConnectWithoutModelInput | DroneInstanceCreateOrConnectWithoutModelInput[]
    upsert?: DroneInstanceUpsertWithWhereUniqueWithoutModelInput | DroneInstanceUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: DroneInstanceCreateManyModelInputEnvelope
    set?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    disconnect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    delete?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    connect?: DroneInstanceWhereUniqueInput | DroneInstanceWhereUniqueInput[]
    update?: DroneInstanceUpdateWithWhereUniqueWithoutModelInput | DroneInstanceUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: DroneInstanceUpdateManyWithWhereWithoutModelInput | DroneInstanceUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: DroneInstanceScalarWhereInput | DroneInstanceScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type OrderCreateWithoutClientInput = {
    number: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
    droneInstance?: DroneInstanceCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutClientInput = {
    id?: number
    number: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
    droneInstanceId?: number | null
  }

  export type OrderCreateOrConnectWithoutClientInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderCreateManyClientInputEnvelope = {
    data: OrderCreateManyClientInput | OrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
  }

  export type OrderUpdateManyWithWhereWithoutClientInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutClientInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    number?: IntFilter<"Order"> | number
    clientId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonFilter<"Order">
    deliveryLocation?: JsonFilter<"Order">
    droneInstanceId?: IntNullableFilter<"Order"> | number | null
  }

  export type DroneInstanceCreateWithoutSupplierInput = {
    region: JsonNullValueInput | InputJsonValue
    model: DroneModelCreateNestedOneWithoutDroneInstanceInput
    Order?: OrderCreateNestedManyWithoutDroneInstanceInput
  }

  export type DroneInstanceUncheckedCreateWithoutSupplierInput = {
    id?: number
    region: JsonNullValueInput | InputJsonValue
    modelId: number
    Order?: OrderUncheckedCreateNestedManyWithoutDroneInstanceInput
  }

  export type DroneInstanceCreateOrConnectWithoutSupplierInput = {
    where: DroneInstanceWhereUniqueInput
    create: XOR<DroneInstanceCreateWithoutSupplierInput, DroneInstanceUncheckedCreateWithoutSupplierInput>
  }

  export type DroneInstanceCreateManySupplierInputEnvelope = {
    data: DroneInstanceCreateManySupplierInput | DroneInstanceCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type DroneInstanceUpsertWithWhereUniqueWithoutSupplierInput = {
    where: DroneInstanceWhereUniqueInput
    update: XOR<DroneInstanceUpdateWithoutSupplierInput, DroneInstanceUncheckedUpdateWithoutSupplierInput>
    create: XOR<DroneInstanceCreateWithoutSupplierInput, DroneInstanceUncheckedCreateWithoutSupplierInput>
  }

  export type DroneInstanceUpdateWithWhereUniqueWithoutSupplierInput = {
    where: DroneInstanceWhereUniqueInput
    data: XOR<DroneInstanceUpdateWithoutSupplierInput, DroneInstanceUncheckedUpdateWithoutSupplierInput>
  }

  export type DroneInstanceUpdateManyWithWhereWithoutSupplierInput = {
    where: DroneInstanceScalarWhereInput
    data: XOR<DroneInstanceUpdateManyMutationInput, DroneInstanceUncheckedUpdateManyWithoutSupplierInput>
  }

  export type DroneInstanceScalarWhereInput = {
    AND?: DroneInstanceScalarWhereInput | DroneInstanceScalarWhereInput[]
    OR?: DroneInstanceScalarWhereInput[]
    NOT?: DroneInstanceScalarWhereInput | DroneInstanceScalarWhereInput[]
    id?: IntFilter<"DroneInstance"> | number
    region?: JsonFilter<"DroneInstance">
    supplierId?: IntFilter<"DroneInstance"> | number
    modelId?: IntFilter<"DroneInstance"> | number
  }

  export type ClientCreateWithoutOrderInput = {
    name: string
    email: string
    password: string
    credits: Decimal | DecimalJsLike | number | string
  }

  export type ClientUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    email: string
    password: string
    credits: Decimal | DecimalJsLike | number | string
  }

  export type ClientCreateOrConnectWithoutOrderInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOrderInput, ClientUncheckedCreateWithoutOrderInput>
  }

  export type DroneInstanceCreateWithoutOrderInput = {
    region: JsonNullValueInput | InputJsonValue
    supplier: SupplierCreateNestedOneWithoutDroneInstanceInput
    model: DroneModelCreateNestedOneWithoutDroneInstanceInput
  }

  export type DroneInstanceUncheckedCreateWithoutOrderInput = {
    id?: number
    region: JsonNullValueInput | InputJsonValue
    supplierId: number
    modelId: number
  }

  export type DroneInstanceCreateOrConnectWithoutOrderInput = {
    where: DroneInstanceWhereUniqueInput
    create: XOR<DroneInstanceCreateWithoutOrderInput, DroneInstanceUncheckedCreateWithoutOrderInput>
  }

  export type ClientUpsertWithoutOrderInput = {
    update: XOR<ClientUpdateWithoutOrderInput, ClientUncheckedUpdateWithoutOrderInput>
    create: XOR<ClientCreateWithoutOrderInput, ClientUncheckedCreateWithoutOrderInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutOrderInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutOrderInput, ClientUncheckedUpdateWithoutOrderInput>
  }

  export type ClientUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ClientUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DroneInstanceUpsertWithoutOrderInput = {
    update: XOR<DroneInstanceUpdateWithoutOrderInput, DroneInstanceUncheckedUpdateWithoutOrderInput>
    create: XOR<DroneInstanceCreateWithoutOrderInput, DroneInstanceUncheckedCreateWithoutOrderInput>
    where?: DroneInstanceWhereInput
  }

  export type DroneInstanceUpdateToOneWithWhereWithoutOrderInput = {
    where?: DroneInstanceWhereInput
    data: XOR<DroneInstanceUpdateWithoutOrderInput, DroneInstanceUncheckedUpdateWithoutOrderInput>
  }

  export type DroneInstanceUpdateWithoutOrderInput = {
    region?: JsonNullValueInput | InputJsonValue
    supplier?: SupplierUpdateOneRequiredWithoutDroneInstanceNestedInput
    model?: DroneModelUpdateOneRequiredWithoutDroneInstanceNestedInput
  }

  export type DroneInstanceUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: JsonNullValueInput | InputJsonValue
    supplierId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierCreateWithoutDroneInstanceInput = {
    name: string
    email: string
    password: string
    cnpj: string
    credits: Decimal | DecimalJsLike | number | string
  }

  export type SupplierUncheckedCreateWithoutDroneInstanceInput = {
    id?: number
    name: string
    email: string
    password: string
    cnpj: string
    credits: Decimal | DecimalJsLike | number | string
  }

  export type SupplierCreateOrConnectWithoutDroneInstanceInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutDroneInstanceInput, SupplierUncheckedCreateWithoutDroneInstanceInput>
  }

  export type DroneModelCreateWithoutDroneInstanceInput = {
    model: string
    weight: Decimal | DecimalJsLike | number | string
    capacityWeight: Decimal | DecimalJsLike | number | string
    capacityVolume: Decimal | DecimalJsLike | number | string
    size: string
    composition: string
    image?: string | null
  }

  export type DroneModelUncheckedCreateWithoutDroneInstanceInput = {
    id?: number
    model: string
    weight: Decimal | DecimalJsLike | number | string
    capacityWeight: Decimal | DecimalJsLike | number | string
    capacityVolume: Decimal | DecimalJsLike | number | string
    size: string
    composition: string
    image?: string | null
  }

  export type DroneModelCreateOrConnectWithoutDroneInstanceInput = {
    where: DroneModelWhereUniqueInput
    create: XOR<DroneModelCreateWithoutDroneInstanceInput, DroneModelUncheckedCreateWithoutDroneInstanceInput>
  }

  export type OrderCreateWithoutDroneInstanceInput = {
    number: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
    client: ClientCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDroneInstanceInput = {
    id?: number
    number: number
    clientId: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
  }

  export type OrderCreateOrConnectWithoutDroneInstanceInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDroneInstanceInput, OrderUncheckedCreateWithoutDroneInstanceInput>
  }

  export type OrderCreateManyDroneInstanceInputEnvelope = {
    data: OrderCreateManyDroneInstanceInput | OrderCreateManyDroneInstanceInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutDroneInstanceInput = {
    update: XOR<SupplierUpdateWithoutDroneInstanceInput, SupplierUncheckedUpdateWithoutDroneInstanceInput>
    create: XOR<SupplierCreateWithoutDroneInstanceInput, SupplierUncheckedCreateWithoutDroneInstanceInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutDroneInstanceInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutDroneInstanceInput, SupplierUncheckedUpdateWithoutDroneInstanceInput>
  }

  export type SupplierUpdateWithoutDroneInstanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SupplierUncheckedUpdateWithoutDroneInstanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    credits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DroneModelUpsertWithoutDroneInstanceInput = {
    update: XOR<DroneModelUpdateWithoutDroneInstanceInput, DroneModelUncheckedUpdateWithoutDroneInstanceInput>
    create: XOR<DroneModelCreateWithoutDroneInstanceInput, DroneModelUncheckedCreateWithoutDroneInstanceInput>
    where?: DroneModelWhereInput
  }

  export type DroneModelUpdateToOneWithWhereWithoutDroneInstanceInput = {
    where?: DroneModelWhereInput
    data: XOR<DroneModelUpdateWithoutDroneInstanceInput, DroneModelUncheckedUpdateWithoutDroneInstanceInput>
  }

  export type DroneModelUpdateWithoutDroneInstanceInput = {
    model?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DroneModelUncheckedUpdateWithoutDroneInstanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacityVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutDroneInstanceInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDroneInstanceInput, OrderUncheckedUpdateWithoutDroneInstanceInput>
    create: XOR<OrderCreateWithoutDroneInstanceInput, OrderUncheckedCreateWithoutDroneInstanceInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDroneInstanceInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDroneInstanceInput, OrderUncheckedUpdateWithoutDroneInstanceInput>
  }

  export type OrderUpdateManyWithWhereWithoutDroneInstanceInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDroneInstanceInput>
  }

  export type DroneInstanceCreateWithoutModelInput = {
    region: JsonNullValueInput | InputJsonValue
    supplier: SupplierCreateNestedOneWithoutDroneInstanceInput
    Order?: OrderCreateNestedManyWithoutDroneInstanceInput
  }

  export type DroneInstanceUncheckedCreateWithoutModelInput = {
    id?: number
    region: JsonNullValueInput | InputJsonValue
    supplierId: number
    Order?: OrderUncheckedCreateNestedManyWithoutDroneInstanceInput
  }

  export type DroneInstanceCreateOrConnectWithoutModelInput = {
    where: DroneInstanceWhereUniqueInput
    create: XOR<DroneInstanceCreateWithoutModelInput, DroneInstanceUncheckedCreateWithoutModelInput>
  }

  export type DroneInstanceCreateManyModelInputEnvelope = {
    data: DroneInstanceCreateManyModelInput | DroneInstanceCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type DroneInstanceUpsertWithWhereUniqueWithoutModelInput = {
    where: DroneInstanceWhereUniqueInput
    update: XOR<DroneInstanceUpdateWithoutModelInput, DroneInstanceUncheckedUpdateWithoutModelInput>
    create: XOR<DroneInstanceCreateWithoutModelInput, DroneInstanceUncheckedCreateWithoutModelInput>
  }

  export type DroneInstanceUpdateWithWhereUniqueWithoutModelInput = {
    where: DroneInstanceWhereUniqueInput
    data: XOR<DroneInstanceUpdateWithoutModelInput, DroneInstanceUncheckedUpdateWithoutModelInput>
  }

  export type DroneInstanceUpdateManyWithWhereWithoutModelInput = {
    where: DroneInstanceScalarWhereInput
    data: XOR<DroneInstanceUpdateManyMutationInput, DroneInstanceUncheckedUpdateManyWithoutModelInput>
  }

  export type OrderCreateManyClientInput = {
    id?: number
    number: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
    droneInstanceId?: number | null
  }

  export type OrderUpdateWithoutClientInput = {
    number?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
    droneInstance?: DroneInstanceUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
    droneInstanceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
    droneInstanceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DroneInstanceCreateManySupplierInput = {
    id?: number
    region: JsonNullValueInput | InputJsonValue
    modelId: number
  }

  export type DroneInstanceUpdateWithoutSupplierInput = {
    region?: JsonNullValueInput | InputJsonValue
    model?: DroneModelUpdateOneRequiredWithoutDroneInstanceNestedInput
    Order?: OrderUpdateManyWithoutDroneInstanceNestedInput
  }

  export type DroneInstanceUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: JsonNullValueInput | InputJsonValue
    modelId?: IntFieldUpdateOperationsInput | number
    Order?: OrderUncheckedUpdateManyWithoutDroneInstanceNestedInput
  }

  export type DroneInstanceUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: JsonNullValueInput | InputJsonValue
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyDroneInstanceInput = {
    id?: number
    number: number
    clientId: number
    status: string
    createdAt: Date | string
    updatedAt: Date | string
    price: Decimal | DecimalJsLike | number | string
    pickupLocation: JsonNullValueInput | InputJsonValue
    deliveryLocation: JsonNullValueInput | InputJsonValue
  }

  export type OrderUpdateWithoutDroneInstanceInput = {
    number?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
    client?: ClientUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDroneInstanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
  }

  export type OrderUncheckedUpdateManyWithoutDroneInstanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pickupLocation?: JsonNullValueInput | InputJsonValue
    deliveryLocation?: JsonNullValueInput | InputJsonValue
  }

  export type DroneInstanceCreateManyModelInput = {
    id?: number
    region: JsonNullValueInput | InputJsonValue
    supplierId: number
  }

  export type DroneInstanceUpdateWithoutModelInput = {
    region?: JsonNullValueInput | InputJsonValue
    supplier?: SupplierUpdateOneRequiredWithoutDroneInstanceNestedInput
    Order?: OrderUpdateManyWithoutDroneInstanceNestedInput
  }

  export type DroneInstanceUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: JsonNullValueInput | InputJsonValue
    supplierId?: IntFieldUpdateOperationsInput | number
    Order?: OrderUncheckedUpdateManyWithoutDroneInstanceNestedInput
  }

  export type DroneInstanceUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: JsonNullValueInput | InputJsonValue
    supplierId?: IntFieldUpdateOperationsInput | number
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