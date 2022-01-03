import { Controller, Dependencies, Get, Bind, Res, Param, ParseIntPipe } from '@nestjs/common';
import { KittenService } from './kitten.service'

@Controller('kittens')
@Dependencies(KittenService)
export class KittenController {
  constructor(kittenService) {
    this.kittenService = kittenService;
  }

  @Get()
  @Bind(Res())
  async findAll(res) {
    const kittens = await this.kittenService.findAll();
    res.json(kittens);
  }
  
  @Get('/:kittenId')
  @Bind(Res(), Param('kittenId', ParseIntPipe))
  async findOne(res, kittenId) {
    const kitten = await this.kittenService.findOne(kittenId);
    res.json(kitten);
  }

}
