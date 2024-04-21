import { TestBed } from '@angular/core/testing';

import { EmpFServiceService } from './emp-fservice.service';

describe('EmpFServiceService', () => {
  let service: EmpFServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpFServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
