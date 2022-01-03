import { Controller, Get, Post, Put, Dependencies, Bind, Res, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cats')
@Dependencies(CatService)
export class CatController {
  constructor(catService) {
    this.catService = catService
  }

  @Post()
  @Bind(Res(), Body())
  async create(res, body) {
    const { id, name, age } = body;
    const cat = { id, name, age };
    const newCat = await this.catService.create(cat);
    res.json(newCat);
  }

  @Get()
  @Bind(Res())
  async findAll(res) {
    const cats = await this.catService.findAll();
    res.json(cats);
  }
  
  @Get('/:catId')
  @Bind(Res(), Param('catId', ParseIntPipe))
  async findOne(res, catId) {
    const cat = await this.catService.findOne(catId)
    res.json(cat);
  }
  
  @Put('/:catId')
  @Bind(Res(), Param('catId', ParseIntPipe), Body())
  async update(res, catId, body) {
    const { name, age } = body;
    const cat = { name, age };
    const updatedCat = await this.catService.update(catId, cat);
    res.json(updatedCat);
  }

}
