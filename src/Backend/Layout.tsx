import React, {ReactNode, useContext} from 'react';
import {Box, makeStyles, Theme} from "@material-ui/core";
import {userContext} from "../Auth/UserProvider";
import {Redirect} from "react-router-dom";
import Copyright from "../Component/Copyright";
import HeaderAppBar from "./HeaderAppBar";
import NavigationDrawer from "./NavigationDrawer";

interface LayoutProps {
    children?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    root: {
        display: 'flex',
    },
}));

export const Layout = ({children}: LayoutProps) => {
    const classes = useStyles();
    const {authToken} = useContext(userContext);
    if (authToken === undefined) {
        return <Redirect to={'/login'}/>;
    }
    return (
        <div className={classes.root}>
            <HeaderAppBar/>
            <NavigationDrawer/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                {children}
                <Box pt={4}>
                    <Copyright />
                </Box>
            </main>
        </div>
    )
};
