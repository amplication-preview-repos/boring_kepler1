import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { RoleTitle } from "../role/RoleTitle";

export const PermissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="role.id" reference="Role" label="role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <BooleanInput label="can_create_tasks" source="canCreateTasks" />
      </SimpleForm>
    </Create>
  );
};
