import { Injectable } from '@nestjs/common';
import { Visit, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VisitService {
    constructor(private prisma: PrismaService) {}

    async createVisit(data: Prisma.VisitCreateInput): Promise<Visit> {
      return this.prisma.visit.create({
        data
      });
    }

    async countVisits(): Promise<number>{
      return await this.prisma.visit.count();
    }
}
