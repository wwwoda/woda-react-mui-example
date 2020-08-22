import React from 'react';
import Header, {HeaderProps} from "../Component/Header/Header";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {Backend} from "../Component/Layout/Backend";
import PostsTable from "./PostsTable";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

export default function Posts() {
    const classes = useStyles();
    const headerProps: HeaderProps = {
        actions: [
            <Button variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<Add />}
                    component={RouterLink}
                    to="/posts/create">Add new</Button>,
        ],
        title: 'Posts',
        tabs: [
            {
                label: 'Active',
                content: <PostsTable/>,
            },
        ]
    };
    return (
        <Backend>
            <Header {...headerProps}/>
        </Backend>
    );
}
