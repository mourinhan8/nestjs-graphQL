import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './item.dto';
import { ItemInput } from './item.dto';

@Injectable()
export class ItemProvider {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async create(createItemDto: ItemInput): Promise<Item> {
    const createdCat = new this.itemModel(createItemDto);
    return await createdCat.save();
  }

  async findOne(name: string): Promise<Item> {
    return await this.itemModel.findOne({name: name})
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }
}
