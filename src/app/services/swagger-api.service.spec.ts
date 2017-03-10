/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwaggerApiService } from './swagger-api.service';

describe('SwaggerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwaggerApiService]
    });
  });

  it('should ...', inject([SwaggerApiService], (service: SwaggerApiService) => {
    expect(service).toBeTruthy();
  }));
});
