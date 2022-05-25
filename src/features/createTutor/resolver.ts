import { ApolloError } from "apollo-server";
import createTutor from "../../database/queries/createTutor";

const resolvers = {
  Mutation: {
    createTutor: async (_parent: any, { tutorInput }: any) => {
      try {
        // const tutor = await createTutor(tutorInput);
        return { id: 0, type: 'teste'};
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
