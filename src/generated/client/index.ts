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

export const Field_typesScalarFieldEnumSchema = z.enum(['field_type_id','name','sort','comment','label_replace_by_generated_column','deleted']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]);

export const MessagesScalarFieldEnumSchema = z.enum(['message_id','label_replace_by_generated_column','date','message']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',])

export const Place_levelsScalarFieldEnumSchema = z.enum(['place_level_id','account_id','project_id','level','name_singular','name_plural','name_short','reports','report_values','actions','action_values','action_reports','checks','check_values','check_taxa','observations','label_replace_by_generated_column','deleted']);

export const ProjectsScalarFieldEnumSchema = z.enum(['project_id','account_id','name','label','type','subproject_name_singular','subproject_name_plural','subproject_order_by','places_label_by','places_order_by','persons_label_by','persons_order_by','goal_reports_label_by','goal_reports_order_by','values_on_multiple_levels','multiple_action_values_on_same_level','multiple_check_values_on_same_level','data','files_offline','files_active_projects','files_active_subprojects','files_active_places','files_active_actions','files_active_checks','deleted']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const Ui_optionsScalarFieldEnumSchema = z.enum(['user_id','account_id','designing','breadcrumbs_overflowing','navs_overflowing','tabs','show_map','map_bounds','local_map_show','tile_layer_sorter','vector_layer_sorter','editing_place_geometry','editing_check_geometry','editing_action_geometry','label']);

export const User_messagesScalarFieldEnumSchema = z.enum(['user_message_id','account_id','user_id','message_id','label_replace_by_generated_column','read']);

export const UsersScalarFieldEnumSchema = z.enum(['user_id','email','auth_id','label_replace_by_generated_column','deleted']);

export const Widget_typesScalarFieldEnumSchema = z.enum(['widget_type_id','name','needs_list','sort','comment','label_replace_by_generated_column','deleted']);

export const Widgets_for_fieldsScalarFieldEnumSchema = z.enum(['widget_for_field_id','field_type_id','widget_type_id','label','deleted']);

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
// FIELD TYPES SCHEMA
/////////////////////////////////////////

export const Field_typesSchema = z.object({
  field_type_id: z.string().uuid(),
  name: z.string().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).nullable(),
  comment: z.string().nullable(),
  label_replace_by_generated_column: z.string().nullable(),
  deleted: z.boolean().nullable(),
})

export type Field_types = z.infer<typeof Field_typesSchema>

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
// PLACE LEVELS SCHEMA
/////////////////////////////////////////

export const Place_levelsSchema = z.object({
  place_level_id: z.string().uuid(),
  account_id: z.string().uuid().nullable(),
  project_id: z.string().uuid().nullable(),
  level: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  name_singular: z.string().nullable(),
  name_plural: z.string().nullable(),
  name_short: z.string().nullable(),
  reports: z.boolean().nullable(),
  report_values: z.boolean().nullable(),
  actions: z.boolean().nullable(),
  action_values: z.boolean().nullable(),
  action_reports: z.boolean().nullable(),
  checks: z.boolean().nullable(),
  check_values: z.boolean().nullable(),
  check_taxa: z.boolean().nullable(),
  observations: z.boolean().nullable(),
  label_replace_by_generated_column: z.string().nullable(),
  deleted: z.boolean().nullable(),
})

export type Place_levels = z.infer<typeof Place_levelsSchema>

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
// UI OPTIONS SCHEMA
/////////////////////////////////////////

export const Ui_optionsSchema = z.object({
  user_id: z.string().uuid(),
  account_id: z.string().uuid().nullable(),
  designing: z.boolean().nullable(),
  breadcrumbs_overflowing: z.boolean().nullable(),
  navs_overflowing: z.boolean().nullable(),
  tabs: NullableJsonValue.optional(),
  show_map: z.boolean().nullable(),
  map_bounds: NullableJsonValue.optional(),
  local_map_show: NullableJsonValue.optional(),
  tile_layer_sorter: z.string().nullable(),
  vector_layer_sorter: z.string().nullable(),
  editing_place_geometry: z.string().uuid().nullable(),
  editing_check_geometry: z.string().uuid().nullable(),
  editing_action_geometry: z.string().uuid().nullable(),
  label: z.string().nullable(),
})

export type Ui_options = z.infer<typeof Ui_optionsSchema>

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
// WIDGET TYPES SCHEMA
/////////////////////////////////////////

export const Widget_typesSchema = z.object({
  widget_type_id: z.string().uuid(),
  name: z.string().nullable(),
  needs_list: z.boolean().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).nullable(),
  comment: z.string().nullable(),
  label_replace_by_generated_column: z.string().nullable(),
  deleted: z.boolean().nullable(),
})

export type Widget_types = z.infer<typeof Widget_typesSchema>

/////////////////////////////////////////
// WIDGETS FOR FIELDS SCHEMA
/////////////////////////////////////////

export const Widgets_for_fieldsSchema = z.object({
  widget_for_field_id: z.string().uuid(),
  field_type_id: z.string().uuid().nullable(),
  widget_type_id: z.string().uuid().nullable(),
  label: z.string().nullable(),
  deleted: z.boolean().nullable(),
})

export type Widgets_for_fields = z.infer<typeof Widgets_for_fieldsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNTS
//------------------------------------------------------

export const AccountsIncludeSchema: z.ZodType<Prisma.AccountsInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
  place_levels: z.union([z.boolean(),z.lazy(() => Place_levelsFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsFindManyArgsSchema)]).optional(),
  ui_options: z.union([z.boolean(),z.lazy(() => Ui_optionsFindManyArgsSchema)]).optional(),
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
  place_levels: z.boolean().optional(),
  projects: z.boolean().optional(),
  ui_options: z.boolean().optional(),
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
  place_levels: z.union([z.boolean(),z.lazy(() => Place_levelsFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsFindManyArgsSchema)]).optional(),
  ui_options: z.union([z.boolean(),z.lazy(() => Ui_optionsFindManyArgsSchema)]).optional(),
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AccountsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FIELD TYPES
//------------------------------------------------------

