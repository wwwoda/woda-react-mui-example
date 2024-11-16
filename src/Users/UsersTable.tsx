import {
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import {useGetUsersQuery} from "../GraphQl/Generated/types.ts";

export default function UsersTable() {
    const {loading, error, data} = useGetUsersQuery();

    if (loading) {
        return <>Loading...</>;
    }

    if (error) {
        return <>Error: {error.message}</>;
    }

    const rows = data?.users?.nodes ?? [];

    return (
        <TableContainer component={Paper} sx={{
            width: '100%',
            maxHeight: 440,
        }}>
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
                            <TableCell align="right">
                                <Avatar
                                    sizes="small"
                                    alt={row.username ?? undefined}
                                    src={row.avatar?.url ?? undefined}
                                    sx={{ width: 24, height: 24 }}
                                />
                            </TableCell>
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
