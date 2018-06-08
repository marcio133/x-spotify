import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../_services/token.service';
import 'rxjs/add/observable/throw'
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthService implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: this.getHeaders()
    });

    return next.handle(req)
      .catch(error => {        
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 || error.status === 403) {
            this.router.navigate(['']);
          }
          return Observable.throw(error);
        }
      });
  }

  getHeaders() {
    let headers = {};
    if(this.tokenService.getToken()){
      headers =  {
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': `${this.tokenService.getToken()}`,
        // 'Access-Control-Allow-Origin': '*'
      }
    }

    return headers;
  }

}
