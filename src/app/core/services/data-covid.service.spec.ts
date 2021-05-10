import { TestBed } from '@angular/core/testing';

import { DataCovidService } from './data-covid.service';

describe('DataCovidService', () => {
  let service: DataCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
