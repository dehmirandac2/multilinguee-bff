import { gql } from "apollo-server";

const type = gql`
  input UserInput {
    name: String
    surname: String
    email: String
    password: String
    type: String
  }

  type UserResponse {
    id: ID!
    type: String
  }

  type Mutation {
    createUser(userInput: UserInput!): UserResponse!
  }
`;

export default type;
