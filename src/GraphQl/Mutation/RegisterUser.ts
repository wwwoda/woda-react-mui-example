import {gql} from "@apollo/client";

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
