import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthorizationService } from "./authorization.service";
import { CheckPermissionInput } from "../authorization/CheckPermissionInput";

@swagger.ApiTags("authorizations")
@common.Controller("authorizations")
export class AuthorizationController {
  constructor(protected readonly service: AuthorizationService) {}

  @common.Post("/check-permission")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckUserPermission(
    @common.Body()
    body: CheckPermissionInput
  ): Promise<boolean> {
        return this.service.CheckUserPermission(body);
      }
}
