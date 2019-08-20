import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {AdminBooksComponent} from './admin-books/admin-books.component';
import {BookFormComponent} from './book-list/book-form/book-form.component';
import {SingleBookComponent} from './book-list/single-book/single-book.component';
import {BookReserveComponent} from './book-list/book-reserve/book-reserve.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookSearchComponent} from './book-list/book-search/book-search.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BookListComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'books/new', component: BookFormComponent},
  {path: 'books/:id', component: SingleBookComponent},
  {path: 'books/view/search', component: BookSearchComponent},
  {path: 'books/user/test', component: BookReserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
