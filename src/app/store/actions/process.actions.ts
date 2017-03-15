import { Action } from '@ngrx/store';
import { AppState } from '../models/app.model';
import { Process } from '../models/process.model';

// TODO: keep an eye on the bug reports below and refactor to separate literals instead of map when fixed.
// Due to TS 2.1+ bug with string literals, actions are implemented below as PROCESS_ACTIONS map instead of separate
// const definitions, which is more idiomatic.
// see: http://stackoverflow.com/questions/42035867/type-is-not-assignable-to-type-which-implements-it
// and https://github.com/Microsoft/TypeScript/issues/13580
export const PROCESS_ACTIONS = {
  LOAD_PROCESSES_ACTION: 'LOAD_PROCESSES_ACTION'
}

export class LoadProcessesAction implements Action {
  readonly type = PROCESS_ACTIONS.LOAD_PROCESSES_ACTION;

  constructor(public payload?: Array<Process>) {

  }
}
