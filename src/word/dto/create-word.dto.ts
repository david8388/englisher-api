interface WordInfo {
  partOfSpeech: string;
  explanation: string;
}

export class CreateWordDTO {
  vocabulary: string;
  expression: string;
  example: string;
}
