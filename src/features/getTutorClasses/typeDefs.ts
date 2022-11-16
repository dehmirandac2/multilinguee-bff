import { gql } from "apollo-server";

const type = gql`
  type TutorClass {
    id: ID
    date: String
    init: String
    end: String
    topic: String
    name: String
    surname: String
  }

  type Query {
    getTutorClasses(tutorId: ID!): [TutorClass]
  }
`;

export default type;
