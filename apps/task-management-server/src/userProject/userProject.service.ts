import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserProjectServiceBase } from "./base/userProject.service.base";

@Injectable()
export class UserProjectService extends UserProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
