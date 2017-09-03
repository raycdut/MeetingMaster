import {  NgModule} from '@angular/core';
import {  LocationStrategy,HashLocationStrategy,CommonModule} from '@angular/common';
import {  MeetingroomComponent} from './meetingroom/meetingroom.component';
import {  RouterModule,  Routes, ActivatedRoute} from '@angular/router';
import { MeetingroomCurrentComponent } from './meetingroom-current/meetingroom-current.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'currentroom/2',
    pathMatch: 'full'
  },
  {
    path: 'currentroom/:id',
    component: MeetingroomCurrentComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MeetingroomComponent, MeetingroomCurrentComponent]
})
export class MeetingroomModule {}
