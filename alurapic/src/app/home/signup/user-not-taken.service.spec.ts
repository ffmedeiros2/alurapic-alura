/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserNotTakenService } from './user-not-taken.service';

describe('Service: UserNotTaken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotTakenService]
    });
  });

  it('should ...', inject([UserNotTakenService], (service: UserNotTakenService) => {
    expect(service).toBeTruthy();
  }));
});
