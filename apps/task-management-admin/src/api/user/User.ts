import { JsonValue } from "type-fest";
import { UserProject } from "../userProject/UserProject";
import { Task } from "../task/Task";
import { UserTask } from "../userTask/UserTask";
import { Role } from "../role/Role";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userProjects?: Array<UserProject>;
  tasks?: Array<Task>;
  userTasks?: Array<UserTask>;
  role?: Role | null;
};
