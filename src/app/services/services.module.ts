import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  HttpInterceptorModule,
  HttpInterceptorService
} from 'ng-http-interceptor';

import { RestangularModule } from 'ngx-restangular';

import { ConfigService } from './config.service';
import { SwaggerApiService } from './swagger-api.service';
import { ProcessService } from './process.service';
import { InputService } from './input.service';
import { FileService } from './file.service';

export function RestangularConfigFactory(RestangularProvider) {
  const config = new ConfigService();
  RestangularProvider.setBaseUrl(config.apiUrl());
}

@NgModule({
  imports: [
    HttpModule,
    HttpInterceptorModule,
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

export class ServicesModule {
  constructor(
    private httpInterceptor: HttpInterceptorService
  ) {

    httpInterceptor.request().addInterceptor((data, method) => {
      console.log(method, data);
      return data;
    });

    httpInterceptor.response().addInterceptor((res, method) => {
      return res.do(r => console.log(method, r));
    });
  }
}
