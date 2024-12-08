/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Task as PrismaTask,
  UserTask as PrismaUserTask,
  User as PrismaUser,
} from "@prisma/client";
import { TaskCreateInput } from "./TaskCreateInput";
import { Task } from "./Task";

export class TaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TaskCountArgs, "select">): Promise<number> {
    return this.prisma.task.count(args);
  }

  async tasks(args: Prisma.TaskFindManyArgs): Promise<PrismaTask[]> {
    return this.prisma.task.findMany(args);
  }
  async task(args: Prisma.TaskFindUniqueArgs): Promise<PrismaTask | null> {
    return this.prisma.task.findUnique(args);
  }
  async createTask(args: Prisma.TaskCreateArgs): Promise<PrismaTask> {
    return this.prisma.task.create(args);
  }
  async updateTask(args: Prisma.TaskUpdateArgs): Promise<PrismaTask> {
    return this.prisma.task.update(args);
  }
  async deleteTask(args: Prisma.TaskDeleteArgs): Promise<PrismaTask> {
    return this.prisma.task.delete(args);
  }

  async findUserTasks(
    parentId: string,
    args: Prisma.UserTaskFindManyArgs
  ): Promise<PrismaUserTask[]> {
    return this.prisma.task
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userTasks(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.task
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
  async CreateTaskWithPermissionCheck(args: TaskCreateInput): Promise<Task> {
    throw new Error("Not implemented");
  }
}
