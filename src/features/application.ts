import { createApplication } from "graphql-modules";
import { LoginModule } from "./login/modules";
import { CreateTutorModule } from "./createTutor/modules";
import { CreateUserModule } from "./createUser/modules";
import { GetTutorsModule } from "./getTutors/modules";

export const application = createApplication({
  modules: [LoginModule, GetTutorsModule, CreateUserModule, CreateTutorModule],
});
