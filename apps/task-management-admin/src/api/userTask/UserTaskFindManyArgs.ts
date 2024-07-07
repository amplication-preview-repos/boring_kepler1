import { UserTaskWhereInput } from "./UserTaskWhereInput";
import { UserTaskOrderByInput } from "./UserTaskOrderByInput";

export type UserTaskFindManyArgs = {
  where?: UserTaskWhereInput;
  orderBy?: Array<UserTaskOrderByInput>;
  skip?: number;
  take?: number;
};
