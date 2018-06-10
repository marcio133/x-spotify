import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ArtistService } from '../_services/artist.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-artist-modal',
  templateUrl: './artist-modal.component.html',
  styleUrls: ['./artist-modal.component.scss']
})
export class ArtistModalComponent implements OnInit {
  albums: any;
  artist: any;
  isSaved: boolean;
  constructor(public bsModalRef: BsModalRef, private artistService: ArtistService) { }

  ngOnInit() {
    console.log(this.artist);
    this.verifyArtistSaved();
    this.artistService.getAlbums(this.artist.id).subscribe((res:any)=>{
      res.items = _.uniqBy(res.items, 'name');
      this.albums = res.items.slice(0, 5);
    },error=>{
      this.bsModalRef.hide();
    })
  }

  verifyArtistSaved() {
    this.artistService.verifySaved(this.artist.id).subscribe(res=>{
      this.isSaved = res[0] || false;
    }) 
  }

  saveArtist(){
    if (this.isSaved) {
      this.isSaved = !this.isSaved;
      this.artistService.unfollow(this.artist.id).subscribe(res=>{
        // console.log(res);
      })
    } else{      
      this.isSaved = !this.isSaved;
      this.artistService.saveArtist(this.artist.id).subscribe(res=>{
      })
    }
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