export const Field_typesIncludeSchema: z.ZodType<Prisma.Field_typesInclude> = z.object({
  widgets_for_fields: z.union([z.boolean(),z.lazy(() => Widgets_for_fieldsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Field_typesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const Field_typesArgsSchema: z.ZodType<Prisma.Field_typesArgs> = z.object({
  select: z.lazy(() => Field_typesSelectSchema).optional(),
  include: z.lazy(() => Field_typesIncludeSchema).optional(),
}).strict();

export const Field_typesCountOutputTypeArgsSchema: z.ZodType<Prisma.Field_typesCountOutputTypeArgs> = z.object({
  select: z.lazy(() => Field_typesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const Field_typesCountOutputTypeSelectSchema: z.ZodType<Prisma.Field_typesCountOutputTypeSelect> = z.object({
  widgets_for_fields: z.boolean().optional(),
}).strict();

export const Field_typesSelectSchema: z.ZodType<Prisma.Field_typesSelect> = z.object({
  field_type_id: z.boolean().optional(),
  name: z.boolean().optional(),
  sort: z.boolean().optional(),
  comment: z.boolean().optional(),
  label_replace_by_generated_column: z.boolean().optional(),
  deleted: z.boolean().optional(),
  widgets_for_fields: z.union([z.boolean(),z.lazy(() => Widgets_for_fieldsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Field_typesCountOutputTypeArgsSchema)]).optional(),
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

// PLACE LEVELS
//------------------------------------------------------

export const Place_levelsIncludeSchema: z.ZodType<Prisma.Place_levelsInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsArgsSchema)]).optional(),
}).strict()

export const Place_levelsArgsSchema: z.ZodType<Prisma.Place_levelsArgs> = z.object({
  select: z.lazy(() => Place_levelsSelectSchema).optional(),
  include: z.lazy(() => Place_levelsIncludeSchema).optional(),
}).strict();

export const Place_levelsSelectSchema: z.ZodType<Prisma.Place_levelsSelect> = z.object({
  place_level_id: z.boolean().optional(),
  account_id: z.boolean().optional(),
  project_id: z.boolean().optional(),
  level: z.boolean().optional(),
  name_singular: z.boolean().optional(),
  name_plural: z.boolean().optional(),
  name_short: z.boolean().optional(),
  reports: z.boolean().optional(),
  report_values: z.boolean().optional(),
  actions: z.boolean().optional(),
  action_values: z.boolean().optional(),
  action_reports: z.boolean().optional(),
  checks: z.boolean().optional(),
  check_values: z.boolean().optional(),
  check_taxa: z.boolean().optional(),
  observations: z.boolean().optional(),
  label_replace_by_generated_column: z.boolean().optional(),
  deleted: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsArgsSchema)]).optional(),
}).strict()

// PROJECTS
//------------------------------------------------------

export const ProjectsIncludeSchema: z.ZodType<Prisma.ProjectsInclude> = z.object({
  place_levels: z.union([z.boolean(),z.lazy(() => Place_levelsFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProjectsArgsSchema: z.ZodType<Prisma.ProjectsArgs> = z.object({
  select: z.lazy(() => ProjectsSelectSchema).optional(),
  include: z.lazy(() => ProjectsIncludeSchema).optional(),
}).strict();

export const ProjectsCountOutputTypeArgsSchema: z.ZodType<Prisma.ProjectsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ProjectsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProjectsCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectsCountOutputTypeSelect> = z.object({
  place_levels: z.boolean().optional(),
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
  place_levels: z.union([z.boolean(),z.lazy(() => Place_levelsFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// UI OPTIONS
//------------------------------------------------------

export const Ui_optionsIncludeSchema: z.ZodType<Prisma.Ui_optionsInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export const Ui_optionsArgsSchema: z.ZodType<Prisma.Ui_optionsArgs> = z.object({
  select: z.lazy(() => Ui_optionsSelectSchema).optional(),
  include: z.lazy(() => Ui_optionsIncludeSchema).optional(),
}).strict();

export const Ui_optionsSelectSchema: z.ZodType<Prisma.Ui_optionsSelect> = z.object({
  user_id: z.boolean().optional(),
  account_id: z.boolean().optional(),
  designing: z.boolean().optional(),
  breadcrumbs_overflowing: z.boolean().optional(),
  navs_overflowing: z.boolean().optional(),
  tabs: z.boolean().optional(),
  show_map: z.boolean().optional(),
  map_bounds: z.boolean().optional(),
  local_map_show: z.boolean().optional(),
  tile_layer_sorter: z.boolean().optional(),
  vector_layer_sorter: z.boolean().optional(),
  editing_place_geometry: z.boolean().optional(),
  editing_check_geometry: z.boolean().optional(),
  editing_action_geometry: z.boolean().optional(),
  label: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
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
  ui_options: z.union([z.boolean(),z.lazy(() => Ui_optionsArgsSchema)]).optional(),
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
  ui_options: z.union([z.boolean(),z.lazy(() => Ui_optionsArgsSchema)]).optional(),
  user_messages: z.union([z.boolean(),z.lazy(() => User_messagesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WIDGET TYPES
//------------------------------------------------------

export const Widget_typesIncludeSchema: z.ZodType<Prisma.Widget_typesInclude> = z.object({
  widgets_for_fields: z.union([z.boolean(),z.lazy(() => Widgets_for_fieldsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Widget_typesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const Widget_typesArgsSchema: z.ZodType<Prisma.Widget_typesArgs> = z.object({
  select: z.lazy(() => Widget_typesSelectSchema).optional(),
  include: z.lazy(() => Widget_typesIncludeSchema).optional(),
}).strict();

export const Widget_typesCountOutputTypeArgsSchema: z.ZodType<Prisma.Widget_typesCountOutputTypeArgs> = z.object({
  select: z.lazy(() => Widget_typesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const Widget_typesCountOutputTypeSelectSchema: z.ZodType<Prisma.Widget_typesCountOutputTypeSelect> = z.object({
  widgets_for_fields: z.boolean().optional(),
}).strict();

export const Widget_typesSelectSchema: z.ZodType<Prisma.Widget_typesSelect> = z.object({
  widget_type_id: z.boolean().optional(),
  name: z.boolean().optional(),
  needs_list: z.boolean().optional(),
  sort: z.boolean().optional(),
  comment: z.boolean().optional(),
  label_replace_by_generated_column: z.boolean().optional(),
  deleted: z.boolean().optional(),
  widgets_for_fields: z.union([z.boolean(),z.lazy(() => Widgets_for_fieldsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Widget_typesCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WIDGETS FOR FIELDS
//------------------------------------------------------

export const Widgets_for_fieldsIncludeSchema: z.ZodType<Prisma.Widgets_for_fieldsInclude> = z.object({
  field_types: z.union([z.boolean(),z.lazy(() => Field_typesArgsSchema)]).optional(),
  widget_types: z.union([z.boolean(),z.lazy(() => Widget_typesArgsSchema)]).optional(),
}).strict()

export const Widgets_for_fieldsArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsArgs> = z.object({
  select: z.lazy(() => Widgets_for_fieldsSelectSchema).optional(),
  include: z.lazy(() => Widgets_for_fieldsIncludeSchema).optional(),
}).strict();

export const Widgets_for_fieldsSelectSchema: z.ZodType<Prisma.Widgets_for_fieldsSelect> = z.object({
  widget_for_field_id: z.boolean().optional(),
  field_type_id: z.boolean().optional(),
  widget_type_id: z.boolean().optional(),
  label: z.boolean().optional(),
  deleted: z.boolean().optional(),
  field_types: z.union([z.boolean(),z.lazy(() => Field_typesArgsSchema)]).optional(),
  widget_types: z.union([z.boolean(),z.lazy(() => Widget_typesArgsSchema)]).optional(),
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
  place_levels: z.lazy(() => Place_levelsListRelationFilterSchema).optional(),
  projects: z.lazy(() => ProjectsListRelationFilterSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsListRelationFilterSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => ProjectsOrderByRelationAggregateInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsOrderByRelationAggregateInputSchema).optional(),
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

export const Field_typesWhereInputSchema: z.ZodType<Prisma.Field_typesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Field_typesWhereInputSchema),z.lazy(() => Field_typesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Field_typesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Field_typesWhereInputSchema),z.lazy(() => Field_typesWhereInputSchema).array() ]).optional(),
  field_type_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sort: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsListRelationFilterSchema).optional()
}).strict();

export const Field_typesOrderByWithRelationInputSchema: z.ZodType<Prisma.Field_typesOrderByWithRelationInput> = z.object({
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const Field_typesWhereUniqueInputSchema: z.ZodType<Prisma.Field_typesWhereUniqueInput> = z.object({
  field_type_id: z.string().uuid().optional()
}).strict();

export const Field_typesOrderByWithAggregationInputSchema: z.ZodType<Prisma.Field_typesOrderByWithAggregationInput> = z.object({
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Field_typesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Field_typesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Field_typesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Field_typesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Field_typesSumOrderByAggregateInputSchema).optional()
}).strict();

export const Field_typesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Field_typesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Field_typesScalarWhereWithAggregatesInputSchema),z.lazy(() => Field_typesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Field_typesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Field_typesScalarWhereWithAggregatesInputSchema),z.lazy(() => Field_typesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  field_type_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  sort: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
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

export const Place_levelsWhereInputSchema: z.ZodType<Prisma.Place_levelsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Place_levelsWhereInputSchema),z.lazy(() => Place_levelsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Place_levelsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Place_levelsWhereInputSchema),z.lazy(() => Place_levelsWhereInputSchema).array() ]).optional(),
  place_level_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  project_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  name_singular: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name_plural: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name_short: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reports: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  report_values: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  actions: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  action_values: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  action_reports: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  checks: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  check_values: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  check_taxa: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  observations: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  accounts: z.union([ z.lazy(() => AccountsRelationFilterSchema),z.lazy(() => AccountsWhereInputSchema) ]).optional().nullable(),
  projects: z.union([ z.lazy(() => ProjectsRelationFilterSchema),z.lazy(() => ProjectsWhereInputSchema) ]).optional().nullable(),
}).strict();

export const Place_levelsOrderByWithRelationInputSchema: z.ZodType<Prisma.Place_levelsOrderByWithRelationInput> = z.object({
  place_level_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  project_id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  name_singular: z.lazy(() => SortOrderSchema).optional(),
  name_plural: z.lazy(() => SortOrderSchema).optional(),
  name_short: z.lazy(() => SortOrderSchema).optional(),
  reports: z.lazy(() => SortOrderSchema).optional(),
  report_values: z.lazy(() => SortOrderSchema).optional(),
  actions: z.lazy(() => SortOrderSchema).optional(),
  action_values: z.lazy(() => SortOrderSchema).optional(),
  action_reports: z.lazy(() => SortOrderSchema).optional(),
  checks: z.lazy(() => SortOrderSchema).optional(),
  check_values: z.lazy(() => SortOrderSchema).optional(),
  check_taxa: z.lazy(() => SortOrderSchema).optional(),
  observations: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountsOrderByWithRelationInputSchema).optional(),
  projects: z.lazy(() => ProjectsOrderByWithRelationInputSchema).optional()
}).strict();

export const Place_levelsWhereUniqueInputSchema: z.ZodType<Prisma.Place_levelsWhereUniqueInput> = z.object({
  place_level_id: z.string().uuid().optional()
}).strict();

export const Place_levelsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Place_levelsOrderByWithAggregationInput> = z.object({
  place_level_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  project_id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  name_singular: z.lazy(() => SortOrderSchema).optional(),
  name_plural: z.lazy(() => SortOrderSchema).optional(),
  name_short: z.lazy(() => SortOrderSchema).optional(),
  reports: z.lazy(() => SortOrderSchema).optional(),
  report_values: z.lazy(() => SortOrderSchema).optional(),
  actions: z.lazy(() => SortOrderSchema).optional(),
  action_values: z.lazy(() => SortOrderSchema).optional(),
  action_reports: z.lazy(() => SortOrderSchema).optional(),
  checks: z.lazy(() => SortOrderSchema).optional(),
  check_values: z.lazy(() => SortOrderSchema).optional(),
  check_taxa: z.lazy(() => SortOrderSchema).optional(),
  observations: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Place_levelsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Place_levelsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Place_levelsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Place_levelsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Place_levelsSumOrderByAggregateInputSchema).optional()
}).strict();

export const Place_levelsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Place_levelsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Place_levelsScalarWhereWithAggregatesInputSchema),z.lazy(() => Place_levelsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Place_levelsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Place_levelsScalarWhereWithAggregatesInputSchema),z.lazy(() => Place_levelsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  place_level_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  project_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  name_singular: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  name_plural: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  name_short: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  reports: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  report_values: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  actions: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  action_values: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  action_reports: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  checks: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  check_values: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  check_taxa: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  observations: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
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
  place_levels: z.lazy(() => Place_levelsListRelationFilterSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsOrderByRelationAggregateInputSchema).optional(),
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

export const Ui_optionsWhereInputSchema: z.ZodType<Prisma.Ui_optionsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Ui_optionsWhereInputSchema),z.lazy(() => Ui_optionsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Ui_optionsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Ui_optionsWhereInputSchema),z.lazy(() => Ui_optionsWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  designing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  navs_overflowing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  tabs: z.lazy(() => JsonNullableFilterSchema).optional(),
  show_map: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  map_bounds: z.lazy(() => JsonNullableFilterSchema).optional(),
  local_map_show: z.lazy(() => JsonNullableFilterSchema).optional(),
  tile_layer_sorter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  editing_place_geometry: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  editing_check_geometry: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  editing_action_geometry: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.union([ z.lazy(() => AccountsRelationFilterSchema),z.lazy(() => AccountsWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
}).strict();

export const Ui_optionsOrderByWithRelationInputSchema: z.ZodType<Prisma.Ui_optionsOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  designing: z.lazy(() => SortOrderSchema).optional(),
  breadcrumbs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  navs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  tabs: z.lazy(() => SortOrderSchema).optional(),
  show_map: z.lazy(() => SortOrderSchema).optional(),
  map_bounds: z.lazy(() => SortOrderSchema).optional(),
  local_map_show: z.lazy(() => SortOrderSchema).optional(),
  tile_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  vector_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  editing_place_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_check_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_action_geometry: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountsOrderByWithRelationInputSchema).optional(),
  users: z.lazy(() => UsersOrderByWithRelationInputSchema).optional()
}).strict();

export const Ui_optionsWhereUniqueInputSchema: z.ZodType<Prisma.Ui_optionsWhereUniqueInput> = z.object({
  user_id: z.string().uuid().optional()
}).strict();

export const Ui_optionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Ui_optionsOrderByWithAggregationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  designing: z.lazy(() => SortOrderSchema).optional(),
  breadcrumbs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  navs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  tabs: z.lazy(() => SortOrderSchema).optional(),
  show_map: z.lazy(() => SortOrderSchema).optional(),
  map_bounds: z.lazy(() => SortOrderSchema).optional(),
  local_map_show: z.lazy(() => SortOrderSchema).optional(),
  tile_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  vector_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  editing_place_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_check_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_action_geometry: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Ui_optionsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Ui_optionsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Ui_optionsMinOrderByAggregateInputSchema).optional()
}).strict();

export const Ui_optionsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Ui_optionsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Ui_optionsScalarWhereWithAggregatesInputSchema),z.lazy(() => Ui_optionsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Ui_optionsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Ui_optionsScalarWhereWithAggregatesInputSchema),z.lazy(() => Ui_optionsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  designing: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  navs_overflowing: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  tabs: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  show_map: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  map_bounds: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  local_map_show: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  tile_layer_sorter: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  editing_place_geometry: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  editing_check_geometry: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  editing_action_geometry: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
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
  ui_options: z.union([ z.lazy(() => Ui_optionsRelationFilterSchema),z.lazy(() => Ui_optionsWhereInputSchema) ]).optional().nullable(),
  user_messages: z.lazy(() => User_messagesListRelationFilterSchema).optional()
}).strict();

export const UsersOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  auth_id: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountsOrderByRelationAggregateInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsOrderByWithRelationInputSchema).optional(),
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

export const Widget_typesWhereInputSchema: z.ZodType<Prisma.Widget_typesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Widget_typesWhereInputSchema),z.lazy(() => Widget_typesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Widget_typesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Widget_typesWhereInputSchema),z.lazy(() => Widget_typesWhereInputSchema).array() ]).optional(),
  widget_type_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  needs_list: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  sort: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsListRelationFilterSchema).optional()
}).strict();

export const Widget_typesOrderByWithRelationInputSchema: z.ZodType<Prisma.Widget_typesOrderByWithRelationInput> = z.object({
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  needs_list: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const Widget_typesWhereUniqueInputSchema: z.ZodType<Prisma.Widget_typesWhereUniqueInput> = z.object({
  widget_type_id: z.string().uuid().optional()
}).strict();

export const Widget_typesOrderByWithAggregationInputSchema: z.ZodType<Prisma.Widget_typesOrderByWithAggregationInput> = z.object({
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  needs_list: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Widget_typesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Widget_typesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Widget_typesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Widget_typesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Widget_typesSumOrderByAggregateInputSchema).optional()
}).strict();

export const Widget_typesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Widget_typesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Widget_typesScalarWhereWithAggregatesInputSchema),z.lazy(() => Widget_typesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Widget_typesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Widget_typesScalarWhereWithAggregatesInputSchema),z.lazy(() => Widget_typesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  widget_type_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  needs_list: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  sort: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const Widgets_for_fieldsWhereInputSchema: z.ZodType<Prisma.Widgets_for_fieldsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Widgets_for_fieldsWhereInputSchema),z.lazy(() => Widgets_for_fieldsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Widgets_for_fieldsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Widgets_for_fieldsWhereInputSchema),z.lazy(() => Widgets_for_fieldsWhereInputSchema).array() ]).optional(),
  widget_for_field_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  field_type_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  widget_type_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  field_types: z.union([ z.lazy(() => Field_typesRelationFilterSchema),z.lazy(() => Field_typesWhereInputSchema) ]).optional().nullable(),
  widget_types: z.union([ z.lazy(() => Widget_typesRelationFilterSchema),z.lazy(() => Widget_typesWhereInputSchema) ]).optional().nullable(),
}).strict();

export const Widgets_for_fieldsOrderByWithRelationInputSchema: z.ZodType<Prisma.Widgets_for_fieldsOrderByWithRelationInput> = z.object({
  widget_for_field_id: z.lazy(() => SortOrderSchema).optional(),
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  field_types: z.lazy(() => Field_typesOrderByWithRelationInputSchema).optional(),
  widget_types: z.lazy(() => Widget_typesOrderByWithRelationInputSchema).optional()
}).strict();

export const Widgets_for_fieldsWhereUniqueInputSchema: z.ZodType<Prisma.Widgets_for_fieldsWhereUniqueInput> = z.object({
  widget_for_field_id: z.string().uuid().optional()
}).strict();

export const Widgets_for_fieldsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Widgets_for_fieldsOrderByWithAggregationInput> = z.object({
  widget_for_field_id: z.lazy(() => SortOrderSchema).optional(),
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Widgets_for_fieldsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Widgets_for_fieldsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Widgets_for_fieldsMinOrderByAggregateInputSchema).optional()
}).strict();

export const Widgets_for_fieldsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereWithAggregatesInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Widgets_for_fieldsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereWithAggregatesInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  widget_for_field_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  field_type_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  widget_type_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
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
  place_levels: z.lazy(() => Place_levelsCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsCreateNestedManyWithoutAccountsInputSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUpdateManyWithoutAccountsNestedInputSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
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

export const Field_typesCreateInputSchema: z.ZodType<Prisma.Field_typesCreateInput> = z.object({
  field_type_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsCreateNestedManyWithoutField_typesInputSchema).optional()
}).strict();

export const Field_typesUncheckedCreateInputSchema: z.ZodType<Prisma.Field_typesUncheckedCreateInput> = z.object({
  field_type_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsUncheckedCreateNestedManyWithoutField_typesInputSchema).optional()
}).strict();

export const Field_typesUpdateInputSchema: z.ZodType<Prisma.Field_typesUpdateInput> = z.object({
  field_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsUpdateManyWithoutField_typesNestedInputSchema).optional()
}).strict();

export const Field_typesUncheckedUpdateInputSchema: z.ZodType<Prisma.Field_typesUncheckedUpdateInput> = z.object({
  field_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsUncheckedUpdateManyWithoutField_typesNestedInputSchema).optional()
}).strict();

