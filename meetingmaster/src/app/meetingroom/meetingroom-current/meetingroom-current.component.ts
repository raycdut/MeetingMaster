import { MeetingRoom } from '../../Models/MeetingRoom';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-meetingroom-current',
  templateUrl: './meetingroom-current.component.html',
  styleUrls: ['./meetingroom-current.component.css']
})
export class MeetingroomCurrentComponent implements OnInit {
  id: string;
  currentMeetingRoom: MeetingRoom;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    });
    this.currentMeetingRoom = new MeetingRoom();
    this.currentMeetingRoom.id = "12345";
    this.currentMeetingRoom.bookedById = "315313";
    this.currentMeetingRoom.bookedByName = "raycdut";
    this.currentMeetingRoom.isConfidential =false;
    this.currentMeetingRoom.meetingDescription = "Meeting Room Project disussion";
    this.currentMeetingRoom.startTime = new Date(2017,8,15,13,0,0,0);
    this.currentMeetingRoom.endTime = new Date(2017,8,15,14,0,0,0);

  }

  ngOnInit() {}

}
