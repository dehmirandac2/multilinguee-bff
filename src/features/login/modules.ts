import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const LoginModule = createModule({
  id: "login-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
