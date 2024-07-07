import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserProjectWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
  role?: RoleWhereUniqueInput;
};
