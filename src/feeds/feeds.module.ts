import { Module } from '@nestjs/common';
import { FeedsController } from './feeds.controller';
import { FeedsProvider } from './feeds.provider';
import { FeedsService } from './feeds.service';

@Module({
  controllers: [FeedsController],
  providers: [FeedsService, FeedsProvider],
})
export class FeedsModule {}
