import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserProjectService } from "./userProject.service";
import { UserProjectControllerBase } from "./base/userProject.controller.base";

@swagger.ApiTags("userProjects")
@common.Controller("userProjects")
export class UserProjectController extends UserProjectControllerBase {
  constructor(
    protected readonly service: UserProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
