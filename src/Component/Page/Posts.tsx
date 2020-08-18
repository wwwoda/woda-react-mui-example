import React from 'react';
import Header, {HeaderProps} from "../Header/Header";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {Backend} from "../Layout/Backend";
import {useGetPosts} from "../../GraphQl/Query/GetPosts";
import PostsTable from "../../Posts/PostsTable";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

export default function Posts() {
    const classes = useStyles();
    const {loading, error, data} = useGetPosts();
    if (loading) return <Backend>Loading...</Backend>;
    if (error) return <Backend>Error! {error.message}</Backend>;
    if (data === null) return <Backend>No results</Backend>;
    const tableData = data?.posts?.nodes?.map((post) => post === null ? [null, null, null] : [post.id, post.title, post.date]);
    const headerProps: HeaderProps = {
        actions: [
            <Button variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<Add />}
                    component={RouterLink}
                    to="/create-post">Add new</Button>,
        ],
        title: 'Projects',
        tabs: [
            {
                label: 'Active',
                content: <PostsTable data={tableData ?? []} columns={['id', 'name', 'date']}/>,
            },
        ]
    };
    return (
        <Backend>
            <Header {...headerProps}/>
        </Backend>
    );
}
