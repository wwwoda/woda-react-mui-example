/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RefreshAuthToken
// ====================================================

export interface RefreshAuthToken_refreshJwtAuthToken {
  __typename: "RefreshJwtAuthTokenPayload";
  /**
   * JWT Token that can be used in future requests for Authentication
   */
  authToken: string | null;
}

export interface RefreshAuthToken {
  /**
   * The payload for the refreshJwtAuthToken mutation
   */
  refreshJwtAuthToken: RefreshAuthToken_refreshJwtAuthToken | null;
}

export interface RefreshAuthTokenVariables {
  clientMutationId: string;
  refreshToken: string;
}
