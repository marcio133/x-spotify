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
  constructor(public bsModalRef: BsModalRef, private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getAlbums(this.artist.id).subscribe((res:any)=>{
      res.items = _.uniqBy(res.items, 'name');
      this.albums = res.items.slice(0, 5);

      console.log(res);
    },error=>{
      this.bsModalRef.hide();
    })
  }

}
