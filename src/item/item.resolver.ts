import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemProvider} from './item.provider';
import { ItemType } from './item.dto';
import { ItemInput } from './item.dto';

@Resolver()
export class ItemResolver {
  constructor(private readonly itemProvider: ItemProvider) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => ItemType)
  async item(@Args('name') name: string) {
    return this.itemProvider.findOne(name);
  }

  @Query(() => [ItemType])
  async items() {
    return this.itemProvider.findAll();
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput) {
    return this.itemProvider.create(input);
  }
}