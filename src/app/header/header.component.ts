import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {BookSearchComponent} from '../book-list/book-search/book-search.component';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

  onGetBooksByBorrowerId(borrowerId: number) {

  }

}
