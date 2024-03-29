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

  input GetTutorInput {
    tutorId: String
    studentId: String
  }

  type Query {
    getTutor(tutorInput: GetTutorInput!): Tutors
  }
`;

export default type;
