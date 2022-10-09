import getTutorClasses from "../../database/queries/getTutorClasses";

const resolvers = {
  Query: {
    getTutorClasses: async (_parent: any, { tutorId }: any) => {
      const tutorClasses = await getTutorClasses(tutorId);
      return tutorClasses;
    },
  },
};

export default resolvers;
