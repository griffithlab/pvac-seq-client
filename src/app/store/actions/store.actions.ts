import { Action } from '@ngrx/store';
import { Process } from '../models/process.model';

// TODO: keep an eye on the bug reports below and refactor to separate literals instead of map when fixed.
// Due to TS 2.1+ bug with string literals, actions are implemented below as STORE_ACTIONS map instead of separate
// const definitions, which is more idiomatic.
// see: http://stackoverflow.com/questions/42035867/type-is-not-assignable-to-type-which-implements-it
// and https://github.com/Microsoft/TypeScript/issues/13580
export const STORE_ACTIONS = {
  LOAD_PROCESSES_ACTION: 'LOAD_PROCESSES_ACTION',
  LOAD_PROCESS_ACTION: 'LOAD_PROCESS_ACTION'
};

export const LOAD_PROCESSES_ACTION: string = 'LOAD_PROCESSES_ACTION';
export const LOAD_PROCESS_ACTION: string = 'LOAD_PROCESS_ACTION';

export class LoadProcessesAction implements Action {
  readonly type = LOAD_PROCESSES_ACTION;

  constructor(public payload?: Array<Process>) {

  }
}

export class LoadProcessAction implements Action {
  readonly type = LOAD_PROCESS_ACTION;

  constructor(public payload?: Process) {

  }
}
