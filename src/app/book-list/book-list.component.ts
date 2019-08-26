import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
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

  constructor(private httpService: HttpService, private authService: AuthenticationService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.httpService.getAllBooks()
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
    b.available = false;
    const url : string = 'http://localhost:9005/books/' + b.id.toString() + '/reserve'
    this.httpService.patchResources(url, b).subscribe();
  }
}
