import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingroomCurrentComponent } from './meetingroom-current.component';

describe('MeetingroomCurrentComponent', () => {
  let component: MeetingroomCurrentComponent;
  let fixture: ComponentFixture<MeetingroomCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingroomCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingroomCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
