import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from './word.entity';
import { WordRepository } from './word.repository';
import { CreateWordDTO } from './dto/create-word.dto';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private wordRepository: WordRepository,
  ) {}

  async createWord(createWordDTO: CreateWordDTO): Promise<Word> {
    return this.wordRepository.createWord(createWordDTO);
  }
}
