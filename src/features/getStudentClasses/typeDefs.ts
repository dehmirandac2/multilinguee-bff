import { gql } from "apollo-server";

const type = gql`
  type StudentClass {
    id: ID
    date: String
    init: String
    end: String
    topic: String
    name: String
    surname: String
  }

  type Query {
    getStudentClasses(studentId: ID!): [StudentClass]
  }
`;

export default type;
