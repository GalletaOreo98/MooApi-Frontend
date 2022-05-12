import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFrameRoutingModule } from './search-frame-routing.module';
import { SearchFrameComponent } from './pages/search-frame/search-frame.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap' ;




@NgModule({
  declarations: [
    SearchFrameComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    SearchFrameRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ]
})
export class SearchFrameModule { }
