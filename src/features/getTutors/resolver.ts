import listTutors from "../../database/queries/listTutors";

const resolvers = {
  Query: {
    getTutors: async () => {
      const tutors = await listTutors();
      return tutors;
    },
  },
};

export default resolvers;
