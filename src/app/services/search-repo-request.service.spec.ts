import { TestBed } from '@angular/core/testing';

import { SearchRepoRequestService } from './search-repo-request.service';

describe('SearchRepoRequestService', () => {
  let service: SearchRepoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRepoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
