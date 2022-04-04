import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const CreateUserModule = createModule({
  id: "create-user-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
