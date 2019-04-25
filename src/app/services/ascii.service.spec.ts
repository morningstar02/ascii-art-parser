import { TestBed } from '@angular/core/testing';

import { AsciiService } from './ascii.service';

describe('AsciiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsciiService = TestBed.get(AsciiService);
    expect(service).toBeTruthy();
  });
});
