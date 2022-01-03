import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { KittenModule } from './kitten/kitten.module';

@Module({
  imports: [CatModule, KittenModule],
})
export class AppModule {}
