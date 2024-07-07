import { UserProjectUpdateManyWithoutRolesInput } from "./UserProjectUpdateManyWithoutRolesInput";
import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  userProjects?: UserProjectUpdateManyWithoutRolesInput;
  name?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
};
