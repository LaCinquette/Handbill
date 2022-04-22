import { Controller, Get, Render } from '@nestjs/common';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {}

    @Get('')
    @Render('download')
    download(): any {
        this.downloadService.createDownload({});
    }
}
