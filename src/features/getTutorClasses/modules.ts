import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetTutorClassesModule = createModule({
  id: "get-tutor-classes-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
