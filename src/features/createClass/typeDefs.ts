import { gql } from "apollo-server";

const type = gql`
  input ClassInput {
    tutorId: ID!
    studentId: ID!
    topic: String
    date: String
    init: String
    end: String
  }

  type ClassResponse {
    id: ID!
  }

  type Mutation {
    createClass(classInput: ClassInput!): ClassResponse!
  }
`;

export default type;
