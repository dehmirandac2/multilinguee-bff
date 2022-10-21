import getUser from "../../database/queries/getUser";

const resolvers = {
  Query: {
    getUser: async (_parent: any, { studentId }: any) => {
      const user = await getUser(studentId);
      return user;
    },
  },
};

export default resolvers;
