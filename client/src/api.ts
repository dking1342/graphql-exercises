import { gql, GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

// queries
export const QUERY_ALBUMS = gql`
  {
    getAlbums {
      id
      userId
      title
    }
  }
`;

export const QUERY_ALBUM = gql`
  query getAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      userId
      title
    }
  }
`;
