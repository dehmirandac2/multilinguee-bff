import { createModule } from "graphql-modules";
import typeDef from "./typeDefs";
import resolver from "./resolver";

export const GetFavoritesModule = createModule({
  id: "get-favorites-module",
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers: [resolver],
});
