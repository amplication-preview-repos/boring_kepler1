import { UserProjectWhereInput } from "./UserProjectWhereInput";
import { UserProjectOrderByInput } from "./UserProjectOrderByInput";

export type UserProjectFindManyArgs = {
  where?: UserProjectWhereInput;
  orderBy?: Array<UserProjectOrderByInput>;
  skip?: number;
  take?: number;
};
