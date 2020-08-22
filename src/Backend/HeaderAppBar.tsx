import React from "react";
import {AppBar, makeStyles, Theme} from "@material-ui/core";
import UserToolbar from "./UserToolbar";

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

export default function HeaderAppBar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <UserToolbar/>
        </AppBar>
    );
}
