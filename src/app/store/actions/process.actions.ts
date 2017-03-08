import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { createAction } from '../createAction';
import { AppState } from '../models/app.model';

@Injectable()
export class ProcessActions {

  static ADD_PROCESSES = 'ADD_PROCESSES';

  constructor(private store: Store<AppState>) {

  }

  public addProcesses(processes) {
    this.store.dispatch(createAction(ProcessActions.ADD_PROCESSES, processes));
  }

  // decrement() {
  //   this.store.dispatch(createAction(CounterActions.DECREMENT));
  // }

  // reset() {
  //   this.store.dispatch(createAction(CounterActions.RESET));
  // }

}
