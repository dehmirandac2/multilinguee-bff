import { ApolloError } from "apollo-server";
import { RowDataPacket } from "mysql2";
import createUser from "../../database/queries/createUser";
import { getUserByEmail } from "../../database/queries/getUser";

const resolvers = {
  Mutation: {
    createUser: async (_parent: any, { userInput }: any) => {
      try {
        const isDuplicated = await getUserByEmail(userInput.email) as RowDataPacket[]

        if(isDuplicated.length > 0) {
          throw new ApolloError("duplicated_email");
        }

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
