import React from "react";
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme
} from "@material-ui/core";
import {useGetUsers} from "../GraphQl/Query/GetUsers";
import {GetUsers_users_nodes} from "../GraphQl/Query/__generated__/GetUsers";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: '100%',
        maxHeight: 440,
    },
}));

interface UsersTableProps {
    data: (string|null)[][],
    columns: string[],
}

export default function SettingsTable() {
    const classes = useStyles();
    const {loading, error, data} = useGetUsers();
    if (loading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>Error :( {error.message}</>;
    }
    const rows = data?.users?.nodes as GetUsers_users_nodes[] ?? [];
    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="right">Avatar</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Registered Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.username}
                            </TableCell>
                            <TableCell align="right">img</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.firstName}</TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                            <TableCell align="right">{row.registeredDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
