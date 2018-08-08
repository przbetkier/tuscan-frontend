import { TestBed, inject } from '@angular/core/testing';

import { TuscanService } from './tuscan.service';

describe('TuscanServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuscanService]
    });
  });

  it('should be created', inject([TuscanService], (service: TuscanService) => {
    expect(service).toBeTruthy();
  }));
});
