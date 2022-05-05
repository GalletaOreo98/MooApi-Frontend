import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalchatServiceService {

  constructor(private httpClient:HttpClient) { }

  getChat() {
    return this.httpClient.get(`https://moo-api-facebook.herokuapp.com/api/chat`);
  }

}
