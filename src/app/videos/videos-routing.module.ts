import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './pages/listadovideos/videos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: VideosComponent},
      { path: '**', redirectTo: 'listado'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
