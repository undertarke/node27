import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TaskService {
    private prisma = new PrismaClient();
    getTask(): any {

        return this.prisma.cong_viec.findMany();
    }
}
