import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  Router,
  RouterModule,
  Routes
} from '@angular/router';

import {
  AppComponent
} from './app.component';
import {
  HomeComponent
} from './home/home.component';
import {
  AboutComponent
} from './about/about.component';
import {
  ContactComponent
} from './contact/contact.component';
import {
  LoginComponent
} from './login/login.component';
import {
  MeetingroomComponent
} from './meetingroom/meetingroom/meetingroom.component';

import {
  routes as meetingroomRoutes,
  MeetingroomModule
} from './meetingroom/meetingroom.module';

import { MmNavigationbarComponent } from './Share/mm-navigationbar/mm-navigationbar.component';
const routes: Routes = [
  //basic routes
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },

  //nested 
  {
    path: "meetingroom",
    component: MeetingroomComponent,
    children: meetingroomRoutes
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    MmNavigationbarComponent,
  ],
  imports: [
    BrowserModule,
    
    //Bootstrap Start

    //Bootstrap End

    //route
    RouterModule.forRoot(routes),
    //child module
    MeetingroomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
