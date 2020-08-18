import {gql, useMutation} from "@apollo/client";
import {RegisterUser, RegisterUserVariables} from "./__generated__/RegisterUser";

export const REGISTER_USER = gql`
    mutation RegisterUser(
        $clientMutationId: String!, 
        $username: String!, 
        $password: String!, 
        $email: String!, 
        $firstName: String, 
        $lastName: String
    ) {
        registerUser(
            input: {
                clientMutationId: $clientMutationId,
                username: $username,
                password: $password,
                email: $email,
                firstName: $firstName,
                lastName: $lastName
            }) {
            user {
                jwtAuthToken
                jwtRefreshToken
            }
        }
    }
`;

export const useRegisterUser = () => useMutation<RegisterUser, RegisterUserVariables>(REGISTER_USER);
