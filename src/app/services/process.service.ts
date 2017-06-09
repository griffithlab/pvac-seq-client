import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

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
    private http: Http,
    private config: ConfigService,
  ) {
    this.api = config.apiUrl();
  }

  // fetch a list of all processes

  query(): Observable<Process[]> {
    return this.restangular
      .all('processes')
      .getList();
    // return this.http.get(`${this.api}/processes`)
    //   .map(mapProcesses);
  }

  get(id: number): Observable<Process> {
    return this.http.get(`${this.api}/processes/${id}`)
      .map(mapProcess);
  }

  stage(process: any): Observable<any> {
    const body = new URLSearchParams('', new FlaskQueryEncoder());

    const payloadArray = _.toPairs(process);
    payloadArray.map((field) => {
      body.append(field[0], field[1]);
    });

    return this.restangular
      .oneUrl('staging', this.api)
      .customPOST(
      body,
      'staging', // put your path here
      undefined, // params here, e.g. {format: "json"}
      { 'Content-Type': 'application/x-www-form-urlencoded' }
      );
  }

  archive(id: number): Observable<string> {
    return this.http.get(`${this.api}/archive/${id}`)
      .map((response: Response) => {
        return response.statusText;
      });
  }
}

function mapProcesses(res: Response): Process[] {
  return res.json().map(toProcess);
}

function mapProcess(res: Response): Process {
  return toProcess(res.json());
}

function toProcess(p: any): Process {
  p.status.toString();
  return p as Process;
}

function handleError(error: any) {
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
