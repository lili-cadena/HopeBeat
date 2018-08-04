import { TestBed, inject } from '@angular/core/testing';

import { ExperiencesService } from './experiences.service';

describe('ExperiencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperiencesService]
    });
  });

  it('should be created', inject([ExperiencesService], (service: ExperiencesService) => {
    expect(service).toBeTruthy();
  }));
});
