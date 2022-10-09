import { gql } from "apollo-server";

const type = gql`
  type Tutors {
    id: ID
    name: String
    surname: String
    about: String
    languages: String
    stars: Int!
    totalReviews: Int
    isFavorite: Boolean
  }

  type Query {
    getTutors(studentId: String): [Tutors]
  }
`;

export default type;
