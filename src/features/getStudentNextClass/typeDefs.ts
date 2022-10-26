import { gql } from "apollo-server";

const type = gql`
  type StudentClass {
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
    getStudentNextClass(studentId: ID!): [StudentClass]
  }
`;

export default type;
