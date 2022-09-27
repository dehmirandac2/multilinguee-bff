import getTutorQuery from "../../database/queries/getTutor";

interface Tutor {
  name: string;
  surname: string
}

const resolvers = {
  Query: {
    getTutor: async (_parent: any, { id }: any) => {
      const result = await getTutorQuery(id);

      const tutor: Tutor[] = Object.values(JSON.parse(JSON.stringify(result)));

      return tutor[0];
    },
  },
};

export default resolvers;
