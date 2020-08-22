import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Backend} from "../Component/Layout/Backend";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

export default function CreatePost() {
    const classes = useStyles();
    return (
        <Backend>
            CreatePost
        </Backend>
    );
}
