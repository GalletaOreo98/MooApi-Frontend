import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { SearchFrameComponent } from './search-frame/search-frame.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { VideosComponent } from './videos/videos.component';
//import { RouterModule, Routes } from '@angular/router';

/* const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'frame', component: SearchFrameComponent}
]; */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFrameComponent,
    ErrorPageComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
