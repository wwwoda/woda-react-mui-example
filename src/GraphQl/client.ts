import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import customFetch from "./customFetch";

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/wp/graphql/',
    credentials: 'omit',
    fetch: customFetch
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
