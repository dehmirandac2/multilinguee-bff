import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const EditClassModule = createModule({
  id: "edit-class-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
