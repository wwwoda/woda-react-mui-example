import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {GetPosts} from "./__generated__/GetPosts";

export const GET_POSTS = gql`
    query GetPosts {
        posts {
            nodes {
                id
                title
                date
                featuredImage {
                    node {
                        id

                    }
                }
            }
        }
    }
`;

export const useGetPosts = () => useQuery<GetPosts>(GET_POSTS);
