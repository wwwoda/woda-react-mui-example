import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserOptionsMenu from "./UserOptionsMenu.tsx";
import CircularProgress from "@mui/material/CircularProgress";
import {useContext} from "react";
import {userContext} from "../Auth/UserProvider.tsx";

export default function UserCard() {
    const {user} = useContext(userContext);

    return (
        <Stack
            direction="row"
            sx={{
                p: 2,
                gap: 1,
                alignItems: 'center',
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            {user === undefined && <CircularProgress size={24} />}
            {user !== undefined && (
                <>
                    <Avatar
                        sizes="small"
                        alt="Wolfgang"
                        src={user.avatar?.url ?? undefined}
                        sx={{ width: 36, height: 36 }}
                    />
                    <Box sx={{ mr: 'auto' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                            {user.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {user.email}
                        </Typography>
                    </Box>
                </>
            )}
            <Box sx={{flexGrow: 1}} />
            <UserOptionsMenu />
        </Stack>
    );
}