export const Field_typesCreateManyInputSchema: z.ZodType<Prisma.Field_typesCreateManyInput> = z.object({
  field_type_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Field_typesUpdateManyMutationInputSchema: z.ZodType<Prisma.Field_typesUpdateManyMutationInput> = z.object({
  field_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Field_typesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Field_typesUncheckedUpdateManyInput> = z.object({
  field_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const Place_levelsCreateInputSchema: z.ZodType<Prisma.Place_levelsCreateInput> = z.object({
  place_level_id: z.string().uuid(),
  level: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutPlace_levelsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedOneWithoutPlace_levelsInputSchema).optional()
}).strict();

export const Place_levelsUncheckedCreateInputSchema: z.ZodType<Prisma.Place_levelsUncheckedCreateInput> = z.object({
  place_level_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  project_id: z.string().uuid().optional().nullable(),
  level: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Place_levelsUpdateInputSchema: z.ZodType<Prisma.Place_levelsUpdateInput> = z.object({
  place_level_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutPlace_levelsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateOneWithoutPlace_levelsNestedInputSchema).optional()
}).strict();

export const Place_levelsUncheckedUpdateInputSchema: z.ZodType<Prisma.Place_levelsUncheckedUpdateInput> = z.object({
  place_level_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Place_levelsCreateManyInputSchema: z.ZodType<Prisma.Place_levelsCreateManyInput> = z.object({
  place_level_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  project_id: z.string().uuid().optional().nullable(),
  level: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Place_levelsUpdateManyMutationInputSchema: z.ZodType<Prisma.Place_levelsUpdateManyMutationInput> = z.object({
  place_level_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Place_levelsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Place_levelsUncheckedUpdateManyInput> = z.object({
  place_level_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  place_levels: z.lazy(() => Place_levelsCreateNestedManyWithoutProjectsInputSchema).optional(),
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
  deleted: z.boolean().optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedCreateNestedManyWithoutProjectsInputSchema).optional()
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
  place_levels: z.lazy(() => Place_levelsUpdateManyWithoutProjectsNestedInputSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsUncheckedUpdateManyWithoutProjectsNestedInputSchema).optional()
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

export const Ui_optionsCreateInputSchema: z.ZodType<Prisma.Ui_optionsCreateInput> = z.object({
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().uuid().optional().nullable(),
  editing_check_geometry: z.string().uuid().optional().nullable(),
  editing_action_geometry: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutUi_optionsInputSchema).optional(),
  users: z.lazy(() => UsersCreateNestedOneWithoutUi_optionsInputSchema)
}).strict();

export const Ui_optionsUncheckedCreateInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedCreateInput> = z.object({
  user_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().uuid().optional().nullable(),
  editing_check_geometry: z.string().uuid().optional().nullable(),
  editing_action_geometry: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const Ui_optionsUpdateInputSchema: z.ZodType<Prisma.Ui_optionsUpdateInput> = z.object({
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutUi_optionsNestedInputSchema).optional(),
  users: z.lazy(() => UsersUpdateOneRequiredWithoutUi_optionsNestedInputSchema).optional()
}).strict();

export const Ui_optionsUncheckedUpdateInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedUpdateInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Ui_optionsCreateManyInputSchema: z.ZodType<Prisma.Ui_optionsCreateManyInput> = z.object({
  user_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().uuid().optional().nullable(),
  editing_check_geometry: z.string().uuid().optional().nullable(),
  editing_action_geometry: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const Ui_optionsUpdateManyMutationInputSchema: z.ZodType<Prisma.Ui_optionsUpdateManyMutationInput> = z.object({
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Ui_optionsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedUpdateManyInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  ui_options: z.lazy(() => Ui_optionsCreateNestedOneWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateInputSchema: z.ZodType<Prisma.UsersUncheckedCreateInput> = z.object({
  user_id: z.string().uuid(),
  email: z.string().optional().nullable(),
  auth_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedOneWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUpdateInputSchema: z.ZodType<Prisma.UsersUpdateInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateManyWithoutUsersNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUpdateOneWithoutUsersNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateOneWithoutUsersNestedInputSchema).optional(),
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

export const Widget_typesCreateInputSchema: z.ZodType<Prisma.Widget_typesCreateInput> = z.object({
  widget_type_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  needs_list: z.boolean().optional().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsCreateNestedManyWithoutWidget_typesInputSchema).optional()
}).strict();

export const Widget_typesUncheckedCreateInputSchema: z.ZodType<Prisma.Widget_typesUncheckedCreateInput> = z.object({
  widget_type_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  needs_list: z.boolean().optional().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsUncheckedCreateNestedManyWithoutWidget_typesInputSchema).optional()
}).strict();

export const Widget_typesUpdateInputSchema: z.ZodType<Prisma.Widget_typesUpdateInput> = z.object({
  widget_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  needs_list: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsUpdateManyWithoutWidget_typesNestedInputSchema).optional()
}).strict();

export const Widget_typesUncheckedUpdateInputSchema: z.ZodType<Prisma.Widget_typesUncheckedUpdateInput> = z.object({
  widget_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  needs_list: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  widgets_for_fields: z.lazy(() => Widgets_for_fieldsUncheckedUpdateManyWithoutWidget_typesNestedInputSchema).optional()
}).strict();

export const Widget_typesCreateManyInputSchema: z.ZodType<Prisma.Widget_typesCreateManyInput> = z.object({
  widget_type_id: z.string().uuid(),
  name: z.string().optional().nullable(),
  needs_list: z.boolean().optional().nullable(),
  sort: z.number().int().gte(-32768).lte(32767).optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widget_typesUpdateManyMutationInputSchema: z.ZodType<Prisma.Widget_typesUpdateManyMutationInput> = z.object({
  widget_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  needs_list: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Widget_typesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Widget_typesUncheckedUpdateManyInput> = z.object({
  widget_type_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  needs_list: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Widgets_for_fieldsCreateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateInput> = z.object({
  widget_for_field_id: z.string().uuid(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  field_types: z.lazy(() => Field_typesCreateNestedOneWithoutWidgets_for_fieldsInputSchema).optional(),
  widget_types: z.lazy(() => Widget_typesCreateNestedOneWithoutWidgets_for_fieldsInputSchema).optional()
}).strict();

export const Widgets_for_fieldsUncheckedCreateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedCreateInput> = z.object({
  widget_for_field_id: z.string().uuid(),
  field_type_id: z.string().uuid().optional().nullable(),
  widget_type_id: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widgets_for_fieldsUpdateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateInput> = z.object({
  widget_for_field_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  field_types: z.lazy(() => Field_typesUpdateOneWithoutWidgets_for_fieldsNestedInputSchema).optional(),
  widget_types: z.lazy(() => Widget_typesUpdateOneWithoutWidgets_for_fieldsNestedInputSchema).optional()
}).strict();

export const Widgets_for_fieldsUncheckedUpdateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedUpdateInput> = z.object({
  widget_for_field_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_type_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  widget_type_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Widgets_for_fieldsCreateManyInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateManyInput> = z.object({
  widget_for_field_id: z.string().uuid(),
  field_type_id: z.string().uuid().optional().nullable(),
  widget_type_id: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widgets_for_fieldsUpdateManyMutationInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateManyMutationInput> = z.object({
  widget_for_field_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Widgets_for_fieldsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedUpdateManyInput> = z.object({
  widget_for_field_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_type_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  widget_type_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  is: z.lazy(() => UsersWhereInputSchema).optional(),
  isNot: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export const Place_levelsListRelationFilterSchema: z.ZodType<Prisma.Place_levelsListRelationFilter> = z.object({
  every: z.lazy(() => Place_levelsWhereInputSchema).optional(),
  some: z.lazy(() => Place_levelsWhereInputSchema).optional(),
  none: z.lazy(() => Place_levelsWhereInputSchema).optional()
}).strict();

export const ProjectsListRelationFilterSchema: z.ZodType<Prisma.ProjectsListRelationFilter> = z.object({
  every: z.lazy(() => ProjectsWhereInputSchema).optional(),
  some: z.lazy(() => ProjectsWhereInputSchema).optional(),
  none: z.lazy(() => ProjectsWhereInputSchema).optional()
}).strict();

export const Ui_optionsListRelationFilterSchema: z.ZodType<Prisma.Ui_optionsListRelationFilter> = z.object({
  every: z.lazy(() => Ui_optionsWhereInputSchema).optional(),
  some: z.lazy(() => Ui_optionsWhereInputSchema).optional(),
  none: z.lazy(() => Ui_optionsWhereInputSchema).optional()
}).strict();

export const User_messagesListRelationFilterSchema: z.ZodType<Prisma.User_messagesListRelationFilter> = z.object({
  every: z.lazy(() => User_messagesWhereInputSchema).optional(),
  some: z.lazy(() => User_messagesWhereInputSchema).optional(),
  none: z.lazy(() => User_messagesWhereInputSchema).optional()
}).strict();

export const Place_levelsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Place_levelsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Ui_optionsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Ui_optionsOrderByRelationAggregateInput> = z.object({
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

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const Widgets_for_fieldsListRelationFilterSchema: z.ZodType<Prisma.Widgets_for_fieldsListRelationFilter> = z.object({
  every: z.lazy(() => Widgets_for_fieldsWhereInputSchema).optional(),
  some: z.lazy(() => Widgets_for_fieldsWhereInputSchema).optional(),
  none: z.lazy(() => Widgets_for_fieldsWhereInputSchema).optional()
}).strict();

export const Widgets_for_fieldsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Field_typesCountOrderByAggregateInputSchema: z.ZodType<Prisma.Field_typesCountOrderByAggregateInput> = z.object({
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Field_typesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Field_typesAvgOrderByAggregateInput> = z.object({
  sort: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Field_typesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Field_typesMaxOrderByAggregateInput> = z.object({
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Field_typesMinOrderByAggregateInputSchema: z.ZodType<Prisma.Field_typesMinOrderByAggregateInput> = z.object({
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Field_typesSumOrderByAggregateInputSchema: z.ZodType<Prisma.Field_typesSumOrderByAggregateInput> = z.object({
  sort: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
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

export const AccountsRelationFilterSchema: z.ZodType<Prisma.AccountsRelationFilter> = z.object({
  is: z.lazy(() => AccountsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AccountsWhereInputSchema).optional().nullable()
}).strict();

export const ProjectsRelationFilterSchema: z.ZodType<Prisma.ProjectsRelationFilter> = z.object({
  is: z.lazy(() => ProjectsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProjectsWhereInputSchema).optional().nullable()
}).strict();

export const Place_levelsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Place_levelsCountOrderByAggregateInput> = z.object({
  place_level_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  project_id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  name_singular: z.lazy(() => SortOrderSchema).optional(),
  name_plural: z.lazy(() => SortOrderSchema).optional(),
  name_short: z.lazy(() => SortOrderSchema).optional(),
  reports: z.lazy(() => SortOrderSchema).optional(),
  report_values: z.lazy(() => SortOrderSchema).optional(),
  actions: z.lazy(() => SortOrderSchema).optional(),
  action_values: z.lazy(() => SortOrderSchema).optional(),
  action_reports: z.lazy(() => SortOrderSchema).optional(),
  checks: z.lazy(() => SortOrderSchema).optional(),
  check_values: z.lazy(() => SortOrderSchema).optional(),
  check_taxa: z.lazy(() => SortOrderSchema).optional(),
  observations: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Place_levelsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Place_levelsAvgOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Place_levelsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Place_levelsMaxOrderByAggregateInput> = z.object({
  place_level_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  project_id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  name_singular: z.lazy(() => SortOrderSchema).optional(),
  name_plural: z.lazy(() => SortOrderSchema).optional(),
  name_short: z.lazy(() => SortOrderSchema).optional(),
  reports: z.lazy(() => SortOrderSchema).optional(),
  report_values: z.lazy(() => SortOrderSchema).optional(),
  actions: z.lazy(() => SortOrderSchema).optional(),
  action_values: z.lazy(() => SortOrderSchema).optional(),
  action_reports: z.lazy(() => SortOrderSchema).optional(),
  checks: z.lazy(() => SortOrderSchema).optional(),
  check_values: z.lazy(() => SortOrderSchema).optional(),
  check_taxa: z.lazy(() => SortOrderSchema).optional(),
  observations: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Place_levelsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Place_levelsMinOrderByAggregateInput> = z.object({
  place_level_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  project_id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  name_singular: z.lazy(() => SortOrderSchema).optional(),
  name_plural: z.lazy(() => SortOrderSchema).optional(),
  name_short: z.lazy(() => SortOrderSchema).optional(),
  reports: z.lazy(() => SortOrderSchema).optional(),
  report_values: z.lazy(() => SortOrderSchema).optional(),
  actions: z.lazy(() => SortOrderSchema).optional(),
  action_values: z.lazy(() => SortOrderSchema).optional(),
  action_reports: z.lazy(() => SortOrderSchema).optional(),
  checks: z.lazy(() => SortOrderSchema).optional(),
  check_values: z.lazy(() => SortOrderSchema).optional(),
  check_taxa: z.lazy(() => SortOrderSchema).optional(),
  observations: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Place_levelsSumOrderByAggregateInputSchema: z.ZodType<Prisma.Place_levelsSumOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional()
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

export const Ui_optionsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Ui_optionsCountOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  designing: z.lazy(() => SortOrderSchema).optional(),
  breadcrumbs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  navs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  tabs: z.lazy(() => SortOrderSchema).optional(),
  show_map: z.lazy(() => SortOrderSchema).optional(),
  map_bounds: z.lazy(() => SortOrderSchema).optional(),
  local_map_show: z.lazy(() => SortOrderSchema).optional(),
  tile_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  vector_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  editing_place_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_check_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_action_geometry: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Ui_optionsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Ui_optionsMaxOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  designing: z.lazy(() => SortOrderSchema).optional(),
  breadcrumbs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  navs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  show_map: z.lazy(() => SortOrderSchema).optional(),
  tile_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  vector_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  editing_place_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_check_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_action_geometry: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Ui_optionsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Ui_optionsMinOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  designing: z.lazy(() => SortOrderSchema).optional(),
  breadcrumbs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  navs_overflowing: z.lazy(() => SortOrderSchema).optional(),
  show_map: z.lazy(() => SortOrderSchema).optional(),
  tile_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  vector_layer_sorter: z.lazy(() => SortOrderSchema).optional(),
  editing_place_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_check_geometry: z.lazy(() => SortOrderSchema).optional(),
  editing_action_geometry: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
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

export const Ui_optionsRelationFilterSchema: z.ZodType<Prisma.Ui_optionsRelationFilter> = z.object({
  is: z.lazy(() => Ui_optionsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => Ui_optionsWhereInputSchema).optional().nullable()
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

export const Widget_typesCountOrderByAggregateInputSchema: z.ZodType<Prisma.Widget_typesCountOrderByAggregateInput> = z.object({
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  needs_list: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Widget_typesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Widget_typesAvgOrderByAggregateInput> = z.object({
  sort: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Widget_typesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Widget_typesMaxOrderByAggregateInput> = z.object({
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  needs_list: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Widget_typesMinOrderByAggregateInputSchema: z.ZodType<Prisma.Widget_typesMinOrderByAggregateInput> = z.object({
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  needs_list: z.lazy(() => SortOrderSchema).optional(),
  sort: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  label_replace_by_generated_column: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Widget_typesSumOrderByAggregateInputSchema: z.ZodType<Prisma.Widget_typesSumOrderByAggregateInput> = z.object({
  sort: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Field_typesRelationFilterSchema: z.ZodType<Prisma.Field_typesRelationFilter> = z.object({
  is: z.lazy(() => Field_typesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => Field_typesWhereInputSchema).optional().nullable()
}).strict();

export const Widget_typesRelationFilterSchema: z.ZodType<Prisma.Widget_typesRelationFilter> = z.object({
  is: z.lazy(() => Widget_typesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => Widget_typesWhereInputSchema).optional().nullable()
}).strict();

export const Widgets_for_fieldsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCountOrderByAggregateInput> = z.object({
  widget_for_field_id: z.lazy(() => SortOrderSchema).optional(),
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Widgets_for_fieldsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsMaxOrderByAggregateInput> = z.object({
  widget_for_field_id: z.lazy(() => SortOrderSchema).optional(),
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Widgets_for_fieldsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Widgets_for_fieldsMinOrderByAggregateInput> = z.object({
  widget_for_field_id: z.lazy(() => SortOrderSchema).optional(),
  field_type_id: z.lazy(() => SortOrderSchema).optional(),
  widget_type_id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export const Place_levelsCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProjectsCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateWithoutAccountsInputSchema).array(),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Ui_optionsCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Ui_optionsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const User_messagesCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.User_messagesCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => User_messagesCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateWithoutAccountsInputSchema).array(),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => User_messagesUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => User_messagesCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => User_messagesCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => User_messagesWhereUniqueInputSchema),z.lazy(() => User_messagesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Place_levelsUncheckedCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsUncheckedCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsUncheckedCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateWithoutAccountsInputSchema).array(),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => ProjectsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsWhereUniqueInputSchema),z.lazy(() => ProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Ui_optionsUncheckedCreateNestedManyWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedCreateNestedManyWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Ui_optionsCreateManyAccountsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
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

export const Place_levelsUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.Place_levelsUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Place_levelsUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => Place_levelsUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Place_levelsScalarWhereInputSchema),z.lazy(() => Place_levelsScalarWhereInputSchema).array() ]).optional(),
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

export const Ui_optionsUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.Ui_optionsUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Ui_optionsUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Ui_optionsCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Ui_optionsUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Ui_optionsUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Ui_optionsScalarWhereInputSchema),z.lazy(() => Ui_optionsScalarWhereInputSchema).array() ]).optional(),
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

export const Place_levelsUncheckedUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.Place_levelsUncheckedUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Place_levelsUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => Place_levelsUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Place_levelsScalarWhereInputSchema),z.lazy(() => Place_levelsScalarWhereInputSchema).array() ]).optional(),
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

export const Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema).array(),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema),z.lazy(() => Ui_optionsCreateOrConnectWithoutAccountsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Ui_optionsUpsertWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUpsertWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Ui_optionsCreateManyAccountsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Ui_optionsWhereUniqueInputSchema),z.lazy(() => Ui_optionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Ui_optionsUpdateWithWhereUniqueWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUpdateWithWhereUniqueWithoutAccountsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Ui_optionsUpdateManyWithWhereWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUpdateManyWithWhereWithoutAccountsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Ui_optionsScalarWhereInputSchema),z.lazy(() => Ui_optionsScalarWhereInputSchema).array() ]).optional(),
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

export const Widgets_for_fieldsCreateNestedManyWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateNestedManyWithoutField_typesInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyField_typesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Widgets_for_fieldsUncheckedCreateNestedManyWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedCreateNestedManyWithoutField_typesInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyField_typesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const Widgets_for_fieldsUpdateManyWithoutField_typesNestedInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateManyWithoutField_typesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyField_typesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Widgets_for_fieldsUncheckedUpdateManyWithoutField_typesNestedInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedUpdateManyWithoutField_typesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyField_typesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema).array() ]).optional(),
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

export const AccountsCreateNestedOneWithoutPlace_levelsInputSchema: z.ZodType<Prisma.AccountsCreateNestedOneWithoutPlace_levelsInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutPlace_levelsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutPlace_levelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutPlace_levelsInputSchema).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional()
}).strict();

export const ProjectsCreateNestedOneWithoutPlace_levelsInputSchema: z.ZodType<Prisma.ProjectsCreateNestedOneWithoutPlace_levelsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutPlace_levelsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutPlace_levelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectsCreateOrConnectWithoutPlace_levelsInputSchema).optional(),
  connect: z.lazy(() => ProjectsWhereUniqueInputSchema).optional()
}).strict();

export const AccountsUpdateOneWithoutPlace_levelsNestedInputSchema: z.ZodType<Prisma.AccountsUpdateOneWithoutPlace_levelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutPlace_levelsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutPlace_levelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutPlace_levelsInputSchema).optional(),
  upsert: z.lazy(() => AccountsUpsertWithoutPlace_levelsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateWithoutPlace_levelsInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutPlace_levelsInputSchema) ]).optional(),
}).strict();

export const ProjectsUpdateOneWithoutPlace_levelsNestedInputSchema: z.ZodType<Prisma.ProjectsUpdateOneWithoutPlace_levelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsCreateWithoutPlace_levelsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutPlace_levelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectsCreateOrConnectWithoutPlace_levelsInputSchema).optional(),
  upsert: z.lazy(() => ProjectsUpsertWithoutPlace_levelsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ProjectsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectsUpdateWithoutPlace_levelsInputSchema),z.lazy(() => ProjectsUncheckedUpdateWithoutPlace_levelsInputSchema) ]).optional(),
}).strict();

export const Place_levelsCreateNestedManyWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsCreateNestedManyWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyProjectsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountsCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional()
}).strict();

export const Place_levelsUncheckedCreateNestedManyWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsUncheckedCreateNestedManyWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyProjectsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableEnumproject_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumproject_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => project_typeSchema).optional().nullable()
}).strict();

export const Place_levelsUpdateManyWithoutProjectsNestedInputSchema: z.ZodType<Prisma.Place_levelsUpdateManyWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutProjectsInputSchema),z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutProjectsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyProjectsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutProjectsInputSchema),z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutProjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Place_levelsUpdateManyWithWhereWithoutProjectsInputSchema),z.lazy(() => Place_levelsUpdateManyWithWhereWithoutProjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Place_levelsScalarWhereInputSchema),z.lazy(() => Place_levelsScalarWhereInputSchema).array() ]).optional(),
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

export const Place_levelsUncheckedUpdateManyWithoutProjectsNestedInputSchema: z.ZodType<Prisma.Place_levelsUncheckedUpdateManyWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema).array(),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema),z.lazy(() => Place_levelsCreateOrConnectWithoutProjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutProjectsInputSchema),z.lazy(() => Place_levelsUpsertWithWhereUniqueWithoutProjectsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Place_levelsCreateManyProjectsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Place_levelsWhereUniqueInputSchema),z.lazy(() => Place_levelsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutProjectsInputSchema),z.lazy(() => Place_levelsUpdateWithWhereUniqueWithoutProjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Place_levelsUpdateManyWithWhereWithoutProjectsInputSchema),z.lazy(() => Place_levelsUpdateManyWithWhereWithoutProjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Place_levelsScalarWhereInputSchema),z.lazy(() => Place_levelsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountsCreateNestedOneWithoutUi_optionsInputSchema: z.ZodType<Prisma.AccountsCreateNestedOneWithoutUi_optionsInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUi_optionsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUi_optionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUi_optionsInputSchema).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional()
}).strict();

export const UsersCreateNestedOneWithoutUi_optionsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutUi_optionsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutUi_optionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUi_optionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutUi_optionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export const AccountsUpdateOneWithoutUi_optionsNestedInputSchema: z.ZodType<Prisma.AccountsUpdateOneWithoutUi_optionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUi_optionsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUi_optionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUi_optionsInputSchema).optional(),
  upsert: z.lazy(() => AccountsUpsertWithoutUi_optionsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateWithoutUi_optionsInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUi_optionsInputSchema) ]).optional(),
}).strict();

export const UsersUpdateOneRequiredWithoutUi_optionsNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneRequiredWithoutUi_optionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutUi_optionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUi_optionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutUi_optionsInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutUi_optionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateWithoutUi_optionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutUi_optionsInputSchema) ]).optional(),
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

export const Ui_optionsCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Ui_optionsCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => Ui_optionsWhereUniqueInputSchema).optional()
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

export const Ui_optionsUncheckedCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Ui_optionsCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => Ui_optionsWhereUniqueInputSchema).optional()
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

export const Ui_optionsUpdateOneWithoutUsersNestedInputSchema: z.ZodType<Prisma.Ui_optionsUpdateOneWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Ui_optionsCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => Ui_optionsUpsertWithoutUsersInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Ui_optionsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Ui_optionsUpdateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
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

export const Ui_optionsUncheckedUpdateOneWithoutUsersNestedInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedUpdateOneWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Ui_optionsCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => Ui_optionsUpsertWithoutUsersInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Ui_optionsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Ui_optionsUpdateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
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

export const Widgets_for_fieldsCreateNestedManyWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateNestedManyWithoutWidget_typesInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyWidget_typesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Widgets_for_fieldsUncheckedCreateNestedManyWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedCreateNestedManyWithoutWidget_typesInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyWidget_typesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Widgets_for_fieldsUpdateManyWithoutWidget_typesNestedInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateManyWithoutWidget_typesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyWidget_typesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Widgets_for_fieldsUncheckedUpdateManyWithoutWidget_typesNestedInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedUpdateManyWithoutWidget_typesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema).array(),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Widgets_for_fieldsCreateManyWidget_typesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Field_typesCreateNestedOneWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Field_typesCreateNestedOneWithoutWidgets_for_fieldsInput> = z.object({
  create: z.union([ z.lazy(() => Field_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Field_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Field_typesCreateOrConnectWithoutWidgets_for_fieldsInputSchema).optional(),
  connect: z.lazy(() => Field_typesWhereUniqueInputSchema).optional()
}).strict();

export const Widget_typesCreateNestedOneWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widget_typesCreateNestedOneWithoutWidgets_for_fieldsInput> = z.object({
  create: z.union([ z.lazy(() => Widget_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Widget_typesCreateOrConnectWithoutWidgets_for_fieldsInputSchema).optional(),
  connect: z.lazy(() => Widget_typesWhereUniqueInputSchema).optional()
}).strict();

export const Field_typesUpdateOneWithoutWidgets_for_fieldsNestedInputSchema: z.ZodType<Prisma.Field_typesUpdateOneWithoutWidgets_for_fieldsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Field_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Field_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Field_typesCreateOrConnectWithoutWidgets_for_fieldsInputSchema).optional(),
  upsert: z.lazy(() => Field_typesUpsertWithoutWidgets_for_fieldsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Field_typesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Field_typesUpdateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInputSchema) ]).optional(),
}).strict();

export const Widget_typesUpdateOneWithoutWidgets_for_fieldsNestedInputSchema: z.ZodType<Prisma.Widget_typesUpdateOneWithoutWidgets_for_fieldsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Widget_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Widget_typesCreateOrConnectWithoutWidgets_for_fieldsInputSchema).optional(),
  upsert: z.lazy(() => Widget_typesUpsertWithoutWidgets_for_fieldsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Widget_typesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Widget_typesUpdateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInputSchema) ]).optional(),
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

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const NestedEnumproject_typeNullableFilterSchema: z.ZodType<Prisma.NestedEnumproject_typeNullableFilter> = z.object({
  equals: z.lazy(() => project_typeSchema).optional().nullable(),
  in: z.lazy(() => project_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => project_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => project_typeSchema),z.lazy(() => NestedEnumproject_typeNullableFilterSchema) ]).optional().nullable(),
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

export const UsersCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateWithoutAccountsInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  ui_options: z.lazy(() => Ui_optionsCreateNestedOneWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutAccountsInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedOneWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const Place_levelsCreateWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsCreateWithoutAccountsInput> = z.object({
  place_level_id: z.string(),
  level: z.number().optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  projects: z.lazy(() => ProjectsCreateNestedOneWithoutPlace_levelsInputSchema).optional()
}).strict();

export const Place_levelsUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsUncheckedCreateWithoutAccountsInput> = z.object({
  place_level_id: z.string(),
  project_id: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Place_levelsCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => Place_levelsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const Place_levelsCreateManyAccountsInputEnvelopeSchema: z.ZodType<Prisma.Place_levelsCreateManyAccountsInputEnvelope> = z.object({
  data: z.lazy(() => Place_levelsCreateManyAccountsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
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
  deleted: z.boolean().optional().nullable(),
  place_levels: z.lazy(() => Place_levelsCreateNestedManyWithoutProjectsInputSchema).optional()
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
  deleted: z.boolean().optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedCreateNestedManyWithoutProjectsInputSchema).optional()
}).strict();

export const ProjectsCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.ProjectsCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => ProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectsCreateWithoutAccountsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const ProjectsCreateManyAccountsInputEnvelopeSchema: z.ZodType<Prisma.ProjectsCreateManyAccountsInputEnvelope> = z.object({
  data: z.lazy(() => ProjectsCreateManyAccountsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Ui_optionsCreateWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsCreateWithoutAccountsInput> = z.object({
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().optional().nullable(),
  editing_check_geometry: z.string().optional().nullable(),
  editing_action_geometry: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutUi_optionsInputSchema)
}).strict();

export const Ui_optionsUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedCreateWithoutAccountsInput> = z.object({
  user_id: z.string(),
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().optional().nullable(),
  editing_check_geometry: z.string().optional().nullable(),
  editing_action_geometry: z.string().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const Ui_optionsCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => Ui_optionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const Ui_optionsCreateManyAccountsInputEnvelopeSchema: z.ZodType<Prisma.Ui_optionsCreateManyAccountsInputEnvelope> = z.object({
  data: z.lazy(() => Ui_optionsCreateManyAccountsInputSchema).array(),
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
  ui_options: z.lazy(() => Ui_optionsUpdateOneWithoutUsersNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutAccountsInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateOneWithoutUsersNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const Place_levelsUpsertWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsUpsertWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => Place_levelsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Place_levelsUpdateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const Place_levelsUpdateWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsUpdateWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => Place_levelsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Place_levelsUpdateWithoutAccountsInputSchema),z.lazy(() => Place_levelsUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const Place_levelsUpdateManyWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsUpdateManyWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => Place_levelsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Place_levelsUpdateManyMutationInputSchema),z.lazy(() => Place_levelsUncheckedUpdateManyWithoutPlace_levelsInputSchema) ]),
}).strict();

export const Place_levelsScalarWhereInputSchema: z.ZodType<Prisma.Place_levelsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Place_levelsScalarWhereInputSchema),z.lazy(() => Place_levelsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Place_levelsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Place_levelsScalarWhereInputSchema),z.lazy(() => Place_levelsScalarWhereInputSchema).array() ]).optional(),
  place_level_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  project_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  name_singular: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name_plural: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name_short: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reports: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  report_values: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  actions: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  action_values: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  action_reports: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  checks: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  check_values: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  check_taxa: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  observations: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
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

export const Ui_optionsUpsertWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsUpsertWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => Ui_optionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Ui_optionsUpdateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const Ui_optionsUpdateWithWhereUniqueWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsUpdateWithWhereUniqueWithoutAccountsInput> = z.object({
  where: z.lazy(() => Ui_optionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Ui_optionsUpdateWithoutAccountsInputSchema),z.lazy(() => Ui_optionsUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const Ui_optionsUpdateManyWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsUpdateManyWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => Ui_optionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Ui_optionsUpdateManyMutationInputSchema),z.lazy(() => Ui_optionsUncheckedUpdateManyWithoutUi_optionsInputSchema) ]),
}).strict();

export const Ui_optionsScalarWhereInputSchema: z.ZodType<Prisma.Ui_optionsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Ui_optionsScalarWhereInputSchema),z.lazy(() => Ui_optionsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Ui_optionsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Ui_optionsScalarWhereInputSchema),z.lazy(() => Ui_optionsScalarWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  designing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  navs_overflowing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  tabs: z.lazy(() => JsonNullableFilterSchema).optional(),
  show_map: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  map_bounds: z.lazy(() => JsonNullableFilterSchema).optional(),
  local_map_show: z.lazy(() => JsonNullableFilterSchema).optional(),
  tile_layer_sorter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  editing_place_geometry: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  editing_check_geometry: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  editing_action_geometry: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
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

export const Widgets_for_fieldsCreateWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateWithoutField_typesInput> = z.object({
  widget_for_field_id: z.string(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  widget_types: z.lazy(() => Widget_typesCreateNestedOneWithoutWidgets_for_fieldsInputSchema).optional()
}).strict();

export const Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedCreateWithoutField_typesInput> = z.object({
  widget_for_field_id: z.string(),
  widget_type_id: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widgets_for_fieldsCreateOrConnectWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateOrConnectWithoutField_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema) ]),
}).strict();

export const Widgets_for_fieldsCreateManyField_typesInputEnvelopeSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateManyField_typesInputEnvelope> = z.object({
  data: z.lazy(() => Widgets_for_fieldsCreateManyField_typesInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpsertWithWhereUniqueWithoutField_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedUpdateWithoutField_typesInputSchema) ]),
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutField_typesInputSchema) ]),
}).strict();

