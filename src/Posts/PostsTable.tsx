import React from "react";
import {makeStyles, TableContainer, Theme} from "@material-ui/core";

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

export default function PostsTable({data, columns}: ProjectsTableProps) {
    const classes = useStyles();
    return (
        <TableContainer className={classes.container}>
            Table
        </TableContainer>
    );
}
