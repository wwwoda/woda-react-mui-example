import {jwtDecode} from "jwt-decode";
import {refreshAuthToken} from "../GraphQl/Mutation/RefreshAuthToken";

const localStorageKey = 'auth_token';
//let inMemoryAuthToken: undefined|AuthToken = undefined;

export interface AuthToken {
    authToken: string,
    refreshToken: string,
    expireTimestamp: number,
    userId: number,
}

export interface DecodedAuthToken {
    data: {user: {id: number}},
    exp: number,
    iat: number,
    iss: string,
    nbf: number,
}

export function clearAuthToken() {
    //inMemoryAuthToken = undefined;
    localStorage.removeItem(localStorageKey)
}

export function loadAuthToken() {
    //return inMemoryAuthToken;
    const authTokenJson = localStorage.getItem(localStorageKey);
    if (authTokenJson === null) {
        return undefined;
    }
    return JSON.parse(authTokenJson) as AuthToken;
}

export function saveAuthToken(authTokenString: string, refreshTokenString: string) {
    const decoded = jwtDecode(authTokenString) as DecodedAuthToken;
    const authToken: AuthToken = {
        authToken: authTokenString,
        refreshToken: refreshTokenString,
        expireTimestamp: decoded.exp,
        userId: decoded.data.user.id,
    };
    //inMemoryAuthToken = authToken;
    localStorage.setItem(localStorageKey, JSON.stringify(authToken));
    return authToken;
}

export function isExpired() {
    const authToken = loadAuthToken();
    const isExpired = authToken === undefined ? true : new Date(authToken.expireTimestamp * 1000) < new Date();
    return isExpired;
}

export async function refresh() {
    const authToken = loadAuthToken();
    if (authToken === undefined) {
        throw new Error('No authenticated! Can not refresh auth token.')
    }
    return refreshAuthToken(authToken)
}
