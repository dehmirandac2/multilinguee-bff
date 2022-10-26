import { gql } from "apollo-server";

const type = gql`
  input ClassEditInput {
    id: ID!
    topic: String
    date: String
    init: String
    end: String
  }

  type Mutation {
    editClass(classEditInput: ClassEditInput!): Boolean
  }
`;

export default type;
