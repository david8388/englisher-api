import { Repository, EntityRepository } from 'typeorm';
import { Word } from './word.entity';
import { CreateWordDTO } from './dto/create-word.dto';
import { GetWordsFilterDTO } from './dto/get-words-filter.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Word)
export class WordRepository extends Repository<Word> {
  private logger = new Logger('WordRepository');

  async getWords(filterDTO: GetWordsFilterDTO): Promise<Word[]> {
    let { startDate, endDate } = filterDTO;

    try {
      const timezoneOffset = new Date().getTimezoneOffset() * 1000 * 60;
      const start = startDate
        ? new Date(
            new Date(startDate).valueOf() + new Date(timezoneOffset).valueOf(),
          )
        : new Date(0);
      const end = endDate
        ? new Date(
            new Date(endDate).valueOf() - new Date(timezoneOffset).valueOf(),
          )
        : new Date();
      const words = await this.find({
        where: {
          createdAt: {
            $gte: start,
            $lt: end,
          },
        },
      });
      return words;
    } catch (error) {
      this.logger.error(
        `Failed to get tasks DTO: ${JSON.stringify(filterDTO)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

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
