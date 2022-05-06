import { Controller, Get, Post, Render } from '@nestjs/common';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {}

    @Get('')
    @Render('download')
    downloadByGet(): any {
        this.downloadService.createDownload({});
    }

    @Post('')
    downloadByPost(): any {
        this.downloadService.createDownload({});
    }
}
