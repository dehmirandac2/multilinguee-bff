import { gql } from "apollo-server";

const type = gql`
  type LoginResponse {
    token: String
    type: String
  }

  type Mutation {
    login(email: String, password: String): LoginResponse!
  }
`;

export default type;
