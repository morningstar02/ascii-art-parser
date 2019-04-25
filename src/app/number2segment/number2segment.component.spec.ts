import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Number2segmentComponent } from './number2segment.component';

describe('Number2segmentComponent', () => {
  let component: Number2segmentComponent;
  let fixture: ComponentFixture<Number2segmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Number2segmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Number2segmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
