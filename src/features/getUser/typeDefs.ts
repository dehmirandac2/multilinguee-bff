import { gql } from "apollo-server";

const type = gql`
  type User {
    id: ID
    name: String
    surname: String
    email: String
  }

  type Query {
    getUser: [User]
  }
`;

export default type;
