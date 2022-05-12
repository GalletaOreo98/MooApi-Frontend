import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFrameRoutingModule } from './search-frame-routing.module';
import { SearchFrameComponent } from './pages/search-frame/search-frame.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchFrameComponent
  ],
  imports: [
    CommonModule,
    SearchFrameRoutingModule,
    FormsModule
  ]
})
export class SearchFrameModule { }