import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { StoreState, INITIAL_STORE_STATE } from '../models/store.model';
import { ProcessMap } from '../models/process.model';

import {
  ServerRequestStartedAction,
  SERVER_REQUEST_STARTED_ACTION,

  ServerRequestCompletedAction,
  SERVER_REQUEST_COMPLETED_ACTION,

  ProcessesLoadedAction,
  PROCESSES_LOADED_ACTION,

  ProcessLoadedAction,
  PROCESS_LOADED_ACTION,

  ClearProcessDetailsAction,
  CLEAR_PROCESS_DETAILS,

  FilesLoadedAction,
  FILES_LOADED_ACTION,

  InputsLoadedAction,
  INPUTS_LOADED_ACTION,
} from '../actions/store.actions';


export function storeReducer(state: StoreState = INITIAL_STORE_STATE, action: Action): StoreState {
  switch (action.type) {
    case SERVER_REQUEST_STARTED_ACTION:
      return handleServerRequestStartedAction(state, action);

    case SERVER_REQUEST_COMPLETED_ACTION:
      return handleServerRequestCompletedAction(state, action);

    case PROCESSES_LOADED_ACTION:
      return handleProcessesLoadedAction(state, action);

    case PROCESS_LOADED_ACTION:
      return handleProcessLoadedAction(state, action);

    case CLEAR_PROCESS_DETAILS:
      return handleClearProcessDetailsAction(state, action);

    case INPUTS_LOADED_ACTION:
      return handleInputsLoadedAction(state, action);

    case FILES_LOADED_ACTION:
      return handleFilesLoadedAction(state, action);

    default:
      return state;
  }
};
function handleServerRequestStartedAction(state: StoreState, action: ServerRequestStartedAction): StoreState {
  const newState = Object.assign({}, state);

  // newState.serverRequestActive = true;

  return newState;
}

function handleServerRequestCompletedAction(state: StoreState, action: ServerRequestCompletedAction): StoreState {
  const newState = Object.assign({}, state);

  // newState.serverRequestActive = false;

  return newState;
}

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

function handleFilesLoadedAction(state: StoreState, action: FilesLoadedAction): StoreState {
  const files = action.payload.files;
  const processId = action.payload.processId;

  const newState = Object.assign({}, state);
  const newFileList = Object.assign({}, state.fileList);

  newFileList[processId] = _.keyBy(files, 'fileID');
  newState.fileList = newFileList;

  return newState;
}

function handleClearProcessDetailsAction(state: StoreState, action: ClearProcessDetailsAction): StoreState {
  const processId = action.payload;
  const newState = _.cloneDeep(state);
  const newProcessDetail = Object.assign({}, _.omit(state.processDetail, processId)); // omit archived process details

  newState.processDetail = <ProcessMap>_.omit(state.processDetail, processId);

  return newState;
}

function handleInputsLoadedAction(state: StoreState, action: InputsLoadedAction): StoreState {
  const inputs = action.payload;
  const newState = Object.assign({}, state);

  newState.inputs = _.keyBy(inputs, 'fileID');

  return newState;
}
