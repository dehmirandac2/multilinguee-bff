import { gql } from "apollo-server";

const type = gql`
  type ClassData {
    id: ID
    tutorId: String
    studentId: String
    date: String
    init: String
    end: String
    topic: String
    name: String
    surname: String
    about: String
  }

  type Query {
    getClassById(id: ID!): [ClassData]
  }
`;

export default type;
