import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const CreateClass = createModule({
  id: "create-class-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
