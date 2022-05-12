import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SearchFrameComponent } from './pages/search-frame/search-frame.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: ':numeroFrame', component: SearchFrameComponent},
      { path: 'gallery/:numeroPagina', component: GalleryComponent},
      { path: '**', redirectTo: ''}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchFrameRoutingModule { }
