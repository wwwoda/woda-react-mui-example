import React from "react";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import {Divider, Drawer, makeStyles, Theme} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

export default function NavigationDrawer() {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.appBarSpacer} />
            <div className={classes.drawerContainer}>
                <Divider/>
                <PrimaryMenu/>
                <Divider/>
                <SecondaryMenu/>
            </div>
        </Drawer>
    );
}
