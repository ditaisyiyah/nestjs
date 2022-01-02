import { Module, Dependencies } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  controllers: [CatController],
  providers: [CatService]
})

@Dependencies(CatService)
export class CatModule {}
