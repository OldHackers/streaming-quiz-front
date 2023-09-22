import { Quiz } from './quiz';

export interface Video {
  url: string;
  quizzes: Quiz[];
}
