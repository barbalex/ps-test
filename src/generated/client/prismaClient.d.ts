
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
 * Model Field_types
 * 
 */
export type Field_types = {
  /**
   * @zod.string.uuid()
   */
  field_type_id: string
  name: string | null
  /**
   * @zod.number.int().gte(-32768).lte(32767)
   */
  sort: number | null
  comment: string | null
  label_replace_by_generated_column: string | null
  deleted: boolean | null
}

/**
 * Model Messages
 * 
 */
export type Messages = {
  /**
   * @zod.string.uuid()
   */
  message_id: string
  label_replace_by_generated_column: string | null
  date: Date | null
  message: string | null
}

/**
 * Model Place_levels
 * 
 */
export type Place_levels = {
  /**
   * @zod.string.uuid()
   */
  place_level_id: string
  /**
   * @zod.string.uuid()
   */
  account_id: string | null
  /**
   * @zod.string.uuid()
   */
  project_id: string | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  level: number | null
  name_singular: string | null
  name_plural: string | null
  name_short: string | null
  reports: boolean | null
  report_values: boolean | null
  actions: boolean | null
  action_values: boolean | null
  action_reports: boolean | null
  checks: boolean | null
  check_values: boolean | null
  check_taxa: boolean | null
  observations: boolean | null
  label_replace_by_generated_column: string | null
  deleted: boolean | null
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
 * Model Ui_options
 * 
 */
export type Ui_options = {
  /**
   * @zod.string.uuid()
   */
  user_id: string
  /**
   * @zod.string.uuid()
   */
  account_id: string | null
  designing: boolean | null
  breadcrumbs_overflowing: boolean | null
  navs_overflowing: boolean | null
  tabs: Prisma.JsonValue | null
  show_map: boolean | null
  map_bounds: Prisma.JsonValue | null
  local_map_show: Prisma.JsonValue | null
  tile_layer_sorter: string | null
  vector_layer_sorter: string | null
  /**
   * @zod.string.uuid()
   */
  editing_place_geometry: string | null
  /**
   * @zod.string.uuid()
   */
  editing_check_geometry: string | null
  /**
   * @zod.string.uuid()
   */
  editing_action_geometry: string | null
  label: string | null
}

/**
 * Model User_messages
 * 
 */
export type User_messages = {
  /**
   * @zod.string.uuid()
   */
  user_message_id: string
  /**
   * @zod.string.uuid()
   */
  account_id: string | null
  /**
   * @zod.string.uuid()
   */
  user_id: string | null
  /**
   * @zod.string.uuid()
   */
  message_id: string | null
  label_replace_by_generated_column: string | null
  read: boolean | null
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
 * Model Widget_types
 * 
 */
export type Widget_types = {
  /**
   * @zod.string.uuid()
   */
  widget_type_id: string
  name: string | null
  needs_list: boolean | null
  /**
   * @zod.number.int().gte(-32768).lte(32767)
   */
  sort: number | null
  comment: string | null
  label_replace_by_generated_column: string | null
  deleted: boolean | null
}

/**
 * Model Widgets_for_fields
 * 
 */
export type Widgets_for_fields = {
  /**
   * @zod.string.uuid()
   */
  widget_for_field_id: string
  /**
   * @zod.string.uuid()
   */
  field_type_id: string | null
  /**
   * @zod.string.uuid()
   */
  widget_type_id: string | null
  label: string | null
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
   * `prisma.field_types`: Exposes CRUD operations for the **Field_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Field_types
    * const field_types = await prisma.field_types.findMany()
    * ```
    */
  get field_types(): Prisma.Field_typesDelegate<GlobalReject>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<GlobalReject>;

  /**
   * `prisma.place_levels`: Exposes CRUD operations for the **Place_levels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Place_levels
    * const place_levels = await prisma.place_levels.findMany()
    * ```
    */
  get place_levels(): Prisma.Place_levelsDelegate<GlobalReject>;

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
   * `prisma.ui_options`: Exposes CRUD operations for the **Ui_options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ui_options
    * const ui_options = await prisma.ui_options.findMany()
    * ```
    */
  get ui_options(): Prisma.Ui_optionsDelegate<GlobalReject>;

  /**
   * `prisma.user_messages`: Exposes CRUD operations for the **User_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_messages
    * const user_messages = await prisma.user_messages.findMany()
    * ```
    */
  get user_messages(): Prisma.User_messagesDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.widget_types`: Exposes CRUD operations for the **Widget_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Widget_types
    * const widget_types = await prisma.widget_types.findMany()
    * ```
    */
  get widget_types(): Prisma.Widget_typesDelegate<GlobalReject>;

  /**
   * `prisma.widgets_for_fields`: Exposes CRUD operations for the **Widgets_for_fields** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Widgets_for_fields
    * const widgets_for_fields = await prisma.widgets_for_fields.findMany()
    * ```
    */
  get widgets_for_fields(): Prisma.Widgets_for_fieldsDelegate<GlobalReject>;
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
    Field_types: 'Field_types',
    Messages: 'Messages',
    Place_levels: 'Place_levels',
    Projects: 'Projects',
    Ui_options: 'Ui_options',
    User_messages: 'User_messages',
    Users: 'Users',
    Widget_types: 'Widget_types',
    Widgets_for_fields: 'Widgets_for_fields'
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
    place_levels: number
    projects: number
    ui_options: number
    user_messages: number
  }

  export type AccountsCountOutputTypeSelect = {
    place_levels?: boolean | AccountsCountOutputTypeCountPlace_levelsArgs
    projects?: boolean | AccountsCountOutputTypeCountProjectsArgs
    ui_options?: boolean | AccountsCountOutputTypeCountUi_optionsArgs
    user_messages?: boolean | AccountsCountOutputTypeCountUser_messagesArgs
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
  export type AccountsCountOutputTypeCountPlace_levelsArgs = {
    where?: Place_levelsWhereInput
  }


  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountProjectsArgs = {
    where?: ProjectsWhereInput
  }


  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountUi_optionsArgs = {
    where?: Ui_optionsWhereInput
  }


  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountUser_messagesArgs = {
    where?: User_messagesWhereInput
  }



  /**
   * Count Type Field_typesCountOutputType
   */


  export type Field_typesCountOutputType = {
    widgets_for_fields: number
  }

  export type Field_typesCountOutputTypeSelect = {
    widgets_for_fields?: boolean | Field_typesCountOutputTypeCountWidgets_for_fieldsArgs
  }

  export type Field_typesCountOutputTypeGetPayload<S extends boolean | null | undefined | Field_typesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Field_typesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Field_typesCountOutputTypeArgs)
    ? Field_typesCountOutputType 
    : S extends { select: any } & (Field_typesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Field_typesCountOutputType ? Field_typesCountOutputType[P] : never
  } 
      : Field_typesCountOutputType




  // Custom InputTypes

  /**
   * Field_typesCountOutputType without action
   */
  export type Field_typesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Field_typesCountOutputType
     * 
    **/
    select?: Field_typesCountOutputTypeSelect | null
  }


  /**
   * Field_typesCountOutputType without action
   */
  export type Field_typesCountOutputTypeCountWidgets_for_fieldsArgs = {
    where?: Widgets_for_fieldsWhereInput
  }



  /**
   * Count Type MessagesCountOutputType
   */


  export type MessagesCountOutputType = {
    user_messages: number
  }

  export type MessagesCountOutputTypeSelect = {
    user_messages?: boolean | MessagesCountOutputTypeCountUser_messagesArgs
  }

  export type MessagesCountOutputTypeGetPayload<S extends boolean | null | undefined | MessagesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MessagesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MessagesCountOutputTypeArgs)
    ? MessagesCountOutputType 
    : S extends { select: any } & (MessagesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MessagesCountOutputType ? MessagesCountOutputType[P] : never
  } 
      : MessagesCountOutputType




  // Custom InputTypes

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MessagesCountOutputType
     * 
    **/
    select?: MessagesCountOutputTypeSelect | null
  }


  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountUser_messagesArgs = {
    where?: User_messagesWhereInput
  }



  /**
   * Count Type ProjectsCountOutputType
   */


  export type ProjectsCountOutputType = {
    place_levels: number
  }

  export type ProjectsCountOutputTypeSelect = {
    place_levels?: boolean | ProjectsCountOutputTypeCountPlace_levelsArgs
  }

  export type ProjectsCountOutputTypeGetPayload<S extends boolean | null | undefined | ProjectsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProjectsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProjectsCountOutputTypeArgs)
    ? ProjectsCountOutputType 
    : S extends { select: any } & (ProjectsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProjectsCountOutputType ? ProjectsCountOutputType[P] : never
  } 
      : ProjectsCountOutputType




  // Custom InputTypes

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     * 
    **/
    select?: ProjectsCountOutputTypeSelect | null
  }


  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountPlace_levelsArgs = {
    where?: Place_levelsWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    accounts: number
    user_messages: number
  }

  export type UsersCountOutputTypeSelect = {
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
    user_messages?: boolean | UsersCountOutputTypeCountUser_messagesArgs
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
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_messagesArgs = {
    where?: User_messagesWhereInput
  }



  /**
   * Count Type Widget_typesCountOutputType
   */


  export type Widget_typesCountOutputType = {
    widgets_for_fields: number
  }

  export type Widget_typesCountOutputTypeSelect = {
    widgets_for_fields?: boolean | Widget_typesCountOutputTypeCountWidgets_for_fieldsArgs
  }

  export type Widget_typesCountOutputTypeGetPayload<S extends boolean | null | undefined | Widget_typesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Widget_typesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Widget_typesCountOutputTypeArgs)
    ? Widget_typesCountOutputType 
    : S extends { select: any } & (Widget_typesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Widget_typesCountOutputType ? Widget_typesCountOutputType[P] : never
  } 
      : Widget_typesCountOutputType




  // Custom InputTypes

  /**
   * Widget_typesCountOutputType without action
   */
  export type Widget_typesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Widget_typesCountOutputType
     * 
    **/
    select?: Widget_typesCountOutputTypeSelect | null
  }


  /**
   * Widget_typesCountOutputType without action
   */
  export type Widget_typesCountOutputTypeCountWidgets_for_fieldsArgs = {
    where?: Widgets_for_fieldsWhereInput
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
    place_levels?: boolean | Accounts$place_levelsArgs
    projects?: boolean | Accounts$projectsArgs
    ui_options?: boolean | Accounts$ui_optionsArgs
    user_messages?: boolean | Accounts$user_messagesArgs
    _count?: boolean | AccountsCountOutputTypeArgs
  }


  export type AccountsInclude = {
    users?: boolean | Accounts$usersArgs
    place_levels?: boolean | Accounts$place_levelsArgs
    projects?: boolean | Accounts$projectsArgs
    ui_options?: boolean | Accounts$ui_optionsArgs
    user_messages?: boolean | Accounts$user_messagesArgs
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
        P extends 'place_levels' ? Array < Place_levelsGetPayload<S['include'][P]>>  :
        P extends 'projects' ? Array < ProjectsGetPayload<S['include'][P]>>  :
        P extends 'ui_options' ? Array < Ui_optionsGetPayload<S['include'][P]>>  :
        P extends 'user_messages' ? Array < User_messagesGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountsArgs | AccountsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? UsersGetPayload<S['select'][P]> | null :
        P extends 'place_levels' ? Array < Place_levelsGetPayload<S['select'][P]>>  :
        P extends 'projects' ? Array < ProjectsGetPayload<S['select'][P]>>  :
        P extends 'ui_options' ? Array < Ui_optionsGetPayload<S['select'][P]>>  :
        P extends 'user_messages' ? Array < User_messagesGetPayload<S['select'][P]>>  :
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

    place_levels<T extends Accounts$place_levelsArgs= {}>(args?: Subset<T, Accounts$place_levelsArgs>): PrismaPromise<Array<Place_levelsGetPayload<T>>| Null>;

    projects<T extends Accounts$projectsArgs= {}>(args?: Subset<T, Accounts$projectsArgs>): PrismaPromise<Array<ProjectsGetPayload<T>>| Null>;

    ui_options<T extends Accounts$ui_optionsArgs= {}>(args?: Subset<T, Accounts$ui_optionsArgs>): PrismaPromise<Array<Ui_optionsGetPayload<T>>| Null>;

    user_messages<T extends Accounts$user_messagesArgs= {}>(args?: Subset<T, Accounts$user_messagesArgs>): PrismaPromise<Array<User_messagesGetPayload<T>>| Null>;

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
   * Accounts.place_levels
   */
  export type Accounts$place_levelsArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    where?: Place_levelsWhereInput
    orderBy?: Enumerable<Place_levelsOrderByWithRelationInput>
    cursor?: Place_levelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Place_levelsScalarFieldEnum>
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
   * Accounts.ui_options
   */
  export type Accounts$ui_optionsArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    where?: Ui_optionsWhereInput
    orderBy?: Enumerable<Ui_optionsOrderByWithRelationInput>
    cursor?: Ui_optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Ui_optionsScalarFieldEnum>
  }


  /**
   * Accounts.user_messages
   */
  export type Accounts$user_messagesArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    where?: User_messagesWhereInput
    orderBy?: Enumerable<User_messagesOrderByWithRelationInput>
    cursor?: User_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_messagesScalarFieldEnum>
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
   * Model Field_types
   */


  export type AggregateField_types = {
    _count: Field_typesCountAggregateOutputType | null
    _avg: Field_typesAvgAggregateOutputType | null
    _sum: Field_typesSumAggregateOutputType | null
    _min: Field_typesMinAggregateOutputType | null
    _max: Field_typesMaxAggregateOutputType | null
  }

  export type Field_typesAvgAggregateOutputType = {
    sort: number | null
  }

  export type Field_typesSumAggregateOutputType = {
    sort: number | null
  }

  export type Field_typesMinAggregateOutputType = {
    field_type_id: string | null
    name: string | null
    sort: number | null
    comment: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type Field_typesMaxAggregateOutputType = {
    field_type_id: string | null
    name: string | null
    sort: number | null
    comment: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type Field_typesCountAggregateOutputType = {
    field_type_id: number
    name: number
    sort: number
    comment: number
    label_replace_by_generated_column: number
    deleted: number
    _all: number
  }


  export type Field_typesAvgAggregateInputType = {
    sort?: true
  }

  export type Field_typesSumAggregateInputType = {
    sort?: true
  }

  export type Field_typesMinAggregateInputType = {
    field_type_id?: true
    name?: true
    sort?: true
    comment?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type Field_typesMaxAggregateInputType = {
    field_type_id?: true
    name?: true
    sort?: true
    comment?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type Field_typesCountAggregateInputType = {
    field_type_id?: true
    name?: true
    sort?: true
    comment?: true
    label_replace_by_generated_column?: true
    deleted?: true
    _all?: true
  }

  export type Field_typesAggregateArgs = {
    /**
     * Filter which Field_types to aggregate.
     * 
    **/
    where?: Field_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Field_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Field_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Field_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Field_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Field_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Field_types
    **/
    _count?: true | Field_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Field_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Field_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Field_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Field_typesMaxAggregateInputType
  }

  export type GetField_typesAggregateType<T extends Field_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateField_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateField_types[P]>
      : GetScalarType<T[P], AggregateField_types[P]>
  }




  export type Field_typesGroupByArgs = {
    where?: Field_typesWhereInput
    orderBy?: Enumerable<Field_typesOrderByWithAggregationInput>
    by: Array<Field_typesScalarFieldEnum>
    having?: Field_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Field_typesCountAggregateInputType | true
    _avg?: Field_typesAvgAggregateInputType
    _sum?: Field_typesSumAggregateInputType
    _min?: Field_typesMinAggregateInputType
    _max?: Field_typesMaxAggregateInputType
  }


  export type Field_typesGroupByOutputType = {
    field_type_id: string
    name: string | null
    sort: number | null
    comment: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
    _count: Field_typesCountAggregateOutputType | null
    _avg: Field_typesAvgAggregateOutputType | null
    _sum: Field_typesSumAggregateOutputType | null
    _min: Field_typesMinAggregateOutputType | null
    _max: Field_typesMaxAggregateOutputType | null
  }

  type GetField_typesGroupByPayload<T extends Field_typesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Field_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Field_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Field_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Field_typesGroupByOutputType[P]>
        }
      >
    >


  export type Field_typesSelect = {
    field_type_id?: boolean
    name?: boolean
    sort?: boolean
    comment?: boolean
    label_replace_by_generated_column?: boolean
    deleted?: boolean
    widgets_for_fields?: boolean | Field_types$widgets_for_fieldsArgs
    _count?: boolean | Field_typesCountOutputTypeArgs
  }


  export type Field_typesInclude = {
    widgets_for_fields?: boolean | Field_types$widgets_for_fieldsArgs
    _count?: boolean | Field_typesCountOutputTypeArgs
  } 

  export type Field_typesGetPayload<S extends boolean | null | undefined | Field_typesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Field_types :
    S extends undefined ? never :
    S extends { include: any } & (Field_typesArgs | Field_typesFindManyArgs)
    ? Field_types  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'widgets_for_fields' ? Array < Widgets_for_fieldsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Field_typesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Field_typesArgs | Field_typesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'widgets_for_fields' ? Array < Widgets_for_fieldsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Field_typesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Field_types ? Field_types[P] : never
  } 
      : Field_types


  type Field_typesCountArgs = Merge<
    Omit<Field_typesFindManyArgs, 'select' | 'include'> & {
      select?: Field_typesCountAggregateInputType | true
    }
  >

  export interface Field_typesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Field_types that matches the filter.
     * @param {Field_typesFindUniqueArgs} args - Arguments to find a Field_types
     * @example
     * // Get one Field_types
     * const field_types = await prisma.field_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Field_typesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Field_typesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Field_types'> extends True ? Prisma__Field_typesClient<Field_typesGetPayload<T>> : Prisma__Field_typesClient<Field_typesGetPayload<T> | null, null>

    /**
     * Find one Field_types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Field_typesFindUniqueOrThrowArgs} args - Arguments to find a Field_types
     * @example
     * // Get one Field_types
     * const field_types = await prisma.field_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Field_typesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Field_typesFindUniqueOrThrowArgs>
    ): Prisma__Field_typesClient<Field_typesGetPayload<T>>

    /**
     * Find the first Field_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Field_typesFindFirstArgs} args - Arguments to find a Field_types
     * @example
     * // Get one Field_types
     * const field_types = await prisma.field_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Field_typesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Field_typesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Field_types'> extends True ? Prisma__Field_typesClient<Field_typesGetPayload<T>> : Prisma__Field_typesClient<Field_typesGetPayload<T> | null, null>

    /**
     * Find the first Field_types that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Field_typesFindFirstOrThrowArgs} args - Arguments to find a Field_types
     * @example
     * // Get one Field_types
     * const field_types = await prisma.field_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Field_typesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Field_typesFindFirstOrThrowArgs>
    ): Prisma__Field_typesClient<Field_typesGetPayload<T>>

    /**
     * Find zero or more Field_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Field_typesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Field_types
     * const field_types = await prisma.field_types.findMany()
     * 
     * // Get first 10 Field_types
     * const field_types = await prisma.field_types.findMany({ take: 10 })
     * 
     * // Only select the `field_type_id`
     * const field_typesWithField_type_idOnly = await prisma.field_types.findMany({ select: { field_type_id: true } })
     * 
    **/
    findMany<T extends Field_typesFindManyArgs>(
      args?: SelectSubset<T, Field_typesFindManyArgs>
    ): PrismaPromise<Array<Field_typesGetPayload<T>>>

    /**
     * Create a Field_types.
     * @param {Field_typesCreateArgs} args - Arguments to create a Field_types.
     * @example
     * // Create one Field_types
     * const Field_types = await prisma.field_types.create({
     *   data: {
     *     // ... data to create a Field_types
     *   }
     * })
     * 
    **/
    create<T extends Field_typesCreateArgs>(
      args: SelectSubset<T, Field_typesCreateArgs>
    ): Prisma__Field_typesClient<Field_typesGetPayload<T>>

    /**
     * Create many Field_types.
     *     @param {Field_typesCreateManyArgs} args - Arguments to create many Field_types.
     *     @example
     *     // Create many Field_types
     *     const field_types = await prisma.field_types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Field_typesCreateManyArgs>(
      args?: SelectSubset<T, Field_typesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Field_types.
     * @param {Field_typesDeleteArgs} args - Arguments to delete one Field_types.
     * @example
     * // Delete one Field_types
     * const Field_types = await prisma.field_types.delete({
     *   where: {
     *     // ... filter to delete one Field_types
     *   }
     * })
     * 
    **/
    delete<T extends Field_typesDeleteArgs>(
      args: SelectSubset<T, Field_typesDeleteArgs>
    ): Prisma__Field_typesClient<Field_typesGetPayload<T>>

    /**
     * Update one Field_types.
     * @param {Field_typesUpdateArgs} args - Arguments to update one Field_types.
     * @example
     * // Update one Field_types
     * const field_types = await prisma.field_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Field_typesUpdateArgs>(
      args: SelectSubset<T, Field_typesUpdateArgs>
    ): Prisma__Field_typesClient<Field_typesGetPayload<T>>

    /**
     * Delete zero or more Field_types.
     * @param {Field_typesDeleteManyArgs} args - Arguments to filter Field_types to delete.
     * @example
     * // Delete a few Field_types
     * const { count } = await prisma.field_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Field_typesDeleteManyArgs>(
      args?: SelectSubset<T, Field_typesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Field_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Field_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Field_types
     * const field_types = await prisma.field_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Field_typesUpdateManyArgs>(
      args: SelectSubset<T, Field_typesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Field_types.
     * @param {Field_typesUpsertArgs} args - Arguments to update or create a Field_types.
     * @example
     * // Update or create a Field_types
     * const field_types = await prisma.field_types.upsert({
     *   create: {
     *     // ... data to create a Field_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Field_types we want to update
     *   }
     * })
    **/
    upsert<T extends Field_typesUpsertArgs>(
      args: SelectSubset<T, Field_typesUpsertArgs>
    ): Prisma__Field_typesClient<Field_typesGetPayload<T>>

    /**
     * Count the number of Field_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Field_typesCountArgs} args - Arguments to filter Field_types to count.
     * @example
     * // Count the number of Field_types
     * const count = await prisma.field_types.count({
     *   where: {
     *     // ... the filter for the Field_types we want to count
     *   }
     * })
    **/
    count<T extends Field_typesCountArgs>(
      args?: Subset<T, Field_typesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Field_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Field_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Field_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Field_typesAggregateArgs>(args: Subset<T, Field_typesAggregateArgs>): PrismaPromise<GetField_typesAggregateType<T>>

    /**
     * Group by Field_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Field_typesGroupByArgs} args - Group by arguments.
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
      T extends Field_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Field_typesGroupByArgs['orderBy'] }
        : { orderBy?: Field_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Field_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetField_typesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Field_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Field_typesClient<T, Null = never> implements PrismaPromise<T> {
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

    widgets_for_fields<T extends Field_types$widgets_for_fieldsArgs= {}>(args?: Subset<T, Field_types$widgets_for_fieldsArgs>): PrismaPromise<Array<Widgets_for_fieldsGetPayload<T>>| Null>;

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
   * Field_types base type for findUnique actions
   */
  export type Field_typesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * Filter, which Field_types to fetch.
     * 
    **/
    where: Field_typesWhereUniqueInput
  }

  /**
   * Field_types findUnique
   */
  export interface Field_typesFindUniqueArgs extends Field_typesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Field_types findUniqueOrThrow
   */
  export type Field_typesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * Filter, which Field_types to fetch.
     * 
    **/
    where: Field_typesWhereUniqueInput
  }


  /**
   * Field_types base type for findFirst actions
   */
  export type Field_typesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * Filter, which Field_types to fetch.
     * 
    **/
    where?: Field_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Field_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Field_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Field_types.
     * 
    **/
    cursor?: Field_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Field_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Field_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Field_types.
     * 
    **/
    distinct?: Enumerable<Field_typesScalarFieldEnum>
  }

  /**
   * Field_types findFirst
   */
  export interface Field_typesFindFirstArgs extends Field_typesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Field_types findFirstOrThrow
   */
  export type Field_typesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * Filter, which Field_types to fetch.
     * 
    **/
    where?: Field_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Field_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Field_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Field_types.
     * 
    **/
    cursor?: Field_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Field_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Field_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Field_types.
     * 
    **/
    distinct?: Enumerable<Field_typesScalarFieldEnum>
  }


  /**
   * Field_types findMany
   */
  export type Field_typesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * Filter, which Field_types to fetch.
     * 
    **/
    where?: Field_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Field_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Field_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Field_types.
     * 
    **/
    cursor?: Field_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Field_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Field_types.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Field_typesScalarFieldEnum>
  }


  /**
   * Field_types create
   */
  export type Field_typesCreateArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * The data needed to create a Field_types.
     * 
    **/
    data: XOR<Field_typesCreateInput, Field_typesUncheckedCreateInput>
  }


  /**
   * Field_types createMany
   */
  export type Field_typesCreateManyArgs = {
    /**
     * The data used to create many Field_types.
     * 
    **/
    data: Enumerable<Field_typesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Field_types update
   */
  export type Field_typesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * The data needed to update a Field_types.
     * 
    **/
    data: XOR<Field_typesUpdateInput, Field_typesUncheckedUpdateInput>
    /**
     * Choose, which Field_types to update.
     * 
    **/
    where: Field_typesWhereUniqueInput
  }


  /**
   * Field_types updateMany
   */
  export type Field_typesUpdateManyArgs = {
    /**
     * The data used to update Field_types.
     * 
    **/
    data: XOR<Field_typesUpdateManyMutationInput, Field_typesUncheckedUpdateManyInput>
    /**
     * Filter which Field_types to update
     * 
    **/
    where?: Field_typesWhereInput
  }


  /**
   * Field_types upsert
   */
  export type Field_typesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * The filter to search for the Field_types to update in case it exists.
     * 
    **/
    where: Field_typesWhereUniqueInput
    /**
     * In case the Field_types found by the `where` argument doesn't exist, create a new Field_types with this data.
     * 
    **/
    create: XOR<Field_typesCreateInput, Field_typesUncheckedCreateInput>
    /**
     * In case the Field_types was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Field_typesUpdateInput, Field_typesUncheckedUpdateInput>
  }


  /**
   * Field_types delete
   */
  export type Field_typesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    /**
     * Filter which Field_types to delete.
     * 
    **/
    where: Field_typesWhereUniqueInput
  }


  /**
   * Field_types deleteMany
   */
  export type Field_typesDeleteManyArgs = {
    /**
     * Filter which Field_types to delete
     * 
    **/
    where?: Field_typesWhereInput
  }


  /**
   * Field_types.widgets_for_fields
   */
  export type Field_types$widgets_for_fieldsArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    where?: Widgets_for_fieldsWhereInput
    orderBy?: Enumerable<Widgets_for_fieldsOrderByWithRelationInput>
    cursor?: Widgets_for_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Widgets_for_fieldsScalarFieldEnum>
  }


  /**
   * Field_types without action
   */
  export type Field_typesArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
  }



  /**
   * Model Messages
   */


  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    message_id: string | null
    label_replace_by_generated_column: string | null
    date: Date | null
    message: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    message_id: string | null
    label_replace_by_generated_column: string | null
    date: Date | null
    message: string | null
  }

  export type MessagesCountAggregateOutputType = {
    message_id: number
    label_replace_by_generated_column: number
    date: number
    message: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    message_id?: true
    label_replace_by_generated_column?: true
    date?: true
    message?: true
  }

  export type MessagesMaxAggregateInputType = {
    message_id?: true
    label_replace_by_generated_column?: true
    date?: true
    message?: true
  }

  export type MessagesCountAggregateInputType = {
    message_id?: true
    label_replace_by_generated_column?: true
    date?: true
    message?: true
    _all?: true
  }

  export type MessagesAggregateArgs = {
    /**
     * Filter which Messages to aggregate.
     * 
    **/
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs = {
    where?: MessagesWhereInput
    orderBy?: Enumerable<MessagesOrderByWithAggregationInput>
    by: Array<MessagesScalarFieldEnum>
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }


  export type MessagesGroupByOutputType = {
    message_id: string
    label_replace_by_generated_column: string | null
    date: Date | null
    message: string | null
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect = {
    message_id?: boolean
    label_replace_by_generated_column?: boolean
    date?: boolean
    message?: boolean
    user_messages?: boolean | Messages$user_messagesArgs
    _count?: boolean | MessagesCountOutputTypeArgs
  }


  export type MessagesInclude = {
    user_messages?: boolean | Messages$user_messagesArgs
    _count?: boolean | MessagesCountOutputTypeArgs
  } 

  export type MessagesGetPayload<S extends boolean | null | undefined | MessagesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Messages :
    S extends undefined ? never :
    S extends { include: any } & (MessagesArgs | MessagesFindManyArgs)
    ? Messages  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user_messages' ? Array < User_messagesGetPayload<S['include'][P]>>  :
        P extends '_count' ? MessagesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MessagesArgs | MessagesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user_messages' ? Array < User_messagesGetPayload<S['select'][P]>>  :
        P extends '_count' ? MessagesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Messages ? Messages[P] : never
  } 
      : Messages


  type MessagesCountArgs = Merge<
    Omit<MessagesFindManyArgs, 'select' | 'include'> & {
      select?: MessagesCountAggregateInputType | true
    }
  >

  export interface MessagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Messages'> extends True ? Prisma__MessagesClient<MessagesGetPayload<T>> : Prisma__MessagesClient<MessagesGetPayload<T> | null, null>

    /**
     * Find one Messages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessagesFindUniqueOrThrowArgs>
    ): Prisma__MessagesClient<MessagesGetPayload<T>>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Messages'> extends True ? Prisma__MessagesClient<MessagesGetPayload<T>> : Prisma__MessagesClient<MessagesGetPayload<T> | null, null>

    /**
     * Find the first Messages that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessagesFindFirstOrThrowArgs>
    ): Prisma__MessagesClient<MessagesGetPayload<T>>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.findMany({ select: { message_id: true } })
     * 
    **/
    findMany<T extends MessagesFindManyArgs>(
      args?: SelectSubset<T, MessagesFindManyArgs>
    ): PrismaPromise<Array<MessagesGetPayload<T>>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
    **/
    create<T extends MessagesCreateArgs>(
      args: SelectSubset<T, MessagesCreateArgs>
    ): Prisma__MessagesClient<MessagesGetPayload<T>>

    /**
     * Create many Messages.
     *     @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const messages = await prisma.messages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessagesCreateManyArgs>(
      args?: SelectSubset<T, MessagesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
    **/
    delete<T extends MessagesDeleteArgs>(
      args: SelectSubset<T, MessagesDeleteArgs>
    ): Prisma__MessagesClient<MessagesGetPayload<T>>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessagesUpdateArgs>(
      args: SelectSubset<T, MessagesUpdateArgs>
    ): Prisma__MessagesClient<MessagesGetPayload<T>>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessagesDeleteManyArgs>(
      args?: SelectSubset<T, MessagesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessagesUpdateManyArgs>(
      args: SelectSubset<T, MessagesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
    **/
    upsert<T extends MessagesUpsertArgs>(
      args: SelectSubset<T, MessagesUpsertArgs>
    ): Prisma__MessagesClient<MessagesGetPayload<T>>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessagesClient<T, Null = never> implements PrismaPromise<T> {
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

    user_messages<T extends Messages$user_messagesArgs= {}>(args?: Subset<T, Messages$user_messagesArgs>): PrismaPromise<Array<User_messagesGetPayload<T>>| Null>;

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
   * Messages base type for findUnique actions
   */
  export type MessagesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUnique
   */
  export interface MessagesFindUniqueArgs extends MessagesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where: MessagesWhereUniqueInput
  }


  /**
   * Messages base type for findFirst actions
   */
  export type MessagesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }

  /**
   * Messages findFirst
   */
  export interface MessagesFindFirstArgs extends MessagesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }


  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     * 
    **/
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }


  /**
   * Messages create
   */
  export type MessagesCreateArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * The data needed to create a Messages.
     * 
    **/
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }


  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs = {
    /**
     * The data used to create many Messages.
     * 
    **/
    data: Enumerable<MessagesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Messages update
   */
  export type MessagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * The data needed to update a Messages.
     * 
    **/
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     * 
    **/
    where: MessagesWhereUniqueInput
  }


  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs = {
    /**
     * The data used to update Messages.
     * 
    **/
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     * 
    **/
    where?: MessagesWhereInput
  }


  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * The filter to search for the Messages to update in case it exists.
     * 
    **/
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     * 
    **/
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }


  /**
   * Messages delete
   */
  export type MessagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    /**
     * Filter which Messages to delete.
     * 
    **/
    where: MessagesWhereUniqueInput
  }


  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     * 
    **/
    where?: MessagesWhereInput
  }


  /**
   * Messages.user_messages
   */
  export type Messages$user_messagesArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    where?: User_messagesWhereInput
    orderBy?: Enumerable<User_messagesOrderByWithRelationInput>
    cursor?: User_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_messagesScalarFieldEnum>
  }


  /**
   * Messages without action
   */
  export type MessagesArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
  }



  /**
   * Model Place_levels
   */


  export type AggregatePlace_levels = {
    _count: Place_levelsCountAggregateOutputType | null
    _avg: Place_levelsAvgAggregateOutputType | null
    _sum: Place_levelsSumAggregateOutputType | null
    _min: Place_levelsMinAggregateOutputType | null
    _max: Place_levelsMaxAggregateOutputType | null
  }

  export type Place_levelsAvgAggregateOutputType = {
    level: number | null
  }

  export type Place_levelsSumAggregateOutputType = {
    level: number | null
  }

  export type Place_levelsMinAggregateOutputType = {
    place_level_id: string | null
    account_id: string | null
    project_id: string | null
    level: number | null
    name_singular: string | null
    name_plural: string | null
    name_short: string | null
    reports: boolean | null
    report_values: boolean | null
    actions: boolean | null
    action_values: boolean | null
    action_reports: boolean | null
    checks: boolean | null
    check_values: boolean | null
    check_taxa: boolean | null
    observations: boolean | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type Place_levelsMaxAggregateOutputType = {
    place_level_id: string | null
    account_id: string | null
    project_id: string | null
    level: number | null
    name_singular: string | null
    name_plural: string | null
    name_short: string | null
    reports: boolean | null
    report_values: boolean | null
    actions: boolean | null
    action_values: boolean | null
    action_reports: boolean | null
    checks: boolean | null
    check_values: boolean | null
    check_taxa: boolean | null
    observations: boolean | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type Place_levelsCountAggregateOutputType = {
    place_level_id: number
    account_id: number
    project_id: number
    level: number
    name_singular: number
    name_plural: number
    name_short: number
    reports: number
    report_values: number
    actions: number
    action_values: number
    action_reports: number
    checks: number
    check_values: number
    check_taxa: number
    observations: number
    label_replace_by_generated_column: number
    deleted: number
    _all: number
  }


  export type Place_levelsAvgAggregateInputType = {
    level?: true
  }

  export type Place_levelsSumAggregateInputType = {
    level?: true
  }

  export type Place_levelsMinAggregateInputType = {
    place_level_id?: true
    account_id?: true
    project_id?: true
    level?: true
    name_singular?: true
    name_plural?: true
    name_short?: true
    reports?: true
    report_values?: true
    actions?: true
    action_values?: true
    action_reports?: true
    checks?: true
    check_values?: true
    check_taxa?: true
    observations?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type Place_levelsMaxAggregateInputType = {
    place_level_id?: true
    account_id?: true
    project_id?: true
    level?: true
    name_singular?: true
    name_plural?: true
    name_short?: true
    reports?: true
    report_values?: true
    actions?: true
    action_values?: true
    action_reports?: true
    checks?: true
    check_values?: true
    check_taxa?: true
    observations?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type Place_levelsCountAggregateInputType = {
    place_level_id?: true
    account_id?: true
    project_id?: true
    level?: true
    name_singular?: true
    name_plural?: true
    name_short?: true
    reports?: true
    report_values?: true
    actions?: true
    action_values?: true
    action_reports?: true
    checks?: true
    check_values?: true
    check_taxa?: true
    observations?: true
    label_replace_by_generated_column?: true
    deleted?: true
    _all?: true
  }

  export type Place_levelsAggregateArgs = {
    /**
     * Filter which Place_levels to aggregate.
     * 
    **/
    where?: Place_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Place_levels to fetch.
     * 
    **/
    orderBy?: Enumerable<Place_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Place_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Place_levels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Place_levels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Place_levels
    **/
    _count?: true | Place_levelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Place_levelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Place_levelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Place_levelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Place_levelsMaxAggregateInputType
  }

  export type GetPlace_levelsAggregateType<T extends Place_levelsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace_levels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace_levels[P]>
      : GetScalarType<T[P], AggregatePlace_levels[P]>
  }




  export type Place_levelsGroupByArgs = {
    where?: Place_levelsWhereInput
    orderBy?: Enumerable<Place_levelsOrderByWithAggregationInput>
    by: Array<Place_levelsScalarFieldEnum>
    having?: Place_levelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Place_levelsCountAggregateInputType | true
    _avg?: Place_levelsAvgAggregateInputType
    _sum?: Place_levelsSumAggregateInputType
    _min?: Place_levelsMinAggregateInputType
    _max?: Place_levelsMaxAggregateInputType
  }


  export type Place_levelsGroupByOutputType = {
    place_level_id: string
    account_id: string | null
    project_id: string | null
    level: number | null
    name_singular: string | null
    name_plural: string | null
    name_short: string | null
    reports: boolean | null
    report_values: boolean | null
    actions: boolean | null
    action_values: boolean | null
    action_reports: boolean | null
    checks: boolean | null
    check_values: boolean | null
    check_taxa: boolean | null
    observations: boolean | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
    _count: Place_levelsCountAggregateOutputType | null
    _avg: Place_levelsAvgAggregateOutputType | null
    _sum: Place_levelsSumAggregateOutputType | null
    _min: Place_levelsMinAggregateOutputType | null
    _max: Place_levelsMaxAggregateOutputType | null
  }

  type GetPlace_levelsGroupByPayload<T extends Place_levelsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Place_levelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Place_levelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Place_levelsGroupByOutputType[P]>
            : GetScalarType<T[P], Place_levelsGroupByOutputType[P]>
        }
      >
    >


  export type Place_levelsSelect = {
    place_level_id?: boolean
    account_id?: boolean
    project_id?: boolean
    level?: boolean
    name_singular?: boolean
    name_plural?: boolean
    name_short?: boolean
    reports?: boolean
    report_values?: boolean
    actions?: boolean
    action_values?: boolean
    action_reports?: boolean
    checks?: boolean
    check_values?: boolean
    check_taxa?: boolean
    observations?: boolean
    label_replace_by_generated_column?: boolean
    deleted?: boolean
    accounts?: boolean | Place_levels$accountsArgs
    projects?: boolean | Place_levels$projectsArgs
  }


  export type Place_levelsInclude = {
    accounts?: boolean | Place_levels$accountsArgs
    projects?: boolean | Place_levels$projectsArgs
  } 

  export type Place_levelsGetPayload<S extends boolean | null | undefined | Place_levelsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Place_levels :
    S extends undefined ? never :
    S extends { include: any } & (Place_levelsArgs | Place_levelsFindManyArgs)
    ? Place_levels  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? AccountsGetPayload<S['include'][P]> | null :
        P extends 'projects' ? ProjectsGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Place_levelsArgs | Place_levelsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? AccountsGetPayload<S['select'][P]> | null :
        P extends 'projects' ? ProjectsGetPayload<S['select'][P]> | null :  P extends keyof Place_levels ? Place_levels[P] : never
  } 
      : Place_levels


  type Place_levelsCountArgs = Merge<
    Omit<Place_levelsFindManyArgs, 'select' | 'include'> & {
      select?: Place_levelsCountAggregateInputType | true
    }
  >

  export interface Place_levelsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Place_levels that matches the filter.
     * @param {Place_levelsFindUniqueArgs} args - Arguments to find a Place_levels
     * @example
     * // Get one Place_levels
     * const place_levels = await prisma.place_levels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Place_levelsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Place_levelsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Place_levels'> extends True ? Prisma__Place_levelsClient<Place_levelsGetPayload<T>> : Prisma__Place_levelsClient<Place_levelsGetPayload<T> | null, null>

    /**
     * Find one Place_levels that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Place_levelsFindUniqueOrThrowArgs} args - Arguments to find a Place_levels
     * @example
     * // Get one Place_levels
     * const place_levels = await prisma.place_levels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Place_levelsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Place_levelsFindUniqueOrThrowArgs>
    ): Prisma__Place_levelsClient<Place_levelsGetPayload<T>>

    /**
     * Find the first Place_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_levelsFindFirstArgs} args - Arguments to find a Place_levels
     * @example
     * // Get one Place_levels
     * const place_levels = await prisma.place_levels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Place_levelsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Place_levelsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Place_levels'> extends True ? Prisma__Place_levelsClient<Place_levelsGetPayload<T>> : Prisma__Place_levelsClient<Place_levelsGetPayload<T> | null, null>

    /**
     * Find the first Place_levels that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_levelsFindFirstOrThrowArgs} args - Arguments to find a Place_levels
     * @example
     * // Get one Place_levels
     * const place_levels = await prisma.place_levels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Place_levelsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Place_levelsFindFirstOrThrowArgs>
    ): Prisma__Place_levelsClient<Place_levelsGetPayload<T>>

    /**
     * Find zero or more Place_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_levelsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Place_levels
     * const place_levels = await prisma.place_levels.findMany()
     * 
     * // Get first 10 Place_levels
     * const place_levels = await prisma.place_levels.findMany({ take: 10 })
     * 
     * // Only select the `place_level_id`
     * const place_levelsWithPlace_level_idOnly = await prisma.place_levels.findMany({ select: { place_level_id: true } })
     * 
    **/
    findMany<T extends Place_levelsFindManyArgs>(
      args?: SelectSubset<T, Place_levelsFindManyArgs>
    ): PrismaPromise<Array<Place_levelsGetPayload<T>>>

    /**
     * Create a Place_levels.
     * @param {Place_levelsCreateArgs} args - Arguments to create a Place_levels.
     * @example
     * // Create one Place_levels
     * const Place_levels = await prisma.place_levels.create({
     *   data: {
     *     // ... data to create a Place_levels
     *   }
     * })
     * 
    **/
    create<T extends Place_levelsCreateArgs>(
      args: SelectSubset<T, Place_levelsCreateArgs>
    ): Prisma__Place_levelsClient<Place_levelsGetPayload<T>>

    /**
     * Create many Place_levels.
     *     @param {Place_levelsCreateManyArgs} args - Arguments to create many Place_levels.
     *     @example
     *     // Create many Place_levels
     *     const place_levels = await prisma.place_levels.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Place_levelsCreateManyArgs>(
      args?: SelectSubset<T, Place_levelsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Place_levels.
     * @param {Place_levelsDeleteArgs} args - Arguments to delete one Place_levels.
     * @example
     * // Delete one Place_levels
     * const Place_levels = await prisma.place_levels.delete({
     *   where: {
     *     // ... filter to delete one Place_levels
     *   }
     * })
     * 
    **/
    delete<T extends Place_levelsDeleteArgs>(
      args: SelectSubset<T, Place_levelsDeleteArgs>
    ): Prisma__Place_levelsClient<Place_levelsGetPayload<T>>

    /**
     * Update one Place_levels.
     * @param {Place_levelsUpdateArgs} args - Arguments to update one Place_levels.
     * @example
     * // Update one Place_levels
     * const place_levels = await prisma.place_levels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Place_levelsUpdateArgs>(
      args: SelectSubset<T, Place_levelsUpdateArgs>
    ): Prisma__Place_levelsClient<Place_levelsGetPayload<T>>

    /**
     * Delete zero or more Place_levels.
     * @param {Place_levelsDeleteManyArgs} args - Arguments to filter Place_levels to delete.
     * @example
     * // Delete a few Place_levels
     * const { count } = await prisma.place_levels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Place_levelsDeleteManyArgs>(
      args?: SelectSubset<T, Place_levelsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Place_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_levelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Place_levels
     * const place_levels = await prisma.place_levels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Place_levelsUpdateManyArgs>(
      args: SelectSubset<T, Place_levelsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Place_levels.
     * @param {Place_levelsUpsertArgs} args - Arguments to update or create a Place_levels.
     * @example
     * // Update or create a Place_levels
     * const place_levels = await prisma.place_levels.upsert({
     *   create: {
     *     // ... data to create a Place_levels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place_levels we want to update
     *   }
     * })
    **/
    upsert<T extends Place_levelsUpsertArgs>(
      args: SelectSubset<T, Place_levelsUpsertArgs>
    ): Prisma__Place_levelsClient<Place_levelsGetPayload<T>>

    /**
     * Count the number of Place_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_levelsCountArgs} args - Arguments to filter Place_levels to count.
     * @example
     * // Count the number of Place_levels
     * const count = await prisma.place_levels.count({
     *   where: {
     *     // ... the filter for the Place_levels we want to count
     *   }
     * })
    **/
    count<T extends Place_levelsCountArgs>(
      args?: Subset<T, Place_levelsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Place_levelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_levelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Place_levelsAggregateArgs>(args: Subset<T, Place_levelsAggregateArgs>): PrismaPromise<GetPlace_levelsAggregateType<T>>

    /**
     * Group by Place_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_levelsGroupByArgs} args - Group by arguments.
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
      T extends Place_levelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Place_levelsGroupByArgs['orderBy'] }
        : { orderBy?: Place_levelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Place_levelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlace_levelsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Place_levels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Place_levelsClient<T, Null = never> implements PrismaPromise<T> {
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

    accounts<T extends Place_levels$accountsArgs= {}>(args?: Subset<T, Place_levels$accountsArgs>): Prisma__AccountsClient<AccountsGetPayload<T> | Null>;

    projects<T extends Place_levels$projectsArgs= {}>(args?: Subset<T, Place_levels$projectsArgs>): Prisma__ProjectsClient<ProjectsGetPayload<T> | Null>;

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
   * Place_levels base type for findUnique actions
   */
  export type Place_levelsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * Filter, which Place_levels to fetch.
     * 
    **/
    where: Place_levelsWhereUniqueInput
  }

  /**
   * Place_levels findUnique
   */
  export interface Place_levelsFindUniqueArgs extends Place_levelsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Place_levels findUniqueOrThrow
   */
  export type Place_levelsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * Filter, which Place_levels to fetch.
     * 
    **/
    where: Place_levelsWhereUniqueInput
  }


  /**
   * Place_levels base type for findFirst actions
   */
  export type Place_levelsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * Filter, which Place_levels to fetch.
     * 
    **/
    where?: Place_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Place_levels to fetch.
     * 
    **/
    orderBy?: Enumerable<Place_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Place_levels.
     * 
    **/
    cursor?: Place_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Place_levels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Place_levels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Place_levels.
     * 
    **/
    distinct?: Enumerable<Place_levelsScalarFieldEnum>
  }

  /**
   * Place_levels findFirst
   */
  export interface Place_levelsFindFirstArgs extends Place_levelsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Place_levels findFirstOrThrow
   */
  export type Place_levelsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * Filter, which Place_levels to fetch.
     * 
    **/
    where?: Place_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Place_levels to fetch.
     * 
    **/
    orderBy?: Enumerable<Place_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Place_levels.
     * 
    **/
    cursor?: Place_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Place_levels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Place_levels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Place_levels.
     * 
    **/
    distinct?: Enumerable<Place_levelsScalarFieldEnum>
  }


  /**
   * Place_levels findMany
   */
  export type Place_levelsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * Filter, which Place_levels to fetch.
     * 
    **/
    where?: Place_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Place_levels to fetch.
     * 
    **/
    orderBy?: Enumerable<Place_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Place_levels.
     * 
    **/
    cursor?: Place_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Place_levels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Place_levels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Place_levelsScalarFieldEnum>
  }


  /**
   * Place_levels create
   */
  export type Place_levelsCreateArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * The data needed to create a Place_levels.
     * 
    **/
    data: XOR<Place_levelsCreateInput, Place_levelsUncheckedCreateInput>
  }


  /**
   * Place_levels createMany
   */
  export type Place_levelsCreateManyArgs = {
    /**
     * The data used to create many Place_levels.
     * 
    **/
    data: Enumerable<Place_levelsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Place_levels update
   */
  export type Place_levelsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * The data needed to update a Place_levels.
     * 
    **/
    data: XOR<Place_levelsUpdateInput, Place_levelsUncheckedUpdateInput>
    /**
     * Choose, which Place_levels to update.
     * 
    **/
    where: Place_levelsWhereUniqueInput
  }


  /**
   * Place_levels updateMany
   */
  export type Place_levelsUpdateManyArgs = {
    /**
     * The data used to update Place_levels.
     * 
    **/
    data: XOR<Place_levelsUpdateManyMutationInput, Place_levelsUncheckedUpdateManyInput>
    /**
     * Filter which Place_levels to update
     * 
    **/
    where?: Place_levelsWhereInput
  }


  /**
   * Place_levels upsert
   */
  export type Place_levelsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * The filter to search for the Place_levels to update in case it exists.
     * 
    **/
    where: Place_levelsWhereUniqueInput
    /**
     * In case the Place_levels found by the `where` argument doesn't exist, create a new Place_levels with this data.
     * 
    **/
    create: XOR<Place_levelsCreateInput, Place_levelsUncheckedCreateInput>
    /**
     * In case the Place_levels was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Place_levelsUpdateInput, Place_levelsUncheckedUpdateInput>
  }


  /**
   * Place_levels delete
   */
  export type Place_levelsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    /**
     * Filter which Place_levels to delete.
     * 
    **/
    where: Place_levelsWhereUniqueInput
  }


  /**
   * Place_levels deleteMany
   */
  export type Place_levelsDeleteManyArgs = {
    /**
     * Filter which Place_levels to delete
     * 
    **/
    where?: Place_levelsWhereInput
  }


  /**
   * Place_levels.accounts
   */
  export type Place_levels$accountsArgs = {
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
   * Place_levels.projects
   */
  export type Place_levels$projectsArgs = {
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
  }


  /**
   * Place_levels without action
   */
  export type Place_levelsArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
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
    place_levels?: boolean | Projects$place_levelsArgs
    accounts?: boolean | Projects$accountsArgs
    _count?: boolean | ProjectsCountOutputTypeArgs
  }


  export type ProjectsInclude = {
    place_levels?: boolean | Projects$place_levelsArgs
    accounts?: boolean | Projects$accountsArgs
    _count?: boolean | ProjectsCountOutputTypeArgs
  } 

  export type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Projects :
    S extends undefined ? never :
    S extends { include: any } & (ProjectsArgs | ProjectsFindManyArgs)
    ? Projects  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'place_levels' ? Array < Place_levelsGetPayload<S['include'][P]>>  :
        P extends 'accounts' ? AccountsGetPayload<S['include'][P]> | null :
        P extends '_count' ? ProjectsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProjectsArgs | ProjectsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'place_levels' ? Array < Place_levelsGetPayload<S['select'][P]>>  :
        P extends 'accounts' ? AccountsGetPayload<S['select'][P]> | null :
        P extends '_count' ? ProjectsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Projects ? Projects[P] : never
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

    place_levels<T extends Projects$place_levelsArgs= {}>(args?: Subset<T, Projects$place_levelsArgs>): PrismaPromise<Array<Place_levelsGetPayload<T>>| Null>;

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
   * Projects.place_levels
   */
  export type Projects$place_levelsArgs = {
    /**
     * Select specific fields to fetch from the Place_levels
     * 
    **/
    select?: Place_levelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Place_levelsInclude | null
    where?: Place_levelsWhereInput
    orderBy?: Enumerable<Place_levelsOrderByWithRelationInput>
    cursor?: Place_levelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Place_levelsScalarFieldEnum>
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
   * Model Ui_options
   */


  export type AggregateUi_options = {
    _count: Ui_optionsCountAggregateOutputType | null
    _min: Ui_optionsMinAggregateOutputType | null
    _max: Ui_optionsMaxAggregateOutputType | null
  }

  export type Ui_optionsMinAggregateOutputType = {
    user_id: string | null
    account_id: string | null
    designing: boolean | null
    breadcrumbs_overflowing: boolean | null
    navs_overflowing: boolean | null
    show_map: boolean | null
    tile_layer_sorter: string | null
    vector_layer_sorter: string | null
    editing_place_geometry: string | null
    editing_check_geometry: string | null
    editing_action_geometry: string | null
    label: string | null
  }

  export type Ui_optionsMaxAggregateOutputType = {
    user_id: string | null
    account_id: string | null
    designing: boolean | null
    breadcrumbs_overflowing: boolean | null
    navs_overflowing: boolean | null
    show_map: boolean | null
    tile_layer_sorter: string | null
    vector_layer_sorter: string | null
    editing_place_geometry: string | null
    editing_check_geometry: string | null
    editing_action_geometry: string | null
    label: string | null
  }

  export type Ui_optionsCountAggregateOutputType = {
    user_id: number
    account_id: number
    designing: number
    breadcrumbs_overflowing: number
    navs_overflowing: number
    tabs: number
    show_map: number
    map_bounds: number
    local_map_show: number
    tile_layer_sorter: number
    vector_layer_sorter: number
    editing_place_geometry: number
    editing_check_geometry: number
    editing_action_geometry: number
    label: number
    _all: number
  }


  export type Ui_optionsMinAggregateInputType = {
    user_id?: true
    account_id?: true
    designing?: true
    breadcrumbs_overflowing?: true
    navs_overflowing?: true
    show_map?: true
    tile_layer_sorter?: true
    vector_layer_sorter?: true
    editing_place_geometry?: true
    editing_check_geometry?: true
    editing_action_geometry?: true
    label?: true
  }

  export type Ui_optionsMaxAggregateInputType = {
    user_id?: true
    account_id?: true
    designing?: true
    breadcrumbs_overflowing?: true
    navs_overflowing?: true
    show_map?: true
    tile_layer_sorter?: true
    vector_layer_sorter?: true
    editing_place_geometry?: true
    editing_check_geometry?: true
    editing_action_geometry?: true
    label?: true
  }

  export type Ui_optionsCountAggregateInputType = {
    user_id?: true
    account_id?: true
    designing?: true
    breadcrumbs_overflowing?: true
    navs_overflowing?: true
    tabs?: true
    show_map?: true
    map_bounds?: true
    local_map_show?: true
    tile_layer_sorter?: true
    vector_layer_sorter?: true
    editing_place_geometry?: true
    editing_check_geometry?: true
    editing_action_geometry?: true
    label?: true
    _all?: true
  }

  export type Ui_optionsAggregateArgs = {
    /**
     * Filter which Ui_options to aggregate.
     * 
    **/
    where?: Ui_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ui_options to fetch.
     * 
    **/
    orderBy?: Enumerable<Ui_optionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Ui_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ui_options from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ui_options.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ui_options
    **/
    _count?: true | Ui_optionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ui_optionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ui_optionsMaxAggregateInputType
  }

  export type GetUi_optionsAggregateType<T extends Ui_optionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUi_options]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUi_options[P]>
      : GetScalarType<T[P], AggregateUi_options[P]>
  }




  export type Ui_optionsGroupByArgs = {
    where?: Ui_optionsWhereInput
    orderBy?: Enumerable<Ui_optionsOrderByWithAggregationInput>
    by: Array<Ui_optionsScalarFieldEnum>
    having?: Ui_optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ui_optionsCountAggregateInputType | true
    _min?: Ui_optionsMinAggregateInputType
    _max?: Ui_optionsMaxAggregateInputType
  }


  export type Ui_optionsGroupByOutputType = {
    user_id: string
    account_id: string | null
    designing: boolean | null
    breadcrumbs_overflowing: boolean | null
    navs_overflowing: boolean | null
    tabs: JsonValue | null
    show_map: boolean | null
    map_bounds: JsonValue | null
    local_map_show: JsonValue | null
    tile_layer_sorter: string | null
    vector_layer_sorter: string | null
    editing_place_geometry: string | null
    editing_check_geometry: string | null
    editing_action_geometry: string | null
    label: string | null
    _count: Ui_optionsCountAggregateOutputType | null
    _min: Ui_optionsMinAggregateOutputType | null
    _max: Ui_optionsMaxAggregateOutputType | null
  }

  type GetUi_optionsGroupByPayload<T extends Ui_optionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ui_optionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ui_optionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ui_optionsGroupByOutputType[P]>
            : GetScalarType<T[P], Ui_optionsGroupByOutputType[P]>
        }
      >
    >


  export type Ui_optionsSelect = {
    user_id?: boolean
    account_id?: boolean
    designing?: boolean
    breadcrumbs_overflowing?: boolean
    navs_overflowing?: boolean
    tabs?: boolean
    show_map?: boolean
    map_bounds?: boolean
    local_map_show?: boolean
    tile_layer_sorter?: boolean
    vector_layer_sorter?: boolean
    editing_place_geometry?: boolean
    editing_check_geometry?: boolean
    editing_action_geometry?: boolean
    label?: boolean
    accounts?: boolean | Ui_options$accountsArgs
    users?: boolean | UsersArgs
  }


  export type Ui_optionsInclude = {
    accounts?: boolean | Ui_options$accountsArgs
    users?: boolean | UsersArgs
  } 

  export type Ui_optionsGetPayload<S extends boolean | null | undefined | Ui_optionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Ui_options :
    S extends undefined ? never :
    S extends { include: any } & (Ui_optionsArgs | Ui_optionsFindManyArgs)
    ? Ui_options  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? AccountsGetPayload<S['include'][P]> | null :
        P extends 'users' ? UsersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Ui_optionsArgs | Ui_optionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? AccountsGetPayload<S['select'][P]> | null :
        P extends 'users' ? UsersGetPayload<S['select'][P]> :  P extends keyof Ui_options ? Ui_options[P] : never
  } 
      : Ui_options


  type Ui_optionsCountArgs = Merge<
    Omit<Ui_optionsFindManyArgs, 'select' | 'include'> & {
      select?: Ui_optionsCountAggregateInputType | true
    }
  >

  export interface Ui_optionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Ui_options that matches the filter.
     * @param {Ui_optionsFindUniqueArgs} args - Arguments to find a Ui_options
     * @example
     * // Get one Ui_options
     * const ui_options = await prisma.ui_options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Ui_optionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Ui_optionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Ui_options'> extends True ? Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>> : Prisma__Ui_optionsClient<Ui_optionsGetPayload<T> | null, null>

    /**
     * Find one Ui_options that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Ui_optionsFindUniqueOrThrowArgs} args - Arguments to find a Ui_options
     * @example
     * // Get one Ui_options
     * const ui_options = await prisma.ui_options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Ui_optionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Ui_optionsFindUniqueOrThrowArgs>
    ): Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>>

    /**
     * Find the first Ui_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ui_optionsFindFirstArgs} args - Arguments to find a Ui_options
     * @example
     * // Get one Ui_options
     * const ui_options = await prisma.ui_options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Ui_optionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Ui_optionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Ui_options'> extends True ? Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>> : Prisma__Ui_optionsClient<Ui_optionsGetPayload<T> | null, null>

    /**
     * Find the first Ui_options that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ui_optionsFindFirstOrThrowArgs} args - Arguments to find a Ui_options
     * @example
     * // Get one Ui_options
     * const ui_options = await prisma.ui_options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Ui_optionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Ui_optionsFindFirstOrThrowArgs>
    ): Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>>

    /**
     * Find zero or more Ui_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ui_optionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ui_options
     * const ui_options = await prisma.ui_options.findMany()
     * 
     * // Get first 10 Ui_options
     * const ui_options = await prisma.ui_options.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const ui_optionsWithUser_idOnly = await prisma.ui_options.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends Ui_optionsFindManyArgs>(
      args?: SelectSubset<T, Ui_optionsFindManyArgs>
    ): PrismaPromise<Array<Ui_optionsGetPayload<T>>>

    /**
     * Create a Ui_options.
     * @param {Ui_optionsCreateArgs} args - Arguments to create a Ui_options.
     * @example
     * // Create one Ui_options
     * const Ui_options = await prisma.ui_options.create({
     *   data: {
     *     // ... data to create a Ui_options
     *   }
     * })
     * 
    **/
    create<T extends Ui_optionsCreateArgs>(
      args: SelectSubset<T, Ui_optionsCreateArgs>
    ): Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>>

    /**
     * Create many Ui_options.
     *     @param {Ui_optionsCreateManyArgs} args - Arguments to create many Ui_options.
     *     @example
     *     // Create many Ui_options
     *     const ui_options = await prisma.ui_options.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Ui_optionsCreateManyArgs>(
      args?: SelectSubset<T, Ui_optionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ui_options.
     * @param {Ui_optionsDeleteArgs} args - Arguments to delete one Ui_options.
     * @example
     * // Delete one Ui_options
     * const Ui_options = await prisma.ui_options.delete({
     *   where: {
     *     // ... filter to delete one Ui_options
     *   }
     * })
     * 
    **/
    delete<T extends Ui_optionsDeleteArgs>(
      args: SelectSubset<T, Ui_optionsDeleteArgs>
    ): Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>>

    /**
     * Update one Ui_options.
     * @param {Ui_optionsUpdateArgs} args - Arguments to update one Ui_options.
     * @example
     * // Update one Ui_options
     * const ui_options = await prisma.ui_options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Ui_optionsUpdateArgs>(
      args: SelectSubset<T, Ui_optionsUpdateArgs>
    ): Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>>

    /**
     * Delete zero or more Ui_options.
     * @param {Ui_optionsDeleteManyArgs} args - Arguments to filter Ui_options to delete.
     * @example
     * // Delete a few Ui_options
     * const { count } = await prisma.ui_options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Ui_optionsDeleteManyArgs>(
      args?: SelectSubset<T, Ui_optionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ui_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ui_optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ui_options
     * const ui_options = await prisma.ui_options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Ui_optionsUpdateManyArgs>(
      args: SelectSubset<T, Ui_optionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ui_options.
     * @param {Ui_optionsUpsertArgs} args - Arguments to update or create a Ui_options.
     * @example
     * // Update or create a Ui_options
     * const ui_options = await prisma.ui_options.upsert({
     *   create: {
     *     // ... data to create a Ui_options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ui_options we want to update
     *   }
     * })
    **/
    upsert<T extends Ui_optionsUpsertArgs>(
      args: SelectSubset<T, Ui_optionsUpsertArgs>
    ): Prisma__Ui_optionsClient<Ui_optionsGetPayload<T>>

    /**
     * Count the number of Ui_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ui_optionsCountArgs} args - Arguments to filter Ui_options to count.
     * @example
     * // Count the number of Ui_options
     * const count = await prisma.ui_options.count({
     *   where: {
     *     // ... the filter for the Ui_options we want to count
     *   }
     * })
    **/
    count<T extends Ui_optionsCountArgs>(
      args?: Subset<T, Ui_optionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ui_optionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ui_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ui_optionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ui_optionsAggregateArgs>(args: Subset<T, Ui_optionsAggregateArgs>): PrismaPromise<GetUi_optionsAggregateType<T>>

    /**
     * Group by Ui_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ui_optionsGroupByArgs} args - Group by arguments.
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
      T extends Ui_optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ui_optionsGroupByArgs['orderBy'] }
        : { orderBy?: Ui_optionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Ui_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUi_optionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Ui_options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Ui_optionsClient<T, Null = never> implements PrismaPromise<T> {
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

    accounts<T extends Ui_options$accountsArgs= {}>(args?: Subset<T, Ui_options$accountsArgs>): Prisma__AccountsClient<AccountsGetPayload<T> | Null>;

    users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

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
   * Ui_options base type for findUnique actions
   */
  export type Ui_optionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * Filter, which Ui_options to fetch.
     * 
    **/
    where: Ui_optionsWhereUniqueInput
  }

  /**
   * Ui_options findUnique
   */
  export interface Ui_optionsFindUniqueArgs extends Ui_optionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ui_options findUniqueOrThrow
   */
  export type Ui_optionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * Filter, which Ui_options to fetch.
     * 
    **/
    where: Ui_optionsWhereUniqueInput
  }


  /**
   * Ui_options base type for findFirst actions
   */
  export type Ui_optionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * Filter, which Ui_options to fetch.
     * 
    **/
    where?: Ui_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ui_options to fetch.
     * 
    **/
    orderBy?: Enumerable<Ui_optionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ui_options.
     * 
    **/
    cursor?: Ui_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ui_options from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ui_options.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ui_options.
     * 
    **/
    distinct?: Enumerable<Ui_optionsScalarFieldEnum>
  }

  /**
   * Ui_options findFirst
   */
  export interface Ui_optionsFindFirstArgs extends Ui_optionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ui_options findFirstOrThrow
   */
  export type Ui_optionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * Filter, which Ui_options to fetch.
     * 
    **/
    where?: Ui_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ui_options to fetch.
     * 
    **/
    orderBy?: Enumerable<Ui_optionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ui_options.
     * 
    **/
    cursor?: Ui_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ui_options from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ui_options.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ui_options.
     * 
    **/
    distinct?: Enumerable<Ui_optionsScalarFieldEnum>
  }


  /**
   * Ui_options findMany
   */
  export type Ui_optionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * Filter, which Ui_options to fetch.
     * 
    **/
    where?: Ui_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ui_options to fetch.
     * 
    **/
    orderBy?: Enumerable<Ui_optionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ui_options.
     * 
    **/
    cursor?: Ui_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ui_options from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ui_options.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ui_optionsScalarFieldEnum>
  }


  /**
   * Ui_options create
   */
  export type Ui_optionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * The data needed to create a Ui_options.
     * 
    **/
    data: XOR<Ui_optionsCreateInput, Ui_optionsUncheckedCreateInput>
  }


  /**
   * Ui_options createMany
   */
  export type Ui_optionsCreateManyArgs = {
    /**
     * The data used to create many Ui_options.
     * 
    **/
    data: Enumerable<Ui_optionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Ui_options update
   */
  export type Ui_optionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * The data needed to update a Ui_options.
     * 
    **/
    data: XOR<Ui_optionsUpdateInput, Ui_optionsUncheckedUpdateInput>
    /**
     * Choose, which Ui_options to update.
     * 
    **/
    where: Ui_optionsWhereUniqueInput
  }


  /**
   * Ui_options updateMany
   */
  export type Ui_optionsUpdateManyArgs = {
    /**
     * The data used to update Ui_options.
     * 
    **/
    data: XOR<Ui_optionsUpdateManyMutationInput, Ui_optionsUncheckedUpdateManyInput>
    /**
     * Filter which Ui_options to update
     * 
    **/
    where?: Ui_optionsWhereInput
  }


  /**
   * Ui_options upsert
   */
  export type Ui_optionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * The filter to search for the Ui_options to update in case it exists.
     * 
    **/
    where: Ui_optionsWhereUniqueInput
    /**
     * In case the Ui_options found by the `where` argument doesn't exist, create a new Ui_options with this data.
     * 
    **/
    create: XOR<Ui_optionsCreateInput, Ui_optionsUncheckedCreateInput>
    /**
     * In case the Ui_options was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Ui_optionsUpdateInput, Ui_optionsUncheckedUpdateInput>
  }


  /**
   * Ui_options delete
   */
  export type Ui_optionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    /**
     * Filter which Ui_options to delete.
     * 
    **/
    where: Ui_optionsWhereUniqueInput
  }


  /**
   * Ui_options deleteMany
   */
  export type Ui_optionsDeleteManyArgs = {
    /**
     * Filter which Ui_options to delete
     * 
    **/
    where?: Ui_optionsWhereInput
  }


  /**
   * Ui_options.accounts
   */
  export type Ui_options$accountsArgs = {
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
   * Ui_options without action
   */
  export type Ui_optionsArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
  }



  /**
   * Model User_messages
   */


  export type AggregateUser_messages = {
    _count: User_messagesCountAggregateOutputType | null
    _min: User_messagesMinAggregateOutputType | null
    _max: User_messagesMaxAggregateOutputType | null
  }

  export type User_messagesMinAggregateOutputType = {
    user_message_id: string | null
    account_id: string | null
    user_id: string | null
    message_id: string | null
    label_replace_by_generated_column: string | null
    read: boolean | null
  }

  export type User_messagesMaxAggregateOutputType = {
    user_message_id: string | null
    account_id: string | null
    user_id: string | null
    message_id: string | null
    label_replace_by_generated_column: string | null
    read: boolean | null
  }

  export type User_messagesCountAggregateOutputType = {
    user_message_id: number
    account_id: number
    user_id: number
    message_id: number
    label_replace_by_generated_column: number
    read: number
    _all: number
  }


  export type User_messagesMinAggregateInputType = {
    user_message_id?: true
    account_id?: true
    user_id?: true
    message_id?: true
    label_replace_by_generated_column?: true
    read?: true
  }

  export type User_messagesMaxAggregateInputType = {
    user_message_id?: true
    account_id?: true
    user_id?: true
    message_id?: true
    label_replace_by_generated_column?: true
    read?: true
  }

  export type User_messagesCountAggregateInputType = {
    user_message_id?: true
    account_id?: true
    user_id?: true
    message_id?: true
    label_replace_by_generated_column?: true
    read?: true
    _all?: true
  }

  export type User_messagesAggregateArgs = {
    /**
     * Filter which User_messages to aggregate.
     * 
    **/
    where?: User_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_messages to fetch.
     * 
    **/
    orderBy?: Enumerable<User_messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: User_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_messages
    **/
    _count?: true | User_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_messagesMaxAggregateInputType
  }

  export type GetUser_messagesAggregateType<T extends User_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_messages[P]>
      : GetScalarType<T[P], AggregateUser_messages[P]>
  }




  export type User_messagesGroupByArgs = {
    where?: User_messagesWhereInput
    orderBy?: Enumerable<User_messagesOrderByWithAggregationInput>
    by: Array<User_messagesScalarFieldEnum>
    having?: User_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_messagesCountAggregateInputType | true
    _min?: User_messagesMinAggregateInputType
    _max?: User_messagesMaxAggregateInputType
  }


  export type User_messagesGroupByOutputType = {
    user_message_id: string
    account_id: string | null
    user_id: string | null
    message_id: string | null
    label_replace_by_generated_column: string | null
    read: boolean | null
    _count: User_messagesCountAggregateOutputType | null
    _min: User_messagesMinAggregateOutputType | null
    _max: User_messagesMaxAggregateOutputType | null
  }

  type GetUser_messagesGroupByPayload<T extends User_messagesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], User_messagesGroupByOutputType[P]>
        }
      >
    >


  export type User_messagesSelect = {
    user_message_id?: boolean
    account_id?: boolean
    user_id?: boolean
    message_id?: boolean
    label_replace_by_generated_column?: boolean
    read?: boolean
    accounts?: boolean | User_messages$accountsArgs
    messages?: boolean | User_messages$messagesArgs
    users?: boolean | User_messages$usersArgs
  }


  export type User_messagesInclude = {
    accounts?: boolean | User_messages$accountsArgs
    messages?: boolean | User_messages$messagesArgs
    users?: boolean | User_messages$usersArgs
  } 

  export type User_messagesGetPayload<S extends boolean | null | undefined | User_messagesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User_messages :
    S extends undefined ? never :
    S extends { include: any } & (User_messagesArgs | User_messagesFindManyArgs)
    ? User_messages  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? AccountsGetPayload<S['include'][P]> | null :
        P extends 'messages' ? MessagesGetPayload<S['include'][P]> | null :
        P extends 'users' ? UsersGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (User_messagesArgs | User_messagesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? AccountsGetPayload<S['select'][P]> | null :
        P extends 'messages' ? MessagesGetPayload<S['select'][P]> | null :
        P extends 'users' ? UsersGetPayload<S['select'][P]> | null :  P extends keyof User_messages ? User_messages[P] : never
  } 
      : User_messages


  type User_messagesCountArgs = Merge<
    Omit<User_messagesFindManyArgs, 'select' | 'include'> & {
      select?: User_messagesCountAggregateInputType | true
    }
  >

  export interface User_messagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User_messages that matches the filter.
     * @param {User_messagesFindUniqueArgs} args - Arguments to find a User_messages
     * @example
     * // Get one User_messages
     * const user_messages = await prisma.user_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends User_messagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, User_messagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User_messages'> extends True ? Prisma__User_messagesClient<User_messagesGetPayload<T>> : Prisma__User_messagesClient<User_messagesGetPayload<T> | null, null>

    /**
     * Find one User_messages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {User_messagesFindUniqueOrThrowArgs} args - Arguments to find a User_messages
     * @example
     * // Get one User_messages
     * const user_messages = await prisma.user_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends User_messagesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, User_messagesFindUniqueOrThrowArgs>
    ): Prisma__User_messagesClient<User_messagesGetPayload<T>>

    /**
     * Find the first User_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_messagesFindFirstArgs} args - Arguments to find a User_messages
     * @example
     * // Get one User_messages
     * const user_messages = await prisma.user_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends User_messagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, User_messagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User_messages'> extends True ? Prisma__User_messagesClient<User_messagesGetPayload<T>> : Prisma__User_messagesClient<User_messagesGetPayload<T> | null, null>

    /**
     * Find the first User_messages that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_messagesFindFirstOrThrowArgs} args - Arguments to find a User_messages
     * @example
     * // Get one User_messages
     * const user_messages = await prisma.user_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends User_messagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, User_messagesFindFirstOrThrowArgs>
    ): Prisma__User_messagesClient<User_messagesGetPayload<T>>

    /**
     * Find zero or more User_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_messagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_messages
     * const user_messages = await prisma.user_messages.findMany()
     * 
     * // Get first 10 User_messages
     * const user_messages = await prisma.user_messages.findMany({ take: 10 })
     * 
     * // Only select the `user_message_id`
     * const user_messagesWithUser_message_idOnly = await prisma.user_messages.findMany({ select: { user_message_id: true } })
     * 
    **/
    findMany<T extends User_messagesFindManyArgs>(
      args?: SelectSubset<T, User_messagesFindManyArgs>
    ): PrismaPromise<Array<User_messagesGetPayload<T>>>

    /**
     * Create a User_messages.
     * @param {User_messagesCreateArgs} args - Arguments to create a User_messages.
     * @example
     * // Create one User_messages
     * const User_messages = await prisma.user_messages.create({
     *   data: {
     *     // ... data to create a User_messages
     *   }
     * })
     * 
    **/
    create<T extends User_messagesCreateArgs>(
      args: SelectSubset<T, User_messagesCreateArgs>
    ): Prisma__User_messagesClient<User_messagesGetPayload<T>>

    /**
     * Create many User_messages.
     *     @param {User_messagesCreateManyArgs} args - Arguments to create many User_messages.
     *     @example
     *     // Create many User_messages
     *     const user_messages = await prisma.user_messages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends User_messagesCreateManyArgs>(
      args?: SelectSubset<T, User_messagesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_messages.
     * @param {User_messagesDeleteArgs} args - Arguments to delete one User_messages.
     * @example
     * // Delete one User_messages
     * const User_messages = await prisma.user_messages.delete({
     *   where: {
     *     // ... filter to delete one User_messages
     *   }
     * })
     * 
    **/
    delete<T extends User_messagesDeleteArgs>(
      args: SelectSubset<T, User_messagesDeleteArgs>
    ): Prisma__User_messagesClient<User_messagesGetPayload<T>>

    /**
     * Update one User_messages.
     * @param {User_messagesUpdateArgs} args - Arguments to update one User_messages.
     * @example
     * // Update one User_messages
     * const user_messages = await prisma.user_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends User_messagesUpdateArgs>(
      args: SelectSubset<T, User_messagesUpdateArgs>
    ): Prisma__User_messagesClient<User_messagesGetPayload<T>>

    /**
     * Delete zero or more User_messages.
     * @param {User_messagesDeleteManyArgs} args - Arguments to filter User_messages to delete.
     * @example
     * // Delete a few User_messages
     * const { count } = await prisma.user_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends User_messagesDeleteManyArgs>(
      args?: SelectSubset<T, User_messagesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_messages
     * const user_messages = await prisma.user_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends User_messagesUpdateManyArgs>(
      args: SelectSubset<T, User_messagesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_messages.
     * @param {User_messagesUpsertArgs} args - Arguments to update or create a User_messages.
     * @example
     * // Update or create a User_messages
     * const user_messages = await prisma.user_messages.upsert({
     *   create: {
     *     // ... data to create a User_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_messages we want to update
     *   }
     * })
    **/
    upsert<T extends User_messagesUpsertArgs>(
      args: SelectSubset<T, User_messagesUpsertArgs>
    ): Prisma__User_messagesClient<User_messagesGetPayload<T>>

    /**
     * Count the number of User_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_messagesCountArgs} args - Arguments to filter User_messages to count.
     * @example
     * // Count the number of User_messages
     * const count = await prisma.user_messages.count({
     *   where: {
     *     // ... the filter for the User_messages we want to count
     *   }
     * })
    **/
    count<T extends User_messagesCountArgs>(
      args?: Subset<T, User_messagesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_messagesAggregateArgs>(args: Subset<T, User_messagesAggregateArgs>): PrismaPromise<GetUser_messagesAggregateType<T>>

    /**
     * Group by User_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_messagesGroupByArgs} args - Group by arguments.
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
      T extends User_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_messagesGroupByArgs['orderBy'] }
        : { orderBy?: User_messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_messagesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__User_messagesClient<T, Null = never> implements PrismaPromise<T> {
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

    accounts<T extends User_messages$accountsArgs= {}>(args?: Subset<T, User_messages$accountsArgs>): Prisma__AccountsClient<AccountsGetPayload<T> | Null>;

    messages<T extends User_messages$messagesArgs= {}>(args?: Subset<T, User_messages$messagesArgs>): Prisma__MessagesClient<MessagesGetPayload<T> | Null>;

    users<T extends User_messages$usersArgs= {}>(args?: Subset<T, User_messages$usersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

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
   * User_messages base type for findUnique actions
   */
  export type User_messagesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * Filter, which User_messages to fetch.
     * 
    **/
    where: User_messagesWhereUniqueInput
  }

  /**
   * User_messages findUnique
   */
  export interface User_messagesFindUniqueArgs extends User_messagesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User_messages findUniqueOrThrow
   */
  export type User_messagesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * Filter, which User_messages to fetch.
     * 
    **/
    where: User_messagesWhereUniqueInput
  }


  /**
   * User_messages base type for findFirst actions
   */
  export type User_messagesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * Filter, which User_messages to fetch.
     * 
    **/
    where?: User_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_messages to fetch.
     * 
    **/
    orderBy?: Enumerable<User_messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_messages.
     * 
    **/
    cursor?: User_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_messages.
     * 
    **/
    distinct?: Enumerable<User_messagesScalarFieldEnum>
  }

  /**
   * User_messages findFirst
   */
  export interface User_messagesFindFirstArgs extends User_messagesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User_messages findFirstOrThrow
   */
  export type User_messagesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * Filter, which User_messages to fetch.
     * 
    **/
    where?: User_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_messages to fetch.
     * 
    **/
    orderBy?: Enumerable<User_messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_messages.
     * 
    **/
    cursor?: User_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_messages.
     * 
    **/
    distinct?: Enumerable<User_messagesScalarFieldEnum>
  }


  /**
   * User_messages findMany
   */
  export type User_messagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * Filter, which User_messages to fetch.
     * 
    **/
    where?: User_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_messages to fetch.
     * 
    **/
    orderBy?: Enumerable<User_messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_messages.
     * 
    **/
    cursor?: User_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_messages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_messagesScalarFieldEnum>
  }


  /**
   * User_messages create
   */
  export type User_messagesCreateArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * The data needed to create a User_messages.
     * 
    **/
    data: XOR<User_messagesCreateInput, User_messagesUncheckedCreateInput>
  }


  /**
   * User_messages createMany
   */
  export type User_messagesCreateManyArgs = {
    /**
     * The data used to create many User_messages.
     * 
    **/
    data: Enumerable<User_messagesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User_messages update
   */
  export type User_messagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * The data needed to update a User_messages.
     * 
    **/
    data: XOR<User_messagesUpdateInput, User_messagesUncheckedUpdateInput>
    /**
     * Choose, which User_messages to update.
     * 
    **/
    where: User_messagesWhereUniqueInput
  }


  /**
   * User_messages updateMany
   */
  export type User_messagesUpdateManyArgs = {
    /**
     * The data used to update User_messages.
     * 
    **/
    data: XOR<User_messagesUpdateManyMutationInput, User_messagesUncheckedUpdateManyInput>
    /**
     * Filter which User_messages to update
     * 
    **/
    where?: User_messagesWhereInput
  }


  /**
   * User_messages upsert
   */
  export type User_messagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * The filter to search for the User_messages to update in case it exists.
     * 
    **/
    where: User_messagesWhereUniqueInput
    /**
     * In case the User_messages found by the `where` argument doesn't exist, create a new User_messages with this data.
     * 
    **/
    create: XOR<User_messagesCreateInput, User_messagesUncheckedCreateInput>
    /**
     * In case the User_messages was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<User_messagesUpdateInput, User_messagesUncheckedUpdateInput>
  }


  /**
   * User_messages delete
   */
  export type User_messagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    /**
     * Filter which User_messages to delete.
     * 
    **/
    where: User_messagesWhereUniqueInput
  }


  /**
   * User_messages deleteMany
   */
  export type User_messagesDeleteManyArgs = {
    /**
     * Filter which User_messages to delete
     * 
    **/
    where?: User_messagesWhereInput
  }


  /**
   * User_messages.accounts
   */
  export type User_messages$accountsArgs = {
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
   * User_messages.messages
   */
  export type User_messages$messagesArgs = {
    /**
     * Select specific fields to fetch from the Messages
     * 
    **/
    select?: MessagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessagesInclude | null
    where?: MessagesWhereInput
  }


  /**
   * User_messages.users
   */
  export type User_messages$usersArgs = {
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
   * User_messages without action
   */
  export type User_messagesArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
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
    ui_options?: boolean | Users$ui_optionsArgs
    user_messages?: boolean | Users$user_messagesArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type UsersInclude = {
    accounts?: boolean | Users$accountsArgs
    ui_options?: boolean | Users$ui_optionsArgs
    user_messages?: boolean | Users$user_messagesArgs
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
        P extends 'ui_options' ? Ui_optionsGetPayload<S['include'][P]> | null :
        P extends 'user_messages' ? Array < User_messagesGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountsGetPayload<S['select'][P]>>  :
        P extends 'ui_options' ? Ui_optionsGetPayload<S['select'][P]> | null :
        P extends 'user_messages' ? Array < User_messagesGetPayload<S['select'][P]>>  :
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

    ui_options<T extends Users$ui_optionsArgs= {}>(args?: Subset<T, Users$ui_optionsArgs>): Prisma__Ui_optionsClient<Ui_optionsGetPayload<T> | Null>;

    user_messages<T extends Users$user_messagesArgs= {}>(args?: Subset<T, Users$user_messagesArgs>): PrismaPromise<Array<User_messagesGetPayload<T>>| Null>;

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
   * Users.ui_options
   */
  export type Users$ui_optionsArgs = {
    /**
     * Select specific fields to fetch from the Ui_options
     * 
    **/
    select?: Ui_optionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Ui_optionsInclude | null
    where?: Ui_optionsWhereInput
  }


  /**
   * Users.user_messages
   */
  export type Users$user_messagesArgs = {
    /**
     * Select specific fields to fetch from the User_messages
     * 
    **/
    select?: User_messagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_messagesInclude | null
    where?: User_messagesWhereInput
    orderBy?: Enumerable<User_messagesOrderByWithRelationInput>
    cursor?: User_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_messagesScalarFieldEnum>
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
   * Model Widget_types
   */


  export type AggregateWidget_types = {
    _count: Widget_typesCountAggregateOutputType | null
    _avg: Widget_typesAvgAggregateOutputType | null
    _sum: Widget_typesSumAggregateOutputType | null
    _min: Widget_typesMinAggregateOutputType | null
    _max: Widget_typesMaxAggregateOutputType | null
  }

  export type Widget_typesAvgAggregateOutputType = {
    sort: number | null
  }

  export type Widget_typesSumAggregateOutputType = {
    sort: number | null
  }

  export type Widget_typesMinAggregateOutputType = {
    widget_type_id: string | null
    name: string | null
    needs_list: boolean | null
    sort: number | null
    comment: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type Widget_typesMaxAggregateOutputType = {
    widget_type_id: string | null
    name: string | null
    needs_list: boolean | null
    sort: number | null
    comment: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
  }

  export type Widget_typesCountAggregateOutputType = {
    widget_type_id: number
    name: number
    needs_list: number
    sort: number
    comment: number
    label_replace_by_generated_column: number
    deleted: number
    _all: number
  }


  export type Widget_typesAvgAggregateInputType = {
    sort?: true
  }

  export type Widget_typesSumAggregateInputType = {
    sort?: true
  }

  export type Widget_typesMinAggregateInputType = {
    widget_type_id?: true
    name?: true
    needs_list?: true
    sort?: true
    comment?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type Widget_typesMaxAggregateInputType = {
    widget_type_id?: true
    name?: true
    needs_list?: true
    sort?: true
    comment?: true
    label_replace_by_generated_column?: true
    deleted?: true
  }

  export type Widget_typesCountAggregateInputType = {
    widget_type_id?: true
    name?: true
    needs_list?: true
    sort?: true
    comment?: true
    label_replace_by_generated_column?: true
    deleted?: true
    _all?: true
  }

  export type Widget_typesAggregateArgs = {
    /**
     * Filter which Widget_types to aggregate.
     * 
    **/
    where?: Widget_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widget_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Widget_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Widget_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widget_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widget_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Widget_types
    **/
    _count?: true | Widget_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Widget_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Widget_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Widget_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Widget_typesMaxAggregateInputType
  }

  export type GetWidget_typesAggregateType<T extends Widget_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateWidget_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWidget_types[P]>
      : GetScalarType<T[P], AggregateWidget_types[P]>
  }




  export type Widget_typesGroupByArgs = {
    where?: Widget_typesWhereInput
    orderBy?: Enumerable<Widget_typesOrderByWithAggregationInput>
    by: Array<Widget_typesScalarFieldEnum>
    having?: Widget_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Widget_typesCountAggregateInputType | true
    _avg?: Widget_typesAvgAggregateInputType
    _sum?: Widget_typesSumAggregateInputType
    _min?: Widget_typesMinAggregateInputType
    _max?: Widget_typesMaxAggregateInputType
  }


  export type Widget_typesGroupByOutputType = {
    widget_type_id: string
    name: string | null
    needs_list: boolean | null
    sort: number | null
    comment: string | null
    label_replace_by_generated_column: string | null
    deleted: boolean | null
    _count: Widget_typesCountAggregateOutputType | null
    _avg: Widget_typesAvgAggregateOutputType | null
    _sum: Widget_typesSumAggregateOutputType | null
    _min: Widget_typesMinAggregateOutputType | null
    _max: Widget_typesMaxAggregateOutputType | null
  }

  type GetWidget_typesGroupByPayload<T extends Widget_typesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Widget_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Widget_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Widget_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Widget_typesGroupByOutputType[P]>
        }
      >
    >


  export type Widget_typesSelect = {
    widget_type_id?: boolean
    name?: boolean
    needs_list?: boolean
    sort?: boolean
    comment?: boolean
    label_replace_by_generated_column?: boolean
    deleted?: boolean
    widgets_for_fields?: boolean | Widget_types$widgets_for_fieldsArgs
    _count?: boolean | Widget_typesCountOutputTypeArgs
  }


  export type Widget_typesInclude = {
    widgets_for_fields?: boolean | Widget_types$widgets_for_fieldsArgs
    _count?: boolean | Widget_typesCountOutputTypeArgs
  } 

  export type Widget_typesGetPayload<S extends boolean | null | undefined | Widget_typesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Widget_types :
    S extends undefined ? never :
    S extends { include: any } & (Widget_typesArgs | Widget_typesFindManyArgs)
    ? Widget_types  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'widgets_for_fields' ? Array < Widgets_for_fieldsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Widget_typesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Widget_typesArgs | Widget_typesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'widgets_for_fields' ? Array < Widgets_for_fieldsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Widget_typesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Widget_types ? Widget_types[P] : never
  } 
      : Widget_types


  type Widget_typesCountArgs = Merge<
    Omit<Widget_typesFindManyArgs, 'select' | 'include'> & {
      select?: Widget_typesCountAggregateInputType | true
    }
  >

  export interface Widget_typesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Widget_types that matches the filter.
     * @param {Widget_typesFindUniqueArgs} args - Arguments to find a Widget_types
     * @example
     * // Get one Widget_types
     * const widget_types = await prisma.widget_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Widget_typesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Widget_typesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Widget_types'> extends True ? Prisma__Widget_typesClient<Widget_typesGetPayload<T>> : Prisma__Widget_typesClient<Widget_typesGetPayload<T> | null, null>

    /**
     * Find one Widget_types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Widget_typesFindUniqueOrThrowArgs} args - Arguments to find a Widget_types
     * @example
     * // Get one Widget_types
     * const widget_types = await prisma.widget_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Widget_typesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Widget_typesFindUniqueOrThrowArgs>
    ): Prisma__Widget_typesClient<Widget_typesGetPayload<T>>

    /**
     * Find the first Widget_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widget_typesFindFirstArgs} args - Arguments to find a Widget_types
     * @example
     * // Get one Widget_types
     * const widget_types = await prisma.widget_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Widget_typesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Widget_typesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Widget_types'> extends True ? Prisma__Widget_typesClient<Widget_typesGetPayload<T>> : Prisma__Widget_typesClient<Widget_typesGetPayload<T> | null, null>

    /**
     * Find the first Widget_types that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widget_typesFindFirstOrThrowArgs} args - Arguments to find a Widget_types
     * @example
     * // Get one Widget_types
     * const widget_types = await prisma.widget_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Widget_typesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Widget_typesFindFirstOrThrowArgs>
    ): Prisma__Widget_typesClient<Widget_typesGetPayload<T>>

    /**
     * Find zero or more Widget_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widget_typesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Widget_types
     * const widget_types = await prisma.widget_types.findMany()
     * 
     * // Get first 10 Widget_types
     * const widget_types = await prisma.widget_types.findMany({ take: 10 })
     * 
     * // Only select the `widget_type_id`
     * const widget_typesWithWidget_type_idOnly = await prisma.widget_types.findMany({ select: { widget_type_id: true } })
     * 
    **/
    findMany<T extends Widget_typesFindManyArgs>(
      args?: SelectSubset<T, Widget_typesFindManyArgs>
    ): PrismaPromise<Array<Widget_typesGetPayload<T>>>

    /**
     * Create a Widget_types.
     * @param {Widget_typesCreateArgs} args - Arguments to create a Widget_types.
     * @example
     * // Create one Widget_types
     * const Widget_types = await prisma.widget_types.create({
     *   data: {
     *     // ... data to create a Widget_types
     *   }
     * })
     * 
    **/
    create<T extends Widget_typesCreateArgs>(
      args: SelectSubset<T, Widget_typesCreateArgs>
    ): Prisma__Widget_typesClient<Widget_typesGetPayload<T>>

    /**
     * Create many Widget_types.
     *     @param {Widget_typesCreateManyArgs} args - Arguments to create many Widget_types.
     *     @example
     *     // Create many Widget_types
     *     const widget_types = await prisma.widget_types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Widget_typesCreateManyArgs>(
      args?: SelectSubset<T, Widget_typesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Widget_types.
     * @param {Widget_typesDeleteArgs} args - Arguments to delete one Widget_types.
     * @example
     * // Delete one Widget_types
     * const Widget_types = await prisma.widget_types.delete({
     *   where: {
     *     // ... filter to delete one Widget_types
     *   }
     * })
     * 
    **/
    delete<T extends Widget_typesDeleteArgs>(
      args: SelectSubset<T, Widget_typesDeleteArgs>
    ): Prisma__Widget_typesClient<Widget_typesGetPayload<T>>

    /**
     * Update one Widget_types.
     * @param {Widget_typesUpdateArgs} args - Arguments to update one Widget_types.
     * @example
     * // Update one Widget_types
     * const widget_types = await prisma.widget_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Widget_typesUpdateArgs>(
      args: SelectSubset<T, Widget_typesUpdateArgs>
    ): Prisma__Widget_typesClient<Widget_typesGetPayload<T>>

    /**
     * Delete zero or more Widget_types.
     * @param {Widget_typesDeleteManyArgs} args - Arguments to filter Widget_types to delete.
     * @example
     * // Delete a few Widget_types
     * const { count } = await prisma.widget_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Widget_typesDeleteManyArgs>(
      args?: SelectSubset<T, Widget_typesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Widget_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widget_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Widget_types
     * const widget_types = await prisma.widget_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Widget_typesUpdateManyArgs>(
      args: SelectSubset<T, Widget_typesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Widget_types.
     * @param {Widget_typesUpsertArgs} args - Arguments to update or create a Widget_types.
     * @example
     * // Update or create a Widget_types
     * const widget_types = await prisma.widget_types.upsert({
     *   create: {
     *     // ... data to create a Widget_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Widget_types we want to update
     *   }
     * })
    **/
    upsert<T extends Widget_typesUpsertArgs>(
      args: SelectSubset<T, Widget_typesUpsertArgs>
    ): Prisma__Widget_typesClient<Widget_typesGetPayload<T>>

    /**
     * Count the number of Widget_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widget_typesCountArgs} args - Arguments to filter Widget_types to count.
     * @example
     * // Count the number of Widget_types
     * const count = await prisma.widget_types.count({
     *   where: {
     *     // ... the filter for the Widget_types we want to count
     *   }
     * })
    **/
    count<T extends Widget_typesCountArgs>(
      args?: Subset<T, Widget_typesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Widget_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Widget_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widget_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Widget_typesAggregateArgs>(args: Subset<T, Widget_typesAggregateArgs>): PrismaPromise<GetWidget_typesAggregateType<T>>

    /**
     * Group by Widget_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widget_typesGroupByArgs} args - Group by arguments.
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
      T extends Widget_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Widget_typesGroupByArgs['orderBy'] }
        : { orderBy?: Widget_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Widget_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidget_typesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Widget_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Widget_typesClient<T, Null = never> implements PrismaPromise<T> {
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

    widgets_for_fields<T extends Widget_types$widgets_for_fieldsArgs= {}>(args?: Subset<T, Widget_types$widgets_for_fieldsArgs>): PrismaPromise<Array<Widgets_for_fieldsGetPayload<T>>| Null>;

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
   * Widget_types base type for findUnique actions
   */
  export type Widget_typesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * Filter, which Widget_types to fetch.
     * 
    **/
    where: Widget_typesWhereUniqueInput
  }

  /**
   * Widget_types findUnique
   */
  export interface Widget_typesFindUniqueArgs extends Widget_typesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Widget_types findUniqueOrThrow
   */
  export type Widget_typesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * Filter, which Widget_types to fetch.
     * 
    **/
    where: Widget_typesWhereUniqueInput
  }


  /**
   * Widget_types base type for findFirst actions
   */
  export type Widget_typesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * Filter, which Widget_types to fetch.
     * 
    **/
    where?: Widget_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widget_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Widget_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Widget_types.
     * 
    **/
    cursor?: Widget_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widget_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widget_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Widget_types.
     * 
    **/
    distinct?: Enumerable<Widget_typesScalarFieldEnum>
  }

  /**
   * Widget_types findFirst
   */
  export interface Widget_typesFindFirstArgs extends Widget_typesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Widget_types findFirstOrThrow
   */
  export type Widget_typesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * Filter, which Widget_types to fetch.
     * 
    **/
    where?: Widget_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widget_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Widget_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Widget_types.
     * 
    **/
    cursor?: Widget_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widget_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widget_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Widget_types.
     * 
    **/
    distinct?: Enumerable<Widget_typesScalarFieldEnum>
  }


  /**
   * Widget_types findMany
   */
  export type Widget_typesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * Filter, which Widget_types to fetch.
     * 
    **/
    where?: Widget_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widget_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Widget_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Widget_types.
     * 
    **/
    cursor?: Widget_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widget_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widget_types.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Widget_typesScalarFieldEnum>
  }


  /**
   * Widget_types create
   */
  export type Widget_typesCreateArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * The data needed to create a Widget_types.
     * 
    **/
    data: XOR<Widget_typesCreateInput, Widget_typesUncheckedCreateInput>
  }


  /**
   * Widget_types createMany
   */
  export type Widget_typesCreateManyArgs = {
    /**
     * The data used to create many Widget_types.
     * 
    **/
    data: Enumerable<Widget_typesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Widget_types update
   */
  export type Widget_typesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * The data needed to update a Widget_types.
     * 
    **/
    data: XOR<Widget_typesUpdateInput, Widget_typesUncheckedUpdateInput>
    /**
     * Choose, which Widget_types to update.
     * 
    **/
    where: Widget_typesWhereUniqueInput
  }


  /**
   * Widget_types updateMany
   */
  export type Widget_typesUpdateManyArgs = {
    /**
     * The data used to update Widget_types.
     * 
    **/
    data: XOR<Widget_typesUpdateManyMutationInput, Widget_typesUncheckedUpdateManyInput>
    /**
     * Filter which Widget_types to update
     * 
    **/
    where?: Widget_typesWhereInput
  }


  /**
   * Widget_types upsert
   */
  export type Widget_typesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * The filter to search for the Widget_types to update in case it exists.
     * 
    **/
    where: Widget_typesWhereUniqueInput
    /**
     * In case the Widget_types found by the `where` argument doesn't exist, create a new Widget_types with this data.
     * 
    **/
    create: XOR<Widget_typesCreateInput, Widget_typesUncheckedCreateInput>
    /**
     * In case the Widget_types was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Widget_typesUpdateInput, Widget_typesUncheckedUpdateInput>
  }


  /**
   * Widget_types delete
   */
  export type Widget_typesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    /**
     * Filter which Widget_types to delete.
     * 
    **/
    where: Widget_typesWhereUniqueInput
  }


  /**
   * Widget_types deleteMany
   */
  export type Widget_typesDeleteManyArgs = {
    /**
     * Filter which Widget_types to delete
     * 
    **/
    where?: Widget_typesWhereInput
  }


  /**
   * Widget_types.widgets_for_fields
   */
  export type Widget_types$widgets_for_fieldsArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    where?: Widgets_for_fieldsWhereInput
    orderBy?: Enumerable<Widgets_for_fieldsOrderByWithRelationInput>
    cursor?: Widgets_for_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Widgets_for_fieldsScalarFieldEnum>
  }


  /**
   * Widget_types without action
   */
  export type Widget_typesArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
  }



  /**
   * Model Widgets_for_fields
   */


  export type AggregateWidgets_for_fields = {
    _count: Widgets_for_fieldsCountAggregateOutputType | null
    _min: Widgets_for_fieldsMinAggregateOutputType | null
    _max: Widgets_for_fieldsMaxAggregateOutputType | null
  }

  export type Widgets_for_fieldsMinAggregateOutputType = {
    widget_for_field_id: string | null
    field_type_id: string | null
    widget_type_id: string | null
    label: string | null
    deleted: boolean | null
  }

  export type Widgets_for_fieldsMaxAggregateOutputType = {
    widget_for_field_id: string | null
    field_type_id: string | null
    widget_type_id: string | null
    label: string | null
    deleted: boolean | null
  }

  export type Widgets_for_fieldsCountAggregateOutputType = {
    widget_for_field_id: number
    field_type_id: number
    widget_type_id: number
    label: number
    deleted: number
    _all: number
  }


  export type Widgets_for_fieldsMinAggregateInputType = {
    widget_for_field_id?: true
    field_type_id?: true
    widget_type_id?: true
    label?: true
    deleted?: true
  }

  export type Widgets_for_fieldsMaxAggregateInputType = {
    widget_for_field_id?: true
    field_type_id?: true
    widget_type_id?: true
    label?: true
    deleted?: true
  }

  export type Widgets_for_fieldsCountAggregateInputType = {
    widget_for_field_id?: true
    field_type_id?: true
    widget_type_id?: true
    label?: true
    deleted?: true
    _all?: true
  }

  export type Widgets_for_fieldsAggregateArgs = {
    /**
     * Filter which Widgets_for_fields to aggregate.
     * 
    **/
    where?: Widgets_for_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets_for_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<Widgets_for_fieldsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Widgets_for_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets_for_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets_for_fields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Widgets_for_fields
    **/
    _count?: true | Widgets_for_fieldsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Widgets_for_fieldsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Widgets_for_fieldsMaxAggregateInputType
  }

  export type GetWidgets_for_fieldsAggregateType<T extends Widgets_for_fieldsAggregateArgs> = {
        [P in keyof T & keyof AggregateWidgets_for_fields]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWidgets_for_fields[P]>
      : GetScalarType<T[P], AggregateWidgets_for_fields[P]>
  }




  export type Widgets_for_fieldsGroupByArgs = {
    where?: Widgets_for_fieldsWhereInput
    orderBy?: Enumerable<Widgets_for_fieldsOrderByWithAggregationInput>
    by: Array<Widgets_for_fieldsScalarFieldEnum>
    having?: Widgets_for_fieldsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Widgets_for_fieldsCountAggregateInputType | true
    _min?: Widgets_for_fieldsMinAggregateInputType
    _max?: Widgets_for_fieldsMaxAggregateInputType
  }


  export type Widgets_for_fieldsGroupByOutputType = {
    widget_for_field_id: string
    field_type_id: string | null
    widget_type_id: string | null
    label: string | null
    deleted: boolean | null
    _count: Widgets_for_fieldsCountAggregateOutputType | null
    _min: Widgets_for_fieldsMinAggregateOutputType | null
    _max: Widgets_for_fieldsMaxAggregateOutputType | null
  }

  type GetWidgets_for_fieldsGroupByPayload<T extends Widgets_for_fieldsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Widgets_for_fieldsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Widgets_for_fieldsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Widgets_for_fieldsGroupByOutputType[P]>
            : GetScalarType<T[P], Widgets_for_fieldsGroupByOutputType[P]>
        }
      >
    >


  export type Widgets_for_fieldsSelect = {
    widget_for_field_id?: boolean
    field_type_id?: boolean
    widget_type_id?: boolean
    label?: boolean
    deleted?: boolean
    field_types?: boolean | Widgets_for_fields$field_typesArgs
    widget_types?: boolean | Widgets_for_fields$widget_typesArgs
  }


  export type Widgets_for_fieldsInclude = {
    field_types?: boolean | Widgets_for_fields$field_typesArgs
    widget_types?: boolean | Widgets_for_fields$widget_typesArgs
  } 

  export type Widgets_for_fieldsGetPayload<S extends boolean | null | undefined | Widgets_for_fieldsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Widgets_for_fields :
    S extends undefined ? never :
    S extends { include: any } & (Widgets_for_fieldsArgs | Widgets_for_fieldsFindManyArgs)
    ? Widgets_for_fields  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'field_types' ? Field_typesGetPayload<S['include'][P]> | null :
        P extends 'widget_types' ? Widget_typesGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Widgets_for_fieldsArgs | Widgets_for_fieldsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'field_types' ? Field_typesGetPayload<S['select'][P]> | null :
        P extends 'widget_types' ? Widget_typesGetPayload<S['select'][P]> | null :  P extends keyof Widgets_for_fields ? Widgets_for_fields[P] : never
  } 
      : Widgets_for_fields


  type Widgets_for_fieldsCountArgs = Merge<
    Omit<Widgets_for_fieldsFindManyArgs, 'select' | 'include'> & {
      select?: Widgets_for_fieldsCountAggregateInputType | true
    }
  >

  export interface Widgets_for_fieldsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Widgets_for_fields that matches the filter.
     * @param {Widgets_for_fieldsFindUniqueArgs} args - Arguments to find a Widgets_for_fields
     * @example
     * // Get one Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Widgets_for_fieldsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Widgets_for_fieldsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Widgets_for_fields'> extends True ? Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>> : Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T> | null, null>

    /**
     * Find one Widgets_for_fields that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Widgets_for_fieldsFindUniqueOrThrowArgs} args - Arguments to find a Widgets_for_fields
     * @example
     * // Get one Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Widgets_for_fieldsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Widgets_for_fieldsFindUniqueOrThrowArgs>
    ): Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>>

    /**
     * Find the first Widgets_for_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widgets_for_fieldsFindFirstArgs} args - Arguments to find a Widgets_for_fields
     * @example
     * // Get one Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Widgets_for_fieldsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Widgets_for_fieldsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Widgets_for_fields'> extends True ? Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>> : Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T> | null, null>

    /**
     * Find the first Widgets_for_fields that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widgets_for_fieldsFindFirstOrThrowArgs} args - Arguments to find a Widgets_for_fields
     * @example
     * // Get one Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Widgets_for_fieldsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Widgets_for_fieldsFindFirstOrThrowArgs>
    ): Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>>

    /**
     * Find zero or more Widgets_for_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widgets_for_fieldsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.findMany()
     * 
     * // Get first 10 Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.findMany({ take: 10 })
     * 
     * // Only select the `widget_for_field_id`
     * const widgets_for_fieldsWithWidget_for_field_idOnly = await prisma.widgets_for_fields.findMany({ select: { widget_for_field_id: true } })
     * 
    **/
    findMany<T extends Widgets_for_fieldsFindManyArgs>(
      args?: SelectSubset<T, Widgets_for_fieldsFindManyArgs>
    ): PrismaPromise<Array<Widgets_for_fieldsGetPayload<T>>>

    /**
     * Create a Widgets_for_fields.
     * @param {Widgets_for_fieldsCreateArgs} args - Arguments to create a Widgets_for_fields.
     * @example
     * // Create one Widgets_for_fields
     * const Widgets_for_fields = await prisma.widgets_for_fields.create({
     *   data: {
     *     // ... data to create a Widgets_for_fields
     *   }
     * })
     * 
    **/
    create<T extends Widgets_for_fieldsCreateArgs>(
      args: SelectSubset<T, Widgets_for_fieldsCreateArgs>
    ): Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>>

    /**
     * Create many Widgets_for_fields.
     *     @param {Widgets_for_fieldsCreateManyArgs} args - Arguments to create many Widgets_for_fields.
     *     @example
     *     // Create many Widgets_for_fields
     *     const widgets_for_fields = await prisma.widgets_for_fields.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Widgets_for_fieldsCreateManyArgs>(
      args?: SelectSubset<T, Widgets_for_fieldsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Widgets_for_fields.
     * @param {Widgets_for_fieldsDeleteArgs} args - Arguments to delete one Widgets_for_fields.
     * @example
     * // Delete one Widgets_for_fields
     * const Widgets_for_fields = await prisma.widgets_for_fields.delete({
     *   where: {
     *     // ... filter to delete one Widgets_for_fields
     *   }
     * })
     * 
    **/
    delete<T extends Widgets_for_fieldsDeleteArgs>(
      args: SelectSubset<T, Widgets_for_fieldsDeleteArgs>
    ): Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>>

    /**
     * Update one Widgets_for_fields.
     * @param {Widgets_for_fieldsUpdateArgs} args - Arguments to update one Widgets_for_fields.
     * @example
     * // Update one Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Widgets_for_fieldsUpdateArgs>(
      args: SelectSubset<T, Widgets_for_fieldsUpdateArgs>
    ): Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>>

    /**
     * Delete zero or more Widgets_for_fields.
     * @param {Widgets_for_fieldsDeleteManyArgs} args - Arguments to filter Widgets_for_fields to delete.
     * @example
     * // Delete a few Widgets_for_fields
     * const { count } = await prisma.widgets_for_fields.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Widgets_for_fieldsDeleteManyArgs>(
      args?: SelectSubset<T, Widgets_for_fieldsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Widgets_for_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widgets_for_fieldsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Widgets_for_fieldsUpdateManyArgs>(
      args: SelectSubset<T, Widgets_for_fieldsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Widgets_for_fields.
     * @param {Widgets_for_fieldsUpsertArgs} args - Arguments to update or create a Widgets_for_fields.
     * @example
     * // Update or create a Widgets_for_fields
     * const widgets_for_fields = await prisma.widgets_for_fields.upsert({
     *   create: {
     *     // ... data to create a Widgets_for_fields
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Widgets_for_fields we want to update
     *   }
     * })
    **/
    upsert<T extends Widgets_for_fieldsUpsertArgs>(
      args: SelectSubset<T, Widgets_for_fieldsUpsertArgs>
    ): Prisma__Widgets_for_fieldsClient<Widgets_for_fieldsGetPayload<T>>

    /**
     * Count the number of Widgets_for_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widgets_for_fieldsCountArgs} args - Arguments to filter Widgets_for_fields to count.
     * @example
     * // Count the number of Widgets_for_fields
     * const count = await prisma.widgets_for_fields.count({
     *   where: {
     *     // ... the filter for the Widgets_for_fields we want to count
     *   }
     * })
    **/
    count<T extends Widgets_for_fieldsCountArgs>(
      args?: Subset<T, Widgets_for_fieldsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Widgets_for_fieldsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Widgets_for_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widgets_for_fieldsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Widgets_for_fieldsAggregateArgs>(args: Subset<T, Widgets_for_fieldsAggregateArgs>): PrismaPromise<GetWidgets_for_fieldsAggregateType<T>>

    /**
     * Group by Widgets_for_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Widgets_for_fieldsGroupByArgs} args - Group by arguments.
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
      T extends Widgets_for_fieldsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Widgets_for_fieldsGroupByArgs['orderBy'] }
        : { orderBy?: Widgets_for_fieldsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Widgets_for_fieldsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidgets_for_fieldsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Widgets_for_fields.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Widgets_for_fieldsClient<T, Null = never> implements PrismaPromise<T> {
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

    field_types<T extends Widgets_for_fields$field_typesArgs= {}>(args?: Subset<T, Widgets_for_fields$field_typesArgs>): Prisma__Field_typesClient<Field_typesGetPayload<T> | Null>;

    widget_types<T extends Widgets_for_fields$widget_typesArgs= {}>(args?: Subset<T, Widgets_for_fields$widget_typesArgs>): Prisma__Widget_typesClient<Widget_typesGetPayload<T> | Null>;

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
   * Widgets_for_fields base type for findUnique actions
   */
  export type Widgets_for_fieldsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * Filter, which Widgets_for_fields to fetch.
     * 
    **/
    where: Widgets_for_fieldsWhereUniqueInput
  }

  /**
   * Widgets_for_fields findUnique
   */
  export interface Widgets_for_fieldsFindUniqueArgs extends Widgets_for_fieldsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Widgets_for_fields findUniqueOrThrow
   */
  export type Widgets_for_fieldsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * Filter, which Widgets_for_fields to fetch.
     * 
    **/
    where: Widgets_for_fieldsWhereUniqueInput
  }


  /**
   * Widgets_for_fields base type for findFirst actions
   */
  export type Widgets_for_fieldsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * Filter, which Widgets_for_fields to fetch.
     * 
    **/
    where?: Widgets_for_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets_for_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<Widgets_for_fieldsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Widgets_for_fields.
     * 
    **/
    cursor?: Widgets_for_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets_for_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets_for_fields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Widgets_for_fields.
     * 
    **/
    distinct?: Enumerable<Widgets_for_fieldsScalarFieldEnum>
  }

  /**
   * Widgets_for_fields findFirst
   */
  export interface Widgets_for_fieldsFindFirstArgs extends Widgets_for_fieldsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Widgets_for_fields findFirstOrThrow
   */
  export type Widgets_for_fieldsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * Filter, which Widgets_for_fields to fetch.
     * 
    **/
    where?: Widgets_for_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets_for_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<Widgets_for_fieldsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Widgets_for_fields.
     * 
    **/
    cursor?: Widgets_for_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets_for_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets_for_fields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Widgets_for_fields.
     * 
    **/
    distinct?: Enumerable<Widgets_for_fieldsScalarFieldEnum>
  }


  /**
   * Widgets_for_fields findMany
   */
  export type Widgets_for_fieldsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * Filter, which Widgets_for_fields to fetch.
     * 
    **/
    where?: Widgets_for_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets_for_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<Widgets_for_fieldsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Widgets_for_fields.
     * 
    **/
    cursor?: Widgets_for_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets_for_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets_for_fields.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Widgets_for_fieldsScalarFieldEnum>
  }


  /**
   * Widgets_for_fields create
   */
  export type Widgets_for_fieldsCreateArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * The data needed to create a Widgets_for_fields.
     * 
    **/
    data: XOR<Widgets_for_fieldsCreateInput, Widgets_for_fieldsUncheckedCreateInput>
  }


  /**
   * Widgets_for_fields createMany
   */
  export type Widgets_for_fieldsCreateManyArgs = {
    /**
     * The data used to create many Widgets_for_fields.
     * 
    **/
    data: Enumerable<Widgets_for_fieldsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Widgets_for_fields update
   */
  export type Widgets_for_fieldsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * The data needed to update a Widgets_for_fields.
     * 
    **/
    data: XOR<Widgets_for_fieldsUpdateInput, Widgets_for_fieldsUncheckedUpdateInput>
    /**
     * Choose, which Widgets_for_fields to update.
     * 
    **/
    where: Widgets_for_fieldsWhereUniqueInput
  }


  /**
   * Widgets_for_fields updateMany
   */
  export type Widgets_for_fieldsUpdateManyArgs = {
    /**
     * The data used to update Widgets_for_fields.
     * 
    **/
    data: XOR<Widgets_for_fieldsUpdateManyMutationInput, Widgets_for_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which Widgets_for_fields to update
     * 
    **/
    where?: Widgets_for_fieldsWhereInput
  }


  /**
   * Widgets_for_fields upsert
   */
  export type Widgets_for_fieldsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * The filter to search for the Widgets_for_fields to update in case it exists.
     * 
    **/
    where: Widgets_for_fieldsWhereUniqueInput
    /**
     * In case the Widgets_for_fields found by the `where` argument doesn't exist, create a new Widgets_for_fields with this data.
     * 
    **/
    create: XOR<Widgets_for_fieldsCreateInput, Widgets_for_fieldsUncheckedCreateInput>
    /**
     * In case the Widgets_for_fields was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Widgets_for_fieldsUpdateInput, Widgets_for_fieldsUncheckedUpdateInput>
  }


  /**
   * Widgets_for_fields delete
   */
  export type Widgets_for_fieldsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
    /**
     * Filter which Widgets_for_fields to delete.
     * 
    **/
    where: Widgets_for_fieldsWhereUniqueInput
  }


  /**
   * Widgets_for_fields deleteMany
   */
  export type Widgets_for_fieldsDeleteManyArgs = {
    /**
     * Filter which Widgets_for_fields to delete
     * 
    **/
    where?: Widgets_for_fieldsWhereInput
  }


  /**
   * Widgets_for_fields.field_types
   */
  export type Widgets_for_fields$field_typesArgs = {
    /**
     * Select specific fields to fetch from the Field_types
     * 
    **/
    select?: Field_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Field_typesInclude | null
    where?: Field_typesWhereInput
  }


  /**
   * Widgets_for_fields.widget_types
   */
  export type Widgets_for_fields$widget_typesArgs = {
    /**
     * Select specific fields to fetch from the Widget_types
     * 
    **/
    select?: Widget_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widget_typesInclude | null
    where?: Widget_typesWhereInput
  }


  /**
   * Widgets_for_fields without action
   */
  export type Widgets_for_fieldsArgs = {
    /**
     * Select specific fields to fetch from the Widgets_for_fields
     * 
    **/
    select?: Widgets_for_fieldsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Widgets_for_fieldsInclude | null
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


  export const Field_typesScalarFieldEnum: {
    field_type_id: 'field_type_id',
    name: 'name',
    sort: 'sort',
    comment: 'comment',
    label_replace_by_generated_column: 'label_replace_by_generated_column',
    deleted: 'deleted'
  };

  export type Field_typesScalarFieldEnum = (typeof Field_typesScalarFieldEnum)[keyof typeof Field_typesScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    message_id: 'message_id',
    label_replace_by_generated_column: 'label_replace_by_generated_column',
    date: 'date',
    message: 'message'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const Place_levelsScalarFieldEnum: {
    place_level_id: 'place_level_id',
    account_id: 'account_id',
    project_id: 'project_id',
    level: 'level',
    name_singular: 'name_singular',
    name_plural: 'name_plural',
    name_short: 'name_short',
    reports: 'reports',
    report_values: 'report_values',
    actions: 'actions',
    action_values: 'action_values',
    action_reports: 'action_reports',
    checks: 'checks',
    check_values: 'check_values',
    check_taxa: 'check_taxa',
    observations: 'observations',
    label_replace_by_generated_column: 'label_replace_by_generated_column',
    deleted: 'deleted'
  };

  export type Place_levelsScalarFieldEnum = (typeof Place_levelsScalarFieldEnum)[keyof typeof Place_levelsScalarFieldEnum]


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


  export const Ui_optionsScalarFieldEnum: {
    user_id: 'user_id',
    account_id: 'account_id',
    designing: 'designing',
    breadcrumbs_overflowing: 'breadcrumbs_overflowing',
    navs_overflowing: 'navs_overflowing',
    tabs: 'tabs',
    show_map: 'show_map',
    map_bounds: 'map_bounds',
    local_map_show: 'local_map_show',
    tile_layer_sorter: 'tile_layer_sorter',
    vector_layer_sorter: 'vector_layer_sorter',
    editing_place_geometry: 'editing_place_geometry',
    editing_check_geometry: 'editing_check_geometry',
    editing_action_geometry: 'editing_action_geometry',
    label: 'label'
  };

  export type Ui_optionsScalarFieldEnum = (typeof Ui_optionsScalarFieldEnum)[keyof typeof Ui_optionsScalarFieldEnum]


  export const User_messagesScalarFieldEnum: {
    user_message_id: 'user_message_id',
    account_id: 'account_id',
    user_id: 'user_id',
    message_id: 'message_id',
    label_replace_by_generated_column: 'label_replace_by_generated_column',
    read: 'read'
  };

  export type User_messagesScalarFieldEnum = (typeof User_messagesScalarFieldEnum)[keyof typeof User_messagesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    auth_id: 'auth_id',
    label_replace_by_generated_column: 'label_replace_by_generated_column',
    deleted: 'deleted'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Widget_typesScalarFieldEnum: {
    widget_type_id: 'widget_type_id',
    name: 'name',
    needs_list: 'needs_list',
    sort: 'sort',
    comment: 'comment',
    label_replace_by_generated_column: 'label_replace_by_generated_column',
    deleted: 'deleted'
  };

  export type Widget_typesScalarFieldEnum = (typeof Widget_typesScalarFieldEnum)[keyof typeof Widget_typesScalarFieldEnum]


  export const Widgets_for_fieldsScalarFieldEnum: {
    widget_for_field_id: 'widget_for_field_id',
    field_type_id: 'field_type_id',
    widget_type_id: 'widget_type_id',
    label: 'label',
    deleted: 'deleted'
  };

  export type Widgets_for_fieldsScalarFieldEnum = (typeof Widgets_for_fieldsScalarFieldEnum)[keyof typeof Widgets_for_fieldsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    place_levels?: Place_levelsListRelationFilter
    projects?: ProjectsListRelationFilter
    ui_options?: Ui_optionsListRelationFilter
    user_messages?: User_messagesListRelationFilter
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
    place_levels?: Place_levelsOrderByRelationAggregateInput
    projects?: ProjectsOrderByRelationAggregateInput
    ui_options?: Ui_optionsOrderByRelationAggregateInput
    user_messages?: User_messagesOrderByRelationAggregateInput
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
    place_levels?: Place_levelsListRelationFilter
    projects?: ProjectsListRelationFilter
    ui_options?: Ui_optionsListRelationFilter
    user_messages?: User_messagesListRelationFilter
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

  export type Field_typesWhereInput = {
    AND?: Enumerable<Field_typesWhereInput>
    OR?: Enumerable<Field_typesWhereInput>
    NOT?: Enumerable<Field_typesWhereInput>
    field_type_id?: UuidFilter<"Field_types"> | string
    name?: StringNullableFilter<"Field_types"> | string | null
    sort?: IntNullableFilter<"Field_types"> | number | null
    comment?: StringNullableFilter<"Field_types"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"Field_types"> | string | null
    deleted?: BoolNullableFilter<"Field_types"> | boolean | null
    widgets_for_fields?: Widgets_for_fieldsListRelationFilter
  }

  export type Field_typesOrderByWithRelationInput = {
    field_type_id?: SortOrder
    name?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    widgets_for_fields?: Widgets_for_fieldsOrderByRelationAggregateInput
  }

  export type Field_typesWhereUniqueInput = Prisma.AtLeast<{
    field_type_id?: string
    AND?: Enumerable<Field_typesWhereInput>
    OR?: Enumerable<Field_typesWhereInput>
    NOT?: Enumerable<Field_typesWhereInput>
    name?: StringNullableFilter<"Field_types"> | string | null
    sort?: IntNullableFilter<"Field_types"> | number | null
    comment?: StringNullableFilter<"Field_types"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"Field_types"> | string | null
    deleted?: BoolNullableFilter<"Field_types"> | boolean | null
    widgets_for_fields?: Widgets_for_fieldsListRelationFilter
  }, "field_type_id">

  export type Field_typesOrderByWithAggregationInput = {
    field_type_id?: SortOrder
    name?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: Field_typesCountOrderByAggregateInput
    _avg?: Field_typesAvgOrderByAggregateInput
    _max?: Field_typesMaxOrderByAggregateInput
    _min?: Field_typesMinOrderByAggregateInput
    _sum?: Field_typesSumOrderByAggregateInput
  }

  export type Field_typesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Field_typesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Field_typesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Field_typesScalarWhereWithAggregatesInput>
    field_type_id?: UuidWithAggregatesFilter<"Field_types"> | string
    name?: StringNullableWithAggregatesFilter<"Field_types"> | string | null
    sort?: IntNullableWithAggregatesFilter<"Field_types"> | number | null
    comment?: StringNullableWithAggregatesFilter<"Field_types"> | string | null
    label_replace_by_generated_column?: StringNullableWithAggregatesFilter<"Field_types"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"Field_types"> | boolean | null
  }

  export type MessagesWhereInput = {
    AND?: Enumerable<MessagesWhereInput>
    OR?: Enumerable<MessagesWhereInput>
    NOT?: Enumerable<MessagesWhereInput>
    message_id?: UuidFilter<"Messages"> | string
    label_replace_by_generated_column?: StringNullableFilter<"Messages"> | string | null
    date?: DateTimeNullableFilter<"Messages"> | Date | string | null
    message?: StringNullableFilter<"Messages"> | string | null
    user_messages?: User_messagesListRelationFilter
  }

  export type MessagesOrderByWithRelationInput = {
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    user_messages?: User_messagesOrderByRelationAggregateInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    message_id?: string
    AND?: Enumerable<MessagesWhereInput>
    OR?: Enumerable<MessagesWhereInput>
    NOT?: Enumerable<MessagesWhereInput>
    label_replace_by_generated_column?: StringNullableFilter<"Messages"> | string | null
    date?: DateTimeNullableFilter<"Messages"> | Date | string | null
    message?: StringNullableFilter<"Messages"> | string | null
    user_messages?: User_messagesListRelationFilter
  }, "message_id">

  export type MessagesOrderByWithAggregationInput = {
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessagesScalarWhereWithAggregatesInput>
    message_id?: UuidWithAggregatesFilter<"Messages"> | string
    label_replace_by_generated_column?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"Messages"> | Date | string | null
    message?: StringNullableWithAggregatesFilter<"Messages"> | string | null
  }

  export type Place_levelsWhereInput = {
    AND?: Enumerable<Place_levelsWhereInput>
    OR?: Enumerable<Place_levelsWhereInput>
    NOT?: Enumerable<Place_levelsWhereInput>
    place_level_id?: UuidFilter<"Place_levels"> | string
    account_id?: UuidNullableFilter<"Place_levels"> | string | null
    project_id?: UuidNullableFilter<"Place_levels"> | string | null
    level?: IntNullableFilter<"Place_levels"> | number | null
    name_singular?: StringNullableFilter<"Place_levels"> | string | null
    name_plural?: StringNullableFilter<"Place_levels"> | string | null
    name_short?: StringNullableFilter<"Place_levels"> | string | null
    reports?: BoolNullableFilter<"Place_levels"> | boolean | null
    report_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    actions?: BoolNullableFilter<"Place_levels"> | boolean | null
    action_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    action_reports?: BoolNullableFilter<"Place_levels"> | boolean | null
    checks?: BoolNullableFilter<"Place_levels"> | boolean | null
    check_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    check_taxa?: BoolNullableFilter<"Place_levels"> | boolean | null
    observations?: BoolNullableFilter<"Place_levels"> | boolean | null
    label_replace_by_generated_column?: StringNullableFilter<"Place_levels"> | string | null
    deleted?: BoolNullableFilter<"Place_levels"> | boolean | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    projects?: XOR<ProjectsNullableRelationFilter, ProjectsWhereInput> | null
  }

  export type Place_levelsOrderByWithRelationInput = {
    place_level_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    name_singular?: SortOrderInput | SortOrder
    name_plural?: SortOrderInput | SortOrder
    name_short?: SortOrderInput | SortOrder
    reports?: SortOrderInput | SortOrder
    report_values?: SortOrderInput | SortOrder
    actions?: SortOrderInput | SortOrder
    action_values?: SortOrderInput | SortOrder
    action_reports?: SortOrderInput | SortOrder
    checks?: SortOrderInput | SortOrder
    check_values?: SortOrderInput | SortOrder
    check_taxa?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    accounts?: AccountsOrderByWithRelationInput
    projects?: ProjectsOrderByWithRelationInput
  }

  export type Place_levelsWhereUniqueInput = Prisma.AtLeast<{
    place_level_id?: string
    AND?: Enumerable<Place_levelsWhereInput>
    OR?: Enumerable<Place_levelsWhereInput>
    NOT?: Enumerable<Place_levelsWhereInput>
    account_id?: UuidNullableFilter<"Place_levels"> | string | null
    project_id?: UuidNullableFilter<"Place_levels"> | string | null
    level?: IntNullableFilter<"Place_levels"> | number | null
    name_singular?: StringNullableFilter<"Place_levels"> | string | null
    name_plural?: StringNullableFilter<"Place_levels"> | string | null
    name_short?: StringNullableFilter<"Place_levels"> | string | null
    reports?: BoolNullableFilter<"Place_levels"> | boolean | null
    report_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    actions?: BoolNullableFilter<"Place_levels"> | boolean | null
    action_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    action_reports?: BoolNullableFilter<"Place_levels"> | boolean | null
    checks?: BoolNullableFilter<"Place_levels"> | boolean | null
    check_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    check_taxa?: BoolNullableFilter<"Place_levels"> | boolean | null
    observations?: BoolNullableFilter<"Place_levels"> | boolean | null
    label_replace_by_generated_column?: StringNullableFilter<"Place_levels"> | string | null
    deleted?: BoolNullableFilter<"Place_levels"> | boolean | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    projects?: XOR<ProjectsNullableRelationFilter, ProjectsWhereInput> | null
  }, "place_level_id">

  export type Place_levelsOrderByWithAggregationInput = {
    place_level_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    name_singular?: SortOrderInput | SortOrder
    name_plural?: SortOrderInput | SortOrder
    name_short?: SortOrderInput | SortOrder
    reports?: SortOrderInput | SortOrder
    report_values?: SortOrderInput | SortOrder
    actions?: SortOrderInput | SortOrder
    action_values?: SortOrderInput | SortOrder
    action_reports?: SortOrderInput | SortOrder
    checks?: SortOrderInput | SortOrder
    check_values?: SortOrderInput | SortOrder
    check_taxa?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: Place_levelsCountOrderByAggregateInput
    _avg?: Place_levelsAvgOrderByAggregateInput
    _max?: Place_levelsMaxOrderByAggregateInput
    _min?: Place_levelsMinOrderByAggregateInput
    _sum?: Place_levelsSumOrderByAggregateInput
  }

  export type Place_levelsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Place_levelsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Place_levelsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Place_levelsScalarWhereWithAggregatesInput>
    place_level_id?: UuidWithAggregatesFilter<"Place_levels"> | string
    account_id?: UuidNullableWithAggregatesFilter<"Place_levels"> | string | null
    project_id?: UuidNullableWithAggregatesFilter<"Place_levels"> | string | null
    level?: IntNullableWithAggregatesFilter<"Place_levels"> | number | null
    name_singular?: StringNullableWithAggregatesFilter<"Place_levels"> | string | null
    name_plural?: StringNullableWithAggregatesFilter<"Place_levels"> | string | null
    name_short?: StringNullableWithAggregatesFilter<"Place_levels"> | string | null
    reports?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    report_values?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    actions?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    action_values?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    action_reports?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    checks?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    check_values?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    check_taxa?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    observations?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
    label_replace_by_generated_column?: StringNullableWithAggregatesFilter<"Place_levels"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"Place_levels"> | boolean | null
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
    place_levels?: Place_levelsListRelationFilter
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
    place_levels?: Place_levelsOrderByRelationAggregateInput
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
    place_levels?: Place_levelsListRelationFilter
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

  export type Ui_optionsWhereInput = {
    AND?: Enumerable<Ui_optionsWhereInput>
    OR?: Enumerable<Ui_optionsWhereInput>
    NOT?: Enumerable<Ui_optionsWhereInput>
    user_id?: UuidFilter<"Ui_options"> | string
    account_id?: UuidNullableFilter<"Ui_options"> | string | null
    designing?: BoolNullableFilter<"Ui_options"> | boolean | null
    breadcrumbs_overflowing?: BoolNullableFilter<"Ui_options"> | boolean | null
    navs_overflowing?: BoolNullableFilter<"Ui_options"> | boolean | null
    tabs?: JsonNullableFilter<"Ui_options">
    show_map?: BoolNullableFilter<"Ui_options"> | boolean | null
    map_bounds?: JsonNullableFilter<"Ui_options">
    local_map_show?: JsonNullableFilter<"Ui_options">
    tile_layer_sorter?: StringNullableFilter<"Ui_options"> | string | null
    vector_layer_sorter?: StringNullableFilter<"Ui_options"> | string | null
    editing_place_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    editing_check_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    editing_action_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    label?: StringNullableFilter<"Ui_options"> | string | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type Ui_optionsOrderByWithRelationInput = {
    user_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    designing?: SortOrderInput | SortOrder
    breadcrumbs_overflowing?: SortOrderInput | SortOrder
    navs_overflowing?: SortOrderInput | SortOrder
    tabs?: SortOrderInput | SortOrder
    show_map?: SortOrderInput | SortOrder
    map_bounds?: SortOrderInput | SortOrder
    local_map_show?: SortOrderInput | SortOrder
    tile_layer_sorter?: SortOrderInput | SortOrder
    vector_layer_sorter?: SortOrderInput | SortOrder
    editing_place_geometry?: SortOrderInput | SortOrder
    editing_check_geometry?: SortOrderInput | SortOrder
    editing_action_geometry?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    accounts?: AccountsOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
  }

  export type Ui_optionsWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: Enumerable<Ui_optionsWhereInput>
    OR?: Enumerable<Ui_optionsWhereInput>
    NOT?: Enumerable<Ui_optionsWhereInput>
    account_id?: UuidNullableFilter<"Ui_options"> | string | null
    designing?: BoolNullableFilter<"Ui_options"> | boolean | null
    breadcrumbs_overflowing?: BoolNullableFilter<"Ui_options"> | boolean | null
    navs_overflowing?: BoolNullableFilter<"Ui_options"> | boolean | null
    tabs?: JsonNullableFilter<"Ui_options">
    show_map?: BoolNullableFilter<"Ui_options"> | boolean | null
    map_bounds?: JsonNullableFilter<"Ui_options">
    local_map_show?: JsonNullableFilter<"Ui_options">
    tile_layer_sorter?: StringNullableFilter<"Ui_options"> | string | null
    vector_layer_sorter?: StringNullableFilter<"Ui_options"> | string | null
    editing_place_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    editing_check_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    editing_action_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    label?: StringNullableFilter<"Ui_options"> | string | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "user_id">

  export type Ui_optionsOrderByWithAggregationInput = {
    user_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    designing?: SortOrderInput | SortOrder
    breadcrumbs_overflowing?: SortOrderInput | SortOrder
    navs_overflowing?: SortOrderInput | SortOrder
    tabs?: SortOrderInput | SortOrder
    show_map?: SortOrderInput | SortOrder
    map_bounds?: SortOrderInput | SortOrder
    local_map_show?: SortOrderInput | SortOrder
    tile_layer_sorter?: SortOrderInput | SortOrder
    vector_layer_sorter?: SortOrderInput | SortOrder
    editing_place_geometry?: SortOrderInput | SortOrder
    editing_check_geometry?: SortOrderInput | SortOrder
    editing_action_geometry?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    _count?: Ui_optionsCountOrderByAggregateInput
    _max?: Ui_optionsMaxOrderByAggregateInput
    _min?: Ui_optionsMinOrderByAggregateInput
  }

  export type Ui_optionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Ui_optionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Ui_optionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Ui_optionsScalarWhereWithAggregatesInput>
    user_id?: UuidWithAggregatesFilter<"Ui_options"> | string
    account_id?: UuidNullableWithAggregatesFilter<"Ui_options"> | string | null
    designing?: BoolNullableWithAggregatesFilter<"Ui_options"> | boolean | null
    breadcrumbs_overflowing?: BoolNullableWithAggregatesFilter<"Ui_options"> | boolean | null
    navs_overflowing?: BoolNullableWithAggregatesFilter<"Ui_options"> | boolean | null
    tabs?: JsonNullableWithAggregatesFilter<"Ui_options">
    show_map?: BoolNullableWithAggregatesFilter<"Ui_options"> | boolean | null
    map_bounds?: JsonNullableWithAggregatesFilter<"Ui_options">
    local_map_show?: JsonNullableWithAggregatesFilter<"Ui_options">
    tile_layer_sorter?: StringNullableWithAggregatesFilter<"Ui_options"> | string | null
    vector_layer_sorter?: StringNullableWithAggregatesFilter<"Ui_options"> | string | null
    editing_place_geometry?: UuidNullableWithAggregatesFilter<"Ui_options"> | string | null
    editing_check_geometry?: UuidNullableWithAggregatesFilter<"Ui_options"> | string | null
    editing_action_geometry?: UuidNullableWithAggregatesFilter<"Ui_options"> | string | null
    label?: StringNullableWithAggregatesFilter<"Ui_options"> | string | null
  }

  export type User_messagesWhereInput = {
    AND?: Enumerable<User_messagesWhereInput>
    OR?: Enumerable<User_messagesWhereInput>
    NOT?: Enumerable<User_messagesWhereInput>
    user_message_id?: UuidFilter<"User_messages"> | string
    account_id?: UuidNullableFilter<"User_messages"> | string | null
    user_id?: UuidNullableFilter<"User_messages"> | string | null
    message_id?: UuidNullableFilter<"User_messages"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"User_messages"> | string | null
    read?: BoolNullableFilter<"User_messages"> | boolean | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    messages?: XOR<MessagesNullableRelationFilter, MessagesWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }

  export type User_messagesOrderByWithRelationInput = {
    user_message_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    read?: SortOrderInput | SortOrder
    accounts?: AccountsOrderByWithRelationInput
    messages?: MessagesOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
  }

  export type User_messagesWhereUniqueInput = Prisma.AtLeast<{
    user_message_id?: string
    AND?: Enumerable<User_messagesWhereInput>
    OR?: Enumerable<User_messagesWhereInput>
    NOT?: Enumerable<User_messagesWhereInput>
    account_id?: UuidNullableFilter<"User_messages"> | string | null
    user_id?: UuidNullableFilter<"User_messages"> | string | null
    message_id?: UuidNullableFilter<"User_messages"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"User_messages"> | string | null
    read?: BoolNullableFilter<"User_messages"> | boolean | null
    accounts?: XOR<AccountsNullableRelationFilter, AccountsWhereInput> | null
    messages?: XOR<MessagesNullableRelationFilter, MessagesWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }, "user_message_id">

  export type User_messagesOrderByWithAggregationInput = {
    user_message_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    read?: SortOrderInput | SortOrder
    _count?: User_messagesCountOrderByAggregateInput
    _max?: User_messagesMaxOrderByAggregateInput
    _min?: User_messagesMinOrderByAggregateInput
  }

  export type User_messagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<User_messagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<User_messagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<User_messagesScalarWhereWithAggregatesInput>
    user_message_id?: UuidWithAggregatesFilter<"User_messages"> | string
    account_id?: UuidNullableWithAggregatesFilter<"User_messages"> | string | null
    user_id?: UuidNullableWithAggregatesFilter<"User_messages"> | string | null
    message_id?: UuidNullableWithAggregatesFilter<"User_messages"> | string | null
    label_replace_by_generated_column?: StringNullableWithAggregatesFilter<"User_messages"> | string | null
    read?: BoolNullableWithAggregatesFilter<"User_messages"> | boolean | null
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
    ui_options?: XOR<Ui_optionsNullableRelationFilter, Ui_optionsWhereInput> | null
    user_messages?: User_messagesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrderInput | SortOrder
    auth_id?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    accounts?: AccountsOrderByRelationAggregateInput
    ui_options?: Ui_optionsOrderByWithRelationInput
    user_messages?: User_messagesOrderByRelationAggregateInput
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
    ui_options?: XOR<Ui_optionsNullableRelationFilter, Ui_optionsWhereInput> | null
    user_messages?: User_messagesListRelationFilter
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

  export type Widget_typesWhereInput = {
    AND?: Enumerable<Widget_typesWhereInput>
    OR?: Enumerable<Widget_typesWhereInput>
    NOT?: Enumerable<Widget_typesWhereInput>
    widget_type_id?: UuidFilter<"Widget_types"> | string
    name?: StringNullableFilter<"Widget_types"> | string | null
    needs_list?: BoolNullableFilter<"Widget_types"> | boolean | null
    sort?: IntNullableFilter<"Widget_types"> | number | null
    comment?: StringNullableFilter<"Widget_types"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"Widget_types"> | string | null
    deleted?: BoolNullableFilter<"Widget_types"> | boolean | null
    widgets_for_fields?: Widgets_for_fieldsListRelationFilter
  }

  export type Widget_typesOrderByWithRelationInput = {
    widget_type_id?: SortOrder
    name?: SortOrderInput | SortOrder
    needs_list?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    widgets_for_fields?: Widgets_for_fieldsOrderByRelationAggregateInput
  }

  export type Widget_typesWhereUniqueInput = Prisma.AtLeast<{
    widget_type_id?: string
    AND?: Enumerable<Widget_typesWhereInput>
    OR?: Enumerable<Widget_typesWhereInput>
    NOT?: Enumerable<Widget_typesWhereInput>
    name?: StringNullableFilter<"Widget_types"> | string | null
    needs_list?: BoolNullableFilter<"Widget_types"> | boolean | null
    sort?: IntNullableFilter<"Widget_types"> | number | null
    comment?: StringNullableFilter<"Widget_types"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"Widget_types"> | string | null
    deleted?: BoolNullableFilter<"Widget_types"> | boolean | null
    widgets_for_fields?: Widgets_for_fieldsListRelationFilter
  }, "widget_type_id">

  export type Widget_typesOrderByWithAggregationInput = {
    widget_type_id?: SortOrder
    name?: SortOrderInput | SortOrder
    needs_list?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    label_replace_by_generated_column?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: Widget_typesCountOrderByAggregateInput
    _avg?: Widget_typesAvgOrderByAggregateInput
    _max?: Widget_typesMaxOrderByAggregateInput
    _min?: Widget_typesMinOrderByAggregateInput
    _sum?: Widget_typesSumOrderByAggregateInput
  }

  export type Widget_typesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Widget_typesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Widget_typesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Widget_typesScalarWhereWithAggregatesInput>
    widget_type_id?: UuidWithAggregatesFilter<"Widget_types"> | string
    name?: StringNullableWithAggregatesFilter<"Widget_types"> | string | null
    needs_list?: BoolNullableWithAggregatesFilter<"Widget_types"> | boolean | null
    sort?: IntNullableWithAggregatesFilter<"Widget_types"> | number | null
    comment?: StringNullableWithAggregatesFilter<"Widget_types"> | string | null
    label_replace_by_generated_column?: StringNullableWithAggregatesFilter<"Widget_types"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"Widget_types"> | boolean | null
  }

  export type Widgets_for_fieldsWhereInput = {
    AND?: Enumerable<Widgets_for_fieldsWhereInput>
    OR?: Enumerable<Widgets_for_fieldsWhereInput>
    NOT?: Enumerable<Widgets_for_fieldsWhereInput>
    widget_for_field_id?: UuidFilter<"Widgets_for_fields"> | string
    field_type_id?: UuidNullableFilter<"Widgets_for_fields"> | string | null
    widget_type_id?: UuidNullableFilter<"Widgets_for_fields"> | string | null
    label?: StringNullableFilter<"Widgets_for_fields"> | string | null
    deleted?: BoolNullableFilter<"Widgets_for_fields"> | boolean | null
    field_types?: XOR<Field_typesNullableRelationFilter, Field_typesWhereInput> | null
    widget_types?: XOR<Widget_typesNullableRelationFilter, Widget_typesWhereInput> | null
  }

  export type Widgets_for_fieldsOrderByWithRelationInput = {
    widget_for_field_id?: SortOrder
    field_type_id?: SortOrderInput | SortOrder
    widget_type_id?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    field_types?: Field_typesOrderByWithRelationInput
    widget_types?: Widget_typesOrderByWithRelationInput
  }

  export type Widgets_for_fieldsWhereUniqueInput = Prisma.AtLeast<{
    widget_for_field_id?: string
    AND?: Enumerable<Widgets_for_fieldsWhereInput>
    OR?: Enumerable<Widgets_for_fieldsWhereInput>
    NOT?: Enumerable<Widgets_for_fieldsWhereInput>
    field_type_id?: UuidNullableFilter<"Widgets_for_fields"> | string | null
    widget_type_id?: UuidNullableFilter<"Widgets_for_fields"> | string | null
    label?: StringNullableFilter<"Widgets_for_fields"> | string | null
    deleted?: BoolNullableFilter<"Widgets_for_fields"> | boolean | null
    field_types?: XOR<Field_typesNullableRelationFilter, Field_typesWhereInput> | null
    widget_types?: XOR<Widget_typesNullableRelationFilter, Widget_typesWhereInput> | null
  }, "widget_for_field_id">

  export type Widgets_for_fieldsOrderByWithAggregationInput = {
    widget_for_field_id?: SortOrder
    field_type_id?: SortOrderInput | SortOrder
    widget_type_id?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: Widgets_for_fieldsCountOrderByAggregateInput
    _max?: Widgets_for_fieldsMaxOrderByAggregateInput
    _min?: Widgets_for_fieldsMinOrderByAggregateInput
  }

  export type Widgets_for_fieldsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Widgets_for_fieldsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Widgets_for_fieldsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Widgets_for_fieldsScalarWhereWithAggregatesInput>
    widget_for_field_id?: UuidWithAggregatesFilter<"Widgets_for_fields"> | string
    field_type_id?: UuidNullableWithAggregatesFilter<"Widgets_for_fields"> | string | null
    widget_type_id?: UuidNullableWithAggregatesFilter<"Widgets_for_fields"> | string | null
    label?: StringNullableWithAggregatesFilter<"Widgets_for_fields"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"Widgets_for_fields"> | boolean | null
  }

  export type AccountsCreateInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    users?: UsersCreateNestedOneWithoutAccountsInput
    place_levels?: Place_levelsCreateNestedManyWithoutAccountsInput
    projects?: ProjectsCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    place_levels?: Place_levelsUncheckedCreateNestedManyWithoutAccountsInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsUncheckedCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneWithoutAccountsNestedInput
    place_levels?: Place_levelsUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    place_levels?: Place_levelsUncheckedUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutAccountsNestedInput
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

  export type Field_typesCreateInput = {
    field_type_id: string
    name?: string | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    widgets_for_fields?: Widgets_for_fieldsCreateNestedManyWithoutField_typesInput
  }

  export type Field_typesUncheckedCreateInput = {
    field_type_id: string
    name?: string | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    widgets_for_fields?: Widgets_for_fieldsUncheckedCreateNestedManyWithoutField_typesInput
  }

  export type Field_typesUpdateInput = {
    field_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    widgets_for_fields?: Widgets_for_fieldsUpdateManyWithoutField_typesNestedInput
  }

  export type Field_typesUncheckedUpdateInput = {
    field_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    widgets_for_fields?: Widgets_for_fieldsUncheckedUpdateManyWithoutField_typesNestedInput
  }

  export type Field_typesCreateManyInput = {
    field_type_id: string
    name?: string | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Field_typesUpdateManyMutationInput = {
    field_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Field_typesUncheckedUpdateManyInput = {
    field_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MessagesCreateInput = {
    message_id: string
    label_replace_by_generated_column?: string | null
    date?: Date | string | null
    message?: string | null
    user_messages?: User_messagesCreateNestedManyWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    message_id: string
    label_replace_by_generated_column?: string | null
    date?: Date | string | null
    message?: string | null
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessagesUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    user_messages?: User_messagesUpdateManyWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    user_messages?: User_messagesUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessagesCreateManyInput = {
    message_id: string
    label_replace_by_generated_column?: string | null
    date?: Date | string | null
    message?: string | null
  }

  export type MessagesUpdateManyMutationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessagesUncheckedUpdateManyInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Place_levelsCreateInput = {
    place_level_id: string
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsCreateNestedOneWithoutPlace_levelsInput
    projects?: ProjectsCreateNestedOneWithoutPlace_levelsInput
  }

  export type Place_levelsUncheckedCreateInput = {
    place_level_id: string
    account_id?: string | null
    project_id?: string | null
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Place_levelsUpdateInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateOneWithoutPlace_levelsNestedInput
    projects?: ProjectsUpdateOneWithoutPlace_levelsNestedInput
  }

  export type Place_levelsUncheckedUpdateInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Place_levelsCreateManyInput = {
    place_level_id: string
    account_id?: string | null
    project_id?: string | null
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Place_levelsUpdateManyMutationInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Place_levelsUncheckedUpdateManyInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    place_levels?: Place_levelsCreateNestedManyWithoutProjectsInput
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
    place_levels?: Place_levelsUncheckedCreateNestedManyWithoutProjectsInput
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
    place_levels?: Place_levelsUpdateManyWithoutProjectsNestedInput
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
    place_levels?: Place_levelsUncheckedUpdateManyWithoutProjectsNestedInput
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

  export type Ui_optionsCreateInput = {
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
    accounts?: AccountsCreateNestedOneWithoutUi_optionsInput
    users: UsersCreateNestedOneWithoutUi_optionsInput
  }

  export type Ui_optionsUncheckedCreateInput = {
    user_id: string
    account_id?: string | null
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
  }

  export type Ui_optionsUpdateInput = {
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountsUpdateOneWithoutUi_optionsNestedInput
    users?: UsersUpdateOneRequiredWithoutUi_optionsNestedInput
  }

  export type Ui_optionsUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ui_optionsCreateManyInput = {
    user_id: string
    account_id?: string | null
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
  }

  export type Ui_optionsUpdateManyMutationInput = {
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ui_optionsUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_messagesCreateInput = {
    user_message_id: string
    label_replace_by_generated_column?: string | null
    read?: boolean | null
    accounts?: AccountsCreateNestedOneWithoutUser_messagesInput
    messages?: MessagesCreateNestedOneWithoutUser_messagesInput
    users?: UsersCreateNestedOneWithoutUser_messagesInput
  }

  export type User_messagesUncheckedCreateInput = {
    user_message_id: string
    account_id?: string | null
    user_id?: string | null
    message_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type User_messagesUpdateInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateOneWithoutUser_messagesNestedInput
    messages?: MessagesUpdateOneWithoutUser_messagesNestedInput
    users?: UsersUpdateOneWithoutUser_messagesNestedInput
  }

  export type User_messagesUncheckedUpdateInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type User_messagesCreateManyInput = {
    user_message_id: string
    account_id?: string | null
    user_id?: string | null
    message_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type User_messagesUpdateManyMutationInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type User_messagesUncheckedUpdateManyInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsersCreateInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsCreateNestedManyWithoutUsersInput
    ui_options?: Ui_optionsCreateNestedOneWithoutUsersInput
    user_messages?: User_messagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsUncheckedCreateNestedManyWithoutUsersInput
    ui_options?: Ui_optionsUncheckedCreateNestedOneWithoutUsersInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateManyWithoutUsersNestedInput
    ui_options?: Ui_optionsUpdateOneWithoutUsersNestedInput
    user_messages?: User_messagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUncheckedUpdateManyWithoutUsersNestedInput
    ui_options?: Ui_optionsUncheckedUpdateOneWithoutUsersNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutUsersNestedInput
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

  export type Widget_typesCreateInput = {
    widget_type_id: string
    name?: string | null
    needs_list?: boolean | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    widgets_for_fields?: Widgets_for_fieldsCreateNestedManyWithoutWidget_typesInput
  }

  export type Widget_typesUncheckedCreateInput = {
    widget_type_id: string
    name?: string | null
    needs_list?: boolean | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    widgets_for_fields?: Widgets_for_fieldsUncheckedCreateNestedManyWithoutWidget_typesInput
  }

  export type Widget_typesUpdateInput = {
    widget_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needs_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    widgets_for_fields?: Widgets_for_fieldsUpdateManyWithoutWidget_typesNestedInput
  }

  export type Widget_typesUncheckedUpdateInput = {
    widget_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needs_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    widgets_for_fields?: Widgets_for_fieldsUncheckedUpdateManyWithoutWidget_typesNestedInput
  }

  export type Widget_typesCreateManyInput = {
    widget_type_id: string
    name?: string | null
    needs_list?: boolean | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Widget_typesUpdateManyMutationInput = {
    widget_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needs_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widget_typesUncheckedUpdateManyInput = {
    widget_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needs_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widgets_for_fieldsCreateInput = {
    widget_for_field_id: string
    label?: string | null
    deleted?: boolean | null
    field_types?: Field_typesCreateNestedOneWithoutWidgets_for_fieldsInput
    widget_types?: Widget_typesCreateNestedOneWithoutWidgets_for_fieldsInput
  }

  export type Widgets_for_fieldsUncheckedCreateInput = {
    widget_for_field_id: string
    field_type_id?: string | null
    widget_type_id?: string | null
    label?: string | null
    deleted?: boolean | null
  }

  export type Widgets_for_fieldsUpdateInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    field_types?: Field_typesUpdateOneWithoutWidgets_for_fieldsNestedInput
    widget_types?: Widget_typesUpdateOneWithoutWidgets_for_fieldsNestedInput
  }

  export type Widgets_for_fieldsUncheckedUpdateInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    field_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    widget_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widgets_for_fieldsCreateManyInput = {
    widget_for_field_id: string
    field_type_id?: string | null
    widget_type_id?: string | null
    label?: string | null
    deleted?: boolean | null
  }

  export type Widgets_for_fieldsUpdateManyMutationInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widgets_for_fieldsUncheckedUpdateManyInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    field_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    widget_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type Place_levelsListRelationFilter = {
    every?: Place_levelsWhereInput
    some?: Place_levelsWhereInput
    none?: Place_levelsWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type Ui_optionsListRelationFilter = {
    every?: Ui_optionsWhereInput
    some?: Ui_optionsWhereInput
    none?: Ui_optionsWhereInput
  }

  export type User_messagesListRelationFilter = {
    every?: User_messagesWhereInput
    some?: User_messagesWhereInput
    none?: User_messagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Place_levelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Ui_optionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_messagesOrderByRelationAggregateInput = {
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Widgets_for_fieldsListRelationFilter = {
    every?: Widgets_for_fieldsWhereInput
    some?: Widgets_for_fieldsWhereInput
    none?: Widgets_for_fieldsWhereInput
  }

  export type Widgets_for_fieldsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Field_typesCountOrderByAggregateInput = {
    field_type_id?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    comment?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Field_typesAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type Field_typesMaxOrderByAggregateInput = {
    field_type_id?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    comment?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Field_typesMinOrderByAggregateInput = {
    field_type_id?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    comment?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Field_typesSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MessagesCountOrderByAggregateInput = {
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    date?: SortOrder
    message?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    date?: SortOrder
    message?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    date?: SortOrder
    message?: SortOrder
  }

  export type AccountsNullableRelationFilter = {
    is?: AccountsWhereInput | null
    isNot?: AccountsWhereInput | null
  }

  export type ProjectsNullableRelationFilter = {
    is?: ProjectsWhereInput | null
    isNot?: ProjectsWhereInput | null
  }

  export type Place_levelsCountOrderByAggregateInput = {
    place_level_id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    level?: SortOrder
    name_singular?: SortOrder
    name_plural?: SortOrder
    name_short?: SortOrder
    reports?: SortOrder
    report_values?: SortOrder
    actions?: SortOrder
    action_values?: SortOrder
    action_reports?: SortOrder
    checks?: SortOrder
    check_values?: SortOrder
    check_taxa?: SortOrder
    observations?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Place_levelsAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type Place_levelsMaxOrderByAggregateInput = {
    place_level_id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    level?: SortOrder
    name_singular?: SortOrder
    name_plural?: SortOrder
    name_short?: SortOrder
    reports?: SortOrder
    report_values?: SortOrder
    actions?: SortOrder
    action_values?: SortOrder
    action_reports?: SortOrder
    checks?: SortOrder
    check_values?: SortOrder
    check_taxa?: SortOrder
    observations?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Place_levelsMinOrderByAggregateInput = {
    place_level_id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    level?: SortOrder
    name_singular?: SortOrder
    name_plural?: SortOrder
    name_short?: SortOrder
    reports?: SortOrder
    report_values?: SortOrder
    actions?: SortOrder
    action_values?: SortOrder
    action_reports?: SortOrder
    checks?: SortOrder
    check_values?: SortOrder
    check_taxa?: SortOrder
    observations?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Place_levelsSumOrderByAggregateInput = {
    level?: SortOrder
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

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type Ui_optionsCountOrderByAggregateInput = {
    user_id?: SortOrder
    account_id?: SortOrder
    designing?: SortOrder
    breadcrumbs_overflowing?: SortOrder
    navs_overflowing?: SortOrder
    tabs?: SortOrder
    show_map?: SortOrder
    map_bounds?: SortOrder
    local_map_show?: SortOrder
    tile_layer_sorter?: SortOrder
    vector_layer_sorter?: SortOrder
    editing_place_geometry?: SortOrder
    editing_check_geometry?: SortOrder
    editing_action_geometry?: SortOrder
    label?: SortOrder
  }

  export type Ui_optionsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    account_id?: SortOrder
    designing?: SortOrder
    breadcrumbs_overflowing?: SortOrder
    navs_overflowing?: SortOrder
    show_map?: SortOrder
    tile_layer_sorter?: SortOrder
    vector_layer_sorter?: SortOrder
    editing_place_geometry?: SortOrder
    editing_check_geometry?: SortOrder
    editing_action_geometry?: SortOrder
    label?: SortOrder
  }

  export type Ui_optionsMinOrderByAggregateInput = {
    user_id?: SortOrder
    account_id?: SortOrder
    designing?: SortOrder
    breadcrumbs_overflowing?: SortOrder
    navs_overflowing?: SortOrder
    show_map?: SortOrder
    tile_layer_sorter?: SortOrder
    vector_layer_sorter?: SortOrder
    editing_place_geometry?: SortOrder
    editing_check_geometry?: SortOrder
    editing_action_geometry?: SortOrder
    label?: SortOrder
  }

  export type MessagesNullableRelationFilter = {
    is?: MessagesWhereInput | null
    isNot?: MessagesWhereInput | null
  }

  export type User_messagesCountOrderByAggregateInput = {
    user_message_id?: SortOrder
    account_id?: SortOrder
    user_id?: SortOrder
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    read?: SortOrder
  }

  export type User_messagesMaxOrderByAggregateInput = {
    user_message_id?: SortOrder
    account_id?: SortOrder
    user_id?: SortOrder
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    read?: SortOrder
  }

  export type User_messagesMinOrderByAggregateInput = {
    user_message_id?: SortOrder
    account_id?: SortOrder
    user_id?: SortOrder
    message_id?: SortOrder
    label_replace_by_generated_column?: SortOrder
    read?: SortOrder
  }

  export type AccountsListRelationFilter = {
    every?: AccountsWhereInput
    some?: AccountsWhereInput
    none?: AccountsWhereInput
  }

  export type Ui_optionsNullableRelationFilter = {
    is?: Ui_optionsWhereInput | null
    isNot?: Ui_optionsWhereInput | null
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

  export type Widget_typesCountOrderByAggregateInput = {
    widget_type_id?: SortOrder
    name?: SortOrder
    needs_list?: SortOrder
    sort?: SortOrder
    comment?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Widget_typesAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type Widget_typesMaxOrderByAggregateInput = {
    widget_type_id?: SortOrder
    name?: SortOrder
    needs_list?: SortOrder
    sort?: SortOrder
    comment?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Widget_typesMinOrderByAggregateInput = {
    widget_type_id?: SortOrder
    name?: SortOrder
    needs_list?: SortOrder
    sort?: SortOrder
    comment?: SortOrder
    label_replace_by_generated_column?: SortOrder
    deleted?: SortOrder
  }

  export type Widget_typesSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type Field_typesNullableRelationFilter = {
    is?: Field_typesWhereInput | null
    isNot?: Field_typesWhereInput | null
  }

  export type Widget_typesNullableRelationFilter = {
    is?: Widget_typesWhereInput | null
    isNot?: Widget_typesWhereInput | null
  }

  export type Widgets_for_fieldsCountOrderByAggregateInput = {
    widget_for_field_id?: SortOrder
    field_type_id?: SortOrder
    widget_type_id?: SortOrder
    label?: SortOrder
    deleted?: SortOrder
  }

  export type Widgets_for_fieldsMaxOrderByAggregateInput = {
    widget_for_field_id?: SortOrder
    field_type_id?: SortOrder
    widget_type_id?: SortOrder
    label?: SortOrder
    deleted?: SortOrder
  }

  export type Widgets_for_fieldsMinOrderByAggregateInput = {
    widget_for_field_id?: SortOrder
    field_type_id?: SortOrder
    widget_type_id?: SortOrder
    label?: SortOrder
    deleted?: SortOrder
  }

  export type UsersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    connect?: UsersWhereUniqueInput
  }

  export type Place_levelsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutAccountsInput>, Enumerable<Place_levelsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutAccountsInput>
    createMany?: Place_levelsCreateManyAccountsInputEnvelope
    connect?: Enumerable<Place_levelsWhereUniqueInput>
  }

  export type ProjectsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutAccountsInput>, Enumerable<ProjectsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutAccountsInput>
    createMany?: ProjectsCreateManyAccountsInputEnvelope
    connect?: Enumerable<ProjectsWhereUniqueInput>
  }

  export type Ui_optionsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<Ui_optionsCreateWithoutAccountsInput>, Enumerable<Ui_optionsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Ui_optionsCreateOrConnectWithoutAccountsInput>
    createMany?: Ui_optionsCreateManyAccountsInputEnvelope
    connect?: Enumerable<Ui_optionsWhereUniqueInput>
  }

  export type User_messagesCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutAccountsInput>, Enumerable<User_messagesUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutAccountsInput>
    createMany?: User_messagesCreateManyAccountsInputEnvelope
    connect?: Enumerable<User_messagesWhereUniqueInput>
  }

  export type Place_levelsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutAccountsInput>, Enumerable<Place_levelsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutAccountsInput>
    createMany?: Place_levelsCreateManyAccountsInputEnvelope
    connect?: Enumerable<Place_levelsWhereUniqueInput>
  }

  export type ProjectsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutAccountsInput>, Enumerable<ProjectsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutAccountsInput>
    createMany?: ProjectsCreateManyAccountsInputEnvelope
    connect?: Enumerable<ProjectsWhereUniqueInput>
  }

  export type Ui_optionsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<Ui_optionsCreateWithoutAccountsInput>, Enumerable<Ui_optionsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Ui_optionsCreateOrConnectWithoutAccountsInput>
    createMany?: Ui_optionsCreateManyAccountsInputEnvelope
    connect?: Enumerable<Ui_optionsWhereUniqueInput>
  }

  export type User_messagesUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutAccountsInput>, Enumerable<User_messagesUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutAccountsInput>
    createMany?: User_messagesCreateManyAccountsInputEnvelope
    connect?: Enumerable<User_messagesWhereUniqueInput>
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

  export type Place_levelsUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutAccountsInput>, Enumerable<Place_levelsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<Place_levelsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: Place_levelsCreateManyAccountsInputEnvelope
    set?: Enumerable<Place_levelsWhereUniqueInput>
    disconnect?: Enumerable<Place_levelsWhereUniqueInput>
    delete?: Enumerable<Place_levelsWhereUniqueInput>
    connect?: Enumerable<Place_levelsWhereUniqueInput>
    update?: Enumerable<Place_levelsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<Place_levelsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<Place_levelsScalarWhereInput>
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

  export type Ui_optionsUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<Ui_optionsCreateWithoutAccountsInput>, Enumerable<Ui_optionsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Ui_optionsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<Ui_optionsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: Ui_optionsCreateManyAccountsInputEnvelope
    set?: Enumerable<Ui_optionsWhereUniqueInput>
    disconnect?: Enumerable<Ui_optionsWhereUniqueInput>
    delete?: Enumerable<Ui_optionsWhereUniqueInput>
    connect?: Enumerable<Ui_optionsWhereUniqueInput>
    update?: Enumerable<Ui_optionsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<Ui_optionsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<Ui_optionsScalarWhereInput>
  }

  export type User_messagesUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutAccountsInput>, Enumerable<User_messagesUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<User_messagesUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: User_messagesCreateManyAccountsInputEnvelope
    set?: Enumerable<User_messagesWhereUniqueInput>
    disconnect?: Enumerable<User_messagesWhereUniqueInput>
    delete?: Enumerable<User_messagesWhereUniqueInput>
    connect?: Enumerable<User_messagesWhereUniqueInput>
    update?: Enumerable<User_messagesUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<User_messagesUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<User_messagesScalarWhereInput>
  }

  export type Place_levelsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutAccountsInput>, Enumerable<Place_levelsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<Place_levelsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: Place_levelsCreateManyAccountsInputEnvelope
    set?: Enumerable<Place_levelsWhereUniqueInput>
    disconnect?: Enumerable<Place_levelsWhereUniqueInput>
    delete?: Enumerable<Place_levelsWhereUniqueInput>
    connect?: Enumerable<Place_levelsWhereUniqueInput>
    update?: Enumerable<Place_levelsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<Place_levelsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<Place_levelsScalarWhereInput>
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

  export type Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<Ui_optionsCreateWithoutAccountsInput>, Enumerable<Ui_optionsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<Ui_optionsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<Ui_optionsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: Ui_optionsCreateManyAccountsInputEnvelope
    set?: Enumerable<Ui_optionsWhereUniqueInput>
    disconnect?: Enumerable<Ui_optionsWhereUniqueInput>
    delete?: Enumerable<Ui_optionsWhereUniqueInput>
    connect?: Enumerable<Ui_optionsWhereUniqueInput>
    update?: Enumerable<Ui_optionsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<Ui_optionsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<Ui_optionsScalarWhereInput>
  }

  export type User_messagesUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutAccountsInput>, Enumerable<User_messagesUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<User_messagesUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: User_messagesCreateManyAccountsInputEnvelope
    set?: Enumerable<User_messagesWhereUniqueInput>
    disconnect?: Enumerable<User_messagesWhereUniqueInput>
    delete?: Enumerable<User_messagesWhereUniqueInput>
    connect?: Enumerable<User_messagesWhereUniqueInput>
    update?: Enumerable<User_messagesUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<User_messagesUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<User_messagesScalarWhereInput>
  }

  export type Widgets_for_fieldsCreateNestedManyWithoutField_typesInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutField_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutField_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutField_typesInput>
    createMany?: Widgets_for_fieldsCreateManyField_typesInputEnvelope
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
  }

  export type Widgets_for_fieldsUncheckedCreateNestedManyWithoutField_typesInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutField_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutField_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutField_typesInput>
    createMany?: Widgets_for_fieldsCreateManyField_typesInputEnvelope
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Widgets_for_fieldsUpdateManyWithoutField_typesNestedInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutField_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutField_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutField_typesInput>
    upsert?: Enumerable<Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInput>
    createMany?: Widgets_for_fieldsCreateManyField_typesInputEnvelope
    set?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    disconnect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    delete?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    update?: Enumerable<Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInput>
    updateMany?: Enumerable<Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInput>
    deleteMany?: Enumerable<Widgets_for_fieldsScalarWhereInput>
  }

  export type Widgets_for_fieldsUncheckedUpdateManyWithoutField_typesNestedInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutField_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutField_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutField_typesInput>
    upsert?: Enumerable<Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInput>
    createMany?: Widgets_for_fieldsCreateManyField_typesInputEnvelope
    set?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    disconnect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    delete?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    update?: Enumerable<Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInput>
    updateMany?: Enumerable<Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInput>
    deleteMany?: Enumerable<Widgets_for_fieldsScalarWhereInput>
  }

  export type User_messagesCreateNestedManyWithoutMessagesInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutMessagesInput>, Enumerable<User_messagesUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutMessagesInput>
    createMany?: User_messagesCreateManyMessagesInputEnvelope
    connect?: Enumerable<User_messagesWhereUniqueInput>
  }

  export type User_messagesUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutMessagesInput>, Enumerable<User_messagesUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutMessagesInput>
    createMany?: User_messagesCreateManyMessagesInputEnvelope
    connect?: Enumerable<User_messagesWhereUniqueInput>
  }

  export type User_messagesUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutMessagesInput>, Enumerable<User_messagesUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutMessagesInput>
    upsert?: Enumerable<User_messagesUpsertWithWhereUniqueWithoutMessagesInput>
    createMany?: User_messagesCreateManyMessagesInputEnvelope
    set?: Enumerable<User_messagesWhereUniqueInput>
    disconnect?: Enumerable<User_messagesWhereUniqueInput>
    delete?: Enumerable<User_messagesWhereUniqueInput>
    connect?: Enumerable<User_messagesWhereUniqueInput>
    update?: Enumerable<User_messagesUpdateWithWhereUniqueWithoutMessagesInput>
    updateMany?: Enumerable<User_messagesUpdateManyWithWhereWithoutMessagesInput>
    deleteMany?: Enumerable<User_messagesScalarWhereInput>
  }

  export type User_messagesUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutMessagesInput>, Enumerable<User_messagesUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutMessagesInput>
    upsert?: Enumerable<User_messagesUpsertWithWhereUniqueWithoutMessagesInput>
    createMany?: User_messagesCreateManyMessagesInputEnvelope
    set?: Enumerable<User_messagesWhereUniqueInput>
    disconnect?: Enumerable<User_messagesWhereUniqueInput>
    delete?: Enumerable<User_messagesWhereUniqueInput>
    connect?: Enumerable<User_messagesWhereUniqueInput>
    update?: Enumerable<User_messagesUpdateWithWhereUniqueWithoutMessagesInput>
    updateMany?: Enumerable<User_messagesUpdateManyWithWhereWithoutMessagesInput>
    deleteMany?: Enumerable<User_messagesScalarWhereInput>
  }

  export type AccountsCreateNestedOneWithoutPlace_levelsInput = {
    create?: XOR<AccountsCreateWithoutPlace_levelsInput, AccountsUncheckedCreateWithoutPlace_levelsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutPlace_levelsInput
    connect?: AccountsWhereUniqueInput
  }

  export type ProjectsCreateNestedOneWithoutPlace_levelsInput = {
    create?: XOR<ProjectsCreateWithoutPlace_levelsInput, ProjectsUncheckedCreateWithoutPlace_levelsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutPlace_levelsInput
    connect?: ProjectsWhereUniqueInput
  }

  export type AccountsUpdateOneWithoutPlace_levelsNestedInput = {
    create?: XOR<AccountsCreateWithoutPlace_levelsInput, AccountsUncheckedCreateWithoutPlace_levelsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutPlace_levelsInput
    upsert?: AccountsUpsertWithoutPlace_levelsInput
    disconnect?: AccountsWhereInput | boolean
    delete?: AccountsWhereInput | boolean
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutPlace_levelsInput, AccountsUpdateWithoutPlace_levelsInput>, AccountsUncheckedUpdateWithoutPlace_levelsInput>
  }

  export type ProjectsUpdateOneWithoutPlace_levelsNestedInput = {
    create?: XOR<ProjectsCreateWithoutPlace_levelsInput, ProjectsUncheckedCreateWithoutPlace_levelsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutPlace_levelsInput
    upsert?: ProjectsUpsertWithoutPlace_levelsInput
    disconnect?: ProjectsWhereInput | boolean
    delete?: ProjectsWhereInput | boolean
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutPlace_levelsInput, ProjectsUpdateWithoutPlace_levelsInput>, ProjectsUncheckedUpdateWithoutPlace_levelsInput>
  }

  export type Place_levelsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutProjectsInput>, Enumerable<Place_levelsUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutProjectsInput>
    createMany?: Place_levelsCreateManyProjectsInputEnvelope
    connect?: Enumerable<Place_levelsWhereUniqueInput>
  }

  export type AccountsCreateNestedOneWithoutProjectsInput = {
    create?: XOR<AccountsCreateWithoutProjectsInput, AccountsUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutProjectsInput
    connect?: AccountsWhereUniqueInput
  }

  export type Place_levelsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutProjectsInput>, Enumerable<Place_levelsUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutProjectsInput>
    createMany?: Place_levelsCreateManyProjectsInputEnvelope
    connect?: Enumerable<Place_levelsWhereUniqueInput>
  }

  export type NullableEnumproject_typeFieldUpdateOperationsInput = {
    set?: project_type | null
  }

  export type Place_levelsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutProjectsInput>, Enumerable<Place_levelsUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<Place_levelsUpsertWithWhereUniqueWithoutProjectsInput>
    createMany?: Place_levelsCreateManyProjectsInputEnvelope
    set?: Enumerable<Place_levelsWhereUniqueInput>
    disconnect?: Enumerable<Place_levelsWhereUniqueInput>
    delete?: Enumerable<Place_levelsWhereUniqueInput>
    connect?: Enumerable<Place_levelsWhereUniqueInput>
    update?: Enumerable<Place_levelsUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<Place_levelsUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<Place_levelsScalarWhereInput>
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

  export type Place_levelsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<Enumerable<Place_levelsCreateWithoutProjectsInput>, Enumerable<Place_levelsUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<Place_levelsCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<Place_levelsUpsertWithWhereUniqueWithoutProjectsInput>
    createMany?: Place_levelsCreateManyProjectsInputEnvelope
    set?: Enumerable<Place_levelsWhereUniqueInput>
    disconnect?: Enumerable<Place_levelsWhereUniqueInput>
    delete?: Enumerable<Place_levelsWhereUniqueInput>
    connect?: Enumerable<Place_levelsWhereUniqueInput>
    update?: Enumerable<Place_levelsUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<Place_levelsUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<Place_levelsScalarWhereInput>
  }

  export type AccountsCreateNestedOneWithoutUi_optionsInput = {
    create?: XOR<AccountsCreateWithoutUi_optionsInput, AccountsUncheckedCreateWithoutUi_optionsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutUi_optionsInput
    connect?: AccountsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUi_optionsInput = {
    create?: XOR<UsersCreateWithoutUi_optionsInput, UsersUncheckedCreateWithoutUi_optionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUi_optionsInput
    connect?: UsersWhereUniqueInput
  }

  export type AccountsUpdateOneWithoutUi_optionsNestedInput = {
    create?: XOR<AccountsCreateWithoutUi_optionsInput, AccountsUncheckedCreateWithoutUi_optionsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutUi_optionsInput
    upsert?: AccountsUpsertWithoutUi_optionsInput
    disconnect?: AccountsWhereInput | boolean
    delete?: AccountsWhereInput | boolean
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutUi_optionsInput, AccountsUpdateWithoutUi_optionsInput>, AccountsUncheckedUpdateWithoutUi_optionsInput>
  }

  export type UsersUpdateOneRequiredWithoutUi_optionsNestedInput = {
    create?: XOR<UsersCreateWithoutUi_optionsInput, UsersUncheckedCreateWithoutUi_optionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUi_optionsInput
    upsert?: UsersUpsertWithoutUi_optionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUi_optionsInput, UsersUpdateWithoutUi_optionsInput>, UsersUncheckedUpdateWithoutUi_optionsInput>
  }

  export type AccountsCreateNestedOneWithoutUser_messagesInput = {
    create?: XOR<AccountsCreateWithoutUser_messagesInput, AccountsUncheckedCreateWithoutUser_messagesInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutUser_messagesInput
    connect?: AccountsWhereUniqueInput
  }

  export type MessagesCreateNestedOneWithoutUser_messagesInput = {
    create?: XOR<MessagesCreateWithoutUser_messagesInput, MessagesUncheckedCreateWithoutUser_messagesInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutUser_messagesInput
    connect?: MessagesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUser_messagesInput = {
    create?: XOR<UsersCreateWithoutUser_messagesInput, UsersUncheckedCreateWithoutUser_messagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_messagesInput
    connect?: UsersWhereUniqueInput
  }

  export type AccountsUpdateOneWithoutUser_messagesNestedInput = {
    create?: XOR<AccountsCreateWithoutUser_messagesInput, AccountsUncheckedCreateWithoutUser_messagesInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutUser_messagesInput
    upsert?: AccountsUpsertWithoutUser_messagesInput
    disconnect?: AccountsWhereInput | boolean
    delete?: AccountsWhereInput | boolean
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutUser_messagesInput, AccountsUpdateWithoutUser_messagesInput>, AccountsUncheckedUpdateWithoutUser_messagesInput>
  }

  export type MessagesUpdateOneWithoutUser_messagesNestedInput = {
    create?: XOR<MessagesCreateWithoutUser_messagesInput, MessagesUncheckedCreateWithoutUser_messagesInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutUser_messagesInput
    upsert?: MessagesUpsertWithoutUser_messagesInput
    disconnect?: MessagesWhereInput | boolean
    delete?: MessagesWhereInput | boolean
    connect?: MessagesWhereUniqueInput
    update?: XOR<XOR<MessagesUpdateToOneWithWhereWithoutUser_messagesInput, MessagesUpdateWithoutUser_messagesInput>, MessagesUncheckedUpdateWithoutUser_messagesInput>
  }

  export type UsersUpdateOneWithoutUser_messagesNestedInput = {
    create?: XOR<UsersCreateWithoutUser_messagesInput, UsersUncheckedCreateWithoutUser_messagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_messagesInput
    upsert?: UsersUpsertWithoutUser_messagesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser_messagesInput, UsersUpdateWithoutUser_messagesInput>, UsersUncheckedUpdateWithoutUser_messagesInput>
  }

  export type AccountsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountsCreateWithoutUsersInput>, Enumerable<AccountsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountsCreateOrConnectWithoutUsersInput>
    createMany?: AccountsCreateManyUsersInputEnvelope
    connect?: Enumerable<AccountsWhereUniqueInput>
  }

  export type Ui_optionsCreateNestedOneWithoutUsersInput = {
    create?: XOR<Ui_optionsCreateWithoutUsersInput, Ui_optionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: Ui_optionsCreateOrConnectWithoutUsersInput
    connect?: Ui_optionsWhereUniqueInput
  }

  export type User_messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutUsersInput>, Enumerable<User_messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutUsersInput>
    createMany?: User_messagesCreateManyUsersInputEnvelope
    connect?: Enumerable<User_messagesWhereUniqueInput>
  }

  export type AccountsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountsCreateWithoutUsersInput>, Enumerable<AccountsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountsCreateOrConnectWithoutUsersInput>
    createMany?: AccountsCreateManyUsersInputEnvelope
    connect?: Enumerable<AccountsWhereUniqueInput>
  }

  export type Ui_optionsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<Ui_optionsCreateWithoutUsersInput, Ui_optionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: Ui_optionsCreateOrConnectWithoutUsersInput
    connect?: Ui_optionsWhereUniqueInput
  }

  export type User_messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutUsersInput>, Enumerable<User_messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutUsersInput>
    createMany?: User_messagesCreateManyUsersInputEnvelope
    connect?: Enumerable<User_messagesWhereUniqueInput>
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

  export type Ui_optionsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<Ui_optionsCreateWithoutUsersInput, Ui_optionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: Ui_optionsCreateOrConnectWithoutUsersInput
    upsert?: Ui_optionsUpsertWithoutUsersInput
    disconnect?: Ui_optionsWhereInput | boolean
    delete?: Ui_optionsWhereInput | boolean
    connect?: Ui_optionsWhereUniqueInput
    update?: XOR<XOR<Ui_optionsUpdateToOneWithWhereWithoutUsersInput, Ui_optionsUpdateWithoutUsersInput>, Ui_optionsUncheckedUpdateWithoutUsersInput>
  }

  export type User_messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutUsersInput>, Enumerable<User_messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<User_messagesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: User_messagesCreateManyUsersInputEnvelope
    set?: Enumerable<User_messagesWhereUniqueInput>
    disconnect?: Enumerable<User_messagesWhereUniqueInput>
    delete?: Enumerable<User_messagesWhereUniqueInput>
    connect?: Enumerable<User_messagesWhereUniqueInput>
    update?: Enumerable<User_messagesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<User_messagesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<User_messagesScalarWhereInput>
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

  export type Ui_optionsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<Ui_optionsCreateWithoutUsersInput, Ui_optionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: Ui_optionsCreateOrConnectWithoutUsersInput
    upsert?: Ui_optionsUpsertWithoutUsersInput
    disconnect?: Ui_optionsWhereInput | boolean
    delete?: Ui_optionsWhereInput | boolean
    connect?: Ui_optionsWhereUniqueInput
    update?: XOR<XOR<Ui_optionsUpdateToOneWithWhereWithoutUsersInput, Ui_optionsUpdateWithoutUsersInput>, Ui_optionsUncheckedUpdateWithoutUsersInput>
  }

  export type User_messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<User_messagesCreateWithoutUsersInput>, Enumerable<User_messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<User_messagesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<User_messagesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: User_messagesCreateManyUsersInputEnvelope
    set?: Enumerable<User_messagesWhereUniqueInput>
    disconnect?: Enumerable<User_messagesWhereUniqueInput>
    delete?: Enumerable<User_messagesWhereUniqueInput>
    connect?: Enumerable<User_messagesWhereUniqueInput>
    update?: Enumerable<User_messagesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<User_messagesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<User_messagesScalarWhereInput>
  }

  export type Widgets_for_fieldsCreateNestedManyWithoutWidget_typesInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutWidget_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInput>
    createMany?: Widgets_for_fieldsCreateManyWidget_typesInputEnvelope
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
  }

  export type Widgets_for_fieldsUncheckedCreateNestedManyWithoutWidget_typesInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutWidget_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInput>
    createMany?: Widgets_for_fieldsCreateManyWidget_typesInputEnvelope
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
  }

  export type Widgets_for_fieldsUpdateManyWithoutWidget_typesNestedInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutWidget_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInput>
    upsert?: Enumerable<Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInput>
    createMany?: Widgets_for_fieldsCreateManyWidget_typesInputEnvelope
    set?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    disconnect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    delete?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    update?: Enumerable<Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInput>
    updateMany?: Enumerable<Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInput>
    deleteMany?: Enumerable<Widgets_for_fieldsScalarWhereInput>
  }

  export type Widgets_for_fieldsUncheckedUpdateManyWithoutWidget_typesNestedInput = {
    create?: XOR<Enumerable<Widgets_for_fieldsCreateWithoutWidget_typesInput>, Enumerable<Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput>>
    connectOrCreate?: Enumerable<Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInput>
    upsert?: Enumerable<Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInput>
    createMany?: Widgets_for_fieldsCreateManyWidget_typesInputEnvelope
    set?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    disconnect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    delete?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    connect?: Enumerable<Widgets_for_fieldsWhereUniqueInput>
    update?: Enumerable<Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInput>
    updateMany?: Enumerable<Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInput>
    deleteMany?: Enumerable<Widgets_for_fieldsScalarWhereInput>
  }

  export type Field_typesCreateNestedOneWithoutWidgets_for_fieldsInput = {
    create?: XOR<Field_typesCreateWithoutWidgets_for_fieldsInput, Field_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
    connectOrCreate?: Field_typesCreateOrConnectWithoutWidgets_for_fieldsInput
    connect?: Field_typesWhereUniqueInput
  }

  export type Widget_typesCreateNestedOneWithoutWidgets_for_fieldsInput = {
    create?: XOR<Widget_typesCreateWithoutWidgets_for_fieldsInput, Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
    connectOrCreate?: Widget_typesCreateOrConnectWithoutWidgets_for_fieldsInput
    connect?: Widget_typesWhereUniqueInput
  }

  export type Field_typesUpdateOneWithoutWidgets_for_fieldsNestedInput = {
    create?: XOR<Field_typesCreateWithoutWidgets_for_fieldsInput, Field_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
    connectOrCreate?: Field_typesCreateOrConnectWithoutWidgets_for_fieldsInput
    upsert?: Field_typesUpsertWithoutWidgets_for_fieldsInput
    disconnect?: Field_typesWhereInput | boolean
    delete?: Field_typesWhereInput | boolean
    connect?: Field_typesWhereUniqueInput
    update?: XOR<XOR<Field_typesUpdateToOneWithWhereWithoutWidgets_for_fieldsInput, Field_typesUpdateWithoutWidgets_for_fieldsInput>, Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInput>
  }

  export type Widget_typesUpdateOneWithoutWidgets_for_fieldsNestedInput = {
    create?: XOR<Widget_typesCreateWithoutWidgets_for_fieldsInput, Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
    connectOrCreate?: Widget_typesCreateOrConnectWithoutWidgets_for_fieldsInput
    upsert?: Widget_typesUpsertWithoutWidgets_for_fieldsInput
    disconnect?: Widget_typesWhereInput | boolean
    delete?: Widget_typesWhereInput | boolean
    connect?: Widget_typesWhereUniqueInput
    update?: XOR<XOR<Widget_typesUpdateToOneWithWhereWithoutWidgets_for_fieldsInput, Widget_typesUpdateWithoutWidgets_for_fieldsInput>, Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumproject_typeNullableFilter<$PrismaModel = never> = {
    equals?: project_type | Enumproject_typeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<project_type> | ListEnumproject_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproject_typeNullableFilter<$PrismaModel> | project_type | null
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

  export type UsersCreateWithoutAccountsInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    ui_options?: Ui_optionsCreateNestedOneWithoutUsersInput
    user_messages?: User_messagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutAccountsInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    ui_options?: Ui_optionsUncheckedCreateNestedOneWithoutUsersInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutAccountsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
  }

  export type Place_levelsCreateWithoutAccountsInput = {
    place_level_id: string
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    projects?: ProjectsCreateNestedOneWithoutPlace_levelsInput
  }

  export type Place_levelsUncheckedCreateWithoutAccountsInput = {
    place_level_id: string
    project_id?: string | null
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Place_levelsCreateOrConnectWithoutAccountsInput = {
    where: Place_levelsWhereUniqueInput
    create: XOR<Place_levelsCreateWithoutAccountsInput, Place_levelsUncheckedCreateWithoutAccountsInput>
  }

  export type Place_levelsCreateManyAccountsInputEnvelope = {
    data: Enumerable<Place_levelsCreateManyAccountsInput>
    skipDuplicates?: boolean
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
    place_levels?: Place_levelsCreateNestedManyWithoutProjectsInput
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
    place_levels?: Place_levelsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectsCreateOrConnectWithoutAccountsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutAccountsInput, ProjectsUncheckedCreateWithoutAccountsInput>
  }

  export type ProjectsCreateManyAccountsInputEnvelope = {
    data: Enumerable<ProjectsCreateManyAccountsInput>
    skipDuplicates?: boolean
  }

  export type Ui_optionsCreateWithoutAccountsInput = {
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
    users: UsersCreateNestedOneWithoutUi_optionsInput
  }

  export type Ui_optionsUncheckedCreateWithoutAccountsInput = {
    user_id: string
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
  }

  export type Ui_optionsCreateOrConnectWithoutAccountsInput = {
    where: Ui_optionsWhereUniqueInput
    create: XOR<Ui_optionsCreateWithoutAccountsInput, Ui_optionsUncheckedCreateWithoutAccountsInput>
  }

  export type Ui_optionsCreateManyAccountsInputEnvelope = {
    data: Enumerable<Ui_optionsCreateManyAccountsInput>
    skipDuplicates?: boolean
  }

  export type User_messagesCreateWithoutAccountsInput = {
    user_message_id: string
    label_replace_by_generated_column?: string | null
    read?: boolean | null
    messages?: MessagesCreateNestedOneWithoutUser_messagesInput
    users?: UsersCreateNestedOneWithoutUser_messagesInput
  }

  export type User_messagesUncheckedCreateWithoutAccountsInput = {
    user_message_id: string
    user_id?: string | null
    message_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type User_messagesCreateOrConnectWithoutAccountsInput = {
    where: User_messagesWhereUniqueInput
    create: XOR<User_messagesCreateWithoutAccountsInput, User_messagesUncheckedCreateWithoutAccountsInput>
  }

  export type User_messagesCreateManyAccountsInputEnvelope = {
    data: Enumerable<User_messagesCreateManyAccountsInput>
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
    ui_options?: Ui_optionsUpdateOneWithoutUsersNestedInput
    user_messages?: User_messagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutAccountsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ui_options?: Ui_optionsUncheckedUpdateOneWithoutUsersNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type Place_levelsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: Place_levelsWhereUniqueInput
    update: XOR<Place_levelsUpdateWithoutAccountsInput, Place_levelsUncheckedUpdateWithoutAccountsInput>
    create: XOR<Place_levelsCreateWithoutAccountsInput, Place_levelsUncheckedCreateWithoutAccountsInput>
  }

  export type Place_levelsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: Place_levelsWhereUniqueInput
    data: XOR<Place_levelsUpdateWithoutAccountsInput, Place_levelsUncheckedUpdateWithoutAccountsInput>
  }

  export type Place_levelsUpdateManyWithWhereWithoutAccountsInput = {
    where: Place_levelsScalarWhereInput
    data: XOR<Place_levelsUpdateManyMutationInput, Place_levelsUncheckedUpdateManyWithoutAccountsInput>
  }

  export type Place_levelsScalarWhereInput = {
    AND?: Enumerable<Place_levelsScalarWhereInput>
    OR?: Enumerable<Place_levelsScalarWhereInput>
    NOT?: Enumerable<Place_levelsScalarWhereInput>
    place_level_id?: UuidFilter<"Place_levels"> | string
    account_id?: UuidNullableFilter<"Place_levels"> | string | null
    project_id?: UuidNullableFilter<"Place_levels"> | string | null
    level?: IntNullableFilter<"Place_levels"> | number | null
    name_singular?: StringNullableFilter<"Place_levels"> | string | null
    name_plural?: StringNullableFilter<"Place_levels"> | string | null
    name_short?: StringNullableFilter<"Place_levels"> | string | null
    reports?: BoolNullableFilter<"Place_levels"> | boolean | null
    report_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    actions?: BoolNullableFilter<"Place_levels"> | boolean | null
    action_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    action_reports?: BoolNullableFilter<"Place_levels"> | boolean | null
    checks?: BoolNullableFilter<"Place_levels"> | boolean | null
    check_values?: BoolNullableFilter<"Place_levels"> | boolean | null
    check_taxa?: BoolNullableFilter<"Place_levels"> | boolean | null
    observations?: BoolNullableFilter<"Place_levels"> | boolean | null
    label_replace_by_generated_column?: StringNullableFilter<"Place_levels"> | string | null
    deleted?: BoolNullableFilter<"Place_levels"> | boolean | null
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

  export type Ui_optionsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: Ui_optionsWhereUniqueInput
    update: XOR<Ui_optionsUpdateWithoutAccountsInput, Ui_optionsUncheckedUpdateWithoutAccountsInput>
    create: XOR<Ui_optionsCreateWithoutAccountsInput, Ui_optionsUncheckedCreateWithoutAccountsInput>
  }

  export type Ui_optionsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: Ui_optionsWhereUniqueInput
    data: XOR<Ui_optionsUpdateWithoutAccountsInput, Ui_optionsUncheckedUpdateWithoutAccountsInput>
  }

  export type Ui_optionsUpdateManyWithWhereWithoutAccountsInput = {
    where: Ui_optionsScalarWhereInput
    data: XOR<Ui_optionsUpdateManyMutationInput, Ui_optionsUncheckedUpdateManyWithoutAccountsInput>
  }

  export type Ui_optionsScalarWhereInput = {
    AND?: Enumerable<Ui_optionsScalarWhereInput>
    OR?: Enumerable<Ui_optionsScalarWhereInput>
    NOT?: Enumerable<Ui_optionsScalarWhereInput>
    user_id?: UuidFilter<"Ui_options"> | string
    account_id?: UuidNullableFilter<"Ui_options"> | string | null
    designing?: BoolNullableFilter<"Ui_options"> | boolean | null
    breadcrumbs_overflowing?: BoolNullableFilter<"Ui_options"> | boolean | null
    navs_overflowing?: BoolNullableFilter<"Ui_options"> | boolean | null
    tabs?: JsonNullableFilter<"Ui_options">
    show_map?: BoolNullableFilter<"Ui_options"> | boolean | null
    map_bounds?: JsonNullableFilter<"Ui_options">
    local_map_show?: JsonNullableFilter<"Ui_options">
    tile_layer_sorter?: StringNullableFilter<"Ui_options"> | string | null
    vector_layer_sorter?: StringNullableFilter<"Ui_options"> | string | null
    editing_place_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    editing_check_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    editing_action_geometry?: UuidNullableFilter<"Ui_options"> | string | null
    label?: StringNullableFilter<"Ui_options"> | string | null
  }

  export type User_messagesUpsertWithWhereUniqueWithoutAccountsInput = {
    where: User_messagesWhereUniqueInput
    update: XOR<User_messagesUpdateWithoutAccountsInput, User_messagesUncheckedUpdateWithoutAccountsInput>
    create: XOR<User_messagesCreateWithoutAccountsInput, User_messagesUncheckedCreateWithoutAccountsInput>
  }

  export type User_messagesUpdateWithWhereUniqueWithoutAccountsInput = {
    where: User_messagesWhereUniqueInput
    data: XOR<User_messagesUpdateWithoutAccountsInput, User_messagesUncheckedUpdateWithoutAccountsInput>
  }

  export type User_messagesUpdateManyWithWhereWithoutAccountsInput = {
    where: User_messagesScalarWhereInput
    data: XOR<User_messagesUpdateManyMutationInput, User_messagesUncheckedUpdateManyWithoutAccountsInput>
  }

  export type User_messagesScalarWhereInput = {
    AND?: Enumerable<User_messagesScalarWhereInput>
    OR?: Enumerable<User_messagesScalarWhereInput>
    NOT?: Enumerable<User_messagesScalarWhereInput>
    user_message_id?: UuidFilter<"User_messages"> | string
    account_id?: UuidNullableFilter<"User_messages"> | string | null
    user_id?: UuidNullableFilter<"User_messages"> | string | null
    message_id?: UuidNullableFilter<"User_messages"> | string | null
    label_replace_by_generated_column?: StringNullableFilter<"User_messages"> | string | null
    read?: BoolNullableFilter<"User_messages"> | boolean | null
  }

  export type Widgets_for_fieldsCreateWithoutField_typesInput = {
    widget_for_field_id: string
    label?: string | null
    deleted?: boolean | null
    widget_types?: Widget_typesCreateNestedOneWithoutWidgets_for_fieldsInput
  }

  export type Widgets_for_fieldsUncheckedCreateWithoutField_typesInput = {
    widget_for_field_id: string
    widget_type_id?: string | null
    label?: string | null
    deleted?: boolean | null
  }

  export type Widgets_for_fieldsCreateOrConnectWithoutField_typesInput = {
    where: Widgets_for_fieldsWhereUniqueInput
    create: XOR<Widgets_for_fieldsCreateWithoutField_typesInput, Widgets_for_fieldsUncheckedCreateWithoutField_typesInput>
  }

  export type Widgets_for_fieldsCreateManyField_typesInputEnvelope = {
    data: Enumerable<Widgets_for_fieldsCreateManyField_typesInput>
    skipDuplicates?: boolean
  }

  export type Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInput = {
    where: Widgets_for_fieldsWhereUniqueInput
    update: XOR<Widgets_for_fieldsUpdateWithoutField_typesInput, Widgets_for_fieldsUncheckedUpdateWithoutField_typesInput>
    create: XOR<Widgets_for_fieldsCreateWithoutField_typesInput, Widgets_for_fieldsUncheckedCreateWithoutField_typesInput>
  }

  export type Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInput = {
    where: Widgets_for_fieldsWhereUniqueInput
    data: XOR<Widgets_for_fieldsUpdateWithoutField_typesInput, Widgets_for_fieldsUncheckedUpdateWithoutField_typesInput>
  }

  export type Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInput = {
    where: Widgets_for_fieldsScalarWhereInput
    data: XOR<Widgets_for_fieldsUpdateManyMutationInput, Widgets_for_fieldsUncheckedUpdateManyWithoutField_typesInput>
  }

  export type Widgets_for_fieldsScalarWhereInput = {
    AND?: Enumerable<Widgets_for_fieldsScalarWhereInput>
    OR?: Enumerable<Widgets_for_fieldsScalarWhereInput>
    NOT?: Enumerable<Widgets_for_fieldsScalarWhereInput>
    widget_for_field_id?: UuidFilter<"Widgets_for_fields"> | string
    field_type_id?: UuidNullableFilter<"Widgets_for_fields"> | string | null
    widget_type_id?: UuidNullableFilter<"Widgets_for_fields"> | string | null
    label?: StringNullableFilter<"Widgets_for_fields"> | string | null
    deleted?: BoolNullableFilter<"Widgets_for_fields"> | boolean | null
  }

  export type User_messagesCreateWithoutMessagesInput = {
    user_message_id: string
    label_replace_by_generated_column?: string | null
    read?: boolean | null
    accounts?: AccountsCreateNestedOneWithoutUser_messagesInput
    users?: UsersCreateNestedOneWithoutUser_messagesInput
  }

  export type User_messagesUncheckedCreateWithoutMessagesInput = {
    user_message_id: string
    account_id?: string | null
    user_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type User_messagesCreateOrConnectWithoutMessagesInput = {
    where: User_messagesWhereUniqueInput
    create: XOR<User_messagesCreateWithoutMessagesInput, User_messagesUncheckedCreateWithoutMessagesInput>
  }

  export type User_messagesCreateManyMessagesInputEnvelope = {
    data: Enumerable<User_messagesCreateManyMessagesInput>
    skipDuplicates?: boolean
  }

  export type User_messagesUpsertWithWhereUniqueWithoutMessagesInput = {
    where: User_messagesWhereUniqueInput
    update: XOR<User_messagesUpdateWithoutMessagesInput, User_messagesUncheckedUpdateWithoutMessagesInput>
    create: XOR<User_messagesCreateWithoutMessagesInput, User_messagesUncheckedCreateWithoutMessagesInput>
  }

  export type User_messagesUpdateWithWhereUniqueWithoutMessagesInput = {
    where: User_messagesWhereUniqueInput
    data: XOR<User_messagesUpdateWithoutMessagesInput, User_messagesUncheckedUpdateWithoutMessagesInput>
  }

  export type User_messagesUpdateManyWithWhereWithoutMessagesInput = {
    where: User_messagesScalarWhereInput
    data: XOR<User_messagesUpdateManyMutationInput, User_messagesUncheckedUpdateManyWithoutMessagesInput>
  }

  export type AccountsCreateWithoutPlace_levelsInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    users?: UsersCreateNestedOneWithoutAccountsInput
    projects?: ProjectsCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutPlace_levelsInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    projects?: ProjectsUncheckedCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsUncheckedCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutPlace_levelsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutPlace_levelsInput, AccountsUncheckedCreateWithoutPlace_levelsInput>
  }

  export type ProjectsCreateWithoutPlace_levelsInput = {
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

  export type ProjectsUncheckedCreateWithoutPlace_levelsInput = {
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

  export type ProjectsCreateOrConnectWithoutPlace_levelsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutPlace_levelsInput, ProjectsUncheckedCreateWithoutPlace_levelsInput>
  }

  export type AccountsUpsertWithoutPlace_levelsInput = {
    update: XOR<AccountsUpdateWithoutPlace_levelsInput, AccountsUncheckedUpdateWithoutPlace_levelsInput>
    create: XOR<AccountsCreateWithoutPlace_levelsInput, AccountsUncheckedCreateWithoutPlace_levelsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutPlace_levelsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutPlace_levelsInput, AccountsUncheckedUpdateWithoutPlace_levelsInput>
  }

  export type AccountsUpdateWithoutPlace_levelsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneWithoutAccountsNestedInput
    projects?: ProjectsUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutPlace_levelsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectsUncheckedUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type ProjectsUpsertWithoutPlace_levelsInput = {
    update: XOR<ProjectsUpdateWithoutPlace_levelsInput, ProjectsUncheckedUpdateWithoutPlace_levelsInput>
    create: XOR<ProjectsCreateWithoutPlace_levelsInput, ProjectsUncheckedCreateWithoutPlace_levelsInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutPlace_levelsInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutPlace_levelsInput, ProjectsUncheckedUpdateWithoutPlace_levelsInput>
  }

  export type ProjectsUpdateWithoutPlace_levelsInput = {
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

  export type ProjectsUncheckedUpdateWithoutPlace_levelsInput = {
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

  export type Place_levelsCreateWithoutProjectsInput = {
    place_level_id: string
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsCreateNestedOneWithoutPlace_levelsInput
  }

  export type Place_levelsUncheckedCreateWithoutProjectsInput = {
    place_level_id: string
    account_id?: string | null
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Place_levelsCreateOrConnectWithoutProjectsInput = {
    where: Place_levelsWhereUniqueInput
    create: XOR<Place_levelsCreateWithoutProjectsInput, Place_levelsUncheckedCreateWithoutProjectsInput>
  }

  export type Place_levelsCreateManyProjectsInputEnvelope = {
    data: Enumerable<Place_levelsCreateManyProjectsInput>
    skipDuplicates?: boolean
  }

  export type AccountsCreateWithoutProjectsInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    users?: UsersCreateNestedOneWithoutAccountsInput
    place_levels?: Place_levelsCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutProjectsInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    place_levels?: Place_levelsUncheckedCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsUncheckedCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutProjectsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutProjectsInput, AccountsUncheckedCreateWithoutProjectsInput>
  }

  export type Place_levelsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: Place_levelsWhereUniqueInput
    update: XOR<Place_levelsUpdateWithoutProjectsInput, Place_levelsUncheckedUpdateWithoutProjectsInput>
    create: XOR<Place_levelsCreateWithoutProjectsInput, Place_levelsUncheckedCreateWithoutProjectsInput>
  }

  export type Place_levelsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: Place_levelsWhereUniqueInput
    data: XOR<Place_levelsUpdateWithoutProjectsInput, Place_levelsUncheckedUpdateWithoutProjectsInput>
  }

  export type Place_levelsUpdateManyWithWhereWithoutProjectsInput = {
    where: Place_levelsScalarWhereInput
    data: XOR<Place_levelsUpdateManyMutationInput, Place_levelsUncheckedUpdateManyWithoutProjectsInput>
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
    place_levels?: Place_levelsUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutProjectsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    place_levels?: Place_levelsUncheckedUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsCreateWithoutUi_optionsInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    users?: UsersCreateNestedOneWithoutAccountsInput
    place_levels?: Place_levelsCreateNestedManyWithoutAccountsInput
    projects?: ProjectsCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutUi_optionsInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    place_levels?: Place_levelsUncheckedCreateNestedManyWithoutAccountsInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutUi_optionsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUi_optionsInput, AccountsUncheckedCreateWithoutUi_optionsInput>
  }

  export type UsersCreateWithoutUi_optionsInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsCreateNestedManyWithoutUsersInput
    user_messages?: User_messagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUi_optionsInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsUncheckedCreateNestedManyWithoutUsersInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUi_optionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUi_optionsInput, UsersUncheckedCreateWithoutUi_optionsInput>
  }

  export type AccountsUpsertWithoutUi_optionsInput = {
    update: XOR<AccountsUpdateWithoutUi_optionsInput, AccountsUncheckedUpdateWithoutUi_optionsInput>
    create: XOR<AccountsCreateWithoutUi_optionsInput, AccountsUncheckedCreateWithoutUi_optionsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutUi_optionsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutUi_optionsInput, AccountsUncheckedUpdateWithoutUi_optionsInput>
  }

  export type AccountsUpdateWithoutUi_optionsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneWithoutAccountsNestedInput
    place_levels?: Place_levelsUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUi_optionsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    place_levels?: Place_levelsUncheckedUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type UsersUpsertWithoutUi_optionsInput = {
    update: XOR<UsersUpdateWithoutUi_optionsInput, UsersUncheckedUpdateWithoutUi_optionsInput>
    create: XOR<UsersCreateWithoutUi_optionsInput, UsersUncheckedCreateWithoutUi_optionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUi_optionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUi_optionsInput, UsersUncheckedUpdateWithoutUi_optionsInput>
  }

  export type UsersUpdateWithoutUi_optionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateManyWithoutUsersNestedInput
    user_messages?: User_messagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUi_optionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUncheckedUpdateManyWithoutUsersNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type AccountsCreateWithoutUser_messagesInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    users?: UsersCreateNestedOneWithoutAccountsInput
    place_levels?: Place_levelsCreateNestedManyWithoutAccountsInput
    projects?: ProjectsCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutUser_messagesInput = {
    account_id: string
    user_id?: string | null
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    place_levels?: Place_levelsUncheckedCreateNestedManyWithoutAccountsInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutUser_messagesInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUser_messagesInput, AccountsUncheckedCreateWithoutUser_messagesInput>
  }

  export type MessagesCreateWithoutUser_messagesInput = {
    message_id: string
    label_replace_by_generated_column?: string | null
    date?: Date | string | null
    message?: string | null
  }

  export type MessagesUncheckedCreateWithoutUser_messagesInput = {
    message_id: string
    label_replace_by_generated_column?: string | null
    date?: Date | string | null
    message?: string | null
  }

  export type MessagesCreateOrConnectWithoutUser_messagesInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutUser_messagesInput, MessagesUncheckedCreateWithoutUser_messagesInput>
  }

  export type UsersCreateWithoutUser_messagesInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsCreateNestedManyWithoutUsersInput
    ui_options?: Ui_optionsCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUser_messagesInput = {
    user_id: string
    email?: string | null
    auth_id?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
    accounts?: AccountsUncheckedCreateNestedManyWithoutUsersInput
    ui_options?: Ui_optionsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUser_messagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser_messagesInput, UsersUncheckedCreateWithoutUser_messagesInput>
  }

  export type AccountsUpsertWithoutUser_messagesInput = {
    update: XOR<AccountsUpdateWithoutUser_messagesInput, AccountsUncheckedUpdateWithoutUser_messagesInput>
    create: XOR<AccountsCreateWithoutUser_messagesInput, AccountsUncheckedCreateWithoutUser_messagesInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutUser_messagesInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutUser_messagesInput, AccountsUncheckedUpdateWithoutUser_messagesInput>
  }

  export type AccountsUpdateWithoutUser_messagesInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneWithoutAccountsNestedInput
    place_levels?: Place_levelsUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUser_messagesInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    place_levels?: Place_levelsUncheckedUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type MessagesUpsertWithoutUser_messagesInput = {
    update: XOR<MessagesUpdateWithoutUser_messagesInput, MessagesUncheckedUpdateWithoutUser_messagesInput>
    create: XOR<MessagesCreateWithoutUser_messagesInput, MessagesUncheckedCreateWithoutUser_messagesInput>
    where?: MessagesWhereInput
  }

  export type MessagesUpdateToOneWithWhereWithoutUser_messagesInput = {
    where?: MessagesWhereInput
    data: XOR<MessagesUpdateWithoutUser_messagesInput, MessagesUncheckedUpdateWithoutUser_messagesInput>
  }

  export type MessagesUpdateWithoutUser_messagesInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessagesUncheckedUpdateWithoutUser_messagesInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUpsertWithoutUser_messagesInput = {
    update: XOR<UsersUpdateWithoutUser_messagesInput, UsersUncheckedUpdateWithoutUser_messagesInput>
    create: XOR<UsersCreateWithoutUser_messagesInput, UsersUncheckedCreateWithoutUser_messagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser_messagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser_messagesInput, UsersUncheckedUpdateWithoutUser_messagesInput>
  }

  export type UsersUpdateWithoutUser_messagesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateManyWithoutUsersNestedInput
    ui_options?: Ui_optionsUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser_messagesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUncheckedUpdateManyWithoutUsersNestedInput
    ui_options?: Ui_optionsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type AccountsCreateWithoutUsersInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    place_levels?: Place_levelsCreateNestedManyWithoutAccountsInput
    projects?: ProjectsCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutUsersInput = {
    account_id: string
    type?: string | null
    period_start?: Date | string | null
    period_end?: Date | string | null
    projects_label_by?: string | null
    label?: string | null
    place_levels?: Place_levelsUncheckedCreateNestedManyWithoutAccountsInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutAccountsInput
    ui_options?: Ui_optionsUncheckedCreateNestedManyWithoutAccountsInput
    user_messages?: User_messagesUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutUsersInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUsersInput, AccountsUncheckedCreateWithoutUsersInput>
  }

  export type AccountsCreateManyUsersInputEnvelope = {
    data: Enumerable<AccountsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type Ui_optionsCreateWithoutUsersInput = {
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
    accounts?: AccountsCreateNestedOneWithoutUi_optionsInput
  }

  export type Ui_optionsUncheckedCreateWithoutUsersInput = {
    account_id?: string | null
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
  }

  export type Ui_optionsCreateOrConnectWithoutUsersInput = {
    where: Ui_optionsWhereUniqueInput
    create: XOR<Ui_optionsCreateWithoutUsersInput, Ui_optionsUncheckedCreateWithoutUsersInput>
  }

  export type User_messagesCreateWithoutUsersInput = {
    user_message_id: string
    label_replace_by_generated_column?: string | null
    read?: boolean | null
    accounts?: AccountsCreateNestedOneWithoutUser_messagesInput
    messages?: MessagesCreateNestedOneWithoutUser_messagesInput
  }

  export type User_messagesUncheckedCreateWithoutUsersInput = {
    user_message_id: string
    account_id?: string | null
    message_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type User_messagesCreateOrConnectWithoutUsersInput = {
    where: User_messagesWhereUniqueInput
    create: XOR<User_messagesCreateWithoutUsersInput, User_messagesUncheckedCreateWithoutUsersInput>
  }

  export type User_messagesCreateManyUsersInputEnvelope = {
    data: Enumerable<User_messagesCreateManyUsersInput>
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

  export type Ui_optionsUpsertWithoutUsersInput = {
    update: XOR<Ui_optionsUpdateWithoutUsersInput, Ui_optionsUncheckedUpdateWithoutUsersInput>
    create: XOR<Ui_optionsCreateWithoutUsersInput, Ui_optionsUncheckedCreateWithoutUsersInput>
    where?: Ui_optionsWhereInput
  }

  export type Ui_optionsUpdateToOneWithWhereWithoutUsersInput = {
    where?: Ui_optionsWhereInput
    data: XOR<Ui_optionsUpdateWithoutUsersInput, Ui_optionsUncheckedUpdateWithoutUsersInput>
  }

  export type Ui_optionsUpdateWithoutUsersInput = {
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountsUpdateOneWithoutUi_optionsNestedInput
  }

  export type Ui_optionsUncheckedUpdateWithoutUsersInput = {
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: User_messagesWhereUniqueInput
    update: XOR<User_messagesUpdateWithoutUsersInput, User_messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<User_messagesCreateWithoutUsersInput, User_messagesUncheckedCreateWithoutUsersInput>
  }

  export type User_messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: User_messagesWhereUniqueInput
    data: XOR<User_messagesUpdateWithoutUsersInput, User_messagesUncheckedUpdateWithoutUsersInput>
  }

  export type User_messagesUpdateManyWithWhereWithoutUsersInput = {
    where: User_messagesScalarWhereInput
    data: XOR<User_messagesUpdateManyMutationInput, User_messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type Widgets_for_fieldsCreateWithoutWidget_typesInput = {
    widget_for_field_id: string
    label?: string | null
    deleted?: boolean | null
    field_types?: Field_typesCreateNestedOneWithoutWidgets_for_fieldsInput
  }

  export type Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput = {
    widget_for_field_id: string
    field_type_id?: string | null
    label?: string | null
    deleted?: boolean | null
  }

  export type Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInput = {
    where: Widgets_for_fieldsWhereUniqueInput
    create: XOR<Widgets_for_fieldsCreateWithoutWidget_typesInput, Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput>
  }

  export type Widgets_for_fieldsCreateManyWidget_typesInputEnvelope = {
    data: Enumerable<Widgets_for_fieldsCreateManyWidget_typesInput>
    skipDuplicates?: boolean
  }

  export type Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInput = {
    where: Widgets_for_fieldsWhereUniqueInput
    update: XOR<Widgets_for_fieldsUpdateWithoutWidget_typesInput, Widgets_for_fieldsUncheckedUpdateWithoutWidget_typesInput>
    create: XOR<Widgets_for_fieldsCreateWithoutWidget_typesInput, Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput>
  }

  export type Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInput = {
    where: Widgets_for_fieldsWhereUniqueInput
    data: XOR<Widgets_for_fieldsUpdateWithoutWidget_typesInput, Widgets_for_fieldsUncheckedUpdateWithoutWidget_typesInput>
  }

  export type Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInput = {
    where: Widgets_for_fieldsScalarWhereInput
    data: XOR<Widgets_for_fieldsUpdateManyMutationInput, Widgets_for_fieldsUncheckedUpdateManyWithoutWidget_typesInput>
  }

  export type Field_typesCreateWithoutWidgets_for_fieldsInput = {
    field_type_id: string
    name?: string | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Field_typesUncheckedCreateWithoutWidgets_for_fieldsInput = {
    field_type_id: string
    name?: string | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Field_typesCreateOrConnectWithoutWidgets_for_fieldsInput = {
    where: Field_typesWhereUniqueInput
    create: XOR<Field_typesCreateWithoutWidgets_for_fieldsInput, Field_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
  }

  export type Widget_typesCreateWithoutWidgets_for_fieldsInput = {
    widget_type_id: string
    name?: string | null
    needs_list?: boolean | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInput = {
    widget_type_id: string
    name?: string | null
    needs_list?: boolean | null
    sort?: number | null
    comment?: string | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Widget_typesCreateOrConnectWithoutWidgets_for_fieldsInput = {
    where: Widget_typesWhereUniqueInput
    create: XOR<Widget_typesCreateWithoutWidgets_for_fieldsInput, Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
  }

  export type Field_typesUpsertWithoutWidgets_for_fieldsInput = {
    update: XOR<Field_typesUpdateWithoutWidgets_for_fieldsInput, Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInput>
    create: XOR<Field_typesCreateWithoutWidgets_for_fieldsInput, Field_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
    where?: Field_typesWhereInput
  }

  export type Field_typesUpdateToOneWithWhereWithoutWidgets_for_fieldsInput = {
    where?: Field_typesWhereInput
    data: XOR<Field_typesUpdateWithoutWidgets_for_fieldsInput, Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInput>
  }

  export type Field_typesUpdateWithoutWidgets_for_fieldsInput = {
    field_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInput = {
    field_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widget_typesUpsertWithoutWidgets_for_fieldsInput = {
    update: XOR<Widget_typesUpdateWithoutWidgets_for_fieldsInput, Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInput>
    create: XOR<Widget_typesCreateWithoutWidgets_for_fieldsInput, Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInput>
    where?: Widget_typesWhereInput
  }

  export type Widget_typesUpdateToOneWithWhereWithoutWidgets_for_fieldsInput = {
    where?: Widget_typesWhereInput
    data: XOR<Widget_typesUpdateWithoutWidgets_for_fieldsInput, Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInput>
  }

  export type Widget_typesUpdateWithoutWidgets_for_fieldsInput = {
    widget_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needs_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInput = {
    widget_type_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needs_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Place_levelsCreateManyAccountsInput = {
    place_level_id: string
    project_id?: string | null
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
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

  export type Ui_optionsCreateManyAccountsInput = {
    user_id: string
    designing?: boolean | null
    breadcrumbs_overflowing?: boolean | null
    navs_overflowing?: boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: string | null
    vector_layer_sorter?: string | null
    editing_place_geometry?: string | null
    editing_check_geometry?: string | null
    editing_action_geometry?: string | null
    label?: string | null
  }

  export type User_messagesCreateManyAccountsInput = {
    user_message_id: string
    user_id?: string | null
    message_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type Place_levelsUpdateWithoutAccountsInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    projects?: ProjectsUpdateOneWithoutPlace_levelsNestedInput
  }

  export type Place_levelsUncheckedUpdateWithoutAccountsInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Place_levelsUncheckedUpdateManyWithoutAccountsInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    place_levels?: Place_levelsUpdateManyWithoutProjectsNestedInput
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
    place_levels?: Place_levelsUncheckedUpdateManyWithoutProjectsNestedInput
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

  export type Ui_optionsUpdateWithoutAccountsInput = {
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneRequiredWithoutUi_optionsNestedInput
  }

  export type Ui_optionsUncheckedUpdateWithoutAccountsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ui_optionsUncheckedUpdateManyWithoutAccountsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    designing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    breadcrumbs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    navs_overflowing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tabs?: NullableJsonNullValueInput | InputJsonValue
    show_map?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_bounds?: NullableJsonNullValueInput | InputJsonValue
    local_map_show?: NullableJsonNullValueInput | InputJsonValue
    tile_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    vector_layer_sorter?: NullableStringFieldUpdateOperationsInput | string | null
    editing_place_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_check_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    editing_action_geometry?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_messagesUpdateWithoutAccountsInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    messages?: MessagesUpdateOneWithoutUser_messagesNestedInput
    users?: UsersUpdateOneWithoutUser_messagesNestedInput
  }

  export type User_messagesUncheckedUpdateWithoutAccountsInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type User_messagesUncheckedUpdateManyWithoutAccountsInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widgets_for_fieldsCreateManyField_typesInput = {
    widget_for_field_id: string
    widget_type_id?: string | null
    label?: string | null
    deleted?: boolean | null
  }

  export type Widgets_for_fieldsUpdateWithoutField_typesInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    widget_types?: Widget_typesUpdateOneWithoutWidgets_for_fieldsNestedInput
  }

  export type Widgets_for_fieldsUncheckedUpdateWithoutField_typesInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    widget_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widgets_for_fieldsUncheckedUpdateManyWithoutField_typesInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    widget_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type User_messagesCreateManyMessagesInput = {
    user_message_id: string
    account_id?: string | null
    user_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type User_messagesUpdateWithoutMessagesInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateOneWithoutUser_messagesNestedInput
    users?: UsersUpdateOneWithoutUser_messagesNestedInput
  }

  export type User_messagesUncheckedUpdateWithoutMessagesInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type User_messagesUncheckedUpdateManyWithoutMessagesInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Place_levelsCreateManyProjectsInput = {
    place_level_id: string
    account_id?: string | null
    level?: number | null
    name_singular?: string | null
    name_plural?: string | null
    name_short?: string | null
    reports?: boolean | null
    report_values?: boolean | null
    actions?: boolean | null
    action_values?: boolean | null
    action_reports?: boolean | null
    checks?: boolean | null
    check_values?: boolean | null
    check_taxa?: boolean | null
    observations?: boolean | null
    label_replace_by_generated_column?: string | null
    deleted?: boolean | null
  }

  export type Place_levelsUpdateWithoutProjectsInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateOneWithoutPlace_levelsNestedInput
  }

  export type Place_levelsUncheckedUpdateWithoutProjectsInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Place_levelsUncheckedUpdateManyWithoutProjectsInput = {
    place_level_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    name_singular?: NullableStringFieldUpdateOperationsInput | string | null
    name_plural?: NullableStringFieldUpdateOperationsInput | string | null
    name_short?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    report_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    actions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    action_reports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_values?: NullableBoolFieldUpdateOperationsInput | boolean | null
    check_taxa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type User_messagesCreateManyUsersInput = {
    user_message_id: string
    account_id?: string | null
    message_id?: string | null
    label_replace_by_generated_column?: string | null
    read?: boolean | null
  }

  export type AccountsUpdateWithoutUsersInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    place_levels?: Place_levelsUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUsersInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    place_levels?: Place_levelsUncheckedUpdateManyWithoutAccountsNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutAccountsNestedInput
    ui_options?: Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInput
    user_messages?: User_messagesUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateManyWithoutUsersInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects_label_by?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_messagesUpdateWithoutUsersInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountsUpdateOneWithoutUser_messagesNestedInput
    messages?: MessagesUpdateOneWithoutUser_messagesNestedInput
  }

  export type User_messagesUncheckedUpdateWithoutUsersInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type User_messagesUncheckedUpdateManyWithoutUsersInput = {
    user_message_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    label_replace_by_generated_column?: NullableStringFieldUpdateOperationsInput | string | null
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widgets_for_fieldsCreateManyWidget_typesInput = {
    widget_for_field_id: string
    field_type_id?: string | null
    label?: string | null
    deleted?: boolean | null
  }

  export type Widgets_for_fieldsUpdateWithoutWidget_typesInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    field_types?: Field_typesUpdateOneWithoutWidgets_for_fieldsNestedInput
  }

  export type Widgets_for_fieldsUncheckedUpdateWithoutWidget_typesInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    field_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Widgets_for_fieldsUncheckedUpdateManyWithoutWidget_typesInput = {
    widget_for_field_id?: StringFieldUpdateOperationsInput | string
    field_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
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