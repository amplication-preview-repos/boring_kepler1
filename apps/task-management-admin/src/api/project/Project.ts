import { UserProject } from "../userProject/UserProject";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner: string | null;
  updatedAt: Date;
  userProjects?: Array<UserProject>;
};
