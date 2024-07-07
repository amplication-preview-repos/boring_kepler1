import { Module } from "@nestjs/common";
import { RoleModule } from "./role/role.module";
import { ProjectModule } from "./project/project.module";
import { UserProjectModule } from "./userProject/userProject.module";
import { PermissionModule } from "./permission/permission.module";
import { UserModule } from "./user/user.module";
import { TaskModule } from "./task/task.module";
import { UserTaskModule } from "./userTask/userTask.module";
import { ManagerModule } from "./manager/manager.module";
import { AuthorizationModule } from "./Authorization/authorization.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    RoleModule,
    ProjectModule,
    UserProjectModule,
    PermissionModule,
    UserModule,
    TaskModule,
    UserTaskModule,
    ManagerModule,
    AuthorizationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
