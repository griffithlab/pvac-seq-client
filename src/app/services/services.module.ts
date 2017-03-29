import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ConfigService } from './config.service';
import { SwaggerApiService } from './swagger-api.service';
import { ProcessService } from './process.service';
import { InputService } from './input.service';

@NgModule({
  imports: [HttpModule],
  providers: [
    ConfigService,
    SwaggerApiService,
    ProcessService,
    InputService
  ]
})

export class ServicesModule { }
