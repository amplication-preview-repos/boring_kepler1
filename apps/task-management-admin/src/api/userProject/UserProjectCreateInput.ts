import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProjectCreateInput = {
  project?: ProjectWhereUniqueInput | null;
  role?: RoleWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
