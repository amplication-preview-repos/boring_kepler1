import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserProjectCreateInput = {
  user?: UserWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  role?: RoleWhereUniqueInput | null;
};
