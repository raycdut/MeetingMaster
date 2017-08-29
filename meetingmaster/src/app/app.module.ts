import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetingroomComponent } from './meetingroom/meetingroom.component';
import { MeetingroomBookingComponent } from './meetingroom-booking/meetingroom-booking.component';
import { MeetingroomManagerComponent } from './meetingroom-manager/meetingroom-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingroomComponent,
    MeetingroomBookingComponent,
    MeetingroomManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
