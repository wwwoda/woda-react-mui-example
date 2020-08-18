import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./Component/Page/Dashboard";
import Posts from "./Component/Page/Posts";
import ForgotPassword from "./LoginSignup/ForgotPassword";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";

export default function AppRouter() {
    return (
        <Router>
            { /** Backend Routes **/ }
            <Route path="/" exact component={Dashboard}/>
            <Route path="/projects" exact component={Posts}/>
            <Route path="/projects/create" exact component={Posts}/>
            { /** Login/Signup Routes **/ }
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/password" exact component={ForgotPassword}/>
        </Router>
    );
}
