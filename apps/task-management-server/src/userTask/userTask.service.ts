import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTaskServiceBase } from "./base/userTask.service.base";

@Injectable()
export class UserTaskService extends UserTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
