import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const DeleteFavoriteModule = createModule({
  id: "delete-favorite-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
