import {
    Container,
    TextField,
} from "@mui/material";
import Header from "../Component/Header/Header.tsx";
import {Form} from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CreatePost() {
    const handleCancel = () => {

    };

    return (
        <>
            <Header title={'Create Post'} actions={[]} tabs={[]} />
            <Container maxWidth="lg" sx={{py: 4}}>
                <Form
                    method="POST"
                    style={{
                        width: '100%',
                    }}
                    autoComplete="off"
                >
                    <Stack spacing={2}>
                        <TextField
                            name="title"
                            variant="outlined"
                            label="Title"
                            fullWidth
                            required
                        />
                        <Stack spacing={1} direction="row" justifyContent="flex-end">
                            <Button onClick={handleCancel} variant="outlined" color="secondary">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Save
                            </Button>
                        </Stack>
                    </Stack>
                </Form>
            </Container>
        </>
    );
}
