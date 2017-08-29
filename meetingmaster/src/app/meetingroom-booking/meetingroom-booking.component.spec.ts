import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingroomBookingComponent } from './meetingroom-booking.component';

describe('MeetingroomBookingComponent', () => {
  let component: MeetingroomBookingComponent;
  let fixture: ComponentFixture<MeetingroomBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingroomBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingroomBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
