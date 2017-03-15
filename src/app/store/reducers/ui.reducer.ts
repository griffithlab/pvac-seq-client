import { Action } from '@ngrx/store';

import { UserInterfaceState, INITIAL_UI_STATE } from '../models/ui.model';
import { SelectProcessAction, USER_INTERFACE_ACTIONS } from '../actions/ui.actions';

export function uiReducer(state: UserInterfaceState = INITIAL_UI_STATE, action: Action): UserInterfaceState {
  switch (action.type) {
    case USER_INTERFACE_ACTIONS.SELECT_PROCESS:
      return handleSelectProcessAction(state, action);

    default:
      return state;
  }
};

function handleSelectProcessAction(state: UserInterfaceState, action: SelectProcessAction): UserInterfaceState {
  const processId = action.payload;
  const newState = Object.assign({}, state);

  newState.selectedProcessId = processId;

  return newState;
}
