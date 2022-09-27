import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetTutorModule = createModule({
  id: "get-tutor-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
