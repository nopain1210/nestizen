/*
------------------------------------------------------------------------------
WARNING:
This file is auto-generated by @nestizen/graphql-plugin.
Changes to this file will be lost if the code is regenerated.
------------------------------------------------------------------------------
*/
/* eslint-disable */

import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';

export class UserServiceBase {
  constructor(public readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.UserFindUniqueArgs) {
    return this.prisma.client.user.findUnique(args);
  }

  async findMany(args: Prisma.UserFindManyArgs) {
    return this.prisma.client.user.findMany(args);
  }

  async create(args: Prisma.UserCreateArgs) {
    return this.prisma.client.user.create(args);
  }

  async update(args: Prisma.UserUpdateArgs) {
    return this.prisma.client.user.update(args);
  }

  async delete(args: Prisma.UserDeleteArgs) {
    return this.prisma.client.user.delete(args);
  }

  async count(args: Prisma.UserCountArgs) {
    return this.prisma.client.user.count(args);
  }

  async aggregate(args: Prisma.UserAggregateArgs) {
    return this.prisma.client.user.aggregate(args);
  }

  async resolvePosts(parent: User, args: Prisma.PostFindManyArgs) {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: { id: parent.id },
      })
      .posts(args);
  }

  async resolveParent(parent: User) {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: { id: parent.id },
      })
      .parent();
  }

  async resolveChildren(parent: User, args: Prisma.UserFindManyArgs) {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: { id: parent.id },
      })
      .children(args);
  }

  async resolveAnotherPosts(parent: User, args: Prisma.PostFindManyArgs) {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: { id: parent.id },
      })
      .anotherPosts(args);
  }

  async resolveTags(parent: User, args: Prisma.TagFindManyArgs) {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: { id: parent.id },
      })
      .tags(args);
  }

  async resolveProfile(parent: User) {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: { id: parent.id },
      })
      .profile();
  }
}
