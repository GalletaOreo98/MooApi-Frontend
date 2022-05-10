import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalchatRoutingModule } from './globalchat-routing.module';
import { GlobalchatComponent } from './chat/globalchat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GlobalchatComponent
  ],
  imports: [
    CommonModule,
    GlobalchatRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class GlobalchatModule { }
