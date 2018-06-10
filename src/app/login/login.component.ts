import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  autenticate() {
    window.open('https://accounts.spotify.com/authorize?client_id=4ff13c994cf54765936ccc5c0b5559d9&redirect_uri=https://x-spotify.firebaseapp.com/redirect&scope=user-read-private%20user-read-email%20user-follow-read%20user-follow-modify%20user-library-read%20user-library-modify&response_type=token&state=123');
  }

}
