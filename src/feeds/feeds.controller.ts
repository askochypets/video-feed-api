import { Controller, Get, Query, Header } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { Feed } from './interfaces/feed.interface';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  async findAll(@Query('source') source: string): Promise<Feed[]> {
    return this.feedsService.findAll(source);
  }
}
