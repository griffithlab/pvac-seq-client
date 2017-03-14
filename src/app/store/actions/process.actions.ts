import { Action } from '@ngrx/store';
import { Process } from '../models/process.model';

export const LOAD_PROCESSES_ACTION = 'LOAD_PROCESSES_ACTION';

export class LoadProcessesAction implements Action {
  readonly type = LOAD_PROCESSES_ACTION;

  constructor(public payload: Array<Process>) {

  }
}

// export class ProcessActions {

//   static ADD_PROCESSES = 'ADD_PROCESSES';

//   constructor(private store: Store<AppState>) {

//   }

//   public addProcesses(processes) {
//     this.store.dispatch(createAction(ProcessActions.ADD_PROCESSES, processes));
//   }

//   // decrement() {
//   //   this.store.dispatch(createAction(CounterActions.DECREMENT));
//   // }

//   // reset() {
//   //   this.store.dispatch(createAction(CounterActions.RESET));
//   // }

// }
