import { SortOrder } from "../../util/SortOrder";

export type UserProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
