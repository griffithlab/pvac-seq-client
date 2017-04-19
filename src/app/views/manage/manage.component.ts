import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/models/app.model';
import { Process, ProcessMap, ProcessSummaryVM } from '../../store/models/process.model';
import { LoadProcessesAction } from '../../store/actions/store.actions';

import { ProcessService } from '../../services/process.service';

@Component({
  templateUrl: 'manage.component.html',
  providers: []
})

export class ManageComponent implements OnInit {
  processes$: Observable<Process[]>;
  processSummaries$: Observable<ProcessSummaryVM[]>;

  constructor(private store: Store<AppState>) {
    this.processes$ = store
      .select(state => state.store.processes)
      .map(processMap => _.chain(processMap).valuesIn().map(p => p as Process).value());

    this.processSummaries$ = store
      .select(state => state.store.processes)
      .map(this.mapProcessMapToProcessSummaries);
  }

  // TODO: this kind of munging probably belongs in process.service
  mapProcessMapToProcessSummaries(processMap: ProcessMap): ProcessSummaryVM[] {
    const processes = _.valuesIn<Process>(processMap);
    return _.map(processes, (process) => {
      return {
        id: process.id,
        sample_name: process.parameters.sample_name,
        input_filename: _(process.parameters.input_file).split('/').last(),
        running: process.running,
        status: process.status,
        alleles: _.join(process.parameters.alleles, ', '),
        prediction_algorithms: _.join(process.parameters.prediction_algorithms, ', '),
        epitope_lengths: _.join(process.parameters.epitope_lengths, ', '),
        detail: process
      };
    });
  }

  loadProcesses(): void {
    this.store.dispatch(new LoadProcessesAction());
  }

  ngOnInit() {
    this.loadProcesses();
  }

}
