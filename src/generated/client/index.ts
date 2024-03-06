import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null;


export const JsonValue: z.ZodType<Prisma.JsonValue> = z.union([
  z.null(),
  z.string(),
  z.number(),
  z.boolean(),
  z.lazy(() => z.array(JsonValue)),
  z.lazy(() => z.record(JsonValue)),
]);

export type JsonValueType = z.infer<typeof JsonValue>;

export const NullableJsonValue = JsonValue
  .nullable();

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValue: z.ZodType<Prisma.InputJsonValue> = z.union([
  z.null(),
  z.string(),
  z.number(),
  z.boolean(),
  z.lazy(() => z.array(InputJsonValue.nullable())),
  z.lazy(() => z.record(InputJsonValue.nullable())),
]);

export type InputJsonValueType = z.infer<typeof InputJsonValue>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AccountsScalarFieldEnumSchema = z.enum(['account_id','user_id','type','period_start','period_end','projects_label_by','label']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]);

export const MessagesScalarFieldEnumSchema = z.enum(['message_id','label_replace_by_generated_column','date','message']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',])

export const ProjectsScalarFieldEnumSchema = z.enum(['project_id','account_id','name','label','type','subproject_name_singular','subproject_name_plural','subproject_order_by','places_label_by','places_order_by','persons_label_by','persons_order_by','goal_reports_label_by','goal_reports_order_by','values_on_multiple_levels','multiple_action_values_on_same_level','multiple_check_values_on_same_level','data','files_offline','files_active_projects','files_active_subprojects','files_active_places','files_active_actions','files_active_checks','deleted']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const User_messagesScalarFieldEnumSchema = z.enum(['user_message_id','account_id','user_id','message_id','label_replace_by_generated_column','read']);

export const UsersScalarFieldEnumSchema = z.enum(['user_id','email','auth_id','label_replace_by_generated_column','deleted']);

export const project_typeSchema = z.enum(['species','biotope']);

export type project_typeType = `${z.infer<typeof project_typeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNTS SCHEMA
/////////////////////////////////////////

export const AccountsSchema = z.object({
  account_id: z.string().uuid(),
  user_id: z.string().uuid().nullable(),
  type: z.string().nullable(),
  period_start: z.coerce.date().nullable(),
  period_end: z.coerce.date().nullable(),
  projects_label_by: z.string().nullable(),
  label: z.string().nullable(),
})

export type Accounts = z.infer<typeof AccountsSchema>

/////////////////////////////////////////
// MESSAGES SCHEMA
/////////////////////////////////////////

export const MessagesSchema = z.object({
  message_id: z.string().uuid(),
  label_replace_by_generated_column: z.string().nullable(),
  date: z.coerce.date().nullable(),
  message: z.string().nullable(),
})

export type Messages = z.infer<typeof MessagesSchema>

/////////////////////////////////////////
// PROJECTS SCHEMA
/////////////////////////////////////////

export const ProjectsSchema = z.object({
  type: project_typeSchema.nullable(),
  project_id: z.string().uuid(),
  account_id: z.string().uuid().nullable(),
  name: z.string().nullable(),
  label: z.string().nullable(),
  subproject_name_singular: z.string().nullable(),
  subproject_name_plural: z.string().nullable(),
  subproject_order_by: z.string().nullable(),
  places_label_by: z.string().nullable(),
  places_order_by: NullableJsonValue.optional(),
  persons_label_by: z.string().nullable(),
  persons_order_by: z.string().nullable(),
  goal_reports_label_by: z.string().nullable(),
  goal_reports_order_by: z.string().nullable(),
  values_on_multiple_levels: z.string().nullable(),
  multiple_action_values_on_same_level: z.string().nullable(),
  multiple_check_values_on_same_level: z.string().nullable(),
  data: NullableJsonValue.optional(),
  files_offline: z.boolean().nullable(),
  files_active_projects: z.boolean().nullable(),
  files_active_subprojects: z.boolean().nullable(),
  files_active_places: z.boolean().nullable(),
  files_active_actions: z.boolean().nullable(),
  files_active_checks: z.boolean().nullable(),
  deleted: z.boolean().nullable(),
})

export type Projects = z.infer<typeof ProjectsSchema>

/////////////////////////////////////////
// USER MESSAGES SCHEMA
/////////////////////////////////////////

export const User_messagesSchema = z.object({
  user_message_id: z.string().uuid(),
  account_id: z.string().uuid().nullable(),
  user_id: z.string().uuid().nullable(),
  message_id: z.string().uuid().nullable(),
  label_replace_by_generated_column: z.string().nullable(),
  read: z.boolean().nullable(),
})

export type User_messages = z.infer<typeof User_messagesSchema>

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const UsersSchema = z.object({
  user_id: z.string().uuid(),
  email: z.string().nullable(),
  auth_id: z.string().uuid().nullable(),
  label_replace_by_generated_column: z.string().nullable(),
  deleted: z.boolean().nullable(),
})

export type Users = z.infer<typeof UsersSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNTS
//------------------------------------------------------

export const AccountsIncludeSchema: z.ZodType<Prisma.AccountsInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsFindManyArgsSchema)]).optional(),
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AccountsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AccountsArgsSchema: z.ZodType<Prisma.AccountsArgs> = z.object({
  select: z.lazy(() => AccountsSelectSchema).optional(),
  include: z.lazy(() => AccountsIncludeSchema).optional(),
}).strict();

export const AccountsCountOutputTypeArgsSchema: z.ZodType<Prisma.AccountsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => AccountsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AccountsCountOutputTypeSelectSchema: z.ZodType<Prisma.AccountsCountOutputTypeSelect> = z.object({
  projects: z.boolean().optional(),
  user_messages: z.boolean().optional(),
}).strict();

export const AccountsSelectSchema: z.ZodType<Prisma.AccountsSelect> = z.object({
  account_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  type: z.boolean().optional(),
  period_start: z.boolean().optional(),
  period_end: z.boolean().optional(),
  projects_label_by: z.boolean().optional(),
  label: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsFindManyArgsSchema)]).optional(),
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AccountsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MESSAGES
//------------------------------------------------------

export const MessagesIncludeSchema: z.ZodType<Prisma.MessagesInclude> = z.object({
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessagesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MessagesArgsSchema: z.ZodType<Prisma.MessagesArgs> = z.object({
  select: z.lazy(() => MessagesSelectSchema).optional(),
  include: z.lazy(() => MessagesIncludeSchema).optional(),
}).strict();

export const MessagesCountOutputTypeArgsSchema: z.ZodType<Prisma.MessagesCountOutputTypeArgs> = z.object({
  select: z.lazy(() => MessagesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MessagesCountOutputTypeSelectSchema: z.ZodType<Prisma.MessagesCountOutputTypeSelect> = z.object({
  user_messages: z.boolean().optional(),
}).strict();

export const MessagesSelectSchema: z.ZodType<Prisma.MessagesSelect> = z.object({
  message_id: z.boolean().optional(),
  label_replace_by_generated_column: z.boolean().optional(),
  date: z.boolean().optional(),
  message: z.boolean().optional(),
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessagesCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PROJECTS
//------------------------------------------------------

export const ProjectsIncludeSchema: z.ZodType<Prisma.ProjectsInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
}).strict()

export const ProjectsArgsSchema: z.ZodType<Prisma.ProjectsArgs> = z.object({
  select: z.lazy(() => ProjectsSelectSchema).optional(),
  include: z.lazy(() => ProjectsIncludeSchema).optional(),
}).strict();

export const ProjectsSelectSchema: z.ZodType<Prisma.ProjectsSelect> = z.object({
  project_id: z.boolean().optional(),
  account_id: z.boolean().optional(),
  name: z.boolean().optional(),
  label: z.boolean().optional(),
  type: z.boolean().optional(),
  subproject_name_singular: z.boolean().optional(),
  subproject_name_plural: z.boolean().optional(),
  subproject_order_by: z.boolean().optional(),
  places_label_by: z.boolean().optional(),
  places_order_by: z.boolean().optional(),
  persons_label_by: z.boolean().optional(),
  persons_order_by: z.boolean().optional(),
  goal_reports_label_by: z.boolean().optional(),
  goal_reports_order_by: z.boolean().optional(),
  values_on_multiple_levels: z.boolean().optional(),
  multiple_action_values_on_same_level: z.boolean().optional(),
  multiple_check_values_on_same_level: z.boolean().optional(),
  data: z.boolean().optional(),
  files_offline: z.boolean().optional(),
  files_active_projects: z.boolean().optional(),
  files_active_subprojects: z.boolean().optional(),
  files_active_places: z.boolean().optional(),
  files_active_actions: z.boolean().optional(),
  files_active_checks: z.boolean().optional(),
  deleted: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
}).strict()

// USER MESSAGES
//------------------------------------------------------

export const User_messagesIncludeSchema: z.ZodType<Prisma.User_messagesInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  messages: z.union([z.boolean(),z.lazy(() => MessagesArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export const User_messagesArgsSchema: z.ZodType<Prisma.User_messagesArgs> = z.object({
  select: z.lazy(() => User_messagesSelectSchema).optional(),
  include: z.lazy(() => User_messagesIncludeSchema).optional(),
}).strict();

export const User_messagesSelectSchema: z.ZodType<Prisma.User_messagesSelect> = z.object({
  user_message_id: z.boolean().optional(),
  account_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  message_id: z.boolean().optional(),
  label_replace_by_generated_column: z.boolean().optional(),
  read: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  messages: z.union([z.boolean(),z.lazy(() => MessagesArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

// USERS
//------------------------------------------------------

export const UsersIncludeSchema: z.ZodType<Prisma.UsersInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountsFindManyArgsSchema)]).optional(),
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UsersArgsSchema: z.ZodType<Prisma.UsersArgs> = z.object({
  select: z.lazy(() => UsersSelectSchema).optional(),
  include: z.lazy(() => UsersIncludeSchema).optional(),
}).strict();

export const UsersCountOutputTypeArgsSchema: z.ZodType<Prisma.UsersCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UsersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UsersCountOutputTypeSelectSchema: z.ZodType<Prisma.UsersCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  user_messages: z.boolean().optional(),
}).strict();

export const UsersSelectSchema: z.ZodType<Prisma.UsersSelect> = z.object({
  user_id: z.boolean().optional(),
  email: z.boolean().optional(),
  auth_id: z.boolean().optional(),
  label_replace_by_generated_column: z.boolean().optional(),
  deleted: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsFindManyArgsSchema)]).optional(),
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountsWhereInputSchema: z.ZodType<Prisma.AccountsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  period_start: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  period_end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  projects_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsListRelationFilterSchema).optional(),
  user_messages: z.lazy(() => User_messagesListRelationFilterSchema).optional()
}).strict();

export const AccountsOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountsOrderByWithRelationInput> = z.object({
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  period_start: z.lazy(() => SortOrderSchema).optional(),
  period_end: z.lazy(() => SortOrderSchema).optional(),
  projects_label_by: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => UsersOrderByWithRelationInputSchema).optional(),
  projects: z.lazy(() => ProjectsOrderByRelationAggregateInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AccountsWhereUniqueInputSchema: z.ZodType<Prisma.AccountsWhereUniqueInput> = z.object({
  account_id: z.string().uuid().optional()
}).strict();

export const AccountsOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountsOrderByWithAggregationInput> = z.object({
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  period_start: z.lazy(() => SortOrderSchema).optional(),
  period_end: z.lazy(() => SortOrderSchema).optional(),
  projects_label_by: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountsMinOrderByAggregateInputSchema).optional()
}).strict();

export const AccountsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  period_start: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  period_end: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  projects_label_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MessagesWhereInputSchema: z.ZodType<Prisma.MessagesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessagesWhereInputSchema),z.lazy(() => MessagesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessagesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessagesWhereInputSchema),z.lazy(() => MessagesWhereInputSchema).array() ]).optional(),
  message_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  message: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_messages: z.lazy(() => User_messagesListRelationFilterSchema).optional()
}).strict();

export const MessagesOrderByWithRelationInputSchema: z.ZodType<Prisma.MessagesOrderByWithRelationInput> = z.object({
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  user_messages: z.lazy(() => User_messagesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MessagesWhereUniqueInputSchema: z.ZodType<Prisma.MessagesWhereUniqueInput> = z.object({
  message_id: z.string().uuid().optional()
}).strict();

export const MessagesOrderByWithAggregationInputSchema: z.ZodType<Prisma.MessagesOrderByWithAggregationInput> = z.object({
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MessagesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MessagesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MessagesMinOrderByAggregateInputSchema).optional()
}).strict();

export const MessagesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MessagesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MessagesScalarWhereWithAggregatesInputSchema),z.lazy(() => MessagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessagesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessagesScalarWhereWithAggregatesInputSchema),z.lazy(() => MessagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  message_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  message: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ProjectsWhereInputSchema: z.ZodType<Prisma.ProjectsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsWhereInputSchema),z.lazy(() => ProjectsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsWhereInputSchema),z.lazy(() => ProjectsWhereInputSchema).array() ]).optional(),
  project_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => Enumproject_typeNullableFilterSchema),z.lazy(() => project_typeSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subproject_name_plural: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subproject_order_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  places_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  places_order_by: z.lazy(() => JsonNullableFilterSchema).optional(),
  persons_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  persons_order_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  data: z.lazy(() => JsonNullableFilterSchema).optional(),
  files_offline: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_projects: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_subprojects: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_places: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_actions: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_checks: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  accounts: z.union([ z.lazy(() => AccountsRelationFilterSchema),z.lazy(() => AccountsWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectsOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectsOrderByWithRelationInput> = z.object({
  project_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_singular: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_plural: z.lazy(() => SortOrderSchema).optional(),
  subproject_order_by: z.lazy(() => SortOrderSchema).optional(),
  places_label_by: z.lazy(() => SortOrderSchema).optional(),
  places_order_by: z.lazy(() => SortOrderSchema).optional(),
  persons_label_by: z.lazy(() => SortOrderSchema).optional(),
  persons_order_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_label_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_order_by: z.lazy(() => SortOrderSchema).optional(),
  values_on_multiple_levels: z.lazy(() => SortOrderSchema).optional(),
  multiple_action_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  multiple_check_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  files_offline: z.lazy(() => SortOrderSchema).optional(),
  files_active_projects: z.lazy(() => SortOrderSchema).optional(),
  files_active_subprojects: z.lazy(() => SortOrderSchema).optional(),
  files_active_places: z.lazy(() => SortOrderSchema).optional(),
  files_active_actions: z.lazy(() => SortOrderSchema).optional(),
  files_active_checks: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountsOrderByWithRelationInputSchema).optional()
}).strict();

export const ProjectsWhereUniqueInputSchema: z.ZodType<Prisma.ProjectsWhereUniqueInput> = z.object({
  project_id: z.string().uuid().optional()
}).strict();

export const ProjectsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectsOrderByWithAggregationInput> = z.object({
  project_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_singular: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_plural: z.lazy(() => SortOrderSchema).optional(),
  subproject_order_by: z.lazy(() => SortOrderSchema).optional(),
  places_label_by: z.lazy(() => SortOrderSchema).optional(),
  places_order_by: z.lazy(() => SortOrderSchema).optional(),
  persons_label_by: z.lazy(() => SortOrderSchema).optional(),
  persons_order_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_label_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_order_by: z.lazy(() => SortOrderSchema).optional(),
  values_on_multiple_levels: z.lazy(() => SortOrderSchema).optional(),
  multiple_action_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  multiple_check_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  files_offline: z.lazy(() => SortOrderSchema).optional(),
  files_active_projects: z.lazy(() => SortOrderSchema).optional(),
  files_active_subprojects: z.lazy(() => SortOrderSchema).optional(),
  files_active_places: z.lazy(() => SortOrderSchema).optional(),
  files_active_actions: z.lazy(() => SortOrderSchema).optional(),
  files_active_checks: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectsMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProjectsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  project_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => Enumproject_typeNullableWithAggregatesFilterSchema),z.lazy(() => project_typeSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  subproject_name_plural: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  subproject_order_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  places_label_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  places_order_by: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  persons_label_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  persons_order_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  data: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  files_offline: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_projects: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_subprojects: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_places: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_actions: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_checks: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const User_messagesWhereInputSchema: z.ZodType<Prisma.User_messagesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => User_messagesWhereInputSchema),z.lazy(() => User_messagesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => User_messagesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => User_messagesWhereInputSchema),z.lazy(() => User_messagesWhereInputSchema).array() ]).optional(),
  user_message_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  message_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  read: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  accounts: z.union([ z.lazy(() => AccountsRelationFilterSchema),z.lazy(() => AccountsWhereInputSchema) ]).optional().nullable(),
  messages: z.union([ z.lazy(() => MessagesRelationFilterSchema),z.lazy(() => MessagesWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesOrderByWithRelationInputSchema: z.ZodType<Prisma.User_messagesOrderByWithRelationInput> = z.object({
  user_message_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountsOrderByWithRelationInputSchema).optional(),
  messages: z.lazy(() => MessagesOrderByWithRelationInputSchema).optional(),
  users: z.lazy(() => UsersOrderByWithRelationInputSchema).optional()
}).strict();

export const User_messagesWhereUniqueInputSchema: z.ZodType<Prisma.User_messagesWhereUniqueInput> = z.object({
  user_message_id: z.string().uuid().optional()
}).strict();

export const User_messagesOrderByWithAggregationInputSchema: z.ZodType<Prisma.User_messagesOrderByWithAggregationInput> = z.object({
  user_message_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => User_messagesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => User_messagesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => User_messagesMinOrderByAggregateInputSchema).optional()
}).strict();

export const User_messagesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.User_messagesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => User_messagesScalarWhereWithAggregatesInputSchema),z.lazy(() => User_messagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => User_messagesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => User_messagesScalarWhereWithAggregatesInputSchema),z.lazy(() => User_messagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_message_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  message_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  read: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const UsersWhereInputSchema: z.ZodType<Prisma.UsersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  auth_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  accounts: z.lazy(() => AccountsListRelationFilterSchema).optional(),
  user_messages: z.lazy(() => User_messagesListRelationFilterSchema).optional()
}).strict();

export const UsersOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  auth_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountsOrderByRelationAggregateInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UsersWhereUniqueInputSchema: z.ZodType<Prisma.UsersWhereUniqueInput> = z.object({
  user_id: z.string().uuid().optional()
}).strict();

export const UsersOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsersOrderByWithAggregationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  auth_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UsersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UsersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UsersMinOrderByAggregateInputSchema).optional()
}).strict();

export const UsersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UsersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UsersScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  auth_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const AccountsCreateInputSchema: z.ZodType<Prisma.AccountsCreateInput> = z.object({
  account_id: z.string().uuid(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateInput> = z.object({
  account_id: z.string().uuid(),
  user_id: z.string().uuid().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUpdateInputSchema: z.ZodType<Prisma.AccountsUpdateInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UsersUpdateOneWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsCreateManyInputSchema: z.ZodType<Prisma.AccountsCreateManyInput> = z.object({
  account_id: z.string().uuid(),
  user_id: z.string().uuid().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const AccountsUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountsUpdateManyMutationInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateManyInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MessagesCreateInputSchema: z.ZodType<Prisma.MessagesCreateInput> = z.object({
  message_id: z.string().uuid(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  date: z.coerce.date().optional().nullable(),
  message: z.string().optional().nullable(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutMessagesInputSchema).optional()
}).strict();

export const MessagesUncheckedCreateInputSchema: z.ZodType<Prisma.MessagesUncheckedCreateInput> = z.object({
  message_id: z.string().uuid(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  date: z.coerce.date().optional().nullable(),
  message: z.string().optional().nullable(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutMessagesInputSchema).optional()
}).strict();

export const MessagesUpdateInputSchema: z.ZodType<Prisma.MessagesUpdateInput> = z.object({
  message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutMessagesNestedInputSchema).optional()
}).strict();

export const MessagesUncheckedUpdateInputSchema: z.ZodType<Prisma.MessagesUncheckedUpdateInput> = z.object({
  message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutMessagesNestedInputSchema).optional()
}).strict();

export const MessagesCreateManyInputSchema: z.ZodType<Prisma.MessagesCreateManyInput> = z.object({
  message_id: z.string().uuid(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  date: z.coerce.date().optional().nullable(),
  message: z.string().optional().nullable()
}).strict();

export const MessagesUpdateManyMutationInputSchema: z.ZodType<Prisma.MessagesUpdateManyMutationInput> = z.object({
  message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MessagesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MessagesUncheckedUpdateManyInput> = z.object({
  message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectsCreateInputSchema: z.ZodType<Prisma.ProjectsCreateInput> = z.object({
  project_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  type: z.lazy(() => project_typeSchema).optional().nullable(),
  subproject_name_singular: z.string().optional().nullable(),
  subproject_name_plural: z.string().optional().nullable(),
  subproject_order_by: z.string().optional().nullable(),
  places_label_by: z.string().optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.string().optional().nullable(),
  persons_order_by: z.string().optional().nullable(),
  goal_reports_label_by: z.string().optional().nullable(),
  goal_reports_order_by: z.string().optional().nullable(),
  values_on_multiple_levels: z.string().optional().nullable(),
  multiple_action_values_on_same_level: z.string().optional().nullable(),
  multiple_check_values_on_same_level: z.string().optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.boolean().optional().nullable(),
  files_active_projects: z.boolean().optional().nullable(),
  files_active_subprojects: z.boolean().optional().nullable(),
  files_active_places: z.boolean().optional().nullable(),
  files_active_actions: z.boolean().optional().nullable(),
  files_active_checks: z.boolean().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutProjectsInputSchema).optional()
}).strict();

export const ProjectsUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectsUncheckedCreateInput> = z.object({
  project_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  name: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  type: z.lazy(() => project_typeSchema).optional().nullable(),
  subproject_name_singular: z.string().optional().nullable(),
  subproject_name_plural: z.string().optional().nullable(),
  subproject_order_by: z.string().optional().nullable(),
  places_label_by: z.string().optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.string().optional().nullable(),
  persons_order_by: z.string().optional().nullable(),
  goal_reports_label_by: z.string().optional().nullable(),
  goal_reports_order_by: z.string().optional().nullable(),
  values_on_multiple_levels: z.string().optional().nullable(),
  multiple_action_values_on_same_level: z.string().optional().nullable(),
  multiple_check_values_on_same_level: z.string().optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.boolean().optional().nullable(),
  files_active_projects: z.boolean().optional().nullable(),
  files_active_subprojects: z.boolean().optional().nullable(),
  files_active_places: z.boolean().optional().nullable(),
  files_active_actions: z.boolean().optional().nullable(),
  files_active_checks: z.boolean().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const ProjectsUpdateInputSchema: z.ZodType<Prisma.ProjectsUpdateInput> = z.object({
  project_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NullableEnumproject_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  persons_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_projects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_subprojects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_places: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutProjectsNestedInputSchema).optional()
}).strict();

export const ProjectsUncheckedUpdateInputSchema: z.ZodType<Prisma.ProjectsUncheckedUpdateInput> = z.object({
  project_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NullableEnumproject_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  persons_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_projects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_subprojects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_places: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectsCreateManyInputSchema: z.ZodType<Prisma.ProjectsCreateManyInput> = z.object({
  project_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  name: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  type: z.lazy(() => project_typeSchema).optional().nullable(),
  subproject_name_singular: z.string().optional().nullable(),
  subproject_name_plural: z.string().optional().nullable(),
  subproject_order_by: z.string().optional().nullable(),
  places_label_by: z.string().optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.string().optional().nullable(),
  persons_order_by: z.string().optional().nullable(),
  goal_reports_label_by: z.string().optional().nullable(),
  goal_reports_order_by: z.string().optional().nullable(),
  values_on_multiple_levels: z.string().optional().nullable(),
  multiple_action_values_on_same_level: z.string().optional().nullable(),
  multiple_check_values_on_same_level: z.string().optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.boolean().optional().nullable(),
  files_active_projects: z.boolean().optional().nullable(),
  files_active_subprojects: z.boolean().optional().nullable(),
  files_active_places: z.boolean().optional().nullable(),
  files_active_actions: z.boolean().optional().nullable(),
  files_active_checks: z.boolean().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const ProjectsUpdateManyMutationInputSchema: z.ZodType<Prisma.ProjectsUpdateManyMutationInput> = z.object({
  project_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NullableEnumproject_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  persons_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_projects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_subprojects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_places: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProjectsUncheckedUpdateManyInput> = z.object({
  project_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NullableEnumproject_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  persons_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_projects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_subprojects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_places: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesCreateInputSchema: z.ZodType<Prisma.User_messagesCreateInput> = z.object({
  user_message_id: z.string().uuid(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutUser_messagesInputSchema).optional(),
  messages: z.lazy(() => MessagesCreateNestedOneWithoutUser_messagesInputSchema).optional(),
  users: z.lazy(() => UsersCreateNestedOneWithoutUser_messagesInputSchema).optional()
}).strict();

export const User_messagesUncheckedCreateInputSchema: z.ZodType<Prisma.User_messagesUncheckedCreateInput> = z.object({
  user_message_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  user_id: z.string().uuid().optional().nullable(),
  message_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const User_messagesUpdateInputSchema: z.ZodType<Prisma.User_messagesUpdateInput> = z.object({
  user_message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutUser_messagesNestedInputSchema).optional(),
  messages: z.lazy(() => MessagesUpdateOneWithoutUser_messagesNestedInputSchema).optional(),
  users: z.lazy(() => UsersUpdateOneWithoutUser_messagesNestedInputSchema).optional()
}).strict();

export const User_messagesUncheckedUpdateInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateInput> = z.object({
  user_message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesCreateManyInputSchema: z.ZodType<Prisma.User_messagesCreateManyInput> = z.object({
  user_message_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  user_id: z.string().uuid().optional().nullable(),
  message_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const User_messagesUpdateManyMutationInputSchema: z.ZodType<Prisma.User_messagesUpdateManyMutationInput> = z.object({
  user_message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateManyInput> = z.object({
  user_message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UsersCreateInputSchema: z.ZodType<Prisma.UsersCreateInput> = z.object({
  user_id: z.string().uuid(),
  email: z.string().optional().nullable(),
  auth_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedManyWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateInputSchema: z.ZodType<Prisma.UsersUncheckedCreateInput> = z.object({
  user_id: z.string().uuid(),
  email: z.string().optional().nullable(),
  auth_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUpdateInputSchema: z.ZodType<Prisma.UsersUpdateInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersCreateManyInputSchema: z.ZodType<Prisma.UsersCreateManyInput> = z.object({
  user_id: z.string().uuid(),
  email: z.string().optional().nullable(),
  auth_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const UsersUpdateManyMutationInputSchema: z.ZodType<Prisma.UsersUpdateManyMutationInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UsersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateManyInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UsersRelationFilterSchema: z.ZodType<Prisma.UsersRelationFilter> = z.object({
  is: z.lazy(() => UsersWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UsersWhereInputSchema).optional().nullable()
}).strict();

export const ProjectsListRelationFilterSchema: z.ZodType<Prisma.ProjectsListRelationFilter> = z.object({
  every: z.lazy(() => ProjectsWhereInputSchema).optional(),
  some: z.lazy(() => ProjectsWhereInputSchema).optional(),
  none: z.lazy(() => ProjectsWhereInputSchema).optional()
}).strict();

export const User_messagesListRelationFilterSchema: z.ZodType<Prisma.User_messagesListRelationFilter> = z.object({
  every: z.lazy(() => User_messagesWhereInputSchema).optional(),
  some: z.lazy(() => User_messagesWhereInputSchema).optional(),
  none: z.lazy(() => User_messagesWhereInputSchema).optional()
}).strict();

export const ProjectsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const User_messagesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.User_messagesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsCountOrderByAggregateInput> = z.object({
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  period_start: z.lazy(() => SortOrderSchema).optional(),
  period_end: z.lazy(() => SortOrderSchema).optional(),
  projects_label_by: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsMaxOrderByAggregateInput> = z.object({
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  period_start: z.lazy(() => SortOrderSchema).optional(),
  period_end: z.lazy(() => SortOrderSchema).optional(),
  projects_label_by: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsMinOrderByAggregateInput> = z.object({
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  period_start: z.lazy(() => SortOrderSchema).optional(),
  period_end: z.lazy(() => SortOrderSchema).optional(),
  projects_label_by: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const MessagesCountOrderByAggregateInputSchema: z.ZodType<Prisma.MessagesCountOrderByAggregateInput> = z.object({
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessagesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MessagesMaxOrderByAggregateInput> = z.object({
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessagesMinOrderByAggregateInputSchema: z.ZodType<Prisma.MessagesMinOrderByAggregateInput> = z.object({
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumproject_typeNullableFilterSchema: z.ZodType<Prisma.Enumproject_typeNullableFilter> = z.object({
  equals: z.lazy(() => project_typeSchema).optional().nullable(),
  in: z.lazy(() => project_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => project_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NestedEnumproject_typeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const JsonNullableFilterSchema: z.ZodType<Prisma.JsonNullableFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountsRelationFilterSchema: z.ZodType<Prisma.AccountsRelationFilter> = z.object({
  is: z.lazy(() => AccountsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AccountsWhereInputSchema).optional().nullable()
}).strict();

export const ProjectsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectsCountOrderByAggregateInput> = z.object({
  project_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_singular: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_plural: z.lazy(() => SortOrderSchema).optional(),
  subproject_order_by: z.lazy(() => SortOrderSchema).optional(),
  places_label_by: z.lazy(() => SortOrderSchema).optional(),
  places_order_by: z.lazy(() => SortOrderSchema).optional(),
  persons_label_by: z.lazy(() => SortOrderSchema).optional(),
  persons_order_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_label_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_order_by: z.lazy(() => SortOrderSchema).optional(),
  values_on_multiple_levels: z.lazy(() => SortOrderSchema).optional(),
  multiple_action_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  multiple_check_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  files_offline: z.lazy(() => SortOrderSchema).optional(),
  files_active_projects: z.lazy(() => SortOrderSchema).optional(),
  files_active_subprojects: z.lazy(() => SortOrderSchema).optional(),
  files_active_places: z.lazy(() => SortOrderSchema).optional(),
  files_active_actions: z.lazy(() => SortOrderSchema).optional(),
  files_active_checks: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectsMaxOrderByAggregateInput> = z.object({
  project_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_singular: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_plural: z.lazy(() => SortOrderSchema).optional(),
  subproject_order_by: z.lazy(() => SortOrderSchema).optional(),
  places_label_by: z.lazy(() => SortOrderSchema).optional(),
  persons_label_by: z.lazy(() => SortOrderSchema).optional(),
  persons_order_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_label_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_order_by: z.lazy(() => SortOrderSchema).optional(),
  values_on_multiple_levels: z.lazy(() => SortOrderSchema).optional(),
  multiple_action_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  multiple_check_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  files_offline: z.lazy(() => SortOrderSchema).optional(),
  files_active_projects: z.lazy(() => SortOrderSchema).optional(),
  files_active_subprojects: z.lazy(() => SortOrderSchema).optional(),
  files_active_places: z.lazy(() => SortOrderSchema).optional(),
  files_active_actions: z.lazy(() => SortOrderSchema).optional(),
  files_active_checks: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectsMinOrderByAggregateInput> = z.object({
  project_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_singular: z.lazy(() => SortOrderSchema).optional(),
  subproject_name_plural: z.lazy(() => SortOrderSchema).optional(),
  subproject_order_by: z.lazy(() => SortOrderSchema).optional(),
  places_label_by: z.lazy(() => SortOrderSchema).optional(),
  persons_label_by: z.lazy(() => SortOrderSchema).optional(),
  persons_order_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_label_by: z.lazy(() => SortOrderSchema).optional(),
  goal_reports_order_by: z.lazy(() => SortOrderSchema).optional(),
  values_on_multiple_levels: z.lazy(() => SortOrderSchema).optional(),
  multiple_action_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  multiple_check_values_on_same_level: z.lazy(() => SortOrderSchema).optional(),
  files_offline: z.lazy(() => SortOrderSchema).optional(),
  files_active_projects: z.lazy(() => SortOrderSchema).optional(),
  files_active_subprojects: z.lazy(() => SortOrderSchema).optional(),
  files_active_places: z.lazy(() => SortOrderSchema).optional(),
  files_active_actions: z.lazy(() => SortOrderSchema).optional(),
  files_active_checks: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumproject_typeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.Enumproject_typeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => project_typeSchema).optional().nullable(),
  in: z.lazy(() => project_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => project_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NestedEnumproject_typeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumproject_typeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumproject_typeNullableFilterSchema).optional()
}).strict();

export const JsonNullableWithAggregatesFilterSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const MessagesRelationFilterSchema: z.ZodType<Prisma.MessagesRelationFilter> = z.object({
  is: z.lazy(() => MessagesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MessagesWhereInputSchema).optional().nullable()
}).strict();

export const User_messagesCountOrderByAggregateInputSchema: z.ZodType<Prisma.User_messagesCountOrderByAggregateInput> = z.object({
  user_message_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const User_messagesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.User_messagesMaxOrderByAggregateInput> = z.object({
  user_message_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const User_messagesMinOrderByAggregateInputSchema: z.ZodType<Prisma.User_messagesMinOrderByAggregateInput> = z.object({
  user_message_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  message_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsListRelationFilterSchema: z.ZodType<Prisma.AccountsListRelationFilter> = z.object({
  every: z.lazy(() => AccountsWhereInputSchema).optional(),
  some: z.lazy(() => AccountsWhereInputSchema).optional(),
  none: z.lazy(() => AccountsWhereInputSchema).optional()
}).strict();

export const AccountsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersCountOrderByAggregateInputSchema: z.ZodType<Prisma.UsersCountOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  auth_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UsersMaxOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  auth_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersMinOrderByAggregateInputSchema: z.ZodType<Prisma.UsersMinOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  auth_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export const ProjectsCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateWithoutAccountsInputSchema).array(),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const User_messagesCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateWithoutAccountsInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUncheckedCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateWithoutAccountsInputSchema).array(),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUncheckedCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesUncheckedCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateWithoutAccountsInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const UsersUpdateOneWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutAccountsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const ProjectsUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.ProjectsUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateWithoutAccountsInputSchema).array(),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectsUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => ProjectsUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectsUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => ProjectsUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectsUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => ProjectsUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectsScalarWhereInputSchema),z.lazy(() => ProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.User_messagesUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateWithoutAccountsInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => User_messagesUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => User_messagesUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.ProjectsUncheckedUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateWithoutAccountsInputSchema).array(),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectsUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => ProjectsUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectsUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => ProjectsUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectsUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => ProjectsUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectsScalarWhereInputSchema),z.lazy(() => ProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUncheckedUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateWithoutAccountsInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => User_messagesUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => User_messagesUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const User_messagesCreateNestedManyWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesCreateNestedManyWithoutMessagesInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateWithoutMessagesInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyMessagesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUncheckedCreateNestedManyWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesUncheckedCreateNestedManyWithoutMessagesInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateWithoutMessagesInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyMessagesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUpdateManyWithoutMessagesNestedInputSchema: z.ZodType<Prisma.User_messagesUpdateManyWithoutMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateWithoutMessagesInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutMessagesInputSchema),z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutMessagesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyMessagesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutMessagesInputSchema),z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutMessagesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => User_messagesUpdateManyWithWhereWithoutMessagesInputSchema),z.lazy(() => User_messagesUpdateManyWithWhereWithoutMessagesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUncheckedUpdateManyWithoutMessagesNestedInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateManyWithoutMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateWithoutMessagesInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutMessagesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutMessagesInputSchema),z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutMessagesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyMessagesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutMessagesInputSchema),z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutMessagesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => User_messagesUpdateManyWithWhereWithoutMessagesInputSchema),z.lazy(() => User_messagesUpdateManyWithWhereWithoutMessagesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountsCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional()
}).strict();

export const NullableEnumproject_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumproject_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => project_typeSchema).optional().nullable()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const AccountsUpdateOneWithoutProjectsNestedInputSchema: z.ZodType<Prisma.AccountsUpdateOneWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => AccountsUpsertWithoutProjectsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export const AccountsCreateNestedOneWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsCreateNestedOneWithoutUser_messagesInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUser_messagesInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUser_messagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUser_messagesInputSchema).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional()
}).strict();

export const MessagesCreateNestedOneWithoutUser_messagesInputSchema: z.ZodType<Prisma.MessagesCreateNestedOneWithoutUser_messagesInput> = z.object({
  create: z.union([ z.lazy(() => MessagesCreateWithoutUser_messagesInputSchema),z.lazy(() => MessagesUncheckedCreateWithoutUser_messagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessagesCreateOrConnectWithoutUser_messagesInputSchema).optional(),
  connect: z.lazy(() => MessagesWhereUniqueInputSchema).optional()
}).strict();

export const UsersCreateNestedOneWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutUser_messagesInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutUser_messagesInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUser_messagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutUser_messagesInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export const AccountsUpdateOneWithoutUser_messagesNestedInputSchema: z.ZodType<Prisma.AccountsUpdateOneWithoutUser_messagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUser_messagesInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUser_messagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUser_messagesInputSchema).optional(),
  upsert: z.lazy(() => AccountsUpsertWithoutUser_messagesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateWithoutUser_messagesInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUser_messagesInputSchema) ]).optional(),
}).strict();

export const MessagesUpdateOneWithoutUser_messagesNestedInputSchema: z.ZodType<Prisma.MessagesUpdateOneWithoutUser_messagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessagesCreateWithoutUser_messagesInputSchema),z.lazy(() => MessagesUncheckedCreateWithoutUser_messagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessagesCreateOrConnectWithoutUser_messagesInputSchema).optional(),
  upsert: z.lazy(() => MessagesUpsertWithoutUser_messagesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MessagesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MessagesUpdateWithoutUser_messagesInputSchema),z.lazy(() => MessagesUncheckedUpdateWithoutUser_messagesInputSchema) ]).optional(),
}).strict();

export const UsersUpdateOneWithoutUser_messagesNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneWithoutUser_messagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutUser_messagesInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUser_messagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutUser_messagesInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutUser_messagesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateWithoutUser_messagesInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutUser_messagesInputSchema) ]).optional(),
}).strict();

export const AccountsCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.AccountsCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsCreateWithoutUsersInputSchema).array(),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountsCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const User_messagesCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutUsersInputSchema),z.lazy(() => User_messagesCreateWithoutUsersInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountsUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsCreateWithoutUsersInputSchema).array(),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountsCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutUsersInputSchema),z.lazy(() => User_messagesCreateWithoutUsersInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountsUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.AccountsUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsCreateWithoutUsersInputSchema).array(),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountsUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => AccountsUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountsCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => AccountsUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountsUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => AccountsUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountsScalarWhereInputSchema),z.lazy(() => AccountsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.User_messagesUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutUsersInputSchema),z.lazy(() => User_messagesCreateWithoutUsersInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => User_messagesUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => User_messagesUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountsUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsCreateWithoutUsersInputSchema).array(),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountsUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => AccountsUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountsCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => AccountsUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountsUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => AccountsUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountsScalarWhereInputSchema),z.lazy(() => AccountsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const User_messagesUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutUsersInputSchema),z.lazy(() => User_messagesCreateWithoutUsersInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => User_messagesUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => User_messagesUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => User_messagesUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => User_messagesUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedEnumproject_typeNullableFilterSchema: z.ZodType<Prisma.NestedEnumproject_typeNullableFilter> = z.object({
  equals: z.lazy(() => project_typeSchema).optional().nullable(),
  in: z.lazy(() => project_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => project_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NestedEnumproject_typeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumproject_typeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumproject_typeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => project_typeSchema).optional().nullable(),
  in: z.lazy(() => project_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => project_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NestedEnumproject_typeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumproject_typeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumproject_typeNullableFilterSchema).optional()
}).strict();

export const NestedJsonNullableFilterSchema: z.ZodType<Prisma.NestedJsonNullableFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const UsersCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateWithoutAccountsInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutAccountsInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const ProjectsCreateWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsCreateWithoutAccountsInput> = z.object({
  project_id: z.string(),
  name: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  type: z.lazy(() => project_typeSchema).optional().nullable(),
  subproject_name_singular: z.string().optional().nullable(),
  subproject_name_plural: z.string().optional().nullable(),
  subproject_order_by: z.string().optional().nullable(),
  places_label_by: z.string().optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.string().optional().nullable(),
  persons_order_by: z.string().optional().nullable(),
  goal_reports_label_by: z.string().optional().nullable(),
  goal_reports_order_by: z.string().optional().nullable(),
  values_on_multiple_levels: z.string().optional().nullable(),
  multiple_action_values_on_same_level: z.string().optional().nullable(),
  multiple_check_values_on_same_level: z.string().optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.boolean().optional().nullable(),
  files_active_projects: z.boolean().optional().nullable(),
  files_active_subprojects: z.boolean().optional().nullable(),
  files_active_places: z.boolean().optional().nullable(),
  files_active_actions: z.boolean().optional().nullable(),
  files_active_checks: z.boolean().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const ProjectsUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUncheckedCreateWithoutAccountsInput> = z.object({
  project_id: z.string(),
  name: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  type: z.lazy(() => project_typeSchema).optional().nullable(),
  subproject_name_singular: z.string().optional().nullable(),
  subproject_name_plural: z.string().optional().nullable(),
  subproject_order_by: z.string().optional().nullable(),
  places_label_by: z.string().optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.string().optional().nullable(),
  persons_order_by: z.string().optional().nullable(),
  goal_reports_label_by: z.string().optional().nullable(),
  goal_reports_order_by: z.string().optional().nullable(),
  values_on_multiple_levels: z.string().optional().nullable(),
  multiple_action_values_on_same_level: z.string().optional().nullable(),
  multiple_check_values_on_same_level: z.string().optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.boolean().optional().nullable(),
  files_active_projects: z.boolean().optional().nullable(),
  files_active_subprojects: z.boolean().optional().nullable(),
  files_active_places: z.boolean().optional().nullable(),
  files_active_actions: z.boolean().optional().nullable(),
  files_active_checks: z.boolean().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const ProjectsCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => ProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const ProjectsCreateManyAccountsInputEnvelopeSchema: z.ZodType<Prisma.ProjectsCreateManyAccountsInputEnvelope> = z.object({
  data: z.lazy(() => ProjectsCreateManyAccountsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const User_messagesCreateWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesCreateWithoutAccountsInput> = z.object({
  user_message_id: z.string(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable(),
  messages: z.lazy(() => MessagesCreateNestedOneWithoutUser_messagesInputSchema).optional(),
  users: z.lazy(() => UsersCreateNestedOneWithoutUser_messagesInputSchema).optional()
}).strict();

export const User_messagesUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesUncheckedCreateWithoutAccountsInput> = z.object({
  user_message_id: z.string(),
  user_id: z.string().optional().nullable(),
  message_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const User_messagesCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => User_messagesCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const User_messagesCreateManyAccountsInputEnvelopeSchema: z.ZodType<Prisma.User_messagesCreateManyAccountsInputEnvelope> = z.object({
  data: z.lazy(() => User_messagesCreateManyAccountsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsersUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UsersUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUpdateWithoutAccountsInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutAccountsInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const ProjectsUpsertWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUpsertWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => ProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectsUpdateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const ProjectsUpdateWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUpdateWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => ProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectsUpdateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const ProjectsUpdateManyWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUpdateManyWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => ProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectsUpdateManyMutationInputSchema),z.lazy(() => ProjectsUncheckedUpdateManyWithoutProjectsInputSchema) ]),
}).strict();

export const ProjectsScalarWhereInputSchema: z.ZodType<Prisma.ProjectsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsScalarWhereInputSchema),z.lazy(() => ProjectsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsScalarWhereInputSchema),z.lazy(() => ProjectsScalarWhereInputSchema).array() ]).optional(),
  project_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => Enumproject_typeNullableFilterSchema),z.lazy(() => project_typeSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subproject_name_plural: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subproject_order_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  places_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  places_order_by: z.lazy(() => JsonNullableFilterSchema).optional(),
  persons_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  persons_order_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  data: z.lazy(() => JsonNullableFilterSchema).optional(),
  files_offline: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_projects: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_subprojects: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_places: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_actions: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  files_active_checks: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const User_messagesUpsertWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesUpsertWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => User_messagesUpdateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => User_messagesCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const User_messagesUpdateWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesUpdateWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => User_messagesUpdateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const User_messagesUpdateManyWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesUpdateManyWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => User_messagesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => User_messagesUpdateManyMutationInputSchema),z.lazy(() => User_messagesUncheckedUpdateManyWithoutUser_messagesInputSchema) ]),
}).strict();

export const User_messagesScalarWhereInputSchema: z.ZodType<Prisma.User_messagesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => User_messagesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => User_messagesScalarWhereInputSchema),z.lazy(() => User_messagesScalarWhereInputSchema).array() ]).optional(),
  user_message_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  message_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  read: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const User_messagesCreateWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesCreateWithoutMessagesInput> = z.object({
  user_message_id: z.string(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutUser_messagesInputSchema).optional(),
  users: z.lazy(() => UsersCreateNestedOneWithoutUser_messagesInputSchema).optional()
}).strict();

export const User_messagesUncheckedCreateWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesUncheckedCreateWithoutMessagesInput> = z.object({
  user_message_id: z.string(),
  account_id: z.string().optional().nullable(),
  user_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const User_messagesCreateOrConnectWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesCreateOrConnectWithoutMessagesInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => User_messagesCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema) ]),
}).strict();

export const User_messagesCreateManyMessagesInputEnvelopeSchema: z.ZodType<Prisma.User_messagesCreateManyMessagesInputEnvelope> = z.object({
  data: z.lazy(() => User_messagesCreateManyMessagesInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const User_messagesUpsertWithWhereUniqueWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesUpsertWithWhereUniqueWithoutMessagesInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => User_messagesUpdateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedUpdateWithoutMessagesInputSchema) ]),
  create: z.union([ z.lazy(() => User_messagesCreateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutMessagesInputSchema) ]),
}).strict();

export const User_messagesUpdateWithWhereUniqueWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesUpdateWithWhereUniqueWithoutMessagesInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => User_messagesUpdateWithoutMessagesInputSchema),z.lazy(() => User_messagesUncheckedUpdateWithoutMessagesInputSchema) ]),
}).strict();

export const User_messagesUpdateManyWithWhereWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesUpdateManyWithWhereWithoutMessagesInput> = z.object({
  where: z.lazy(() => User_messagesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => User_messagesUpdateManyMutationInputSchema),z.lazy(() => User_messagesUncheckedUpdateManyWithoutUser_messagesInputSchema) ]),
}).strict();

export const AccountsCreateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsCreateWithoutProjectsInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutProjectsInput> = z.object({
  account_id: z.string(),
  user_id: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export const AccountsUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => AccountsUpdateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => AccountsCreateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export const AccountsUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsUpdateWithoutProjectsInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UsersUpdateOneWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutProjectsInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsCreateWithoutUser_messagesInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutUser_messagesInput> = z.object({
  account_id: z.string(),
  user_id: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsCreateOrConnectWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutUser_messagesInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUser_messagesInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUser_messagesInputSchema) ]),
}).strict();

export const MessagesCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.MessagesCreateWithoutUser_messagesInput> = z.object({
  message_id: z.string(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  date: z.coerce.date().optional().nullable(),
  message: z.string().optional().nullable()
}).strict();

export const MessagesUncheckedCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.MessagesUncheckedCreateWithoutUser_messagesInput> = z.object({
  message_id: z.string(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  date: z.coerce.date().optional().nullable(),
  message: z.string().optional().nullable()
}).strict();

export const MessagesCreateOrConnectWithoutUser_messagesInputSchema: z.ZodType<Prisma.MessagesCreateOrConnectWithoutUser_messagesInput> = z.object({
  where: z.lazy(() => MessagesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessagesCreateWithoutUser_messagesInputSchema),z.lazy(() => MessagesUncheckedCreateWithoutUser_messagesInputSchema) ]),
}).strict();

export const UsersCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersCreateWithoutUser_messagesInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutUser_messagesInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersCreateOrConnectWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutUser_messagesInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutUser_messagesInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUser_messagesInputSchema) ]),
}).strict();

export const AccountsUpsertWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsUpsertWithoutUser_messagesInput> = z.object({
  update: z.union([ z.lazy(() => AccountsUpdateWithoutUser_messagesInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUser_messagesInputSchema) ]),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUser_messagesInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUser_messagesInputSchema) ]),
}).strict();

export const AccountsUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsUpdateWithoutUser_messagesInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UsersUpdateOneWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutUser_messagesInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const MessagesUpsertWithoutUser_messagesInputSchema: z.ZodType<Prisma.MessagesUpsertWithoutUser_messagesInput> = z.object({
  update: z.union([ z.lazy(() => MessagesUpdateWithoutUser_messagesInputSchema),z.lazy(() => MessagesUncheckedUpdateWithoutUser_messagesInputSchema) ]),
  create: z.union([ z.lazy(() => MessagesCreateWithoutUser_messagesInputSchema),z.lazy(() => MessagesUncheckedCreateWithoutUser_messagesInputSchema) ]),
}).strict();

export const MessagesUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.MessagesUpdateWithoutUser_messagesInput> = z.object({
  message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MessagesUncheckedUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.MessagesUncheckedUpdateWithoutUser_messagesInput> = z.object({
  message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UsersUpsertWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersUpsertWithoutUser_messagesInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutUser_messagesInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutUser_messagesInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutUser_messagesInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUser_messagesInputSchema) ]),
}).strict();

export const UsersUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersUpdateWithoutUser_messagesInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutUser_messagesInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const AccountsCreateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsCreateWithoutUsersInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutUsersInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const AccountsCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.AccountsCreateManyUsersInputEnvelope> = z.object({
  data: z.lazy(() => AccountsCreateManyUsersInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const User_messagesCreateWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesCreateWithoutUsersInput> = z.object({
  user_message_id: z.string(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutUser_messagesInputSchema).optional(),
  messages: z.lazy(() => MessagesCreateNestedOneWithoutUser_messagesInputSchema).optional()
}).strict();

export const User_messagesUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesUncheckedCreateWithoutUsersInput> = z.object({
  user_message_id: z.string(),
  account_id: z.string().optional().nullable(),
  message_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const User_messagesCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => User_messagesCreateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const User_messagesCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.User_messagesCreateManyUsersInputEnvelope> = z.object({
  data: z.lazy(() => User_messagesCreateManyUsersInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountsUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountsUpdateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const AccountsUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountsUpdateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const AccountsUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => AccountsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountsUpdateManyMutationInputSchema),z.lazy(() => AccountsUncheckedUpdateManyWithoutAccountsInputSchema) ]),
}).strict();

export const AccountsScalarWhereInputSchema: z.ZodType<Prisma.AccountsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountsScalarWhereInputSchema),z.lazy(() => AccountsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsScalarWhereInputSchema),z.lazy(() => AccountsScalarWhereInputSchema).array() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  period_start: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  period_end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  projects_label_by: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const User_messagesUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => User_messagesUpdateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => User_messagesCreateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const User_messagesUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => User_messagesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => User_messagesUpdateWithoutUsersInputSchema),z.lazy(() => User_messagesUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const User_messagesUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => User_messagesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => User_messagesUpdateManyMutationInputSchema),z.lazy(() => User_messagesUncheckedUpdateManyWithoutUser_messagesInputSchema) ]),
}).strict();

export const ProjectsCreateManyAccountsInputSchema: z.ZodType<Prisma.ProjectsCreateManyAccountsInput> = z.object({
  project_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  type: z.lazy(() => project_typeSchema).optional().nullable(),
  subproject_name_singular: z.string().optional().nullable(),
  subproject_name_plural: z.string().optional().nullable(),
  subproject_order_by: z.string().optional().nullable(),
  places_label_by: z.string().optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.string().optional().nullable(),
  persons_order_by: z.string().optional().nullable(),
  goal_reports_label_by: z.string().optional().nullable(),
  goal_reports_order_by: z.string().optional().nullable(),
  values_on_multiple_levels: z.string().optional().nullable(),
  multiple_action_values_on_same_level: z.string().optional().nullable(),
  multiple_check_values_on_same_level: z.string().optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.boolean().optional().nullable(),
  files_active_projects: z.boolean().optional().nullable(),
  files_active_subprojects: z.boolean().optional().nullable(),
  files_active_places: z.boolean().optional().nullable(),
  files_active_actions: z.boolean().optional().nullable(),
  files_active_checks: z.boolean().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const User_messagesCreateManyAccountsInputSchema: z.ZodType<Prisma.User_messagesCreateManyAccountsInput> = z.object({
  user_message_id: z.string().uuid(),
  user_id: z.string().uuid().optional().nullable(),
  message_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const ProjectsUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUpdateWithoutAccountsInput> = z.object({
  project_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NullableEnumproject_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  persons_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_projects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_subprojects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_places: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectsUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUncheckedUpdateWithoutAccountsInput> = z.object({
  project_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NullableEnumproject_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  persons_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_projects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_subprojects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_places: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectsUncheckedUpdateManyWithoutProjectsInputSchema: z.ZodType<Prisma.ProjectsUncheckedUpdateManyWithoutProjectsInput> = z.object({
  project_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NullableEnumproject_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subproject_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  places_order_by: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  persons_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  persons_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goal_reports_order_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  values_on_multiple_levels: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_action_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  multiple_check_values_on_same_level: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  files_offline: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_projects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_subprojects: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_places: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  files_active_checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesUpdateWithoutAccountsInput> = z.object({
  user_message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  messages: z.lazy(() => MessagesUpdateOneWithoutUser_messagesNestedInputSchema).optional(),
  users: z.lazy(() => UsersUpdateOneWithoutUser_messagesNestedInputSchema).optional()
}).strict();

export const User_messagesUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateWithoutAccountsInput> = z.object({
  user_message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesUncheckedUpdateManyWithoutUser_messagesInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateManyWithoutUser_messagesInput> = z.object({
  user_message_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesCreateManyMessagesInputSchema: z.ZodType<Prisma.User_messagesCreateManyMessagesInput> = z.object({
  user_message_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  user_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const User_messagesUpdateWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesUpdateWithoutMessagesInput> = z.object({
  user_message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutUser_messagesNestedInputSchema).optional(),
  users: z.lazy(() => UsersUpdateOneWithoutUser_messagesNestedInputSchema).optional()
}).strict();

export const User_messagesUncheckedUpdateWithoutMessagesInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateWithoutMessagesInput> = z.object({
  user_message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountsCreateManyUsersInputSchema: z.ZodType<Prisma.AccountsCreateManyUsersInput> = z.object({
  account_id: z.string().uuid(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const User_messagesCreateManyUsersInputSchema: z.ZodType<Prisma.User_messagesCreateManyUsersInput> = z.object({
  user_message_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  message_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const AccountsUpdateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUpdateWithoutUsersInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutUsersInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateManyWithoutAccountsInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const User_messagesUpdateWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesUpdateWithoutUsersInput> = z.object({
  user_message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutUser_messagesNestedInputSchema).optional(),
  messages: z.lazy(() => MessagesUpdateOneWithoutUser_messagesNestedInputSchema).optional()
}).strict();

export const User_messagesUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.User_messagesUncheckedUpdateWithoutUsersInput> = z.object({
  user_message_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  read: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountsFindFirstArgsSchema: z.ZodType<Prisma.AccountsFindFirstArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.AccountsFindFirstArgs>

export const AccountsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountsFindFirstOrThrowArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.AccountsFindFirstOrThrowArgs>

export const AccountsFindManyArgsSchema: z.ZodType<Prisma.AccountsFindManyArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.AccountsFindManyArgs>

export const AccountsAggregateArgsSchema: z.ZodType<Prisma.AccountsAggregateArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.AccountsAggregateArgs>

export const AccountsGroupByArgsSchema: z.ZodType<Prisma.AccountsGroupByArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithAggregationInputSchema.array(),AccountsOrderByWithAggregationInputSchema ]).optional(),
  by: AccountsScalarFieldEnumSchema.array(),
  having: AccountsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.AccountsGroupByArgs>

export const AccountsFindUniqueArgsSchema: z.ZodType<Prisma.AccountsFindUniqueArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AccountsFindUniqueArgs>

export const AccountsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountsFindUniqueOrThrowArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AccountsFindUniqueOrThrowArgs>

export const MessagesFindFirstArgsSchema: z.ZodType<Prisma.MessagesFindFirstArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  where: MessagesWhereInputSchema.optional(),
  orderBy: z.union([ MessagesOrderByWithRelationInputSchema.array(),MessagesOrderByWithRelationInputSchema ]).optional(),
  cursor: MessagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.MessagesFindFirstArgs>

export const MessagesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MessagesFindFirstOrThrowArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  where: MessagesWhereInputSchema.optional(),
  orderBy: z.union([ MessagesOrderByWithRelationInputSchema.array(),MessagesOrderByWithRelationInputSchema ]).optional(),
  cursor: MessagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.MessagesFindFirstOrThrowArgs>

export const MessagesFindManyArgsSchema: z.ZodType<Prisma.MessagesFindManyArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  where: MessagesWhereInputSchema.optional(),
  orderBy: z.union([ MessagesOrderByWithRelationInputSchema.array(),MessagesOrderByWithRelationInputSchema ]).optional(),
  cursor: MessagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MessagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.MessagesFindManyArgs>

export const MessagesAggregateArgsSchema: z.ZodType<Prisma.MessagesAggregateArgs> = z.object({
  where: MessagesWhereInputSchema.optional(),
  orderBy: z.union([ MessagesOrderByWithRelationInputSchema.array(),MessagesOrderByWithRelationInputSchema ]).optional(),
  cursor: MessagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.MessagesAggregateArgs>

export const MessagesGroupByArgsSchema: z.ZodType<Prisma.MessagesGroupByArgs> = z.object({
  where: MessagesWhereInputSchema.optional(),
  orderBy: z.union([ MessagesOrderByWithAggregationInputSchema.array(),MessagesOrderByWithAggregationInputSchema ]).optional(),
  by: MessagesScalarFieldEnumSchema.array(),
  having: MessagesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.MessagesGroupByArgs>

export const MessagesFindUniqueArgsSchema: z.ZodType<Prisma.MessagesFindUniqueArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  where: MessagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MessagesFindUniqueArgs>

export const MessagesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MessagesFindUniqueOrThrowArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  where: MessagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MessagesFindUniqueOrThrowArgs>

export const ProjectsFindFirstArgsSchema: z.ZodType<Prisma.ProjectsFindFirstArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  where: ProjectsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsOrderByWithRelationInputSchema.array(),ProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProjectsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ProjectsFindFirstArgs>

export const ProjectsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectsFindFirstOrThrowArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  where: ProjectsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsOrderByWithRelationInputSchema.array(),ProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProjectsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ProjectsFindFirstOrThrowArgs>

export const ProjectsFindManyArgsSchema: z.ZodType<Prisma.ProjectsFindManyArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  where: ProjectsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsOrderByWithRelationInputSchema.array(),ProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProjectsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ProjectsFindManyArgs>

export const ProjectsAggregateArgsSchema: z.ZodType<Prisma.ProjectsAggregateArgs> = z.object({
  where: ProjectsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsOrderByWithRelationInputSchema.array(),ProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ProjectsAggregateArgs>

export const ProjectsGroupByArgsSchema: z.ZodType<Prisma.ProjectsGroupByArgs> = z.object({
  where: ProjectsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsOrderByWithAggregationInputSchema.array(),ProjectsOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectsScalarFieldEnumSchema.array(),
  having: ProjectsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ProjectsGroupByArgs>

export const ProjectsFindUniqueArgsSchema: z.ZodType<Prisma.ProjectsFindUniqueArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  where: ProjectsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ProjectsFindUniqueArgs>

export const ProjectsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProjectsFindUniqueOrThrowArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  where: ProjectsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ProjectsFindUniqueOrThrowArgs>

export const User_messagesFindFirstArgsSchema: z.ZodType<Prisma.User_messagesFindFirstArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  where: User_messagesWhereInputSchema.optional(),
  orderBy: z.union([ User_messagesOrderByWithRelationInputSchema.array(),User_messagesOrderByWithRelationInputSchema ]).optional(),
  cursor: User_messagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: User_messagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.User_messagesFindFirstArgs>

export const User_messagesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.User_messagesFindFirstOrThrowArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  where: User_messagesWhereInputSchema.optional(),
  orderBy: z.union([ User_messagesOrderByWithRelationInputSchema.array(),User_messagesOrderByWithRelationInputSchema ]).optional(),
  cursor: User_messagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: User_messagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.User_messagesFindFirstOrThrowArgs>

export const User_messagesFindManyArgsSchema: z.ZodType<Prisma.User_messagesFindManyArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  where: User_messagesWhereInputSchema.optional(),
  orderBy: z.union([ User_messagesOrderByWithRelationInputSchema.array(),User_messagesOrderByWithRelationInputSchema ]).optional(),
  cursor: User_messagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: User_messagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.User_messagesFindManyArgs>

export const User_messagesAggregateArgsSchema: z.ZodType<Prisma.User_messagesAggregateArgs> = z.object({
  where: User_messagesWhereInputSchema.optional(),
  orderBy: z.union([ User_messagesOrderByWithRelationInputSchema.array(),User_messagesOrderByWithRelationInputSchema ]).optional(),
  cursor: User_messagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.User_messagesAggregateArgs>

export const User_messagesGroupByArgsSchema: z.ZodType<Prisma.User_messagesGroupByArgs> = z.object({
  where: User_messagesWhereInputSchema.optional(),
  orderBy: z.union([ User_messagesOrderByWithAggregationInputSchema.array(),User_messagesOrderByWithAggregationInputSchema ]).optional(),
  by: User_messagesScalarFieldEnumSchema.array(),
  having: User_messagesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.User_messagesGroupByArgs>

export const User_messagesFindUniqueArgsSchema: z.ZodType<Prisma.User_messagesFindUniqueArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  where: User_messagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.User_messagesFindUniqueArgs>

export const User_messagesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.User_messagesFindUniqueOrThrowArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  where: User_messagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.User_messagesFindUniqueOrThrowArgs>

export const UsersFindFirstArgsSchema: z.ZodType<Prisma.UsersFindFirstArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UsersScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.UsersFindFirstArgs>

export const UsersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UsersFindFirstOrThrowArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UsersScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.UsersFindFirstOrThrowArgs>

export const UsersFindManyArgsSchema: z.ZodType<Prisma.UsersFindManyArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UsersScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.UsersFindManyArgs>

export const UsersAggregateArgsSchema: z.ZodType<Prisma.UsersAggregateArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.UsersAggregateArgs>

export const UsersGroupByArgsSchema: z.ZodType<Prisma.UsersGroupByArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithAggregationInputSchema.array(),UsersOrderByWithAggregationInputSchema ]).optional(),
  by: UsersScalarFieldEnumSchema.array(),
  having: UsersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.UsersGroupByArgs>

export const UsersFindUniqueArgsSchema: z.ZodType<Prisma.UsersFindUniqueArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UsersFindUniqueArgs>

export const UsersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UsersFindUniqueOrThrowArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UsersFindUniqueOrThrowArgs>

export const AccountsCreateArgsSchema: z.ZodType<Prisma.AccountsCreateArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  data: z.union([ AccountsCreateInputSchema,AccountsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.AccountsCreateArgs>

export const AccountsUpsertArgsSchema: z.ZodType<Prisma.AccountsUpsertArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
  create: z.union([ AccountsCreateInputSchema,AccountsUncheckedCreateInputSchema ]),
  update: z.union([ AccountsUpdateInputSchema,AccountsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.AccountsUpsertArgs>

export const AccountsCreateManyArgsSchema: z.ZodType<Prisma.AccountsCreateManyArgs> = z.object({
  data: AccountsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.AccountsCreateManyArgs>

export const AccountsDeleteArgsSchema: z.ZodType<Prisma.AccountsDeleteArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AccountsDeleteArgs>

export const AccountsUpdateArgsSchema: z.ZodType<Prisma.AccountsUpdateArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  data: z.union([ AccountsUpdateInputSchema,AccountsUncheckedUpdateInputSchema ]),
  where: AccountsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AccountsUpdateArgs>

export const AccountsUpdateManyArgsSchema: z.ZodType<Prisma.AccountsUpdateManyArgs> = z.object({
  data: z.union([ AccountsUpdateManyMutationInputSchema,AccountsUncheckedUpdateManyInputSchema ]),
  where: AccountsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.AccountsUpdateManyArgs>

export const AccountsDeleteManyArgsSchema: z.ZodType<Prisma.AccountsDeleteManyArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.AccountsDeleteManyArgs>

export const MessagesCreateArgsSchema: z.ZodType<Prisma.MessagesCreateArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  data: z.union([ MessagesCreateInputSchema,MessagesUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.MessagesCreateArgs>

export const MessagesUpsertArgsSchema: z.ZodType<Prisma.MessagesUpsertArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  where: MessagesWhereUniqueInputSchema,
  create: z.union([ MessagesCreateInputSchema,MessagesUncheckedCreateInputSchema ]),
  update: z.union([ MessagesUpdateInputSchema,MessagesUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.MessagesUpsertArgs>

export const MessagesCreateManyArgsSchema: z.ZodType<Prisma.MessagesCreateManyArgs> = z.object({
  data: MessagesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.MessagesCreateManyArgs>

export const MessagesDeleteArgsSchema: z.ZodType<Prisma.MessagesDeleteArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  where: MessagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MessagesDeleteArgs>

export const MessagesUpdateArgsSchema: z.ZodType<Prisma.MessagesUpdateArgs> = z.object({
  select: MessagesSelectSchema.optional(),
  include: MessagesIncludeSchema.optional(),
  data: z.union([ MessagesUpdateInputSchema,MessagesUncheckedUpdateInputSchema ]),
  where: MessagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MessagesUpdateArgs>

export const MessagesUpdateManyArgsSchema: z.ZodType<Prisma.MessagesUpdateManyArgs> = z.object({
  data: z.union([ MessagesUpdateManyMutationInputSchema,MessagesUncheckedUpdateManyInputSchema ]),
  where: MessagesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.MessagesUpdateManyArgs>

export const MessagesDeleteManyArgsSchema: z.ZodType<Prisma.MessagesDeleteManyArgs> = z.object({
  where: MessagesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.MessagesDeleteManyArgs>

export const ProjectsCreateArgsSchema: z.ZodType<Prisma.ProjectsCreateArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  data: z.union([ ProjectsCreateInputSchema,ProjectsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ProjectsCreateArgs>

export const ProjectsUpsertArgsSchema: z.ZodType<Prisma.ProjectsUpsertArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  where: ProjectsWhereUniqueInputSchema,
  create: z.union([ ProjectsCreateInputSchema,ProjectsUncheckedCreateInputSchema ]),
  update: z.union([ ProjectsUpdateInputSchema,ProjectsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ProjectsUpsertArgs>

export const ProjectsCreateManyArgsSchema: z.ZodType<Prisma.ProjectsCreateManyArgs> = z.object({
  data: ProjectsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ProjectsCreateManyArgs>

export const ProjectsDeleteArgsSchema: z.ZodType<Prisma.ProjectsDeleteArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  where: ProjectsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ProjectsDeleteArgs>

export const ProjectsUpdateArgsSchema: z.ZodType<Prisma.ProjectsUpdateArgs> = z.object({
  select: ProjectsSelectSchema.optional(),
  include: ProjectsIncludeSchema.optional(),
  data: z.union([ ProjectsUpdateInputSchema,ProjectsUncheckedUpdateInputSchema ]),
  where: ProjectsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ProjectsUpdateArgs>

export const ProjectsUpdateManyArgsSchema: z.ZodType<Prisma.ProjectsUpdateManyArgs> = z.object({
  data: z.union([ ProjectsUpdateManyMutationInputSchema,ProjectsUncheckedUpdateManyInputSchema ]),
  where: ProjectsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ProjectsUpdateManyArgs>

export const ProjectsDeleteManyArgsSchema: z.ZodType<Prisma.ProjectsDeleteManyArgs> = z.object({
  where: ProjectsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ProjectsDeleteManyArgs>

export const User_messagesCreateArgsSchema: z.ZodType<Prisma.User_messagesCreateArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  data: z.union([ User_messagesCreateInputSchema,User_messagesUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.User_messagesCreateArgs>

export const User_messagesUpsertArgsSchema: z.ZodType<Prisma.User_messagesUpsertArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  where: User_messagesWhereUniqueInputSchema,
  create: z.union([ User_messagesCreateInputSchema,User_messagesUncheckedCreateInputSchema ]),
  update: z.union([ User_messagesUpdateInputSchema,User_messagesUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.User_messagesUpsertArgs>

export const User_messagesCreateManyArgsSchema: z.ZodType<Prisma.User_messagesCreateManyArgs> = z.object({
  data: User_messagesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.User_messagesCreateManyArgs>

export const User_messagesDeleteArgsSchema: z.ZodType<Prisma.User_messagesDeleteArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  where: User_messagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.User_messagesDeleteArgs>

export const User_messagesUpdateArgsSchema: z.ZodType<Prisma.User_messagesUpdateArgs> = z.object({
  select: User_messagesSelectSchema.optional(),
  include: User_messagesIncludeSchema.optional(),
  data: z.union([ User_messagesUpdateInputSchema,User_messagesUncheckedUpdateInputSchema ]),
  where: User_messagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.User_messagesUpdateArgs>

export const User_messagesUpdateManyArgsSchema: z.ZodType<Prisma.User_messagesUpdateManyArgs> = z.object({
  data: z.union([ User_messagesUpdateManyMutationInputSchema,User_messagesUncheckedUpdateManyInputSchema ]),
  where: User_messagesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.User_messagesUpdateManyArgs>

export const User_messagesDeleteManyArgsSchema: z.ZodType<Prisma.User_messagesDeleteManyArgs> = z.object({
  where: User_messagesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.User_messagesDeleteManyArgs>

export const UsersCreateArgsSchema: z.ZodType<Prisma.UsersCreateArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  data: z.union([ UsersCreateInputSchema,UsersUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.UsersCreateArgs>

export const UsersUpsertArgsSchema: z.ZodType<Prisma.UsersUpsertArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
  create: z.union([ UsersCreateInputSchema,UsersUncheckedCreateInputSchema ]),
  update: z.union([ UsersUpdateInputSchema,UsersUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.UsersUpsertArgs>

export const UsersCreateManyArgsSchema: z.ZodType<Prisma.UsersCreateManyArgs> = z.object({
  data: UsersCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.UsersCreateManyArgs>

export const UsersDeleteArgsSchema: z.ZodType<Prisma.UsersDeleteArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UsersDeleteArgs>

export const UsersUpdateArgsSchema: z.ZodType<Prisma.UsersUpdateArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  data: z.union([ UsersUpdateInputSchema,UsersUncheckedUpdateInputSchema ]),
  where: UsersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UsersUpdateArgs>

export const UsersUpdateManyArgsSchema: z.ZodType<Prisma.UsersUpdateManyArgs> = z.object({
  data: z.union([ UsersUpdateManyMutationInputSchema,UsersUncheckedUpdateManyInputSchema ]),
  where: UsersWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.UsersUpdateManyArgs>

export const UsersDeleteManyArgsSchema: z.ZodType<Prisma.UsersDeleteManyArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.UsersDeleteManyArgs>

interface AccountsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.AccountsArgs
  readonly type: Prisma.AccountsGetPayload<this['_A']>
}

interface MessagesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.MessagesArgs
  readonly type: Prisma.MessagesGetPayload<this['_A']>
}

interface ProjectsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProjectsArgs
  readonly type: Prisma.ProjectsGetPayload<this['_A']>
}

interface User_messagesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.User_messagesArgs
  readonly type: Prisma.User_messagesGetPayload<this['_A']>
}

interface UsersGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.UsersArgs
  readonly type: Prisma.UsersGetPayload<this['_A']>
}

export const tableSchemas = {
  accounts: {
    fields: new Map([
      [
        "account_id",
        "UUID"
      ],
      [
        "user_id",
        "UUID"
      ],
      [
        "type",
        "TEXT"
      ],
      [
        "period_start",
        "DATE"
      ],
      [
        "period_end",
        "DATE"
      ],
      [
        "projects_label_by",
        "TEXT"
      ],
      [
        "label",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("users", "user_id", "user_id", "users", "AccountsToUsers", "one"),
      new Relation("projects", "", "", "projects", "AccountsToProjects", "many"),
      new Relation("user_messages", "", "", "user_messages", "AccountsToUser_messages", "many"),
    ],
    modelSchema: (AccountsCreateInputSchema as any)
      .partial()
      .or((AccountsUncheckedCreateInputSchema as any).partial()),
    createSchema: AccountsCreateArgsSchema,
    createManySchema: AccountsCreateManyArgsSchema,
    findUniqueSchema: AccountsFindUniqueArgsSchema,
    findSchema: AccountsFindFirstArgsSchema,
    updateSchema: AccountsUpdateArgsSchema,
    updateManySchema: AccountsUpdateManyArgsSchema,
    upsertSchema: AccountsUpsertArgsSchema,
    deleteSchema: AccountsDeleteArgsSchema,
    deleteManySchema: AccountsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof AccountsCreateInputSchema>,
    Prisma.AccountsCreateArgs['data'],
    Prisma.AccountsUpdateArgs['data'],
    Prisma.AccountsFindFirstArgs['select'],
    Prisma.AccountsFindFirstArgs['where'],
    Prisma.AccountsFindUniqueArgs['where'],
    Omit<Prisma.AccountsInclude, '_count'>,
    Prisma.AccountsFindFirstArgs['orderBy'],
    Prisma.AccountsScalarFieldEnum,
    AccountsGetPayload
  >,
  messages: {
    fields: new Map([
      [
        "message_id",
        "UUID"
      ],
      [
        "label_replace_by_generated_column",
        "TEXT"
      ],
      [
        "date",
        "TIMESTAMP"
      ],
      [
        "message",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("user_messages", "", "", "user_messages", "MessagesToUser_messages", "many"),
    ],
    modelSchema: (MessagesCreateInputSchema as any)
      .partial()
      .or((MessagesUncheckedCreateInputSchema as any).partial()),
    createSchema: MessagesCreateArgsSchema,
    createManySchema: MessagesCreateManyArgsSchema,
    findUniqueSchema: MessagesFindUniqueArgsSchema,
    findSchema: MessagesFindFirstArgsSchema,
    updateSchema: MessagesUpdateArgsSchema,
    updateManySchema: MessagesUpdateManyArgsSchema,
    upsertSchema: MessagesUpsertArgsSchema,
    deleteSchema: MessagesDeleteArgsSchema,
    deleteManySchema: MessagesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof MessagesCreateInputSchema>,
    Prisma.MessagesCreateArgs['data'],
    Prisma.MessagesUpdateArgs['data'],
    Prisma.MessagesFindFirstArgs['select'],
    Prisma.MessagesFindFirstArgs['where'],
    Prisma.MessagesFindUniqueArgs['where'],
    Omit<Prisma.MessagesInclude, '_count'>,
    Prisma.MessagesFindFirstArgs['orderBy'],
    Prisma.MessagesScalarFieldEnum,
    MessagesGetPayload
  >,
  projects: {
    fields: new Map([
      [
        "project_id",
        "UUID"
      ],
      [
        "account_id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "label",
        "TEXT"
      ],
      [
        "type",
        "TEXT"
      ],
      [
        "subproject_name_singular",
        "TEXT"
      ],
      [
        "subproject_name_plural",
        "TEXT"
      ],
      [
        "subproject_order_by",
        "TEXT"
      ],
      [
        "places_label_by",
        "TEXT"
      ],
      [
        "places_order_by",
        "JSONB"
      ],
      [
        "persons_label_by",
        "TEXT"
      ],
      [
        "persons_order_by",
        "TEXT"
      ],
      [
        "goal_reports_label_by",
        "TEXT"
      ],
      [
        "goal_reports_order_by",
        "TEXT"
      ],
      [
        "values_on_multiple_levels",
        "TEXT"
      ],
      [
        "multiple_action_values_on_same_level",
        "TEXT"
      ],
      [
        "multiple_check_values_on_same_level",
        "TEXT"
      ],
      [
        "data",
        "JSONB"
      ],
      [
        "files_offline",
        "BOOL"
      ],
      [
        "files_active_projects",
        "BOOL"
      ],
      [
        "files_active_subprojects",
        "BOOL"
      ],
      [
        "files_active_places",
        "BOOL"
      ],
      [
        "files_active_actions",
        "BOOL"
      ],
      [
        "files_active_checks",
        "BOOL"
      ],
      [
        "deleted",
        "BOOL"
      ]
    ]),
    relations: [
      new Relation("accounts", "account_id", "account_id", "accounts", "AccountsToProjects", "one"),
    ],
    modelSchema: (ProjectsCreateInputSchema as any)
      .partial()
      .or((ProjectsUncheckedCreateInputSchema as any).partial()),
    createSchema: ProjectsCreateArgsSchema,
    createManySchema: ProjectsCreateManyArgsSchema,
    findUniqueSchema: ProjectsFindUniqueArgsSchema,
    findSchema: ProjectsFindFirstArgsSchema,
    updateSchema: ProjectsUpdateArgsSchema,
    updateManySchema: ProjectsUpdateManyArgsSchema,
    upsertSchema: ProjectsUpsertArgsSchema,
    deleteSchema: ProjectsDeleteArgsSchema,
    deleteManySchema: ProjectsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ProjectsCreateInputSchema>,
    Prisma.ProjectsCreateArgs['data'],
    Prisma.ProjectsUpdateArgs['data'],
    Prisma.ProjectsFindFirstArgs['select'],
    Prisma.ProjectsFindFirstArgs['where'],
    Prisma.ProjectsFindUniqueArgs['where'],
    Omit<Prisma.ProjectsInclude, '_count'>,
    Prisma.ProjectsFindFirstArgs['orderBy'],
    Prisma.ProjectsScalarFieldEnum,
    ProjectsGetPayload
  >,
  user_messages: {
    fields: new Map([
      [
        "user_message_id",
        "UUID"
      ],
      [
        "account_id",
        "UUID"
      ],
      [
        "user_id",
        "UUID"
      ],
      [
        "message_id",
        "UUID"
      ],
      [
        "label_replace_by_generated_column",
        "TEXT"
      ],
      [
        "read",
        "BOOL"
      ]
    ]),
    relations: [
      new Relation("accounts", "account_id", "account_id", "accounts", "AccountsToUser_messages", "one"),
      new Relation("messages", "message_id", "message_id", "messages", "MessagesToUser_messages", "one"),
      new Relation("users", "user_id", "user_id", "users", "User_messagesToUsers", "one"),
    ],
    modelSchema: (User_messagesCreateInputSchema as any)
      .partial()
      .or((User_messagesUncheckedCreateInputSchema as any).partial()),
    createSchema: User_messagesCreateArgsSchema,
    createManySchema: User_messagesCreateManyArgsSchema,
    findUniqueSchema: User_messagesFindUniqueArgsSchema,
    findSchema: User_messagesFindFirstArgsSchema,
    updateSchema: User_messagesUpdateArgsSchema,
    updateManySchema: User_messagesUpdateManyArgsSchema,
    upsertSchema: User_messagesUpsertArgsSchema,
    deleteSchema: User_messagesDeleteArgsSchema,
    deleteManySchema: User_messagesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof User_messagesCreateInputSchema>,
    Prisma.User_messagesCreateArgs['data'],
    Prisma.User_messagesUpdateArgs['data'],
    Prisma.User_messagesFindFirstArgs['select'],
    Prisma.User_messagesFindFirstArgs['where'],
    Prisma.User_messagesFindUniqueArgs['where'],
    Omit<Prisma.User_messagesInclude, '_count'>,
    Prisma.User_messagesFindFirstArgs['orderBy'],
    Prisma.User_messagesScalarFieldEnum,
    User_messagesGetPayload
  >,
  users: {
    fields: new Map([
      [
        "user_id",
        "UUID"
      ],
      [
        "email",
        "TEXT"
      ],
      [
        "auth_id",
        "UUID"
      ],
      [
        "label_replace_by_generated_column",
        "TEXT"
      ],
      [
        "deleted",
        "BOOL"
      ]
    ]),
    relations: [
      new Relation("accounts", "", "", "accounts", "AccountsToUsers", "many"),
      new Relation("user_messages", "", "", "user_messages", "User_messagesToUsers", "many"),
    ],
    modelSchema: (UsersCreateInputSchema as any)
      .partial()
      .or((UsersUncheckedCreateInputSchema as any).partial()),
    createSchema: UsersCreateArgsSchema,
    createManySchema: UsersCreateManyArgsSchema,
    findUniqueSchema: UsersFindUniqueArgsSchema,
    findSchema: UsersFindFirstArgsSchema,
    updateSchema: UsersUpdateArgsSchema,
    updateManySchema: UsersUpdateManyArgsSchema,
    upsertSchema: UsersUpsertArgsSchema,
    deleteSchema: UsersDeleteArgsSchema,
    deleteManySchema: UsersDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof UsersCreateInputSchema>,
    Prisma.UsersCreateArgs['data'],
    Prisma.UsersUpdateArgs['data'],
    Prisma.UsersFindFirstArgs['select'],
    Prisma.UsersFindFirstArgs['where'],
    Prisma.UsersFindUniqueArgs['where'],
    Omit<Prisma.UsersInclude, '_count'>,
    Prisma.UsersFindFirstArgs['orderBy'],
    Prisma.UsersScalarFieldEnum,
    UsersGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
export const JsonNull = { __is_electric_json_null__: true }
