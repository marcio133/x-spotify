import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  title = 'app';

  constructor(private authenticationService: AuthenticationService){}

  ngOnInit(): void {
  }

  autenticate() {
    window.open('https://accounts.spotify.com/authorize/?client_id=4ff13c994cf54765936ccc5c0b5559d9&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09')
  }
}
