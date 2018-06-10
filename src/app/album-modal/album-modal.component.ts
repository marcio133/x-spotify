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
  user: any;
  isSaved: boolean = false;
  constructor(public bsModalRef: BsModalRef, private albumService: AlbumService) { }

  ngOnInit() {
    this.verifyAlbumSaved();
    this.albumService.getAlbumTracks(this.album.id).subscribe((res:any)=>{
      console.log(res);
      this.tracks = res.items;
    })
  }

  verifyAlbumSaved() {
    this.albumService.verifyIsSaved(this.album.id).subscribe(res=>{
      this.isSaved = res[0] || false;
      console.log(this.isSaved, `saved`);
    }) 
  }

  saveAlbum(){
    if (this.isSaved) {
      this.isSaved = !this.isSaved;
      this.albumService.delete(this.album.id).subscribe(res=>{
        // console.log(res);
      })
    } else{      
      this.isSaved = !this.isSaved;
      this.albumService.save({ids: [this.album.id]}).subscribe(res=>{
      })
    }
  }

}
