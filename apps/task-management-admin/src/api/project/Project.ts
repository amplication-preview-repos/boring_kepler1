import { UserProject } from "../userProject/UserProject";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  owner: string | null;
  userProjects?: Array<UserProject>;
};
