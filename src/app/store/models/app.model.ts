import { RouterState } from '@ngrx/router-store';
import { UserInterfaceState, INITIAL_UI_STATE } from './ui.model';
import { StoreState, INITIAL_STORE_STATE } from './store.model';

export interface AppState {
  ui: UserInterfaceState;
  store: StoreState;
  router: RouterState;
}

export const INITIAL_APPLICATION_STATE: AppState = {
  ui: INITIAL_UI_STATE,
  store: INITIAL_STORE_STATE,
  router: {
    path: '/start'
  }
}
