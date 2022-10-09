import listTutors from "../../database/queries/listTutors";

const resolvers = {
  Query: {
    getTutors: async (_parent: any, { studentId }: any) => {
      const tutors = await listTutors(studentId);
      return tutors;
    },
  },
};

export default resolvers;
