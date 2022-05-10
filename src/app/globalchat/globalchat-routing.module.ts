import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalchatComponent } from './chat/globalchat.component';

const routes: Routes = [
  { path: '', component: GlobalchatComponent},
  { path: '**', redirectTo: 'globalchat'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalchatRoutingModule { }
