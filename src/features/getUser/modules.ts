import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetUserModule = createModule({
  id: "get-user-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
