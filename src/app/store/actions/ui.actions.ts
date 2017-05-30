import { Action } from '@ngrx/store';

export const SELECT_PROCESS_ACTION: string = 'SELECT_PROCESS_ACTION';
export const ERROR_OCCURRED_ACTION: string = 'ERROR_OCCURRED_ACTION';
export const SUCCESS_OCCURRED_ACTION: string = 'SUCCESS_OCCURRED_ACTION';

export class SelectProcessAction implements Action {
  readonly type = SELECT_PROCESS_ACTION;

  constructor(public payload?: number) { }
}

export class ErrorOccurredAction implements Action {
  readonly type = ERROR_OCCURRED_ACTION;

  constructor(public payload?: {}) { }
}

export class SuccessOccurredAction implements Action {
  readonly type = SUCCESS_OCCURRED_ACTION;

  constructor(public payload?: {}) { }
}
