import { createModule } from "graphql-modules";
import typeDef from "./typeDefs.js";
import resolver from "./resolver.js";
import __dirname from "../../utils/dirname.js";

export const GetTutorsModule = createModule({
  id: "get-tutors-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
