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
    getTutor(id: ID!): Tutors
  }
`;

export default type;
