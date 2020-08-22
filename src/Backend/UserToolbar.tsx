import React from "react";
import {IconButton, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {useApolloClient} from "@apollo/client";
import {userContext} from "../Auth/UserProvider";

const useStyles = makeStyles((theme: Theme) => ({
    appBarLogo: {
        height: 18,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function UserToolbar() {
    const classes = useStyles();
    const client = useApolloClient();
    const {setAuthToken} = React.useContext(userContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
        console.log('logout')
        client.resetStore();
        setAuthToken(undefined);
    };
    return (
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
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </Toolbar>
    );
}
