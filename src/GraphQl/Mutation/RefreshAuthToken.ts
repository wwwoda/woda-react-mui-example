import {gql, useMutation} from "@apollo/client";
import {RefreshAuthToken, RefreshAuthTokenVariables} from "./__generated__/RefreshAuthToken";
import {AuthToken, saveAuthToken} from "../../Auth/AuthToken";

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

export const useRefreshAuthToken = () => useMutation<RefreshAuthToken, RefreshAuthTokenVariables>(REFRESH_AUTH_TOKEN);

// Needed because we cant use hooks in GraphQl/customFetch.ts
const refreshTokenMutation = (clientMutationId: string, refreshToken: string) => {
    return JSON.stringify({
        variables: {clientMutationId: clientMutationId, refreshToken: refreshToken},
        query: REFRESH_AUTH_TOKEN.loc && REFRESH_AUTH_TOKEN.loc.source.body,
    });
};
export const refreshAuthToken = async (authToken: AuthToken) => {
    // @todo get endpoint url from centralized place
    const response = await fetch('http://localhost:3001/wp/graphql/', {
        headers: {
            'content-type': 'application/json',
            Authorization: `bearer ${authToken.authToken}`,
        },
        method: 'POST',
        body: refreshTokenMutation('uniqueId', authToken.refreshToken),
    });
    const text = await response.text();
    const json = await JSON.parse(text);
    const authTokenString = json?.data?.refreshJwtAuthToken?.authToken ?? undefined;
    if (authTokenString === undefined) {
        throw new Error('Error when refreshing auth token.');
    }
    return saveAuthToken(authTokenString, authToken.refreshToken);
};
