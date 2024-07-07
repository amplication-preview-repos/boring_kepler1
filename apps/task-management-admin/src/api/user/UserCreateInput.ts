import { InputJsonValue } from "../../types";
import { UserProjectCreateNestedManyWithoutUsersInput } from "./UserProjectCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  userProjects?: UserProjectCreateNestedManyWithoutUsersInput;
};
