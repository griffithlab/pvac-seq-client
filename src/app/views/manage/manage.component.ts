import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../services/process.service';

import { AppState } from '../../store/models/app.model';
import { Process } from '../../store/models/process.model';
import { LoadProcessesAction, STORE_ACTIONS } from '../../store/actions/store.actions';

@Component({
  templateUrl: 'manage.component.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ManageComponent implements OnInit {

  constructor(private store: Store<AppState>, private processService: ProcessService) {
    store.subscribe(
      state => console.log('manage component received state: ', state)
    );

  }

  ngOnInit() {
    this.processService.query()
      .subscribe(
      processes => this.store.dispatch(new LoadProcessesAction(processes))
      );
  }

  // reload() {
  //   this.processes.query();
  // }
}
