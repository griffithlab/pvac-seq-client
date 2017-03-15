import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';

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
  processes = [];
  constructor(private store: Store<AppState>, private processService: ProcessService) {
    store.subscribe(
      (state) => {
        this.processes = _.valuesIn(state.store.processes);
      }
    );
  }

  ngOnInit() {
    this.loadProcesses();
  }

  loadProcesses() {
    this.processService.query()
      .subscribe(processes => this.store.dispatch(new LoadProcessesAction(processes)));
  }
}
