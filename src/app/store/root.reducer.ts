import { environment } from '../../environments/environment';

import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { storeFreeze } from "ngrx-store-freeze";
import { storeLogger } from "ngrx-store-logger";

import { AppState } from './models/app.model';
import * as fromStore from './reducers/store.reducer';
import * as fromUi from './reducers/ui.reducer';

const root = {
  ui: fromUi.uiReducer,
  processes: fromStore.storeReducer
}

const developmentReducer: ActionReducer<AppState> = compose(
  storeLogger(), // logs all state changes to console
  storeFreeze, // throws error if app state mutates
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
