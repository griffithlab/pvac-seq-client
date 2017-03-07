import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Store } from '@ngrx/store';

import { AppState } from '../store/models/app.model';
import { Process } from '../store/models/process.model';

import { ConfigService } from './config.service';

@Injectable()
export class ProcessService {
  public processes: Observable<Array<Process>>;
  private api: string;

  constructor(private http: Http,
    private config: ConfigService,
    private store: Store<AppState>) {
    this.api = config.apiUrl();
  }

  // fetch a list of all processes
  query() {
    return this.http
      .get(this.api + '/processes')
      .map(mapProcesses)
      // .do((data) => {
      //   console.log('process service data:')
      //   console.log(data);
      // })
      .catch(handleError);
  }
}

function mapProcesses(res: Response) {
  return res.json().map(toProcess)
}

function toProcess(p: any) {
  let process = p as Process;
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
