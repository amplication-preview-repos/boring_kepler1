import { UserTask as TUserTask } from "../api/userTask/UserTask";

export const USERTASK_TITLE_FIELD = "id";

export const UserTaskTitle = (record: TUserTask): string => {
  return record.id?.toString() || String(record.id);
};
