
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../_services/search.service';
import { AlbumService } from '../_services/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  type: string = 'artist';
  searchString: string = '';
  @Output() result = new EventEmitter<any>();
  @Output() loading = new EventEmitter<any>();

  constructor(private searchService: SearchService, private albumService: AlbumService) { }

  ngOnInit() {
    this.getNewReleases();
  }

  search() {
    if (this.searchString == '') {
      this.getNewReleases();
    }else{
      this.loading.emit(true);
      this.searchService.search(this.searchString, this.type).subscribe((res:any) => {
        console.log(res);
        this.result.emit({results: res[`${this.type}s`].items, type: this.type});
        this.loading.emit(false);
      }, error=>{
        this.loading.emit(false);
      })
    }
  }

  getNewReleases() {
    this.loading.emit(true);
    this.albumService.getNewReleases().subscribe(res=>{
      console.log(res);
      this.result.emit({results: res['albums'].items, type: 'newAlbums'});
      this.loading.emit(false);
    }, error=>{
      this.loading.emit(false);
    })
  }

}