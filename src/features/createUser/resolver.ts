const user = {
  id: 1,
  name: "Joao",
  lastname: "Silva",
  email: "joao.silva@gmail.com",
  password: "blabla",
  type: "tutor",
};

const resolvers = {
  Mutation: {
    createUser: () => user,
  },
};

export default resolvers;
