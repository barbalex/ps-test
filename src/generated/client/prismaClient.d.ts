
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Accounts
 * 
 */
export type Accounts = {
  /**
   * @zod.string.uuid()
   */
  account_id: string
  /**
   * @zod.string.uuid()
   */
  user_id: string | null
  type: string | null
  period_start: Date | null
  period_end: Date | null
  projects_label_by: string | null
  label: string | null
}

/**
 * Model Projects
 * 
 */
export type Projects = {
  /**
   * @zod.string.uuid()
   */
  project_id: string
  /**
   * @zod.string.uuid()
   */
  account_id: string | null
  name: string | null
  label: string | null
  type: project_type | null
  subproject_name_singular: string | null
  subproject_name_plural: string | null
  subproject_order_by: string | null
  places_label_by: string | null
  places_order_by: Prisma.JsonValue | null
  persons_label_by: string | null
  persons_order_by: string | null
  goal_reports_label_by: string | null
  goal_reports_order_by: string | null
  values_on_multiple_levels: string | null
  multiple_action_values_on_same_level: string | null
  multiple_check_values_on_same_level: string | null
  data: Prisma.JsonValue | null
  files_offline: boolean | null
  files_active_projects: boolean | null
  files_active_subprojects: boolean | null
  files_active_places: boolean | null
  files_active_actions: boolean | null
  files_active_checks: boolean | null
  deleted: boolean | null
}

/**
 * Model Users
 * 
 */
