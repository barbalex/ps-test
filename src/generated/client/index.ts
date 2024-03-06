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

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',])

export const ProjectsScalarFieldEnumSchema = z.enum(['project_id','account_id','name','label','type','subproject_name_singular','subproject_name_plural','subproject_order_by','places_label_by','places_order_by','persons_label_by','persons_order_by','goal_reports_label_by','goal_reports_order_by','values_on_multiple_levels','multiple_action_values_on_same_level','multiple_check_values_on_same_level','data','files_offline','files_active_projects','files_active_subprojects','files_active_places','files_active_actions','files_active_checks','deleted']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

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
  _count: z.union([z.boolean(),z.lazy(() => AccountsCountOutputTypeArgsSchema)]).optional(),
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

// USERS
//------------------------------------------------------

export const UsersIncludeSchema: z.ZodType<Prisma.UsersInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountsFindManyArgsSchema)]).optional(),
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
}).strict();

export const UsersSelectSchema: z.ZodType<Prisma.UsersSelect> = z.object({
  user_id: z.boolean().optional(),
  email: z.boolean().optional(),
  auth_id: z.boolean().optional(),
  label_replace_by_generated_column: z.boolean().optional(),
  deleted: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsFindManyArgsSchema)]).optional(),
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
  projects: z.lazy(() => ProjectsListRelationFilterSchema).optional()
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
  projects: z.lazy(() => ProjectsOrderByRelationAggregateInputSchema).optional()
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

export const UsersWhereInputSchema: z.ZodType<Prisma.UsersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  auth_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  accounts: z.lazy(() => AccountsListRelationFilterSchema).optional()
}).strict();

export const UsersOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  auth_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountsOrderByRelationAggregateInputSchema).optional()
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
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateInput> = z.object({
  account_id: z.string().uuid(),
  user_id: z.string().uuid().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUpdateInputSchema: z.ZodType<Prisma.AccountsUpdateInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UsersUpdateOneWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
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

export const UsersCreateInputSchema: z.ZodType<Prisma.UsersCreateInput> = z.object({
  user_id: z.string().uuid(),
  email: z.string().optional().nullable(),
  auth_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateInputSchema: z.ZodType<Prisma.UsersUncheckedCreateInput> = z.object({
  user_id: z.string().uuid(),
  email: z.string().optional().nullable(),
  auth_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUpdateInputSchema: z.ZodType<Prisma.UsersUpdateInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
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

export const ProjectsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectsOrderByRelationAggregateInput> = z.object({
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

export const ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUncheckedCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateWithoutAccountsInputSchema).array(),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
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

export const AccountsCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.AccountsCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsCreateWithoutUsersInputSchema).array(),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountsCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountsUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsCreateWithoutUsersInputSchema).array(),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => AccountsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountsCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountsWhereUniqueInputSchema),z.lazy(() => AccountsWhereUniqueInputSchema).array() ]).optional(),
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
  deleted: z.boolean().optional().nullable()
}).strict();

export const UsersUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutAccountsInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
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
}).strict();

export const UsersUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutAccountsInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const AccountsCreateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsCreateWithoutProjectsInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutProjectsInput> = z.object({
  account_id: z.string(),
  user_id: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable()
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
  users: z.lazy(() => UsersUpdateOneWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutProjectsInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountsCreateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsCreateWithoutUsersInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutUsersInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUsersInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const AccountsCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.AccountsCreateManyUsersInputEnvelope> = z.object({
  data: z.lazy(() => AccountsCreateManyUsersInputSchema).array(),
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

export const AccountsCreateManyUsersInputSchema: z.ZodType<Prisma.AccountsCreateManyUsersInput> = z.object({
  account_id: z.string().uuid(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const AccountsUpdateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUpdateWithoutUsersInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutUsersInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateManyWithoutAccountsInput> = z.object({
  account_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

interface ProjectsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProjectsArgs
  readonly type: Prisma.ProjectsGetPayload<this['_A']>
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
