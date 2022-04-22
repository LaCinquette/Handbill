import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root(): any {
    this.appService.logVisit();
  }

  @Get('counter')
  async counter(): Promise<any> {
    const countDownloads = await this.appService.showCountDownloads();
    const countVisits = await this.appService.showCountVisits();
    return {
      downloadsCount: countDownloads,
      visitsCount: countVisits
    };
  }
}
