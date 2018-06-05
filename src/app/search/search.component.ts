
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  type: string;
  searchString: string = '';
  @Output() result = new EventEmitter<any>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.searchString, this.type).subscribe(res => {
      console.log(res);
      this.result.emit(res);
    })
  }

}