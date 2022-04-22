import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DownloadController } from './download.controller';
import { DownloadService } from './download.service';

@Module({
  controllers: [DownloadController],
  providers: [DownloadService, PrismaService]
})
export class DownloadModule {}
