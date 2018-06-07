import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AlbumService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAlbumTracks(id) {
    let params = new HttpParams().set('limit', '50')
    return this.httpClient.get(`${this.baseUrl}v1/albums/${id}/tracks`, { params: params });
  }

}
