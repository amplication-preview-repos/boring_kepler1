import { UserProjectCreateNestedManyWithoutRolesInput } from "./UserProjectCreateNestedManyWithoutRolesInput";
import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  userProjects?: UserProjectCreateNestedManyWithoutRolesInput;
  name?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
};
