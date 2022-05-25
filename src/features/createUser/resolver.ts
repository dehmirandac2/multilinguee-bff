import { ApolloError } from "apollo-server";
import { RowDataPacket } from "mysql2";
import createUser from "../../database/queries/createUser";

const resolvers = {
  Mutation: {
    createUser: async (_parent: any, { userInput }: any) => {
      try {
        const [id] = await createUser(userInput);
        const userId = (id as RowDataPacket[])[0]['LAST_INSERT_ID()']

        return { id: userId, type: userInput.type };
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
