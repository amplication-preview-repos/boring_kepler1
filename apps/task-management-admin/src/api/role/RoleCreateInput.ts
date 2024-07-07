import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";
import { UserProjectCreateNestedManyWithoutRolesInput } from "./UserProjectCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
  userProjects?: UserProjectCreateNestedManyWithoutRolesInput;
};
