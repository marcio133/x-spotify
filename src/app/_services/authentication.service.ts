import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
   }

   authenticate() {
    return this.httpClient.get('https://x-spotify.firebaseapp.com/redirect#access_token=BQAbOu50LuNM9715wMFxOFIMMAgkDf1UeJHYMGH6XzWVM99CG2b_aHlX6A74pmbCQR91_YqUcjmOvPBsOSoY2AcTNigcVImj_rie3uu8WYNS5H29EWdqpKKBKSPScA7o406gvVFsehDaENvhWvUjkg4y5SHPwjBmDx8CG4F-6foX9iy6EBo&token_type=Bearer&expires_in=3600&state=123');
   }


}
