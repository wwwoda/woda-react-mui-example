import {ReactNode} from 'react';
import {Box} from "@mui/material";
import Copyright from "../Component/Copyright";
import NavigationDrawer from "./NavigationDrawer";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <Box sx={{display: 'flex'}}>
            <NavigationDrawer />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}>
                {children}
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Box>
        </Box>
    )
};
