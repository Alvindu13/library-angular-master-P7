export class Book {

  price: bigint;
  genre: string;
  quantity: bigint;
  available: boolean;
  isProlongation: boolean;

  constructor(public name: string, public author: string) {
  }
}
