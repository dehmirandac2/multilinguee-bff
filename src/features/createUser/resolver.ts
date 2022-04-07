import createTutor from "../../database/queries/createTutor";

const user = {
  id: 1,
  name: "Joao",
  surname: "Silva",
  email: "joao.silva@gmail.com",
  password: "blabla",
  type: "tutor",
};

const resolvers = {
  Mutation: {
    createUser: async (_parent: any, { userInput }: any) => {
      if (userInput.type === "tutor") {
        await createTutor(userInput);
      }

      return user;
    },
  },
};

export default resolvers;
