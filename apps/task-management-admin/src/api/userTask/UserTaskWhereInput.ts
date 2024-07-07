import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserTaskWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  task?: TaskWhereUniqueInput;
};
