import { Project } from "../project/Project";
import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserProject = {
  createdAt: Date;
  id: string;
  project?: Project | null;
  role?: Role | null;
  updatedAt: Date;
  user?: User | null;
};
