import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalchatServiceService {

  constructor(private httpClient:HttpClient) { }

  getChat() {
    return this.httpClient.get(`http://localhost:4000/api/chat`);
  }

}
