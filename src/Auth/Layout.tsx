import {ReactNode} from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Copyright from "../Component/Copyright";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <Grid container component="main" sx={{height: '100vh'}}>
            <Grid size={{xs: false, sm: 4, md: 7}} sx={(theme) => ({
                backgroundImage: 'url(login.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: theme.palette.grey[50],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            })} />
            <Grid size={{xs: 12, sm: 8, md: 5}} component={Paper} elevation={6} square>
                <Box sx={(theme) => ({
                    margin: theme.spacing(8, 4),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                })}>
                    <Avatar sx={(theme) => ({
                        margin: theme.spacing(1),
                        backgroundColor: theme.palette.secondary.main,
                    })}>
                        <img src={'favicon.png'} alt={''}/>
                    </Avatar>
                    {children}
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
};
