import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  MeetingroomComponent
} from './meetingroom/meetingroom.component';
import {
  RouterModule,
  Routes
} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'meetingroom',
    pathMatch: 'full'
  },
  {
    path: 'meetingroom',
    component: MeetingroomComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MeetingroomComponent]
})
export class MeetingroomModule {}
