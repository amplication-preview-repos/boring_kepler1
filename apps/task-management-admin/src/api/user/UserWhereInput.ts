import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProjectListRelationFilter } from "../userProject/UserProjectListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { UserTaskListRelationFilter } from "../userTask/UserTaskListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userProjects?: UserProjectListRelationFilter;
  tasks?: TaskListRelationFilter;
  userTasks?: UserTaskListRelationFilter;
  role?: RoleWhereUniqueInput;
};
