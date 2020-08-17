import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { WordResolver } from './word.resolver';
import { WordService } from './word.service';
import { WordRepository } from './word.repository';
import { WordController } from './word.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WordRepository])],
  controllers: [WordController],
  providers: [/*WordResolver,*/ WordService],
})
export class WordModule {}
