import * as graphql from "@nestjs/graphql";
import { CheckPermissionInput } from "../authorization/CheckPermissionInput";
import { AuthorizationService } from "./authorization.service";

export class AuthorizationResolver {
  constructor(protected readonly service: AuthorizationService) {}

  @graphql.Mutation(() => Boolean)
  async CheckUserPermission(
    @graphql.Args()
    args: CheckPermissionInput
  ): Promise<boolean> {
    return this.service.CheckUserPermission(args);
  }
}
