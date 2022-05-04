import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { GlobalchatServiceService } from '../services/globalchat-service.service';

@Component({
  selector: 'app-globalchat',
  templateUrl: './globalchat.component.html',
  styleUrls: ['./globalchat.component.css']
})
export class GlobalchatComponent implements OnInit {

  chat:String='';

  constructor(private globalChatService:GlobalchatServiceService, private router:Router, private authServicesService:AuthServicesService) { }

  ngOnInit(): void {
    this.globalChatService.getChat().subscribe({
      next: (res:any) => {
        this.chat = res.message;
      },
      error: (res:any) => {
        this.authServicesService.logOut();
        this.router.navigate(['login']);
      }
    })
  }

}
