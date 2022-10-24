import { gql } from "apollo-server";

const type = gql`
  input UserEditInput {
    id: ID!
    name: String
    surname: String
    email: String
  }

  type Mutation {
    editUser(userInput: UserEditInput!): Boolean
  }
`;

export default type;