export const Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateWithWhereUniqueWithoutField_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithoutField_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedUpdateWithoutField_typesInputSchema) ]),
}).strict();

export const Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateManyWithWhereWithoutField_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Widgets_for_fieldsUpdateManyMutationInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedUpdateManyWithoutWidgets_for_fieldsInputSchema) ]),
}).strict();

export const Widgets_for_fieldsScalarWhereInputSchema: z.ZodType<Prisma.Widgets_for_fieldsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema).array() ]).optional(),
  widget_for_field_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  field_type_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  widget_type_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deleted: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
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

export const AccountsCreateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.AccountsCreateWithoutPlace_levelsInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutPlace_levelsInput> = z.object({
  account_id: z.string(),
  user_id: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsCreateOrConnectWithoutPlace_levelsInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutPlace_levelsInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutPlace_levelsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutPlace_levelsInputSchema) ]),
}).strict();

export const ProjectsCreateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.ProjectsCreateWithoutPlace_levelsInput> = z.object({
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
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutProjectsInputSchema).optional()
}).strict();

export const ProjectsUncheckedCreateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.ProjectsUncheckedCreateWithoutPlace_levelsInput> = z.object({
  project_id: z.string(),
  account_id: z.string().optional().nullable(),
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

export const ProjectsCreateOrConnectWithoutPlace_levelsInputSchema: z.ZodType<Prisma.ProjectsCreateOrConnectWithoutPlace_levelsInput> = z.object({
  where: z.lazy(() => ProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectsCreateWithoutPlace_levelsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutPlace_levelsInputSchema) ]),
}).strict();

