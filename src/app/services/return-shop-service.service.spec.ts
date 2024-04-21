import { TestBed } from '@angular/core/testing';

import { ReturnShopServiceService } from './return-shop-service.service';

describe('ReturnShopServiceService', () => {
  let service: ReturnShopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnShopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
