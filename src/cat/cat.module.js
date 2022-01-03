import { Module, Dependencies } from '@nestjs/common';
import { KittenModule } from '../kitten/kitten.module';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { KittenCatController } from './kitten.controller';

@Module({
  imports: [KittenModule],
  controllers: [CatController, KittenCatController],
  providers: [CatService]
})

@Dependencies(CatService)
export class CatModule {}
