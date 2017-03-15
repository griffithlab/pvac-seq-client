import { AppState } from '../models/app.model';
import { Action } from '@ngrx/store';

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
  return state;
}
