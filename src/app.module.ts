import { Module } from '@nestjs/common';
//import { GraphQLModule } from '@nestjs/graphql';
//import { WordModule } from './word/word.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    //GraphQLModule.forRoot({
    //  typePaths: ['./**/*.graphql'],
    //  playground: true,
    //}),
    TypeOrmModule.forRoot(typeOrmConfig),
    //WordModule,
  ],
})
export class AppModule {}
