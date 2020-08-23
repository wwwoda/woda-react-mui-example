import {gql, useMutation} from "@apollo/client";
import {UpdatePost, UpdatePostVariables} from "./__generated__/UpdatePost";

export const UPDATE_POST = gql`
    mutation UpdatePost($clientMutationId: String!, $id: ID!, $title: String!) {
        updatePost(input: {clientMutationId: $clientMutationId, id: $id, title: $title}) {
            post {
                id
                title
                date
            }
        }
    }
`;

export const useUpdatePost = () => useMutation<UpdatePost, UpdatePostVariables>(UPDATE_POST);
