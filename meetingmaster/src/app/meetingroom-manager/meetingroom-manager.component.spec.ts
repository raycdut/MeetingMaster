import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingroomManagerComponent } from './meetingroom-manager.component';

describe('MeetingroomManagerComponent', () => {
  let component: MeetingroomManagerComponent;
  let fixture: ComponentFixture<MeetingroomManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingroomManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingroomManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
