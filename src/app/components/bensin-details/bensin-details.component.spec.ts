import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BensinDetailsComponent } from './bensin-details.component';

describe('BensinDetailsComponent', () => {
  let component: BensinDetailsComponent;
  let fixture: ComponentFixture<BensinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BensinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BensinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
