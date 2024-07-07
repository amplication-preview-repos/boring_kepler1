import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { UserProjectListRelationFilter } from "../userProject/UserProjectListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
  userProjects?: UserProjectListRelationFilter;
};
