import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../services/process.service';

import * as _ from 'lodash';

import { AppState } from '../../store/models/app.model';
import { Process, ProcessMap } from '../../store/models/process.model';
import { LoadProcessesAction } from '../../store/actions/store.actions';

@Component({
  templateUrl: 'manage.component.html',
  providers: []
})

export class ManageComponent implements OnInit {
  processes$: Observable<Process[]>;
  runningProcesses$: Observable<number>;

  constructor(private store: Store<AppState>, private processService: ProcessService) {
    this.processes$ = store
      .map(this.mapStateToProcesses);

    this.runningProcesses$ = store
      .map(this.mapStateToRunningProcesses);
  }

  mapStateToProcesses(state: AppState): Process[] {
    return _.chain<ProcessMap>(state.store.processes)
      .valuesIn()
      .map(p => p as Process)
      .value();
  }

  mapStateToRunningProcesses(state: AppState): number {
    return _.chain<ProcessMap>(state.store.processes)
      .valuesIn()
      .reduce((acc: number, process: Process) => {
        return process.attached ? acc + 1 : acc;
      }, 0)
      .value();
  }

  loadProcesses() {
    this.processService.query()
      .subscribe(processes => this.store.dispatch(new LoadProcessesAction(processes)));
  }

  ngOnInit() {
    this.loadProcesses();
  }


}
