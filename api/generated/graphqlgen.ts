// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import {
  User,
  Web,
  SignInPayload,
  SignInErrors,
  SetUserThemePayload,
  CreateWebPayload,
  CreateWebErrors,
  UpdateWebPayload,
  UpdateWebErrors,
  DeleteWebPayload,
  Context,
} from '../types';

export type EmailError = 'REQUIRED' | 'EMAIL' | 'ALREADY_EXISTS' | 'NOT_EXISTS';
export type PasswordError =
  | 'REQUIRED'
  | 'MIN_5_CHARS'
  | 'MAX_1024_CHARS'
  | 'WRONG_PASSWORD';
export type Max140CharsError = 'REQUIRED' | 'MAX_140_CHARS';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsWeb {
    id: string;
  }

  export type ViewerResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | null | Promise<User | null>;

  export type RequiredViewerResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>;

  export type WebResolver = (
    parent: undefined,
    args: ArgsWeb,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Web | Promise<Web>;

  export interface Type {
    viewer: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | null | Promise<User | null>;

    requiredViewer: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>;

    web: (
      parent: undefined,
      args: ArgsWeb,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Web | Promise<Web>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    createdAt: (parent: User) => parent.createdAt,
    updatedAt: (parent: User) => parent.updatedAt,
    email: (parent: User) => parent.email,
    themeName: (parent: User) => parent.themeName,
    webs: (parent: User) => parent.webs,
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type CreatedAtResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type ThemeNameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type WebsResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Array<Web | null> | null | Promise<Array<Web | null> | null>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    createdAt: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    updatedAt: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    themeName: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    webs: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Array<Web | null> | null | Promise<Array<Web | null> | null>;
  }
}

export namespace WebResolvers {
  export const defaultResolvers = {
    id: (parent: Web) => parent.id,
    createdAt: (parent: Web) => parent.createdAt,
    updatedAt: (parent: Web) => parent.updatedAt,
    name: (parent: Web) => parent.name,
    creator: (parent: Web) => parent.creator,
  };

  export type IdResolver = (
    parent: Web,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type CreatedAtResolver = (
    parent: Web,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: Web,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type CreatorResolver = (
    parent: Web,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>;

  export type NameResolver = (
    parent: Web,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Web,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    createdAt: (
      parent: Web,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    updatedAt: (
      parent: Web,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    creator: (
      parent: Web,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>;

    name: (
      parent: Web,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface SignInInput {
    email: string;
    password: string;
    createAccount: boolean;
  }
  export interface SetUserThemeInput {
    name: string;
  }
  export interface CreateWebInput {
    name: string;
  }
  export interface UpdateWebInput {
    id: string;
    name: string;
  }
  export interface DeleteWebInput {
    id: string;
  }

  export interface ArgsSignIn {
    input: SignInInput;
  }

  export interface ArgsSetUserTheme {
    input: SetUserThemeInput;
  }

  export interface ArgsCreateWeb {
    input: CreateWebInput;
  }

  export interface ArgsUpdateWeb {
    input: UpdateWebInput;
  }

  export interface ArgsDeleteWeb {
    input: DeleteWebInput;
  }

  export type SignInResolver = (
    parent: undefined,
    args: ArgsSignIn,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => SignInPayload | Promise<SignInPayload>;

  export type SetUserThemeResolver = (
    parent: undefined,
    args: ArgsSetUserTheme,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => SetUserThemePayload | Promise<SetUserThemePayload>;

  export type CreateWebResolver = (
    parent: undefined,
    args: ArgsCreateWeb,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => CreateWebPayload | Promise<CreateWebPayload>;

  export type UpdateWebResolver = (
    parent: undefined,
    args: ArgsUpdateWeb,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => UpdateWebPayload | Promise<UpdateWebPayload>;

  export type DeleteWebResolver = (
    parent: undefined,
    args: ArgsDeleteWeb,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => DeleteWebPayload | Promise<DeleteWebPayload>;

  export interface Type {
    signIn: (
      parent: undefined,
      args: ArgsSignIn,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => SignInPayload | Promise<SignInPayload>;

    setUserTheme: (
      parent: undefined,
      args: ArgsSetUserTheme,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => SetUserThemePayload | Promise<SetUserThemePayload>;

    createWeb: (
      parent: undefined,
      args: ArgsCreateWeb,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => CreateWebPayload | Promise<CreateWebPayload>;

    updateWeb: (
      parent: undefined,
      args: ArgsUpdateWeb,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => UpdateWebPayload | Promise<UpdateWebPayload>;

    deleteWeb: (
      parent: undefined,
      args: ArgsDeleteWeb,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => DeleteWebPayload | Promise<DeleteWebPayload>;
  }
}

export namespace SignInPayloadResolvers {
  export const defaultResolvers = {
    errors: (parent: SignInPayload) =>
      parent.errors === undefined ? null : parent.errors,
    token: (parent: SignInPayload) =>
      parent.token === undefined ? null : parent.token,
  };

  export type ErrorsResolver = (
    parent: SignInPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => SignInErrors | null | Promise<SignInErrors | null>;

  export type TokenResolver = (
    parent: SignInPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export interface Type {
    errors: (
      parent: SignInPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => SignInErrors | null | Promise<SignInErrors | null>;

    token: (
      parent: SignInPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;
  }
}

export namespace SignInErrorsResolvers {
  export const defaultResolvers = {
    email: (parent: SignInErrors) =>
      parent.email === undefined ? null : parent.email,
    password: (parent: SignInErrors) =>
      parent.password === undefined ? null : parent.password,
  };

  export type EmailResolver = (
    parent: SignInErrors,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => EmailError | null | Promise<EmailError | null>;

  export type PasswordResolver = (
    parent: SignInErrors,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PasswordError | null | Promise<PasswordError | null>;

  export interface Type {
    email: (
      parent: SignInErrors,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => EmailError | null | Promise<EmailError | null>;

    password: (
      parent: SignInErrors,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PasswordError | null | Promise<PasswordError | null>;
  }
}

export namespace SetUserThemePayloadResolvers {
  export const defaultResolvers = {
    user: (parent: SetUserThemePayload) =>
      parent.user === undefined ? null : parent.user,
  };

  export type UserResolver = (
    parent: SetUserThemePayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | null | Promise<User | null>;

  export interface Type {
    user: (
      parent: SetUserThemePayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | null | Promise<User | null>;
  }
}

export namespace CreateWebPayloadResolvers {
  export const defaultResolvers = {
    errors: (parent: CreateWebPayload) =>
      parent.errors === undefined ? null : parent.errors,
    web: (parent: CreateWebPayload) =>
      parent.web === undefined ? null : parent.web,
  };

  export type ErrorsResolver = (
    parent: CreateWebPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => CreateWebErrors | null | Promise<CreateWebErrors | null>;

  export type WebResolver = (
    parent: CreateWebPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Web | null | Promise<Web | null>;

  export interface Type {
    errors: (
      parent: CreateWebPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => CreateWebErrors | null | Promise<CreateWebErrors | null>;

    web: (
      parent: CreateWebPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Web | null | Promise<Web | null>;
  }
}

export namespace CreateWebErrorsResolvers {
  export const defaultResolvers = {
    name: (parent: CreateWebErrors) =>
      parent.name === undefined ? null : parent.name,
  };

  export type NameResolver = (
    parent: CreateWebErrors,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Max140CharsError | null | Promise<Max140CharsError | null>;

  export interface Type {
    name: (
      parent: CreateWebErrors,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Max140CharsError | null | Promise<Max140CharsError | null>;
  }
}

export namespace UpdateWebPayloadResolvers {
  export const defaultResolvers = {
    errors: (parent: UpdateWebPayload) =>
      parent.errors === undefined ? null : parent.errors,
    web: (parent: UpdateWebPayload) =>
      parent.web === undefined ? null : parent.web,
  };

  export type ErrorsResolver = (
    parent: UpdateWebPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => UpdateWebErrors | null | Promise<UpdateWebErrors | null>;

  export type WebResolver = (
    parent: UpdateWebPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Web | null | Promise<Web | null>;

  export interface Type {
    errors: (
      parent: UpdateWebPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => UpdateWebErrors | null | Promise<UpdateWebErrors | null>;

    web: (
      parent: UpdateWebPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Web | null | Promise<Web | null>;
  }
}

export namespace UpdateWebErrorsResolvers {
  export const defaultResolvers = {
    name: (parent: UpdateWebErrors) =>
      parent.name === undefined ? null : parent.name,
  };

  export type NameResolver = (
    parent: UpdateWebErrors,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Max140CharsError | null | Promise<Max140CharsError | null>;

  export interface Type {
    name: (
      parent: UpdateWebErrors,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Max140CharsError | null | Promise<Max140CharsError | null>;
  }
}

export namespace DeleteWebPayloadResolvers {
  export const defaultResolvers = {
    web: (parent: DeleteWebPayload) =>
      parent.web === undefined ? null : parent.web,
  };

  export type WebResolver = (
    parent: DeleteWebPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Web | null | Promise<Web | null>;

  export interface Type {
    web: (
      parent: DeleteWebPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Web | null | Promise<Web | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Web: WebResolvers.Type;
  Mutation: MutationResolvers.Type;
  SignInPayload: SignInPayloadResolvers.Type;
  SignInErrors: SignInErrorsResolvers.Type;
  SetUserThemePayload: SetUserThemePayloadResolvers.Type;
  CreateWebPayload: CreateWebPayloadResolvers.Type;
  CreateWebErrors: CreateWebErrorsResolvers.Type;
  UpdateWebPayload: UpdateWebPayloadResolvers.Type;
  UpdateWebErrors: UpdateWebErrorsResolvers.Type;
  DeleteWebPayload: DeleteWebPayloadResolvers.Type;
}
