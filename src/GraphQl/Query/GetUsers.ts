import {gql, useQuery} from "@apollo/client";
import {GetUsers, GetUsersVariables} from "./__generated__/GetUsers";

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

export const useGetUsers = () => useQuery<GetUsers, GetUsersVariables>(GET_USERS);
