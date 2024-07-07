import { Injectable } from "@nestjs/common";
import { CheckPermissionInput } from "../authorization/CheckPermissionInput";

@Injectable()
export class AuthorizationService {
  constructor() {}
  async CheckUserPermission(args: CheckPermissionInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
