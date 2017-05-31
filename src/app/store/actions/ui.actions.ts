import { Action } from '@ngrx/store';

export const SELECT_PROCESS_ACTION: string = 'SELECT_PROCESS_ACTION';
export const SERVER_REQUEST_STARTED_ACTION: string = 'SERVER_REQUEST_STARTED_ACTION';
export const SERVER_REQUEST_COMPLETED_ACTION: string = 'SERVER_REQUEST_COMPLETED_ACTION';

export class SelectProcessAction implements Action {
  readonly type = SELECT_PROCESS_ACTION;

  constructor(public payload?: number) { }
}

export class ServerRequestStartedAction implements Action {
  readonly type = SERVER_REQUEST_STARTED_ACTION;

  constructor() { }
}

export class ServerRequestCompletedAction implements Action {
  readonly type = SERVER_REQUEST_COMPLETED_ACTION;

  constructor() { }
}
