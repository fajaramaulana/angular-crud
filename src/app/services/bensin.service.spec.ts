import { TestBed } from '@angular/core/testing';

import { BensinService } from './bensin.service';

describe('BensinService', () => {
  let service: BensinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BensinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
