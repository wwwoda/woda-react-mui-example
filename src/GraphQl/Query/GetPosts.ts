import {gql, useQuery} from "@apollo/client";
import {GetPosts, GetPostsVariables} from "./__generated__/GetPosts";

export const GET_POSTS = gql`
    query GetPosts($size: Int, $offset: Int, $title: String) {
        posts(where: { title: $title, offsetPagination: { size: $size, offset: $offset } }) {
            nodes {
                id
                title
                date
            }
            pageInfo {
                offsetPagination {
                    hasMore
                    hasPrevious
                    total
                }
            }
        }
    }
`;

export const useGetPosts = (
    pagination: {
        size?: number,
        offset?: number,
    },
    where: {
        title?: string
    }) => useQuery<GetPosts, GetPostsVariables>(
    GET_POSTS,
    {
        variables: {
            size: pagination.size,
            offset: pagination.offset,
            title: where.title
        }
    }
);
