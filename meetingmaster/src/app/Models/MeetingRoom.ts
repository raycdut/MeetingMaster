import {
  uuid
} from '../Util/uuid';
export class MeetingRoom {
  id: string;
  roomNumber: string;
  roomName: string;
  startTime: Date;
  endTime: Date;
  bookedById: string;
  bookedByName: string;
  isConfidential: boolean;
  meetingDescription: string;
  companyId: string;

  constructor(obj ? : any) {
    this.id = obj && obj.id || uuid();
    this.roomNumber = obj && obj.roomNumber || null;
    this.roomName = obj && obj.roomName || null;
    this.startTime = obj && obj.startTime || new Date();
    this.endTime = obj && obj.endTime || new Date();
    this.bookedById = obj && obj.bookedById || null;
    this.bookedByName = obj && obj.bookedByName || null;
    this.isConfidential = obj && obj.isConfidential || false;
    this.meetingDescription = obj && obj.meetingDescription || null;
    this.companyId = obj && obj.companyId || null;
  }

}
