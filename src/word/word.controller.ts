import {
  Controller,
  Query,
  Get,
  Post,
  Body,
  Logger,
} from '@nestjs/common';
import { WordService } from './word.service';
import { Word } from './word.entity';
import { GetWordsFilterDTO } from './dto/get-words-filter.dto';
import { CreateWordDTO } from './dto/create-word.dto';

@Controller('word')
export class WordController {
  private logger = new Logger('WordController');
  constructor(private wordService: WordService) { }

  @Get()
  getWords(@Query() filterDTO: GetWordsFilterDTO): Promise<Word[]> {
    return this.wordService.getWords(filterDTO);
  }

  @Get('/total')
  getTotal(): Promise<number> {
    return this.wordService.getTotal();
  }

  @Get('/random')
  getRandomWords(): Promise<Word[]> {
    return this.wordService.getRandomWords();
  }

  @Post()
  createWord(@Body() createWordDTO: CreateWordDTO): Promise<Word> {
    this.logger.verbose(`Data: ${JSON.stringify(createWordDTO)}`);
    return this.wordService.createWord(createWordDTO);
  }
}
