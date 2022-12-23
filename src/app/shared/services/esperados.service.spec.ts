import { TestBed } from '@angular/core/testing';

import { EsperadosService } from './esperados.service';

describe('EsperadosService', () => {
  let service: EsperadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsperadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
