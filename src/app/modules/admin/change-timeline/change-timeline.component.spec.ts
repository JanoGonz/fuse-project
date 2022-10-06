import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTimelineComponent } from './change-timeline.component';

describe('ChangeTimelineComponent', () => {
  let component: ChangeTimelineComponent;
  let fixture: ComponentFixture<ChangeTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
