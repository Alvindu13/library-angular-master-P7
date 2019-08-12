import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books;

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe( data => {
        this.books = data;
      }, err => {
        console.log(err);
      });
  }

  onGetBooks() {
  }



  /*onGetBooks(books) {
    const url = books._links.books.href;
    this.router.navigateByUrl('/products/' + btoa(url));
  }*/

}
