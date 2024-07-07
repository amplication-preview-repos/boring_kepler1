import { UserProject as TUserProject } from "../api/userProject/UserProject";

export const USERPROJECT_TITLE_FIELD = "id";

export const UserProjectTitle = (record: TUserProject): string => {
  return record.id?.toString() || String(record.id);
};
