import { UserProjectUpdateManyWithoutRolesInput } from "./UserProjectUpdateManyWithoutRolesInput";
import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";
import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  userProjects?: UserProjectUpdateManyWithoutRolesInput;
  name?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
  users?: UserUpdateManyWithoutRolesInput;
};
