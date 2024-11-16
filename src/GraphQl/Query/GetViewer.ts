import {gql} from "@apollo/client";

export const GET_VIEWER = gql`
    query GetViewer($avatarSize: Int) {
        viewer {
            avatar(size: $avatarSize) {
                url
            }
            capabilities
            databaseId
            email
            firstName
            id
            lastName
            locale
            name
            nicename
            nickname
            registeredDate
            username
        }
    }
`;
