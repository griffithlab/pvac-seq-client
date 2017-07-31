import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  HttpInterceptorModule,
  HttpInterceptorService
} from 'ng-http-interceptor';

import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app.model';
import { ServerRequest, ServerResponse } from '../store/models/store.model';
import {
  ServerRequestStartedAction,
  ServerRequestCompletedAction
} from '../store/actions/store.actions';

import { RestangularModule } from 'ngx-restangular';

import { ConfigService } from './config.service';
import { SwaggerApiService } from './swagger-api.service';
import { ProcessResource, ProcessService } from './process.service';
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
    ProcessResource,
    ProcessService,
    InputService,
    FileService,
  ]
})

export class ServicesModule {
  constructor(
    private store: Store<AppState>,
    private httpInterceptor: HttpInterceptorService,
  ) {

    httpInterceptor.request(/\/api\//).addInterceptor((data, method) => {
      const request = data[0];

      const serverRequest: ServerRequest = {
        url: request.url,
        method: request.method,
        component: request.headers.get('x-requesting-component'),
        active: true,
        response: {
          ok: undefined,
          url: undefined,
          status: undefined,
          statusText: undefined
        }
      };
      this.store.dispatch(new ServerRequestStartedAction(serverRequest));
      return data;
    });

    httpInterceptor.response(/\/api\//).addInterceptor((response, method) => {
      // const response: ServerResponse = {

      // };
      return response.do((res) => {
        console.log(method, res);
        const serverResponse: ServerResponse = {
          ok: res.ok,
          url: res.url,
          status: res.status,
          statusText: res.statusText,
        };
        this.store.dispatch(new ServerRequestCompletedAction(serverResponse));
      });
    });
  }
}
