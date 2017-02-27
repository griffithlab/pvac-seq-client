/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwaggerSchemaService } from './swagger-schema.service';

describe('SwaggerSchemaService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SwaggerSchemaService]
        });
    });

    it('should ...', inject([SwaggerSchemaService], (service: SwaggerSchemaService) => {
        expect(service).toBeTruthy();
    }));
});
