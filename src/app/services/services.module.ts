import { NgModule } from '@angular/core';

import { ConfigService } from './config.service';
import { SwaggerApiService } from './swagger-api.service';
import { ProcessService } from './process.service';

@NgModule({
  providers: [ConfigService,
              SwaggerApiService,
              ProcessService]
})

export class ServicesModule { }
