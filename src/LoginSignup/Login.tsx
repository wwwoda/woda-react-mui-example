import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {Layout} from "./Layout";
import {useLoginUser} from "../GraphQl/Mutation/LoginUser";
import {Link} from "react-router-dom";
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

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const classes = useStyles();
    const {setToken} = React.useContext(tokenContext);
    const [loginUser, { loading: mutationLoading, error: mutationError }] = useLoginUser();
    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form
                className={classes.form}
                onSubmit={event => {
                    event.preventDefault();
                    loginUser({
                        variables: {
                            clientMutationId: "uniqueId",
                            username: username,
                            password: password
                        },
                    }).then(response => {
                        setToken(response?.data?.login?.authToken ?? undefined);
                    }).catch(error => {
                        console.log(error);
                    });
                }}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value ?? '')}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value ?? '')}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Login
                </Button>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                <Grid container>
                    <Grid item xs>
                        <Link to={'/password'}>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to={'/signup'}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Layout>
    )
};
