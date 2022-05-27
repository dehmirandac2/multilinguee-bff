import { ApolloServer } from "apollo-server";

import { application } from "./features/application";

const schema = application.createSchemaForApollo();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ schema, cors: {
  origin: ["https://multilingueewebapp.herokuapp.com/", "http://localhost:4000"]
}, });

// The `listen` method launches a web server.
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
