import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GlobalchatComponent } from './globalchat/globalchat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SearchFrameComponent } from './search-frame/search-frame.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'frame/:numeroFrame', component: SearchFrameComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},  
  {path: 'globalchat', component: GlobalchatComponent, canActivate: [AuthGuard]},  
  {path: 'error', component: ErrorPageComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
