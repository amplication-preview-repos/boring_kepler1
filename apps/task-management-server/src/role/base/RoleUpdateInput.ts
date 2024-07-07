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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";
import { Type } from "class-transformer";
import { UserProjectUpdateManyWithoutRolesInput } from "./UserProjectUpdateManyWithoutRolesInput";

@InputType()
class RoleUpdateInput {
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
    type: () => PermissionUpdateManyWithoutRolesInput,
  })
  @ValidateNested()
  @Type(() => PermissionUpdateManyWithoutRolesInput)
  @IsOptional()
  @Field(() => PermissionUpdateManyWithoutRolesInput, {
    nullable: true,
  })
  permissions?: PermissionUpdateManyWithoutRolesInput;

  @ApiProperty({
    required: false,
    type: () => UserProjectUpdateManyWithoutRolesInput,
  })
  @ValidateNested()
  @Type(() => UserProjectUpdateManyWithoutRolesInput)
  @IsOptional()
  @Field(() => UserProjectUpdateManyWithoutRolesInput, {
    nullable: true,
  })
  userProjects?: UserProjectUpdateManyWithoutRolesInput;
}

export { RoleUpdateInput as RoleUpdateInput };