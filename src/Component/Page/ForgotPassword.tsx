import React from 'react';
import {LoginSignup} from "../Layout/LoginSignup";
import Typography from "@material-ui/core/Typography";

export default function ForgotPassword() {
    return (
        <LoginSignup>
            <Typography component="h1" variant="h5">
                Forgot Password
            </Typography>
        </LoginSignup>
    )
};
