import { TestBed } from '@angular/core/testing';

import { HotSearchProductsService } from './hot-search-products.service';

describe('HotSearchProductsService', () => {
  let service: HotSearchProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotSearchProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
