import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BlocklyComponent } from './blockly/blockly.component';

import { AboutComponent } from './about/about.component';
import { HttpClient } from 'selenium-webdriver/http';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { OurProgressComponent } from './our-progress/our-progress.component';
import { AdminProgressComponent } from './admin-progress/admin-progress.component';
import { PostService } from './post.service';
import { FilestackModule } from '@filestack/angular';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxBlocklyModule } from 'ngx-blockly';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  //{ path: 'events', component: EventsComponent},
  { path: 'our-progress', component: OurProgressComponent},
  { path: 'login', component: LoginComponent},
  { path: 'intro', component: BlocklyComponent},
  //{ path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard] },
  { path: 'admin/progress', component: AdminProgressComponent, canActivate: [AuthenticationGuard]},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    AdminComponent,
    AdminNavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EventsComponent,
    AdminEventsComponent,
    OurProgressComponent,
    AdminProgressComponent,
    BlocklyComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilestackModule,
    NgbModule,
    NgxBlocklyModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthenticationService, AuthenticationGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
