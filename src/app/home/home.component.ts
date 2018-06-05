import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any;
  constructor() { }

  ngOnInit() {
  }

  getResults(results) {
    this.results = results;
    console.log( this.results);
  }

}
