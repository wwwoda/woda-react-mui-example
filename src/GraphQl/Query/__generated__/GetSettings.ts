/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSettings
// ====================================================

export interface GetSettings_generalSettings {
  __typename: "GeneralSettings";
  /**
   * Site title.
   */
  title: string | null;
}

export interface GetSettings {
  generalSettings: GetSettings_generalSettings | null;
}
