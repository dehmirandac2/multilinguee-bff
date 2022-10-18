import { gql } from "apollo-server";

const type = gql`
  type Mutation {
    deleteClass(classId: String): Boolean
  }
`;

export default type;
