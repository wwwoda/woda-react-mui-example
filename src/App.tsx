import React from 'react';
import Helmet from "react-helmet";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import theme from "./theme";
import AppRouter from "./AppRouter";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import TokenProvider from "./LoginSignup/TokenProvider";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/wp/graphql/',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    // Doesn't work: produces hook in wrong place problem
    //const {token} = useContext(tokenContext);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default function App() {
    return (
        <TokenProvider>
            <ApolloProvider client={client}>
                <Helmet>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Helmet>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <AppRouter/>
                </ThemeProvider>
            </ApolloProvider>
        </TokenProvider>
    );
}
