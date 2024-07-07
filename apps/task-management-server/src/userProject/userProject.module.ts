import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserProjectModuleBase } from "./base/userProject.module.base";
import { UserProjectService } from "./userProject.service";
import { UserProjectController } from "./userProject.controller";
import { UserProjectResolver } from "./userProject.resolver";

@Module({
  imports: [UserProjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserProjectController],
  providers: [UserProjectService, UserProjectResolver],
  exports: [UserProjectService],
})
export class UserProjectModule {}
