import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetTutorsModule = createModule({
  id: "get-tutors-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
