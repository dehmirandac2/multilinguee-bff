import { gql } from "apollo-server";

const type = gql`
  input UserInput {
    id: ID!
    name: String
    surname: String
    email: String
  }

  type Mutation {
    editUser(userInput: UserInput!): Boolean
  }
`;

export default type;
