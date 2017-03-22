import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../services/process.service';

import { AppState } from '../../store/models/app.model';
import { Process } from '../../store/models/process.model';
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

  constructor(private store: Store<AppState>, private processService: ProcessService) {
    this.processes$ = store
      .map(mapStateToProcesses);

    this.runningProcesses$ = store
      .map(mapStateToRunningProcesses);
  }

  loadProcesses() {
    this.processService.query()
      .subscribe(processes => this.store.dispatch(new LoadProcessesAction(processes)));
  }

  ngOnInit() {
    this.loadProcesses();
  }

}
