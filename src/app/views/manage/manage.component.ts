import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../services/process.service';

import * as _ from 'lodash';

import { AppState } from '../../store/models/app.model';
import { Process } from '../../store/models/process.model';
import { LoadProcessesAction } from '../../store/actions/store.actions';

@Component({
  templateUrl: 'manage.component.html',
  providers: []
})

export class ManageComponent implements OnInit {
  processes$: Observable<Process[]>;

  constructor(private store: Store<AppState>, private processService: ProcessService) {
    this.processes$ = store
      .map(this.mapStateToProcesses);
  }

  mapStateToProcesses(state: AppState): Process[] {
    return _.chain(state.store.processes)
      .valuesIn()
      .map(p => p as Process)
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
