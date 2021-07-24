import { TestBed } from '@angular/core/testing';

import { SearchUserRequestService } from './search-user-request.service';

describe('SearchUserRequestService', () => {
  let service: SearchUserRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchUserRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
