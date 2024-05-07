// This file is generated by @nestizen/graphql-plugin. DO NOT MANUALLY EDIT!
/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { Prisma, Profile } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ProfileBaseService {
  constructor(protected readonly prisma: PrismaService) {}

  async aggregate(args: Prisma.ProfileAggregateArgs) {
    return this.prisma.client.profile.aggregate(args);
  }

  async createMany(args: Prisma.ProfileCreateManyArgs) {
    return this.prisma.client.profile.createMany(args);
  }

  async deleteMany(args: Prisma.ProfileDeleteManyArgs) {
    return this.prisma.client.profile.deleteMany(args);
  }

  async findFirst(args: Prisma.ProfileFindFirstArgs) {
    return this.prisma.client.profile.findFirst(args);
  }

  async findMany(args: Prisma.ProfileFindManyArgs) {
    return this.prisma.client.profile.findMany(args);
  }

  async findUnique(args: Prisma.ProfileFindUniqueArgs) {
    return this.prisma.client.profile.findUnique(args);
  }

  async groupBy(args: Prisma.ProfileGroupByArgs) {
    return this.prisma.client.profile.groupBy(args);
  }

  async updateMany(args: Prisma.ProfileUpdateManyArgs) {
    return this.prisma.client.profile.updateMany(args);
  }

  async count(args: Prisma.ProfileCountArgs) {
    return this.prisma.client.profile.count(args);
  }

  async user(parent: Profile) {
    return this.prisma.client.profile
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .user();
  }
}
