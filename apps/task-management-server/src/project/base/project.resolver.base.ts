/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Project } from "./Project";
import { ProjectCountArgs } from "./ProjectCountArgs";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectFindUniqueArgs } from "./ProjectFindUniqueArgs";
import { CreateProjectArgs } from "./CreateProjectArgs";
import { UpdateProjectArgs } from "./UpdateProjectArgs";
import { DeleteProjectArgs } from "./DeleteProjectArgs";
import { UserProjectFindManyArgs } from "../../userProject/base/UserProjectFindManyArgs";
import { UserProject } from "../../userProject/base/UserProject";
import { ProjectService } from "../project.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Project)
export class ProjectResolverBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async _projectsMeta(
    @graphql.Args() args: ProjectCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Project])
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async projects(
    @graphql.Args() args: ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.service.projects(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Project, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "own",
  })
  async project(
    @graphql.Args() args: ProjectFindUniqueArgs
  ): Promise<Project | null> {
    const result = await this.service.project(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Project)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "create",
    possession: "any",
  })
  async createProject(
    @graphql.Args() args: CreateProjectArgs
  ): Promise<Project> {
    return await this.service.createProject({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Project)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async updateProject(
    @graphql.Args() args: UpdateProjectArgs
  ): Promise<Project | null> {
    try {
      return await this.service.updateProject({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Project)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "delete",
    possession: "any",
  })
  async deleteProject(
    @graphql.Args() args: DeleteProjectArgs
  ): Promise<Project | null> {
    try {
      return await this.service.deleteProject(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [UserProject], { name: "userProjects" })
  @nestAccessControl.UseRoles({
    resource: "UserProject",
    action: "read",
    possession: "any",
  })
  async findUserProjects(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: UserProjectFindManyArgs
  ): Promise<UserProject[]> {
    const results = await this.service.findUserProjects(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
