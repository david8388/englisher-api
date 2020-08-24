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
  ) {}

  async getWords(filterDTO: GetWordsFilterDTO): Promise<Word[]> {
    return this.wordRepository.getWords(filterDTO);
  }

  async createWord(createWordDTO: CreateWordDTO): Promise<Word> {
    return this.wordRepository.createWord(createWordDTO);
  }
}
