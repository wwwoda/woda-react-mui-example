import {gql} from "@apollo/client";
import {AuthToken, saveAuthToken} from "../../Auth/AuthToken";
import {RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables} from "../Generated/types.ts";
import {client} from "../client.ts";

const REFRESH_AUTH_TOKEN = gql`
    mutation RefreshAuthToken($clientMutationId: String!, $refreshToken: String!) {
        refreshJwtAuthToken(
            input: {
                clientMutationId: $clientMutationId
                jwtRefreshToken: $refreshToken
            }) {
            authToken
        }
    }
`;

export const refreshAuthToken = async (authToken: AuthToken) => {
    const response = await client.mutate<RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables>({
        mutation: REFRESH_AUTH_TOKEN,
        variables: {clientMutationId: 'uniqueId', refreshToken: authToken.refreshToken},
    })
    const authTokenString = response?.data?.refreshJwtAuthToken?.authToken ?? undefined;
    if (authTokenString === undefined) {
        throw new Error('Error when refreshing auth token.');
    }
    return saveAuthToken(authTokenString, authToken.refreshToken);
};
