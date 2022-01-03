import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
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
    const cat = this.cats.find(el => el.id === catId);
    if (!cat) throw new NotFoundException(`Cat ID #${catId} is Not Found`);
    
    return cat;
  }
  
  update(catId, body) {
    const cat = this.cats.find(el => el.id === catId);
    if (!cat) throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: `Cat ID #${catId} Not Found`, error: 'Bad Request' }, HttpStatus.BAD_REQUEST)

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
