import { gql } from "apollo-server";

const type = gql`
  type Favorites {
    id: ID
    name: String
    surname: String
    about: String
    languages: String
    stars: Int!
    totalReviews: Int
  }

  type Query {
    getFavorites(studentId: String): [Favorites!]
  }
`;

export default type;
