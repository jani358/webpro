import { TestBed } from '@angular/core/testing';

import { DoctotableService } from './doctotable.service';

describe('DoctotableService', () => {
  let service: DoctotableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctotableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
