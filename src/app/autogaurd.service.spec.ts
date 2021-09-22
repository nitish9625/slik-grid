import { TestBed } from '@angular/core/testing';

import { AutogaurdService } from './autogaurd.service';

describe('AutogaurdService', () => {
  let service: AutogaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutogaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
