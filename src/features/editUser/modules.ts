import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const EditUserModule = createModule({
  id: "edit-user-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
