import {FormEvent, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";
import {Layout} from "./Layout";
import {useUserContext} from "./UserProvider";
import {useRegisterUserMutation} from "../GraphQl/Generated/types.ts";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {Link} from "@mui/material";

export default function Signup() {
    const [errorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registerUser, { loading: mutationLoading, error: mutationError }] = useRegisterUserMutation();
    const {login} = useUserContext();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await registerUser({
                variables: {
                    clientMutationId: "uniqueId",
                    username: email,
                    password: password,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                }
            });
            const authTokenString = response?.data?.registerUser?.user?.jwtAuthToken ?? undefined;
            const refreshTokenString = response?.data?.registerUser?.user?.jwtRefreshToken ?? undefined;
            if (authTokenString === undefined || refreshTokenString === undefined) {
                return;
            }
            login(authTokenString, refreshTokenString);
        } catch(error) {
            console.error('Error:', error);
        }
    };
    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Signup
            </Typography>
            <form
                style={{
                    width: '100%', // Fix IE 11 issue.
                    marginTop: '1rem',
                }}
                onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, sm: 6}}>
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
                    <Grid size={{xs: 12, sm: 6}}>
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
                    <Grid size={{xs: 12}}>
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
                    <Grid size={{xs: 12}}>
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
                    <Grid size={{xs: 12}}>
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
                    sx={(theme) => ({
                        margin: theme.spacing(3, 0, 2),
                    })}
                >
                    Sign Up
                </Button>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                {errorMessage !== '' && <p>Error :( {errorMessage}</p>}

                <Stack direction="row">
                    <Box>
                        <Link href={'/password'}>
                            {'Forgot password?'}

                        </Link>
                    </Box>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Box>
                        <Link href={'/login'}>
                            {'Login'}
                        </Link>
                    </Box>
                </Stack>
            </form>
        </Layout>
    )
};
