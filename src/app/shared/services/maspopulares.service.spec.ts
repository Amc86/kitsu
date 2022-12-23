import { TestBed } from '@angular/core/testing';

import { MaspopularesService } from './maspopulares.service';

describe('MaspopularesService', () => {
  let service: MaspopularesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaspopularesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
