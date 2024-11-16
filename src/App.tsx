import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from "./theme";
import AppRouter from "./AppRouter";
import {ApolloProvider} from "@apollo/client";
import UserProvider from "./Auth/UserProvider";
import {client} from "./GraphQl/client";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <UserProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <AppRouter/>
                </ThemeProvider>
            </UserProvider>
        </ApolloProvider>
    );
}
