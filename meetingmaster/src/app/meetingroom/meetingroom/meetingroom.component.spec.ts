import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingroomComponent } from './meetingroom.component';

describe('MeetingroomComponent', () => {
  let component: MeetingroomComponent;
  let fixture: ComponentFixture<MeetingroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
