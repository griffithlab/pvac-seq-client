import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store/models/app.model';
import { Process, ProcessMap, ProcessSummaryVM } from '../../../store/models/process.model';
import { LoadProcessesAction } from '../../../store/actions/store.actions';

@Component({
  selector: 'app-result-processes',
  templateUrl: './result-processes.component.html',
  styleUrls: ['./result-processes.component.scss']
})
export class ResultProcessesComponent implements OnInit {

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

function mapProcessMapToProcessSummaries(processMap: ProcessMap): ProcessSummaryVM[] {
  const processes = _.chain(processMap)
    .valuesIn<Process>()
    .filter({ running: false })
    .value();

  return _.map(processes, (process) => {
    return {
      id: process.id,
      alleles: _.join(process.parameters.alleles, ', '),
      detail: process,
      epitope_lengths: _.join(process.parameters.epitope_lengths, ', '),
      file_count: _.size(process.files),
      input_filename: _(process.parameters.input).split('/').last(),
      prediction_algorithms: _.join(process.parameters.prediction_algorithms, ', '),
      running: process.running,
      samplename: process.parameters.samplename,
      status: process.status,
    };
  });
}
