/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_updatePost_post {
  __typename: "Post";
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Post publishing date.
   */
  date: string | null;
}

export interface UpdatePost_updatePost {
  __typename: "UpdatePostPayload";
  post: UpdatePost_updatePost_post | null;
}

export interface UpdatePost {
  /**
   * The payload for the updatePost mutation
   */
  updatePost: UpdatePost_updatePost | null;
}

export interface UpdatePostVariables {
  clientMutationId: string;
  id: string;
  title: string;
}
