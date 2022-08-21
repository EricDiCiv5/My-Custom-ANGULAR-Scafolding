import { TestBed } from '@angular/core/testing';

import { TableInfoGuard } from './table-info.guard';

describe('TableInfoGuard', () => {
  let guard: TableInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TableInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
