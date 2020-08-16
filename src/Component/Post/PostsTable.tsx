import MUIDataTable, {MUIDataTableOptions} from "mui-datatables";
import React from "react";
import {makeStyles, TableContainer, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: '100%',
        maxHeight: 440,
    },
}));

const options: MUIDataTableOptions = {
    filterType: 'checkbox',
    fixedHeader: true,
    fixedSelectColumn: true,
};

interface ProjectsTableProps {
    data: (string|null)[][],
    columns: string[],
}

export default function PostsTable({data, columns}: ProjectsTableProps) {
    const classes = useStyles();
    return (
        <TableContainer className={classes.container}>
            <MUIDataTable
                title={"Drafts"}
                data={data}
                columns={columns}
                options={options}
            />
        </TableContainer>
    );
}
