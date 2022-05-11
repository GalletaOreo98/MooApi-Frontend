import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthServicesService } from '../../services/auth-services.service';
import { GlobalchatServiceService } from '../../services/globalchat-service.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Usuarios activos</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <ul>
        <li *ngFor="let user of users">{{user.nombre}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent {
  
  @Input() users:any;

  constructor(public activeModal: NgbActiveModal) {}
}

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
    private websocketService: WebsocketService, private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.websocketService.newUser();

    this.websocketService.onSayHello().subscribe({
      next: () => {
        console.log('onSayHello activated');
        this.globalChatService.getChat().subscribe({
          next: (res:any) => {            
            this.chat = res.message;
          },
          error: (res:any) => {
            localStorage.removeItem('informado_del_global_chat')
            this.authServicesService.logOut();
            this.router.navigate(['auth/login']);
          }
        });
      }
    });

    this.globalChatService.getChat().subscribe({
      next: (res:any) => {
        this.chat = res.message;
        if (!localStorage.getItem('informado_del_global_chat')) {
          this.show = true;
        }
        setTimeout(() => this.show = false, 15000);
      },
      error: (res:any) => {        
        this.authServicesService.logOut();
        localStorage.removeItem('informado_del_global_chat')
        this.router.navigate(['auth/login']);
      }
    });

  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    this.websocketService.verUsuariosConectados((data:Array<any>)=>{
      modalRef.componentInstance.users = data;
      console.log(modalRef.componentInstance.users);
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

  close() {
    this.show = false;
    localStorage.setItem('informado_del_global_chat', 'yes');
  }

}
