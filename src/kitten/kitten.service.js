import { Injectable, NotFoundException } from '@nestjs/common';
import { kittens, cats } from '../db';

@Injectable()
export class KittenService {
  constructor() {
    this.kittens = kittens;
    this.cats = cats;
  }

  findAll() {
    return this.kittens;
  }

  findOne(kittenId) {
    const kitten = this.kittens.find(kitten => kitten.id === kittenId);
    if (!kitten) throw new NotFoundException(`Kitten ID #${kittenId} is Not Found`);
    
    return kitten;
  }

  findAllKittens(catId) {
    return this.kittens.filter(kitten => kitten.parentId === catId);
  }

  findOneKitten(catId, kittenId) {
    const cat = this.cats.find(cat => cat.id === catId);
    if (!cat) throw new NotFoundException(`Cat ID #${catId} is Not Found`);

    const kitten = this.kittens.find(kitten => kitten.parentId === catId && kitten.id === kittenId);
    if (!kitten) throw new NotFoundException(`Cat ID #${catId} has no Kitten ID #${kittenId}`);
    
    return kitten;
  }

}
