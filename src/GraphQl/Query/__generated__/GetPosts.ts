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

export interface GetPosts_posts_pageInfo_offsetPagination {
  __typename: "OffsetPaginationPageInfo";
  /**
   * True if there is one or more nodes available in this connection. Eg. you can increase the offset at least by one.
   */
  hasMore: boolean | null;
  /**
   * True when offset can be decresed eg. offset is 0&lt;
   */
  hasPrevious: boolean | null;
  /**
   * Total amount of nodes in this connection
   */
  total: number | null;
}

export interface GetPosts_posts_pageInfo {
  __typename: "WPPageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * Get information about the offset pagination state in the current connection
   */
  offsetPagination: GetPosts_posts_pageInfo_offsetPagination | null;
}

export interface GetPosts_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPosts_posts_nodes | null)[] | null;
  /**
   * Information about pagination in a connection.
   */
  pageInfo: GetPosts_posts_pageInfo | null;
}

export interface GetPosts {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetPosts_posts | null;
}

export interface GetPostsVariables {
  size?: number | null;
  offset?: number | null;
}
