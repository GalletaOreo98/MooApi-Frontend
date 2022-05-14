import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
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
  {path: 'error', loadChildren: () => import('./error-page/error-page.module').then( m => m.ErrorPageModule)},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
