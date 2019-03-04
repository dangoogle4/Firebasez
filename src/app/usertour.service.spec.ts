import { TestBed } from '@angular/core/testing';

import { UsertourService } from './usertour.service';

describe('UsertourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsertourService = TestBed.get(UsertourService);
    expect(service).toBeTruthy();
  });
});
