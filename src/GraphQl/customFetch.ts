import * as authTokenHelper from "../Auth/AuthToken";

export default async (uri: any, options: any) => {
    let authToken = authTokenHelper.loadAuthToken();
    if (authToken === undefined) {
        return await fetch(uri, options);
    }
    if (authTokenHelper.isExpired()) {
        authToken = await authTokenHelper.refresh();
    }
    options.headers.Authorization = `Bearer ${authToken.authToken}`;
    return await fetch(uri, options);
};
