import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma-db/prisma.service.js';

import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

import { Status } from '../generated/prisma/enums.js';

@Injectable()
export class TasksService {
  constructor(private readonly primsa: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.primsa.task.create({ data });
  }

  findAll(status?: Status) {
    return this.primsa.task.findMany({ where: status ? { status } : {} });
  }

  async findOne(id: number) {
    const task = await this.primsa.task.findUnique({ where: { id } });

    if (!task) throw new NotFoundException();

    return task;
  }

  async update(id: number, data: UpdateTaskDto) {
    await this.findOne(id);

    return this.primsa.task.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.findOne(id);

    return this.primsa.task.delete({ where: { id } });
  }
}
