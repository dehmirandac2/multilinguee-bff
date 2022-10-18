import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const DeleteClassModule = createModule({
  id: "delete-class-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
