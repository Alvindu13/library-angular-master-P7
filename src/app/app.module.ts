import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AdminBooksComponent} from './admin-books/admin-books.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { BookReserveComponent } from './book-list/book-reserve/book-reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AdminBooksComponent,
    AdminUsersComponent,
    LoginComponent,
    NewBookComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    BookReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
