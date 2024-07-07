import { SortOrder } from "../../util/SortOrder";

export type UserTaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  taskId?: SortOrder;
};
