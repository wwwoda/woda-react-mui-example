/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewer
// ====================================================

export interface GetViewer_viewer_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface GetViewer_viewer {
  __typename: "User";
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   */
  avatar: GetViewer_viewer_avatar | null;
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

export interface GetViewer {
  /**
   * Returns the current user
   */
  viewer: GetViewer_viewer | null;
}

export interface GetViewerVariables {
  avatarSize?: number | null;
}
