import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { StoreState, INITIAL_STORE_STATE } from '../models/store.model';
import {
  ProcessesLoadedAction,
  PROCESSES_LOADED_ACTION,

  ProcessLoadedAction,
  PROCESS_LOADED_ACTION,

  ProcessArchivedAction,
  PROCESS_ARCHIVED_ACTION,

  LoadInputsAction,
  LOAD_INPUTS_ACTION,
} from '../actions/store.actions';


export function storeReducer(state: StoreState = INITIAL_STORE_STATE, action: Action): StoreState {
  switch (action.type) {
    case PROCESSES_LOADED_ACTION:
      return handleProcessesLoadedAction(state, action);

    case PROCESS_LOADED_ACTION:
      return handleProcessLoadedAction(state, action);

    case PROCESS_ARCHIVED_ACTION:
      return handleProcessArchivedAction(state, action);

    case LOAD_INPUTS_ACTION:
      return handleLoadInputsAction(state, action);

    default:
      return state;
  }
};

function handleProcessesLoadedAction(state: StoreState, action: ProcessesLoadedAction): StoreState {
  const processes = action.payload;
  const newState = Object.assign({}, state);

  newState.processes = _.keyBy(processes, 'id');

  return newState;
}

function handleProcessLoadedAction(state: StoreState, action: ProcessLoadedAction): StoreState {
  const process = action.payload;
  const newState = Object.assign({}, state);
  const newProcessDetail = Object.assign({}, state.processDetail);

  newProcessDetail[process.id] = process;
  newState.processDetail = newProcessDetail;

  return newState;
}

function handleProcessArchivedAction(state: StoreState, action: ProcessArchivedAction): StoreState {
  const processId = action.payload;
  const newState = Object.assign({}, state);
  const newProcessDetail = Object.assign({}, _.omit(state.processDetail, processId)); // omit archived process details

  newState.processDetail = newProcessDetail;

  return newState;
}

function handleLoadInputsAction(state: StoreState, action: LoadInputsAction): StoreState {
  const inputs = action.payload;
  const newState = Object.assign({}, state);

  newState.inputs = _.keyBy(inputs, 'fileID');

  return newState;
}
