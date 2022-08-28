import getUser from "../../database/queries/getUser";

const resolvers = {
  Query: {
    getUser: async () => {
      const user = await getUser();
      return user;
    },
  },
};

export default resolvers;
