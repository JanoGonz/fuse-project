import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettypesComponent } from './pettypes.component';

describe('PettypesComponent', () => {
  let component: PettypesComponent;
  let fixture: ComponentFixture<PettypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
