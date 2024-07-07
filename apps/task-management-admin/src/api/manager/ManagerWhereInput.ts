import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ManagerWhereInput = {
  id?: StringFilter;
  canCreateTasks?: BooleanNullableFilter;
};
