/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts_nodes_featuredImage_node {
  __typename: "MediaItem";
  /**
   * The globally unique identifier of the attachment object.
   */
  id: string;
}

export interface GetPosts_posts_nodes_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetPosts_posts_nodes_featuredImage_node | null;
}

export interface GetPosts_posts_nodes {
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
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: GetPosts_posts_nodes_featuredImage | null;
}

export interface GetPosts_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPosts_posts_nodes | null)[] | null;
}

export interface GetPosts {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetPosts_posts | null;
}
