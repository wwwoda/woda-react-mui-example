import {gql, useQuery} from "@apollo/client";
import {GetPosts, GetPostsVariables} from "./__generated__/GetPosts";

export const GET_POSTS = gql`
    query GetPosts($size: Int, $offset: Int) {
        posts(where: { offsetPagination: { size: $size, offset: $offset } }) {
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
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
                offsetPagination {
                    hasMore
                    hasPrevious
                    total
                }
            }
        }
    }
`;

interface PaginationOptions {
    size?: number,
    offset?: number,
}

export const useGetPosts = (pagination: PaginationOptions) => useQuery<GetPosts, GetPostsVariables>(
    GET_POSTS,
    {
        variables: {
            size: pagination.size,
            offset: pagination.offset,
        }
    }
);
