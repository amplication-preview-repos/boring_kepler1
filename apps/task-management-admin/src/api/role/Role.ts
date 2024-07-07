import { Permission } from "../permission/Permission";
import { UserProject } from "../userProject/UserProject";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  permissions?: Array<Permission>;
  updatedAt: Date;
  userProjects?: Array<UserProject>;
};
