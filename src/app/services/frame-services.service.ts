import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFrame, IActualFrame, IGalleryPage, IGallerySize } from "../models";

@Injectable({
  providedIn: 'root'
})
export class FrameServicesService {

  constructor(private httpClient:HttpClient) {}

  getActualFrame() {
    return this.httpClient.get<IActualFrame>(`https://moo-api-facebook.herokuapp.com/api/frame`);
  }

  getFrame(numeroFrame:String) {
    return this.httpClient.get<IFrame>(`https://moo-api-facebook.herokuapp.com/api/frame/${numeroFrame}`);
  }

  getGallerySize() {
    return this.httpClient.get<IGallerySize>('https://moo-api-facebook.herokuapp.com/api/frame/size/gallery');
  }

  getGalleryPage(numeroPage:String) {
    return this.httpClient.get<IGalleryPage>(`https://moo-api-facebook.herokuapp.com/api/frame/gallery/${numeroPage}`);
  }

}
