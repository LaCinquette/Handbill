import { Injectable } from '@nestjs/common';
import { Download, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';



@Injectable()
export class DownloadService {
    constructor(private prisma: PrismaService) {}

    async createDownload(data: Prisma.DownloadCreateInput): Promise<Download> {
        return this.prisma.download.create({
          data
        });
    }

    async countDownloads(): Promise<number>{
        return await this.prisma.download.count();
    }
}
