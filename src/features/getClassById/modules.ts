import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetClassByIdModule = createModule({
  id: "get-class-by-id-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
