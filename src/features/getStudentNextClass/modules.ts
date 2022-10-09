import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetStudentNextClassModule = createModule({
  id: "get-student-next-class-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
