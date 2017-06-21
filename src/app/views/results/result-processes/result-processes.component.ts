import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store/models/app.model';
import { ProcessSummary } from '../../../store/models/process.model';
import { mapProcessMapToProcessSummaries } from '../../../store/models/process.model';
import { LoadProcessesAction } from '../../../store/actions/store.actions';

@Component({
  selector: 'app-result-processes',
  templateUrl: './result-processes.component.html',
  styleUrls: ['./result-processes.component.scss']
})
export class ResultProcessesComponent implements OnInit {

  processSummaries$: Observable<ProcessSummary[]>;

  constructor(private store: Store<AppState>) {

    this.processSummaries$ = store
      .select(state => state.store.processes)
      .map(mapProcessMapToProcessSummaries);
  }

  loadProcesses(): void {
    this.store.dispatch(new LoadProcessesAction());
  }

  ngOnInit() {
    this.loadProcesses();
  }
}
