import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RestangularModule, Restangular } from 'ngx-restangular';

import { ConfigService } from './config.service';
import { SwaggerApiService } from './swagger-api.service';
import { ProcessService } from './process.service';
import { InputService } from './input.service';
import { FileService } from './file.service';

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  const config = new ConfigService();
  RestangularProvider.setBaseUrl(config.apiUrl());
}


@NgModule({
  imports: [
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [
    ConfigService,
    SwaggerApiService,
    ProcessService,
    InputService,
    FileService,
  ]
})

export class ServicesModule { }
