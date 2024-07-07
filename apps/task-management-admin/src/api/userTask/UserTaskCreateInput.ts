import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserTaskCreateInput = {
  user?: UserWhereUniqueInput | null;
  task?: TaskWhereUniqueInput | null;
};
