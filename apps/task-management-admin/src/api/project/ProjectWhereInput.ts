import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProjectListRelationFilter } from "../userProject/UserProjectListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  userProjects?: UserProjectListRelationFilter;
};
