import { TestBed } from '@angular/core/testing';

import { MejoresService } from './mejores.service';

describe('MejoresService', () => {
  let service: MejoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MejoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
