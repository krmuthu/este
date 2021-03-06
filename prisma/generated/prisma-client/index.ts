// Code generated by Prisma (prisma@1.26.6). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  web: (where?: WebWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  web: (where: WebWhereUniqueInput) => WebPromise;
  webs: (args?: {
    where?: WebWhereInput;
    orderBy?: WebOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Web>;
  websConnection: (args?: {
    where?: WebWhereInput;
    orderBy?: WebOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => WebConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createWeb: (data: WebCreateInput) => WebPromise;
  updateWeb: (args: {
    data: WebUpdateInput;
    where: WebWhereUniqueInput;
  }) => WebPromise;
  updateManyWebs: (args: {
    data: WebUpdateManyMutationInput;
    where?: WebWhereInput;
  }) => BatchPayloadPromise;
  upsertWeb: (args: {
    where: WebWhereUniqueInput;
    create: WebCreateInput;
    update: WebUpdateInput;
  }) => WebPromise;
  deleteWeb: (where: WebWhereUniqueInput) => WebPromise;
  deleteManyWebs: (where?: WebWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  web: (
    where?: WebSubscriptionWhereInput
  ) => WebSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type WebOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "name_ASC"
  | "name_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "themeName_ASC"
  | "themeName_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface WebUpdateManyWithoutCreatorInput {
  create?: WebCreateWithoutCreatorInput[] | WebCreateWithoutCreatorInput;
  delete?: WebWhereUniqueInput[] | WebWhereUniqueInput;
  connect?: WebWhereUniqueInput[] | WebWhereUniqueInput;
  set?: WebWhereUniqueInput[] | WebWhereUniqueInput;
  disconnect?: WebWhereUniqueInput[] | WebWhereUniqueInput;
  update?:
    | WebUpdateWithWhereUniqueWithoutCreatorInput[]
    | WebUpdateWithWhereUniqueWithoutCreatorInput;
  upsert?:
    | WebUpsertWithWhereUniqueWithoutCreatorInput[]
    | WebUpsertWithWhereUniqueWithoutCreatorInput;
  deleteMany?: WebScalarWhereInput[] | WebScalarWhereInput;
  updateMany?:
    | WebUpdateManyWithWhereNestedInput[]
    | WebUpdateManyWithWhereNestedInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface WebUpdateWithoutCreatorDataInput {
  name?: String;
}

export interface WebWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  creator?: UserWhereInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: WebWhereInput[] | WebWhereInput;
  OR?: WebWhereInput[] | WebWhereInput;
  NOT?: WebWhereInput[] | WebWhereInput;
}

export interface WebCreateInput {
  creator: UserCreateOneWithoutWebsInput;
  name: String;
}

export interface WebUpdateManyWithWhereNestedInput {
  where: WebScalarWhereInput;
  data: WebUpdateManyDataInput;
}

export interface WebUpsertWithWhereUniqueWithoutCreatorInput {
  where: WebWhereUniqueInput;
  update: WebUpdateWithoutCreatorDataInput;
  create: WebCreateWithoutCreatorInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserCreateInput {
  email: String;
  password: String;
  themeName: String;
  webs?: WebCreateManyWithoutCreatorInput;
}

export interface UserUpsertWithoutWebsInput {
  update: UserUpdateWithoutWebsDataInput;
  create: UserCreateWithoutWebsInput;
}

export interface WebCreateManyWithoutCreatorInput {
  create?: WebCreateWithoutCreatorInput[] | WebCreateWithoutCreatorInput;
  connect?: WebWhereUniqueInput[] | WebWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutWebsInput {
  create?: UserCreateWithoutWebsInput;
  update?: UserUpdateWithoutWebsDataInput;
  upsert?: UserUpsertWithoutWebsInput;
  connect?: UserWhereUniqueInput;
}

export interface WebCreateWithoutCreatorInput {
  name: String;
}

export type WebWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateInput {
  email?: String;
  password?: String;
  themeName?: String;
  webs?: WebUpdateManyWithoutCreatorInput;
}

export interface UserCreateOneWithoutWebsInput {
  create?: UserCreateWithoutWebsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  password?: String;
  themeName?: String;
}

export interface WebUpdateManyMutationInput {
  name?: String;
}

export interface WebScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: WebScalarWhereInput[] | WebScalarWhereInput;
  OR?: WebScalarWhereInput[] | WebScalarWhereInput;
  NOT?: WebScalarWhereInput[] | WebScalarWhereInput;
}

export interface WebUpdateManyDataInput {
  name?: String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  themeName?: String;
  themeName_not?: String;
  themeName_in?: String[] | String;
  themeName_not_in?: String[] | String;
  themeName_lt?: String;
  themeName_lte?: String;
  themeName_gt?: String;
  themeName_gte?: String;
  themeName_contains?: String;
  themeName_not_contains?: String;
  themeName_starts_with?: String;
  themeName_not_starts_with?: String;
  themeName_ends_with?: String;
  themeName_not_ends_with?: String;
  webs_every?: WebWhereInput;
  webs_some?: WebWhereInput;
  webs_none?: WebWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface WebUpdateWithWhereUniqueWithoutCreatorInput {
  where: WebWhereUniqueInput;
  data: WebUpdateWithoutCreatorDataInput;
}

export interface UserUpdateWithoutWebsDataInput {
  email?: String;
  password?: String;
  themeName?: String;
}

export interface WebSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: WebWhereInput;
  AND?: WebSubscriptionWhereInput[] | WebSubscriptionWhereInput;
  OR?: WebSubscriptionWhereInput[] | WebSubscriptionWhereInput;
  NOT?: WebSubscriptionWhereInput[] | WebSubscriptionWhereInput;
}

export interface UserCreateWithoutWebsInput {
  email: String;
  password: String;
  themeName: String;
}

export interface WebUpdateInput {
  creator?: UserUpdateOneRequiredWithoutWebsInput;
  name?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface WebPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name: String;
}

export interface WebPreviousValuesPromise
  extends Promise<WebPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
}

export interface WebPreviousValuesSubscription
  extends Promise<AsyncIterator<WebPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface Web {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name: String;
}

export interface WebPromise extends Promise<Web>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  creator: <T = UserPromise>() => T;
  name: () => Promise<String>;
}

export interface WebSubscription
  extends Promise<AsyncIterator<Web>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  creator: <T = UserSubscription>() => T;
  name: () => Promise<AsyncIterator<String>>;
}

export interface WebSubscriptionPayload {
  mutation: MutationType;
  node: Web;
  updatedFields: String[];
  previousValues: WebPreviousValues;
}

export interface WebSubscriptionPayloadPromise
  extends Promise<WebSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = WebPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = WebPreviousValuesPromise>() => T;
}

export interface WebSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<WebSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = WebSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = WebPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  themeName: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  themeName: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  themeName: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  themeName: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  themeName: () => Promise<String>;
  webs: <T = FragmentableArray<Web>>(args?: {
    where?: WebWhereInput;
    orderBy?: WebOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  themeName: () => Promise<AsyncIterator<String>>;
  webs: <T = Promise<AsyncIterator<WebSubscription>>>(args?: {
    where?: WebWhereInput;
    orderBy?: WebOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateWeb {
  count: Int;
}

export interface AggregateWebPromise
  extends Promise<AggregateWeb>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateWebSubscription
  extends Promise<AsyncIterator<AggregateWeb>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface WebConnection {
  pageInfo: PageInfo;
  edges: WebEdge[];
}

export interface WebConnectionPromise
  extends Promise<WebConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<WebEdge>>() => T;
  aggregate: <T = AggregateWebPromise>() => T;
}

export interface WebConnectionSubscription
  extends Promise<AsyncIterator<WebConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<WebEdgeSubscription>>>() => T;
  aggregate: <T = AggregateWebSubscription>() => T;
}

export interface WebEdge {
  node: Web;
  cursor: String;
}

export interface WebEdgePromise extends Promise<WebEdge>, Fragmentable {
  node: <T = WebPromise>() => T;
  cursor: () => Promise<String>;
}

export interface WebEdgeSubscription
  extends Promise<AsyncIterator<WebEdge>>,
    Fragmentable {
  node: <T = WebSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Web",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
export const prisma = new Prisma();
