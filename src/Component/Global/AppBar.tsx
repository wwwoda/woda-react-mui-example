import {default as MuiAppBar} from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, {useContext} from "react";
import {IconButton, makeStyles, Menu, MenuItem, Theme} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {useApolloClient} from "@apollo/client";
import {tokenContext} from "../../LoginSignup/TokenProvider";

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    appBarLogo: {
        height: 18,
    },
    title: {
        flexGrow: 1,
    },
}));

interface AppBarProps {
    drawerOpenedCb: () => void,
    drawerOpened: boolean,
}

export default function AppBar({drawerOpenedCb, drawerOpened}: AppBarProps) {
    const classes = useStyles();
    const client = useApolloClient();
    const {setToken} = useContext(tokenContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
        client.resetStore();
        setToken(undefined);
        console.log('')
    };
    return (
        <MuiAppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap className={classes.title}>
                    <img src={'logo.svg'} alt={''} className={classes.appBarLogo}/>
                </Typography>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleMenu}
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </MuiAppBar>
    );
}
