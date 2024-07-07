/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserProjectCreateNestedManyWithoutRolesInput } from "./UserProjectCreateNestedManyWithoutRolesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";
import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

@InputType()
class RoleCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserProjectCreateNestedManyWithoutRolesInput,
  })
  @ValidateNested()
  @Type(() => UserProjectCreateNestedManyWithoutRolesInput)
  @IsOptional()
  @Field(() => UserProjectCreateNestedManyWithoutRolesInput, {
    nullable: true,
  })
  userProjects?: UserProjectCreateNestedManyWithoutRolesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PermissionCreateNestedManyWithoutRolesInput,
  })
  @ValidateNested()
  @Type(() => PermissionCreateNestedManyWithoutRolesInput)
  @IsOptional()
  @Field(() => PermissionCreateNestedManyWithoutRolesInput, {
    nullable: true,
  })
  permissions?: PermissionCreateNestedManyWithoutRolesInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutRolesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutRolesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutRolesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutRolesInput;
}

export { RoleCreateInput as RoleCreateInput };
