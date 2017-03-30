import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { StoreState, INITIAL_STORE_STATE } from '../models/store.model';
import {
  LoadProcessesAction,
  LOAD_PROCESSES_ACTION,
  LoadProcessAction,
  LOAD_PROCESS_ACTION,
  LoadInputsAction,
  LOAD_INPUTS_ACTION,
} from '../actions/store.actions';


export function storeReducer(state: StoreState = INITIAL_STORE_STATE, action: Action): StoreState {
  switch (action.type) {
    case LOAD_PROCESSES_ACTION:
      return handleLoadProcessesAction(state, action);

    case LOAD_PROCESS_ACTION:
      return handleLoadProcessAction(state, action);

    case LOAD_INPUTS_ACTION:
      return handleLoadInputsAction(state, action);

    default:
      return state;
  }
};

function handleLoadProcessesAction(state: StoreState, action: LoadProcessesAction): StoreState {
  const processes = action.payload;
  const newState = Object.assign({}, state);

  newState.processes = _.keyBy(processes, 'id');

  return newState;
}

function handleLoadProcessAction(state: StoreState, action: LoadProcessAction): StoreState {
  const process = action.payload;
  const newState = Object.assign({}, state);
  const newProcessDetail = Object.assign({}, state.processDetail);

  newProcessDetail[process.id] = process;
  newState.processDetail = newProcessDetail;

  return newState;
}

function handleLoadInputsAction(state: StoreState, action: LoadInputsAction): StoreState {
  const inputs = action.payload;
  const newState = Object.assign({}, state);

  newState.inputs = _.keyBy(inputs, 'fileID');

  return newState;
}
