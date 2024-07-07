import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserTaskUpdateInput = {
  user?: UserWhereUniqueInput | null;
  task?: TaskWhereUniqueInput | null;
};
