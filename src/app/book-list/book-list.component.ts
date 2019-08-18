import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book.model';
import {User} from '../models/user.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books;
  book : Book;
  user: User;

  constructor(private booksService: BooksService, private authService: AuthenticationService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe( data => {
        this.books = data;
      }, err => {
        console.log(err);
      });
  }

  /**
   * Fonction qui permet de réserver un livre
   * Act1 => mettre available à false
   * @param b
   */
  onReserve(b: Book) {

    const u : User = new User('user5');

    b.available = false;
    b.borrower = u;
    //this.authService
    const x = b.id.toString();
    const url : string = 'http://localhost:9005/books/' + x;
    console.log(b.id);
    console.log(b.available);
    console.log(b.borrower);
    console.log(url);

    this.booksService.patchResources(url, b).subscribe();

    //b.borrowerId = ?

    //this.booksService.patchResources()
    //this.book = this.b;
  }
}
