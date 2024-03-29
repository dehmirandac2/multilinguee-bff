import { gql } from "apollo-server";

const type = gql`
  type User {
    id: ID
    name: String
    surname: String
    email: String
  }

  type Query {
    getUser(studentId: String): [User]
  }
`;

export default type;
