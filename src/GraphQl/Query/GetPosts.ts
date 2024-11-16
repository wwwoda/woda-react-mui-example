import {gql} from "@apollo/client";

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