export type Users = {
  /**
   * @zod.string.uuid()
   */
  user_id: string
  email: string | null
  /**
   * @zod.string.uuid()
   */
  auth_id: string | null
  label_replace_by_generated_column: string | null
  deleted: boolean | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const project_type: {
  species: 'species',
  biotope: 'biotope'
};

export type project_type = (typeof project_type)[keyof typeof project_type]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<GlobalReject>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 4.8.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Accounts: 'Accounts',
    Projects: 'Projects',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountsCountOutputType
   */


  export type AccountsCountOutputType = {
    projects: number
  }

  export type AccountsCountOutputTypeSelect = {
    projects?: boolean | AccountsCountOutputTypeCountProjectsArgs
  }

  export type AccountsCountOutputTypeGetPayload<S extends boolean | null | undefined | AccountsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AccountsCountOutputTypeArgs)
    ? AccountsCountOutputType 
    : S extends { select: any } & (AccountsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AccountsCountOutputType ? AccountsCountOutputType[P] : never
  } 
      : AccountsCountOutputType




  // Custom InputTypes

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     * 
    **/
    select?: AccountsCountOutputTypeSelect | null
  }


  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountProjectsArgs = {
    where?: ProjectsWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    accounts: number
  }

  export type UsersCountOutputTypeSelect = {
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     * 
    **/
    select?: UsersCountOutputTypeSelect | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs = {
    where?: AccountsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Accounts
   */


  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    account_id: string | null
    user_id: string | null
    type: string | null
    period_start: Date | null
    period_end: Date | null
    projects_label_by: string | null
    label: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    account_id: string | null
    user_id: string | null
    type: string | null
    period_start: Date | null
    period_end: Date | null
    projects_label_by: string | null
    label: string | null
  }

  export type AccountsCountAggregateOutputType = {
    account_id: number
    user_id: number
    type: number
    period_start: number
    period_end: number
    projects_label_by: number
    label: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    account_id?: true
    user_id?: true
    type?: true
    period_start?: true
    period_end?: true
    projects_label_by?: true
    label?: true
  }

  export type AccountsMaxAggregateInputType = {
    account_id?: true
    user_id?: true
    type?: true
    period_start?: true
    period_end?: true
    projects_label_by?: true
    label?: true
  }

  export type AccountsCountAggregateInputType = {
    account_id?: true
    user_id?: true
    type?: true
    period_start?: true
    period_end?: true
    projects_label_by?: true
    label?: true
    _all?: true
  }

  export type AccountsAggregateArgs = {
    /**
     * Filter which Accounts to aggregate.
     * 
    **/
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs = {
    where?: AccountsWhereInput
    orderBy?: Enumerable<AccountsOrderByWithAggregationInput>
    by: Array<AccountsScalarFieldEnum>
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }


  export type AccountsGroupByOutputType = {
    account_id: string
    user_id: string | null
    type: string | null
    period_start: Date | null
    period_end: Date | null
    projects_label_by: string | null
    label: string | null
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect = {
    account_id?: boolean
    user_id?: boolean
    type?: boolean
    period_start?: boolean
    period_end?: boolean
    projects_label_by?: boolean
    label?: boolean
    users?: boolean | Accounts$usersArgs
    projects?: boolean | Accounts$projectsArgs
    _count?: boolean | AccountsCountOutputTypeArgs
  }


  export type AccountsInclude = {
    users?: boolean | Accounts$usersArgs
    projects?: boolean | Accounts$projectsArgs
    _count?: boolean | AccountsCountOutputTypeArgs
  } 

  export type AccountsGetPayload<S extends boolean | null | undefined | AccountsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Accounts :
    S extends undefined ? never :
    S extends { include: any } & (AccountsArgs | AccountsFindManyArgs)
    ? Accounts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? UsersGetPayload<S['include'][P]> | null :
        P extends 'projects' ? Array < ProjectsGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountsArgs | AccountsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? UsersGetPayload<S['select'][P]> | null :
        P extends 'projects' ? Array < ProjectsGetPayload<S['select'][P]>>  :
        P extends '_count' ? AccountsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Accounts ? Accounts[P] : never
  } 
      : Accounts


  type AccountsCountArgs = Merge<
    Omit<AccountsFindManyArgs, 'select' | 'include'> & {
      select?: AccountsCountAggregateInputType | true
    }
  >

  export interface AccountsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Accounts'> extends True ? Prisma__AccountsClient<AccountsGetPayload<T>> : Prisma__AccountsClient<AccountsGetPayload<T> | null, null>

    /**
     * Find one Accounts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountsFindUniqueOrThrowArgs>
    ): Prisma__AccountsClient<AccountsGetPayload<T>>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Accounts'> extends True ? Prisma__AccountsClient<AccountsGetPayload<T>> : Prisma__AccountsClient<AccountsGetPayload<T> | null, null>

    /**
     * Find the first Accounts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountsFindFirstOrThrowArgs>
    ): Prisma__AccountsClient<AccountsGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const accountsWithAccount_idOnly = await prisma.accounts.findMany({ select: { account_id: true } })
     * 
    **/
    findMany<T extends AccountsFindManyArgs>(
      args?: SelectSubset<T, AccountsFindManyArgs>
    ): PrismaPromise<Array<AccountsGetPayload<T>>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
    **/
    create<T extends AccountsCreateArgs>(
      args: SelectSubset<T, AccountsCreateArgs>
    ): Prisma__AccountsClient<AccountsGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const accounts = await prisma.accounts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountsCreateManyArgs>(
      args?: SelectSubset<T, AccountsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
    **/
    delete<T extends AccountsDeleteArgs>(
      args: SelectSubset<T, AccountsDeleteArgs>
    ): Prisma__AccountsClient<AccountsGetPayload<T>>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountsUpdateArgs>(
      args: SelectSubset<T, AccountsUpdateArgs>
    ): Prisma__AccountsClient<AccountsGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountsDeleteManyArgs>(
      args?: SelectSubset<T, AccountsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountsUpdateManyArgs>(
      args: SelectSubset<T, AccountsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
    **/
    upsert<T extends AccountsUpsertArgs>(
      args: SelectSubset<T, AccountsUpsertArgs>
    ): Prisma__AccountsClient<AccountsGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
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
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends Accounts$usersArgs= {}>(args?: Subset<T, Accounts$usersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    projects<T extends Accounts$projectsArgs= {}>(args?: Subset<T, Accounts$projectsArgs>): PrismaPromise<Array<ProjectsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Accounts base type for findUnique actions
   */
  export type AccountsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUnique
   */
  export interface AccountsFindUniqueArgs extends AccountsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where: AccountsWhereUniqueInput
  }


  /**
   * Accounts base type for findFirst actions
   */
  export type AccountsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }

  /**
   * Accounts findFirst
   */
  export interface AccountsFindFirstArgs extends AccountsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * Accounts create
   */
  export type AccountsCreateArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * The data needed to create a Accounts.
     * 
    **/
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }


  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Accounts update
   */
  export type AccountsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * The data needed to update a Accounts.
     * 
    **/
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     * 
    **/
    where: AccountsWhereUniqueInput
  }


  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountsWhereInput
  }


  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     * 
    **/
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     * 
    **/
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }


  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    /**
     * Filter which Accounts to delete.
     * 
    **/
    where: AccountsWhereUniqueInput
  }


  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountsWhereInput
  }


  /**
   * Accounts.users
   */
  export type Accounts$usersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    where?: UsersWhereInput
  }


  /**
   * Accounts.projects
   */
  export type Accounts$projectsArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    where?: ProjectsWhereInput
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }


  /**
   * Accounts without action
   */
  export type AccountsArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
  }



  /**
   * Model Projects
   */


  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    project_id: string | null
    account_id: string | null
    name: string | null
    label: string | null
    type: project_type | null
    subproject_name_singular: string | null
    subproject_name_plural: string | null
    subproject_order_by: string | null
    places_label_by: string | null
    persons_label_by: string | null
    persons_order_by: string | null
    goal_reports_label_by: string | null
    goal_reports_order_by: string | null
    values_on_multiple_levels: string | null
    multiple_action_values_on_same_level: string | null
    multiple_check_values_on_same_level: string | null
    files_offline: boolean | null
    files_active_projects: boolean | null
    files_active_subprojects: boolean | null
    files_active_places: boolean | null
    files_active_actions: boolean | null
    files_active_checks: boolean | null
    deleted: boolean | null
  }

  export type ProjectsMaxAggregateOutputType = {
    project_id: string | null
    account_id: string | null
    name: string | null
    label: string | null
    type: project_type | null
    subproject_name_singular: string | null
    subproject_name_plural: string | null
    subproject_order_by: string | null
    places_label_by: string | null
    persons_label_by: string | null
    persons_order_by: string | null
    goal_reports_label_by: string | null
    goal_reports_order_by: string | null
    values_on_multiple_levels: string | null
    multiple_action_values_on_same_level: string | null
    multiple_check_values_on_same_level: string | null
    files_offline: boolean | null
    files_active_projects: boolean | null
    files_active_subprojects: boolean | null
    files_active_places: boolean | null
    files_active_actions: boolean | null
    files_active_checks: boolean | null
    deleted: boolean | null
  }

  export type ProjectsCountAggregateOutputType = {
    project_id: number
    account_id: number
    name: number
    label: number
    type: number
    subproject_name_singular: number
    subproject_name_plural: number
    subproject_order_by: number
    places_label_by: number
    places_order_by: number
    persons_label_by: number
    persons_order_by: number
    goal_reports_label_by: number
    goal_reports_order_by: number
    values_on_multiple_levels: number
    multiple_action_values_on_same_level: number
    multiple_check_values_on_same_level: number
    data: number
    files_offline: number
    files_active_projects: number
    files_active_subprojects: number
    files_active_places: number
    files_active_actions: number
    files_active_checks: number
    deleted: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    project_id?: true
    account_id?: true
    name?: true
    label?: true
    type?: true
    subproject_name_singular?: true
    subproject_name_plural?: true
    subproject_order_by?: true
    places_label_by?: true
    persons_label_by?: true
    persons_order_by?: true
    goal_reports_label_by?: true
    goal_reports_order_by?: true
    values_on_multiple_levels?: true
    multiple_action_values_on_same_level?: true
    multiple_check_values_on_same_level?: true
    files_offline?: true
    files_active_projects?: true
    files_active_subprojects?: true
    files_active_places?: true
    files_active_actions?: true
    files_active_checks?: true
    deleted?: true
  }

  export type ProjectsMaxAggregateInputType = {
    project_id?: true
    account_id?: true
    name?: true
    label?: true
    type?: true
    subproject_name_singular?: true
    subproject_name_plural?: true
    subproject_order_by?: true
    places_label_by?: true
    persons_label_by?: true
    persons_order_by?: true
    goal_reports_label_by?: true
    goal_reports_order_by?: true
    values_on_multiple_levels?: true
    multiple_action_values_on_same_level?: true
    multiple_check_values_on_same_level?: true
    files_offline?: true
    files_active_projects?: true
    files_active_subprojects?: true
    files_active_places?: true
    files_active_actions?: true
    files_active_checks?: true
    deleted?: true
  }

  export type ProjectsCountAggregateInputType = {
    project_id?: true
    account_id?: true
    name?: true
    label?: true
    type?: true
    subproject_name_singular?: true
    subproject_name_plural?: true
    subproject_order_by?: true
    places_label_by?: true
    places_order_by?: true
    persons_label_by?: true
    persons_order_by?: true
    goal_reports_label_by?: true
    goal_reports_order_by?: true
    values_on_multiple_levels?: true
    multiple_action_values_on_same_level?: true
    multiple_check_values_on_same_level?: true
    data?: true
    files_offline?: true
    files_active_projects?: true
    files_active_subprojects?: true
    files_active_places?: true
    files_active_actions?: true
    files_active_checks?: true
    deleted?: true
    _all?: true
  }

  export type ProjectsAggregateArgs = {
    /**
     * Filter which Projects to aggregate.
     * 
    **/
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs = {
    where?: ProjectsWhereInput
    orderBy?: Enumerable<ProjectsOrderByWithAggregationInput>
    by: Array<ProjectsScalarFieldEnum>
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }


  export type ProjectsGroupByOutputType = {
    project_id: string
    account_id: string | null
    name: string | null
    label: string | null
    type: project_type | null
    subproject_name_singular: string | null
    subproject_name_plural: string | null
    subproject_order_by: string | null
    places_label_by: string | null
    places_order_by: JsonValue | null
    persons_label_by: string | null
    persons_order_by: string | null
    goal_reports_label_by: string | null
    goal_reports_order_by: string | null
    values_on_multiple_levels: string | null
    multiple_action_values_on_same_level: string | null
    multiple_check_values_on_same_level: string | null
    data: JsonValue | null
    files_offline: boolean | null
    files_active_projects: boolean | null
    files_active_subprojects: boolean | null
    files_active_places: boolean | null
    files_active_actions: boolean | null
    files_active_checks: boolean | null
    deleted: boolean | null
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect = {
    project_id?: boolean
    account_id?: boolean
    name?: boolean
    label?: boolean
    type?: boolean
    subproject_name_singular?: boolean
    subproject_name_plural?: boolean
    subproject_order_by?: boolean
    places_label_by?: boolean
    places_order_by?: boolean
    persons_label_by?: boolean
    persons_order_by?: boolean
    goal_reports_label_by?: boolean
    goal_reports_order_by?: boolean
    values_on_multiple_levels?: boolean
    multiple_action_values_on_same_level?: boolean
    multiple_check_values_on_same_level?: boolean
    data?: boolean
    files_offline?: boolean
    files_active_projects?: boolean
    files_active_subprojects?: boolean
    files_active_places?: boolean
    files_active_actions?: boolean
    files_active_checks?: boolean
    deleted?: boolean
    accounts?: boolean | Projects$accountsArgs
  }


  export type ProjectsInclude = {
    accounts?: boolean | Projects$accountsArgs
  } 

  export type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Projects :
    S extends undefined ? never :
    S extends { include: any } & (ProjectsArgs | ProjectsFindManyArgs)
    ? Projects  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? AccountsGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ProjectsArgs | ProjectsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? AccountsGetPayload<S['select'][P]> | null :  P extends keyof Projects ? Projects[P] : never
  } 
      : Projects


  type ProjectsCountArgs = Merge<
    Omit<ProjectsFindManyArgs, 'select' | 'include'> & {
      select?: ProjectsCountAggregateInputType | true
    }
  >

  export interface ProjectsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Projects'> extends True ? Prisma__ProjectsClient<ProjectsGetPayload<T>> : Prisma__ProjectsClient<ProjectsGetPayload<T> | null, null>

    /**
     * Find one Projects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectsFindUniqueOrThrowArgs>
    ): Prisma__ProjectsClient<ProjectsGetPayload<T>>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Projects'> extends True ? Prisma__ProjectsClient<ProjectsGetPayload<T>> : Prisma__ProjectsClient<ProjectsGetPayload<T> | null, null>

    /**
     * Find the first Projects that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs>
    ): Prisma__ProjectsClient<ProjectsGetPayload<T>>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `project_id`
     * const projectsWithProject_idOnly = await prisma.projects.findMany({ select: { project_id: true } })
     * 
    **/
    findMany<T extends ProjectsFindManyArgs>(
      args?: SelectSubset<T, ProjectsFindManyArgs>
    ): PrismaPromise<Array<ProjectsGetPayload<T>>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
    **/
    create<T extends ProjectsCreateArgs>(
      args: SelectSubset<T, ProjectsCreateArgs>
    ): Prisma__ProjectsClient<ProjectsGetPayload<T>>

    /**
     * Create many Projects.
     *     @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const projects = await prisma.projects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectsCreateManyArgs>(
      args?: SelectSubset<T, ProjectsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
    **/
    delete<T extends ProjectsDeleteArgs>(
      args: SelectSubset<T, ProjectsDeleteArgs>
    ): Prisma__ProjectsClient<ProjectsGetPayload<T>>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectsUpdateArgs>(
      args: SelectSubset<T, ProjectsUpdateArgs>
    ): Prisma__ProjectsClient<ProjectsGetPayload<T>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectsDeleteManyArgs>(
      args?: SelectSubset<T, ProjectsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectsUpdateManyArgs>(
      args: SelectSubset<T, ProjectsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectsUpsertArgs>(
      args: SelectSubset<T, ProjectsUpsertArgs>
    ): Prisma__ProjectsClient<ProjectsGetPayload<T>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
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
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends Projects$accountsArgs= {}>(args?: Subset<T, Projects$accountsArgs>): Prisma__AccountsClient<AccountsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Projects base type for findUnique actions
   */
  export type ProjectsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUnique
   */
  export interface ProjectsFindUniqueArgs extends ProjectsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects base type for findFirst actions
   */
  export type ProjectsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }

  /**
   * Projects findFirst
   */
  export interface ProjectsFindFirstArgs extends ProjectsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }


  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }


  /**
   * Projects create
   */
  export type ProjectsCreateArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * The data needed to create a Projects.
     * 
    **/
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }


  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Projects update
   */
  export type ProjectsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * The data needed to update a Projects.
     * 
    **/
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     * 
    **/
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectsWhereInput
  }


  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * The filter to search for the Projects to update in case it exists.
     * 
    **/
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     * 
    **/
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }


  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
    /**
     * Filter which Projects to delete.
     * 
    **/
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectsWhereInput
  }


  /**
   * Projects.accounts
   */
  export type Projects$accountsArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    where?: AccountsWhereInput
  }


  /**
   * Projects without action
   */
  export type ProjectsArgs = {
    /**
     * Select specific fields to fetch from the Projects
     * 
    **/
    select?: ProjectsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsInclude | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    email: string | null
    auth_id: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    email: string | null
    auth_id: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    email: number
    auth_id: number
    label_replace_by_generated_column: number
    deleted: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    email?: true
    auth_id?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    email?: true
    auth_id?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    email?: true
    auth_id?: true
    label_replace_by_generated_column?: true
    deleted?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    user_id: string
    email: string | null
    auth_id: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    user_id?: boolean
    email?: boolean
    auth_id?: boolean
    label_replace_by_generated_column?: boolean
    deleted?: boolean
    accounts?: boolean | Users$accountsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type UsersInclude = {
    accounts?: boolean | Users$accountsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  } 

  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? Array < AccountsGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountsGetPayload<S['select'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends Users$accountsArgs= {}>(args?: Subset<T, Users$accountsArgs>): PrismaPromise<Array<AccountsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users.accounts
   */
  export type Users$accountsArgs = {
    /**
     * Select specific fields to fetch from the Accounts
     * 
    **/
    select?: AccountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountsInclude | null
    where?: AccountsWhereInput
    orderBy?: Enumerable<AccountsOrderByWithRelationInput>
    cursor?: AccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountsScalarFieldEnum: {
    account_id: 'account_id',
    user_id: 'user_id',
    type: 'type',
    period_start: 'period_start',
    period_end: 'period_end',
    projects_label_by: 'projects_label_by',
    label: 'label'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    project_id: 'project_id',
    account_id: 'account_id',
    name: 'name',
    label: 'label',
    type: 'type',
    subproject_name_singular: 'subproject_name_singular',
    subproject_name_plural: 'subproject_name_plural',
    subproject_order_by: 'subproject_order_by',
    places_label_by: 'places_label_by',
    places_order_by: 'places_order_by',
    persons_label_by: 'persons_label_by',
    persons_order_by: 'persons_order_by',
    goal_reports_label_by: 'goal_reports_label_by',
    goal_reports_order_by: 'goal_reports_order_by',
    values_on_multiple_levels: 'values_on_multiple_levels',
    multiple_action_values_on_same_level: 'multiple_action_values_on_same_level',
    multiple_check_values_on_same_level: 'multiple_check_values_on_same_level',
    data: 'data',
    files_offline: 'files_offline',
    files_active_projects: 'files_active_projects',
    files_active_subprojects: 'files_active_subprojects',
    files_active_places: 'files_active_places',
    files_active_actions: 'files_active_actions',
    files_active_checks: 'files_active_checks',
    deleted: 'deleted'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    auth_id: 'auth_id',
    label_replace_by_generated_column: 'label_replace_by_generated_column',
    deleted: 'deleted'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'project_type'
   */
  export type Enumproject_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'project_type'>
    


  /**
   * Reference to a field of type 'project_type[]'
   */
  export type ListEnumproject_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'project_type[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountsWhereInput = {
    AND?: Enumerable<AccountsWhereInput>
    OR?: Enumerable<AccountsWhereInput>
    NOT?: Enumerable<AccountsWhereInput>
    account_id?: UuidFilter<"Accounts"> | string
    user_id?: UuidNullableFilter<"Accounts"> | string | null
    type?: StringNullableFilter<"Accounts"> | string | null
    period_start?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    period_end?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    projects_label_by?: StringNullableFilter<"Accounts"> | string | null
    label?: StringNullableFilter<"Accounts"> | string | null
    users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
    projects?: ProjectsListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    account_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    period_start?: SortOrderInput | SortOrder
    period_end?: SortOrderInput | SortOrder
    projects_label_by?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    users?: UsersOrderByWithRelationInput
    projects?: ProjectsOrderByRelationAggregateInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    account_id?: string
    AND?: Enumerable<AccountsWhereInput>
    OR?: Enumerable<AccountsWhereInput>
    NOT?: Enumerable<AccountsWhereInput>
    user_id?: UuidNullableFilter<"Accounts"> | string | null
    type?: StringNullableFilter<"Accounts"> | string | null
    period_start?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    period_end?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    projects_label_by?: StringNullableFilter<"Accounts"> | string | null
    label?: StringNullableFilter<"Accounts"> | string | null
    users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
    projects?: ProjectsListRelationFilter
  }, "account_id">

  export type AccountsOrderByWithAggregationInput = {
    account_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    period_start?: SortOrderInput | SortOrder
    period_end?: SortOrderInput | SortOrder
    projects_label_by?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountsScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountsScalarWhereWithAggregatesInput>
    account_id?: UuidWithAggregatesFilter<"Accounts"> | string
    user_id?: UuidNullableWithAggregatesFilter<"Accounts"> | string | null
    type?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    period_start?: DateTimeNullableWithAggregatesFilter<"Accounts"> | Date | string | null
    period_end?: DateTimeNullableWithAggregatesFilter<"Accounts"> | Date | string | null
    projects_label_by?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    label?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
  }

  export type ProjectsWhereInput = {
    AND?: Enumerable<ProjectsWhereInput>
    OR?: Enumerable<ProjectsWhereInput>
    NOT?: Enumerable<ProjectsWhereInput>
    project_id?: UuidFilter<"Projects"> | string
    account_id?: UuidNullableFilter<"Projects"> | string | null
    name?: StringNullableFilter<"Projects"> | string | null
    label?: StringNullableFilter<"Projects"> | string | null
    type?: Enumproject_typeNullableFilter<"Projects"> | project_type | null
    subproject_name_singular?: StringNullableFilter<"Projects"> | string | null
    subproject_name_plural?: StringNullableFilter<"Projects"> | string | null
    subproject_order_by?: StringNullableFilter<"Projects"> | string | null
    places_label_by?: StringNullableFilter<"Projects"> | string | null
    places_order_by?: JsonNullableFilter<"Projects">
    persons_label_by?: StringNullableFilter<"Projects"> | string | null
    persons_order_by?: StringNullableFilter<"Projects"> | string | null
    goal_reports_label_by?: StringNullableFilter<"Projects"> | string | null
    goal_reports_order_by?: StringNullableFilter<"Projects"> | string | null
    values_on_multiple_levels?: StringNullableFilter<"Projects"> | string | null
    multiple_action_values_on_same_level?: StringNullableFilter<"Projects"> | string | null
    multiple_check_values_on_same_level?: StringNullableFilter<"Projects"> | string | null
    data?: JsonNullableFilter<"Projects">
    files_offline?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_projects?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_subprojects?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_places?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_actions?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_checks?: BoolNullableFilter<"Projects"> | boolean | null
    deleted?: BoolNullableFilter<"Projects"> | boolean | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
  }

  export type ProjectsOrderByWithRelationInput = {
    project_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    subproject_name_singular?: SortOrderInput | SortOrder
    subproject_name_plural?: SortOrderInput | SortOrder
    subproject_order_by?: SortOrderInput | SortOrder
    places_label_by?: SortOrderInput | SortOrder
    places_order_by?: SortOrderInput | SortOrder
    persons_label_by?: SortOrderInput | SortOrder
    persons_order_by?: SortOrderInput | SortOrder
    goal_reports_label_by?: SortOrderInput | SortOrder
    goal_reports_order_by?: SortOrderInput | SortOrder
    values_on_multiple_levels?: SortOrderInput | SortOrder
    multiple_action_values_on_same_level?: SortOrderInput | SortOrder
    multiple_check_values_on_same_level?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    files_offline?: SortOrderInput | SortOrder
    files_active_projects?: SortOrderInput | SortOrder
    files_active_subprojects?: SortOrderInput | SortOrder
    files_active_places?: SortOrderInput | SortOrder
    files_active_actions?: SortOrderInput | SortOrder
    files_active_checks?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    accounts?: AccountsOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    project_id?: string
    AND?: Enumerable<ProjectsWhereInput>
    OR?: Enumerable<ProjectsWhereInput>
    NOT?: Enumerable<ProjectsWhereInput>
    account_id?: UuidNullableFilter<"Projects"> | string | null
    name?: StringNullableFilter<"Projects"> | string | null
    label?: StringNullableFilter<"Projects"> | string | null
    type?: Enumproject_typeNullableFilter<"Projects"> | project_type | null
    subproject_name_singular?: StringNullableFilter<"Projects"> | string | null
    subproject_name_plural?: StringNullableFilter<"Projects"> | string | null
    subproject_order_by?: StringNullableFilter<"Projects"> | string | null
    places_label_by?: StringNullableFilter<"Projects"> | string | null
    places_order_by?: JsonNullableFilter<"Projects">
    persons_label_by?: StringNullableFilter<"Projects"> | string | null
    persons_order_by?: StringNullableFilter<"Projects"> | string | null
    goal_reports_label_by?: StringNullableFilter<"Projects"> | string | null
    goal_reports_order_by?: StringNullableFilter<"Projects"> | string | null
    values_on_multiple_levels?: StringNullableFilter<"Projects"> | string | null
    multiple_action_values_on_same_level?: StringNullableFilter<"Projects"> | string | null
    multiple_check_values_on_same_level?: StringNullableFilter<"Projects"> | string | null
    data?: JsonNullableFilter<"Projects">
    files_offline?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_projects?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_subprojects?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_places?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_actions?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_checks?: BoolNullableFilter<"Projects"> | boolean | null
    deleted?: BoolNullableFilter<"Projects"> | boolean | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
  }, "project_id">

  export type ProjectsOrderByWithAggregationInput = {
    project_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    subproject_name_singular?: SortOrderInput | SortOrder
    subproject_name_plural?: SortOrderInput | SortOrder
    subproject_order_by?: SortOrderInput | SortOrder
    places_label_by?: SortOrderInput | SortOrder
    places_order_by?: SortOrderInput | SortOrder
    persons_label_by?: SortOrderInput | SortOrder
    persons_order_by?: SortOrderInput | SortOrder
    goal_reports_label_by?: SortOrderInput | SortOrder
    goal_reports_order_by?: SortOrderInput | SortOrder
    values_on_multiple_levels?: SortOrderInput | SortOrder
    multiple_action_values_on_same_level?: SortOrderInput | SortOrder
    multiple_check_values_on_same_level?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    files_offline?: SortOrderInput | SortOrder
    files_active_projects?: SortOrderInput | SortOrder
    files_active_subprojects?: SortOrderInput | SortOrder
    files_active_places?: SortOrderInput | SortOrder
    files_active_actions?: SortOrderInput | SortOrder
    files_active_checks?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectsScalarWhereWithAggregatesInput>
    project_id?: UuidWithAggregatesFilter<"Projects"> | string
    account_id?: UuidNullableWithAggregatesFilter<"Projects"> | string | null
    name?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    label?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    type?: Enumproject_typeNullableWithAggregatesFilter<"Projects"> | project_type | null
    subproject_name_singular?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    subproject_name_plural?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    subproject_order_by?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    places_label_by?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    places_order_by?: JsonNullableWithAggregatesFilter<"Projects">
    persons_label_by?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    persons_order_by?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    goal_reports_label_by?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    goal_reports_order_by?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    values_on_multiple_levels?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    multiple_action_values_on_same_level?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    multiple_check_values_on_same_level?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    data?: JsonNullableWithAggregatesFilter<"Projects">
    files_offline?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    files_active_projects?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    files_active_subprojects?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    files_active_places?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    files_active_actions?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    files_active_checks?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    deleted?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    user_id?: UuidFilter<"Users"> | string
    email?: StringNullableFilter<"Users"> | string | null
    auth_id?: UuidNullableFilter<"Users"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"Users"> | string | null
    deleted?: BoolNullableFilter<"Users"> | boolean | null
    accounts?: AccountsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrderInput | SortOrder
    auth_id?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    accounts?: AccountsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    email?: StringNullableFilter<"Users"> | string | null
    auth_id?: UuidNullableFilter<"Users"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"Users"> | string | null
    deleted?: BoolNullableFilter<"Users"> | boolean | null
    accounts?: AccountsListRelationFilter
  }, "user_id">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrderInput | SortOrder
    auth_id?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    user_id?: UuidWithAggregatesFilter<"Users"> | string
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    auth_id?: UuidNullableWithAggregatesFilter<"Users"> | string | null
    label_replace_by_generated_column?: StringNullableWithAggregatesFilter<"Users"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
  }

  export type AccountsCreateInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    users?: UsersCreateNestedOneWithoutAccountsInput
    projects?: ProjectsCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    projects?: ProjectsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneWithoutAccountsNestedInput
    projects?: ProjectsUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsCreateManyInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
  }

  export type AccountsUpdateManyMutationInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountsUncheckedUpdateManyInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectsCreateInput = {
    project_id: string
    name?: string | null
    label?: string | null
    type?: project_type | null
    subproject_name_singular?: string | null
    subproject_name_plural?: string | null
    subproject_order_by?: string | null
    places_label_by?: string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: string | null
    persons_order_by?: string | null
    goal_reports_label_by?: string | null
    goal_reports_order_by?: string | null
    values_on_multiple_levels?: string | null
    multiple_action_values_on_same_level?: string | null
    multiple_check_values_on_same_level?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: boolean | null
    files_active_projects?: boolean | null
    files_active_subprojects?: boolean | null
    files_active_places?: boolean | null
    files_active_actions?: boolean | null
    files_active_checks?: boolean | null
    deleted?: boolean | null
    accounts?: AccountsCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateInput = {
    project_id: string
    account_id?: string | null
    name?: string | null
    label?: string | null
    type?: project_type | null
    subproject_name_singular?: string | null
    subproject_name_plural?: string | null
    subproject_order_by?: string | null
    places_label_by?: string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: string | null
    persons_order_by?: string | null
    goal_reports_label_by?: string | null
    goal_reports_order_by?: string | null
    values_on_multiple_levels?: string | null
    multiple_action_values_on_same_level?: string | null
    multiple_check_values_on_same_level?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: boolean | null
    files_active_projects?: boolean | null
    files_active_subprojects?: boolean | null
    files_active_places?: boolean | null
    files_active_actions?: boolean | null
    files_active_checks?: boolean | null
    deleted?: boolean | null
  }

  export type ProjectsUpdateInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumproject_typeFieldUpdateOperationsInput | project_type | null
    subproject_name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    persons_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    values_on_multiple_levels?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_action_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_check_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_projects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_subprojects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_places?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumproject_typeFieldUpdateOperationsInput | project_type | null
    subproject_name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    persons_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    values_on_multiple_levels?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_action_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_check_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_projects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_subprojects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_places?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsCreateManyInput = {
    project_id: string
    account_id?: string | null
    name?: string | null
    label?: string | null
    type?: project_type | null
    subproject_name_singular?: string | null
    subproject_name_plural?: string | null
    subproject_order_by?: string | null
    places_label_by?: string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: string | null
    persons_order_by?: string | null
    goal_reports_label_by?: string | null
    goal_reports_order_by?: string | null
    values_on_multiple_levels?: string | null
    multiple_action_values_on_same_level?: string | null
    multiple_check_values_on_same_level?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: boolean | null
    files_active_projects?: boolean | null
    files_active_subprojects?: boolean | null
    files_active_places?: boolean | null
    files_active_actions?: boolean | null
    files_active_checks?: boolean | null
    deleted?: boolean | null
  }

  export type ProjectsUpdateManyMutationInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumproject_typeFieldUpdateOperationsInput | project_type | null
    subproject_name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    persons_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    values_on_multiple_levels?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_action_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_check_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_projects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_subprojects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_places?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUncheckedUpdateManyInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumproject_typeFieldUpdateOperationsInput | project_type | null
    subproject_name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    persons_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    values_on_multiple_levels?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_action_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_check_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_projects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_subprojects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_places?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsersCreateInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    account_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    projects_label_by?: SortOrder
    label?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    account_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    projects_label_by?: SortOrder
    label?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    account_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    projects_label_by?: SortOrder
    label?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumproject_typeNullableFilter<$PrismaModel = never> = {
    equals?: project_type | Enumproject_typeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproject_typeNullableFilter<$PrismaModel> | project_type | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AccountsNullableRelationFilter = {
    is?: AccountsWhereInput | null
    isNot?: AccountsWhereInput | null
  }

  export type ProjectsCountOrderByAggregateInput = {
    project_id?: SortOrder
    account_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    subproject_name_singular?: SortOrder
    subproject_name_plural?: SortOrder
    subproject_order_by?: SortOrder
    places_label_by?: SortOrder
    places_order_by?: SortOrder
    persons_label_by?: SortOrder
    persons_order_by?: SortOrder
    goal_reports_label_by?: SortOrder
    goal_reports_order_by?: SortOrder
    values_on_multiple_levels?: SortOrder
    multiple_action_values_on_same_level?: SortOrder
    multiple_check_values_on_same_level?: SortOrder
    data?: SortOrder
    files_offline?: SortOrder
    files_active_projects?: SortOrder
    files_active_subprojects?: SortOrder
    files_active_places?: SortOrder
    files_active_actions?: SortOrder
    files_active_checks?: SortOrder
    deleted?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    project_id?: SortOrder
    account_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    subproject_name_singular?: SortOrder
    subproject_name_plural?: SortOrder
    subproject_order_by?: SortOrder
    places_label_by?: SortOrder
    persons_label_by?: SortOrder
    persons_order_by?: SortOrder
    goal_reports_label_by?: SortOrder
    goal_reports_order_by?: SortOrder
    values_on_multiple_levels?: SortOrder
    multiple_action_values_on_same_level?: SortOrder
    multiple_check_values_on_same_level?: SortOrder
    files_offline?: SortOrder
    files_active_projects?: SortOrder
    files_active_subprojects?: SortOrder
    files_active_places?: SortOrder
    files_active_actions?: SortOrder
    files_active_checks?: SortOrder
    deleted?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    project_id?: SortOrder
    account_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    subproject_name_singular?: SortOrder
    subproject_name_plural?: SortOrder
    subproject_order_by?: SortOrder
    places_label_by?: SortOrder
    persons_label_by?: SortOrder
    persons_order_by?: SortOrder
    goal_reports_label_by?: SortOrder
    goal_reports_order_by?: SortOrder
    values_on_multiple_levels?: SortOrder
    multiple_action_values_on_same_level?: SortOrder
    multiple_check_values_on_same_level?: SortOrder
    files_offline?: SortOrder
    files_active_projects?: SortOrder
    files_active_subprojects?: SortOrder
    files_active_places?: SortOrder
    files_active_actions?: SortOrder
    files_active_checks?: SortOrder
    deleted?: SortOrder
  }

  export type Enumproject_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: project_type | Enumproject_typeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproject_typeNullableWithAggregatesFilter<$PrismaModel> | project_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproject_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumproject_typeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AccountsListRelationFilter = {
    every?: AccountsWhereInput
    some?: AccountsWhereInput
    none?: AccountsWhereInput
  }

  export type AccountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    auth_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    auth_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    auth_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type UsersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    connect?: UsersWhereUniqueInput
  }

  export type ProjectsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutAccountsInput>, Enumerable<ProjectsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutAccountsInput>
    createMany?: ProjectsCreateManyAccountsInputEnvelope
    connect?: Enumerable<ProjectsWhereUniqueInput>
  }

  export type ProjectsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutAccountsInput>, Enumerable<ProjectsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutAccountsInput>
    createMany?: ProjectsCreateManyAccountsInputEnvelope
    connect?: Enumerable<ProjectsWhereUniqueInput>
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

  export type UsersUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    upsert?: UsersUpsertWithoutAccountsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccountsInput, UsersUpdateWithoutAccountsInput>, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type ProjectsUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutAccountsInput>, Enumerable<ProjectsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<ProjectsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: ProjectsCreateManyAccountsInputEnvelope
    set?: Enumerable<ProjectsWhereUniqueInput>
    disconnect?: Enumerable<ProjectsWhereUniqueInput>
    delete?: Enumerable<ProjectsWhereUniqueInput>
    connect?: Enumerable<ProjectsWhereUniqueInput>
    update?: Enumerable<ProjectsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<ProjectsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<ProjectsScalarWhereInput>
  }

  export type ProjectsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutAccountsInput>, Enumerable<ProjectsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<ProjectsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: ProjectsCreateManyAccountsInputEnvelope
    set?: Enumerable<ProjectsWhereUniqueInput>
    disconnect?: Enumerable<ProjectsWhereUniqueInput>
    delete?: Enumerable<ProjectsWhereUniqueInput>
    connect?: Enumerable<ProjectsWhereUniqueInput>
    update?: Enumerable<ProjectsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<ProjectsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<ProjectsScalarWhereInput>
  }

  export type AccountsCreateNestedOneWithoutProjectsInput = {
    create?: XOR<AccountsCreateWithoutProjectsInput, AccountsUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutProjectsInput
    connect?: AccountsWhereUniqueInput
  }

  export type NullableEnumproject_typeFieldUpdateOperationsInput = {
    set?: project_type | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AccountsUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<AccountsCreateWithoutProjectsInput, AccountsUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutProjectsInput
    upsert?: AccountsUpsertWithoutProjectsInput
    disconnect?: AccountsWhereInput | boolean
    delete?: AccountsWhereInput | boolean
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutProjectsInput, AccountsUpdateWithoutProjectsInput>, AccountsUncheckedUpdateWithoutProjectsInput>
  }

  export type AccountsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountsCreateWithoutUsersInput>, Enumerable<AccountsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountsCreateOrConnectWithoutUsersInput>
    createMany?: AccountsCreateManyUsersInputEnvelope
    connect?: Enumerable<AccountsWhereUniqueInput>
  }

  export type AccountsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountsCreateWithoutUsersInput>, Enumerable<AccountsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountsCreateOrConnectWithoutUsersInput>
    createMany?: AccountsCreateManyUsersInputEnvelope
    connect?: Enumerable<AccountsWhereUniqueInput>
  }

  export type AccountsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<AccountsCreateWithoutUsersInput>, Enumerable<AccountsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<AccountsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: AccountsCreateManyUsersInputEnvelope
    set?: Enumerable<AccountsWhereUniqueInput>
    disconnect?: Enumerable<AccountsWhereUniqueInput>
    delete?: Enumerable<AccountsWhereUniqueInput>
    connect?: Enumerable<AccountsWhereUniqueInput>
    update?: Enumerable<AccountsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<AccountsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<AccountsScalarWhereInput>
  }

  export type AccountsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<AccountsCreateWithoutUsersInput>, Enumerable<AccountsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<AccountsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: AccountsCreateManyUsersInputEnvelope
    set?: Enumerable<AccountsWhereUniqueInput>
    disconnect?: Enumerable<AccountsWhereUniqueInput>
    delete?: Enumerable<AccountsWhereUniqueInput>
    connect?: Enumerable<AccountsWhereUniqueInput>
    update?: Enumerable<AccountsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<AccountsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<AccountsScalarWhereInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumproject_typeNullableFilter<$PrismaModel = never> = {
    equals?: project_type | Enumproject_typeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproject_typeNullableFilter<$PrismaModel> | project_type | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumproject_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: project_type | Enumproject_typeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproject_typeNullableWithAggregatesFilter<$PrismaModel> | project_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproject_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumproject_typeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UsersCreateWithoutAccountsInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type UsersUncheckedCreateWithoutAccountsInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type UsersCreateOrConnectWithoutAccountsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
  }

  export type ProjectsCreateWithoutAccountsInput = {
    project_id: string
    name?: string | null
    label?: string | null
    type?: project_type | null
    subproject_name_singular?: string | null
    subproject_name_plural?: string | null
    subproject_order_by?: string | null
    places_label_by?: string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: string | null
    persons_order_by?: string | null
    goal_reports_label_by?: string | null
    goal_reports_order_by?: string | null
    values_on_multiple_levels?: string | null
    multiple_action_values_on_same_level?: string | null
    multiple_check_values_on_same_level?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: boolean | null
    files_active_projects?: boolean | null
    files_active_subprojects?: boolean | null
    files_active_places?: boolean | null
    files_active_actions?: boolean | null
    files_active_checks?: boolean | null
    deleted?: boolean | null
  }

  export type ProjectsUncheckedCreateWithoutAccountsInput = {
    project_id: string
    name?: string | null
    label?: string | null
    type?: project_type | null
    subproject_name_singular?: string | null
    subproject_name_plural?: string | null
    subproject_order_by?: string | null
    places_label_by?: string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: string | null
    persons_order_by?: string | null
    goal_reports_label_by?: string | null
    goal_reports_order_by?: string | null
    values_on_multiple_levels?: string | null
    multiple_action_values_on_same_level?: string | null
    multiple_check_values_on_same_level?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: boolean | null
    files_active_projects?: boolean | null
    files_active_subprojects?: boolean | null
    files_active_places?: boolean | null
    files_active_actions?: boolean | null
    files_active_checks?: boolean | null
    deleted?: boolean | null
  }

  export type ProjectsCreateOrConnectWithoutAccountsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutAccountsInput, ProjectsUncheckedCreateWithoutAccountsInput>
  }

  export type ProjectsCreateManyAccountsInputEnvelope = {
    data: Enumerable<ProjectsCreateManyAccountsInput>
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutAccountsInput = {
    update: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type UsersUpdateWithoutAccountsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsersUncheckedUpdateWithoutAccountsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutAccountsInput, ProjectsUncheckedUpdateWithoutAccountsInput>
    create: XOR<ProjectsCreateWithoutAccountsInput, ProjectsUncheckedCreateWithoutAccountsInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutAccountsInput, ProjectsUncheckedUpdateWithoutAccountsInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutAccountsInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutAccountsInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: Enumerable<ProjectsScalarWhereInput>
    OR?: Enumerable<ProjectsScalarWhereInput>
    NOT?: Enumerable<ProjectsScalarWhereInput>
    project_id?: UuidFilter<"Projects"> | string
    account_id?: UuidNullableFilter<"Projects"> | string | null
    name?: StringNullableFilter<"Projects"> | string | null
    label?: StringNullableFilter<"Projects"> | string | null
    type?: Enumproject_typeNullableFilter<"Projects"> | project_type | null
    subproject_name_singular?: StringNullableFilter<"Projects"> | string | null
    subproject_name_plural?: StringNullableFilter<"Projects"> | string | null
    subproject_order_by?: StringNullableFilter<"Projects"> | string | null
    places_label_by?: StringNullableFilter<"Projects"> | string | null
    places_order_by?: JsonNullableFilter<"Projects">
    persons_label_by?: StringNullableFilter<"Projects"> | string | null
    persons_order_by?: StringNullableFilter<"Projects"> | string | null
    goal_reports_label_by?: StringNullableFilter<"Projects"> | string | null
    goal_reports_order_by?: StringNullableFilter<"Projects"> | string | null
    values_on_multiple_levels?: StringNullableFilter<"Projects"> | string | null
    multiple_action_values_on_same_level?: StringNullableFilter<"Projects"> | string | null
    multiple_check_values_on_same_level?: StringNullableFilter<"Projects"> | string | null
    data?: JsonNullableFilter<"Projects">
    files_offline?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_projects?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_subprojects?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_places?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_actions?: BoolNullableFilter<"Projects"> | boolean | null
    files_active_checks?: BoolNullableFilter<"Projects"> | boolean | null
    deleted?: BoolNullableFilter<"Projects"> | boolean | null
  }

  export type AccountsCreateWithoutProjectsInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    users?: UsersCreateNestedOneWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutProjectsInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
  }

  export type AccountsCreateOrConnectWithoutProjectsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutProjectsInput, AccountsUncheckedCreateWithoutProjectsInput>
  }

  export type AccountsUpsertWithoutProjectsInput = {
    update: XOR<AccountsUpdateWithoutProjectsInput, AccountsUncheckedUpdateWithoutProjectsInput>
    create: XOR<AccountsCreateWithoutProjectsInput, AccountsUncheckedCreateWithoutProjectsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutProjectsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutProjectsInput, AccountsUncheckedUpdateWithoutProjectsInput>
  }

  export type AccountsUpdateWithoutProjectsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutProjectsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountsCreateWithoutUsersInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    projects?: ProjectsCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutUsersInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    projects?: ProjectsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutUsersInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUsersInput, AccountsUncheckedCreateWithoutUsersInput>
  }

  export type AccountsCreateManyUsersInputEnvelope = {
    data: Enumerable<AccountsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type AccountsUpsertWithWhereUniqueWithoutUsersInput = {
    where: AccountsWhereUniqueInput
    update: XOR<AccountsUpdateWithoutUsersInput, AccountsUncheckedUpdateWithoutUsersInput>
    create: XOR<AccountsCreateWithoutUsersInput, AccountsUncheckedCreateWithoutUsersInput>
  }

  export type AccountsUpdateWithWhereUniqueWithoutUsersInput = {
    where: AccountsWhereUniqueInput
    data: XOR<AccountsUpdateWithoutUsersInput, AccountsUncheckedUpdateWithoutUsersInput>
  }

  export type AccountsUpdateManyWithWhereWithoutUsersInput = {
    where: AccountsScalarWhereInput
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyWithoutUsersInput>
  }

  export type AccountsScalarWhereInput = {
    AND?: Enumerable<AccountsScalarWhereInput>
    OR?: Enumerable<AccountsScalarWhereInput>
    NOT?: Enumerable<AccountsScalarWhereInput>
    account_id?: UuidFilter<"Accounts"> | string
    user_id?: UuidNullableFilter<"Accounts"> | string | null
    type?: StringNullableFilter<"Accounts"> | string | null
    period_start?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    period_end?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    projects_label_by?: StringNullableFilter<"Accounts"> | string | null
    label?: StringNullableFilter<"Accounts"> | string | null
  }

  export type ProjectsCreateManyAccountsInput = {
    project_id: string
    name?: string | null
    label?: string | null
    type?: project_type | null
    subproject_name_singular?: string | null
    subproject_name_plural?: string | null
    subproject_order_by?: string | null
    places_label_by?: string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: string | null
    persons_order_by?: string | null
    goal_reports_label_by?: string | null
    goal_reports_order_by?: string | null
    values_on_multiple_levels?: string | null
    multiple_action_values_on_same_level?: string | null
    multiple_check_values_on_same_level?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: boolean | null
    files_active_projects?: boolean | null
    files_active_subprojects?: boolean | null
    files_active_places?: boolean | null
    files_active_actions?: boolean | null
    files_active_checks?: boolean | null
    deleted?: boolean | null
  }

  export type ProjectsUpdateWithoutAccountsInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumproject_typeFieldUpdateOperationsInput | project_type | null
    subproject_name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    persons_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    values_on_multiple_levels?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_action_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_check_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_projects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_subprojects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_places?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUncheckedUpdateWithoutAccountsInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumproject_typeFieldUpdateOperationsInput | project_type | null
    subproject_name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    persons_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    values_on_multiple_levels?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_action_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_check_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_projects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_subprojects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_places?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUncheckedUpdateManyWithoutAccountsInput = {
    project_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumproject_typeFieldUpdateOperationsInput | project_type | null
    subproject_name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    subproject_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    places_order_by?: NullableJsonNullValueInput | InputJsonValue
    persons_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    persons_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    goal_reports_order_by?: NullableStringFieldUpdateOperationsInput | string | null
    values_on_multiple_levels?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_action_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    multiple_check_values_on_same_level?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    files_offline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_projects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_subprojects?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_places?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    files_active_checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AccountsCreateManyUsersInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
  }

  export type AccountsUpdateWithoutUsersInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectsUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUsersInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateManyWithoutUsersInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
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