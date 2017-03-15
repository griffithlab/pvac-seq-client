import { Action } from '@ngrx/store';

export const USER_INTERFACE_ACTIONS = {
  SELECT_PROCESS: 'SELECT_PROCESS'
}

export class SelectProcessAction implements Action {
  readonly type = USER_INTERFACE_ACTIONS.SELECT_PROCESS;

  constructor(public payload?: number) {

  }
}
