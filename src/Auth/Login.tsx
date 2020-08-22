import React, {FormEvent} from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {Layout} from "./Layout";
import {useLoginUser} from "../GraphQl/Mutation/LoginUser";
import {Link} from "react-router-dom";
import {userContext} from "./UserProvider";
import {saveAuthToken} from "./AuthToken";

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
    const classes = useStyles();
    const [errorMessage, setErrorMessage] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginUser, { loading }] = useLoginUser();
    const {setAuthToken} = React.useContext(userContext);
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await loginUser({
                variables: {
                    clientMutationId: "uniqueId",
                    username: username,
                    password: password
                },
            });
            const authTokenString = response?.data?.login?.authToken ?? undefined;
            const refreshTokenString = response?.data?.login?.refreshToken ?? undefined;
            if (authTokenString === undefined || refreshTokenString === undefined) {
                return;
            }
            setAuthToken(saveAuthToken(authTokenString, refreshTokenString));
        } catch(error) {
            setErrorMessage(error.message);
        }
    }
    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form
                className={classes.form}
                onSubmit={onSubmit}>
                {errorMessage !== '' && <Alert severity="error">{errorMessage}</Alert>}
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    value={username}
                    onChange={event => setUsername(event.target.value ?? '')}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={event => setPassword(event.target.value ?? '')}
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
                    {loading || 'Login'}
                    {loading && <CircularProgress size={24}/>}
                </Button>
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
