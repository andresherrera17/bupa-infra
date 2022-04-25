import { TestBed } from '@angular/core/testing';

import { UploaddocumentsService } from './uploaddocuments.service';

describe('UploaddocumentsService', () => {
  let service: UploaddocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaddocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
