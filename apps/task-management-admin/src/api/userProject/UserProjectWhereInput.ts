import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProjectWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  role?: RoleWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
