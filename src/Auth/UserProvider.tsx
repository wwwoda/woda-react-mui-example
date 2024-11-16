import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {AuthToken, clearAuthToken, loadAuthToken, saveAuthToken} from "./AuthToken";
import {useGetViewerLazyQuery, User} from "../GraphQl/Generated/types.ts";
import {client} from "../GraphQl/client.ts";

export interface UserContext {
    login: (authTokenString: string, refreshTokenString: string) => void,
    logout: () => Promise<void>,
    user?: User,
    authToken?: AuthToken,
}

export const userContext = createContext<UserContext>({
    login: () => {},
    logout: async () => {},
    user: undefined,
});

export const useUserContext = () => useContext(userContext);

interface UserProviderProps {
    children: ReactNode,
}

export default function UserProvider({children}: UserProviderProps) {
    const [authToken, setAuthToken] = useState(loadAuthToken());
    const [user, setUser] = useState<User>();
    const [getViewer] = useGetViewerLazyQuery()

    const login = useCallback(
        (authTokenString: string, refreshTokenString: string) => {
            setAuthToken(saveAuthToken(authTokenString, refreshTokenString));
            setUser(undefined);
        },
        [setAuthToken]
    );

    const logout = useCallback(
        async () => {
            setAuthToken(undefined);
            setUser(undefined);
            clearAuthToken();
            await client.resetStore();
        },
        [setAuthToken]
    );

    useEffect(() => {
        if (authToken === undefined) {
            return;
        }
        getViewer()
            .then(result => {
                if (result.data === undefined || result.data.viewer === null) {
                    throw new Error('No user found for authToken');
                }
                setUser(result.data.viewer as User);
            });
    }, [authToken, setUser, getViewer]);

    return (
        <userContext.Provider value={{
            login,
            logout,
            user,
            authToken,
        }} children={children}/>
    );
}
