import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const ManagerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="can_create_tasks" source="canCreateTasks" />
      </SimpleForm>
    </Create>
  );
};
