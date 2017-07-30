import { TestBed, inject } from '@angular/core/testing';

import { ProductFetchingService } from './product-fetching.service';

describe('ProductFetchingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFetchingService]
    });
  });

  it('should be created', inject([ProductFetchingService], (service: ProductFetchingService) => {
    expect(service).toBeTruthy();
  }));
});
