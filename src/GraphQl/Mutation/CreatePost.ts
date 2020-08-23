import {gql, useMutation} from "@apollo/client";
import {CreatePost, CreatePostVariables} from "./__generated__/CreatePost";

export const CREATE_POST = gql`
    mutation CreatePost($clientMutationId: String!, $title: String!) {
        createPost(input: {clientMutationId: $clientMutationId, title: $title}) {
            post {
                id
                title
                date
            }
        }
    }
`;

export const useCreatePost = () => useMutation<CreatePost, CreatePostVariables>(CREATE_POST);
