import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bookSubscription: Subscription;


  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
        /* tslint:disable:no-string-literal */
        const jwt = resp.headers.get('Authorization');
        /* tslint:enable:no-string-literal */
        this.authService.saveToken(jwt);
        this.authService.username = data.username;

        this.authService.getUserByUsername().subscribe(
          (user => {
            console.log(user);
            this.authService.currentUser = user;
            this.authService.currentId = this.authService.currentUser.id;
            console.log('currentUser', this.authService.currentUser);
          }),
          (error) => {
            console.log(error);
          }
        );


        console.log('currentUser', this.authService.currentUser);
        console.log(this.authService.username );
        this.router.navigateByUrl('/');
      }, err => {
        console.log(err);
      });

  }


}
