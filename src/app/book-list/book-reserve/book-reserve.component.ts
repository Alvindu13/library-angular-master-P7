import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-book-reserve',
  templateUrl: './book-reserve.component.html',
  styleUrls: ['./book-reserve.component.css']
})
export class BookReserveComponent implements OnInit {

  books;

  constructor(private booksService: BooksService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.booksService.getBooksByBorrowerId()
      .subscribe(data => {
          console.log(data);
          this.books = data;
          console.log('books', this.books);
      }, err => {
          console.log(err);
      });
    }

}
