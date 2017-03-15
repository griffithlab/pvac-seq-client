import { Action } from '@ngrx/store';
import { AppState } from '../models/app.model';

// TODO: keep an eye on the bug reports below and refactor to separate literals instead of map when fixed
// Due to TS 2.1+ bug with string literals, actions implemented as map instead of separate
// definitions. see: http://stackoverflow.com/questions/42035867/type-is-not-assignable-to-type-which-implements-it
// and https://github.com/Microsoft/TypeScript/issues/13580
export const PROCESS_ACTIONS = {
  LOAD_PROCESSES_ACTION: 'LOAD_PROCESSES_ACTION'
}

export class LoadProcessesAction implements Action {
  readonly type = PROCESS_ACTIONS.LOAD_PROCESSES_ACTION;

  constructor(public payload?: AppState) {

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
