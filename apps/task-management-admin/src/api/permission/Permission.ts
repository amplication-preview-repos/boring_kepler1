import { Role } from "../role/Role";

export type Permission = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  role?: Role | null;
  canCreateTasks: boolean | null;
};
