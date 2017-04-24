import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/models/app.model';
import { Process, ProcessMap, ProcessSummaryVM } from '../../store/models/process.model';
import { LoadProcessesAction } from '../../store/actions/store.actions';

@Component({
  templateUrl: 'results.component.html',
  providers: []
})

export class ResultsComponent implements OnInit {
  processSummaries$: Observable<ProcessSummaryVM[]>;

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

// TODO: this kind of munging probably belongs in process.service
function mapProcessMapToProcessSummaries(processMap: ProcessMap): ProcessSummaryVM[] {
  const processes = _.valuesIn<Process>(processMap);
  return _.map(processes, (process) => {
    return {
      id: process.id,
      samplename: process.parameters.samplename,
      input_filename: _(process.parameters.input).split('/').last(),
      running: process.running,
      status: process.status,
      alleles: _.join(process.parameters.alleles, ', '),
      prediction_algorithms: _.join(process.parameters.prediction_algorithms, ', '),
      epitope_lengths: _.join(process.parameters.epitope_lengths, ', '),
      detail: process
    };
  });
}
