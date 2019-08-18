export class Book {

  id: bigint;
  price: bigint;
  genre: string;
  quantity: bigint;
  available: boolean;
  isProlongation: boolean;
  //pas sûr peut-êetre dois je mettre un objet USER
  borrower : Object;

  constructor(public name: string, public author: string) {
  }
}
