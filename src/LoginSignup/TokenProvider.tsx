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
    let token: string|null|undefined = localStorage.getItem('token');
    if (token === null || token.length === 0) {
        token = undefined;
    }
    const initState: TokenContext = {
        token: token,
        setToken: setToken
    }
    const [state, setState] = React.useState(initState)
    return (
        <tokenContext.Provider value={state} children={children}/>
    );
}
