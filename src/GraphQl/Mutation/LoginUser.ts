import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
    mutation LoginUser($clientMutationId: String!, $username: String!, $password: String!) {
        login( input: {
            clientMutationId: $clientMutationId
            username: $username
            password: $password
        } ) {
            authToken
            refreshToken
            user {
                id
                name
            }
        }
    }
`;
