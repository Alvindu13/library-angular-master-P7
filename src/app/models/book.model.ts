import {User} from './user.model';

export class Book {

  id: bigint;
  price: bigint;
  genre: string;
  quantity: number;
  available: boolean;
  isProlongation: boolean;
  //pas sûr peut-êetre dois je mettre un objet USER
  borrower : string;
  borrowDate;

  constructor(public name: string, public author: string) {
  }
}
