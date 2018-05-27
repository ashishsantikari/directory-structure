/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectoryListService } from './directoryList.service';

describe('Service: File', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectoryListService]
    });
  });

  it('should ...', inject([DirectoryListService], (service: DirectoryListService) => {
    expect(service).toBeTruthy();
  }));
});