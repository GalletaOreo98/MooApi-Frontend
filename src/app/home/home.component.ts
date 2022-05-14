import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrameServicesService } from '../services/frame-services.service';
import { AuthServicesService } from "../services/auth-services.service";
import { AppComponent } from '../app.component';
import { WebsocketService } from '../services/websocket.service';

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

  constructor( private frameService:FrameServicesService, private router:Router, 
    public authServicesService:AuthServicesService, private appComponent:AppComponent,
    private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.getActualFrame();
    this.websocketService.onSayHello().subscribe({
      next: (res:any) => {
        console.log(res);
      }
    })
  }

  getActualFrame() {
    this.frameService.getActualFrame().subscribe(
      {
        next: (res) => {
          this.cardFrame.caption = res.caption;
          this.cardFrame.url = res.url;
        }
      }
    );
  }
  
  sayHello() {
    console.log('I said hello to the server');
    this.websocketService.sayHello();
  }

  getFrame(){  
    this.router.navigate(['frame', this.searchedFrame]); 
  } 

  sa(){
    this.appComponent.ngOnInit();    
  }
}
