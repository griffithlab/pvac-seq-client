import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Process } from '../models/process';

import { ConfigService } from './config.service';

@Injectable()
export class ProcessService {

  private api: string;

  constructor(private http: Http, private config: ConfigService) {
    console.log('API URL: ' + config.apiUrl());
    this.api = config.apiUrl();
  }

  // fetch a list of all processes
  query() {
    return this.http
      .get(this.api + '/processes')
      .map(mapProcesses)
      .do((data) => {
        console.log('process service data:')
        console.log(data);
      })
      .catch(handleError);
  }
}

function mapProcesses(res: Response) {
  return res.json().map(toProcess)
}

function toProcess(p: any) {
  let process = p as Process;
  console.log('Parsed process:', process);
  return process;
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
