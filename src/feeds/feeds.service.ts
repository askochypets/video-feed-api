import { Inject, Injectable } from '@nestjs/common';
import { Feed } from './interfaces/feed.interface';

@Injectable()
export class FeedsService {
  constructor(@Inject('CONNECTION') private readonly connection) {}

  async findAll(source: string): Promise<Feed[]> {
    return source
      ? await this.connection.getFeedsBySource(source)
      : await this.connection.getFeeds();
  }
}
