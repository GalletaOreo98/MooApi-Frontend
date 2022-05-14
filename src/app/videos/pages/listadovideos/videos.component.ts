import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVideosListElement } from '../../models/videos-interface';
import { VideoServiceService } from '../../services/video-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: [IVideosListElement] | undefined;

  constructor(private videoService:VideoServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.videoService.getVideos().subscribe(
      {
        next: (res) => {
          this.videos = res.result;
        }
      }
    );
  } 

}
