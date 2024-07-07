import { InputJsonValue } from "../../types";
import { UserProjectCreateNestedManyWithoutUsersInput } from "./UserProjectCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";
import { UserTaskCreateNestedManyWithoutUsersInput } from "./UserTaskCreateNestedManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userProjects?: UserProjectCreateNestedManyWithoutUsersInput;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  userTasks?: UserTaskCreateNestedManyWithoutUsersInput;
  role?: RoleWhereUniqueInput | null;
};
