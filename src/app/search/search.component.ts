
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  type: string = 'artist';
  searchString: string = '';
  @Output() result = new EventEmitter<any>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.searchString, this.type).subscribe((res:any) => {
      console.log(res);
      this.result.emit({results: res.albums.items, type: this.type});
    })
  }

}