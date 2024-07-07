/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserProjectWhereInput } from "./UserProjectWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserProjectOrderByInput } from "./UserProjectOrderByInput";

@ArgsType()
class UserProjectFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserProjectWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserProjectWhereInput, { nullable: true })
  @Type(() => UserProjectWhereInput)
  where?: UserProjectWhereInput;

  @ApiProperty({
    required: false,
    type: [UserProjectOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserProjectOrderByInput], { nullable: true })
  @Type(() => UserProjectOrderByInput)
  orderBy?: Array<UserProjectOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserProjectFindManyArgs as UserProjectFindManyArgs };