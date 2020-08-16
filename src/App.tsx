import React from 'react';
import Helmet from "react-helmet";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router, Route} from "react-router-dom";
import theme from "./theme";
import Dashboard from "./Component/Page/Dashboard";
import Posts from "./Component/Page/Posts";
import Login from "./Component/Page/Login";
import Signup from "./Component/Page/Signup";
import ForgotPassword from "./Component/Page/ForgotPassword";

export default function App() {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Router>
                    { /** Backend Layout Pages **/ }
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/projects" component={Posts}/>
                    { /** Base Layout Pages **/ }
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/password" exact component={ForgotPassword}/>
                </Router>
            </ThemeProvider>
        </>
    );
}
