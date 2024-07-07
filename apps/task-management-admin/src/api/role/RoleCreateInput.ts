import { UserProjectCreateNestedManyWithoutRolesInput } from "./UserProjectCreateNestedManyWithoutRolesInput";
import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";
import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  userProjects?: UserProjectCreateNestedManyWithoutRolesInput;
  name?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
  users?: UserCreateNestedManyWithoutRolesInput;
};
