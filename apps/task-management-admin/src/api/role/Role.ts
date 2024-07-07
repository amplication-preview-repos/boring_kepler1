import { UserProject } from "../userProject/UserProject";
import { Permission } from "../permission/Permission";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userProjects?: Array<UserProject>;
  name: string | null;
  permissions?: Array<Permission>;
};
