import { Component, Injectable } from '@angular/core';
import { faShieldCat, faFilm, faImage } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { FrameServicesService } from './services/frame-services.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-frontend';
  faShieldCat = faShieldCat;
  faFilm = faFilm;
  faImage = faImage;

  searchedFrame:String = '';



  constructor( private frameService:FrameServicesService, private router:Router ) { }

  getFrame(){
    this.frameService.getFrame(this.searchedFrame).subscribe(
      {
        next: (res:any) => {
          this.router.navigate(['frame', this.searchedFrame]);
        },
        error: (res:any) => {
          this.router.navigate(['error']);
        }
      }
    );
  } 

  goToVideos(){
    this.router.navigate(['videos'])
  }
}
