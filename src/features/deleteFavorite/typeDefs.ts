import { gql } from "apollo-server";

const type = gql`
  input FavoriteInput {
    tutorId: String
    studentId: String
  }

  type Mutation {
    deleteFavorite(favoriteInput: FavoriteInput!): Boolean
  }
`;

export default type;
