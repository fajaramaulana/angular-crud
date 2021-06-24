import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BensinListComponent } from './bensin-list.component';

describe('BensinListComponent', () => {
  let component: BensinListComponent;
  let fixture: ComponentFixture<BensinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BensinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BensinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
