import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetStudentClassesModule = createModule({
  id: "get-student-classes-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
