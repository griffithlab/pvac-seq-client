import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Process } from '../store/models/process.model';

import { ConfigService } from './config.service';

@Injectable()
export class ProcessService {
  private api: string;

  constructor(
    private http: Http,
    private config: ConfigService,
  ) {
    this.api = config.apiUrl();
  }

  // fetch a list of all processes

  query(): Observable<Process[]> {
    return this.http.get(`${this.api}/processes`)
      .map(mapProcesses);
  }

  get(id: number): Observable<Process> {
    return this.http.get(`${this.api}/processes/${id}`)
      .map(mapProcess);
  }

  // TODO: probably need to handle this with ngrx-effects
  archive(id: number): Observable<Response> {
    return this.http.get(`${this.api}/archive/${id}`);
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
