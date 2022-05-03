import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FrameServicesService } from '../services/frame-services.service';

@Component({
  selector: 'app-search-frame',
  templateUrl: './search-frame.component.html',
  styleUrls: ['./search-frame.component.css']
})
export class SearchFrameComponent implements OnInit {

  searchedFrame:String = '';

  cardFrame = {
    caption: 'Titulo, Frame: 0/Total Frames',
    url:'',
  }

  

  constructor(private frameService:FrameServicesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.searchedFrame = this.route.snapshot.params['numeroFrame'];
    console.log('Me inicie con ruta frame ' + this.searchedFrame);
    this.getFrameOnInit();
    this.router.events.subscribe(
      { 
        next: (event:any) => {
          if(event instanceof NavigationEnd) {
            this.searchedFrame = this.route.snapshot.params['numeroFrame'];
            this.getFrameOnInit();
          }
        }
      }
    );
  }

  getFrame(){
    this.router.navigate(['frame', this.searchedFrame])
  }

  getFrameOnInit(){
    this.frameService.getFrame(this.searchedFrame).subscribe(
      {
        next: (res:any) => {
          this.cardFrame.caption = res.caption;
          this.cardFrame.url = res.url;     
        }
      }
    );
  }

}
