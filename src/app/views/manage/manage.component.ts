import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../services/process.service';

import * as _ from 'lodash';

import { AppState } from '../../store/models/app.model';
import { Process, ProcessSummaryVM } from '../../store/models/process.model';
import { LoadProcessesAction } from '../../store/actions/store.actions';

import { mapStateToProcesses } from './mapStateToProcesses';
import { mapStateToRunningProcesses } from './mapStateToRunningProcesses';

@Component({
  templateUrl: 'manage.component.html',
  providers: []
})

export class ManageComponent implements OnInit {
  processes$: Observable<Process[]>;
  runningProcesses$: Observable<number>;
  processSummaries$: Observable<ProcessSummaryVM[]>;

  constructor(private store: Store<AppState>, private processService: ProcessService) {
    this.processes$ = store
      .map(mapStateToProcesses);

    this.runningProcesses$ = store
      .map(mapStateToRunningProcesses);

    this.processSummaries$ = store.select(
      (state) => {
        const processes = _.valuesIn<Process>(state.store.processes);
        return _.map(processes, (process) => {
          return {
            id: process.id,
            sample_name: process.parameters.sample_name,
            input_filename: _(process.parameters.input_file).split('/').last(),
            running: process.running,
            alleles: _.join(process.parameters.alleles, ', '),
            prediction_algorithms: _.join(process.parameters.prediction_algorithms, ', '),
            epitope_lengths: _.join(process.parameters.epitope_lengths, ', '),
            detail: process
          };
        });
      }
    );
  }

  loadProcesses() {
    this.processService.query()
      .subscribe(processes => this.store.dispatch(new LoadProcessesAction(processes)));
  }

  ngOnInit() {
    this.loadProcesses();
  }

}
