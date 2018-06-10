import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;
  userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) { }

  verifyUser() {
    return this.httpClient.get(`${this.baseUrl}v1/me`);
  }

  loadUser() {
    this.verifyUser().toPromise().then(response => {
      this.setUser(response);
    }).catch( err => {
      this.setUser(null);
    });
  }

  setUser(user) {
    if (!this.userSubject) {
        this.userSubject = new BehaviorSubject<any>(user);
    } else {
      this.userSubject.next(user);
    }
  }

  getUser() {
    return this.userSubject;
  }

}