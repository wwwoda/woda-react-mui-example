/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost_post {
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

export interface CreatePost_createPost {
  __typename: "CreatePostPayload";
  post: CreatePost_createPost_post | null;
}

export interface CreatePost {
  /**
   * The payload for the createPost mutation
   */
  createPost: CreatePost_createPost | null;
}

export interface CreatePostVariables {
  clientMutationId: string;
  title: string;
}
