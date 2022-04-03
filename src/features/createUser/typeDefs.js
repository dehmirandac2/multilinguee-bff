import { gql } from "apollo-server";

const type = gql`
  input UserInput {
    id: ID
    name: String
    lastname: String
    email: String
    password: String
    type: String
  }

  type User {
    id: ID
    name: String
    lastname: String
    email: String
    password: String
    type: String
  }

  type Mutation {
    createUser(userInput: UserInput): User
  }
`;

export default type;
