import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {AdminBooksComponent} from './admin-books/admin-books.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
