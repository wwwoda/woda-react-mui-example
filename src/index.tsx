import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import * as serviceWorker from "./service-worker";
import App from "./App";

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/wp/graphql/',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
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

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root")
);

serviceWorker.unregister();
