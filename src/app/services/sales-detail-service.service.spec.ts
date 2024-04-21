import { TestBed } from '@angular/core/testing';

import { SalesDetailServiceService } from './sales-detail-service.service';

describe('SalesDetailServiceService', () => {
  let service: SalesDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
