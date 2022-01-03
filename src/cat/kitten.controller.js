import { Controller, Get, Dependencies, Bind, Res, Param, ParseIntPipe } from '@nestjs/common';
import { KittenService } from '../kitten/kitten.service';

@Controller('cats/:catId/kittens')
@Dependencies(KittenService)
export class KittenCatController {
  constructor(kittenService) {
    this.kittenService = kittenService
  }

  @Get('')
  @Bind(Res(), Param('catId', ParseIntPipe))
  async findAllKittens(res, catId) {
    const kittens = await this.kittenService.findAllKittens(catId);
    res.json(kittens);
  }

  @Get(':kittenId')
  @Bind(Res(), Param('catId', ParseIntPipe), Param('kittenId', ParseIntPipe))
  async findOneKitten(res, catId, kittenId) {
    const kitten = await this.kittenService.findOneKitten(catId, kittenId);
    res.json(kitten);
  }

}
