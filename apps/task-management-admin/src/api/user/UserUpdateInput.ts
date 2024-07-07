import { InputJsonValue } from "../../types";
import { UserProjectUpdateManyWithoutUsersInput } from "./UserProjectUpdateManyWithoutUsersInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";
import { UserTaskUpdateManyWithoutUsersInput } from "./UserTaskUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userProjects?: UserProjectUpdateManyWithoutUsersInput;
  tasks?: TaskUpdateManyWithoutUsersInput;
  userTasks?: UserTaskUpdateManyWithoutUsersInput;
  role?: RoleWhereUniqueInput | null;
};
