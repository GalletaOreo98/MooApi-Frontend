import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(private httpClient:HttpClient) { }

  getVideos() {
    return this.httpClient.get(`https://moo-api-facebook.herokuapp.com/api/videos`);
  }
}
