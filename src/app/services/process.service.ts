import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as _ from 'lodash';

import { Process } from '../store/models/process.model';
import { ConfigService } from './config.service';

import { FlaskQueryEncoder } from './FlaskQueryEncoder';

@Injectable()
export class ProcessService {
  private api: string;

  constructor(
    private restangular: Restangular,
    private config: ConfigService,
  ) {
    this.api = config.apiUrl();
  }

  query(): Observable<Process[]> {
    return this.restangular
      .all('processes')
      .getList();
  }

  get(id: number): Observable<Process> {
    return this.restangular
      .one('processes', id)
      .get();
  }

  stage(process: Process): Observable<number> { // pvacseq-api returns new process ID
    const body = new URLSearchParams('', new FlaskQueryEncoder());

    const bodyArray = _.toPairs(process);
    bodyArray.map((field) => {
      body.append(field[0], field[1]);
    });

    return this.restangular
      .oneUrl('staging', this.api)
      .customPOST(
      body,
      'staging', // path
      undefined, // params
      { 'Content-Type': 'application/x-www-form-urlencoded' }
      );
  }

  archive(id: number): Observable<string> {
    return this.restangular
      .one('archive', id)
      .get();
  }
}
