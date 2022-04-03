import { createApplication } from "graphql-modules";
import { CreateUserModule } from "./createUser/modules.js";
import { GetTutorsModule } from "./getTutors/modules.js";

export const application = createApplication({
  modules: [GetTutorsModule, CreateUserModule],
});
