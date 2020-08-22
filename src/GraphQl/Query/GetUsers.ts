import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {GetUsers, GetUsersVariables} from "./__generated__/GetUsers";

export const GET_POSTS = gql`
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

export const useGetUsers = () => useQuery<GetUsers, GetUsersVariables>(GET_POSTS);
