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

}
