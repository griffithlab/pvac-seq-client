import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import {
  UserInterfaceState,
  INITIAL_UI_STATE,
  Notice
} from '../models/ui.model';

import { Error } from '../models/store.model';

import {
  ErrorOccurredAction,
  ERROR_OCCURRED_ACTION,
} from '../actions/store.actions';

export function uiReducer(state: UserInterfaceState = INITIAL_UI_STATE, action: Action): UserInterfaceState {
  switch (action.type) {
    case ERROR_OCCURRED_ACTION:
      return handleErrorOccurredAction(state, action);

    default:
      return state;
  }
};

function handleErrorOccurredAction(state: UserInterfaceState, action: ErrorOccurredAction): UserInterfaceState {
  const error: Error = action.payload;
  const notice: Notice = {
    id: _.uniqueId('notice_'),
    severity: 'error',
    summary: error.summary,
    detail: error.detail
  }

  const newState = Object.assign({}, state);

  newState.notices[notice.id] = notice;

  return newState;
}
