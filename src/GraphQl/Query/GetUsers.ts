import {gql} from "@apollo/client";

export const GET_USERS = gql`
    query GetUsers($avatarSize: Int) {
        users {
            nodes {
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
    }
`;
