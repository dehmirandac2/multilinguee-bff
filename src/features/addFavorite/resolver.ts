import { ApolloError } from "apollo-server";
import { RowDataPacket } from "mysql2";
import addFavorite from "../../database/queries/addFavorite";

const resolvers = {
  Mutation: {
    addFavorite: async (_parent: any, { favoriteInput }: any) => {
      try {
        const [id] = await addFavorite(favoriteInput);
        const favoriteId = (id as RowDataPacket[])[0]['LAST_INSERT_ID()']

        return { id: favoriteId };
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
