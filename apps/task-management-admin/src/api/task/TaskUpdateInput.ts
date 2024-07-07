import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserTaskUpdateManyWithoutTasksInput } from "./UserTaskUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  dueDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  userTasks?: UserTaskUpdateManyWithoutTasksInput;
};
