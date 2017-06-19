import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/models/app.model';
import { Process, ProcessSummary } from '../../store/models/process.model';
import { mapProcessMapToProcessSummaries } from '../../store/models/process.model';

import { LoadProcessesAction } from '../../store/actions/store.actions';

@Component({
  templateUrl: 'manage.component.html',
  providers: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ManageComponent implements OnInit {
  processes$: Observable<Process[]>;
  processSummaries$: Observable<ProcessSummary[]>;

  constructor(private store: Store<AppState>) {
    this.processes$ = store
      .select(state => state.store.processes)
      .map((processMap) => {
        return _.chain(processMap).valuesIn().map(p => p as Process).value();
      });

    this.processSummaries$ = this.processes$
      .map(mapProcessMapToProcessSummaries);
  }

  // TODO: this kind of munging probably belongs in process.service

  loadProcesses(): void {
    this.store.dispatch(new LoadProcessesAction());
  }

  ngOnInit() {
    this.loadProcesses();
  }

}
