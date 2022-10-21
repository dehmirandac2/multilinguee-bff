import editUserMutation from "../../database/queries/editUser";

const resolvers = {
  Mutation: {
    editUser: async (_parent: any, { userInput }: any) => {
      await editUserMutation(userInput);
      return true;
    },
  },
};

export default resolvers;
