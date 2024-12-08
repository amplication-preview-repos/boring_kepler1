import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserTaskService } from "./userTask.service";
import { UserTaskControllerBase } from "./base/userTask.controller.base";

@swagger.ApiTags("userTasks")
@common.Controller("userTasks")
export class UserTaskController extends UserTaskControllerBase {
  constructor(
    protected readonly service: UserTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
