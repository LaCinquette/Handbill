import { Injectable } from '@nestjs/common';
import { DownloadService } from './download/download.service';
import { VisitService } from './visit/visit.service';

@Injectable()
export class AppService {
  constructor(private downloadService: DownloadService, private visitService: VisitService) {}

  async showCountDownloads(): Promise<number> {
    return this.downloadService.countDownloads();
  }

  async showCountVisits(): Promise<number> {
    return this.visitService.countVisits();
  }

  async logVisit(): Promise<void>{
    this.visitService.createVisit({});
  }
}
