import { InputJsonValue } from "../../types";
import { UserProjectCreateNestedManyWithoutUsersInput } from "./UserProjectCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";
import { UserTaskCreateNestedManyWithoutUsersInput } from "./UserTaskCreateNestedManyWithoutUsersInput";

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
};
