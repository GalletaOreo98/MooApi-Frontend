import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrameServicesService } from 'src/app/services/frame-services.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  numeroPagina:String = '';

  constructor(private frameService:FrameServicesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.params['numeroFrame'];
  }

}
