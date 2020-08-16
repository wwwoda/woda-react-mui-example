import {gql, useMutation} from "@apollo/client";
import {RegisterUser, RegisterUserVariables} from "./__generated__/RegisterUser";

export const REGISTER_USER = gql`
    mutation RegisterUser($clientMutationId: String!, $username: String!, $password: String!, $email: String!) {
        registerUser(
            input: {
                clientMutationId: $clientMutationId,
                username: $username,
                password: $password,
                email: $email
            }) {
            user {
                jwtAuthToken
                jwtRefreshToken
            }
        }
    }
`;

export const useRegisterUser = () => useMutation<RegisterUser, RegisterUserVariables>(REGISTER_USER);
