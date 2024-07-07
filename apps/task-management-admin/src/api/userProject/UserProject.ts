import { User } from "../user/User";
import { Project } from "../project/Project";
import { Role } from "../role/Role";

export type UserProject = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  project?: Project | null;
  role?: Role | null;
};
