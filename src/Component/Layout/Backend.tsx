import React, {ReactNode, useContext} from 'react';
import AppBar from "./../Global/AppBar";
import Drawer from "./../Global/Drawer";
import {Box, Container, Grid, Link, makeStyles, Theme, Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {tokenContext} from "../../LoginSignup/TokenProvider";

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
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    root: {
        display: 'flex',
    },
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.woda.at/">
                Woda Digital
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Backend = ({children}: LayoutProps) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const {token} = useContext(tokenContext);
    const drawerOpenedCb = () => {
        setDrawerOpen(true);
    };
    const drawerClosedCb = () => {
        setDrawerOpen(false);
    };
    console.log(token?.length)
    console.log('token: ', token)
    if (token === undefined) {
        return (
            <Redirect to={'/login'}/>
        );
    }
    return (
        <div className={classes.root}>
            <AppBar drawerOpened={drawerOpen} drawerOpenedCb={drawerOpenedCb}/>
            <Drawer drawerOpened={drawerOpen} drawerClosedCb={drawerClosedCb}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {children}
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    )
};
