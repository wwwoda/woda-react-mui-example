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
import {useGetPosts} from "../GraphQl/Query/GetPosts";
import {GetPosts_posts_nodes} from "../GraphQl/Query/__generated__/GetPosts";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: '100%',
        maxHeight: 440,
    },
}));

interface ProjectsTableProps {
    data: (string|null)[][],
    columns: string[],
}

export default function PostsTable() {
    const classes = useStyles();
    const {loading, error, data} = useGetPosts();
    if (loading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>Error :( {error.message}</>;
    }
    const rows = data?.posts?.nodes as GetPosts_posts_nodes[] ?? [];
    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Post Name</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
