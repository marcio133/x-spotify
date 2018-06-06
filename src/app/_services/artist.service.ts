import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAlbums(id) {
    return this.httpClient.get(`${this.baseUrl}v1/artists/${id}/albums`);
  }
}
