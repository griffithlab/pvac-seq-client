import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { StoreState, INITIAL_STORE_STATE } from '../models/store.model';
import { LoadProcessesAction, LOAD_PROCESSES_ACTION } from '../actions/store.actions';

export function storeReducer(state: StoreState = INITIAL_STORE_STATE, action: Action): StoreState {
  switch (action.type) {
    case LOAD_PROCESSES_ACTION:
      return handleLoadProcessesAction(state, action);

    default:
      return state;
  }
};

function handleLoadProcessesAction(state: StoreState, action: LoadProcessesAction): StoreState {
  const processes = action.payload;
  const newState = Object.assign({}, state);

  newState.processes = _.keyBy(processes, 'id')

  return newState;
}
