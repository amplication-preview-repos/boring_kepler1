import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionCreateInput = {
  name?: string | null;
  description?: string | null;
  role?: RoleWhereUniqueInput | null;
};
