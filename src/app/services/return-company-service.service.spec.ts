import { TestBed } from '@angular/core/testing';

import { ReturnCompanyServiceService } from './return-company-service.service';

describe('ReturnCompanyServiceService', () => {
  let service: ReturnCompanyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnCompanyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
