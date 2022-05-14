import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IGalleryPageElement } from 'src/app/models';
import { FrameServicesService } from 'src/app/services/frame-services.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  
  collectionSize = 1000;
  page = 1;

  obs:any;

  frames: [IGalleryPageElement] | undefined;

  constructor(private frameService:FrameServicesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.page = this.route.snapshot.params['numeroPagina'];

    this.frameService.getGallerySize().subscribe({
      next: (res) => {
        this.collectionSize = res.size;
      }
    });

    this.frameService.getGalleryPage(`${this.page}`).subscribe({
      next: (res) => {
        this.frames = res.page;
      }
    });

    this.obs = this.router.events.subscribe(
      { 
        next: (event:any) => {
          if(event instanceof NavigationEnd) {
            this.page = this.route.snapshot.params['numeroPagina'];
            this.frameService.getGalleryPage(`${this.page}`).subscribe({
              next: (res) => {
                this.frames = res.page;
              }
            });
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }


  selectPage(page: any) {
    this.router.navigate(['frame/gallery', page])
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

}
