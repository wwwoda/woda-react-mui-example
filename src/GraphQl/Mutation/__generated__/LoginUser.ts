/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_login_user {
  __typename: "User";
  /**
   * The globally unique identifier for the user object.
   */
  id: string;
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   */
  name: string | null;
}

export interface LoginUser_login {
  __typename: "LoginPayload";
  /**
   * JWT Token that can be used in future requests for Authentication
   */
  authToken: string | null;
  /**
   * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
   */
  refreshToken: string | null;
  /**
   * The user that was logged in
   */
  user: LoginUser_login_user | null;
}

export interface LoginUser {
  /**
   * The payload for the login mutation
   */
  login: LoginUser_login | null;
}

export interface LoginUserVariables {
  clientMutationId: string;
  username: string;
  password: string;
}
