import { Module } from '@nestjs/common';
import { KittenService } from './kitten.service';
import { KittenController } from './kitten.controller';

@Module({
  providers: [KittenService],
  controllers: [KittenController],
  exports: [KittenService]
})
export class KittenModule {}
