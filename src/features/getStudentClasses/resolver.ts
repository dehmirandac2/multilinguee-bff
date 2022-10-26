import getStudentClassesQuery from "../../database/queries/getStudentClasses";

const resolvers = {
  Query: {
    getStudentClasses: async (_parent: any, { studentId }: any) => {
      const studentClasses = await getStudentClassesQuery(studentId);
      return studentClasses;
    },
  },
};

export default resolvers;
