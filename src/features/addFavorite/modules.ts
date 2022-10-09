import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const AddFavoriteModule = createModule({
  id: "add-favorite-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
