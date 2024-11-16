import {
    createBrowserRouter,
    Navigate,
    Outlet,
    redirect,
    RouterProvider,
} from "react-router-dom";
import ForgotPassword from "./Auth/ForgotPassword";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Posts from "./Posts/Posts";
import CreatePost from "./Posts/CreatePost";
import Users from "./Users/Users";
import {client} from "./GraphQl/client.ts";
import {CREATE_POST} from "./GraphQl/Mutation/CreatePost.ts";
import {GET_POSTS} from "./GraphQl/Query/GetPosts.ts";
import {useUserContext} from "./Auth/UserProvider.tsx";
import {Layout} from "./Backend/Layout.tsx";

function UserOutlet() {
    const {authToken} = useUserContext();

    if (!authToken) {
        return <Navigate to={'/login'} />;
    }

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

const router = createBrowserRouter([
    // Backend Dashboard, Posts, and Users routes
    {
        path: "/",
        element: <UserOutlet />,
        children: [
            {
                path: "/posts",
                element: <Posts />,
            },
            {
                path: "/posts/create",
                element: <CreatePost />,
                action: async ({ request }) => {
                    switch (request.method) {
                        case "POST": {
                            const formData = await request.formData();
                            const title = formData.get('title');
                            await client.mutate({
                                mutation: CREATE_POST,
                                variables: {
                                    clientMutationId: new Date().getTime().toString(10),
                                    title
                                }
                            });
                            await client.refetchQueries({
                                include: [GET_POSTS],
                            });
                            return redirect('/posts');
                        }
                        default: {
                            throw new Response("", { status: 405 });
                        }
                    }
                }
            },
            {
                path: "/users",
                element: <Users />,
            },
        ]
    },
    // Login, Signup, and ForgotPassword routes
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/password",
        element: <ForgotPassword />,
    },
]);

export default function AppRouter() {
    return (
        <RouterProvider router={router} />
    );
}
