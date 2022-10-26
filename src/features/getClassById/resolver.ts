import getClassByIdQuery from "../../database/queries/getClassById";

const resolvers = {
  Query: {
    getClassById: async (_parent: any, { id }: any) => {
      const classData = await getClassByIdQuery(id);
      return classData;
    },
  },
};

export default resolvers;
