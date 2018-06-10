import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ArtistService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAlbums(id) {
    return this.httpClient.get(`${this.baseUrl}v1/artists/${id}/albums`);
  }


  verifySaved(artistId) {
    let params = new HttpParams().set('ids', artistId)
                                 .set('type', 'artist')
    return this.httpClient.get(`${this.baseUrl}v1/me/following/contains`, { params: params });
  }

  unfollow(artistId) {
    let params = new HttpParams().set('ids', artistId)
                                 .set('type', 'artist')
    return this.httpClient.delete(`${this.baseUrl}v1/me/following/contains`, { params: params });
  }

  saveArtist(id) {
    let params = new HttpParams().set('type', 'artist')
    var data = {
      type: 'artist',
      ids : [id]
    }
    return this.httpClient.put(`${this.baseUrl}v1/me/following/`, data, {params: params});
  }
}
