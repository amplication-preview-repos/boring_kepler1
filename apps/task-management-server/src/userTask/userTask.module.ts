import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserTaskModuleBase } from "./base/userTask.module.base";
import { UserTaskService } from "./userTask.service";
import { UserTaskController } from "./userTask.controller";
import { UserTaskResolver } from "./userTask.resolver";

@Module({
  imports: [UserTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserTaskController],
  providers: [UserTaskService, UserTaskResolver],
  exports: [UserTaskService],
})
export class UserTaskModule {}
