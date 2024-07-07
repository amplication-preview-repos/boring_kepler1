import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dueDate?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