export const AccountsUpsertWithoutPlace_levelsInputSchema: z.ZodType<Prisma.AccountsUpsertWithoutPlace_levelsInput> = z.object({
  update: z.union([ z.lazy(() => AccountsUpdateWithoutPlace_levelsInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutPlace_levelsInputSchema) ]),
  create: z.union([ z.lazy(() => AccountsCreateWithoutPlace_levelsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutPlace_levelsInputSchema) ]),
}).strict();

export const AccountsUpdateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.AccountsUpdateWithoutPlace_levelsInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UsersUpdateOneWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutPlace_levelsInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const ProjectsUpsertWithoutPlace_levelsInputSchema: z.ZodType<Prisma.ProjectsUpsertWithoutPlace_levelsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectsUpdateWithoutPlace_levelsInputSchema),z.lazy(() => ProjectsUncheckedUpdateWithoutPlace_levelsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectsCreateWithoutPlace_levelsInputSchema),z.lazy(() => ProjectsUncheckedCreateWithoutPlace_levelsInputSchema) ]),
}).strict();

export const ProjectsUpdateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.ProjectsUpdateWithoutPlace_levelsInput> = z.object({
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
  accounts: z.lazy(() => AccountsUpdateOneWithoutProjectsNestedInputSchema).optional()
}).strict();

export const ProjectsUncheckedUpdateWithoutPlace_levelsInputSchema: z.ZodType<Prisma.ProjectsUncheckedUpdateWithoutPlace_levelsInput> = z.object({
  project_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const Place_levelsCreateWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsCreateWithoutProjectsInput> = z.object({
  place_level_id: z.string(),
  level: z.number().optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutPlace_levelsInputSchema).optional()
}).strict();

export const Place_levelsUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsUncheckedCreateWithoutProjectsInput> = z.object({
  place_level_id: z.string(),
  account_id: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Place_levelsCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => Place_levelsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export const Place_levelsCreateManyProjectsInputEnvelopeSchema: z.ZodType<Prisma.Place_levelsCreateManyProjectsInputEnvelope> = z.object({
  data: z.lazy(() => Place_levelsCreateManyProjectsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountsCreateWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsCreateWithoutProjectsInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional(),
  place_levels: z.lazy(() => Place_levelsCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsCreateNestedManyWithoutAccountsInputSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutProjectsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export const Place_levelsUpsertWithWhereUniqueWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsUpsertWithWhereUniqueWithoutProjectsInput> = z.object({
  where: z.lazy(() => Place_levelsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Place_levelsUpdateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => Place_levelsCreateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export const Place_levelsUpdateWithWhereUniqueWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsUpdateWithWhereUniqueWithoutProjectsInput> = z.object({
  where: z.lazy(() => Place_levelsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Place_levelsUpdateWithoutProjectsInputSchema),z.lazy(() => Place_levelsUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export const Place_levelsUpdateManyWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsUpdateManyWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => Place_levelsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Place_levelsUpdateManyMutationInputSchema),z.lazy(() => Place_levelsUncheckedUpdateManyWithoutPlace_levelsInputSchema) ]),
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
  place_levels: z.lazy(() => Place_levelsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUpdateManyWithoutAccountsNestedInputSchema).optional(),
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
  place_levels: z.lazy(() => Place_levelsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsCreateWithoutUi_optionsInputSchema: z.ZodType<Prisma.AccountsCreateWithoutUi_optionsInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional(),
  place_levels: z.lazy(() => Place_levelsCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutUi_optionsInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutUi_optionsInput> = z.object({
  account_id: z.string(),
  user_id: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsCreateOrConnectWithoutUi_optionsInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutUi_optionsInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUi_optionsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUi_optionsInputSchema) ]),
}).strict();

export const UsersCreateWithoutUi_optionsInputSchema: z.ZodType<Prisma.UsersCreateWithoutUi_optionsInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedManyWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutUi_optionsInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutUi_optionsInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UsersCreateOrConnectWithoutUi_optionsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutUi_optionsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutUi_optionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUi_optionsInputSchema) ]),
}).strict();

export const AccountsUpsertWithoutUi_optionsInputSchema: z.ZodType<Prisma.AccountsUpsertWithoutUi_optionsInput> = z.object({
  update: z.union([ z.lazy(() => AccountsUpdateWithoutUi_optionsInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUi_optionsInputSchema) ]),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUi_optionsInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUi_optionsInputSchema) ]),
}).strict();

export const AccountsUpdateWithoutUi_optionsInputSchema: z.ZodType<Prisma.AccountsUpdateWithoutUi_optionsInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UsersUpdateOneWithoutAccountsNestedInputSchema).optional(),
  place_levels: z.lazy(() => Place_levelsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutUi_optionsInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutUi_optionsInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const UsersUpsertWithoutUi_optionsInputSchema: z.ZodType<Prisma.UsersUpsertWithoutUi_optionsInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutUi_optionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutUi_optionsInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutUi_optionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutUi_optionsInputSchema) ]),
}).strict();

export const UsersUpdateWithoutUi_optionsInputSchema: z.ZodType<Prisma.UsersUpdateWithoutUi_optionsInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutUi_optionsInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutUi_optionsInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const AccountsCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsCreateWithoutUser_messagesInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  users: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional(),
  place_levels: z.lazy(() => Place_levelsCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutUser_messagesInput> = z.object({
  account_id: z.string(),
  user_id: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional()
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
  accounts: z.lazy(() => AccountsCreateNestedManyWithoutUsersInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsCreateNestedOneWithoutUsersInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutUser_messagesInput> = z.object({
  user_id: z.string(),
  email: z.string().optional().nullable(),
  auth_id: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedOneWithoutUsersInputSchema).optional()
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
  place_levels: z.lazy(() => Place_levelsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutUser_messagesInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional()
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
  accounts: z.lazy(() => AccountsUpdateManyWithoutUsersNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUpdateOneWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutUser_messagesInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutUser_messagesInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateOneWithoutUsersNestedInputSchema).optional()
}).strict();

export const AccountsCreateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsCreateWithoutUsersInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  place_levels: z.lazy(() => Place_levelsCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsCreateNestedManyWithoutAccountsInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesCreateNestedManyWithoutAccountsInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutUsersInput> = z.object({
  account_id: z.string(),
  type: z.string().optional().nullable(),
  period_start: z.coerce.date().optional().nullable(),
  period_end: z.coerce.date().optional().nullable(),
  projects_label_by: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedCreateNestedManyWithoutAccountsInputSchema).optional(),
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

export const Ui_optionsCreateWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsCreateWithoutUsersInput> = z.object({
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().optional().nullable(),
  editing_check_geometry: z.string().optional().nullable(),
  editing_action_geometry: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountsCreateNestedOneWithoutUi_optionsInputSchema).optional()
}).strict();

export const Ui_optionsUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedCreateWithoutUsersInput> = z.object({
  account_id: z.string().optional().nullable(),
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().optional().nullable(),
  editing_check_geometry: z.string().optional().nullable(),
  editing_action_geometry: z.string().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const Ui_optionsCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => Ui_optionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutUsersInputSchema) ]),
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

export const Ui_optionsUpsertWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => Ui_optionsUpdateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => Ui_optionsCreateWithoutUsersInputSchema),z.lazy(() => Ui_optionsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const Ui_optionsUpdateWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsUpdateWithoutUsersInput> = z.object({
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutUi_optionsNestedInputSchema).optional()
}).strict();

export const Ui_optionsUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedUpdateWithoutUsersInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const Widgets_for_fieldsCreateWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateWithoutWidget_typesInput> = z.object({
  widget_for_field_id: z.string(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable(),
  field_types: z.lazy(() => Field_typesCreateNestedOneWithoutWidgets_for_fieldsInputSchema).optional()
}).strict();

export const Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInput> = z.object({
  widget_for_field_id: z.string(),
  field_type_id: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateOrConnectWithoutWidget_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema) ]),
}).strict();

export const Widgets_for_fieldsCreateManyWidget_typesInputEnvelopeSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateManyWidget_typesInputEnvelope> = z.object({
  data: z.lazy(() => Widgets_for_fieldsCreateManyWidget_typesInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpsertWithWhereUniqueWithoutWidget_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedUpdateWithoutWidget_typesInputSchema) ]),
  create: z.union([ z.lazy(() => Widgets_for_fieldsCreateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedCreateWithoutWidget_typesInputSchema) ]),
}).strict();

