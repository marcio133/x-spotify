import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any;
  type: string = null;
  constructor() { }

  ngOnInit() {
  }

  getResults(results) {
    this.results = results.results;
    this.type = results.type;
    console.log( this.results);
  }

}
