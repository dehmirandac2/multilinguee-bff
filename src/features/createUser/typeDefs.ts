import { gql } from "apollo-server";

const type = gql`
  input UserInput {
    name: String
    surname: String
    email: String
    password: String
    type: String
  }

  type User {
    id: ID
    name: String
    surname: String
    email: String
    password: String
    type: String
  }

  type Mutation {
    createUser(userInput: UserInput): User
  }
`;

export default type;
