import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './item.schema';
import { ItemProvider } from './item.provider';
import { ItemResolver } from './item.resolver'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    providers: [ItemResolver, ItemProvider],
})
export class ItemModule {}
