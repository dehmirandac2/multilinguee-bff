const tutors = [
  {
    id: "1",
    name: "Joao Silva",
    about:
      "Professor há 5 anos com ampla experiência em gramática da língua inglesa.",
    languages: ["french", "english"],
    reviews: {
      stars: 4,
      total: 201,
    },
  },
  {
    id: "2",
    name: "Claudia Souza",
    about:
      "Professora há 10 anos com ampla experiência em gramática da língua espanhola.",
    languages: ["spanish"],
    reviews: {
      stars: 3,
      total: 301,
    },
  },
];

const resolvers = {
  Query: {
    getTutors: () => tutors,
  },
};

export default resolvers;
