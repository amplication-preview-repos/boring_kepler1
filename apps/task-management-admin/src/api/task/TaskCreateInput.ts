import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserTaskCreateNestedManyWithoutTasksInput } from "./UserTaskCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  dueDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  userTasks?: UserTaskCreateNestedManyWithoutTasksInput;
};
