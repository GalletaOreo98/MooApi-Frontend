import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { SearchFrameComponent } from './search-frame/search-frame.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'frame/:numeroFrame', component: SearchFrameComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
