import {gql, useMutation} from "@apollo/client";
import {LoginUser, LoginUserVariables} from "./__generated__/LoginUser";

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

export const useLoginUser = () => useMutation<LoginUser, LoginUserVariables>(LOGIN_USER);
