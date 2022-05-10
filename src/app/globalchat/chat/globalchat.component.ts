import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../../services/auth-services.service';
import { GlobalchatServiceService } from '../../services/globalchat-service.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-globalchat',
  templateUrl: './globalchat.component.html',
  styleUrls: ['./globalchat.component.css']
})
export class GlobalchatComponent implements OnInit {

  show=false;

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
            localStorage.removeItem('informado_del_global_chat')
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
        localStorage.removeItem('informado_del_global_chat')
        this.router.navigate(['login']);
      }
    });

    if (!localStorage.getItem('informado_del_global_chat')) {
      this.show = true;
    }
    setTimeout(() => this.show = false, 15000);
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

  close() {
    this.show = false;
    localStorage.setItem('informado_del_global_chat', 'yes');
  }

}
