import React from "react";

export interface TokenContext {
    token: undefined|string,
    setToken: (token: undefined|string) => void,
}

export const tokenContext = React.createContext<TokenContext>({
    token: undefined,
    setToken: () => {},
});

interface TokenProviderProps {
    children: React.ReactNode,
}

export default function TokenProvider({children}: TokenProviderProps) {
    const setToken = (token: undefined|string) => {
        localStorage.setItem('token', token ?? '');
        setState({...state, token: token})
    }
    const initState: TokenContext = {
        token: localStorage.getItem('token') ?? undefined,
        setToken: setToken
    }
    const [state, setState] = React.useState(initState)
    return (
        <tokenContext.Provider value={state} children={children}/>
    );
}
