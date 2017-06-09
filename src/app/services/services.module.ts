import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RestangularModule, Restangular } from 'ngx-restangular';

import { ConfigService } from './config.service';
import { SwaggerApiService } from './swagger-api.service';
import { ProcessService } from './process.service';
import { InputService } from './input.service';
import { FileService } from './file.service';

import { ServerRequest, ServerResponse } from '../store/models/store.model';
import {
  SERVER_REQUEST_STARTED_ACTION,
  SERVER_REQUEST_COMPLETED_ACTION
} from '../store/actions/store.actions';

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  const config = new ConfigService();
  RestangularProvider.setBaseUrl(config.apiUrl());

  RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
    // let bearerToken = authService.getBearerToken();
    // return {
    //   headers: Object.assign({}, headers, { Authorization: `Bearer ${bearerToken}` })
    // };
    console.log('FullRequestInterceptor');

    return {
      params: params,
      headers: headers,
      element: element
    };
  });
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
