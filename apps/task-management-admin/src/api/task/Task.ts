import { User } from "../user/User";
import { UserTask } from "../userTask/UserTask";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date | null;
  status?: "Option1" | null;
  title: string | null;
  description: string | null;
  user?: User | null;
  userTasks?: Array<UserTask>;
};
