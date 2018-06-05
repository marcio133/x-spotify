import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any;
  type: string = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loadUser();
  }

  getResults(results) {
    this.results = results.results;
    this.type = results.type;
    console.log( this.results);
  }

}
