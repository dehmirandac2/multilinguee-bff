import getFavoritesQuery from "../../database/queries/getFavorites";

const resolvers = {
  Query: {
    getFavorites: async (_parent: any, { studentId }: any) => {
      const favorites = await getFavoritesQuery(studentId);
      return favorites;
    },
  },
};

export default resolvers;
