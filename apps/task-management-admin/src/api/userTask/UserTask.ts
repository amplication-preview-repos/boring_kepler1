import { User } from "../user/User";
import { Task } from "../task/Task";

export type UserTask = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  task?: Task | null;
};
