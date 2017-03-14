import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app.model';
import { Process } from '../store/models/process.model';
// import { ProcessActions } from '../store/actions/process.actions';

import { ConfigService } from './config.service';

@Injectable()
export class ProcessService {
  public items: Observable<Array<Process>>;
  public selected: Observable<Process>;
  private api: string;

  constructor(
    private http: Http,
    private config: ConfigService,
    private store: Store<AppState>,
    // private actions: ProcessActions
  ) {
    this.api = config.apiUrl();
    this.items = store.select('processes');
    this.selected = store.select('selectedProcess')
    // this.store.dispatch({ type: 'ADD_PROCESSES', payload: [] });
  }

  // fetch a list of all processes
  query() {
    return this.http.get(`${this.api}/processes`)
      .map(mapProcesses);
    // .catch(handleError);
    // .subscribe(
    // // success
    // processes => this.actions.addProcesses(processes),
    // // error
    // error => handleError(error)
    // );
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
