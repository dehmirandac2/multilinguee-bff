import { createApplication } from "graphql-modules";
import { LoginModule } from "./login/modules";

import { CreateTutorModule } from "./createTutor/modules";
import { CreateUserModule } from "./createUser/modules";
import { CreateClass } from "./createClass/modules";
import { DeleteClassModule } from "./deleteClass/modules";

import { GetTutorsModule } from "./getTutors/modules";
import { GetTutorModule } from "./getTutor/modules";
import { GetTutorClassesModule } from "./GetTutorClasses/modules";

import { GetStudentNextClassModule } from "./GetStudentNextClass/modules";

import { AddFavoriteModule } from "./AddFavorite/modules";
import { DeleteFavoriteModule } from "./deleteFavorite/modules";
import { GetFavoritesModule } from "./getFavorites/modules";
import { GetUserModule } from "./getUser/modules";
import { EditUserModule } from "./editUser/modules";


export const application = createApplication({
  modules: [
    LoginModule,
    GetTutorModule,
    GetUserModule,
    GetTutorsModule,
    GetTutorClassesModule,
    GetStudentNextClassModule,
    CreateUserModule,
    CreateTutorModule,
    CreateClass,
    DeleteClassModule,
    AddFavoriteModule,
    DeleteFavoriteModule,
    GetFavoritesModule,
    EditUserModule
  ],
});
