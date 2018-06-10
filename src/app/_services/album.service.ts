import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AlbumService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAlbumTracks(id) {
    let params = new HttpParams().set('limit', '48')
    return this.httpClient.get(`${this.baseUrl}v1/albums/${id}/tracks`, { params: params });
  }

  getNewReleases() {
    let params = new HttpParams().set('limit', '48')
    return this.httpClient.get(`${this.baseUrl}v1/browse/new-releases`, { params: params });
  }

  verifyIsSaved(albumId) {
    let params = new HttpParams().set('ids', albumId)
    return this.httpClient.get(`${this.baseUrl}v1/me/albums/contains`, { params: params });
  }

  save(data) {
    return this.httpClient.put(`${this.baseUrl}v1/me/albums/`, data);
  }

  delete(albumId) {
    let params = new HttpParams().set('ids', albumId)
    return this.httpClient.delete(`${this.baseUrl}v1/me/albums/`, { params: params });
  }

}
