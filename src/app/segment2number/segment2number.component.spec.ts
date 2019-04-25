import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Segment2numberComponent } from './segment2number.component';

describe('Segment2numberComponent', () => {
  let component: Segment2numberComponent;
  let fixture: ComponentFixture<Segment2numberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Segment2numberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Segment2numberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
