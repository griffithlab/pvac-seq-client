import { Action } from '@ngrx/store';
import { Process } from '../models/process.model';
import { File } from '../models/store.model';

// TODO: keep an eye on the bug reports below and refactor to separate literals instead of map when fixed.
// Due to TS 2.1+ bug with string literals, actions are implemented below as STORE_ACTIONS map instead of separate
// const definitions, which is more idiomatic.
// see: http://stackoverflow.com/questions/42035867/type-is-not-assignable-to-type-which-implements-it
// and https://github.com/Microsoft/TypeScript/issues/13580
export const STORE_ACTIONS = {
  LOAD_PROCESSES_ACTION: 'LOAD_PROCESSES_ACTION',
  PROCESSES_LOADED_ACTION: 'PROCESSES_LOADED_ACTION',

  LOAD_PROCESS_ACTION: 'LOAD_PROCESS_ACTION',
  PROCESS_LOADED_ACTION: 'PROCESS_LOADED_ACTION',

  ARCHIVE_PROCESS_ACTION: 'ARCHIVE_PROCESS_ACTION',
  CLEAR_PROCESS_DETAILS: 'CLEAR_PROCESS_DETAILS',

  LOAD_INPUTS_ACTION: 'LOAD_INPUTS_ACTION',
  INPUTS_LOADED_ACTION: 'INPUTS_LOADED_ACTION',

  START_PROCESS_ACTION: 'START_PROCESS_ACTION',
  PROCESS_STARTED_ACTION: 'PROCESS_STARTED_ACTION',

  LOAD_FILES_ACTION: 'LOAD_FILES_ACTION',
  FILES_LOADED_ACTION: 'FILES_LOADED_ACTION',

  ERROR_OCCURRED_ACTION: 'ERROR_OCCURRED_ACTION',
};

export const LOAD_PROCESSES_ACTION: string = 'LOAD_PROCESSES_ACTION';
export const PROCESSES_LOADED_ACTION: string = 'PROCESSES_LOADED_ACTION';

export const LOAD_PROCESS_ACTION: string = 'LOAD_PROCESS_ACTION';
export const PROCESS_LOADED_ACTION: string = 'PROCESS_LOADED_ACTION';

export const ARCHIVE_PROCESS_ACTION: string = 'ARCHIVE_PROCESS_ACTION';
export const CLEAR_PROCESS_DETAILS: string = 'CLEAR_PROCESS_DETAILS';

export const LOAD_INPUTS_ACTION: string = 'LOAD_INPUTS_ACTION';
export const INPUTS_LOADED_ACTION: string = 'INPUTS_LOADED_ACTION';

export const START_PROCESS_ACTION: string = 'START_PROCESS_ACTION';
export const PROCESS_STARTED_ACTION: string = 'PROCESS_STARTED_ACTION';

export const LOAD_FILES_ACTION: string = 'LOAD_FILES_ACTION';
export const FILES_LOADED_ACTION: string = 'FILES_LOADED_ACTION';

export const ERROR_OCCURRED_ACTION: string = 'ERROR_OCCURRED_ACTION';

export class LoadProcessesAction implements Action {
  readonly type = LOAD_PROCESSES_ACTION;

  constructor() { }
}

export class ProcessesLoadedAction implements Action {
  readonly type = PROCESSES_LOADED_ACTION;

  constructor(public payload?: Process[]) { }
}

export class LoadProcessAction implements Action {
  readonly type = LOAD_PROCESS_ACTION;

  constructor(public payload?: number) { }
}

export class ProcessLoadedAction implements Action {
  readonly type = PROCESS_LOADED_ACTION;

  constructor(public payload?: Process) { }
}

export class LoadInputsAction implements Action {
  readonly type = LOAD_INPUTS_ACTION;

  constructor() { }
}

export class InputsLoadedAction implements Action {
  readonly type = INPUTS_LOADED_ACTION;

  constructor(public payload?: File[]) { }
}

export class ArchiveProcessAction implements Action {
  readonly type = ARCHIVE_PROCESS_ACTION;

  constructor(public payload?: number) { }
}

export class ClearProcessDetailsAction implements Action {
  readonly type = CLEAR_PROCESS_DETAILS;

  constructor(public payload?: string) { }
}

export class StartProcessAction implements Action {
  readonly type = START_PROCESS_ACTION;

  constructor(public payload?: {}) { }
}

export class ProcessStartedAction implements Action {
  readonly type = PROCESS_STARTED_ACTION;

  constructor(public payload?: number) { }
}

export class ErrorOccurredAction implements Action {
  readonly type = ERROR_OCCURRED_ACTION;

  constructor(public payload?: string) { }
}

export class LoadFilesAction implements Action {
  readonly type = LOAD_FILES_ACTION;

  constructor(public payload?: number) { }
}

export class FilesLoadedAction implements Action {
  readonly type = FILES_LOADED_ACTION;

  constructor(public payload?: File[]) { }
}
