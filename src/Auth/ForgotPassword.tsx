import Typography from "@mui/material/Typography";
import {Layout} from "./Layout";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {Link} from "@mui/material";

export default function ForgotPassword() {
    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Forgot Password
            </Typography>
            <Stack direction="row" width="100%">
                <Box>
                    <Link href={'/login'}>
                        {'Login'}

                    </Link>
                </Box>
                <Box sx={{flexGrow: 1}}></Box>
                <Box>
                    <Link href={'/signup'}>
                        {'Don\'t have an account? Sign Up'}
                    </Link>
                </Box>
            </Stack>
        </Layout>
    )
};
