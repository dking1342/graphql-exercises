import { gql } from "graphql-request";

export const typeDefs = gql`
type Query {
  getAlbums: [Album]
  getAlbum(id:ID!): Album
}
type Album {
  id: ID!
  userId: Int
  title: String
}
type ErrorMsg {
  message: String
}
`;