import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @Input() artist: any;
  constructor() { }

  ngOnInit() {
  }

  artistPopularity() {
    if (this.artist.popularity>80) {
      return 'Hot';
    } else if(this.artist.popularity>60 && this.artist.popularity<79){
      return 'Cool';
    }else if(this.artist.popularity>30 && this.artist.popularity<59){
      return 'Regular';
    }else{
      return 'Underground';
    }
  }

}
