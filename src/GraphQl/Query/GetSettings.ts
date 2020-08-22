import {gql, useQuery} from "@apollo/client";
import {GetPosts} from "./__generated__/GetPosts";

export const GET_SETTINGS = gql`
    query GetSettings {
        generalSettings {
            title
        }
    }
`;

export const useGetPosts = () => useQuery<GetPosts>(GET_SETTINGS);
