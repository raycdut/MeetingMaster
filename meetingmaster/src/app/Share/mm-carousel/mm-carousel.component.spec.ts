import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmCarouselComponent } from './mm-carousel.component';

describe('MmCarouselComponent', () => {
  let component: MmCarouselComponent;
  let fixture: ComponentFixture<MmCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
