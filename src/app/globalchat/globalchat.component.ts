import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { GlobalchatServiceService } from '../services/globalchat-service.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-globalchat',
  templateUrl: './globalchat.component.html',
  styleUrls: ['./globalchat.component.css']
})
export class GlobalchatComponent implements OnInit {

  chat:Array<{
    user:String, 
    comentario:String, 
  }> | undefined;

  comentario:String='';

  constructor(private globalChatService:GlobalchatServiceService, private router:Router,
    private authServicesService:AuthServicesService, private globalchatService:GlobalchatServiceService,
    private websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.onSayHello().subscribe({
      next: (res:any) => {
        console.log('onSayHello activated');
        this.globalChatService.getChat().subscribe({
          next: (res:any) => {            
            this.chat = res.message;
          },
          error: (res:any) => {
            this.authServicesService.logOut();
            this.router.navigate(['login']);
          }
        });
      }
    });

    this.globalChatService.getChat().subscribe({
      next: (res:any) => {
        this.chat = res.message;
      },
      error: (res:any) => {
        this.authServicesService.logOut();
        this.router.navigate(['login']);
      }
    });
  }

  postChat() {
    console.log(this.comentario);
    this.globalchatService.postChat(this.comentario).subscribe({
      next: (res:any) => {
        this.sayHello();
        this.comentario='';
      },
      error: (res:any) => {
        console.log(res);
      }
    })
  }

  sayHello() {
    this.websocketService.sayHello();
  }

}
