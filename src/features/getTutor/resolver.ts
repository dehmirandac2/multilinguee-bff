import getTutorQuery from "../../database/queries/getTutor";

interface Tutor {
  name: string;
  surname: string
}

const resolvers = {
  Query: {
    getTutor: async (_parent: any, { tutorInput }: any) => {
      const result = await getTutorQuery(tutorInput);

      const tutor: Tutor[] = Object.values(JSON.parse(JSON.stringify(result)));

      return tutor[0];
    },
  },
};

export default resolvers;
