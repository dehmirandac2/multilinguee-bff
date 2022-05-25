import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const CreateTutorModule = createModule({
  id: "create-tutor-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
