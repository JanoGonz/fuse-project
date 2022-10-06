import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpetdialogComponent } from './addpetdialog.component';

describe('AddpetdialogComponent', () => {
  let component: AddpetdialogComponent;
  let fixture: ComponentFixture<AddpetdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpetdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpetdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
