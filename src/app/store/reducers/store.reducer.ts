import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import {
  StoreState,
  INITIAL_STORE_STATE,
  ServerRequest,
  ServerRequestMap,
  ServerResponse
} from '../models/store.model';

import { ProcessMap } from '../models/process.model';

import {
  ServerRequestStartedAction,
  SERVER_REQUEST_STARTED_ACTION,

  ServerRequestCompletedAction,
  SERVER_REQUEST_COMPLETED_ACTION,

  ClearCompletedServerRequestAction,
  CLEAR_COMPLETED_SERVER_REQUEST_ACTION,

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

    case CLEAR_COMPLETED_SERVER_REQUEST_ACTION:
      return handleClearCompletedServerRequestAction(state, action);

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
  const request: ServerRequest = action.payload;
  const newState = _.cloneDeep(state);
  newState.serverRequests[request.url] = request;
  return newState;
}

function handleServerRequestCompletedAction(state: StoreState, action: ServerRequestCompletedAction): StoreState {
  const response: ServerResponse = action.payload;
  const newState = _.cloneDeep(state);
  newState.serverRequests[response.url].response = response;
  newState.serverRequests[response.url].active = false;
  return newState;
}

function handleClearCompletedServerRequestAction(state: StoreState, action: ClearCompletedServerRequestAction): StoreState {
  const response: ServerResponse = action.payload;
  const newState = _.cloneDeep(state);

  newState.serverRequests = <ServerRequestMap>_.omit(newState.serverRequests, response.url);

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

  newState.processDetail = <ProcessMap>_.omit(state.processDetail, processId);

  return newState;
}

function handleInputsLoadedAction(state: StoreState, action: InputsLoadedAction): StoreState {
  const inputs = action.payload;
  const newState = Object.assign({}, state);

  newState.inputs = _.keyBy(inputs, 'fileID');

  return newState;
}
