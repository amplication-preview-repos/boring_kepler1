import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PermissionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  canCreateTasks?: BooleanNullableFilter;
};