export const Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateWithWhereUniqueWithoutWidget_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Widgets_for_fieldsUpdateWithoutWidget_typesInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedUpdateWithoutWidget_typesInputSchema) ]),
}).strict();

export const Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateManyWithWhereWithoutWidget_typesInput> = z.object({
  where: z.lazy(() => Widgets_for_fieldsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Widgets_for_fieldsUpdateManyMutationInputSchema),z.lazy(() => Widgets_for_fieldsUncheckedUpdateManyWithoutWidgets_for_fieldsInputSchema) ]),
}).strict();

export const Field_typesCreateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Field_typesCreateWithoutWidgets_for_fieldsInput> = z.object({
  field_type_id: z.string(),
  name: z.string().optional().nullable(),
  sort: z.number().optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Field_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Field_typesUncheckedCreateWithoutWidgets_for_fieldsInput> = z.object({
  field_type_id: z.string(),
  name: z.string().optional().nullable(),
  sort: z.number().optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Field_typesCreateOrConnectWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Field_typesCreateOrConnectWithoutWidgets_for_fieldsInput> = z.object({
  where: z.lazy(() => Field_typesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Field_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Field_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]),
}).strict();

export const Widget_typesCreateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widget_typesCreateWithoutWidgets_for_fieldsInput> = z.object({
  widget_type_id: z.string(),
  name: z.string().optional().nullable(),
  needs_list: z.boolean().optional().nullable(),
  sort: z.number().optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInput> = z.object({
  widget_type_id: z.string(),
  name: z.string().optional().nullable(),
  needs_list: z.boolean().optional().nullable(),
  sort: z.number().optional().nullable(),
  comment: z.string().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widget_typesCreateOrConnectWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widget_typesCreateOrConnectWithoutWidgets_for_fieldsInput> = z.object({
  where: z.lazy(() => Widget_typesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Widget_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]),
}).strict();

export const Field_typesUpsertWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Field_typesUpsertWithoutWidgets_for_fieldsInput> = z.object({
  update: z.union([ z.lazy(() => Field_typesUpdateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInputSchema) ]),
  create: z.union([ z.lazy(() => Field_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Field_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]),
}).strict();

export const Field_typesUpdateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Field_typesUpdateWithoutWidgets_for_fieldsInput> = z.object({
  field_type_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Field_typesUncheckedUpdateWithoutWidgets_for_fieldsInput> = z.object({
  field_type_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Widget_typesUpsertWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widget_typesUpsertWithoutWidgets_for_fieldsInput> = z.object({
  update: z.union([ z.lazy(() => Widget_typesUpdateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInputSchema) ]),
  create: z.union([ z.lazy(() => Widget_typesCreateWithoutWidgets_for_fieldsInputSchema),z.lazy(() => Widget_typesUncheckedCreateWithoutWidgets_for_fieldsInputSchema) ]),
}).strict();

export const Widget_typesUpdateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widget_typesUpdateWithoutWidgets_for_fieldsInput> = z.object({
  widget_type_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  needs_list: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widget_typesUncheckedUpdateWithoutWidgets_for_fieldsInput> = z.object({
  widget_type_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  needs_list: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sort: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Place_levelsCreateManyAccountsInputSchema: z.ZodType<Prisma.Place_levelsCreateManyAccountsInput> = z.object({
  place_level_id: z.string().uuid(),
  project_id: z.string().uuid().optional().nullable(),
  level: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
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

export const Ui_optionsCreateManyAccountsInputSchema: z.ZodType<Prisma.Ui_optionsCreateManyAccountsInput> = z.object({
  user_id: z.string().uuid(),
  designing: z.boolean().optional().nullable(),
  breadcrumbs_overflowing: z.boolean().optional().nullable(),
  navs_overflowing: z.boolean().optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.boolean().optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.string().optional().nullable(),
  vector_layer_sorter: z.string().optional().nullable(),
  editing_place_geometry: z.string().uuid().optional().nullable(),
  editing_check_geometry: z.string().uuid().optional().nullable(),
  editing_action_geometry: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable()
}).strict();

export const User_messagesCreateManyAccountsInputSchema: z.ZodType<Prisma.User_messagesCreateManyAccountsInput> = z.object({
  user_message_id: z.string().uuid(),
  user_id: z.string().uuid().optional().nullable(),
  message_id: z.string().uuid().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  read: z.boolean().optional().nullable()
}).strict();

export const Place_levelsUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsUpdateWithoutAccountsInput> = z.object({
  place_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects: z.lazy(() => ProjectsUpdateOneWithoutPlace_levelsNestedInputSchema).optional()
}).strict();

export const Place_levelsUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.Place_levelsUncheckedUpdateWithoutAccountsInput> = z.object({
  place_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Place_levelsUncheckedUpdateManyWithoutPlace_levelsInputSchema: z.ZodType<Prisma.Place_levelsUncheckedUpdateManyWithoutPlace_levelsInput> = z.object({
  place_level_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  place_levels: z.lazy(() => Place_levelsUpdateManyWithoutProjectsNestedInputSchema).optional()
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
  place_levels: z.lazy(() => Place_levelsUncheckedUpdateManyWithoutProjectsNestedInputSchema).optional()
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

export const Ui_optionsUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsUpdateWithoutAccountsInput> = z.object({
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UsersUpdateOneRequiredWithoutUi_optionsNestedInputSchema).optional()
}).strict();

export const Ui_optionsUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedUpdateWithoutAccountsInput> = z.object({
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Ui_optionsUncheckedUpdateManyWithoutUi_optionsInputSchema: z.ZodType<Prisma.Ui_optionsUncheckedUpdateManyWithoutUi_optionsInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  designing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breadcrumbs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  navs_overflowing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tabs: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  show_map: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  map_bounds: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  local_map_show: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  tile_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  vector_layer_sorter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_place_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_check_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  editing_action_geometry: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const Widgets_for_fieldsCreateManyField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateManyField_typesInput> = z.object({
  widget_for_field_id: z.string().uuid(),
  widget_type_id: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widgets_for_fieldsUpdateWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateWithoutField_typesInput> = z.object({
  widget_for_field_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  widget_types: z.lazy(() => Widget_typesUpdateOneWithoutWidgets_for_fieldsNestedInputSchema).optional()
}).strict();

export const Widgets_for_fieldsUncheckedUpdateWithoutField_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedUpdateWithoutField_typesInput> = z.object({
  widget_for_field_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widget_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Widgets_for_fieldsUncheckedUpdateManyWithoutWidgets_for_fieldsInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedUpdateManyWithoutWidgets_for_fieldsInput> = z.object({
  widget_for_field_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widget_type_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const Place_levelsCreateManyProjectsInputSchema: z.ZodType<Prisma.Place_levelsCreateManyProjectsInput> = z.object({
  place_level_id: z.string().uuid(),
  account_id: z.string().uuid().optional().nullable(),
  level: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  name_singular: z.string().optional().nullable(),
  name_plural: z.string().optional().nullable(),
  name_short: z.string().optional().nullable(),
  reports: z.boolean().optional().nullable(),
  report_values: z.boolean().optional().nullable(),
  actions: z.boolean().optional().nullable(),
  action_values: z.boolean().optional().nullable(),
  action_reports: z.boolean().optional().nullable(),
  checks: z.boolean().optional().nullable(),
  check_values: z.boolean().optional().nullable(),
  check_taxa: z.boolean().optional().nullable(),
  observations: z.boolean().optional().nullable(),
  label_replace_by_generated_column: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Place_levelsUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsUpdateWithoutProjectsInput> = z.object({
  place_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountsUpdateOneWithoutPlace_levelsNestedInputSchema).optional()
}).strict();

export const Place_levelsUncheckedUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.Place_levelsUncheckedUpdateWithoutProjectsInput> = z.object({
  place_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_singular: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_plural: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name_short: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  report_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actions: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  action_reports: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  checks: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_values: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  check_taxa: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  observations: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label_replace_by_generated_column: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  place_levels: z.lazy(() => Place_levelsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUpdateManyWithoutAccountsNestedInputSchema).optional(),
  user_messages: z.lazy(() => User_messagesUpdateManyWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutUsersInput> = z.object({
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projects_label_by: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  place_levels: z.lazy(() => Place_levelsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
  ui_options: z.lazy(() => Ui_optionsUncheckedUpdateManyWithoutAccountsNestedInputSchema).optional(),
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

export const Widgets_for_fieldsCreateManyWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateManyWidget_typesInput> = z.object({
  widget_for_field_id: z.string().uuid(),
  field_type_id: z.string().uuid().optional().nullable(),
  label: z.string().optional().nullable(),
  deleted: z.boolean().optional().nullable()
}).strict();

export const Widgets_for_fieldsUpdateWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateWithoutWidget_typesInput> = z.object({
  widget_for_field_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  field_types: z.lazy(() => Field_typesUpdateOneWithoutWidgets_for_fieldsNestedInputSchema).optional()
}).strict();

export const Widgets_for_fieldsUncheckedUpdateWithoutWidget_typesInputSchema: z.ZodType<Prisma.Widgets_for_fieldsUncheckedUpdateWithoutWidget_typesInput> = z.object({
  widget_for_field_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_type_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deleted: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const Field_typesFindFirstArgsSchema: z.ZodType<Prisma.Field_typesFindFirstArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  where: Field_typesWhereInputSchema.optional(),
  orderBy: z.union([ Field_typesOrderByWithRelationInputSchema.array(),Field_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Field_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Field_typesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Field_typesFindFirstArgs>

export const Field_typesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Field_typesFindFirstOrThrowArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  where: Field_typesWhereInputSchema.optional(),
  orderBy: z.union([ Field_typesOrderByWithRelationInputSchema.array(),Field_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Field_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Field_typesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Field_typesFindFirstOrThrowArgs>

export const Field_typesFindManyArgsSchema: z.ZodType<Prisma.Field_typesFindManyArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  where: Field_typesWhereInputSchema.optional(),
  orderBy: z.union([ Field_typesOrderByWithRelationInputSchema.array(),Field_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Field_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Field_typesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Field_typesFindManyArgs>

export const Field_typesAggregateArgsSchema: z.ZodType<Prisma.Field_typesAggregateArgs> = z.object({
  where: Field_typesWhereInputSchema.optional(),
  orderBy: z.union([ Field_typesOrderByWithRelationInputSchema.array(),Field_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Field_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Field_typesAggregateArgs>

export const Field_typesGroupByArgsSchema: z.ZodType<Prisma.Field_typesGroupByArgs> = z.object({
  where: Field_typesWhereInputSchema.optional(),
  orderBy: z.union([ Field_typesOrderByWithAggregationInputSchema.array(),Field_typesOrderByWithAggregationInputSchema ]).optional(),
  by: Field_typesScalarFieldEnumSchema.array(),
  having: Field_typesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Field_typesGroupByArgs>

export const Field_typesFindUniqueArgsSchema: z.ZodType<Prisma.Field_typesFindUniqueArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  where: Field_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Field_typesFindUniqueArgs>

export const Field_typesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Field_typesFindUniqueOrThrowArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  where: Field_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Field_typesFindUniqueOrThrowArgs>

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

export const Place_levelsFindFirstArgsSchema: z.ZodType<Prisma.Place_levelsFindFirstArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  where: Place_levelsWhereInputSchema.optional(),
  orderBy: z.union([ Place_levelsOrderByWithRelationInputSchema.array(),Place_levelsOrderByWithRelationInputSchema ]).optional(),
  cursor: Place_levelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Place_levelsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Place_levelsFindFirstArgs>

export const Place_levelsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Place_levelsFindFirstOrThrowArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  where: Place_levelsWhereInputSchema.optional(),
  orderBy: z.union([ Place_levelsOrderByWithRelationInputSchema.array(),Place_levelsOrderByWithRelationInputSchema ]).optional(),
  cursor: Place_levelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Place_levelsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Place_levelsFindFirstOrThrowArgs>

export const Place_levelsFindManyArgsSchema: z.ZodType<Prisma.Place_levelsFindManyArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  where: Place_levelsWhereInputSchema.optional(),
  orderBy: z.union([ Place_levelsOrderByWithRelationInputSchema.array(),Place_levelsOrderByWithRelationInputSchema ]).optional(),
  cursor: Place_levelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Place_levelsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Place_levelsFindManyArgs>

export const Place_levelsAggregateArgsSchema: z.ZodType<Prisma.Place_levelsAggregateArgs> = z.object({
  where: Place_levelsWhereInputSchema.optional(),
  orderBy: z.union([ Place_levelsOrderByWithRelationInputSchema.array(),Place_levelsOrderByWithRelationInputSchema ]).optional(),
  cursor: Place_levelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Place_levelsAggregateArgs>

export const Place_levelsGroupByArgsSchema: z.ZodType<Prisma.Place_levelsGroupByArgs> = z.object({
  where: Place_levelsWhereInputSchema.optional(),
  orderBy: z.union([ Place_levelsOrderByWithAggregationInputSchema.array(),Place_levelsOrderByWithAggregationInputSchema ]).optional(),
  by: Place_levelsScalarFieldEnumSchema.array(),
  having: Place_levelsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Place_levelsGroupByArgs>

export const Place_levelsFindUniqueArgsSchema: z.ZodType<Prisma.Place_levelsFindUniqueArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  where: Place_levelsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Place_levelsFindUniqueArgs>

export const Place_levelsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Place_levelsFindUniqueOrThrowArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  where: Place_levelsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Place_levelsFindUniqueOrThrowArgs>

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

export const Ui_optionsFindFirstArgsSchema: z.ZodType<Prisma.Ui_optionsFindFirstArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  where: Ui_optionsWhereInputSchema.optional(),
  orderBy: z.union([ Ui_optionsOrderByWithRelationInputSchema.array(),Ui_optionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Ui_optionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Ui_optionsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsFindFirstArgs>

export const Ui_optionsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Ui_optionsFindFirstOrThrowArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  where: Ui_optionsWhereInputSchema.optional(),
  orderBy: z.union([ Ui_optionsOrderByWithRelationInputSchema.array(),Ui_optionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Ui_optionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Ui_optionsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsFindFirstOrThrowArgs>

export const Ui_optionsFindManyArgsSchema: z.ZodType<Prisma.Ui_optionsFindManyArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  where: Ui_optionsWhereInputSchema.optional(),
  orderBy: z.union([ Ui_optionsOrderByWithRelationInputSchema.array(),Ui_optionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Ui_optionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Ui_optionsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsFindManyArgs>

export const Ui_optionsAggregateArgsSchema: z.ZodType<Prisma.Ui_optionsAggregateArgs> = z.object({
  where: Ui_optionsWhereInputSchema.optional(),
  orderBy: z.union([ Ui_optionsOrderByWithRelationInputSchema.array(),Ui_optionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Ui_optionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsAggregateArgs>

export const Ui_optionsGroupByArgsSchema: z.ZodType<Prisma.Ui_optionsGroupByArgs> = z.object({
  where: Ui_optionsWhereInputSchema.optional(),
  orderBy: z.union([ Ui_optionsOrderByWithAggregationInputSchema.array(),Ui_optionsOrderByWithAggregationInputSchema ]).optional(),
  by: Ui_optionsScalarFieldEnumSchema.array(),
  having: Ui_optionsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsGroupByArgs>

export const Ui_optionsFindUniqueArgsSchema: z.ZodType<Prisma.Ui_optionsFindUniqueArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  where: Ui_optionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Ui_optionsFindUniqueArgs>

export const Ui_optionsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Ui_optionsFindUniqueOrThrowArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  where: Ui_optionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Ui_optionsFindUniqueOrThrowArgs>

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

export const Widget_typesFindFirstArgsSchema: z.ZodType<Prisma.Widget_typesFindFirstArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  where: Widget_typesWhereInputSchema.optional(),
  orderBy: z.union([ Widget_typesOrderByWithRelationInputSchema.array(),Widget_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Widget_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Widget_typesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Widget_typesFindFirstArgs>

export const Widget_typesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Widget_typesFindFirstOrThrowArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  where: Widget_typesWhereInputSchema.optional(),
  orderBy: z.union([ Widget_typesOrderByWithRelationInputSchema.array(),Widget_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Widget_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Widget_typesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Widget_typesFindFirstOrThrowArgs>

export const Widget_typesFindManyArgsSchema: z.ZodType<Prisma.Widget_typesFindManyArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  where: Widget_typesWhereInputSchema.optional(),
  orderBy: z.union([ Widget_typesOrderByWithRelationInputSchema.array(),Widget_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Widget_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Widget_typesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Widget_typesFindManyArgs>

export const Widget_typesAggregateArgsSchema: z.ZodType<Prisma.Widget_typesAggregateArgs> = z.object({
  where: Widget_typesWhereInputSchema.optional(),
  orderBy: z.union([ Widget_typesOrderByWithRelationInputSchema.array(),Widget_typesOrderByWithRelationInputSchema ]).optional(),
  cursor: Widget_typesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Widget_typesAggregateArgs>

export const Widget_typesGroupByArgsSchema: z.ZodType<Prisma.Widget_typesGroupByArgs> = z.object({
  where: Widget_typesWhereInputSchema.optional(),
  orderBy: z.union([ Widget_typesOrderByWithAggregationInputSchema.array(),Widget_typesOrderByWithAggregationInputSchema ]).optional(),
  by: Widget_typesScalarFieldEnumSchema.array(),
  having: Widget_typesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Widget_typesGroupByArgs>

export const Widget_typesFindUniqueArgsSchema: z.ZodType<Prisma.Widget_typesFindUniqueArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  where: Widget_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widget_typesFindUniqueArgs>

export const Widget_typesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Widget_typesFindUniqueOrThrowArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  where: Widget_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widget_typesFindUniqueOrThrowArgs>

export const Widgets_for_fieldsFindFirstArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsFindFirstArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  where: Widgets_for_fieldsWhereInputSchema.optional(),
  orderBy: z.union([ Widgets_for_fieldsOrderByWithRelationInputSchema.array(),Widgets_for_fieldsOrderByWithRelationInputSchema ]).optional(),
  cursor: Widgets_for_fieldsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Widgets_for_fieldsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsFindFirstArgs>

export const Widgets_for_fieldsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsFindFirstOrThrowArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  where: Widgets_for_fieldsWhereInputSchema.optional(),
  orderBy: z.union([ Widgets_for_fieldsOrderByWithRelationInputSchema.array(),Widgets_for_fieldsOrderByWithRelationInputSchema ]).optional(),
  cursor: Widgets_for_fieldsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Widgets_for_fieldsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsFindFirstOrThrowArgs>

export const Widgets_for_fieldsFindManyArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsFindManyArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  where: Widgets_for_fieldsWhereInputSchema.optional(),
  orderBy: z.union([ Widgets_for_fieldsOrderByWithRelationInputSchema.array(),Widgets_for_fieldsOrderByWithRelationInputSchema ]).optional(),
  cursor: Widgets_for_fieldsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Widgets_for_fieldsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsFindManyArgs>

export const Widgets_for_fieldsAggregateArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsAggregateArgs> = z.object({
  where: Widgets_for_fieldsWhereInputSchema.optional(),
  orderBy: z.union([ Widgets_for_fieldsOrderByWithRelationInputSchema.array(),Widgets_for_fieldsOrderByWithRelationInputSchema ]).optional(),
  cursor: Widgets_for_fieldsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsAggregateArgs>

export const Widgets_for_fieldsGroupByArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsGroupByArgs> = z.object({
  where: Widgets_for_fieldsWhereInputSchema.optional(),
  orderBy: z.union([ Widgets_for_fieldsOrderByWithAggregationInputSchema.array(),Widgets_for_fieldsOrderByWithAggregationInputSchema ]).optional(),
  by: Widgets_for_fieldsScalarFieldEnumSchema.array(),
  having: Widgets_for_fieldsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsGroupByArgs>

export const Widgets_for_fieldsFindUniqueArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsFindUniqueArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  where: Widgets_for_fieldsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsFindUniqueArgs>

export const Widgets_for_fieldsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsFindUniqueOrThrowArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  where: Widgets_for_fieldsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsFindUniqueOrThrowArgs>

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

export const Field_typesCreateArgsSchema: z.ZodType<Prisma.Field_typesCreateArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  data: z.union([ Field_typesCreateInputSchema,Field_typesUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Field_typesCreateArgs>

export const Field_typesUpsertArgsSchema: z.ZodType<Prisma.Field_typesUpsertArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  where: Field_typesWhereUniqueInputSchema,
  create: z.union([ Field_typesCreateInputSchema,Field_typesUncheckedCreateInputSchema ]),
  update: z.union([ Field_typesUpdateInputSchema,Field_typesUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Field_typesUpsertArgs>

export const Field_typesCreateManyArgsSchema: z.ZodType<Prisma.Field_typesCreateManyArgs> = z.object({
  data: Field_typesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Field_typesCreateManyArgs>

export const Field_typesDeleteArgsSchema: z.ZodType<Prisma.Field_typesDeleteArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  where: Field_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Field_typesDeleteArgs>

export const Field_typesUpdateArgsSchema: z.ZodType<Prisma.Field_typesUpdateArgs> = z.object({
  select: Field_typesSelectSchema.optional(),
  include: Field_typesIncludeSchema.optional(),
  data: z.union([ Field_typesUpdateInputSchema,Field_typesUncheckedUpdateInputSchema ]),
  where: Field_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Field_typesUpdateArgs>

export const Field_typesUpdateManyArgsSchema: z.ZodType<Prisma.Field_typesUpdateManyArgs> = z.object({
  data: z.union([ Field_typesUpdateManyMutationInputSchema,Field_typesUncheckedUpdateManyInputSchema ]),
  where: Field_typesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Field_typesUpdateManyArgs>

export const Field_typesDeleteManyArgsSchema: z.ZodType<Prisma.Field_typesDeleteManyArgs> = z.object({
  where: Field_typesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Field_typesDeleteManyArgs>

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

export const Place_levelsCreateArgsSchema: z.ZodType<Prisma.Place_levelsCreateArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  data: z.union([ Place_levelsCreateInputSchema,Place_levelsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Place_levelsCreateArgs>

export const Place_levelsUpsertArgsSchema: z.ZodType<Prisma.Place_levelsUpsertArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  where: Place_levelsWhereUniqueInputSchema,
  create: z.union([ Place_levelsCreateInputSchema,Place_levelsUncheckedCreateInputSchema ]),
  update: z.union([ Place_levelsUpdateInputSchema,Place_levelsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Place_levelsUpsertArgs>

export const Place_levelsCreateManyArgsSchema: z.ZodType<Prisma.Place_levelsCreateManyArgs> = z.object({
  data: Place_levelsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Place_levelsCreateManyArgs>

export const Place_levelsDeleteArgsSchema: z.ZodType<Prisma.Place_levelsDeleteArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  where: Place_levelsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Place_levelsDeleteArgs>

export const Place_levelsUpdateArgsSchema: z.ZodType<Prisma.Place_levelsUpdateArgs> = z.object({
  select: Place_levelsSelectSchema.optional(),
  include: Place_levelsIncludeSchema.optional(),
  data: z.union([ Place_levelsUpdateInputSchema,Place_levelsUncheckedUpdateInputSchema ]),
  where: Place_levelsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Place_levelsUpdateArgs>

export const Place_levelsUpdateManyArgsSchema: z.ZodType<Prisma.Place_levelsUpdateManyArgs> = z.object({
  data: z.union([ Place_levelsUpdateManyMutationInputSchema,Place_levelsUncheckedUpdateManyInputSchema ]),
  where: Place_levelsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Place_levelsUpdateManyArgs>

export const Place_levelsDeleteManyArgsSchema: z.ZodType<Prisma.Place_levelsDeleteManyArgs> = z.object({
  where: Place_levelsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Place_levelsDeleteManyArgs>

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

export const Ui_optionsCreateArgsSchema: z.ZodType<Prisma.Ui_optionsCreateArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  data: z.union([ Ui_optionsCreateInputSchema,Ui_optionsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Ui_optionsCreateArgs>

export const Ui_optionsUpsertArgsSchema: z.ZodType<Prisma.Ui_optionsUpsertArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  where: Ui_optionsWhereUniqueInputSchema,
  create: z.union([ Ui_optionsCreateInputSchema,Ui_optionsUncheckedCreateInputSchema ]),
  update: z.union([ Ui_optionsUpdateInputSchema,Ui_optionsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Ui_optionsUpsertArgs>

export const Ui_optionsCreateManyArgsSchema: z.ZodType<Prisma.Ui_optionsCreateManyArgs> = z.object({
  data: Ui_optionsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsCreateManyArgs>

export const Ui_optionsDeleteArgsSchema: z.ZodType<Prisma.Ui_optionsDeleteArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  where: Ui_optionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Ui_optionsDeleteArgs>

export const Ui_optionsUpdateArgsSchema: z.ZodType<Prisma.Ui_optionsUpdateArgs> = z.object({
  select: Ui_optionsSelectSchema.optional(),
  include: Ui_optionsIncludeSchema.optional(),
  data: z.union([ Ui_optionsUpdateInputSchema,Ui_optionsUncheckedUpdateInputSchema ]),
  where: Ui_optionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Ui_optionsUpdateArgs>

export const Ui_optionsUpdateManyArgsSchema: z.ZodType<Prisma.Ui_optionsUpdateManyArgs> = z.object({
  data: z.union([ Ui_optionsUpdateManyMutationInputSchema,Ui_optionsUncheckedUpdateManyInputSchema ]),
  where: Ui_optionsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsUpdateManyArgs>

export const Ui_optionsDeleteManyArgsSchema: z.ZodType<Prisma.Ui_optionsDeleteManyArgs> = z.object({
  where: Ui_optionsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Ui_optionsDeleteManyArgs>

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

export const Widget_typesCreateArgsSchema: z.ZodType<Prisma.Widget_typesCreateArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  data: z.union([ Widget_typesCreateInputSchema,Widget_typesUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Widget_typesCreateArgs>

export const Widget_typesUpsertArgsSchema: z.ZodType<Prisma.Widget_typesUpsertArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  where: Widget_typesWhereUniqueInputSchema,
  create: z.union([ Widget_typesCreateInputSchema,Widget_typesUncheckedCreateInputSchema ]),
  update: z.union([ Widget_typesUpdateInputSchema,Widget_typesUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Widget_typesUpsertArgs>

export const Widget_typesCreateManyArgsSchema: z.ZodType<Prisma.Widget_typesCreateManyArgs> = z.object({
  data: Widget_typesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Widget_typesCreateManyArgs>

export const Widget_typesDeleteArgsSchema: z.ZodType<Prisma.Widget_typesDeleteArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  where: Widget_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widget_typesDeleteArgs>

export const Widget_typesUpdateArgsSchema: z.ZodType<Prisma.Widget_typesUpdateArgs> = z.object({
  select: Widget_typesSelectSchema.optional(),
  include: Widget_typesIncludeSchema.optional(),
  data: z.union([ Widget_typesUpdateInputSchema,Widget_typesUncheckedUpdateInputSchema ]),
  where: Widget_typesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widget_typesUpdateArgs>

export const Widget_typesUpdateManyArgsSchema: z.ZodType<Prisma.Widget_typesUpdateManyArgs> = z.object({
  data: z.union([ Widget_typesUpdateManyMutationInputSchema,Widget_typesUncheckedUpdateManyInputSchema ]),
  where: Widget_typesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Widget_typesUpdateManyArgs>

export const Widget_typesDeleteManyArgsSchema: z.ZodType<Prisma.Widget_typesDeleteManyArgs> = z.object({
  where: Widget_typesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Widget_typesDeleteManyArgs>

export const Widgets_for_fieldsCreateArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  data: z.union([ Widgets_for_fieldsCreateInputSchema,Widgets_for_fieldsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsCreateArgs>

export const Widgets_for_fieldsUpsertArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsUpsertArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  where: Widgets_for_fieldsWhereUniqueInputSchema,
  create: z.union([ Widgets_for_fieldsCreateInputSchema,Widgets_for_fieldsUncheckedCreateInputSchema ]),
  update: z.union([ Widgets_for_fieldsUpdateInputSchema,Widgets_for_fieldsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsUpsertArgs>

export const Widgets_for_fieldsCreateManyArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsCreateManyArgs> = z.object({
  data: Widgets_for_fieldsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsCreateManyArgs>

export const Widgets_for_fieldsDeleteArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsDeleteArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  where: Widgets_for_fieldsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsDeleteArgs>

export const Widgets_for_fieldsUpdateArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateArgs> = z.object({
  select: Widgets_for_fieldsSelectSchema.optional(),
  include: Widgets_for_fieldsIncludeSchema.optional(),
  data: z.union([ Widgets_for_fieldsUpdateInputSchema,Widgets_for_fieldsUncheckedUpdateInputSchema ]),
  where: Widgets_for_fieldsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsUpdateArgs>

export const Widgets_for_fieldsUpdateManyArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsUpdateManyArgs> = z.object({
  data: z.union([ Widgets_for_fieldsUpdateManyMutationInputSchema,Widgets_for_fieldsUncheckedUpdateManyInputSchema ]),
  where: Widgets_for_fieldsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsUpdateManyArgs>

export const Widgets_for_fieldsDeleteManyArgsSchema: z.ZodType<Prisma.Widgets_for_fieldsDeleteManyArgs> = z.object({
  where: Widgets_for_fieldsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Widgets_for_fieldsDeleteManyArgs>

interface AccountsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.AccountsArgs
  readonly type: Prisma.AccountsGetPayload<this['_A']>
}

interface Field_typesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Field_typesArgs
  readonly type: Prisma.Field_typesGetPayload<this['_A']>
}

interface MessagesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.MessagesArgs
  readonly type: Prisma.MessagesGetPayload<this['_A']>
}

interface Place_levelsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Place_levelsArgs
  readonly type: Prisma.Place_levelsGetPayload<this['_A']>
}

interface ProjectsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProjectsArgs
  readonly type: Prisma.ProjectsGetPayload<this['_A']>
}

interface Ui_optionsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Ui_optionsArgs
  readonly type: Prisma.Ui_optionsGetPayload<this['_A']>
}

interface User_messagesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.User_messagesArgs
  readonly type: Prisma.User_messagesGetPayload<this['_A']>
}

interface UsersGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.UsersArgs
  readonly type: Prisma.UsersGetPayload<this['_A']>
}

interface Widget_typesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Widget_typesArgs
  readonly type: Prisma.Widget_typesGetPayload<this['_A']>
}

interface Widgets_for_fieldsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Widgets_for_fieldsArgs
  readonly type: Prisma.Widgets_for_fieldsGetPayload<this['_A']>
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
      new Relation("place_levels", "", "", "place_levels", "AccountsToPlace_levels", "many"),
      new Relation("projects", "", "", "projects", "AccountsToProjects", "many"),
      new Relation("ui_options", "", "", "ui_options", "AccountsToUi_options", "many"),
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
  field_types: {
    fields: new Map([
      [
        "field_type_id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "sort",
        "INT2"
      ],
      [
        "comment",
        "TEXT"
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
      new Relation("widgets_for_fields", "", "", "widgets_for_fields", "Field_typesToWidgets_for_fields", "many"),
    ],
    modelSchema: (Field_typesCreateInputSchema as any)
      .partial()
      .or((Field_typesUncheckedCreateInputSchema as any).partial()),
    createSchema: Field_typesCreateArgsSchema,
    createManySchema: Field_typesCreateManyArgsSchema,
    findUniqueSchema: Field_typesFindUniqueArgsSchema,
    findSchema: Field_typesFindFirstArgsSchema,
    updateSchema: Field_typesUpdateArgsSchema,
    updateManySchema: Field_typesUpdateManyArgsSchema,
    upsertSchema: Field_typesUpsertArgsSchema,
    deleteSchema: Field_typesDeleteArgsSchema,
    deleteManySchema: Field_typesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Field_typesCreateInputSchema>,
    Prisma.Field_typesCreateArgs['data'],
    Prisma.Field_typesUpdateArgs['data'],
    Prisma.Field_typesFindFirstArgs['select'],
    Prisma.Field_typesFindFirstArgs['where'],
    Prisma.Field_typesFindUniqueArgs['where'],
    Omit<Prisma.Field_typesInclude, '_count'>,
    Prisma.Field_typesFindFirstArgs['orderBy'],
    Prisma.Field_typesScalarFieldEnum,
    Field_typesGetPayload
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
  place_levels: {
    fields: new Map([
      [
        "place_level_id",
        "UUID"
      ],
      [
        "account_id",
        "UUID"
      ],
      [
        "project_id",
        "UUID"
      ],
      [
        "level",
        "INT4"
      ],
      [
        "name_singular",
        "TEXT"
      ],
      [
        "name_plural",
        "TEXT"
      ],
      [
        "name_short",
        "TEXT"
      ],
      [
        "reports",
        "BOOL"
      ],
      [
        "report_values",
        "BOOL"
      ],
      [
        "actions",
        "BOOL"
      ],
      [
        "action_values",
        "BOOL"
      ],
      [
        "action_reports",
        "BOOL"
      ],
      [
        "checks",
        "BOOL"
      ],
      [
        "check_values",
        "BOOL"
      ],
      [
        "check_taxa",
        "BOOL"
      ],
      [
        "observations",
        "BOOL"
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
      new Relation("accounts", "account_id", "account_id", "accounts", "AccountsToPlace_levels", "one"),
      new Relation("projects", "project_id", "project_id", "projects", "Place_levelsToProjects", "one"),
    ],
    modelSchema: (Place_levelsCreateInputSchema as any)
      .partial()
      .or((Place_levelsUncheckedCreateInputSchema as any).partial()),
    createSchema: Place_levelsCreateArgsSchema,
    createManySchema: Place_levelsCreateManyArgsSchema,
    findUniqueSchema: Place_levelsFindUniqueArgsSchema,
    findSchema: Place_levelsFindFirstArgsSchema,
    updateSchema: Place_levelsUpdateArgsSchema,
    updateManySchema: Place_levelsUpdateManyArgsSchema,
    upsertSchema: Place_levelsUpsertArgsSchema,
    deleteSchema: Place_levelsDeleteArgsSchema,
    deleteManySchema: Place_levelsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Place_levelsCreateInputSchema>,
    Prisma.Place_levelsCreateArgs['data'],
    Prisma.Place_levelsUpdateArgs['data'],
    Prisma.Place_levelsFindFirstArgs['select'],
    Prisma.Place_levelsFindFirstArgs['where'],
    Prisma.Place_levelsFindUniqueArgs['where'],
    Omit<Prisma.Place_levelsInclude, '_count'>,
    Prisma.Place_levelsFindFirstArgs['orderBy'],
    Prisma.Place_levelsScalarFieldEnum,
    Place_levelsGetPayload
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
      new Relation("place_levels", "", "", "place_levels", "Place_levelsToProjects", "many"),
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
  ui_options: {
    fields: new Map([
      [
        "user_id",
        "UUID"
      ],
      [
        "account_id",
        "UUID"
      ],
      [
        "designing",
        "BOOL"
      ],
      [
        "breadcrumbs_overflowing",
        "BOOL"
      ],
      [
        "navs_overflowing",
        "BOOL"
      ],
      [
        "tabs",
        "JSONB"
      ],
      [
        "show_map",
        "BOOL"
      ],
      [
        "map_bounds",
        "JSONB"
      ],
      [
        "local_map_show",
        "JSONB"
      ],
      [
        "tile_layer_sorter",
        "TEXT"
      ],
      [
        "vector_layer_sorter",
        "TEXT"
      ],
      [
        "editing_place_geometry",
        "UUID"
      ],
      [
        "editing_check_geometry",
        "UUID"
      ],
      [
        "editing_action_geometry",
        "UUID"
      ],
      [
        "label",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("accounts", "account_id", "account_id", "accounts", "AccountsToUi_options", "one"),
      new Relation("users", "user_id", "user_id", "users", "Ui_optionsToUsers", "one"),
    ],
    modelSchema: (Ui_optionsCreateInputSchema as any)
      .partial()
      .or((Ui_optionsUncheckedCreateInputSchema as any).partial()),
    createSchema: Ui_optionsCreateArgsSchema,
    createManySchema: Ui_optionsCreateManyArgsSchema,
    findUniqueSchema: Ui_optionsFindUniqueArgsSchema,
    findSchema: Ui_optionsFindFirstArgsSchema,
    updateSchema: Ui_optionsUpdateArgsSchema,
    updateManySchema: Ui_optionsUpdateManyArgsSchema,
    upsertSchema: Ui_optionsUpsertArgsSchema,
    deleteSchema: Ui_optionsDeleteArgsSchema,
    deleteManySchema: Ui_optionsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Ui_optionsCreateInputSchema>,
    Prisma.Ui_optionsCreateArgs['data'],
    Prisma.Ui_optionsUpdateArgs['data'],
    Prisma.Ui_optionsFindFirstArgs['select'],
    Prisma.Ui_optionsFindFirstArgs['where'],
    Prisma.Ui_optionsFindUniqueArgs['where'],
    Omit<Prisma.Ui_optionsInclude, '_count'>,
    Prisma.Ui_optionsFindFirstArgs['orderBy'],
    Prisma.Ui_optionsScalarFieldEnum,
    Ui_optionsGetPayload
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
      new Relation("ui_options", "", "", "ui_options", "Ui_optionsToUsers", "one"),
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
  widget_types: {
    fields: new Map([
      [
        "widget_type_id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "needs_list",
        "BOOL"
      ],
      [
        "sort",
        "INT2"
      ],
      [
        "comment",
        "TEXT"
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
      new Relation("widgets_for_fields", "", "", "widgets_for_fields", "Widget_typesToWidgets_for_fields", "many"),
    ],
    modelSchema: (Widget_typesCreateInputSchema as any)
      .partial()
      .or((Widget_typesUncheckedCreateInputSchema as any).partial()),
    createSchema: Widget_typesCreateArgsSchema,
    createManySchema: Widget_typesCreateManyArgsSchema,
    findUniqueSchema: Widget_typesFindUniqueArgsSchema,
    findSchema: Widget_typesFindFirstArgsSchema,
    updateSchema: Widget_typesUpdateArgsSchema,
    updateManySchema: Widget_typesUpdateManyArgsSchema,
    upsertSchema: Widget_typesUpsertArgsSchema,
    deleteSchema: Widget_typesDeleteArgsSchema,
    deleteManySchema: Widget_typesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Widget_typesCreateInputSchema>,
    Prisma.Widget_typesCreateArgs['data'],
    Prisma.Widget_typesUpdateArgs['data'],
    Prisma.Widget_typesFindFirstArgs['select'],
    Prisma.Widget_typesFindFirstArgs['where'],
    Prisma.Widget_typesFindUniqueArgs['where'],
    Omit<Prisma.Widget_typesInclude, '_count'>,
    Prisma.Widget_typesFindFirstArgs['orderBy'],
    Prisma.Widget_typesScalarFieldEnum,
    Widget_typesGetPayload
  >,
  widgets_for_fields: {
    fields: new Map([
      [
        "widget_for_field_id",
        "UUID"
      ],
      [
        "field_type_id",
        "UUID"
      ],
      [
        "widget_type_id",
        "UUID"
      ],
      [
        "label",
        "TEXT"
      ],
      [
        "deleted",
        "BOOL"
      ]
    ]),
    relations: [
      new Relation("field_types", "field_type_id", "field_type_id", "field_types", "Field_typesToWidgets_for_fields", "one"),
      new Relation("widget_types", "widget_type_id", "widget_type_id", "widget_types", "Widget_typesToWidgets_for_fields", "one"),
    ],
    modelSchema: (Widgets_for_fieldsCreateInputSchema as any)
      .partial()
      .or((Widgets_for_fieldsUncheckedCreateInputSchema as any).partial()),
    createSchema: Widgets_for_fieldsCreateArgsSchema,
    createManySchema: Widgets_for_fieldsCreateManyArgsSchema,
    findUniqueSchema: Widgets_for_fieldsFindUniqueArgsSchema,
    findSchema: Widgets_for_fieldsFindFirstArgsSchema,
    updateSchema: Widgets_for_fieldsUpdateArgsSchema,
    updateManySchema: Widgets_for_fieldsUpdateManyArgsSchema,
    upsertSchema: Widgets_for_fieldsUpsertArgsSchema,
    deleteSchema: Widgets_for_fieldsDeleteArgsSchema,
    deleteManySchema: Widgets_for_fieldsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Widgets_for_fieldsCreateInputSchema>,
    Prisma.Widgets_for_fieldsCreateArgs['data'],
    Prisma.Widgets_for_fieldsUpdateArgs['data'],
    Prisma.Widgets_for_fieldsFindFirstArgs['select'],
    Prisma.Widgets_for_fieldsFindFirstArgs['where'],
    Prisma.Widgets_for_fieldsFindUniqueArgs['where'],
    Omit<Prisma.Widgets_for_fieldsInclude, '_count'>,
    Prisma.Widgets_for_fieldsFindFirstArgs['orderBy'],
    Prisma.Widgets_for_fieldsScalarFieldEnum,
    Widgets_for_fieldsGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
export const JsonNull = { __is_electric_json_null__: true }
