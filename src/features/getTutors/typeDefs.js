import { gql } from "apollo-server";

const type = gql`
  type ReviewInput {
    stars: Int
    total: Int
  }

  type Tutors {
    id: ID
    name: String
    about: String
    languages: [String]
    reviews: ReviewInput!
  }

  type Query {
    getTutors: [Tutors]
  }
`;

export default type;
