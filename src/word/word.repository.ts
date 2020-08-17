import { Repository, EntityRepository } from 'typeorm';
import { Word } from './word.entity';
import { CreateWordDTO } from './dto/create-word.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Word)
export class WordRepository extends Repository<Word> {
  private logger = new Logger('WordRepository');

  async createWord(createWordDTO: CreateWordDTO): Promise<Word> {
    const { vocabulary, expression, example } = createWordDTO;

    const word = new Word();
    word.vocabulary = vocabulary;
    word.example = example;
    word.expression = expression;

    try {
      await word.save();
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException();
    }

    return word;
  }
}
