import { Injectable } from '@nestjs/common';
import { cats } from '../db';

@Injectable()
export class CatService {
  constructor() {
    this.cats = cats;
  }

  create(cat) {
    this.cats.push(cat);
    return this.cats;
  }
  
  findAll() {
    return this.cats;
  }

  findOne(catId) {
    return this.cats.find(el => el.id === catId);
  }
  
  update(catId, body) {
    let updatedCat;
    this.cats = this.cats.map(cat => {
      if(cat.id === catId) {
        updatedCat = { id: cat.id, ...body };
        return updatedCat;
      }
      return cat;
    })
    return updatedCat;
  }

}
