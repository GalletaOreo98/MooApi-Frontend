import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalchatRoutingModule } from './globalchat-routing.module';
import { GlobalchatComponent, NgbdModalContent } from './pages/chat/globalchat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GlobalchatComponent,
    NgbdModalContent
  ],
  imports: [
    CommonModule,
    GlobalchatRoutingModule,
    NgbModule,
    FormsModule,
  ]
})
export class GlobalchatModule { }
