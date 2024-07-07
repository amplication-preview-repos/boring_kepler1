/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserProjectWhereUniqueInput } from "../../userProject/base/UserProjectWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserProjectUpdateManyWithoutProjectsInput {
  @Field(() => [UserProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProjectWhereUniqueInput],
  })
  connect?: Array<UserProjectWhereUniqueInput>;

  @Field(() => [UserProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProjectWhereUniqueInput],
  })
  disconnect?: Array<UserProjectWhereUniqueInput>;

  @Field(() => [UserProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProjectWhereUniqueInput],
  })
  set?: Array<UserProjectWhereUniqueInput>;
}

export { UserProjectUpdateManyWithoutProjectsInput as UserProjectUpdateManyWithoutProjectsInput };
