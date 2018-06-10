import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  setToken(token: string, storeLocal = true) {
    sessionStorage.setItem('token', token);

    if (storeLocal) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }

}
