import { Action } from '@ngrx/store';

import { UserInterfaceState, INITIAL_UI_STATE } from '../models/ui.model';
import {
  SelectProcessAction,
  SELECT_PROCESS_ACTION,
} from '../actions/ui.actions';

import {
  ErrorOccurredAction,
  ERROR_OCCURRED_ACTION,

  SuccessOccurredAction,
  SUCCESS_OCCURRED_ACTION,

} from '../actions/store.actions';

export function uiReducer(state: UserInterfaceState = INITIAL_UI_STATE, action: Action): UserInterfaceState {
  switch (action.type) {
    case SELECT_PROCESS_ACTION:
      return handleSelectProcessAction(state, action);

    case ERROR_OCCURRED_ACTION:
      return handleErrorOccurredAction(state, action);

    case SUCCESS_OCCURRED_ACTION:
      return handleSuccessOccurredAction(state, action);

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

function handleErrorOccurredAction(state: UserInterfaceState, action: ErrorOccurredAction): UserInterfaceState {
  const newState = Object.assign({}, state);

  newState.currentError = action.payload;

  return newState;
}


function handleSuccessOccurredAction(state: UserInterfaceState, action: SuccessOccurredAction): UserInterfaceState {
  const newState = Object.assign({}, state);

  newState.currentSuccess = action.payload;

  return newState;
}
