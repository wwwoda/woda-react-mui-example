import {FormEvent, useState} from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import {Layout} from "./Layout";
import {useUserContext} from "./UserProvider";
import {Form, Navigate} from "react-router-dom";
import {useLoginUserMutation} from "../GraphQl/Generated/types.ts";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {Link} from "@mui/material";

export default function Login() {
    const [errorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { loading }] = useLoginUserMutation();
    const {login, user} = useUserContext();

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
            login(authTokenString, refreshTokenString);
        } catch(error) {
            console.error('Error logging in:', error);
        }
    }

    if (user !== undefined) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <Form
                style={{
                    width: '100%', // Fix IE 11 issue.
                    marginTop: '1rem',
                }}
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
                    sx={(theme) => ({
                        margin: theme.spacing(3, 0, 2),
                    })}
                >
                    {loading || 'Login'}
                    {loading && <CircularProgress size={24}/>}
                </Button>
                <Stack direction="row">
                    <Box>
                        <Link href={'/password'}>
                            {'Forgot password?'}

                        </Link>
                    </Box>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Box>
                        <Link href={'/signup'}>
                            {'Don\'t have an account? Sign Up'}
                        </Link>
                    </Box>
                </Stack>
            </Form>
        </Layout>
    )
};
