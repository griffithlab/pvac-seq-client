import { NgModule } from '@angular/core';

import { ConfigService } from './config.service';
import { SwaggerApiService } from './swagger-api.service';

@NgModule({
  providers: [ConfigService, SwaggerApiService]
})

export class ServicesModule { }
