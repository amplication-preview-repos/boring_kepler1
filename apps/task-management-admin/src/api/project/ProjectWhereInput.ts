import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProjectListRelationFilter } from "../userProject/UserProjectListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  userProjects?: UserProjectListRelationFilter;
};
