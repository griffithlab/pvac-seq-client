import { Action } from '@ngrx/store';

export const SELECT_PROCESS_ACTION: string = 'SELECT_PROCESS_ACTION';

export class SelectProcessAction implements Action {
  readonly type = SELECT_PROCESS_ACTION;

  constructor(public payload?: number) { }
}
