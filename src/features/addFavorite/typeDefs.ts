import { gql } from "apollo-server";

const type = gql`
  input FavoriteInput {
    tutorId: String
    studentId: String
  }

  type FavoriteResponse {
    id: ID!
  }

  type Mutation {
    addFavorite(favoriteInput: FavoriteInput!): FavoriteResponse!
  }
`;

export default type;
