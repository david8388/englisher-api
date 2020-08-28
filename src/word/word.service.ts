import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from './word.entity';
import { WordRepository } from './word.repository';
import { GetWordsFilterDTO } from './dto/get-words-filter.dto';
import { CreateWordDTO } from './dto/create-word.dto';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private wordRepository: WordRepository,
  ) { }

  async getTotal(): Promise<number> {
    const [, total] = await this.wordRepository.findAndCount();
    return total
  }

  async getCreated(): Promise<number> {
    const filter = {
      startDate: new Date().toISOString(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
    }
    const words = await this.wordRepository.getWords(filter);
    return words.length
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  async getRandomWords(): Promise<Word[]> {
    const words = await this.wordRepository.find();
    return this.shuffle(words).slice(0, 10);
  }

  async getWords(filterDTO: GetWordsFilterDTO): Promise<Word[]> {
    return this.wordRepository.getWords(filterDTO);
  }

  async createWord(createWordDTO: CreateWordDTO): Promise<Word> {
    return this.wordRepository.createWord(createWordDTO);
  }
}
