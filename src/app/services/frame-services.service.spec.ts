import { TestBed } from '@angular/core/testing';

import { FrameServicesService } from './frame-services.service';

describe('FrameServicesService', () => {
  let service: FrameServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
