import { createApplication } from "graphql-modules";
import { LoginModule } from "./login/modules";

import { GetClassByIdModule } from "./getClassById/modules";
import { CreateTutorModule } from "./createTutor/modules";
import { CreateUserModule } from "./createUser/modules";
import { CreateClass } from "./createClass/modules";
import { DeleteClassModule } from "./deleteClass/modules";
import { EditClassModule } from "./editClass/modules";

import { GetTutorsModule } from "./getTutors/modules";
import { GetTutorModule } from "./getTutor/modules";
import { GetTutorClassesModule } from "./getTutorClasses/modules";

import { GetStudentClassesModule } from "./getStudentClasses/modules";

import { GetStudentNextClassModule } from "./getStudentNextClass/modules";

import { AddFavoriteModule } from "./addFavorite/modules";
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
    GetStudentClassesModule,
    GetStudentNextClassModule,
    CreateUserModule,
    CreateTutorModule,
    GetClassByIdModule,
    CreateClass,
    DeleteClassModule,
    AddFavoriteModule,
    DeleteFavoriteModule,
    GetFavoritesModule,
    EditUserModule,
    EditClassModule
  ],
});
