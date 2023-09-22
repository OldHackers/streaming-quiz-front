export interface Choice {
  id: number;
  content: string;
  choiceNumber: number;
  isAnswer: boolean;
  boxOption?: string;
}

export interface Quiz {
  id: number;
  question: string;
  choiceList: Choice[];
  answer: number;
  commentary: string;
  idx: number;
}
