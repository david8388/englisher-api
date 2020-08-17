interface WordInfo {
  partOfSpeech: string;
  explanation: string;
}

export class CreateWordDTO {
  vocabulary: string;
  expression: Array<WordInfo>;
  example: string;
}
