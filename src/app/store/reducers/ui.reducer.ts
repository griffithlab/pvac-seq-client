import { Action } from '@ngrx/store';

import { UserInterfaceState, INITIAL_UI_STATE } from '../models/ui.model';
import {
  SelectProcessAction,
  SELECT_PROCESS_ACTION,

  ServerRequestStartedAction,
  SERVER_REQUEST_STARTED_ACTION,

  ServerRequestCompletedAction,
  SERVER_REQUEST_COMPLETED_ACTION,

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

    case SERVER_REQUEST_STARTED_ACTION:
      return handleServerRequestStartedAction(state, action);

    case SERVER_REQUEST_COMPLETED_ACTION:
      return handleServerRequestCompletedAction(state, action);

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
  const errorResponse = action.payload;
  const newState = Object.assign({}, state);

  newState.currentError = errorResponse;

  return newState;
}

function handleSuccessOccurredAction(state: UserInterfaceState, action: SuccessOccurredAction): UserInterfaceState {
  const successResponse = action.payload;
  const newState = Object.assign({}, state);

  newState.currentSuccess = successResponse;

  return newState;
}

function handleServerRequestStartedAction(state: UserInterfaceState, action: ServerRequestStartedAction): UserInterfaceState {
  const newState = Object.assign({}, state);

  newState.serverRequestActive = true;

  return newState;
}

function handleServerRequestCompletedAction(state: UserInterfaceState, action: ServerRequestCompletedAction): UserInterfaceState {
  const newState = Object.assign({}, state);

  newState.serverRequestActive = false;

  return newState;
}
