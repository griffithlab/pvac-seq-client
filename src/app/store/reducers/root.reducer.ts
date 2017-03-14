import { environment } from '../../../environments/environment';

import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { storeFreeze } from "ngrx-store-freeze";
import { storeLogger } from "ngrx-store-logger";

import { AppState } from '../models/app.model';
import * as fromProcesses from './process.reducer';
import * as fromUi from './ui.reducer';

const root = {
  ui: fromUi.ui,
  processes: fromProcesses.processes
}

const developmentReducer: ActionReducer<AppState> = compose(
  storeLogger(),
  storeFreeze,
  combineReducers
)(root);

const productionReducer: ActionReducer<AppState> = combineReducers(root);

export function rootReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
