import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoServiceService } from '../../services/video-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos:Array<{
      idVideo:String, 
      numeroVideo:String, 
      url:String, 
      nombre:String
    }> | undefined;

  constructor(private videoService:VideoServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.videoService.getVideos().subscribe(
      {
        next: (res:any) => {
          this.videos = res.result;
          console.log(this.videos);
          
        }
      }
    );
  } 

}
