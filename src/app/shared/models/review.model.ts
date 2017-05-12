import { BaseModel } from './base.model';

export class Review extends BaseModel {
  name: string;
  date: number;
  stars: number;
  comment: string;

  constructor() {
    super();
  }
}
