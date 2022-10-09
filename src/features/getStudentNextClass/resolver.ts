import getStudentNextClassQuery from "../../database/queries/getStudentNextClass";

const resolvers = {
  Query: {
    getStudentNextClass: async (_parent: any, { studentId }: any) => {
      const studentNextClass = await getStudentNextClassQuery(studentId);
      return studentNextClass;
    },
  },
};

export default resolvers;
