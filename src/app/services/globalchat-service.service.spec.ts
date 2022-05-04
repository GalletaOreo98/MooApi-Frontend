import { TestBed } from '@angular/core/testing';

import { GlobalchatServiceService } from './globalchat-service.service';

describe('GlobalchatServiceService', () => {
  let service: GlobalchatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalchatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
