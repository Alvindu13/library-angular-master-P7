export class Book {

  name: string;
  price: bigint;
  genre: string;
  quantity: bigint;
  available: boolean;
  isProlongation: boolean;

  constructor(public title: string, public author: string) {
  }
}
