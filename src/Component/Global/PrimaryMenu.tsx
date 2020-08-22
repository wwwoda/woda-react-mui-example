import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import {BusinessCenter, Dashboard, Group} from "@material-ui/icons";

export default function PrimaryMenu() {
    return (
        <List>
            <Link to={'/'}>
                <ListItem button>
                    <ListItemIcon>
                        <Dashboard/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
            </Link>
            <Link to={'/posts'}>
                <ListItem button>
                    <ListItemIcon>
                        <BusinessCenter/>
                    </ListItemIcon>
                    <ListItemText primary="Posts"/>
                </ListItem>
            </Link>
            <Link to={'/users'}>
                <ListItem button>
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary="Users"/>
                </ListItem>
            </Link>
        </List>
    );
}
