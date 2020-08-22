import React from 'react';
import Header, {HeaderProps} from "../Component/Header/Header";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {Layout} from "../Backend/Layout";
import SettingsTable from "./SettingsTable";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

export default function Settings() {
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
        title: 'Users',
        tabs: [
            {
                label: 'Active',
                content: <SettingsTable/>,
            },
        ]
    };
    return (
        <Layout>
            <Header {...headerProps}/>
        </Layout>
    );
}
