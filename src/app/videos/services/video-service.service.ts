import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVideosList } from '../models/videos-interface';


@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(private httpClient:HttpClient) { }

  getVideos() {
    return this.httpClient.get<IVideosList>(`https://moo-api-facebook.herokuapp.com/api/videos`);
  }
}
