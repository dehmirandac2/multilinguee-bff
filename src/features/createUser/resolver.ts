import { ApolloError } from "apollo-server";
import createUser from "../../database/queries/createUser";

const resolvers = {
  Mutation: {
    createUser: async (_parent: any, { userInput }: any) => {
      try {
        const user = await createUser(userInput);

        return { id: 0, type: userInput.type };
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
