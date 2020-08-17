import {
  Controller,
  Post,
  Body,
  Logger,
} from '@nestjs/common';
import { WordService } from './word.service';
import { Word } from './word.entity';
import { CreateWordDTO } from './dto/create-word.dto';

@Controller('word')
export class WordController {
  private logger = new Logger('WordController');
  constructor(private wordService: WordService) {}

  @Post()
  createWord(@Body() createWordDTO: CreateWordDTO): Promise<Word> {
    this.logger.verbose(`Data: ${JSON.stringify(createWordDTO)}`);
    return this.wordService.createWord(createWordDTO);
  }
}
