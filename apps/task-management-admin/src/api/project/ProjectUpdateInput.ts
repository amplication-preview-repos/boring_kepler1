import { UserProjectUpdateManyWithoutProjectsInput } from "./UserProjectUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  userProjects?: UserProjectUpdateManyWithoutProjectsInput;
};
