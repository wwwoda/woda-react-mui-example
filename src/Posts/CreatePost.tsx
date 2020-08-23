import React from 'react';
import {Layout} from "../Backend/Layout";
import {
    AppBar,
    Container,
    createStyles,
    Grid,
    makeStyles,
    TextField,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        field: {
            width: '100%',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
    }),
);

export default function CreatePost() {
    const classes = useStyles();
    return (
        <Layout>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Create Post</Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            className={classes.field}
                            variant="outlined"
                            fullWidth
                            label="Title"/>
                    </form>
                </Grid>
            </Container>
        </Layout>
    );
}
