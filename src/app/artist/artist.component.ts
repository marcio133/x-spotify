import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ArtistModalComponent } from '../artist-modal/artist-modal.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @Input() artist: any;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

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

  openArtistModal() {
    const initialState = {
      artist: this.artist
    };
    this.bsModalRef = this.modalService.show(ArtistModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
