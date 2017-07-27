import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { URLSearchParams, RequestMethod } from '@angular/http';

import { Resource, ResourceParams, ResourceAction, ResourceMethod } from 'ngx-resource';
import { Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as _ from 'lodash';

import { Process } from '../store/models/process.model';

import { FlaskQueryEncoder } from './FlaskQueryEncoder';

interface IProcessQueryParams {
  page?: number;
  perPage?: number;
}

interface IProcessGetParams {
  id: number;
}

interface IProcessArchiveParams {
  id: number;
}

@Injectable()
@ResourceParams({
  url: environment.apiEndpoint,
  pathPrefix: '/processes'
})
export class ProcessService extends Resource {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IProcessQueryParams, Process[]>;

  @ResourceAction({
    path: '/{!id}'
  })
  get: ResourceMethod<IProcessGetParams, Process>;

  @ResourceAction({
    path: '/archive/{!id}'
  })
  archive: ResourceMethod<IProcessArchiveParams, Process>;
}

// @Injectable()
// export class ProcessService {
//   private api: string;

//   constructor(
//     private restangular: Restangular,
//     private config: ConfigService,
//   ) {
//     this.api = config.apiUrl();
//   }

//   query(): Observable<Process[]> {
//     return this.restangular
//       .all('processes')
//       .getList();
//   }

//   get(id: number): Observable<Process> {
//     return this.restangular
//       .one('processes', id)
//       .get();
//   }

//   stage(process: Process, component?: string): Observable<number> { // pvacseq-api returns new process ID
//     const body = new URLSearchParams('', new FlaskQueryEncoder());
//     const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

//     if (component) { headers['X-Requesting-Component'] = component; };

//     const bodyArray = _.toPairs(process);
//     bodyArray.map((field) => {
//       body.append(field[0], field[1]);
//     });

//     return this.restangular
//       .oneUrl('staging', this.api)
//       .customPOST(
//       body,
//       'staging', // path
//       undefined, // params
//       headers
//       );
//   }

//   archive(id: number): Observable<string> {
//     return this.restangular
//       .one('archive', id)
//       .get();
//   }
// }
