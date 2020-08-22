import JwtDecode from "jwt-decode";
import {refreshAuthToken} from "../GraphQl/Mutation/RefreshAuthToken";

let inMemoryAuthToken: undefined|AuthToken = undefined;

export interface AuthToken {
    authToken: string,
    refreshToken: string,
    expireDate: Date,
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
    inMemoryAuthToken = undefined;
}

export function loadAuthToken() {
    return inMemoryAuthToken;
}

export function saveAuthToken(authToken: string, refreshToken: string) {
    const decoded = JwtDecode(authToken) as DecodedAuthToken;
    inMemoryAuthToken = {
        authToken: authToken,
        refreshToken: refreshToken,
        expireDate: new Date(decoded.exp * 1000),
        userId: decoded.data.user.id,
    }
    console.log('saving authToken ', inMemoryAuthToken);
    return inMemoryAuthToken;
}

export function isExpired() {
    const isExpired = inMemoryAuthToken === undefined ? true : inMemoryAuthToken.expireDate < new Date();
    console.log('isExpired ', isExpired)
    return isExpired;
}

export async function refresh() {
    if (inMemoryAuthToken === undefined) {
        throw new Error('No authenticated! Can not refresh auth token.')
    }
    return refreshAuthToken(inMemoryAuthToken)
}
