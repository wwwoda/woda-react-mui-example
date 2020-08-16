/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_registerUser_user {
  __typename: "User";
  /**
   * A JWT token that can be used in future requests for authentication/authorization
   */
  jwtAuthToken: string | null;
  /**
   * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
   */
  jwtRefreshToken: string | null;
}

export interface RegisterUser_registerUser {
  __typename: "RegisterUserPayload";
  user: RegisterUser_registerUser_user | null;
}

export interface RegisterUser {
  /**
   * The payload for the registerUser mutation
   */
  registerUser: RegisterUser_registerUser | null;
}

export interface RegisterUserVariables {
  clientMutationId: string;
  username: string;
  password: string;
  email: string;
}
