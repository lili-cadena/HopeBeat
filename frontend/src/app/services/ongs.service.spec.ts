import { TestBed, inject } from '@angular/core/testing';

import { OngsService } from './ongs.service';

describe('OngsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OngsService]
    });
  });

  it('should be created', inject([OngsService], (service: OngsService) => {
    expect(service).toBeTruthy();
  }));
});
