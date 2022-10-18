import { ApolloError } from "apollo-server";
import deleteClass from "../../database/queries/deleteClass";

const resolvers = {
  Mutation: {
    deleteClass: async (_parent: any, { classId }: any) => {
      try {
        await deleteClass(classId);
        return true
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
