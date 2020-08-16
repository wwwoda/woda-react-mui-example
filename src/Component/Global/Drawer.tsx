import React from "react";
import Divider from "@material-ui/core/Divider";
import {default as MuiDrawer} from "@material-ui/core/Drawer";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import {makeStyles, Theme} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
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
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
}));

interface DrawerProps {
    drawerClosedCb: () => void,
    drawerOpened: boolean,
}

export default function Drawer({drawerClosedCb, drawerOpened}: DrawerProps) {
    const classes = useStyles();
    return (
        <MuiDrawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerContainer}>
                <Divider/>
                <PrimaryMenu/>
                <Divider/>
                <SecondaryMenu/>
            </div>
        </MuiDrawer>
    );
}
