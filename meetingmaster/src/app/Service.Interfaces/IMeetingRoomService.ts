import { MeetingRoom } from '../Models/MeetingRoom';
export interface IMeetingRoomService{
    addMeetingRoom(newMeetingRoom: MeetingRoom): void;
}