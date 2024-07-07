import { UserProjectCreateNestedManyWithoutProjectsInput } from "./UserProjectCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  userProjects?: UserProjectCreateNestedManyWithoutProjectsInput;
};
