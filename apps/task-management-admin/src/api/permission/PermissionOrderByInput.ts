import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  roleId?: SortOrder;
  canCreateTasks?: SortOrder;
};
