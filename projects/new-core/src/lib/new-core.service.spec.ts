import { TestBed } from '@angular/core/testing';

import { NewCoreService } from './new-core.service';

describe('NewCoreService', () => {
  let service: NewCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
