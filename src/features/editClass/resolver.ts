import editClassMutation from "../../database/queries/editClass";

const resolvers = {
  Mutation: {
    editClass: async (_parent: any, { classEditInput }: any) => {
      await editClassMutation(classEditInput);
      return true;
    },
  },
};

export default resolvers;
