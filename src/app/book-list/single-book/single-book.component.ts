import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Book} from '../../models/book.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book : Object;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService,
              private router : Router) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];

    this.booksService.getSinglebook(+id)
      .subscribe( data => {
        this.book = data;
      }, err => {
        console.log(err);
      });
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
