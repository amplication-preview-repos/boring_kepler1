import { JsonValue } from "type-fest";
import { UserProject } from "../userProject/UserProject";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userProjects?: Array<UserProject>;
};
