import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlbumModalComponent } from '../album-modal/album-modal.component';
import { AlbumService } from '../_services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: any;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openAlbumModal() {
    const initialState = {
      album: this.album
    };
    this.bsModalRef = this.modalService.show(AlbumModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
