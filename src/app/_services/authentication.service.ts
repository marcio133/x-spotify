import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
   }

   authenticate() {
    return this.httpClient.get('https://accounts.spotify.com/authorize/?client_id=4ff13c994cf54765936ccc5c0b5559d9&response_type=code&redirect_uri=https%3A%2F%2Fx-spotify.firebaseapp.com%redirect&scope=user-read-private%20user-read-email&state=34fFs29kd09');
   }


}
