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
  }

  type Query {
    getTutors: [Tutors]
  }
`;

export default type;
