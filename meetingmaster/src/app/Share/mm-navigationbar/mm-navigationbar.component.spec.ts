import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmNavigationbarComponent } from './mm-navigationbar.component';

describe('MmNavigationbarComponent', () => {
  let component: MmNavigationbarComponent;
  let fixture: ComponentFixture<MmNavigationbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmNavigationbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmNavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
