import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserTaskListRelationFilter } from "../userTask/UserTaskListRelationFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userTasks?: UserTaskListRelationFilter;
};
