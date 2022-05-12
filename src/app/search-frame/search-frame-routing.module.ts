import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFrameComponent } from './pages/search-frame/search-frame.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: ':numeroFrame', component: SearchFrameComponent},
      { path: '**', redirectTo: ''}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchFrameRoutingModule { }
