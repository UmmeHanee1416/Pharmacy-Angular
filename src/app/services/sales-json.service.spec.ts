import { TestBed } from '@angular/core/testing';

import { SalesJsonService } from './sales-json.service';

describe('SalesJsonService', () => {
  let service: SalesJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
