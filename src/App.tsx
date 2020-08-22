import React from 'react';
import Helmet from "react-helmet";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import theme from "./theme";
import AppRouter from "./AppRouter";
import {ApolloProvider} from "@apollo/client";
import UserProvider from "./Auth/UserProvider";
import {client} from "./GraphQl/client";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <UserProvider>
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
            </UserProvider>
        </ApolloProvider>
    );
}
