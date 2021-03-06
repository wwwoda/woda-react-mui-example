import React, {ReactNode, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Redirect} from "react-router-dom";
import {userContext} from "./UserProvider";
import Copyright from "../Component/Copyright";

interface LayoutProps {
    children?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(login.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const Layout = ({children}: LayoutProps) => {
    const classes = useStyles();
    const {authToken} = useContext(userContext);
    if (authToken !== undefined) {
        return <Redirect to={'/'}/>;
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <img src={'favicon.png'} alt={''}/>
                    </Avatar>
                    {children}
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    )
};
