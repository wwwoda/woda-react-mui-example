/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users_nodes_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface GetUsers_users_nodes {
  __typename: "User";
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   */
  avatar: GetUsers_users_nodes_avatar | null;
  /**
   * A list of capabilities (permissions) granted to the user
   */
  capabilities: (string | null)[] | null;
  /**
   * Identifies the primary key from the database.
   */
  databaseId: number;
  /**
   * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
   */
  email: string | null;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   */
  firstName: string | null;
  /**
   * The globally unique identifier for the user object.
   */
  id: string;
  /**
   * The expiration for the JWT Token for the user. If not set custom for the user, it will use the default sitewide expiration setting
   */
  jwtAuthExpiration: string | null;
  /**
   * A JWT token that can be used in future requests for authentication/authorization
   */
  jwtAuthToken: string | null;
  /**
   * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
   */
  jwtRefreshToken: string | null;
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   */
  lastName: string | null;
  /**
   * The preferred language locale set for the user. Value derived from get_user_locale().
   */
  locale: string | null;
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   */
  name: string | null;
  /**
   * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
   */
  nicename: string | null;
  /**
   * Nickname of the user.
   */
  nickname: string | null;
  /**
   * The date the user registered or was created. The field follows a full ISO8601 date string format.
   */
  registeredDate: string | null;
  /**
   * Username for the user. This field is equivalent to WP_User-&gt;user_login.
   */
  username: string | null;
}

export interface GetUsers_users {
  __typename: "RootQueryToUserConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetUsers_users_nodes | null)[] | null;
}

export interface GetUsers {
  /**
   * Connection between the RootQuery type and the User type
   */
  users: GetUsers_users | null;
}

export interface GetUsersVariables {
  avatarSize?: number | null;
}
