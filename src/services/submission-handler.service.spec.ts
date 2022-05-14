import { TestBed } from '@angular/core/testing';

import { SubmissionHandlerService } from './submission-handler.service';

describe('SubmissionHandlerService', () => {
  let service: SubmissionHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
