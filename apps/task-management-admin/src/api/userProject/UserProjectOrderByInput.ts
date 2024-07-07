import { SortOrder } from "../../util/SortOrder";

export type UserProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  projectId?: SortOrder;
  roleId?: SortOrder;
};
