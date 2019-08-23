import {Component, Input, OnInit} from '@angular/core';
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
  //@Input() userName:string;



  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
        /* tslint:disable:no-string-literal */
        const jwt = resp.headers.get('Authorization');
        console.log(jwt)
        /* tslint:enable:no-string-literal */
        this.authService.saveToken(jwt);
        this.authService.username = data.username;
        this.router.navigateByUrl('/');
      }, err => {
        console.log(err);
      });

  }


}
