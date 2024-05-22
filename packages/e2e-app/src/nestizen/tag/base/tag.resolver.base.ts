/**
 * -----------------------------------------------------------------------------
 * WARNING:
 * This file is auto-generated by @nestizen/graphql-plugin.
 * Changes to this file will be lost if the code is regenerated.
 * -----------------------------------------------------------------------------
 */

/* eslint-disable */
import {
  Resolver,
  Query,
  Args,
  Mutation,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { TagServiceBase } from './tag.service.base';
import {
  Tag,
  FindUniqueTagArgs,
  FindManyTagArgs,
  CreateOneTagArgs,
  UpdateOneTagArgs,
  DeleteOneTagArgs,
  AggregateTag,
  TagAggregateArgs,
  FindManyUserArgs,
  User,
} from '../../nestizen/graphql-types';
import { ZenPermission } from '@nestizen/runtime';

@Resolver(() => Tag)
export class TagResolverBase {
  constructor(public readonly service: TagServiceBase) {}

  @Query(() => Tag, { nullable: true })
  @ZenPermission('Tag', 'read')
  async tag(@Args() args: FindUniqueTagArgs) {
    return this.service.findUnique(args as any);
  }

  @Query(() => [Tag], { nullable: false })
  @ZenPermission('Tag', 'read')
  async tags(@Args() args: FindManyTagArgs) {
    return this.service.findMany(args as any);
  }

  @Mutation(() => Tag, { nullable: false })
  @ZenPermission('Tag', 'create')
  async createTag(@Args() args: CreateOneTagArgs) {
    return this.service.create(args as any);
  }

  @Mutation(() => Tag, { nullable: false })
  @ZenPermission('Tag', 'update')
  async updateTag(@Args() args: UpdateOneTagArgs) {
    return this.service.update(args as any);
  }

  @Mutation(() => Tag, { nullable: false })
  @ZenPermission('Tag', 'delete')
  async deleteTag(@Args() args: DeleteOneTagArgs) {
    return this.service.delete(args as any);
  }

  @Query(() => Int, { nullable: false })
  @ZenPermission('Tag', 'read')
  async tagCount(@Args() args: FindManyTagArgs) {
    return this.service.count(args as any);
  }

  @Query(() => AggregateTag, { nullable: false })
  @ZenPermission('Tag', 'read')
  async tagAggregate(@Args() args: TagAggregateArgs) {
    return this.service.aggregate(args as any);
  }

  @ResolveField(() => [User], { nullable: false })
  async users(@Parent() parent: Tag, @Args() args: FindManyUserArgs) {
    return this.service.resolveUsers(parent, args as any);
  }
}
