import { Module, Dependencies } from '@nestjs/common';
import { KittenService } from '../kitten/kitten.service';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { KittenCatController } from './kitten.controller';

@Module({
  controllers: [CatController, KittenCatController],
  providers: [CatService, KittenService]
})

@Dependencies(CatService)
export class CatModule {}
