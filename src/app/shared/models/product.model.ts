import { BaseModel } from './base.model';
import { Review } from './review.model';

export class Product extends BaseModel{
  category: string;
  title: string;
  slogan: string;
  description: string;
  price: number;
  img_url: string;
  stars: number;
voters: number;
  reviews: Review[] = [];

  constructor() {
    super();
  }
}
