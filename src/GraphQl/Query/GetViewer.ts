import {gql, useQuery} from "@apollo/client";
import {GetViewer, GetViewerVariables} from "./__generated__/GetViewer";

export const GET_VIEWER = gql`
    query GetViewer($avatarSize: Int) {
        viewer {
            avatar(size: $avatarSize) {
                url
            }
            capabilities
            databaseId
            email
            firstName
            id
            lastName
            locale
            name
            nicename
            nickname
            registeredDate
            username
        }
    }
`;

export const useGetViewer = () => useQuery<GetViewer, GetViewerVariables>(GET_VIEWER);
