import {gql} from "@apollo/client";

export const CREATE_POST = gql`
    mutation CreatePost($clientMutationId: String!, $title: String!) {
        createPost(input: {clientMutationId: $clientMutationId, title: $title, status: PUBLISH}) {
            post {
                id
                title
                date
            }
        }
    }
`;
