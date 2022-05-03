import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrameServicesService } from '../services/frame-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  
  searchedFrame:String = '';

  cardFrame = {
    caption: 'Titulo, Frame: 0/Total Frames',
    url:'',
  }

  constructor( private frameService:FrameServicesService, private router:Router ) {}

  ngOnInit(): void {
    this.getActualFrame();
  }

  getActualFrame() {
    this.frameService.getActualFrame().subscribe(
      {
        next: (res:any) => {
          this.cardFrame.caption = res.caption;
          this.cardFrame.url = res.url;
        }
      }
    );
  }
  

  getFrame(){  
    this.router.navigate(['frame', this.searchedFrame]); 
  } 
}
