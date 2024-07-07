import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";
import { UserProjectUpdateManyWithoutRolesInput } from "./UserProjectUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
  userProjects?: UserProjectUpdateManyWithoutRolesInput;
};
