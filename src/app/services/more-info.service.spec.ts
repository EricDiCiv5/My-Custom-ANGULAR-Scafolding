import { TestBed } from '@angular/core/testing';

import { MoreInfoService } from './more-info.service';

describe('MoreInfoService', () => {
  let service: MoreInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
