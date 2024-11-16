import {gql} from "@apollo/client";

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
