import { StringFilter } from "../../util/StringFilter";
import { UserProjectListRelationFilter } from "../userProject/UserProjectListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  userProjects?: UserProjectListRelationFilter;
  name?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
  users?: UserListRelationFilter;
};
