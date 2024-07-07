import { StringFilter } from "../../util/StringFilter";
import { UserProjectListRelationFilter } from "../userProject/UserProjectListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  userProjects?: UserProjectListRelationFilter;
  name?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
};
