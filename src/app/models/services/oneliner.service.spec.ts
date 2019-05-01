import { TestBed } from '@angular/core/testing';

import { OnelinerService } from './oneliner.service';

describe('OnelinerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnelinerService = TestBed.get(OnelinerService);
    expect(service).toBeTruthy();
  });
});
