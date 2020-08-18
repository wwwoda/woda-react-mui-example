import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Layout} from "./Layout";
import {useRegisterUser} from "../GraphQl/Mutation/RegisterUser";
import {tokenContext} from "./TokenProvider";

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Signup() {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [registerUser, { loading: mutationLoading, error: mutationError }] = useRegisterUser();
    const {setToken} = React.useContext(tokenContext);
    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Signup
            </Typography>
            <form
                className={classes.form}
                onSubmit={event => {
                    event.preventDefault();
                    registerUser({
                        variables: {
                            clientMutationId: "uniqueId",
                            username: email,
                            password: password,
                            email: email,
                            firstName: firstName,
                            lastName: lastName,
                        }
                    }).then(response => {
                        setToken(response?.data?.registerUser?.user?.jwtAuthToken ?? undefined);
                    }).catch(error => {
                        console.log(error);
                    });
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            value={firstName}
                            onChange={event => setFirstName(event.target.value ?? '')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            value={lastName}
                            onChange={event => setLastName(event.target.value ?? '')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={event => setEmail(event.target.value ?? '')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={event => setPassword(event.target.value ?? '')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to={'/login'}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Layout>
    )
};
