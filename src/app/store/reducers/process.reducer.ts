import { AppState } from '../models/app.model';
import { Action } from '@ngrx/store';

import { keyBy } from 'lodash';

import { LoadProcessesAction, PROCESS_ACTIONS } from '../actions/process.actions';

export function processReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case PROCESS_ACTIONS.LOAD_PROCESSES_ACTION:
      return handleLoadProcessesAction(state, action);

    default:
      return state;
  }
};

function handleLoadProcessesAction(state: AppState, action: LoadProcessesAction): AppState {
  const processes = action.payload;
  const newState = Object.assign({}, state);

  newState.store = {
    processes: keyBy(processes, 'id')
  }

  return newState;
}
