import React, {useState} from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import {useGetPostsQuery} from "../GraphQl/Generated/types.ts";

export default function PostsTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const {error, data} = useGetPostsQuery({variables: {size: rowsPerPage, offset: page * rowsPerPage, title: ''}});

    if (error) {
        return <>Error: {error.message}</>;
    }

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        event?.preventDefault();
        setPage(newPage);
    };

    const handleRowsPerPageChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const rows = data?.posts?.nodes ?? [];
    const pageInfo = data?.posts?.pageInfo ?? undefined;

    return (
        <TableContainer component={Paper} sx={{width: '100%'}}>
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
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            colSpan={3}
                            count={pageInfo?.offsetPagination?.total ?? 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                                select: {
                                    inputProps: {'aria-label': 'rows per page'},
                                    native: true,
                                }
                            }}
                            onRowsPerPageChange={handleRowsPerPageChange}
                            onPageChange={handleChangePage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
