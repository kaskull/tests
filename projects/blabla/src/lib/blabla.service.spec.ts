import { TestBed } from '@angular/core/testing';

import { BlablaService } from './blabla.service';

describe('BlablaService', () => {
  let service: BlablaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlablaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
