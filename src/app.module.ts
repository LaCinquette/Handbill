import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DownloadModule } from './download/download.module';
import { DownloadService } from './download/download.service';
import { PrismaService } from './prisma.service';
import { VisitService } from './visit/visit.service';

@Module({
  imports: [DownloadModule],
  controllers: [AppController],
  providers: [AppService, DownloadService, PrismaService, VisitService],
})
export class AppModule {}
