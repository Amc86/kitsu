import { TestBed } from '@angular/core/testing';

import { MaspopService } from './maspop.service';

describe('MaspopService', () => {
  let service: MaspopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaspopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
