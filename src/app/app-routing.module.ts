import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'frame', loadChildren: () => import('./search-frame/search-frame.module').then( m => m.SearchFrameModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
  {path: 'videos', loadChildren: () => import('./videos/videos.module').then( m => m.VideosModule)},
  {
    path: 'globalchat', loadChildren: () => import('./globalchat/globalchat.module').then( m => m.GlobalchatModule),
    canActivate: [AuthGuard] 
  },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
