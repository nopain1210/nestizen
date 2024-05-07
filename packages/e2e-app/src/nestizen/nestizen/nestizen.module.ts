// This file is generated by @nestizen/graphql-plugin. DO NOT MANUALLY EDIT!
/* eslint-disable */
import { UserModule } from '../user/user.module';
import { ProfileModule } from '../profile/profile.module';
import { PostModule } from '../post/post.module';
import { TagModule } from '../tag/tag.module';
import { CategoryModule } from '../category/category.module';
import { CategoryMetadataModule } from '../category-metadata/category-metadata.module';
import { MiscModelModule } from '../misc-model/misc-model.module';
import { HiddenModelModule } from '../hidden-model/hidden-model.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    UserModule,
    ProfileModule,
    PostModule,
    TagModule,
    CategoryModule,
    CategoryMetadataModule,
    MiscModelModule,
    HiddenModelModule,
  ],
  exports: [
    UserModule,
    ProfileModule,
    PostModule,
    TagModule,
    CategoryModule,
    CategoryMetadataModule,
    MiscModelModule,
    HiddenModelModule,
  ],
})
export class NestizenModule {}