import { TestBed } from '@angular/core/testing';

import { SlickgridService } from './slickgrid.service';

describe('SlickgridService', () => {
  let service: SlickgridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlickgridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
