import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  search(token, type) {
    let params = new HttpParams().set('q', token)
                                .set('type', type)
    return this.httpClient.get(`${this.baseUrl}v1/search`, { params: params });
  }
}