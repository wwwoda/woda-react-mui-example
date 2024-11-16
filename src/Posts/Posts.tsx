import Header, {HeaderProps} from "../Component/Header/Header";
import {Link as RouterLink} from 'react-router-dom';
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import PostsTable from "./PostsTable";

export default function Posts() {
    const headerProps: HeaderProps = {
        actions: [
            <Button
                variant="contained"
                color="primary"
                sx={{margin: 1}}
                startIcon={<Add/>}
                component={RouterLink}
                to="/posts/create"
                key={'add'}
            >Add new</Button>,
        ],
        title: 'Posts',
        tabs: [
            {
                label: 'Published',
                content: <PostsTable/>,
            },
        ]
    };

    return (
        <Header {...headerProps}/>
    );
}
