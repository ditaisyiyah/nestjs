import { Module } from '@nestjs/common';
import { CatModule } from '../cat/cat.module';
import { LoggerMiddleware } from '../common/middleware/logger.middleware';
import { KittenModule } from '../kitten/kitten.module';

@Module({
  imports: [CatModule, KittenModule],
})
export class AppModule {
  configure(consumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats')
  }
}
