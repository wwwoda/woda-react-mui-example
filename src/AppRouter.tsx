import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ForgotPassword from "./Auth/ForgotPassword";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Posts from "./Posts/Posts";
import CreatePost from "./Posts/CreatePost";
import Users from "./Users/Users";

export default function AppRouter() {
    return (
        <Router>
            { /** Backend Routes **/ }
            <Route path="/" exact component={Dashboard}/>
            <Route path="/posts" exact component={Posts}/>
            <Route path="/posts/create" exact component={CreatePost}/>
            <Route path="/users" exact component={Users}/>
            { /** Login/Signup Routes **/ }
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/password" exact component={ForgotPassword}/>
        </Router>
    );
}
