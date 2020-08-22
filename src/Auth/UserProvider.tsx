import React from "react";
import {AuthToken, clearAuthToken, loadAuthToken} from "./AuthToken";

export interface UserContext {
    authToken: undefined|AuthToken,
    setAuthToken: (authToken: undefined|AuthToken) => void,
}

export const userContext = React.createContext<UserContext>({
    authToken: undefined,
    setAuthToken: () => {},
});

interface TokenProviderProps {
    children: React.ReactNode,
}

export default function UserProvider({children}: TokenProviderProps) {
    const setAuthToken = async (authToken: undefined|AuthToken) => {
        if (authToken === undefined) {
            clearAuthToken();
        }
        setState({...state, authToken: authToken})
    }
    const [state, setState] = React.useState<UserContext>({
        authToken: loadAuthToken(),
        setAuthToken: setAuthToken
    })
    return (
        <userContext.Provider value={state} children={children}/>
    );
}
