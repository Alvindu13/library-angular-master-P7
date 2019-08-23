import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-reserve',
  templateUrl: './book-reserve.component.html',
  styleUrls: ['./book-reserve.component.css']
})
export class BookReserveComponent implements OnInit {

  books;
  currentUserId;

  constructor(private booksService: BooksService, private authService: AuthenticationService) {
    this.currentUserId = this.authService.currentId;
  }

  ngOnInit() {
    const url = 'http://localhost:9005/books/user'
    this.booksService.getResources(url)
      .subscribe(data => {
          console.log(data);
          this.books = data;
          console.log('books', this.books);
      }, err => {
          console.log(err);
      });
    }

  onExtend(b: Book) {
    const url = 'http://localhost:9005/books/extend/' + b.id;
    this.booksService.patchResources(url, b)
      .subscribe();
  }
}
