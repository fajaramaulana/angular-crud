import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBensinComponent } from './add-bensin.component';

describe('AddBensinComponent', () => {
  let component: AddBensinComponent;
  let fixture: ComponentFixture<AddBensinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBensinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBensinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
