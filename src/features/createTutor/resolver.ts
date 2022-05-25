import { ApolloError } from "apollo-server";
import createTutor from "../../database/queries/createTutor";

const resolvers = {
  Mutation: {
    createTutor: async (_parent: any, { tutorInput }: any) => {
      try {
        await createTutor(tutorInput);
        return { id: tutorInput.id};
      } catch (err) {
        throw new ApolloError("mutation error");
      }
    },
  },
};

export default resolvers;
