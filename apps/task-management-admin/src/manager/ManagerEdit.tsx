import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const ManagerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="can_create_tasks" source="canCreateTasks" />
      </SimpleForm>
    </Edit>
  );
};
