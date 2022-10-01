import { ApolloError } from "apollo-server";
import { RowDataPacket } from "mysql2";
import createClass from "../../database/queries/createClass";

const resolvers = {
  Mutation: {
    createClass: async (_parent: any, { classInput }: any) => {
      try {
        const [id] = await createClass(classInput);
        const userId = (id as RowDataPacket[])[0]['LAST_INSERT_ID()']

        return { id: userId };
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
