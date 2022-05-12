import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FrameServicesService } from '../../../services/frame-services.service';

@Component({
  selector: 'app-search-frame',
  templateUrl: './search-frame.component.html',
  styleUrls: ['./search-frame.component.css']
})
export class SearchFrameComponent implements OnInit, OnDestroy {

  searchedFrame:String = '';

  cardFrame = {
    caption: 'Titulo, Frame: 0/Total Frames',
    url:'',
  }

  obs:any;

  constructor(private frameService:FrameServicesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.searchedFrame = this.route.snapshot.params['numeroFrame'];
    console.log('Me inicie con ruta frame ' + this.searchedFrame);
    this.getFrameOnInit();
    this.obs = this.router.events.subscribe(
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

  ngOnDestroy(): void {
    this.obs.unsubscribe();
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
        },
        error: (res:any) => {
          this.router.navigate(['error']);
        }
      }
    );
  }


}
