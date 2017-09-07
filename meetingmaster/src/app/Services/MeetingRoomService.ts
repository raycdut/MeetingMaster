import {
  Injectable
} from '@angular/core';
import {

  MeetingRoom
} from '../Models/MeetingRoom';
import {
  BehaviorSubject,
  Subject
} from 'rxjs/Rx';

import {
  IMeetingRoomService
} from '../Service.Interfaces/IMeetingRoomService';

@Injectable()
export class MeetingRoomService implements IMeetingRoomService {
  currentMeetingRoom: Subject < MeetingRoom > = new BehaviorSubject < MeetingRoom > (null);
  public addMeetingRoom(newMeetingRoom: MeetingRoom): void {
    this.currentMeetingRoom.next(newMeetingRoom);
  }
}


export const meetingRoomInjectables: Array < any > = [MeetingRoomService];
