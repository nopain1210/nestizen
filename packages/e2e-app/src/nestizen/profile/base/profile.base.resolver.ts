// This file is generated by @nestizen/graphql-plugin. DO NOT MANUALLY EDIT!
/* eslint-disable */
import {
  Query,
  Mutation,
  Args,
  Resolver,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProfileBaseService } from './profile.base.service';
import { Prisma } from '@prisma/client';
import {
  AggregateProfile,
  ProfileAggregateArgs,
  AffectedRowsOutput,
  ProfileCreateManyArgs,
  ProfileDeleteManyArgs,
  Profile,
  ProfileFindFirstArgs,
  ProfileFindManyArgs,
  ProfileFindUniqueArgs,
  ProfileGroupByOutputType,
  ProfileGroupByArgs,
  ProfileUpdateManyArgs,
  ProfileCountArgs,
  User,
} from '../../nestizen/graphql-types';

@Resolver(() => Profile)
export class ProfileBaseResolver {
  constructor(protected readonly service: ProfileBaseService) {}

  @Query(() => AggregateProfile, { nullable: false })
  async aggregateProfile(@Args() args: ProfileAggregateArgs) {
    return this.service.aggregate(
      args as unknown as Prisma.ProfileAggregateArgs,
    );
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async createManyProfile(@Args() args: ProfileCreateManyArgs) {
    return this.service.createMany(
      args as unknown as Prisma.ProfileCreateManyArgs,
    );
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async deleteManyProfile(@Args() args: ProfileDeleteManyArgs) {
    return this.service.deleteMany(
      args as unknown as Prisma.ProfileDeleteManyArgs,
    );
  }

  @Query(() => Profile, { nullable: true })
  async findFirstProfile(@Args() args: ProfileFindFirstArgs) {
    return this.service.findFirst(
      args as unknown as Prisma.ProfileFindFirstArgs,
    );
  }

  @Query(() => [Profile], { nullable: false })
  async findManyProfile(@Args() args: ProfileFindManyArgs) {
    return this.service.findMany(args as unknown as Prisma.ProfileFindManyArgs);
  }

  @Query(() => Profile, { nullable: true })
  async findUniqueProfile(@Args() args: ProfileFindUniqueArgs) {
    return this.service.findUnique(
      args as unknown as Prisma.ProfileFindUniqueArgs,
    );
  }

  @Query(() => [ProfileGroupByOutputType], { nullable: false })
  async groupByProfile(@Args() args: ProfileGroupByArgs) {
    return this.service.groupBy(args as unknown as Prisma.ProfileGroupByArgs);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async updateManyProfile(@Args() args: ProfileUpdateManyArgs) {
    return this.service.updateMany(
      args as unknown as Prisma.ProfileUpdateManyArgs,
    );
  }

  @Query(() => Int, { nullable: false })
  async countProfile(@Args() args: ProfileCountArgs) {
    return this.service.count(args as unknown as Prisma.ProfileCountArgs);
  }

  @ResolveField(() => User, { nullable: false })
  async user(@Parent() parent: Profile) {
    return this.service.user(parent);
  }
}