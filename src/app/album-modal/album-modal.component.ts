import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../_services/album.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent implements OnInit {
  album: any;
  tracks: any;
  constructor(public bsModalRef: BsModalRef, private albumService: AlbumService) { }

  ngOnInit() {
    console.log(this.album);
    
    this.albumService.getAlbumTracks(this.album.id).subscribe((res:any)=>{
      console.log(res);
      this.tracks = res.items;
    })
  }

}
