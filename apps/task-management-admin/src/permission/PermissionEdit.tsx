import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { RoleTitle } from "../role/RoleTitle";

export const PermissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="role.id" reference="Role" label="role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <BooleanInput label="can_create_tasks" source="canCreateTasks" />
      </SimpleForm>
    </Edit>
  );
};
