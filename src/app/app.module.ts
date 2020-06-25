import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OurProgressComponent } from './our-progress/our-progress.component';
import { FilestackModule } from '@filestack/angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OurStoriesComponent } from './our-stories/our-stories.component';
import { OurStoriesDetailComponent } from './our-stories-detail/our-stories-detail.component';
import { FeedComponent } from './feed/feed.component';




const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'our-progress', component: OurProgressComponent},
  {path: 'our-stories', component: OurStoriesComponent},
  {path: 'our-stories/:slug', component: OurStoriesDetailComponent},
  {path: '**', redirectTo: ''},
  {path: 'rss', component: FeedComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    OurProgressComponent,
    OurStoriesComponent,
    OurStoriesDetailComponent,
    FeedComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilestackModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }