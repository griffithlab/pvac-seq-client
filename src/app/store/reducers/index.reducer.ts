import { combineReducers } from '@ngrx/store';
import { processes, selectedProcess } from './process.reducer';

export const rootReducer = combineReducers({
  processes: processes,
  selectedProcess: selectedProcess
});
