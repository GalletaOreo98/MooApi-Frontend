import { Component, OnInit } from '@angular/core';
import { faShieldCat, faFilm, faImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FrameServicesService } from './services/frame-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'admin-frontend';
  faShieldCat = faShieldCat;
  faFilm = faFilm;
  faImage = faImage;
  faUser = faUser;

  searchedFrame:string = '';
  userName:string = '';

  constructor( private frameService:FrameServicesService, private router:Router ) { }
  
  ngOnInit(): void {    
    var nick = localStorage.getItem('nombre') || '';
    if (!nick) {
      this.userName = '';
      return;
    }
    nick = nick.substring(0, 2)
    this.userName = nick;
  }

  getFrame(){
    this.frameService.getFrame(this.searchedFrame).subscribe(
      {
        next: () => {
          this.router.navigate(['frame', this.searchedFrame]);
        },
        error: () => {
          this.router.navigate(['error']);
        }
      }
    );
  } 

}
