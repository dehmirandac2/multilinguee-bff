// book.module.graphql.ts
import { createModule } from "graphql-modules";
import typeDef from "./typeDefs.js";
import resolver from "./resolver.js";
import __dirname from "../../utils/dirname.js";

export const CreateUserModule = createModule({
  id: "create-user-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
