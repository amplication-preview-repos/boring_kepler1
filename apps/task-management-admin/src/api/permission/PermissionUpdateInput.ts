import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionUpdateInput = {
  name?: string | null;
  description?: string | null;
  role?: RoleWhereUniqueInput | null;
};
