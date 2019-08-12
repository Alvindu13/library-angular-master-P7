import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public host = 'http://localhost:9005';

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }

  getAllBooks() {
    return this.http.get(this.host + '/books');
  }

  getResources(url) {
    return this.http.get(url);
  }

  deleteResources(url) {
    const header = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt})
    return this.http.delete(url, {headers: header});
  }


  postResources(url, data) {
    const header = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt})
    return this.http.post(url, data, {headers: header});
  }

  putResources(url, data) {
    const header = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt})
    return this.http.put(url, data, {headers: header});
  }

  patchResources(url, data) {
    const header = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt})
    return this.http.patch(url, data, {headers: header});
  }
}
