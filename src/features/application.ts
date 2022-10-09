import { createApplication } from "graphql-modules";
import { LoginModule } from "./login/modules";

import { CreateTutorModule } from "./createTutor/modules";
import { CreateUserModule } from "./createUser/modules";
import { CreateClass } from "./createClass/modules";

import { GetTutorsModule } from "./getTutors/modules";
import { GetTutorModule } from "./getTutor/modules";
import { GetTutorClassesModule } from "./GetTutorClasses/modules";

import { GetStudentNextClassModule } from "./GetStudentNextClass/modules";

import { AddFavoriteModule } from "./AddFavorite/modules";
import { DeleteFavoriteModule } from "./deleteFavorite/modules";
import { GetFavoritesModule } from "./getFavorites/modules";

export const application = createApplication({
  modules: [
    LoginModule,
    GetTutorModule,
    GetTutorsModule,
    GetTutorClassesModule,
    GetStudentNextClassModule,
    CreateUserModule,
    CreateTutorModule,
    CreateClass,
    AddFavoriteModule,
    DeleteFavoriteModule,
    GetFavoritesModule
  ],
});
