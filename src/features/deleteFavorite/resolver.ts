import { ApolloError } from "apollo-server";
import { RowDataPacket } from "mysql2";
import deleteFavorite from "../../database/queries/deleteFavorite";

const resolvers = {
  Mutation: {
    deleteFavorite: async (_parent: any, { favoriteInput }: any) => {
      try {
        await deleteFavorite(favoriteInput);
        return true
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
