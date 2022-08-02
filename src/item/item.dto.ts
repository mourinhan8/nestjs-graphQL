import { InputType, ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class ItemType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field(() => Int)
  readonly amount: number;
}

@InputType()
export class ItemInput {
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field(() => Int)
  readonly amount: number;
}

export interface Item extends Document {
    readonly name: string;
    readonly description: string;
    readonly amount: number;
}